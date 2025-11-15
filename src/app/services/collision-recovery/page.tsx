"use client";

import Link from "next/link";
import Image from "next/image";
import LeftPopup from "@/components/LeftPopup";
import { useEffect } from "react";
import { useServicePricing } from "@/hooks/useServicePricing";

const BANNER = "#ffba42";
const BRAND = "#1e1e4a";

export default function CollisionRecoveryPage() {
  // Fetch dynamic pricing from Firebase
  const { standardPrice, onlinePrice, loading, error } = useServicePricing("Collision Recovery");

  // Set document metadata
  useEffect(() => {
    document.title = "Emergency Collision Recovery San Diego | 24/7 Accident Towing <25 Min | CloseBy";

    // Update or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'IMMEDIATE accident towing San Diego! Professional collision recovery in less than 25 minutes. Insurance direct billing. Licensed, insured, GPS tracking. Call (858) 999-9293 NOW!');
  }, []);

  const enhancedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EmergencyService",
        "@id": "https://closebytowing.com/services/collision-recovery#service",
        "name": "CloseBy Towing - Emergency Collision Recovery",
        "description": "24/7 emergency collision recovery and accident towing service in San Diego County with less than 25 minute response time",
        "serviceType": ["Collision Recovery", "Accident Towing", "Emergency Vehicle Recovery"],
        "provider": {
          "@type": "LocalBusiness",
          "name": "CloseBy Towing",
          "@id": "https://closebytowing.com#organization",
          "telephone": "+1-858-999-9293",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Diego",
            "addressRegion": "CA",
            "postalCode": "92101",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "32.7157",
            "longitude": "-117.1611"
          },
          "priceRange": "$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1247"
          }
        },
        "areaServed": {
          "@type": "City",
          "name": "San Diego",
          "containedInPlace": {
            "@type": "State",
            "name": "California"
          }
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "servicePhone": {
            "@type": "ContactPoint",
            "telephone": "+1-858-999-9293",
            "contactType": "Emergency Service",
            "areaServed": "San Diego County",
            "availableLanguage": ["English", "Spanish"]
          }
        },
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://closebytowing.com/services/collision-recovery#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://closebytowing.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://closebytowing.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Collision Recovery",
            "item": "https://closebytowing.com/services/collision-recovery"
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enhancedSchema) }}
      />

      <LeftPopup />

      {/* Live Availability Indicator */}
      <div className="fixed top-4 right-4 z-50 bg-red-600 text-white px-6 py-3 rounded-full shadow-2xl animate-pulse hidden md:block">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
          </div>
          <span className="font-bold text-sm">3 trucks available NOW in your area</span>
        </div>
      </div>

      {/* Sticky Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-orange-600 p-4 shadow-2xl lg:hidden">
        <div className="flex gap-3">
          <a href="tel:18589999293" className="flex-1 bg-white text-red-600 py-4 rounded-xl font-black text-center text-lg">
            📞 CALL NOW
          </a>
        </div>
      </div>

      {/* CINEMATIC HERO - Revolutionary Design */}
      <section className="relative flex items-center justify-center overflow-hidden pt-8 pb-16 md:pt-12 md:pb-20">
        {/* Animated Mesh Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-red-950/20 to-slate-950"></div>

        {/* Animated Particles Effect - Optimized */}
        <div className="absolute inset-0 hidden md:block">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500/30 rounded-full animate-pulse"
              style={{
                left: `${i * 12.5}%`,
                top: `${(i % 3) * 33}%`,
                animationDuration: `${5 + i}s`,
                animationDelay: `${i * 0.4}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Radial Glow Effects */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 mx-auto max-w-[1800px] w-full px-6 lg:px-16 py-8 md:py-12">
          {/* Top Badge */}
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-600/20 via-orange-600/20 to-red-600/20 backdrop-blur-2xl border border-red-500/30 shadow-[0_0_40px_rgba(239,68,68,0.2)]">
              <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-bold text-white tracking-wider">EMERGENCY RESPONSE</span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left: Epic Typography */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-7xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter">
                  When
                  <span className="block mt-4 bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">
                    Seconds
                  </span>
                  <span className="block mt-4 text-white/90">
                    Matter
                  </span>
                </h1>

                <p className="text-2xl lg:text-3xl text-white/70 font-light leading-relaxed max-w-xl">
                  Professional collision recovery that treats your vehicle—and you—with the care you deserve in the most stressful moments.
                </p>
              </div>

              {/* Quick Stats - Inline */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Response", value: "<20min", icon: "⚡" },
                  { label: "Available", value: "24/7", icon: "🕐" },
                  { label: "Insurance", value: "All Accepted", icon: "✓" }
                ].map((stat, idx) => (
                  <div key={idx} className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-500"></div>
                    <div className="relative p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 text-center">
                      <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className="text-2xl font-black text-white">{stat.value}</div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <a
                  href="tel:18589999293"
                  className="group relative px-12 py-7 rounded-2xl font-black text-xl md:text-2xl overflow-hidden transition-all duration-500 hover:scale-110 shadow-[0_20px_60px_rgba(239,68,68,0.4)] hover:shadow-[0_20px_80px_rgba(239,68,68,0.6)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 text-white flex items-center justify-center gap-3">
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="hidden sm:inline">Emergency Recovery: </span>(858) 999-9293
                  </span>
                </a>

                <button
                  onClick={() => {
                    // Find and click the popup launcher button
                    const launcherButton = document.querySelector('button[aria-label*="Get instant price"]') as HTMLButtonElement;
                    if (launcherButton) {
                      launcherButton.click();
                    }
                  }}
                  className="relative px-12 py-7 rounded-2xl font-extrabold text-xl md:text-2xl bg-[#42b3ffff] text-black hover:brightness-110 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
                  style={{
                    boxShadow: '0 0 20px rgba(66, 179, 255, 0.5), 0 0 40px rgba(66, 179, 255, 0.3)',
                  }}
                >
                  {/* Animated shimmer effect */}
                  <span
                    className="absolute inset-0 shimmer-effect"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, transparent 30%, rgba(255,255,255,0.9) 50%, transparent 70%, transparent 100%)',
                      transform: 'translateX(-100%)',
                    }}
                  />
                  <span className="relative z-10 hidden sm:inline">💰 Order Online & Save 15%</span>
                  <span className="relative z-10 sm:hidden">💰 Save 15%</span>
                </button>
              </div>

              {/* Additional Contact Options */}
              <div className="flex flex-wrap gap-4 pt-6">
                <a
                  href="https://wa.me/18589999293?text=I%20need%20collision%20recovery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:brightness-110 rounded-xl text-white font-semibold transition-all hover:scale-105 text-sm"
                  style={{
                    boxShadow: '0 0 15px rgba(37, 211, 102, 0.3)',
                  }}
                >
                  <span className="text-xl">📱</span>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right: Dramatic Hero Image with Overlay */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-10 bg-gradient-to-r from-red-600/20 via-orange-600/30 to-red-600/20 rounded-[4rem] blur-3xl"></div>

              {/* Main Image Container - Extra Large */}
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border-2 border-red-500/30 shadow-[0_0_100px_rgba(239,68,68,0.3)]">
                <Image
                  src="/services/collision-recovery-hero.webp"
                  alt="Professional collision recovery and accident towing service in San Diego"
                  fill
                  className="object-cover"
                  priority
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Floating Info Cards */}
                <div className="absolute top-8 left-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl p-4 border border-white/20 shadow-2xl">
                  <div className="text-white/60 text-xs uppercase tracking-wider mb-1">Certified</div>
                  <div className="text-white font-black text-lg">Licensed & Insured</div>
                </div>

                <div className="absolute bottom-8 right-8 bg-gradient-to-br from-red-600/30 to-orange-600/30 backdrop-blur-2xl rounded-2xl p-4 border border-red-500/30 shadow-2xl">
                  <div className="text-white/80 text-xs uppercase tracking-wider mb-1">Response Time</div>
                  <div className="text-white font-black text-2xl">Less Than 25 Min</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Counter Bar */}
      <div className="text-center py-6 bg-red-600/20 border-y border-red-500/30">
        <p className="text-white text-base md:text-lg px-4">
          <span className="font-black text-2xl md:text-3xl text-yellow-400 inline-block mx-2">847</span>
          <span className="font-semibold">collision recoveries this month</span>
          <span className="hidden md:inline"> • </span>
          <span className="block md:inline mt-1 md:mt-0">
            <span className="font-bold text-green-400">Average arrival: 17 minutes</span>
          </span>
        </p>
      </div>

      {/* Trust Badges Section */}
      <div className="bg-gradient-to-b from-slate-950 to-black py-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">🏆</div>
              <p className="text-white font-bold text-sm md:text-base">DOT Certified</p>
              <p className="text-white/50 text-xs">Licensed Professional</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">✅</div>
              <p className="text-white font-bold text-sm md:text-base">TRAA Member</p>
              <p className="text-white/50 text-xs">Industry Leader</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">🛡️</div>
              <p className="text-white font-bold text-sm md:text-base">$1M Insurance</p>
              <p className="text-white/50 text-xs">Fully Protected</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">⭐</div>
              <p className="text-white font-bold text-sm md:text-base">4.9/5 Rating</p>
              <p className="text-white/50 text-xs">1,247+ Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Insurance Companies Section */}
      <div className="bg-black py-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-white/70 mb-6 text-sm md:text-base font-semibold">WE WORK WITH ALL MAJOR INSURANCE COMPANIES</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            <div className="text-white/40 hover:text-white/70 transition-colors text-center px-4">
              <p className="font-bold text-lg md:text-xl">GEICO</p>
            </div>
            <div className="text-white/40 hover:text-white/70 transition-colors text-center px-4">
              <p className="font-bold text-lg md:text-xl">State Farm</p>
            </div>
            <div className="text-white/40 hover:text-white/70 transition-colors text-center px-4">
              <p className="font-bold text-lg md:text-xl">Allstate</p>
            </div>
            <div className="text-white/40 hover:text-white/70 transition-colors text-center px-4">
              <p className="font-bold text-lg md:text-xl">Progressive</p>
            </div>
            <div className="text-white/40 hover:text-white/70 transition-colors text-center px-4">
              <p className="font-bold text-lg md:text-xl">Farmers</p>
            </div>
            <div className="text-white/40 hover:text-white/70 transition-colors text-center px-4">
              <p className="font-bold text-lg md:text-xl">AAA</p>
            </div>
          </div>
          <p className="text-center text-green-400 mt-6 font-semibold text-sm md:text-base">✓ Direct Insurance Billing Available</p>
        </div>
      </div>

      {/* TRUST JOURNEY - Accident to Recovery Timeline */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-black via-slate-950 to-black">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-sm font-bold mb-6">
              YOUR JOURNEY WITH US
            </div>
            <h2 className="text-6xl lg:text-8xl font-black text-white mb-6">
              From <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Chaos</span> to <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Calm</span>
            </h2>
            <p className="text-2xl text-white/60 max-w-3xl mx-auto">
              We guide you through every step of the recovery process
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-orange-500 to-green-500 transform -translate-x-1/2"></div>

            <div className="space-y-24">
              {[
                {
                  time: "Minute 0",
                  title: "The Accident Happens",
                  desc: "You're shaken. Your vehicle is damaged. You need help immediately.",
                  icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                  color: "from-red-600 to-red-700",
                  side: "left",
                  imgLabel: "Accident Scene",
                  imgSrc: "/services/the-accident-happens.webp"
                },
                {
                  time: "Minute 1-5",
                  title: "You Call CloseBy",
                  desc: "Our caring team answers immediately. We gather essential details and dispatch your rescue.",
                  icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                  color: "from-orange-600 to-orange-700",
                  side: "right",
                  imgLabel: "Call Center Response",
                  imgSrc: "/services/call-center-response.webp"
                },
                {
                  time: "Minute 5-20",
                  title: "We're On Our Way",
                  desc: "Professional driver dispatched with the right equipment. You receive real-time ETA updates.",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                  color: "from-yellow-600 to-yellow-700",
                  side: "left",
                  imgLabel: "Tow Truck En Route",
                  imgSrc: "/services/tow-truck-en-route.webp"
                },
                {
                  time: "Minute 20-40",
                  title: "Professional Recovery",
                  desc: "Your vehicle is carefully loaded using proper equipment. We document everything for insurance.",
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  color: "from-green-600 to-green-700",
                  side: "right",
                  imgLabel: "Vehicle Being Loaded",
                  imgSrc: "/services/professional-collision-recovery.webp"
                },
                {
                  time: "Arrival",
                  title: "Safe Destination",
                  desc: "Your vehicle arrives safely at your chosen location. Insurance paperwork ready. Peace of mind restored.",
                  icon: "M5 13l4 4L19 7",
                  color: "from-emerald-600 to-emerald-700",
                  side: "left",
                  imgLabel: "Vehicle at Destination",
                  imgSrc: "/services/safe-destination.webp"
                }
              ].map((step, idx) => (
                <div key={idx} className={`relative flex flex-col lg:flex-row items-center gap-12 ${step.side === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} border-4 border-black flex items-center justify-center shadow-[0_0_40px_rgba(239,68,68,0.4)]`}>
                      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:w-[calc(50%-80px)] ${step.side === 'left' ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${step.color} text-white text-sm font-bold mb-4`}>
                      {step.time}
                    </div>
                    <h3 className="text-4xl font-black text-white mb-4">{step.title}</h3>
                    <p className="text-xl text-white/70 leading-relaxed max-w-lg mx-auto lg:mx-0">{step.desc}</p>
                  </div>

                  {/* Image */}
                  <div className={`lg:w-[calc(50%-80px)]`}>
                    <div className="relative group">
                      <div className={`absolute -inset-2 bg-gradient-to-r ${step.color} rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition duration-500`}></div>
                      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-white/10">
                        {step.imgSrc ? (
                          <>
                            <Image
                              src={step.imgSrc}
                              alt={step.imgLabel}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                          </>
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center">
                            <div className="text-center space-y-4 p-8">
                              <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <p className="text-white/70 font-medium">{step.imgLabel}</p>
                              <p className="text-white/40 text-sm">1000x750px</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VEHICLE TYPES - Premium Showcase */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-center mb-20">
            <h2 className="text-6xl lg:text-8xl font-black text-white mb-6">
              All Vehicles, <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">All Conditions</span>
            </h2>
            <p className="text-2xl text-white/60 max-w-3xl mx-auto">
              From compact cars to luxury SUVs, we have the expertise and equipment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Sedans & Coupes", icon: "🚗", desc: "Compact to full-size" },
              { name: "SUVs & Trucks", icon: "🚙", desc: "Including lifted vehicles" },
              { name: "Luxury Vehicles", icon: "✨", desc: "High-end care" },
              { name: "Exotic Cars", icon: "🏎️", desc: "Specialized handling" },
              { name: "Electric Vehicles", icon: "⚡", desc: "EV-certified team" },
              { name: "Classic Cars", icon: "🎩", desc: "Vintage specialists" },
              { name: "Motorcycles", icon: "🏍️", desc: "Proper equipment" },
              { name: "Commercial", icon: "🚐", desc: "Vans & work trucks" }
            ].map((vehicle, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
                <div className="relative h-full p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 hover:border-red-500/30 transition-all duration-500 text-center">
                  <div className="text-6xl mb-4">{vehicle.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{vehicle.name}</h3>
                  <p className="text-white/60 text-sm">{vehicle.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Unique Grid Layout */}
      <section className="relative py-32 px-6 bg-black">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-center mb-20">
            <h2 className="text-6xl lg:text-8xl font-black text-white mb-6">
              Why CloseBy <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Stands Apart</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Large Feature Card */}
            <div className="lg:col-span-2 lg:row-span-2 group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-orange-600 rounded-[3rem] opacity-20 group-hover:opacity-30 blur-2xl transition duration-500"></div>
              <div className="relative h-full p-12 bg-gradient-to-br from-red-950/20 to-orange-950/20 backdrop-blur-xl rounded-[3rem] border border-red-500/20 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
                <div className="relative space-y-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-5xl font-black text-white">Insurance Experts</h3>
                  <p className="text-2xl text-white/70 leading-relaxed">
                    We work with ALL major insurance companies. We handle the paperwork, provide detailed documentation, and ensure your claim goes smoothly. Zero hassle for you.
                  </p>
                  <div className="pt-6 grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-3xl font-black text-white mb-1">100%</div>
                      <div className="text-sm text-white/60">Claims Accepted</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-3xl font-black text-white mb-1">Direct</div>
                      <div className="text-sm text-white/60">Billing Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Smaller Feature Cards */}
            {[
              {
                title: "24/7 Emergency",
                desc: "Real humans answer your call day or night. No automated systems during your crisis.",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              {
                title: "Damage-Free",
                desc: "Flatbed towing and wheel-lift options. We protect your vehicle like it's our own.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              },
              {
                title: "Certified Team",
                desc: "Background-checked, licensed, and trained in accident recovery protocols.",
                icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              },
              {
                title: "GPS Tracking",
                desc: "Know exactly where your vehicle is from pickup to delivery. Full transparency.",
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              }
            ].map((feature, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                <div className="relative h-full p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-red-500/30 transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS COUNTER - Dramatic */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-red-950/20 via-orange-950/20 to-red-950/20 border-y border-red-500/20">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Vehicles Recovered", icon: "🚗" },
              { number: "<20min", label: "Average Response", icon: "⚡" },
              { number: "15+", label: "Years Experience", icon: "⭐" },
              { number: "100%", label: "Insurance Accepted", icon: "✓" }
            ].map((stat, idx) => (
              <div key={idx} className="group text-center">
                <div className="relative inline-block">
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition duration-500"></div>
                  <div className="relative text-7xl mb-3">{stat.icon}</div>
                </div>
                <div className="text-6xl font-black text-white mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-lg text-red-400 font-semibold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-slate-950 to-black">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-16">
            <div className="text-center sm:text-left">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-white/70">Real reviews from real customers</p>
            </div>

            {/* Aggregate rating display */}
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-red-500/20">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-white">4.9</div>
                <div className="flex gap-0.5 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">★</span>
                  ))}
                </div>
              </div>
              <div className="border-l-2 border-white/20 pl-4">
                <div className="text-sm font-semibold text-white/70">Based on</div>
                <div className="text-xl font-bold text-white">1,247+ Reviews</div>
                <div className="flex gap-2 mt-1">
                  <span className="text-xs font-semibold text-white/60">Google</span>
                  <span className="text-xs font-semibold text-white/60">Yelp</span>
                  <span className="text-xs font-semibold text-white/60">Facebook</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                name: "Joe Barajas",
                rating: 5,
                text: "I had my 1968 MGB towed by Closeby Towing. Daniel was friendly, professional and the price was reasonable. Highly recommend.",
                date: "4 days ago",
                verified: true
              },
              {
                name: "Paul Stevenson",
                rating: 5,
                text: "Daniel was very professional and helpful. He got my Jeep Compass home after being stranded. I recommend CloseBy Towing in San Diego.",
                date: "1 week ago",
                verified: true
              },
              {
                name: "Brenda Valadez",
                rating: 5,
                text: "Great service! The driver arrived sooner than expected, and made a stressful situation much easier! If you ever need roadside assistance this is the company to call!",
                date: "13 hours ago",
                verified: true
              },
              {
                name: "Jacob Perkins",
                rating: 5,
                text: "Fantastic and professional towing service. Very friendly and very fair, affordable prices. Would recommend to anyone looking for a tow.",
                date: "14 hours ago",
                verified: true
              },
              {
                name: "Adam Perse'",
                rating: 5,
                text: "This company was very fast and helpful. I blew a tire on Olympic Parkway during rush hour traffic and they truly made me feel like a priority.",
                date: "17 hours ago",
                verified: true
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-red-500/20 hover:border-red-500/50 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-bold text-white text-lg">{review.name}</div>
                      <div className="text-sm text-white/50">{review.date}</div>
                    </div>
                    {review.verified && (
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        style={{
                          animation: `starTwinkle 3s ease-in-out infinite ${i * 0.2}s, starPulse 2s ease-in-out infinite ${i * 0.15}s`
                        }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/80 leading-relaxed flex-grow">{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Unique Accordion Design */}
      <section className="relative py-32 px-6 bg-black">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-20">
            <h2 className="text-6xl lg:text-8xl font-black text-white mb-6">
              Questions? <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Answered.</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How fast can you respond to an accident scene?",
                a: "Our average response time is less than 25 minutes for emergency calls in San Diego County. We have strategically positioned trucks and drivers ready 24/7 to reach you as quickly as possible."
              },
              {
                q: "Will my insurance cover the towing?",
                a: "Most auto insurance policies include towing coverage. We work with ALL major insurance companies and can bill them directly. We'll help you understand your coverage and handle all the paperwork."
              },
              {
                q: "What if my car is not drivable?",
                a: "That's our specialty. We use flatbed towing for vehicles that cannot be driven safely. This protects your transmission, drivetrain, and suspension from further damage during transport."
              },
              {
                q: "Can you tow my vehicle to any location?",
                a: "Yes! We can tow your vehicle to your home, a body shop of your choice, your insurance company's preferred repair facility, or a secure storage location. You decide."
              },
              {
                q: "Do you provide accident scene documentation?",
                a: "Absolutely. We photograph your vehicle from all angles, document the scene, and provide detailed reports for insurance claims. This documentation is crucial for your claim."
              },
              {
                q: "What about personal belongings in my vehicle?",
                a: "We'll help you safely retrieve personal items from your vehicle. If immediate retrieval isn't possible, we secure your vehicle and coordinate access to your belongings."
              }
            ].map((faq, idx) => (
              <details key={idx} className="group relative overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-950/10 to-transparent backdrop-blur-xl hover:border-red-500/40 transition-all duration-300">
                <summary className="cursor-pointer select-none p-8 font-bold text-xl flex items-center justify-between text-white list-none">
                  <span className="flex items-center gap-4 flex-1">
                    <span className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center text-white font-black">
                      {idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <svg
                    className="w-8 h-8 text-red-400 group-open:rotate-180 transition-transform duration-500 flex-shrink-0 ml-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 text-white/70 text-lg leading-relaxed border-t border-red-500/10 pt-6 pl-24">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - Epic Multi-Layer */}
      <section className="relative py-40 px-6 overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-black to-orange-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-600/20 via-transparent to-transparent"></div>

        {/* Animated Particles - Optimized */}
        <div className="absolute inset-0 overflow-hidden opacity-50 hidden md:block">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-red-500/40 rounded-full animate-pulse"
              style={{
                left: `${i * 8.33}%`,
                top: `${(i % 4) * 25}%`,
                animationDelay: `${i * 0.25}s`,
                animationDuration: `${2 + (i % 3)}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative mx-auto max-w-[1400px] text-center space-y-12">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-red-600/40 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center shadow-[0_0_60px_rgba(239,68,68,0.6)]">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <h2 className="text-6xl lg:text-9xl font-black text-white leading-[1] tracking-tight">
            Don't Face This
            <span className="block mt-6 bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(239,68,68,0.5)]">
              Alone
            </span>
          </h2>

          <p className="text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
            When you've been in an accident, every second counts. Our emergency response team is standing by right now, ready to help you through this difficult moment.
          </p>

          {/* Multi CTA Options */}
          <div className="flex flex-col items-center gap-6 pt-12">
            {/* Primary CTA */}
            <a
              href="tel:18589999293"
              className="group relative px-12 md:px-16 py-6 md:py-8 rounded-3xl font-black text-2xl md:text-3xl overflow-hidden transition-all duration-500 hover:scale-110 shadow-[0_30px_90px_rgba(239,68,68,0.5)] hover:shadow-[0_30px_120px_rgba(239,68,68,0.7)] w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-600 to-red-600"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <span className="relative z-10 text-white flex items-center justify-center gap-3 md:gap-4">
                <svg className="w-7 h-7 md:w-8 md:h-8 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="hidden sm:inline">CALL NOW: </span>(858) 999-9293
              </span>
            </a>

            {/* Secondary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => {
                  // Find and click the popup launcher button
                  const launcherButton = document.querySelector('button[aria-label*="Get instant price"]') as HTMLButtonElement;
                  if (launcherButton) {
                    launcherButton.click();
                  }
                }}
                className="relative px-10 md:px-16 py-5 md:py-8 rounded-3xl font-extrabold text-xl md:text-3xl bg-[#42b3ffff] text-black hover:brightness-110 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-4 overflow-hidden w-full sm:w-auto"
                style={{
                  boxShadow: '0 0 20px rgba(66, 179, 255, 0.5), 0 0 40px rgba(66, 179, 255, 0.3)',
                }}
              >
                {/* Animated shimmer effect */}
                <span
                  className="absolute inset-0 shimmer-effect"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, transparent 30%, rgba(255,255,255,0.9) 50%, transparent 70%, transparent 100%)',
                    transform: 'translateX(-100%)',
                  }}
                />
                <span className="relative z-10 hidden sm:inline">💰 Order Online & Save 15%</span>
                <span className="relative z-10 sm:hidden">💰 Save 15%</span>
              </button>

              <a
                href="https://wa.me/18589999293?text=I%20need%20emergency%20collision%20recovery"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 md:px-12 py-5 md:py-8 rounded-3xl font-bold text-lg md:text-2xl bg-[#25D366] text-white hover:brightness-110 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 w-full sm:w-auto"
                style={{
                  boxShadow: '0 0 20px rgba(37, 211, 102, 0.4), 0 0 40px rgba(37, 211, 102, 0.2)',
                }}
              >
                <span className="text-xl md:text-2xl">📱</span>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Trust Line */}
          <div className="pt-16 flex flex-wrap justify-center gap-12 text-white/60">
            {[
              { icon: "🛡️", text: "Licensed & Insured" },
              { icon: "⚡", text: "Less Than 25 Min Response" },
              { icon: "💯", text: "All Insurance Accepted" },
              { icon: "🏆", text: "15+ Years Experience" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-lg">
                <span className="text-3xl">{item.icon}</span>
                <span className="font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 px-6 bg-black border-t border-red-500/10">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white">Other Emergency Services</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Jump Start", href: "/services/jump-start" },
              { name: "Tire Change", href: "/services/tire-change" },
              { name: "Lockout Service", href: "/services/lockout" },
              { name: "General Towing", href: "/services/towing" },
              { name: "Gas Delivery", href: "/services/gas-delivery" },
              { name: "Winch Out", href: "/services/winch-out" }
            ].map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 hover:border-red-500/40 hover:shadow-lg transition-all duration-300 font-semibold text-white hover:text-red-400"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
