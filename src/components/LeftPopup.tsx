"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import type { AddressPayload } from "./types";
import { ServiceIcon } from "./ServiceIcon";
import { fetchConfig, applyOnlineDiscount } from "../lib/pricing-client";
import "./PopupAnimations.css";


type Props = {
  services?: string[];
};

type Stage = "choose" | "address" | "vehicle" | "customer";

// Colors
const HEADER_HEX = "#ffba42";
const BANNER_HEX = "#42b3ffff";

  // Panel positioning
const panel1Pos = // Service selection (Panel 1)
  "left-0 right-0 bottom-0 sm:right-4 sm:left-auto sm:top-[68%] sm:bottom-auto sm:-translate-y-1/2 w-full sm:w-[90vw] sm:max-w-[48rem] h-[85vh] sm:h-[55vh] max-h-[85vh]";
const panel2Pos = // Address (Panel 2)
  "left-0 right-0 bottom-0 sm:left-1/2 sm:right-auto sm:top-1/2 sm:bottom-auto sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:w-[95vw] sm:max-w-[1400px] h-[95vh] sm:h-auto sm:max-h-[95vh]";
const panel3Pos = // Vehicle info (Panel 3)
  "left-0 right-0 bottom-0 sm:left-1/2 sm:right-auto sm:top-1/2 sm:bottom-auto sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:w-[95vw] sm:max-w-[1400px] h-[95vh] sm:h-auto sm:max-h-[95vh]";
const panel4Pos = // Customer info (Panel 4)
  "left-0 right-0 bottom-0 sm:left-1/2 sm:right-auto sm:top-1/2 sm:bottom-auto sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:w-[95vw] sm:max-w-[1400px] h-[95vh] sm:h-auto sm:max-h-[95vh]";

// Base panel chrome
const basePanel =
  "fixed z-[60] text-[#1e1e4a] flex flex-col rounded-t-3xl sm:rounded-t-[6rem] rounded-b-2xl sm:rounded-b-3xl shadow-2xl";

// Lazy-load step panels
const PopupAddress = dynamic(() => import("./PopupAddress"), { ssr: false });
const PopupVehicleInfo = dynamic(() => import("./PopupVehicleInfo"), { ssr: false });
const PopupCustomerInfo = dynamic(() => import("./PopupCustomerInfo"), {
  ssr: false,
});

