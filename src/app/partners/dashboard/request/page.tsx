"use client";

import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { getAuth } from "firebase/auth";
import { collection, query, where, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Script from "next/script";
import { YEARS, MAKES, MODELS_BY_MAKE } from "@/data/vehicleOptions";
import { quoteWithTravel, quoteWithBreakdown, initializePricing } from "@/lib/pricing-client";
import { DISPATCH_BASE_ADDRESS } from "@/lib/dispatchBase";
import Link from "next/link";

// Toast notification types
type ToastType = "success" | "error" | "warning" | "info";
type Toast = {
  id: number;
  message: string;
  type: ToastType;
};

export default function RequestTowPage() {
  const [partnerData, setPartnerData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [requestType, setRequestType] = useState<"asap" | "scheduled">("asap");
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [partnerCommission, setPartnerCommission] = useState<number | null>(null);
  const [calculatingPrice, setCalculatingPrice] = useState(false);
  const [priceError, setPriceError] = useState("");
  const [pricingReady, setPricingReady] = useState(false);

  // Toast notifications
  const [toasts, setToasts] = useState<Toast[]>([]);
  const toastIdRef = useRef(0);

  // Validation errors
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  // Track if form has unsaved changes
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showUnsavedModal, setShowUnsavedModal] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<string | null>(null);

  // Distance tracking
  const [baseCoords, setBaseCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [baseTravelMilesRounded, setBaseTravelMilesRounded] = useState<number | null>(null);
  const [distanceMilesRounded, setDistanceMilesRounded] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    customerName: "",
    customerPhone: "",
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleColor: "",
    pickupLocation: "",
    dropoffLocation: "",
    serviceType: "Local Towing",
    reason: "",
    notes: "",
  });

  // Initial form state for comparison
  const initialFormState = useRef({
    customerName: "",
    customerPhone: "",
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleColor: "",
    pickupLocation: "",
    dropoffLocation: "",
    serviceType: "Local Towing",
    reason: "",
    notes: "",
  });

  // Google Places Autocomplete refs
  const inputRefPickup = useRef<HTMLInputElement | null>(null);
  const autocompletePickupRef = useRef<google.maps.places.Autocomplete | null>(null);
  const inputRefDropoff = useRef<HTMLInputElement | null>(null);
  const autocompleteDropoffRef = useRef<google.maps.places.Autocomplete | null>(null);

  // Toast notification helper
  const showToast = useCallback((message: string, type: ToastType = "info") => {
    const id = ++toastIdRef.current;
    setToasts(prev => [...prev, { id, message, type }]);
    // Auto-dismiss after 4 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  }, []);

  // Remove toast manually
  const dismissToast = useCallback((id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  // Form validation
  const validateForm = useCallback(() => {
    const errors: Record<string, string> = {};

    if (!formData.customerPhone.trim()) {
      errors.customerPhone = "Customer phone is required";
    }
    if (!formData.vehicleYear) {
      errors.vehicleYear = "Vehicle year is required";
    }
    if (!formData.vehicleMake) {
      errors.vehicleMake = "Vehicle make is required";
    }
    if (!formData.vehicleModel) {
      errors.vehicleModel = "Vehicle model is required";
    }
    if (!formData.pickupLocation.trim()) {
      errors.pickupLocation = "Pickup location is required";
    }
    if (!formData.dropoffLocation.trim()) {
      errors.dropoffLocation = "Drop-off location is required";
    }
    if (requestType === "scheduled") {
      if (!scheduledDate) {
        errors.scheduledDate = "Scheduled date is required";
      }
      if (!scheduledTime) {
        errors.scheduledTime = "Scheduled time is required";
      }
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  }, [formData, requestType, scheduledDate, scheduledTime]);

  // Clear validation error when field is edited
  const clearFieldError = useCallback((fieldName: string) => {
    if (validationErrors[fieldName]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  }, [validationErrors]);

  // Check for unsaved changes
  useEffect(() => {
    const hasChanges =
      formData.customerName !== initialFormState.current.customerName ||
      formData.customerPhone !== initialFormState.current.customerPhone ||
      formData.vehicleYear !== initialFormState.current.vehicleYear ||
      formData.vehicleMake !== initialFormState.current.vehicleMake ||
      formData.vehicleModel !== initialFormState.current.vehicleModel ||
      formData.pickupLocation !== initialFormState.current.pickupLocation;

    setHasUnsavedChanges(hasChanges);
  }, [formData]);

  // Warn before leaving with unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [hasUnsavedChanges]);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchPartnerData(user.uid);
      } else {
        setLoading(false);
      }
    });

    initializePricing()
      .then(() => setPricingReady(true))
      .catch((error) => {
        console.error("Failed to initialize pricing:", error);
        setPriceError("Unable to load pricing.");
      });

    return () => unsubscribe();
  }, []);

  // Geocode base address
  useEffect(() => {
    if (!window.google?.maps?.Geocoder || baseCoords) return;
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: DISPATCH_BASE_ADDRESS }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK && results?.[0]?.geometry?.location) {
        const loc = results[0].geometry.location;
        setBaseCoords({ lat: loc.lat(), lng: loc.lng() });
      }
    });
  }, [baseCoords]);

  const fetchPartnerData = async (userId: string) => {
    try {
      const partnersRef = collection(db, "partners");
      const q = query(partnersRef, where("userId", "==", userId));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const partnerDoc = querySnapshot.docs[0];
        const partnerDocData = partnerDoc.data();
        const partner = {
          id: partnerDoc.id,
          ...partnerDocData,
        };
        setPartnerData(partner);

        // Pre-fill dropoff with partner's shop and update initial state
        const partnerAddress = (partnerDocData.address as string) || "";
        setFormData(prev => ({
          ...prev,
          dropoffLocation: partnerAddress,
        }));
        initialFormState.current.dropoffLocation = partnerAddress;
      }
    } catch (error) {
      console.error("Error fetching partner data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Initialize Google Places Autocomplete
  const initAutocompleteFor = useCallback((which: "pickup" | "dropoff") => {
    if (!window.google?.maps?.places) return;

    if (which === "pickup") {
      if (!inputRefPickup.current || autocompletePickupRef.current) return;
      const ac = new window.google.maps.places.Autocomplete(inputRefPickup.current, {
        types: ["address"],
        componentRestrictions: { country: ["us"] },
        fields: ["formatted_address", "geometry"],
      });
      ac.addListener("place_changed", () => {
        const place = ac.getPlace();
        if (place?.formatted_address) {
          const address = place.formatted_address;
          setFormData(prev => ({ ...prev, pickupLocation: address }));
          clearFieldError("pickupLocation");
        }
      });
      autocompletePickupRef.current = ac;
    } else {
      if (!inputRefDropoff.current || autocompleteDropoffRef.current) return;
      const ac = new window.google.maps.places.Autocomplete(inputRefDropoff.current, {
        types: ["address"],
        componentRestrictions: { country: ["us"] },
        fields: ["formatted_address", "geometry"],
      });
      ac.addListener("place_changed", () => {
        const place = ac.getPlace();
        if (place?.formatted_address) {
          const address = place.formatted_address;
          setFormData(prev => ({ ...prev, dropoffLocation: address }));
          clearFieldError("dropoffLocation");
        }
      });
      autocompleteDropoffRef.current = ac;
    }
  }, [clearFieldError]);

  useEffect(() => {
    if (window.google?.maps?.places) {
      initAutocompleteFor("pickup");
      initAutocompleteFor("dropoff");
    }
  }, [initAutocompleteFor]);

  const modelsForMake = useMemo(() => {
    const make = formData.vehicleMake.trim();
    if (!make) return [];
    if (MODELS_BY_MAKE[make]) return MODELS_BY_MAKE[make];
    const keyNorm = make.toLowerCase().replace(/\s+/g, "");
    for (const [k, v] of Object.entries(MODELS_BY_MAKE)) {
      if (k.toLowerCase().replace(/\s+/g, "") === keyNorm) return v;
    }
    return [];
  }, [formData.vehicleMake]);

  const isTowing = useMemo(
    () => formData.serviceType === "Local Towing" || formData.serviceType === "Long-Distance Towing",
    [formData.serviceType]
  );

  // Calculate travel distance
  useEffect(() => {
    if (!formData.pickupLocation || !baseCoords) return;
    if (!window.google?.maps?.DirectionsService) return;

    const directions = new google.maps.DirectionsService();
    directions.route(
      {
        origin: new google.maps.LatLng(baseCoords.lat, baseCoords.lng),
        destination: formData.pickupLocation,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status !== google.maps.DirectionsStatus.OK || !result) return;
        const meters = result.routes[0].legs.reduce((sum, leg) => sum + (leg.distance?.value ?? 0), 0);
        setBaseTravelMilesRounded(Math.ceil(meters / 1609.344));
      }
    );
  }, [formData.pickupLocation, baseCoords]);

  // Calculate tow distance
  useEffect(() => {
    if (!isTowing) return;
    if (!formData.pickupLocation || !formData.dropoffLocation) return;
    if (!window.google?.maps?.DirectionsService) return;

    const directions = new google.maps.DirectionsService();
    directions.route(
      {
        origin: formData.pickupLocation,
        destination: formData.dropoffLocation,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status !== google.maps.DirectionsStatus.OK || !result) return;
        const meters = result.routes[0].legs.reduce((sum, leg) => sum + (leg.distance?.value ?? 0), 0);
        setDistanceMilesRounded(Math.ceil(meters / 1609.344));
      }
    );
  }, [isTowing, formData.pickupLocation, formData.dropoffLocation]);

  // Price calculation
  useEffect(() => {
    if (!pricingReady || !formData.serviceType) return;
    setCalculatingPrice(true);

    try {
      let price = 0;
      if (isTowing && distanceMilesRounded != null && baseTravelMilesRounded != null) {
        const breakdown = quoteWithTravel(formData.serviceType, distanceMilesRounded, baseTravelMilesRounded);
        price = breakdown.base;
      } else if (!isTowing && baseTravelMilesRounded != null) {
        const breakdown = quoteWithTravel(formData.serviceType, undefined, baseTravelMilesRounded);
        price = breakdown.base;
      } else {
        const breakdown = quoteWithBreakdown(formData.serviceType);
        price = breakdown.base;
      }

      setEstimatedPrice(price);
      if (partnerData?.commissionRate) {
        setPartnerCommission((price * partnerData.commissionRate) / 100);
      }
      setPriceError("");
    } catch (error: any) {
      setPriceError("Unable to calculate.");
      setEstimatedPrice(null);
      setPartnerCommission(null);
    } finally {
      setCalculatingPrice(false);
    }
  }, [pricingReady, formData.serviceType, isTowing, distanceMilesRounded, baseTravelMilesRounded, partnerData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "vehicleMake") {
      setFormData(prev => ({ ...prev, [name]: value, vehicleModel: "" }));
      clearFieldError("vehicleMake");
      clearFieldError("vehicleModel");
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      clearFieldError(name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerData) return;

    // Validate form before submitting
    if (!validateForm()) {
      showToast("Please fix the errors below", "error");
      return;
    }

    setIsSubmitting(true);

    const isScheduled = requestType === "scheduled";

    try {
      const towRequest: any = {
        partnerId: partnerData.id,
        partnerName: partnerData.companyName,
        partnerPhone: partnerData.phone,
        partnerEmail: partnerData.email,
        customerName: formData.customerName,
        customerPhone: formData.customerPhone,
        vehicleYear: formData.vehicleYear,
        vehicleMake: formData.vehicleMake,
        vehicleModel: formData.vehicleModel,
        vehicleColor: formData.vehicleColor,
        serviceType: formData.serviceType,
        reason: formData.reason,
        pickupLocation: formData.pickupLocation,
        dropoffLocation: formData.dropoffLocation,
        notes: formData.notes,
        status: isScheduled ? "scheduled" : "pending",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        commissionRate: partnerData.commissionRate,
        partnerCommissionPaid: false,
      };

      if (isScheduled && scheduledDate && scheduledTime) {
        towRequest.scheduledDate = scheduledDate;
        towRequest.scheduledTime = scheduledTime;
      }

      await addDoc(collection(db, "live_jobs"), towRequest);
      setSubmitted(true);
      setHasUnsavedChanges(false);
      showToast("Request submitted successfully!", "success");

      // Reset form
      setFormData({
        customerName: "",
        customerPhone: "",
        vehicleYear: "",
        vehicleMake: "",
        vehicleModel: "",
        vehicleColor: "",
        pickupLocation: "",
        dropoffLocation: partnerData.address || "",
        serviceType: "Local Towing",
        reason: "",
        notes: "",
      });
      setRequestType("asap");
      setScheduledDate("");
      setScheduledTime("");
    } catch (error) {
      console.error("Error:", error);
      showToast("Error submitting. Please call (858) 999-9293.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  // Handle navigation with unsaved changes check
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (hasUnsavedChanges) {
      e.preventDefault();
      setPendingNavigation(href);
      setShowUnsavedModal(true);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-slate-500 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Request Submitted!</h2>
          <p className="text-slate-600 mb-8">
            We&apos;ll contact your customer shortly.
          </p>
          {partnerCommission && (
            <div className="bg-emerald-50 rounded-2xl p-4 mb-6">
              <p className="text-sm text-emerald-700 font-medium">Estimated Commission</p>
              <p className="text-3xl font-bold text-emerald-600">${partnerCommission.toFixed(2)}</p>
            </div>
          )}
          <button
            onClick={() => setSubmitted(false)}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  const serviceTypes = [
    "Local Towing",
    "Long-Distance Towing",
    "Battery Jump Start",
    "Lockout Service",
    "Flat Tire Change",
    "Fuel Delivery",
    "Winch-Out Service",
  ];

  return (
    <>
      {/* Toast Notifications */}
      <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg backdrop-blur-sm animate-[slideIn_0.3s_ease-out] ${
              toast.type === "success" ? "bg-emerald-500/95 text-white" :
              toast.type === "error" ? "bg-red-500/95 text-white" :
              toast.type === "warning" ? "bg-amber-500/95 text-white" :
              "bg-blue-500/95 text-white"
            }`}
          >
            {toast.type === "success" && (
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            )}
            {toast.type === "error" && (
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
              </svg>
            )}
            {toast.type === "warning" && (
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
              </svg>
            )}
            {toast.type === "info" && (
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
            )}
            <span className="font-medium text-sm">{toast.message}</span>
            <button
              onClick={() => dismissToast(toast.id)}
              className="ml-2 hover:opacity-70 transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
        ))}
      </div>

      {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && (
        <Script
          id="google-maps-places"
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&v=weekly`}
          strategy="afterInteractive"
          onLoad={() => {
            if (window.google?.maps?.places) {
              initAutocompleteFor("pickup");
              initAutocompleteFor("dropoff");
            }
          }}
        />
      )}

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Personalized Header */}
        <div className="bg-gradient-to-r from-[#1e1e4a] to-[#2d2d6a] text-white">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-200 text-sm font-medium mb-1">{getGreeting()}</p>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                  {partnerData?.companyName || "Partner"}
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/partners/dashboard"
                  onClick={(e) => handleNavigation(e, "/partners/dashboard")}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  href="/partners/dashboard/settings"
                  onClick={(e) => handleNavigation(e, "/partners/dashboard/settings")}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
                  title="Settings"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 mt-5">
              <div className="bg-white/10 backdrop-blur rounded-xl p-3 text-center">
                <p className="text-2xl font-bold">{partnerData?.totalReferrals || 0}</p>
                <p className="text-xs text-blue-200">Referrals</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-3 text-center">
                <p className="text-2xl font-bold">${(partnerData?.totalCommissionEarned || 0).toFixed(0)}</p>
                <p className="text-xs text-blue-200">Earned</p>
              </div>
              <div className="bg-emerald-500/20 backdrop-blur rounded-xl p-3 text-center border border-emerald-400/30">
                <p className="text-2xl font-bold text-emerald-300">{partnerData?.commissionRate || 10}%</p>
                <p className="text-xs text-emerald-200">Your Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 mt-4 pb-8">
          {/* Request Form Card */}
          <div className="bg-white rounded-3xl shadow-xl border-2 border-slate-300 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/>
                    </svg>
                    New Request
                  </h2>
                  <p className="text-blue-100 text-sm mt-1">This is a tow request for your customer</p>
                </div>
                <div className="flex bg-white/20 rounded-xl p-1">
                  <button
                    type="button"
                    onClick={() => setRequestType("asap")}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      requestType === "asap"
                        ? "bg-white text-blue-600 shadow-md"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    ASAP Service
                  </button>
                  <button
                    type="button"
                    onClick={() => setRequestType("scheduled")}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      requestType === "scheduled"
                        ? "bg-white text-blue-600 shadow-md"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    Schedule Call
                  </button>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Schedule Date/Time - Only show when scheduled is selected */}
              {requestType === "scheduled" && (
                <div className={`bg-blue-50 border-2 rounded-2xl p-4 ${
                  validationErrors.scheduledDate || validationErrors.scheduledTime
                    ? "border-red-300"
                    : "border-blue-200"
                }`}>
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-semibold text-blue-800">Schedule Details</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-blue-700 mb-1">Date *</label>
                      <input
                        type="date"
                        value={scheduledDate}
                        onChange={(e) => {
                          setScheduledDate(e.target.value);
                          clearFieldError("scheduledDate");
                        }}
                        min={new Date().toISOString().split("T")[0]}
                        className={`w-full h-11 rounded-xl border-2 px-3 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 ${
                          validationErrors.scheduledDate ? "border-red-400 bg-red-50" : "border-blue-200"
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-blue-700 mb-1">Time *</label>
                      <input
                        type="time"
                        value={scheduledTime}
                        onChange={(e) => {
                          setScheduledTime(e.target.value);
                          clearFieldError("scheduledTime");
                        }}
                        className={`w-full h-11 rounded-xl border-2 px-3 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 ${
                          validationErrors.scheduledTime ? "border-red-400 bg-red-50" : "border-blue-200"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Customer + Vehicle Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Customer Phone *</label>
                  <input
                    type="tel"
                    name="customerPhone"
                    value={formData.customerPhone}
                    onChange={handleInputChange}
                    className={`w-full h-12 rounded-xl border-2 px-4 text-lg focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition ${
                      validationErrors.customerPhone ? "border-red-400 bg-red-50/50" : "border-slate-200"
                    }`}
                    placeholder="(858) 123-4567"
                  />
                  {validationErrors.customerPhone && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                      </svg>
                      {validationErrors.customerPhone}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Customer Name</label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    className="w-full h-12 rounded-xl border-2 border-slate-200 px-4 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition"
                    placeholder="Optional"
                  />
                </div>
              </div>

              {/* Vehicle Info - Compact */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Vehicle *</label>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <select
                      name="vehicleYear"
                      value={formData.vehicleYear}
                      onChange={handleInputChange}
                      className={`w-full h-12 rounded-xl border-2 px-3 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 ${
                        validationErrors.vehicleYear ? "border-red-400 bg-red-50/50" : "border-slate-200"
                      }`}
                    >
                      <option value="">Year</option>
                      {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>
                  <div>
                    <select
                      name="vehicleMake"
                      value={formData.vehicleMake}
                      onChange={handleInputChange}
                      className={`w-full h-12 rounded-xl border-2 px-3 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 ${
                        validationErrors.vehicleMake ? "border-red-400 bg-red-50/50" : "border-slate-200"
                      }`}
                    >
                      <option value="">Make</option>
                      {MAKES.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                  <div>
                    <select
                      name="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={handleInputChange}
                      disabled={!formData.vehicleMake}
                      className={`w-full h-12 rounded-xl border-2 px-3 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 disabled:bg-slate-50 ${
                        validationErrors.vehicleModel ? "border-red-400 bg-red-50/50" : "border-slate-200"
                      }`}
                    >
                      <option value="">{formData.vehicleMake ? "Model" : "Select Make"}</option>
                      {modelsForMake.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                </div>
                {(validationErrors.vehicleYear || validationErrors.vehicleMake || validationErrors.vehicleModel) && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                    </svg>
                    Please select vehicle year, make, and model
                  </p>
                )}
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Service *</label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-xl border-2 border-slate-200 px-4 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500"
                >
                  {serviceTypes.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              {/* Locations */}
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Pickup Location *</label>
                  <input
                    ref={inputRefPickup}
                    type="text"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    className={`w-full h-12 rounded-xl border-2 px-4 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 ${
                      validationErrors.pickupLocation ? "border-red-400 bg-red-50/50" : "border-slate-200"
                    }`}
                    placeholder="Where is the vehicle?"
                    autoComplete="off"
                  />
                  {validationErrors.pickupLocation && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                      </svg>
                      {validationErrors.pickupLocation}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Drop-off <span className="text-slate-400 font-normal">(Your Shop)</span>
                  </label>
                  <input
                    ref={inputRefDropoff}
                    type="text"
                    name="dropoffLocation"
                    value={formData.dropoffLocation}
                    onChange={handleInputChange}
                    className={`w-full h-12 rounded-xl border-2 px-4 bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 ${
                      validationErrors.dropoffLocation ? "border-red-400 bg-red-50/50" : "border-slate-200"
                    }`}
                    autoComplete="off"
                  />
                  {validationErrors.dropoffLocation && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                      </svg>
                      {validationErrors.dropoffLocation}
                    </p>
                  )}
                </div>
              </div>

              {/* Price Display */}
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Estimated Price</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {calculatingPrice ? "..." : estimatedPrice ? `$${estimatedPrice.toFixed(0)}` : "—"}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-emerald-600 font-medium">Your Commission</p>
                    <p className="text-2xl font-bold text-emerald-600">
                      {calculatingPrice ? "..." : partnerCommission ? `$${partnerCommission.toFixed(0)}` : "—"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition disabled:opacity-50"
              >
                {isSubmitting
                  ? "Submitting..."
                  : requestType === "scheduled"
                    ? "Schedule Request"
                    : "Request Now"
                }
              </button>
            </form>
          </div>

          {/* Quick Help */}
          <div className="mt-6 text-center">
            <a href="tel:+18589999293" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span className="text-sm font-medium">Need help? (858) 999-9293</span>
            </a>
          </div>
        </div>

        {/* Unsaved Changes Modal */}
        {showUnsavedModal && (
          <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Unsaved Changes</h3>
              </div>
              <p className="text-slate-600 mb-6">
                You have unsaved changes. Are you sure you want to leave?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowUnsavedModal(false);
                    setPendingNavigation(null);
                  }}
                  className="flex-1 py-2.5 rounded-xl font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition"
                >
                  Stay
                </button>
                <button
                  onClick={() => {
                    setShowUnsavedModal(false);
                    setHasUnsavedChanges(false);
                    if (pendingNavigation) {
                      window.location.href = pendingNavigation;
                    }
                  }}
                  className="flex-1 py-2.5 rounded-xl font-semibold text-white bg-red-500 hover:bg-red-600 transition"
                >
                  Leave
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

declare global {
  interface Window {
    google: typeof google;
  }
}
