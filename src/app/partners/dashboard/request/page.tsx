"use client";

import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { getAuth } from "firebase/auth";
import { collection, query, where, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Script from "next/script";
import { YEARS, MAKES, MODELS_BY_MAKE, COLORS } from "@/data/vehicleOptions";
import { quoteWithBreakdownAsync, fetchConfig, quoteWithTravel, quoteWithBreakdown, addTravel, initializePricing } from "@/lib/pricing-client";
import { DISPATCH_BASE_ADDRESS } from "@/lib/dispatchBase";

export default function RequestTowPage() {
  const [partnerData, setPartnerData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [partnerCommission, setPartnerCommission] = useState<number | null>(null);
  const [calculatingPrice, setCalculatingPrice] = useState(false);
  const [priceError, setPriceError] = useState("");
  const [pricingReady, setPricingReady] = useState(false);

  // Distance tracking (like PopupAddress)
  const [baseCoords, setBaseCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [baseTravelMilesRounded, setBaseTravelMilesRounded] = useState<number | null>(null);
  const [distanceMilesRounded, setDistanceMilesRounded] = useState<number | null>(null);
  const [pickupCoords, setPickupCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [dropoffCoords, setDropoffCoords] = useState<{ lat: number; lng: number } | null>(null);
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

  // Google Places Autocomplete refs
  const inputRefPickup = useRef<HTMLInputElement | null>(null);
  const autocompletePickupRef = useRef<google.maps.places.Autocomplete | null>(null);
  const inputRefDropoff = useRef<HTMLInputElement | null>(null);
  const autocompleteDropoffRef = useRef<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    const auth = getAuth();

    // Listen for auth state changes to get the current user
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchPartnerData(user.uid);
      } else {
        setLoading(false);
      }
    });

    // Initialize pricing config
    initializePricing()
      .then(() => {
        setPricingReady(true);
      })
      .catch((error) => {
        console.error("Failed to initialize pricing from Firebase:", error);
        setPriceError(error.message || "Unable to load pricing. Please call (858) 999-9293.");
      });

    return () => unsubscribe();
  }, []);

  // Geocode base address when Google Maps loads
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
        const partner = {
          id: partnerDoc.id,
          ...partnerDoc.data(),
        };
        setPartnerData(partner);

        // Pre-fill dropoff location with partner's shop address
        setFormData(prev => ({
          ...prev,
          dropoffLocation: partner.address || "",
        }));
      } else {
        console.error("No partner found for userId:", userId);
        alert("Partner account not found. Please contact support at (858) 999-9293.");
      }
    } catch (error) {
      console.error("Error fetching partner data:", error);
      alert("Error loading partner data. Please refresh the page or contact support at (858) 999-9293.");
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
          setFormData(prev => ({ ...prev, pickupLocation: place.formatted_address }));
        }
        if (place?.geometry?.location) {
          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();
          setPickupCoords({ lat, lng });
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
          setFormData(prev => ({ ...prev, dropoffLocation: place.formatted_address }));
        }
        if (place?.geometry?.location) {
          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();
          setDropoffCoords({ lat, lng });
        }
      });
      autocompleteDropoffRef.current = ac;
    }
  }, []);

  // Initialize autocomplete when Google Maps API loads
  useEffect(() => {
    if (window.google?.maps?.places) {
      initAutocompleteFor("pickup");
      initAutocompleteFor("dropoff");
    }
  }, [initAutocompleteFor]);

  // Get models for selected make
  const modelsForMake = useMemo(() => {
    const make = formData.vehicleMake.trim();
    if (!make) return [];
    if (MODELS_BY_MAKE[make]) return MODELS_BY_MAKE[make];

    // Try case-insensitive match
    const keyNorm = make.toLowerCase().replace(/\s+/g, "");
    for (const [k, v] of Object.entries(MODELS_BY_MAKE)) {
      const kn = k.toLowerCase().replace(/\s+/g, "");
      if (kn === keyNorm) return v;
    }
    return [];
  }, [formData.vehicleMake]);

  // Determine if current service is towing
  const isTowing = useMemo(
    () => formData.serviceType === "Local Towing" || formData.serviceType === "Long-Distance Towing",
    [formData.serviceType]
  );

  // Calculate base → pickup travel distance
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
        const miles = meters / 1609.344;
        const rounded = Math.ceil(miles);
        setBaseTravelMilesRounded(rounded);
      }
    );
  }, [formData.pickupLocation, baseCoords]);

  // Calculate pickup → dropoff tow distance (for towing services only)
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
        const miles = meters / 1609.344;
        const rounded = Math.ceil(miles);
        setDistanceMilesRounded(rounded);
      }
    );
  }, [isTowing, formData.pickupLocation, formData.dropoffLocation]);

  // Price calculation: Non-towing services (roadside + travel)
  useEffect(() => {
    if (!pricingReady) return;
    if (isTowing) return;
    if (!formData.serviceType) return;

    setCalculatingPrice(true);
    setPriceError("");

    try {
      // For non-towing, calculate base price + travel when we have pickup and travel distance
      if (formData.pickupLocation && baseTravelMilesRounded != null) {
        const breakdown = quoteWithTravel(formData.serviceType, undefined, baseTravelMilesRounded);
        setEstimatedPrice(breakdown.base);

        // Calculate partner commission WITHOUT online discount
        if (partnerData?.commissionRate) {
          const commission = (breakdown.base * partnerData.commissionRate) / 100;
          setPartnerCommission(commission);
        }
      } else {
        // Just show base service price
        const breakdown = quoteWithBreakdown(formData.serviceType);
        setEstimatedPrice(breakdown.base);

        if (partnerData?.commissionRate) {
          const commission = (breakdown.base * partnerData.commissionRate) / 100;
          setPartnerCommission(commission);
        }
      }
      setPriceError("");
    } catch (error: any) {
      console.error("Pricing calculation error:", error);
      setPriceError(error.message || "Unable to calculate pricing. Please call (858) 999-9293.");
      setEstimatedPrice(null);
      setPartnerCommission(null);
    } finally {
      setCalculatingPrice(false);
    }
  }, [pricingReady, isTowing, formData.serviceType, formData.pickupLocation, baseTravelMilesRounded, partnerData]);

  // Price calculation: Towing INTERIM (hook-up + travel, before destination)
  useEffect(() => {
    if (!pricingReady) return;
    if (!isTowing) return;
    if (!formData.serviceType) return;
    if (!formData.pickupLocation) return;
    if (baseTravelMilesRounded == null) return;
    if (formData.dropoffLocation && distanceMilesRounded != null) return; // Full calc will override

    setCalculatingPrice(true);
    setPriceError("");

    try {
      // Show hook-up + travel (before dropoff is selected)
      const baseBreakdown = quoteWithBreakdown(formData.serviceType, 0); // 0 miles for just hook-up
      const temp = addTravel(baseBreakdown, baseTravelMilesRounded);
      setEstimatedPrice(temp.base);

      if (partnerData?.commissionRate) {
        const commission = (temp.base * partnerData.commissionRate) / 100;
        setPartnerCommission(commission);
      }
      setPriceError("");
    } catch (error: any) {
      console.error("Pricing calculation error:", error);
      setPriceError(error.message || "Unable to calculate pricing. Please call (858) 999-9293.");
      setEstimatedPrice(null);
      setPartnerCommission(null);
    } finally {
      setCalculatingPrice(false);
    }
  }, [
    pricingReady,
    isTowing,
    formData.serviceType,
    formData.pickupLocation,
    baseTravelMilesRounded,
    formData.dropoffLocation,
    distanceMilesRounded,
    partnerData,
  ]);

  // Price calculation: Towing FINAL (hook-up + tow distance + travel)
  useEffect(() => {
    if (!pricingReady) return;
    if (!isTowing) return;
    if (!formData.serviceType) return;
    if (!formData.pickupLocation || !formData.dropoffLocation) return;
    if (distanceMilesRounded == null) return;
    if (baseTravelMilesRounded == null) return;

    setCalculatingPrice(true);
    setPriceError("");

    try {
      const breakdown = quoteWithTravel(formData.serviceType, distanceMilesRounded, baseTravelMilesRounded);
      setEstimatedPrice(breakdown.base);

      if (partnerData?.commissionRate) {
        const commission = (breakdown.base * partnerData.commissionRate) / 100;
        setPartnerCommission(commission);
      }
      setPriceError("");
    } catch (error: any) {
      console.error("Pricing calculation error:", error);
      setPriceError(error.message || "Unable to calculate pricing. Please call (858) 999-9293.");
      setEstimatedPrice(null);
      setPartnerCommission(null);
    } finally {
      setCalculatingPrice(false);
    }
  }, [
    pricingReady,
    isTowing,
    formData.serviceType,
    formData.pickupLocation,
    formData.dropoffLocation,
    distanceMilesRounded,
    baseTravelMilesRounded,
    partnerData,
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Reset model when make changes
    if (name === "vehicleMake") {
      setFormData(prev => ({ ...prev, [name]: value, vehicleModel: "" }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent, scheduled = false) => {
    e.preventDefault();

    // Validate partner data exists
    if (!partnerData) {
      alert("Partner data not loaded. Please refresh the page and try again.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create the tow request in Firestore
      const towRequest: any = {
        // Partner Information
        partnerId: partnerData.id,
        partnerName: partnerData.companyName,
        partnerPhone: partnerData.phone,
        partnerEmail: partnerData.email,

        // Customer Information
        customerName: formData.customerName,
        customerPhone: formData.customerPhone,

        // Vehicle Information
        vehicleYear: formData.vehicleYear,
        vehicleMake: formData.vehicleMake,
        vehicleModel: formData.vehicleModel,
        vehicleColor: formData.vehicleColor,

        // Service Details
        serviceType: formData.serviceType,
        reason: formData.reason,
        pickupLocation: formData.pickupLocation,
        dropoffLocation: formData.dropoffLocation, // Can be edited by partner
        notes: formData.notes,

        // Status and Metadata
        status: scheduled ? "scheduled" : "pending",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),

        // Commission tracking
        commissionRate: partnerData.commissionRate,
        partnerCommissionPaid: false,
      };

      // Add scheduled date/time if this is a scheduled request
      if (scheduled && scheduledDate && scheduledTime) {
        towRequest.scheduledDate = scheduledDate;
        towRequest.scheduledTime = scheduledTime;
        towRequest.scheduledDateTime = `${scheduledDate} ${scheduledTime}`;
      }

      const docRef = await addDoc(collection(db, "live_jobs"), towRequest);
      console.log("Tow request created with ID:", docRef.id);

      setSubmitted(true);
      setShowScheduleModal(false);
      setScheduledDate("");
      setScheduledTime("");

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
    } catch (error: any) {
      console.error("Error creating tow request:", error);
      alert("Error submitting request. Please try again or call (858) 999-9293.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScheduleClick = (e: React.FormEvent) => {
    e.preventDefault();
    setShowScheduleModal(true);
  };

  const handleScheduleSubmit = (e: React.FormEvent) => {
    if (!scheduledDate || !scheduledTime) {
      alert("Please select both date and time for the scheduled tow.");
      return;
    }
    handleSubmit(e, true);
  };

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Your tow request has been successfully submitted. Our dispatch team will process it shortly and contact your customer.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setSubmitted(false)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Submit Another Request
            </button>
            <a
              href="/partners/dashboard/referrals"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              View My Referrals
            </a>
          </div>
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
    "Collision Recovery",
  ];

  return (
    <>
      {/* Load Google Maps API */}
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

      <div className="p-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">Request a Tow</h1>
                {partnerData?.membershipTier && (
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold ${
                    partnerData.membershipTier?.toLowerCase() === 'platinum'
                      ? 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-900 shadow-lg'
                      : partnerData.membershipTier?.toLowerCase() === 'gold'
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 shadow-lg'
                      : partnerData.membershipTier?.toLowerCase() === 'silver'
                      ? 'bg-gradient-to-r from-slate-300 to-slate-400 text-slate-900 shadow-lg'
                      : 'bg-blue-100 text-blue-900'
                  }`}>
                    ✦ {partnerData.membershipTier}
                  </span>
                )}
              </div>
              <p className="text-gray-600 hidden md:block">Submit a towing request for your customer. The vehicle will be towed to your shop.</p>
            </div>
            {partnerData && (
              <div className="hidden md:block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg">
                <div className="text-xs font-semibold uppercase tracking-wide opacity-90">Commission Rate</div>
                <div className="text-3xl font-bold">{partnerData.commissionRate}%</div>
              </div>
            )}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
        {/* Customer Information */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
            </svg>
            Customer Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="customerName" className="block text-sm font-semibold text-gray-700 mb-2">
                Customer Name
              </label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
                className="w-full h-12 rounded-lg border-2 border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="customerPhone" className="block text-sm font-semibold text-gray-700 mb-2">
                Customer Phone (Required)
              </label>
              <input
                type="tel"
                id="customerPhone"
                name="customerPhone"
                required
                value={formData.customerPhone}
                onChange={handleInputChange}
                className="w-full h-12 rounded-lg border-2 border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500"
                placeholder="(858) 123-4567"
              />
            </div>
          </div>
        </div>

        {/* Vehicle Information */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
            </svg>
            Vehicle Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="vehicleYear" className="block text-sm font-semibold text-gray-700 mb-2">
                Year *
              </label>
              <select
                id="vehicleYear"
                name="vehicleYear"
                required
                value={formData.vehicleYear}
                onChange={handleInputChange}
                className="w-full h-12 rounded-lg border-2 border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500"
              >
                <option value="">Select Year</option>
                {YEARS.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="vehicleMake" className="block text-sm font-semibold text-gray-700 mb-2">
                Make *
              </label>
              <select
                id="vehicleMake"
                name="vehicleMake"
                required
                value={formData.vehicleMake}
                onChange={handleInputChange}
                className="w-full h-12 rounded-lg border-2 border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500"
              >
                <option value="">Select Make</option>
                {MAKES.map((make) => (
                  <option key={make} value={make}>{make}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="vehicleModel" className="block text-sm font-semibold text-gray-700 mb-2">
                Model *
              </label>
              <select
                id="vehicleModel"
                name="vehicleModel"
                required
                value={formData.vehicleModel}
                onChange={handleInputChange}
                disabled={!formData.vehicleMake || modelsForMake.length === 0}
                className="w-full h-12 rounded-lg border-2 border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                <option value="">
                  {!formData.vehicleMake ? "Select Make First" : modelsForMake.length === 0 ? "No Models Available" : "Select Model"}
                </option>
                {modelsForMake.map((model) => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="vehicleColor" className="block text-sm font-semibold text-gray-700 mb-2">
                Color (Optional)
              </label>
              <select
                id="vehicleColor"
                name="vehicleColor"
                value={formData.vehicleColor}
                onChange={handleInputChange}
                className="w-full h-12 rounded-lg border-2 border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500"
              >
                <option value="">Select Color (Optional)</option>
                {COLORS.map((color) => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
            </svg>
            Service Details
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-lg border-2 border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500"
                >
                  {serviceTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-semibold text-gray-700 mb-2">
                  Reason for Towing (Optional)
                </label>
                <input
                  type="text"
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-lg border-2 border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500"
                  placeholder="e.g., Breakdown, Accident, etc."
                />
              </div>
            </div>

            <div>
              <label htmlFor="pickupLocation" className="block text-sm font-semibold text-gray-700 mb-2">
                Pickup Location * (Where is the vehicle now?)
              </label>
              <input
                ref={inputRefPickup}
                type="text"
                id="pickupLocation"
                name="pickupLocation"
                required
                value={formData.pickupLocation}
                onChange={handleInputChange}
                className="w-full h-12 rounded-lg border-2 border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500"
                placeholder="123 Main St, San Diego, CA 92101"
                autoComplete="off"
              />
            </div>

            <div>
              <label htmlFor="dropoffLocation" className="block text-sm font-semibold text-gray-700 mb-2">
                Drop-off Location (Your Shop) *
              </label>
              <input
                ref={inputRefDropoff}
                type="text"
                id="dropoffLocation"
                name="dropoffLocation"
                required
                value={formData.dropoffLocation}
                onChange={handleInputChange}
                className="w-full h-12 rounded-lg border-2 border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500"
                placeholder="123 Main St, San Diego, CA 92101"
                autoComplete="off"
              />
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Notes (Optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={2}
                className="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-base focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500"
                placeholder="Any additional information about the vehicle or situation..."
              />
            </div>

            {/* Price Display Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="estimatedPrice" className="block text-sm font-semibold text-gray-700 mb-2">
                  Estimated Price
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="estimatedPrice"
                    readOnly
                    value={calculatingPrice ? "Calculating..." : estimatedPrice !== null ? `$${estimatedPrice.toFixed(2)}` : priceError || "Select service to see price"}
                    className={`w-full h-12 rounded-lg border-2 px-4 text-base font-semibold ${
                      estimatedPrice !== null
                        ? "border-green-300 bg-green-50 text-green-900"
                        : calculatingPrice
                        ? "border-blue-300 bg-blue-50 text-blue-700"
                        : "border-gray-200 bg-gray-50 text-gray-500"
                    }`}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Total service price</p>
              </div>

              <div>
                <label htmlFor="partnerCommission" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Commission ({partnerData?.commissionRate || 0}%)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="partnerCommission"
                    readOnly
                    value={calculatingPrice ? "Calculating..." : partnerCommission !== null ? `$${partnerCommission.toFixed(2)}` : priceError || "Select service to see commission"}
                    className={`w-full h-12 rounded-lg border-2 px-4 text-base font-semibold ${
                      partnerCommission !== null
                        ? "border-emerald-400 bg-emerald-50 text-emerald-900"
                        : calculatingPrice
                        ? "border-blue-300 bg-blue-50 text-blue-700"
                        : "border-gray-200 bg-gray-50 text-gray-500"
                    }`}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Your referral earnings</p>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2 justify-center">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Submitting Request...
              </span>
            ) : (
              "Request Now"
            )}
          </button>

          <button
            type="button"
            onClick={handleScheduleClick}
            disabled={isSubmitting}
            className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-500/50 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
            </svg>
            Schedule for Later
          </button>
        </div>
      </form>

      {/* Schedule Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Schedule Tow Service</h3>
              <button
                onClick={() => setShowScheduleModal(false)}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </button>
            </div>

            <p className="text-gray-600 mb-6">
              Select the date and time when you would like the tow service to be performed.
            </p>

            <div className="space-y-4">
              <div>
                <label htmlFor="scheduledDate" className="block text-sm font-semibold text-gray-700 mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  id="scheduledDate"
                  value={scheduledDate}
                  onChange={(e) => setScheduledDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full h-12 rounded-lg border-2 border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500"
                />
              </div>

              <div>
                <label htmlFor="scheduledTime" className="block text-sm font-semibold text-gray-700 mb-2">
                  Time *
                </label>
                <input
                  type="time"
                  id="scheduledTime"
                  value={scheduledTime}
                  onChange={(e) => setScheduledTime(e.target.value)}
                  className="w-full h-12 rounded-lg border-2 border-gray-300 bg-white px-4 text-base focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-500"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowScheduleModal(false)}
                className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleScheduleSubmit}
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-purple-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Scheduling..." : "Confirm Schedule"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  </>
  );
}

// Global type declaration for Google Maps API
declare global {
  interface Window {
    google: typeof google;
  }
}