export default function LeftPopup({
  services,
}: Props) {

  const [open, setOpen] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [stage, setStage] = useState<Stage>("choose");
  const [choice, setChoice] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [firebaseServices, setFirebaseServices] = useState<any[]>([]);
  const [loadingPrices, setLoadingPrices] = useState(true);

  // Fetch services from Firebase on mount
  useEffect(() => {
    fetchConfig()
      .then((config) => {
        const servicesArray: any[] = [];

        // Services to hide from customers (used for backend calculations only)
        const HIDDEN_SERVICES = new Set(['Travel Miles', 'Tow Miles']);

        // Preferred display order
        const SERVICE_ORDER = [
          'Local Towing',
          'Jump Start',
          'Lockout Service',
          'Fuel Delivery',
          'Impound',
          'Tire Change',
          'Winch-Out / Recovery',
          'Collision Recovery',
          'Long-Distance Towing'
        ];

        // Convert services object to array with pricing
        Object.keys(config.services).forEach((key) => {
          const service = config.services[key];

          // Skip lowercase duplicate keys
          if (key !== service.name) return;

          // Skip internal/backend services
          if (HIDDEN_SERVICES.has(service.name)) return;

          // Calculate base price and discounted price
          let basePrice = 0;
          if (service.type === 'towing') {
            // For towing: hookup + minimum miles
            basePrice = service.hookupFee + (service.perMileRate * service.minimumMiles);
          } else if (service.basePrice) {
            // For roadside services
            basePrice = service.basePrice;
          }

          const discountedPrice = applyOnlineDiscount(basePrice);

          servicesArray.push({
            name: service.name,
            price: `from $${discountedPrice}`,
            originalPrice: `from $${basePrice}`,
            basePrice: discountedPrice,
            originalBasePrice: basePrice
          });
        });

        // Sort services by preferred order
        servicesArray.sort((a, b) => {
          const indexA = SERVICE_ORDER.indexOf(a.name);
          const indexB = SERVICE_ORDER.indexOf(b.name);

          // If both are in the order list, sort by position
          if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB;
          }
          // If only A is in the list, put it first
          if (indexA !== -1) return -1;
          // If only B is in the list, put it first
          if (indexB !== -1) return 1;
          // If neither is in the list, maintain original order
          return 0;
        });

        setFirebaseServices(servicesArray);
        setLoadingPrices(false);
      })
      .catch((error) => {
        console.error("Failed to load services from Firebase:", error);
        setLoadingPrices(false);
      });
  }, []);

  // Complete service list - use Firebase services or fallback to hardcoded
  const allServices = useMemo(
    () => {
      if (services) return services;
      if (firebaseServices.length > 0) return firebaseServices;

      // Fallback hardcoded services (ordered to match SERVICE_ORDER)
      return [
        { name: "Local Towing", price: "from $75", originalPrice: "from $88" },
        { name: "Jump Start", price: "from $75", originalPrice: "from $88" },
        { name: "Lockout Service", price: "from $75", originalPrice: "from $88" },
        { name: "Fuel Delivery", price: "from $75", originalPrice: "from $88" },
        { name: "Impound", price: "from $125", originalPrice: "from $147" },
        { name: "Flat Tire Change", price: "from $75", originalPrice: "from $88" },
        { name: "Winch-Out / Recovery", price: "from $125", originalPrice: "from $147" },
        { name: "Collision Recovery", price: "from $150", originalPrice: "from $176" },
        { name: "Long-Distance Towing", price: "from $125", originalPrice: "from $147" },
      ];
    },
    [services, firebaseServices]
  );

  // Filtered service list based on search query
  const list = useMemo(() => {
    // Services to hide on mobile by default
    const mobileHiddenServices = ['Emergency Roadside Assistance', 'Long Distance Towing', 'Long-Distance Towing'];

    // Check if we're on mobile (you can use window.innerWidth or a breakpoint)
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640; // sm breakpoint

    let filteredServices = allServices;

    // If no search query and on mobile, hide specific services
    if (!searchQuery.trim() && isMobile) {
      filteredServices = allServices.filter(item => {
        const serviceName = typeof item === 'string' ? item : item.name;
        return !mobileHiddenServices.includes(serviceName);
      });
      console.log('🔍 MOBILE SERVICE ORDER:', filteredServices.map(s => typeof s === 'string' ? s : s.name));
      return filteredServices;
    }

    // If there's a search query, filter normally (includes hidden services if they match)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      return allServices.filter(item => {
        const serviceName = typeof item === 'string' ? item : item.name;
        return serviceName.toLowerCase().includes(query);
      });
    }

    console.log('🔍 DESKTOP SERVICE ORDER:', allServices.map(s => typeof s === 'string' ? s : s.name));
    return allServices;
  }, [allServices, searchQuery]);

  const [address, setAddress] = useState("");
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);

  // Panel navigation control
  const [addressPayload, setAddressPayload] = useState<AddressPayload | null>(null);
  const [vehiclePayload, setVehiclePayload] = useState<{year: string; make: string; model: string; color: string} | null>(null);

  // Vehicle info state
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");

  // Entrance animation
  const [listIn, setListIn] = useState(false);

  // Brief pulse for the banner
  const [pulseBanner, setPulseBanner] = useState(true);

  // Live-region text for screen readers
  const [liveMsg, setLiveMsg] = useState("");


  // Auto-open popup on page load
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if user came from ad (UTM parameters)
    const urlParams = new URLSearchParams(window.location.search);
    const fromAd = urlParams.has('utm_source') || urlParams.has('gclid') || urlParams.has('fbclid');

    // Always show popup on page load
    const timer = setTimeout(() => {
      setOpen(true);
      requestAnimationFrame(() => setAnimateIn(true));

      // Track popup opened
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'popup_opened', {
          event_category: 'engagement',
          event_label: 'booking_popup'
        });
      }
    }, fromAd ? 2000 : 500);

    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll when popup is open (mobile only)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only lock on mobile devices (below sm breakpoint)
    const isMobile = window.innerWidth < 640;

    if (open && isMobile) {
      // Save current scroll position
      const scrollY = window.scrollY;

      // Lock body scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      return () => {
        // Restore body scroll
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';

        // Restore scroll position
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  // Trigger list entrance after panel is visible
  useEffect(() => {
    if (open && animateIn && stage === "choose") {
      const t = setTimeout(() => setListIn(true), 120);
      const p = setTimeout(() => setPulseBanner(false), 1500);
      return () => {
        clearTimeout(t);
        clearTimeout(p);
      };
    }
    setListIn(false);
  }, [open, animateIn, stage]);

  // Remember last selected service
  useEffect(() => {
    if (choice) {
      try {
        localStorage.setItem("lastService", choice);
      } catch (error) {
        console.error("Failed to save last service to localStorage:", error);
        // Non-critical - continue without saving preference
      }
    }
  }, [choice]);

  // Track step completions
  useEffect(() => {
    if (stage === 'address' && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'booking_step_2_reached', {
        event_category: 'conversion_funnel',
        service: choice
      });
    }
  }, [stage, choice]);

  // Track form abandonment
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleBeforeUnload = () => {
      if (stage !== 'choose' && (window as any).gtag) {
        (window as any).gtag('event', 'booking_abandoned', {
          event_category: 'conversion_funnel',
          event_label: stage,
          service: choice
        });
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [stage, choice]);

  // Clear progress when popup is closed
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!open) {
      try {
        localStorage.removeItem('popup_progress');
      } catch (error) {
        console.error("Failed to clear popup progress from localStorage:", error);
        // Non-critical - continue without clearing progress
      }
    }
  }, [open]);

  const minimizeToLauncher = () => {
    setAnimateIn(false);
    setTimeout(() => {
      setOpen(false);
      setStage("choose");
      setChoice("");
      setAddress("");
      setCoords(null);
      setAddressPayload(null);
      setListIn(false);
      setPulseBanner(true);
    }, 1000); // Vacuum suction duration
  };

  const serviceClassOverrides: Record<string, string> = {};
  const STAGGER_TOTAL_MS = 600; // Optimized from 3000ms - 80% faster!
  const bannerText = 'Order Online & Save 15%';

  return (
    <>
      {/* launcher - MASSIVE URGENT CTA */}
      {!open && (
        <>
          {/* Mobile: Compact bottom bar */}
          <button
            onClick={() => {
              setOpen(true);
              requestAnimationFrame(() => setAnimateIn(true));
            }}
            aria-label="Get instant price"
            className="md:hidden fixed left-0 right-0 bottom-0 z-[59] bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 shadow-2xl animate-pulse hover:animate-none"
          >
            <div className="flex items-center justify-between">
              <span className="font-black text-base">GET 15% OFF NOW</span>
              <span className="text-xs bg-white/20 px-3 py-1 rounded-full">60 sec quote</span>
            </div>
          </button>

          {/* Desktop: Animated card */}
          <button
            onClick={() => {
              setOpen(true);
              requestAnimationFrame(() => setAnimateIn(true));
            }}
            aria-label="Get instant price and request tow online - 15% off + priority dispatch"
            className="hidden md:block fixed left-4 right-4 bottom-4 max-w-md mx-auto z-[59]
                       text-white font-extrabold shadow-2xl
                       transition-all hover:shadow-[0_0_40px_rgba(255,107,53,0.8)]
                       active:scale-[.98] animate-pulse hover:animate-none
                       rounded-2xl overflow-hidden
                       border-4 border-white"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
              backgroundSize: '200% 200%',
              animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite, gradientShift 15s ease infinite',
            }}
          >
            <div className="px-6 py-5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1 text-left">
                  <div className="inline-block rounded-xl px-4 py-2 mb-2 border-2 border-white/60" style={{ backgroundColor: '#42b3ffff' }}>
                    <div className="text-2xl font-black leading-tight text-black">
                      {bannerText}
                    </div>
                  </div>
                  <div className="text-sm font-semibold opacity-95">
                    Get Price in 60 Sec + ⚡ Faster Service ETA
                  </div>
                </div>
              </div>
            </div>
          </button>

          {/* Live Chat Button */}
          <button
            onClick={() => {
              window.open('sms:+18589007211?&body=I have a question about services', '_blank');
            }}
            className="fixed right-4 bottom-24 z-50 w-14 h-14 bg-blue-500 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Live chat"
          >
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"/>
            </svg>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
          </button>
        </>
      )}

      {/* backdrop */}
      {open && (
        <div
          onClick={minimizeToLauncher}
          className={`fixed inset-0 z-[58] transition-opacity duration-200 ${animateIn
            ? stage === "address" || addressPayload
              ? "bg-black/60 opacity-100"
              : "bg-transparent opacity-100"
            : "opacity-0"
            }`}
        />
      )}

      {/* popup */}
      {open && (
        <aside
          role="dialog"
          aria-label="CloseBy Towing quick help"
          data-popup="left"
          className={[
            basePanel,
            stage === "choose" ? panel1Pos :
            vehiclePayload ? panel4Pos :
            addressPayload ? panel3Pos :
            panel2Pos,
            animateIn ? "popup-animate-expand" : "popup-animate-vacuum",
            "transition-all duration-500 ease-in-out",
          ].join(" ")}
          style={{
            ["--header" as string]: HEADER_HEX,
            ["--banner" as string]: BANNER_HEX,
          }}
        >
          {/* MAIN CONTENT AREA */}
          <div className="relative z-0 flex-1 bg-white rounded-t-3xl sm:rounded-t-[6rem] rounded-b-2xl sm:rounded-b-3xl overflow-hidden">
            <div
              className="h-full w-full overflow-y-auto overflow-x-hidden overscroll-contain scroll-smooth"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              <div className="w-full px-3 pt-3 pb-6 sm:pb-4 sm:p-6 md:p-7 lg:p-8">
                {/* Progress Indicator - 4 Steps */}
                <div className="mt-4 sm:mt-5 mb-3 sm:mb-4 flex justify-center">
                  <div className="w-full max-w-[320px] sm:max-w-md">
                    {/* Step labels - Smaller text */}
                    <div className="flex items-center justify-between gap-0.5 px-1 mb-1.5">
                      <p className={`text-[9px] sm:text-xs font-semibold transition-colors flex-1 text-left ${
                        stage === "choose" ? "text-[#ffba42]" : "text-gray-500"
                      }`}>
                        Service
                      </p>
                      <p className={`text-[9px] sm:text-xs font-semibold transition-colors flex-1 text-center ${
                        stage === "address" ? "text-[#ffba42]" : "text-gray-500"
                      }`}>
                        Location
                      </p>
                      <p className={`text-[9px] sm:text-xs font-semibold transition-colors flex-1 text-center ${
                        stage === "vehicle" ? "text-[#ffba42]" : "text-gray-500"
                      }`}>
                        Vehicle
                      </p>
                      <p className={`text-[9px] sm:text-xs font-semibold transition-colors flex-1 text-right ${
                        stage === "customer" ? "text-[#ffba42]" : "text-gray-500"
                      }`}>
                        Contact
                      </p>
                    </div>

                    {/* Progress bar with numbers - Smaller */}
                    <div className="relative px-1">
                      {/* Background line - Thinner */}
                      <div className="absolute top-1/2 left-0 right-0 h-1 sm:h-1.5 bg-gray-200 rounded-full -translate-y-1/2" />

                      {/* Active progress line - Thinner */}
                      <div
                        className="absolute top-1/2 left-0 h-1 sm:h-1.5 bg-gradient-to-r from-[#ffba42] to-[#42b3ffff] rounded-full -translate-y-1/2 transition-all duration-500 ease-out"
                        style={{
                          width: stage === "choose" ? "0%" :
                                 stage === "address" ? "33%" :
                                 stage === "vehicle" ? "66%" :
                                 "100%"
                        }}
                      />

                      {/* Step circles with numbers - Smaller */}
                      <div className="relative flex justify-between items-center">
                        {/* Step 1 */}
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 border-2 ${
                          stage === "choose"
                            ? "bg-[#ffba42] text-black border-[#ffba42] scale-110 shadow-md shadow-[#ffba42]/50"
                            : stage !== "choose"
                            ? "bg-[#42b3ffff] text-black border-[#42b3ffff]"
                            : "bg-gray-200 text-gray-500 border-gray-300"
                        }`}>
                          1
                        </div>

                        {/* Step 2 */}
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 border-2 ${
                          stage === "address"
                            ? "bg-[#ffba42] text-black border-[#ffba42] scale-110 shadow-md shadow-[#ffba42]/50"
                            : stage === "vehicle" || stage === "customer"
                            ? "bg-[#42b3ffff] text-black border-[#42b3ffff]"
                            : "bg-gray-200 text-gray-500 border-gray-300"
                        }`}>
                          2
                        </div>

                        {/* Step 3 */}
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 border-2 ${
                          stage === "vehicle"
                            ? "bg-[#ffba42] text-black border-[#ffba42] scale-110 shadow-md shadow-[#ffba42]/50"
                            : stage === "customer"
                            ? "bg-[#42b3ffff] text-black border-[#42b3ffff]"
                            : "bg-gray-200 text-gray-500 border-gray-300"
                        }`}>
                          3
                        </div>

                        {/* Step 4 */}
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 border-2 ${
                          stage === "customer"
                            ? "bg-[#ffba42] text-black border-[#ffba42] scale-110 shadow-md shadow-[#ffba42]/50"
                            : "bg-gray-200 text-gray-500 border-gray-300"
                        }`}>
                          4
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Banner - ONLY on Panel 1 (service selection) */}
                {stage === "choose" && (
                  <div className="flex justify-center">
                    <button
                      onClick={() => setStage("address")}
                      className={[
                        "relative inline-flex items-center justify-center gap-1 sm:gap-2 rounded-lg px-6 py-3 sm:px-12 sm:py-4 md:px-16 md:py-5 lg:px-20 lg:py-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-black select-none bg-[var(--banner)] overflow-hidden whitespace-nowrap w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl",
                        pulseBanner ? "animate-pulse" : "",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40",
                      ].join(" ")}
                      aria-label="Start online and save fifteen percent"
                    >
                      {/* Animated shimmer effect - flashlight sweep */}
                      <span
                        className="absolute inset-0 shimmer-effect"
                        style={{
                          background: 'linear-gradient(90deg, transparent 0%, transparent 30%, rgba(255,255,255,0.9) 50%, transparent 70%, transparent 100%)',
                          transform: 'translateX(-100%)',
                        }}
                      />
                      <span className="relative z-10">{bannerText}</span>
                    </button>
                  </div>
                )}

                {/* Instructions + Trust badges + Urgency — ONLY on Panel 1 */}
                {stage === "choose" && (
                  <>
                    <p className="mt-4 text-left text-black text-sm sm:text-base font-semibold">
                      Select your service:
                    </p>
                  </>
                )}

                {/* ARIA live region */}
                <div aria-live="polite" className="sr-only">
                  {liveMsg}
                </div>

                {/* Body */}
                <div className="mt-2 sm:mt-4 md:mt-6">
                  {stage === "choose" ? (
                    <>
                      {/* Panel 1 — service list with prices */}
                      <div className="flex flex-wrap gap-3">
                        {list.length > 0 ? list.map((item, idx) => {
                        const serviceName = typeof item === 'string' ? item : item.name;
                        const servicePrice = typeof item === 'string' ? '' : item.price;
                        const originalPrice = typeof item === 'string' ? '' : item.originalPrice;
                        const override = serviceClassOverrides[serviceName] ?? "";
                        const per = list.length > 1 ? idx / (list.length - 1) : 0;
                        const delayMs = Math.round(per * STAGGER_TOTAL_MS);

                        return (
                          <button
                            key={serviceName}
                            type="button"
                            onClick={() => {
                              setChoice(serviceName);
                              setStage("address");
                              setLiveMsg(`Service selected: ${serviceName}`);

                              // Track service selection
                              if (typeof window !== 'undefined' && (window as any).gtag) {
                                (window as any).gtag('event', 'service_selected', {
                                  event_category: 'conversion',
                                  event_label: serviceName,
                                  value: servicePrice
                                });
                              }
                            }}
                            title={serviceName}
                            style={{
                              transitionDelay: `${delayMs}ms`,
                              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                            }}
                            className={[
                              "inline-flex flex-col items-start gap-0.5 w-[calc(50%-0.375rem)] sm:w-auto cursor-pointer relative group overflow-hidden",
                              "rounded-2xl px-5 py-4 text-sm font-bold border-2 border-[#d69535]",
                              "bg-gradient-to-b from-[#ffba42] via-[#ffba42] to-[#e6a739] text-black",
                              "shadow-[0_6px_0_0_#c48a2e,0_8px_12px_rgba(0,0,0,0.3)]",
                              "hover:shadow-[0_4px_0_0_#c48a2e,0_6px_10px_rgba(0,0,0,0.3)] hover:translate-y-[2px]",
                              "active:shadow-[0_2px_0_0_#c48a2e,0_3px_5px_rgba(0,0,0,0.3)] active:translate-y-[4px]",
                              "transition-all duration-150 ease-out sm:min-w-[180px]",
                              "transform-gpu motion-reduce:transition-none motion-reduce:transform-none",
                              "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/30 before:via-transparent before:to-black/10",
                              "after:absolute after:inset-x-0 after:bottom-0 after:h-1/2 after:rounded-b-2xl after:bg-gradient-to-t after:from-black/20 after:to-transparent",
                              listIn
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-6 motion-reduce:translate-x-0",
                              "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/80 focus-visible:scale-105",
                              override,
                            ].join(" ")}
                          >
                            <div className="flex items-center gap-1 w-full relative z-10">
                              <span className="text-left flex-1 font-bold text-base sm:text-sm leading-tight">{serviceName}</span>
                            </div>
                          </button>
                        );
                      }) : (
                        <div className="text-center py-8 text-black/70">
                          <p className="text-lg font-semibold">No services found</p>
                          <p className="text-sm mt-2">Try a different search term</p>
                        </div>
                      )}
                      </div>

                      {/* Search Field */}
                      <div className="mt-4 pt-4 sm:mt-6 sm:pt-6 border-t border-gray-200">
                        <label htmlFor="service-search" className="block text-black text-sm sm:text-base font-semibold mb-2 sm:mb-3">
                          Can't find what you're looking for? Search here:
                        </label>
                        <div className="relative">
                          <input
                            id="service-search"
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="e.g., towing, battery, lockout..."
                            className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl text-base sm:text-lg font-semibold text-black bg-white border-2 border-gray-900 focus:border-[#ffba42] focus:outline-none focus:ring-2 focus:ring-[#ffba42]/50 transition-all placeholder:text-gray-400"
                          />
                          {searchQuery && (
                            <button
                              onClick={() => setSearchQuery("")}
                              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                              aria-label="Clear search"
                            >
                              ✕
                            </button>
                          )}
                        </div>
                        {searchQuery && (
                          <p className="mt-2 text-xs sm:text-sm text-black/60">
                            Showing {list.length} result{list.length !== 1 ? 's' : ''} for "{searchQuery}"
                          </p>
                        )}
                      </div>
                    </>
                  ) : vehiclePayload ? (
                    // Panel 4 — customer info
                    <PopupCustomerInfo
                      payload={{...addressPayload!, vehicle: vehiclePayload}}
                      onBack={() => {
                        // Back to Panel 3 (vehicle info)
                        setVehiclePayload(null);
                        setStage("vehicle");
                      }}
                      // Remove onSubmit - let PopupCustomerInfo handle Square redirect
                    />
                  ) : addressPayload ? (
                    // Panel 3 — vehicle info
                    <PopupVehicleInfo
                      year={year}
                      setYear={setYear}
                      make={make}
                      setMake={setMake}
                      model={model}
                      setModel={setModel}
                      color={color}
                      setColor={setColor}
                      onBack={() => {
                        // Back to Panel 2 (address)
                        setAddressPayload(null);
                        setStage("address");
                      }}
                      onContinue={() => {
                        setVehiclePayload({year, make, model, color});
                        setStage("customer");
                      }}
                      isTowing={addressPayload.isTowing}
                      baseTravelMilesRounded={addressPayload.baseTravelMilesRounded}
                      distanceMilesRounded={addressPayload.distanceMilesRounded}
                      serviceName={addressPayload.service}
                      serviceBasePrice={addressPayload.serviceBasePrice}
                    />
                  ) : (
                    // Panel 2 — address step
                    <PopupAddress
                      choice={choice}
                      address={address}
                      onAddressChange={setAddress}
                      coords={coords}
                      onCoordsChange={setCoords}
                      onBack={() => {
                        // Back to Panel 1
                        setStage("choose");
                      }}
                      onContinue={(payload) => {
                        setAddressPayload(payload);
                        setStage("vehicle");
                      }}
                    />
                  )}
                </div>

              </div>
            </div>
          </div>

          {/* Apple-style Close Button */}
          <button
            onClick={minimizeToLauncher}
            aria-label="Close"
            title="Close"
            className="absolute left-6 top-6 sm:left-8 sm:top-8 z-[70] w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 transition-all duration-200 group cursor-pointer shadow-md hover:shadow-lg"
          >
            {/* X icon */}
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </aside>
      )}
    </>
  );
}
