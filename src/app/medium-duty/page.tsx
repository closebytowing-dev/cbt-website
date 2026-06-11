"use client";

import Link from "next/link";
import LeftPopup from "@/components/LeftPopup";
import { useEffect } from "react";
import { useVisibility } from "@/hooks/useVisibility";
import { useOnlineDiscount } from "@/hooks/useOnlineDiscount";
import "@/components/PopupAnimations.css";

export default function MediumDutyTowingPage() {
  const { config } = useVisibility();
  const { discountText } = useOnlineDiscount();
  const showBanners = config.customerRequestForm?.saveBanners !== false;

  useEffect(() => {
    document.title = "Medium Duty Towing San Diego | Box Trucks, Vans & Work Trucks 24/7 | CloseBy Towing";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Medium duty towing in San Diego. Box trucks, delivery vans, work trucks, passenger vans & commercial vehicles up to 26,000 lbs. 20-30 min response. Licensed & insured. Call (858) 999-9293."
    );
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.closebytowing.com/medium-duty#service",
        "name": "CloseBy Towing - Medium Duty Towing",
        "description":
          "24/7 medium duty towing service in San Diego County for box trucks, delivery vans, work trucks, passenger vans, and commercial vehicles up to 26,000 lbs GVWR with 20-30 minute response time",
        "serviceType": [
          "Medium Duty Towing",
          "Box Truck Towing",
          "Delivery Van Towing",
          "Work Truck Towing",
          "Commercial Vehicle Towing",
          "Passenger Van Towing",
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
          "priceRange": "$$",
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
        "@id": "https://www.closebytowing.com/medium-duty#breadcrumb",
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
            "name": "Medium Duty Towing",
            "item": "https://www.closebytowing.com/medium-duty",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What vehicles qualify as medium duty towing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Medium duty towing covers vehicles between 10,000 and 26,000 lbs GVWR. This includes box trucks (16–26 ft), delivery vans, passenger vans, work trucks, Class C motorhomes, mini buses, flatbed trucks, and most commercial vehicles that are too large for a standard flatbed but don't require a heavy wrecker.",
            },
          },
          {
            "@type": "Question",
            "name": "How fast can you respond to a medium duty towing call?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our average response time for medium duty towing is 20-30 minutes across San Diego County. We dispatch the right equipment immediately so you're not waiting for an undersized or oversized truck.",
            },
          },
          {
            "@type": "Question",
            "name": "Can you tow a loaded box truck?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We tow loaded and unloaded box trucks up to 26,000 lbs GVWR. If your cargo puts you over that threshold, our heavy duty fleet can handle it. We'll ask about weight and load when you call so we send the right equipment.",
            },
          },
          {
            "@type": "Question",
            "name": "What does medium duty towing cost in San Diego?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Medium duty towing starts at $150+ depending on vehicle size, weight, and distance. We provide upfront quotes before dispatch with no hidden fees. Insurance direct billing is available for commercial fleets.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you tow Amazon, FedEx, and UPS delivery vans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We regularly tow delivery vans and sprinters for last-mile delivery operators across San Diego. We understand route-critical downtime and dispatch quickly to minimize delivery delays.",
            },
          },
          {
            "@type": "Question",
            "name": "Can you handle contractor work trucks with equipment in the bed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We tow contractor trucks, service trucks, and utility vehicles with tools and equipment onboard. We use proper load securement to protect your gear during transport.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you offer fleet accounts for delivery and service companies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We offer priority dispatch, volume pricing, and dedicated account management for delivery fleets, service companies, and commercial operators across San Diego County. Direct billing and monthly invoicing available.",
            },
          },
          {
            "@type": "Question",
            "name": "What's the difference between medium duty and heavy duty towing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Medium duty towing covers vehicles between roughly 10,000 and 26,000 lbs GVWR — box trucks, vans, work trucks. Heavy duty towing covers vehicles over 26,000 lbs such as semi-trucks, buses, and construction equipment. If you're unsure which you need, call us and describe your vehicle — we'll send the right truck.",
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
      <section className="relative flex items-center justify-center overflow-hidden pt-4 pb-16 md:pt-6 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900/40 to-slate-950" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-amber-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gray-500/10 rounded-full blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1800px] w-full px-6 lg:px-16 py-4 md:py-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left: Copy */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter">
                  Medium Duty
                  <span className="block mt-3 bg-gradient-to-r from-[#ffba42] via-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Towing
                  </span>
                  <span className="block mt-3 text-3xl sm:text-4xl lg:text-5xl text-white/80 font-bold tracking-tight">
                    San Diego
                  </span>
                </h1>

                <p className="text-xl lg:text-2xl text-white/70 font-light leading-relaxed max-w-xl">
                  Box trucks, delivery vans, work trucks, passenger vans, and commercial
                  vehicles up to 26,000 lbs. Too big for a standard flatbed, too small
                  for a heavy wrecker — our medium duty fleet is built exactly for the
                  gap. Fast dispatch across all of San Diego County, 24 hours a day.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Response", value: "20-30 min", icon: "⚡" },
                  { label: "Capacity", value: "26K lbs", icon: "💪" },
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

                <a
                  href="https://wa.me/18589999293?text=I%20need%20medium%20duty%20towing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-6 bg-[#25D366] hover:brightness-110 rounded-2xl text-white font-bold text-xl transition-all hover:scale-105"
                  style={{ boxShadow: "0 0 15px rgba(37, 211, 102, 0.3)" }}
                >
                  <span className="text-xl">📱</span>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right: Hero Image Placeholder */}
            <div className="relative">
              <div className="absolute -inset-10 bg-gradient-to-r from-gray-600/20 via-slate-500/20 to-gray-600/20 rounded-[4rem] blur-3xl" />
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border-2 border-white/10 shadow-[0_0_80px_rgba(100,100,120,0.2)] bg-white/5 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="text-7xl mb-4">🚚</div>
                  <p className="text-white/40 text-sm font-medium uppercase tracking-widest">
                    Photo Coming Soon
                  </p>
                  <p className="text-white/25 text-xs mt-1">
                    Medium Duty Tow Truck
                  </p>
                </div>

                {/* Floating Info Cards */}
                <div className="absolute top-8 left-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl p-4 border border-white/20 shadow-2xl">
                  <div className="text-white/60 text-xs uppercase tracking-wider mb-1">
                    Max GVWR
                  </div>
                  <div className="text-white font-black text-lg">
                    26,000 lbs
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 bg-gradient-to-br from-amber-600/30 to-orange-600/30 backdrop-blur-2xl rounded-2xl p-4 border border-amber-500/30 shadow-2xl">
                  <div className="text-white/80 text-xs uppercase tracking-wider mb-1">
                    Response Time
                  </div>
                  <div className="text-white font-black text-2xl">
                    20-30 Min
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
                title: "Up to 26K lbs",
                sub: "Medium Duty Fleet",
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
      {/* VEHICLE TYPES WE TOW */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-black via-slate-950 to-black">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-14">
            <div className="inline-block px-6 py-2 rounded-full bg-amber-600/10 border border-amber-500/20 text-amber-400 text-sm font-bold mb-6">
              VEHICLE TYPES
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Vehicle Types We{" "}
              <span className="bg-gradient-to-r from-[#ffba42] to-orange-500 bg-clip-text text-transparent">
                Tow
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              If it&apos;s too big for a standard flatbed but doesn&apos;t need a full heavy wrecker,
              our medium duty fleet is the right tool. We handle vehicles up to 26,000 lbs GVWR
              across all of San Diego County — from delivery vans in Mira Mesa to box trucks
              on I-5.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "📦",
                title: "Box Trucks",
                desc: "16-to-26-foot moving and delivery box trucks, including U-Haul, Penske, Budget, and commercial cargo trucks. Loaded or unloaded, broken down or after an accident — we tow them all.",
              },
              {
                icon: "🚐",
                title: "Cargo & Sprinter Vans",
                desc: "Mercedes Sprinter, Ford Transit, Ram ProMaster, and full-size cargo vans used by delivery fleets, contractors, and service companies. Quick response to minimize downtime for route-critical vehicles.",
              },
              {
                icon: "🚌",
                title: "Passenger & Shuttle Vans",
                desc: "15-passenger vans, hotel shuttles, airport transfers, charter vans, and transit minibuses. We handle coordinated passenger vehicle recovery with care.",
              },
              {
                icon: "🔧",
                title: "Work & Service Trucks",
                desc: "Contractor flatbeds, utility trucks, service body trucks, and 1-ton dually pickups loaded with equipment. Tools and gear onboard are properly secured during transport.",
              },
              {
                icon: "🚚",
                title: "Medium Commercial Trucks",
                desc: "Class 4, 5, and 6 commercial trucks including medium-duty cab-overs, straight trucks, and light freighters. If it's under 26,000 lbs GVWR, our fleet handles it.",
              },
              {
                icon: "🏕️",
                title: "Class C Motorhomes",
                desc: "Mid-size motorhomes and camper vans that are too heavy for light-duty flatbeds. We tow Class C motorhomes safely with proper load distribution and securing.",
              },
              {
                icon: "🚑",
                title: "Non-Emergency Medical Vehicles",
                desc: "Ambulances, medical transport vans, and non-emergency medical vehicles requiring careful handling and documentation. We understand the urgency of getting these vehicles back in service.",
              },
              {
                icon: "🏗️",
                title: "Light Equipment Trailers",
                desc: "Skid steers, mini excavators, small construction equipment, and loaded trailers under 26,000 lbs GVWR. Proper rigging and load securement for safe transport to job sites.",
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

          <p className="text-center text-white/50 mt-10 text-base max-w-3xl mx-auto">
            Have a car, truck, or SUV instead?{" "}
            <Link href="/towing" className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors">
              Standard towing
            </Link>{" "}
            starts at $75. Need something bigger like a semi-truck or bus? See our{" "}
            <Link href="/heavyduty" className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors">
              heavy duty towing
            </Link>{" "}
            service.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SAN DIEGO COMMERCIAL COVERAGE */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-black to-slate-950">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-block px-6 py-2 rounded-full bg-amber-600/10 border border-amber-500/20 text-amber-400 text-sm font-bold mb-6">
                LOCAL COVERAGE
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8">
                San Diego{" "}
                <span className="bg-gradient-to-r from-[#ffba42] to-orange-500 bg-clip-text text-transparent">
                  Commercial Towing
                </span>
              </h2>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  San Diego&apos;s last-mile delivery economy runs on box trucks and sprinter vans.
                  When a{" "}
                  <strong className="text-white/90">FedEx Transit van</strong> breaks down on{" "}
                  <strong className="text-white/90">Convoy Street</strong> in Kearny Mesa or an{" "}
                  <strong className="text-white/90">Amazon delivery truck</strong> loses power on{" "}
                  <strong className="text-white/90">I-15</strong> near Mira Mesa, every minute
                  costs missed deliveries and customer complaints. CloseBy Towing dispatches
                  medium duty wreckers across San Diego County with a 20-to-30-minute average
                  response time.
                </p>
                <p>
                  Our operators are familiar with San Diego&apos;s commercial corridors.{" "}
                  <strong className="text-white/90">Kearny Mesa</strong>,{" "}
                  <strong className="text-white/90">Mira Mesa</strong>, and{" "}
                  <strong className="text-white/90">Sorrento Valley</strong> are dense with
                  industrial parks and distribution hubs where work trucks and delivery vans
                  are constantly in motion.{" "}
                  <strong className="text-white/90">Otay Mesa</strong> and{" "}
                  <strong className="text-white/90">National City</strong> handle heavy cross-border
                  commercial activity with medium duty vehicles that require specialized equipment
                  to tow safely.
                </p>
                <p>
                  We also cover{" "}
                  <strong className="text-white/90">Downtown San Diego</strong> and the{" "}
                  <strong className="text-white/90">Port of San Diego</strong> where service
                  trucks and commercial vans operate in tight urban conditions,{" "}
                  <strong className="text-white/90">Chula Vista</strong> and{" "}
                  <strong className="text-white/90">El Cajon</strong> along the I-805 and I-8
                  corridors, and North County cities including{" "}
                  <strong className="text-white/90">Escondido</strong>,{" "}
                  <strong className="text-white/90">Oceanside</strong>, and{" "}
                  <strong className="text-white/90">Carlsbad</strong> where contractor trucks
                  and service vehicles are common.
                </p>
                <p>
                  If your vehicle was involved in a collision, our{" "}
                  <Link href="/collision-recovery" className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors">
                    collision recovery
                  </Link>{" "}
                  team handles accident scene management and coordinates with local authorities.
                  For vehicles stuck off-road or in a ditch, our{" "}
                  <Link href="/winch-out" className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors">
                    winch-out service
                  </Link>{" "}
                  extracts medium duty vehicles safely from any terrain.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Freeways & Corridors We Cover
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    road: "Interstate 5 (I-5)",
                    detail: "San Ysidro to Oceanside — primary corridor for delivery and commercial vans serving coastal San Diego",
                  },
                  {
                    road: "Interstate 15 (I-15)",
                    detail: "National City to Escondido — major route for contractor trucks and commercial vehicles heading inland",
                  },
                  {
                    road: "Interstate 8 (I-8)",
                    detail: "Ocean Beach to El Cajon — work truck and service van breakdowns, steep grades east of Mission Valley",
                  },
                  {
                    road: "Interstate 805 (I-805)",
                    detail: "Chula Vista to Sorrento Valley — high-volume route for delivery and commercial vehicles parallel to I-5",
                  },
                  {
                    road: "SR-52 / SR-56",
                    detail: "Mira Mesa, Sorrento Valley, Carmel Valley — dense with distribution hubs and industrial parks",
                  },
                  {
                    road: "SR-78",
                    detail: "North County commercial corridor through Escondido, San Marcos, Vista, and Oceanside",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-white/[0.04] rounded-2xl border border-white/10"
                  >
                    <h3 className="text-lg font-bold text-amber-400 mb-1">
                      {item.road}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-br from-amber-600/10 to-orange-600/10 rounded-2xl border border-amber-500/20 mt-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  Fleet Accounts for Delivery & Service Companies
                </h3>
                <p className="text-white/60 leading-relaxed mb-4">
                  Delivery companies, service fleets, and commercial operators across San Diego
                  trust CloseBy Towing for priority dispatch, pre-negotiated rates, and direct
                  billing. We understand that vehicle downtime directly affects your bottom line.
                </p>
                <a
                  href="tel:18589999293"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffba42] text-black rounded-xl font-bold hover:brightness-110 transition-all"
                >
                  Set Up a Fleet Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* HOW IT WORKS */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-slate-950 to-black">
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
                desc: "Tell us your vehicle type, weight if you know it, and your location. We'll give you an upfront quote and dispatch the right medium duty wrecker immediately. No guesswork — we ask the right questions to send exactly what you need.",
                color: "from-amber-500 to-orange-500",
              },
              {
                step: "02",
                title: "We Arrive in 20-30 Minutes",
                desc: "Our medium duty operators arrive with the correct equipment for your vehicle class. GPS-tracked trucks so you know when help is on the way. We bring the right rigging and load securement for your specific vehicle.",
                color: "from-orange-500 to-red-500",
              },
              {
                step: "03",
                title: "Safe Hook-Up & Assessment",
                desc: "We assess your vehicle, choose the safest attachment method, and protect your cargo or equipment during load. For accident scenes, we coordinate with authorities if needed. You know the plan before we move anything.",
                color: "from-red-500 to-rose-500",
              },
              {
                step: "04",
                title: "Transport to Your Destination",
                desc: "Your vehicle is transported safely to the repair shop, fleet yard, or any other destination. We provide full documentation for your insurance and fleet records. Direct billing available for commercial accounts.",
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
      <section className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-black to-slate-950">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Why{" "}
              <span className="bg-gradient-to-r from-[#ffba42] to-orange-500 bg-clip-text text-transparent">
                CloseBy
              </span>{" "}
              for Medium Duty?
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Medium duty towing requires the right equipment — not a standard flatbed that
              can&apos;t handle the weight, and not an oversized heavy wrecker that bills you
              for capacity you don&apos;t need. Here&apos;s why San Diego&apos;s delivery
              and service fleets choose CloseBy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Right-Sized Equipment",
                desc: "We dispatch medium duty wreckers built for your vehicle class — not undersized flatbeds or overkill heavy trucks. Proper equipment means faster hookup, safer transport, and fair pricing.",
              },
              {
                icon: "⚡",
                title: "20-30 Min Response",
                desc: "Fast dispatch across all of San Diego County. We understand that a broken-down delivery van or work truck means missed routes and lost revenue. Speed matters.",
              },
              {
                icon: "🔧",
                title: "Proper Rigging & Securement",
                desc: "Medium duty vehicles require the right attachment points and load securement gear. Our operators are trained on box trucks, sprinters, and commercial vans so nothing gets damaged in transit.",
              },
              {
                icon: "📋",
                title: "Insurance Direct Billing",
                desc: "We work with all major commercial insurers. Fleet accounts welcome. Detailed documentation for every service call including photos and weight logs.",
              },
              {
                icon: "🛡️",
                title: "Licensed & Insured",
                desc: "DOT certified, fully insured with $1M+ coverage. Your vehicle and any onboard cargo are protected throughout the recovery process.",
              },
              {
                icon: "🕐",
                title: "24/7/365 Availability",
                desc: "Breakdowns don't follow business hours. Whether it&apos;s a 2am delivery truck or a weekend contractor vehicle, our medium duty fleet is always on standby.",
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
      <section className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-slate-950 to-black">
        <div className="mx-auto max-w-[900px]">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[#ffba42] to-orange-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Everything you need to know about medium duty towing in San Diego.
              Can&apos;t find your answer? Call us at{" "}
              <a href="tel:18589999293" className="text-amber-400 hover:text-amber-300 transition-colors">
                (858) 999-9293
              </a>{" "}
              and we&apos;ll help right away.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What vehicles qualify as medium duty towing?",
                a: "Medium duty towing covers vehicles between 10,000 and 26,000 lbs GVWR. This includes box trucks (16–26 ft), delivery vans (Sprinter, Transit, ProMaster), passenger vans, work trucks, Class C motorhomes, mini buses, and most Class 4–6 commercial trucks. If your vehicle is larger than a pickup but smaller than a semi-truck, it likely falls in the medium duty range.",
              },
              {
                q: "How fast can you respond to a medium duty towing call?",
                a: "Our average response time for medium duty towing is 20-30 minutes across San Diego County. We dispatch the right equipment immediately so you're not waiting for an undersized flatbed that can't handle your vehicle's weight, or paying for an oversized heavy wrecker you don't need.",
              },
              {
                q: "Can you tow a loaded box truck?",
                a: "Yes. We tow loaded and unloaded box trucks up to 26,000 lbs GVWR. If your loaded cargo weight puts you significantly over that threshold, our heavy duty fleet can step in. When you call, tell us the truck size and whether it's loaded — we'll send the right equipment.",
              },
              {
                q: "What does medium duty towing cost in San Diego?",
                a: "Medium duty towing starts at $150+ depending on vehicle size, weight, distance, and complexity. We provide upfront quotes before dispatch with no hidden fees. Insurance direct billing is available for commercial fleet accounts. Call (858) 999-9293 for a quote before we roll.",
              },
              {
                q: "Do you tow Amazon, FedEx, and UPS delivery vans?",
                a: "Yes. We regularly tow Sprinters, Transits, and ProMasters for last-mile delivery operators across San Diego. We know that every hour a delivery vehicle is down means missed stops and customer complaints. We dispatch fast and document everything for your fleet records.",
              },
              {
                q: "Can you handle contractor work trucks with equipment in the bed?",
                a: "Yes. We tow contractor trucks, service trucks, and utility vehicles with tools and equipment onboard. Our operators use proper load securement to keep your gear safe during transport. We'll ask about the load before we arrive so we bring the right rigging.",
              },
              {
                q: "Do you offer fleet accounts for delivery and service companies?",
                a: "Yes. We offer priority dispatch, pre-negotiated volume pricing, and dedicated account management for delivery fleets, service companies, and commercial operators. Monthly billing, direct insurance invoicing, and detailed service reports are available for fleet customers.",
              },
              {
                q: "What's the difference between medium duty and heavy duty towing?",
                a: "Medium duty covers vehicles up to 26,000 lbs GVWR — box trucks, vans, work trucks, Class C motorhomes. Heavy duty covers vehicles over 26,000 lbs — semi-trucks, full-size buses, construction equipment, and Class A/B motorhomes. Not sure which you need? Call us and describe your vehicle — we'll figure it out and send the right truck.",
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
      {/* CROSS-SERVICE LINKS */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-black to-slate-950">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              More{" "}
              <span className="bg-gradient-to-r from-[#ffba42] to-orange-500 bg-clip-text text-transparent">
                Services
              </span>{" "}
              from CloseBy
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Medium duty towing is one part of what we do. CloseBy Towing offers a full
              range of towing and roadside services across San Diego County.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                href: "/towing",
                icon: "🚗",
                title: "Standard Towing",
                desc: "Car, truck, and SUV towing with flatbed and wheel-lift options. 20-minute average response. Upfront pricing from $75.",
              },
              {
                href: "/heavyduty",
                icon: "🚛",
                title: "Heavy Duty Towing",
                desc: "Semi-trucks, buses, RVs, and construction equipment over 26,000 lbs. 50+ ton capacity. Rotator cranes and specialized rigging.",
              },
              {
                href: "/collision-recovery",
                icon: "💥",
                title: "Collision Recovery",
                desc: "Accident scene management, debris cleanup, and vehicle recovery. Direct insurance billing. We work with CHP and local police.",
              },
              {
                href: "/winch-out",
                icon: "🔗",
                title: "Winch-Out Service",
                desc: "Stuck in mud, sand, a ditch, or off the road? Our winches extract vehicles of all sizes safely without further damage.",
              },
            ].map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="group relative p-6 bg-white/[0.04] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-amber-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/10 to-orange-600/10 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
                <div className="relative">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <span className="text-amber-400 text-sm font-bold group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </Link>
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
              Medium Duty Tow
            </span>
            ?
          </h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Don&apos;t wait. Our medium duty fleet is standing by 24/7 across San Diego
            County. Fast dispatch, right-sized equipment, upfront pricing. Box trucks,
            delivery vans, work trucks, and commercial vehicles — we handle them all.
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
