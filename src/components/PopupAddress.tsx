"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Script from "next/script";

import { encodePlusCode } from "../utils/pluscode";
import LocationStep from "./LocationStep";
import type { AddressPayload } from "./types";
import { DISPATCH_BASE_ADDRESS } from "../lib/dispatchBase";
import { quoteWithTravel, addTravel, initializePricing, quoteWithBreakdown } from "../lib/pricing-client";

type PopupAddressProps = {
  choice: string;
  address: string;
  onAddressChange: (v: string) => void;
  coords: { lat: number; lng: number } | null;
  onCoordsChange: (c: { lat: number; lng: number } | null) => void;
  onBack: () => void;
  onContinue: (payload: AddressPayload) => void;
};

export default function PopupAddress({
  choice,
  address,
  onAddressChange,
  coords,
  onCoordsChange,
  onBack,
  onContinue,
}: PopupAddressProps) {
const isTowing = useMemo(
    () => choice === "Local Towing" || choice === "Long-Distance Towing",
    [choice]
  );

  const [pickupConfirmed, setPickupConfirmed] = useState(false);
  const [dropoffConfirmed, setDropoffConfirmed] = useState(false);

  const [baseCoords, setBaseCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [baseTravelMilesRounded, setBaseTravelMilesRounded] = useState<number | null>(null);
  const [travelMilesAmount, setTravelMilesAmount] = useState<number | null>(null);
  const [serviceBasePrice, setServiceBasePrice] = useState<number | null>(null);

  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");

  const [estimatedQuote, setEstimatedQuote] = useState<number>(0);
  const [priceBreakdown, setPriceBreakdown] = useState<any>(null);

  const [dropoff, setDropoff] = useState("");
  const [dropoffCoords, setDropoffCoords] = useState<{ lat: number; lng: number } | null>(null);

    const [distanceMilesRounded, setDistanceMilesRounded] = useState<number | null>(null);

  const inputRefPickup = useRef<HTMLInputElement | null>(null);
  const autocompletePickupRef = useRef<google.maps.places.Autocomplete | null>(null);
  const inputRefDropoff = useRef<HTMLInputElement | null>(null);
  const autocompleteDropoffRef = useRef<google.maps.places.Autocomplete | null>(null);

  const [isLocating, setIsLocating] = useState(false);
  const [geoError, setGeoError] = useState<string | null>(null);
  const [pricingError, setPricingError] = useState<string | null>(null);
  const [pricingReady, setPricingReady] = useState(false);

  // Initialize Firebase pricing on component mount
  useEffect(() => {
    initializePricing()
      .then(() => {
        setPricingReady(true);
      })
      .catch((error) => {
        console.error("Failed to initialize pricing from Firebase:", error);
        setPricingError(error.message || "Unable to load pricing. Please call (858) 999-9293.");
      });
  }, []);

  // Calculate service base price when pricing is ready
  useEffect(() => {
    if (!pricingReady) return;

    try {
      const breakdown = quoteWithBreakdown(choice);
      setServiceBasePrice(breakdown.base);
    } catch (error) {
      console.error("Failed to calculate service base price:", error);
      setServiceBasePrice(null);
    }
  }, [pricingReady, choice]);

  // ---------- Places Autocomplete ----------
  const initAutocompleteFor = useCallback(
    (which: "pickup" | "dropoff") => {
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
          if (place?.formatted_address) onAddressChange(place.formatted_address);
          if (place?.geometry?.location) {
            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();
            onCoordsChange({ lat, lng });
          }
          setPickupConfirmed(true);
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
          if (place?.formatted_address) setDropoff(place.formatted_address);
          if (place?.geometry?.location) {
            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();
            setDropoffCoords({ lat, lng });
          }
          setDropoffConfirmed(true);
        });
        autocompleteDropoffRef.current = ac;
      }
    },
    [onAddressChange, onCoordsChange]
  );

  useEffect(() => {
    if ((window as unknown as { google?: { maps?: { places?: unknown; Geocoder?: unknown } } }).google?.maps?.places) {
      initAutocompleteFor("pickup");
    }
  }, [initAutocompleteFor]);

  useEffect(() => {
    if (isTowing && pickupConfirmed && (window as unknown as { google?: { maps?: { places?: unknown; Geocoder?: unknown } } }).google?.maps?.places) {
      initAutocompleteFor("dropoff");
    }
  }, [isTowing, pickupConfirmed, initAutocompleteFor]);

  // Geocode dispatch base once
  useEffect(() => {
    if (!window.google?.maps?.Geocoder) return;
    const geo = new google.maps.Geocoder();
    geo.geocode({ address: DISPATCH_BASE_ADDRESS }, (results, status) => {
      if (status === "OK" && results && results[0]?.geometry?.location) {
        const loc = results[0].geometry.location;
        setBaseCoords({ lat: loc.lat(), lng: loc.lng() });
      }
    });
  }, []);

  // ---------- Helpers ----------
  const reverseGeocode = useCallback(
    async (lat: number, lng: number) => {
      try {
        if (!window.google?.maps?.Geocoder) {
          return;
        }
        const geocoder = new window.google.maps.Geocoder();
        const { results } = await geocoder.geocode({ location: { lat, lng } });
        if (results && results[0]) {
          const address = results[0].formatted_address;
          onAddressChange(address);
          setPickupConfirmed(true);
        }
      } catch {
        // Silent fail - geocoding is not critical, user can still enter address manually
      }
    },
    [onAddressChange]
  );

  const shareCurrentLocation = useCallback(() => {
    setGeoError(null);
    if (!navigator.geolocation) {
      setGeoError("Location not supported by this browser.");
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        onCoordsChange({ lat: latitude, lng: longitude });
        await reverseGeocode(latitude, longitude);
        setIsLocating(false);
      },
      (err) => {
        setIsLocating(false);
        let msg = "Unable to fetch location.";
        if (err.code === 1) msg = "Location permission denied.";
        if (err.code === 2) msg = "Position unavailable.";
        if (err.code === 3) msg = "Location request timed out.";
        setGeoError(msg);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }, [onCoordsChange, reverseGeocode]);

  const dropPinPlusCode = useCallback(() => {
    setGeoError(null);
    if (!navigator.geolocation) {
      setGeoError("Location not supported by this browser.");
      window.open("https://www.google.com/maps", "_blank", "noopener,noreferrer");
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        onCoordsChange({ lat: latitude, lng: longitude });
        const plus = encodePlusCode(latitude, longitude, 10);
        onAddressChange(plus);
        setPickupConfirmed(true);
        const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        window.open(url, "_blank", "noopener,noreferrer");
        setIsLocating(false);
      },
      (err) => {
        setIsLocating(false);
        let msg = "Unable to fetch location.";
        if (err.code === 1) msg = "Location permission denied.";
        if (err.code === 2) msg = "Position unavailable.";
        if (err.code === 3) msg = "Location request timed out.";
        setGeoError(msg);
        window.open("https://www.google.com/maps", "_blank", "noopener,noreferrer");
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }, [onAddressChange, onCoordsChange]);

  const confirmPickupIfManual = useCallback(() => {
    if (address && address.trim().length > 5) setPickupConfirmed(true);
  }, [address]);
  const confirmDropoffIfManual = useCallback(() => {
    if (dropoff && dropoff.trim().length > 5) setDropoffConfirmed(true);
  }, [dropoff]);

  const resetPickup = () => {
    setPickupConfirmed(false);
    onAddressChange("");
    onCoordsChange(null);
    setDropoff("");
    setDropoffCoords(null);
    setDropoffConfirmed(false);
    setDistanceMilesRounded(null);
    setBaseTravelMilesRounded(null);
    setEstimatedQuote(0);
    // Clear autocomplete ref to allow reinitialization
    if (autocompletePickupRef.current) {
      autocompletePickupRef.current = null;
    }
  };
  const resetDropoff = () => {
    setDropoffConfirmed(false);
    setDropoff("");
    setDropoffCoords(null);
    setDistanceMilesRounded(null);
    // Clear autocomplete ref to allow reinitialization
    if (autocompleteDropoffRef.current) {
      autocompleteDropoffRef.current = null;
    }
  };

  // ---------- Distances ----------
  // Base → Pickup (travel)
  useEffect(() => {
    if (!pickupConfirmed) return;
    if (!baseCoords) return;
    if (!address) return;
    if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || !window.google?.maps?.DirectionsService) return;

    const directions = new google.maps.DirectionsService();
    directions.route(
      {
        origin: new google.maps.LatLng(baseCoords.lat, baseCoords.lng),
        destination: address,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status !== google.maps.DirectionsStatus.OK || !result) {
          return;
        }
        const meters = result.routes[0].legs.reduce((sum, leg) => sum + (leg.distance?.value ?? 0), 0);
        const miles = meters / 1609.344;
        const rounded = Math.ceil(miles);
        setBaseTravelMilesRounded(rounded);
      }
    );
  }, [pickupConfirmed, baseCoords, address]);

  // Calculate travel miles amount (1.75 per mile)
  // IMPORTANT: Even if travel is 0 miles, we still set the amount so it displays
  useEffect(() => {
    if (baseTravelMilesRounded !== null && baseTravelMilesRounded >= 0) {
      const TRAVEL_RATE = 1.75;
      setTravelMilesAmount(baseTravelMilesRounded * TRAVEL_RATE);
    } else {
      setTravelMilesAmount(null);
    }
  }, [baseTravelMilesRounded]);

  // Pickup → Dropoff (tow)
  useEffect(() => {
    if (!isTowing || !pickupConfirmed || !dropoffConfirmed) return;
    if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || !window.google?.maps?.DirectionsService) return;

    const directions = new google.maps.DirectionsService();
    directions.route(
      {
        origin: address,
        destination: dropoff,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status !== google.maps.DirectionsStatus.OK || !result) {
          return;
        }
        const meters = result.routes[0].legs.reduce((sum, leg) => sum + (leg.distance?.value ?? 0), 0);
        const miles = meters / 1609.344;
        const rounded = Math.ceil(miles);
        setDistanceMilesRounded(rounded);
      }
    );
  }, [isTowing, pickupConfirmed, dropoffConfirmed, address, dropoff]);

  // ---------- Estimates ----------
  // Non-towing: roadside + travel (after pickup + travel ready)
  useEffect(() => {
    if (!pricingReady) return; // Wait for pricing to be ready
    if (isTowing) return;
    if (!pickupConfirmed) return;
    if (baseTravelMilesRounded == null) return;

    try {
      const breakdown = quoteWithTravel(choice, undefined, baseTravelMilesRounded);
      setEstimatedQuote(breakdown.base);
      setPriceBreakdown(breakdown);
      setPricingError(null); // Clear any previous errors
    } catch (error: any) {
      console.error("Pricing calculation error:", error);
      setPricingError(error.message || "Unable to calculate pricing. Please call (858) 999-9293.");
      setEstimatedQuote(0);
      setPriceBreakdown(null);
    }
  }, [pricingReady, isTowing, pickupConfirmed, baseTravelMilesRounded, choice]);

  // Towing (INTERIM): Hook-up + Travel after pickup + travel ready (before destination)
  useEffect(() => {
    if (!pricingReady) return; // Wait for pricing to be ready
    if (!isTowing) return;
    if (!pickupConfirmed) return;
    if (baseTravelMilesRounded == null) return;
    if (dropoffConfirmed && distanceMilesRounded != null) return; // full total will overwrite

    try {
      // Build a temporary breakdown with only hook-up, then add travel.
      // Use quoteWithBreakdown to get the actual hookup fee from Firebase
      const baseBreakdown = quoteWithBreakdown(choice, 0); // 0 miles for just hook-up
      const temp = addTravel(baseBreakdown, baseTravelMilesRounded);
      setEstimatedQuote(temp.base);
      setPriceBreakdown(temp);
      setPricingError(null);
    } catch (error: any) {
      console.error("Pricing calculation error:", error);
      setPricingError(error.message || "Unable to calculate pricing. Please call (858) 999-9293.");
      setEstimatedQuote(0);
      setPriceBreakdown(null);
    }
  }, [
    pricingReady,
    isTowing,
    pickupConfirmed,
    baseTravelMilesRounded,
    dropoffConfirmed,
    distanceMilesRounded,
    choice,
  ]);

  // Towing (FINAL): Hook-up + $8/mi × tow + Travel after destination confirmed
  useEffect(() => {
    if (!pricingReady) return;
    if (!isTowing) return;
    if (!pickupConfirmed || !dropoffConfirmed) return;
    if (distanceMilesRounded == null) return;
    // IMPORTANT: Accept 0 as a valid travel distance
    if (baseTravelMilesRounded == null) return;

    try {
      const breakdown = quoteWithTravel(choice, distanceMilesRounded, baseTravelMilesRounded);
      setEstimatedQuote(breakdown.base);
      setPriceBreakdown(breakdown);
      setPricingError(null);
    } catch (error: any) {
      setPricingError(error.message || "Unable to calculate pricing. Please call (858) 999-9293.");
      setEstimatedQuote(0);
      setPriceBreakdown(null);
    }
  }, [
    pricingReady,
    isTowing,
    pickupConfirmed,
    dropoffConfirmed,
    distanceMilesRounded,
    baseTravelMilesRounded,
    choice,
  ]);

  // ---------- Auto-advance to Panel 3 (Customer Info) ----------
  // Track if we've already advanced to prevent double-firing
  const hasAdvancedRef = useRef(false);

  useEffect(() => {
    // Reset the ref when component unmounts or when user goes back
    return () => {
      hasAdvancedRef.current = false;
    };
  }, []);

  useEffect(() => {
    // Skip if already advanced
    if (hasAdvancedRef.current) return;

    // Location validation
    const hasPickup = pickupConfirmed && address.trim().length > 0;
    const hasDropoff = !isTowing || (dropoffConfirmed && dropoff.trim().length > 0);

    // Pricing validation - ensure we have a quote before advancing
    const hasPricing = estimatedQuote > 0;

    // For towing services, also ensure distance calculation is complete
    const hasDistance = !isTowing || (distanceMilesRounded != null && distanceMilesRounded > 0);

    // CRITICAL: For towing, ensure we have the FINAL breakdown (with tow miles), not the interim one
    // The interim breakdown only has hook-up + travel (2 items)
    // The final breakdown has hook-up + tow miles + travel (3 items)
    const hasFinalBreakdown = !isTowing || (
      priceBreakdown &&
      priceBreakdown.items &&
      priceBreakdown.items.length >= 3 // Must have at least 3 items for towing
    );

    // Only address(es) and pricing need to be ready for Panel 2
    const isComplete = hasPickup && hasDropoff && hasPricing && hasDistance && hasFinalBreakdown;

    // Only advance if complete
    if (!isComplete) return;

    // Mark as advanced to prevent double-firing
    hasAdvancedRef.current = true;

    // Build payload (without vehicle info - that's in Panel 3 now)
    const payload: AddressPayload = {
      service: choice,
      isTowing,
      pickup: { address, coords },
      ...(isTowing && dropoff ? { dropoff: { address: dropoff, coords: dropoffCoords } } : {}),
      vehicle: {
        year: "",
        make: "",
        model: "",
        color: ""
      },
      distanceMilesRounded,
      baseTravelMilesRounded,
      serviceBasePrice: serviceBasePrice || undefined,
      estimatedQuote,
      priceBreakdown,
    };

    // Advance to Panel 3 (vehicle info)
    onContinue(payload);
  }, [
    pickupConfirmed,
    dropoffConfirmed,
    address,
    dropoff,
    isTowing,
    coords,
    dropoffCoords,
    distanceMilesRounded,
    baseTravelMilesRounded,
    serviceBasePrice,
    estimatedQuote,
    priceBreakdown,
    choice,
    onContinue,
  ]);

  return (
    <>
      {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && (
        <Script
          id="google-maps-places"
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&v=weekly`}
          strategy="afterInteractive"
          onLoad={() => {
            if ((window as unknown as { google?: { maps?: { places?: unknown; Geocoder?: unknown } } }).google?.maps?.places) {
              initAutocompleteFor("pickup");
              if (isTowing && pickupConfirmed) initAutocompleteFor("dropoff");
            }
            // Ensure base geocode after script load (prevents race)
            if (!baseCoords && (window as unknown as { google?: { maps?: { Geocoder?: unknown } } }).google?.maps?.Geocoder) {
              const geo = new google.maps.Geocoder();
              geo.geocode({ address: DISPATCH_BASE_ADDRESS }, (results, status) => {
                if (status === "OK" && results && results[0]?.geometry?.location) {
                  const loc = results[0].geometry.location;
                  setBaseCoords({ lat: loc.lat(), lng: loc.lng() });
                }
              });
            }
          }}
        />
      )}

      {/* Back to Panel 1 */}
      <div className="mb-3">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold bg-[#1e1e4a] text-white hover:bg-[#2a2a5a]"
          aria-label="Go back"
          title="Back"
        >
          ← Back
        </button>
      </div>

      {/* Panel 2 content */}
      <div className="relative overflow-x-hidden w-full translate-x-0 pr-0">
        <LocationStep
          isTowing={isTowing}
          choice={choice}
          address={address}
          onAddressChange={onAddressChange}
          pickupConfirmed={pickupConfirmed}
          confirmPickupIfManual={confirmPickupIfManual}
          resetPickup={resetPickup}
          dropoff={dropoff}
          setDropoff={setDropoff}
          dropoffConfirmed={dropoffConfirmed}
          confirmDropoffIfManual={confirmDropoffIfManual}
          resetDropoff={resetDropoff}
          distanceMilesRounded={distanceMilesRounded}
          baseTravelMilesRounded={baseTravelMilesRounded}
          inputRefPickup={inputRefPickup}
          inputRefDropoff={inputRefDropoff}
          initAutocompleteFor={initAutocompleteFor}
          isLocating={isLocating}
          shareCurrentLocation={shareCurrentLocation}
          dropPinPlusCode={dropPinPlusCode}
          geoError={geoError}
          pricingError={pricingError}
          year={year}
          setYear={setYear}
          make={make}
          setMake={setMake}
          model={model}
          setModel={setModel}
          color={color}
          setColor={setColor}
          travelMilesAmount={travelMilesAmount}
          serviceBasePrice={serviceBasePrice}
        />

        {/* Continue button */}
        <div className="flex justify-center mt-6">
          <button
            type="button"
            onClick={() => {
              // Manually trigger advance if conditions are met
              const hasPickup = pickupConfirmed && address.trim().length > 0;
              const hasDropoff = !isTowing || (dropoffConfirmed && dropoff.trim().length > 0);
              const hasPricing = estimatedQuote > 0;
              const hasDistance = !isTowing || (distanceMilesRounded != null && distanceMilesRounded > 0);
              const hasFinalBreakdown = !isTowing || (
                priceBreakdown &&
                priceBreakdown.items &&
                priceBreakdown.items.length >= 3
              );

              if (hasPickup && hasDropoff && hasPricing && hasDistance && hasFinalBreakdown) {
                // Mark as advanced to prevent auto-advance from firing again
                hasAdvancedRef.current = true;

                // Build and send payload
                const payload: AddressPayload = {
                  service: choice,
                  isTowing,
                  pickup: { address, coords },
                  ...(isTowing && dropoff ? { dropoff: { address: dropoff, coords: dropoffCoords } } : {}),
                  vehicle: {
                    year: "",
                    make: "",
                    model: "",
                    color: ""
                  },
                  distanceMilesRounded,
                  baseTravelMilesRounded,
                  serviceBasePrice: serviceBasePrice || undefined,
                  estimatedQuote,
                  priceBreakdown,
                };

                onContinue(payload);
              }
            }}
            disabled={
              !(
                pickupConfirmed &&
                address.trim().length > 0 &&
                (!isTowing || (dropoffConfirmed && dropoff.trim().length > 0)) &&
                estimatedQuote > 0 &&
                (!isTowing || (distanceMilesRounded != null && distanceMilesRounded > 0)) &&
                (!isTowing || (priceBreakdown && priceBreakdown.items && priceBreakdown.items.length >= 3))
              )
            }
            className="relative overflow-hidden rounded-xl px-8 py-4 sm:px-12 sm:py-6 font-bold text-base sm:text-2xl shadow-lg hover:shadow-xl focus:shadow-none focus:outline-none focus:ring-0 border border-transparent bg-[#ffba42] text-white hover:bg-[#e6a739] transition disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
            style={{
              boxShadow: '0 4px 20px rgba(255, 186, 66, 0.4), 0 0 30px rgba(255, 186, 66, 0.3)',
            }}
            title={
              !pickupConfirmed ? "Please enter and confirm pickup address" :
              isTowing && !dropoffConfirmed ? "Please enter and confirm dropoff address" :
              !estimatedQuote ? "Calculating pricing..." :
              isTowing && (!priceBreakdown || !priceBreakdown.items || priceBreakdown.items.length < 3) ? "Calculating final price..." :
              "Click to continue to vehicle information"
            }
          >
            {/* Animated shimmer effect */}
            <span
              className="absolute inset-0 shimmer-effect"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, transparent 30%, rgba(255,255,255,0.8) 50%, transparent 70%, transparent 100%)',
                transform: 'translateX(-100%)',
              }}
            />
            <span className="relative z-10">Continue →</span>
          </button>
        </div>
      </div>
    </>
  );
}

declare global {
  interface Window {
    google: typeof google;
  }
}
