"use client";

import Link from "next/link";
import Image from "next/image";
import LeftPopup from "@/components/LeftPopup";
import { useEffect } from "react";
import { useVisibility } from "@/hooks/useVisibility";
import { useOnlineDiscount } from "@/hooks/useOnlineDiscount";
import "@/components/PopupAnimations.css";

const BRAND = "#1e1e4a";

export default function HeavyDutyTowingPage() {
  const { config } = useVisibility();
  const { discountText } = useOnlineDiscount();
  const showBanners = config.customerRequestForm?.saveBanners !== false;

  useEffect(() => {
    document.title = "Heavy Duty Towing San Diego | Semi-Truck & Commercial Towing 24/7 | CloseBy Towing";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Heavy duty towing in San Diego. Semi-trucks, buses, heavy equipment & commercial vehicles. 50+ ton capacity, 15-25 min response. Licensed & insured. Call (858) 999-9293."
    );
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.closebytowing.com/heavyduty#service",
        "name": "CloseBy Towing - Heavy Duty Towing",
        "description":
          "24/7 heavy duty towing service in San Diego County for semi-trucks, buses, heavy equipment, and commercial vehicles with 15-25 minute response time",
        "serviceType": [
          "Heavy Duty Towing",
          "Semi-Truck Towing",
          "Commercial Vehicle Towing",
          "Heavy Equipment Transport",
        ],
        "provider": {
          "@type": "LocalBusiness",
          "name": "CloseBy Towing",
          "@id": "https://www.closebytowing.com#organization",
          "telephone": "+1-858-999-9293",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Diego",
            "addressRegion": "CA",
            "postalCode": "92101",
            "addressCountry": "US",
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "32.7157",
            "longitude": "-117.1611",
          },
          "priceRange": "$$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "22",
          },
        },
        "areaServed": {
          "@type": "City",
          "name": "San Diego",
          "containedInPlace": {
            "@type": "State",
            "name": "California",
          },
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "servicePhone": {
            "@type": "ContactPoint",
            "telephone": "+1-858-999-9293",
            "contactType": "Emergency Service",
            "areaServed": "San Diego County",
            "availableLanguage": ["English", "Spanish"],
          },
        },
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          "opens": "00:00",
          "closes": "23:59",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.closebytowing.com/heavyduty#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.closebytowing.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.closebytowing.com/services",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Heavy Duty Towing",
            "item": "https://www.closebytowing.com/heavyduty",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What types of heavy vehicles can CloseBy Towing handle?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We tow semi-trucks (loaded and unloaded), city buses, tour coaches, construction equipment (excavators, loaders, dozers), RVs and motorhomes, commercial box trucks, dump trucks, and any vehicle over 26,000 lbs GVWR. Our heavy duty wreckers have 50+ ton capacity.",
            },
          },
          {
            "@type": "Question",
            "name": "How fast can you respond to a heavy duty towing call?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our average response time is 15-25 minutes across San Diego County. For highway breakdowns and accident scenes, we prioritize rapid dispatch to clear lanes and reduce traffic impact.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you handle semi-truck accidents on the freeway?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We provide full semi-truck accident recovery including load shifts, rollovers, jackknife recovery, cargo securement, and hazmat coordination. We work with CHP and local authorities to clear scenes safely and quickly.",
            },
          },
          {
            "@type": "Question",
            "name": "What does heavy duty towing cost in San Diego?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Heavy duty towing starts at $350+ depending on vehicle size, weight, distance, and complexity. We provide upfront quotes before dispatch. No hidden fees. Insurance direct billing available for commercial fleets.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <LeftPopup />

      {/* Sticky Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-800 to-slate-800 p-4 shadow-2xl lg:hidden">
        <div className="flex gap-3">
          <a
            href="tel:18589999293"
            className="flex-1 bg-[#ffba42] text-black py-4 rounded-xl font-black text-center text-lg"
          >
            Call Now: (858) 999-9293
          </a>
        </div>
      </div>

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="relative flex items-center justify-center overflow-hidden pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900/40 to-slate-950" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Glow effects */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-amber-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gray-500/10 rounded-full blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1800px] w-full px-6 lg:px-16 py-8 md:py-12">
          {/* Top Badge */}
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-gray-700/30 via-slate-700/30 to-gray-700/30 backdrop-blur-2xl border border-white/20 shadow-lg">
              <span className="text-3xl">🚜</span>
              <span className="text-sm font-bold text-white tracking-wider uppercase">
                Heavy Duty Fleet
              </span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                <div
                  className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"
                  style={{ animationDelay: "0.2s" }}
                />
                <div
                  className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"
                  style={{ animationDelay: "0.4s" }}
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left: Copy */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter">
                  Heavy Duty
                  <span className="block mt-3 bg-gradient-to-r from-[#ffba42] via-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Towing
                  </span>
                  <span className="block mt-3 text-3xl sm:text-4xl lg:text-5xl text-white/80 font-bold tracking-tight">
                    San Diego
                  </span>
                </h1>

                <p className="text-xl lg:text-2xl text-white/70 font-light leading-relaxed max-w-xl">
                  Semi-trucks, buses, heavy equipment, and commercial vehicles.
                  Our heavy duty wreckers handle the biggest jobs in San Diego
                  County — 50+ ton capacity, professional operators, specialized
                  rigging.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Response", value: "15-25 min", icon: "⚡" },
                  { label: "Capacity", value: "50+ Tons", icon: "💪" },
                  { label: "Available", value: "24/7", icon: "🕐" },
                ].map((stat, idx) => (
                  <div key={idx} className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-slate-600 rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-500" />
                    <div className="relative p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 text-center">
                      <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className="text-xl sm:text-2xl font-black text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <a
                  href="tel:18589999293"
                  className="group relative px-10 py-6 rounded-2xl font-black text-xl md:text-2xl overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_20px_60px_rgba(255,186,66,0.3)] hover:shadow-[0_20px_80px_rgba(255,186,66,0.5)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ffba42] via-amber-500 to-orange-500" />
                  <span className="relative z-10 text-black flex items-center justify-center gap-3">
                    <svg
                      className="w-6 h-6 md:w-7 md:h-7"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    (858) 999-9293
                  </span>
                </a>

                {showBanners && (
                  <button
                    onClick={() => {
                      const launcherButton = document.querySelector(
                        'button[aria-label*="Get instant price"]'
                      ) as HTMLButtonElement;
                      if (launcherButton) launcherButton.click();
                    }}
                    className="relative px-10 py-6 rounded-2xl font-extrabold text-xl md:text-2xl bg-[#42b3ffff] text-black hover:brightness-110 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
                    style={{
                      boxShadow:
                        "0 0 20px rgba(66, 179, 255, 0.5), 0 0 40px rgba(66, 179, 255, 0.3)",
                    }}
                  >
                    <span
                      className="absolute inset-0 shimmer-effect"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent 0%, transparent 30%, rgba(255,255,255,0.9) 50%, transparent 70%, transparent 100%)",
                        transform: "translateX(-100%)",
                      }}
                    />
                    <span className="relative z-10">
                      <span style={{ color: "red" }}>💰</span> Get Quote & Save{" "}
                      {discountText}
                    </span>
                  </button>
                )}
              </div>

              {/* WhatsApp */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://wa.me/18589999293?text=I%20need%20heavy%20duty%20towing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:brightness-110 rounded-xl text-white font-semibold transition-all hover:scale-105 text-sm"
                  style={{ boxShadow: "0 0 15px rgba(37, 211, 102, 0.3)" }}
                >
                  <span className="text-xl">📱</span>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right: Hero Visual */}
            <div className="relative">
              <div className="absolute -inset-10 bg-gradient-to-r from-gray-600/20 via-slate-500/20 to-gray-600/20 rounded-[4rem] blur-3xl" />
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border-2 border-white/10 shadow-[0_0_80px_rgba(100,100,120,0.2)]">
                <Image
                  src="/services/heavy-duty-hero.webp"
                  alt="Heavy duty tow truck for semi-trucks and commercial vehicle towing in San Diego"
                  fill
                  className="object-cover"
                  priority
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Floating Info Cards */}
                <div className="absolute top-8 left-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl p-4 border border-white/20 shadow-2xl">
                  <div className="text-white/60 text-xs uppercase tracking-wider mb-1">
                    Capacity
                  </div>
                  <div className="text-white font-black text-lg">
                    50+ Tons
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 bg-gradient-to-br from-amber-600/30 to-orange-600/30 backdrop-blur-2xl rounded-2xl p-4 border border-amber-500/30 shadow-2xl">
                  <div className="text-white/80 text-xs uppercase tracking-wider mb-1">
                    Response Time
                  </div>
                  <div className="text-white font-black text-2xl">
                    15-25 Min
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TRUST BADGES */}
      {/* ============================================ */}
      <div className="bg-gradient-to-b from-slate-950 to-black py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: "🏆",
                title: "DOT Certified",
                sub: "Licensed Professional",
              },
              {
                icon: "✅",
                title: "Fully Insured",
                sub: "$1M+ Coverage",
              },
              {
                icon: "🛡️",
                title: "50+ Ton Capacity",
                sub: "Heavy Wreckers",
              },
              {
                icon: "⭐",
                title: "5.0 Google Rating",
                sub: "Top Rated",
              },
            ].map((badge, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl mb-2">{badge.icon}</div>
                <p className="text-white font-bold text-sm md:text-base">
                  {badge.title}
                </p>
                <p className="text-white/50 text-xs">{badge.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* WHAT WE TOW */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-black via-slate-950 to-black">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-14">
            <div className="inline-block px-6 py-2 rounded-full bg-amber-600/10 border border-amber-500/20 text-amber-400 text-sm font-bold mb-6">
              VEHICLE TYPES
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              What We{" "}
              <span className="bg-gradient-to-r from-[#ffba42] to-orange-500 bg-clip-text text-transparent">
                Tow
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              If it&apos;s big, we can move it. Our heavy duty fleet is equipped
              for any commercial or industrial towing challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🚛",
                title: "Semi-Trucks & Trailers",
                desc: "Loaded or unloaded 18-wheelers, tractor-trailers, and freight haulers. Includes load shift recovery and cargo securement.",
              },
              {
                icon: "🚌",
                title: "Buses & Coaches",
                desc: "City transit buses, tour coaches, school buses, and shuttle vans. Safe passenger vehicle recovery.",
              },
              {
                icon: "🏗️",
                title: "Construction Equipment",
                desc: "Excavators, bulldozers, loaders, cranes, and heavy machinery. Specialized rigging for oversized loads.",
              },
              {
                icon: "🚒",
                title: "Emergency Vehicles",
                desc: "Fire trucks, ambulances, utility trucks, and government fleet vehicles requiring careful handling.",
              },
              {
                icon: "🚚",
                title: "Dump Trucks & Tankers",
                desc: "Loaded dump trucks, fuel tankers, water tankers, and specialized hauling vehicles.",
              },
              {
                icon: "🏭",
                title: "Industrial Equipment",
                desc: "Generators, transformers, shipping containers, and other heavy industrial machinery transport.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative p-6 bg-white/[0.04] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-slate-700 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500" />
                <div className="relative">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* HOW IT WORKS */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-black to-slate-950">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <div className="inline-block px-6 py-2 rounded-full bg-amber-600/10 border border-amber-500/20 text-amber-400 text-sm font-bold mb-6">
              THE PROCESS
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              How It{" "}
              <span className="bg-gradient-to-r from-[#ffba42] to-orange-500 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Call Us 24/7",
                desc: "Describe your vehicle, location, and situation. We'll give you an upfront quote and dispatch the right heavy wrecker immediately.",
                color: "from-amber-500 to-orange-500",
              },
              {
                step: "02",
                title: "We Arrive in 15-25 Minutes",
                desc: "Our certified heavy duty operators arrive with the right equipment — heavy wreckers, air cushion recovery, specialized rigging, and load securement gear.",
                color: "from-orange-500 to-red-500",
              },
              {
                step: "03",
                title: "Professional Assessment",
                desc: "We assess the situation, plan the safest recovery method, and coordinate with authorities if needed. No surprises — you'll know the plan before we start.",
                color: "from-red-500 to-rose-500",
              },
              {
                step: "04",
                title: "Safe Recovery & Transport",
                desc: "Your vehicle or equipment is carefully recovered and transported to your destination. Full documentation provided for insurance and fleet records.",
                color: "from-emerald-500 to-green-500",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
                >
                  <span className="text-white font-black text-xl">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHY CHOOSE US */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-slate-950 to-black">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Why{" "}
              <span className="bg-gradient-to-r from-[#ffba42] to-orange-500 bg-clip-text text-transparent">
                CloseBy
              </span>{" "}
              for Heavy Duty?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "💪",
                title: "50+ Ton Capacity",
                desc: "Our heavy wreckers handle the biggest jobs — fully loaded semis, construction equipment, and oversized vehicles.",
              },
              {
                icon: "⚡",
                title: "15-25 Min Response",
                desc: "Fast dispatch across all of San Diego County. We understand that downtime costs money for commercial operations.",
              },
              {
                icon: "🔧",
                title: "Specialized Equipment",
                desc: "Air cushion recovery, rotator cranes, heavy-duty winches, and load securement gear for any scenario.",
              },
              {
                icon: "📋",
                title: "Insurance Direct Billing",
                desc: "We work with all major commercial insurers. Fleet accounts welcome. Streamlined paperwork for your records.",
              },
              {
                icon: "🛡️",
                title: "Licensed & Insured",
                desc: "DOT certified, fully insured with $1M+ coverage. Your vehicle and cargo are protected throughout the process.",
              },
              {
                icon: "🕐",
                title: "24/7 Availability",
                desc: "Breakdowns and accidents don't follow a schedule. Our heavy duty fleet is ready around the clock, every day of the year.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/[0.04] rounded-2xl border border-white/10"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ SECTION */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-black to-slate-950">
        <div className="mx-auto max-w-[900px]">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[#ffba42] to-orange-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What types of heavy vehicles can CloseBy Towing handle?",
                a: "We tow semi-trucks (loaded and unloaded), city buses, tour coaches, construction equipment (excavators, loaders, dozers), RVs and motorhomes, commercial box trucks, dump trucks, and any vehicle over 26,000 lbs GVWR. Our heavy duty wreckers have 50+ ton capacity.",
              },
              {
                q: "How fast can you respond to a heavy duty towing call?",
                a: "Our average response time is 15-25 minutes across San Diego County. For highway breakdowns and accident scenes, we prioritize rapid dispatch to clear lanes and reduce traffic impact.",
              },
              {
                q: "Do you handle semi-truck accidents on the freeway?",
                a: "Yes. We provide full semi-truck accident recovery including load shifts, rollovers, jackknife recovery, cargo securement, and hazmat coordination. We work with CHP and local authorities to clear scenes safely and quickly.",
              },
              {
                q: "What does heavy duty towing cost in San Diego?",
                a: "Heavy duty towing starts at $350+ depending on vehicle size, weight, distance, and complexity. We provide upfront quotes before dispatch. No hidden fees. Insurance direct billing available for commercial fleets.",
              },
              {
                q: "Do you offer fleet accounts for commercial companies?",
                a: "Yes. We offer priority dispatch, volume pricing, and dedicated account management for commercial fleets, trucking companies, construction firms, and transit operators across San Diego.",
              },
              {
                q: "Can you transport heavy equipment that isn't a vehicle?",
                a: "Yes. We transport generators, transformers, industrial machinery, shipping containers, and other heavy equipment. We have specialized rigging and flatbed capabilities for oversized non-vehicle loads.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/[0.04] rounded-2xl border border-white/10"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-white/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-slate-950 to-black">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Need a{" "}
            <span className="bg-gradient-to-r from-[#ffba42] to-orange-500 bg-clip-text text-transparent">
              Heavy Wrecker
            </span>
            ?
          </h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Don&apos;t wait. Our heavy duty fleet is standing by 24/7 across San
            Diego County. Fast dispatch, professional operators, upfront pricing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:18589999293"
              className="group relative px-12 py-7 rounded-2xl font-black text-xl md:text-2xl overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_20px_60px_rgba(255,186,66,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ffba42] via-amber-500 to-orange-500" />
              <span className="relative z-10 text-black flex items-center justify-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (858) 999-9293
              </span>
            </a>

            <Link
              href="/services"
              className="px-10 py-6 rounded-2xl border-2 border-white/20 text-white font-bold text-lg hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom padding for mobile CTA bar */}
      <div className="h-24 lg:hidden" />
    </main>
  );
}
