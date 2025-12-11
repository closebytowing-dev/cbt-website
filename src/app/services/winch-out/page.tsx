"use client";

import { useEffect } from "react";
import Image from "next/image";
import { WinchOutCTAButton, WinchOutCTAButtonLarge } from "./WinchOutCTAButton";
import LeftPopup from "@/components/LeftPopup";
import { useServicePricing } from "@/hooks/useServicePricing";

export default function WinchOutPage() {
  // Fetch dynamic pricing from Firebase
  const { standardPrice, onlinePrice, loading, error } = useServicePricing("Winch-Out / Recovery");

  // Update page metadata dynamically
  useEffect(() => {
    document.title = "Winch-Out Recovery Service San Diego | Stuck Vehicle Extraction 24/7 | CloseBy Towing";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }

    metaDesc.setAttribute('content', "Stuck in mud, sand, ditch, or snow? Professional winch-out service in San Diego. Heavy-duty winches, 20-35 min response. Licensed & insured. Call (858) 999-9293 for immediate help.");
  }, []);
  // LocalBusiness Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CloseBy Towing - Winch-Out Recovery Service",
    "description": "24/7 professional winch-out and vehicle recovery service in San Diego. Stuck vehicle extraction from mud, sand, ditches, and off-road situations.",
    "telephone": "(858) 999-9293",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Diego",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7157",
      "longitude": "-117.1611"
    },
    "url": "https://closebytowing.com/services/winch-out",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1247"
    },
    "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
    "areaServed": {
      "@type": "City",
      "name": "San Diego"
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does winch-out service cost in San Diego?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": loading ? "Winch-out service pricing depends on complexity. Price includes arrival, assessment, winch equipment, and recovery. No charge if we can't extract your vehicle." : `Winch-out service starts at $${onlinePrice} for simple recovery. Pricing depends on complexity: simple recovery (single pull, easy access), moderate recovery (multiple angles, obstacles), or complex recovery (deep mud, steep incline, limited access). Heavy-duty vehicles may cost more. Price includes arrival, assessment, winch equipment, and recovery. No charge if we can't extract your vehicle.`
        }
      },
      {
        "@type": "Question",
        "name": "What situations require winch-out service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common winch-out situations include: Vehicle stuck in mud or deep sand, Car in a ditch or off embankment, Off-road recovery (trails, beaches, desert), Snow or ice entrapment, Parking lot obstacles (curbs, medians, barriers), Construction site extraction, Flooded area recovery, Steep incline/hillside situations, and Accident scene vehicle repositioning."
        }
      },
      {
        "@type": "Question",
        "name": "How fast can you arrive for winch-out service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Average response time is 20-35 minutes in San Diego County. We have winch-equipped trucks strategically located throughout the region. After calling (858) 999-9293, we'll provide an accurate ETA and send real-time GPS tracking. Dangerous situations (traffic hazards, unstable positions) receive priority response."
        }
      },
      {
        "@type": "Question",
        "name": "Will winching damage my vehicle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, when done properly by professionals, winching is safe. We use proper attachment points (frame hooks, tow points), protective materials (tree savers, straps, pads), and controlled pulling techniques. Our operators are trained in safe recovery methods. We assess the situation, choose the right equipment, and execute carefully. If your vehicle is already damaged from being stuck, we document existing damage before recovery."
        }
      },
      {
        "@type": "Question",
        "name": "Do you recover vehicles from beaches and off-road areas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We specialize in off-road and beach recovery. Our trucks are equipped for sand, trails, and challenging terrain. We've recovered vehicles from: Pacific Beach, Mission Beach, Silver Strand, Coronado Beach, Torrey Pines trails, Anza-Borrego Desert, Cleveland National Forest, and private properties. Our operators understand off-road recovery techniques including sand anchors, multi-point pulls, and deflation strategies."
        }
      },
      {
        "@type": "Question",
        "name": "What's the weight limit for your winch service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our heavy-duty winches can handle vehicles up to 15,000+ lbs (standard pickup trucks, SUVs, delivery vans). For larger vehicles (semi-trucks, RVs, heavy equipment over 15,000 lbs), we bring specialized recovery equipment or multiple trucks. Always mention your vehicle type when calling so we dispatch the right equipment. We've successfully recovered everything from compact cars to loaded delivery trucks."
        }
      },
      {
        "@type": "Question",
        "name": "Can you pull my car out of a ditch or over an embankment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ditch and embankment recovery is one of our specialties. We assess the angle, stability, and access points before recovery. For steep ditches or rollover situations, we may use multiple attachment points, stabilization techniques, and controlled winching speeds. Safety is our priority—we ensure the vehicle won't roll or shift unexpectedly during extraction. If the vehicle is on its side or upside down, we have equipment to safely right it."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide winch-out service 24/7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We operate 24 hours a day, 7 days a week, 365 days a year including holidays. Whether you're stuck at 3 AM in the desert or during a rainstorm, we're ready to help. Our overnight service has the same fast response time and professional standards. We understand emergencies don't follow business hours."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">

        {/* Trust Bar */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 px-6">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Heavy-Duty Winches</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>20-35 Min Response</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>4.9/5 Stars (1,247 Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Damage Guarantee</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, rgba(16, 185, 129, 0.3) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left Content */}
              <div className="relative z-10">
                {/* Emergency Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm mb-6 shadow-lg animate-pulse">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  24/7 EMERGENCY RECOVERY
                </div>

                <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6 text-white">
                  Stuck?
                  <span className="block bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent mt-2">
                    We'll Pull You Out
                  </span>
                </h1>

                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Professional winch-out and vehicle recovery service. Stuck in mud, sand, ditch, or off-road? We'll safely extract your vehicle in <span className="font-bold text-emerald-400">20-35 minutes</span>.
                </p>

                {/* Trust Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-emerald-500/30">
                    <svg className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-bold text-sm text-white">Safe Recovery</p>
                      <p className="text-xs text-slate-300">No Vehicle Damage</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-emerald-500/30">
                    <svg className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-bold text-sm text-white">All Terrain</p>
                      <p className="text-xs text-slate-300">Mud, Sand, Ditch</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-emerald-500/30">
                    <svg className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-bold text-sm text-white">Heavy-Duty</p>
                      <p className="text-xs text-slate-300">Up to 15,000 lbs</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <WinchOutCTAButton />

                  <a
                    href="tel:8589999293"
                    className="group relative inline-flex items-center justify-center gap-3 px-10 py-6 rounded-2xl font-bold text-xl border-2 border-white/30 bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    (858) 999-9293
                  </a>
                </div>

              </div>

              {/* Right Hero Image */}
              <div className="relative lg:h-[600px]">
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-500/30">
                  <Image
                    src="/services/winchout-hero.webp"
                    alt="Professional winch-out and vehicle recovery service in San Diego"
                    fill
                    className="object-cover rounded-3xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>
                </div>

                {/* Stats Badge - Half on photo, half off */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded-2xl shadow-2xl p-6 border border-emerald-100 max-w-sm w-full mx-4 z-10">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-2">15,000 lbs</h3>
                    <p className="text-slate-600">Max Winch Capacity</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Recovery Situations Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
                We Handle <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Every Situation</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                From simple ditch recovery to complex off-road extraction—we have the equipment and expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Mud Recovery */}
              <div className="group relative bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-3xl border-2 border-slate-600 hover:border-emerald-500 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2">
                <div className="absolute top-6 right-6">
                  <span className="inline-block bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/50">COMMON</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Mud & Soft Terrain</h3>
                <p className="text-slate-300 mb-6">Vehicle stuck in deep mud, wet dirt, or soft ground. Rain-soaked fields, construction sites, unpaved roads.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Multi-point winching</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Ground stabilization</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Protective mats & boards</span>
                  </li>
                </ul>
              </div>

              {/* Sand & Beach */}
              <div className="group relative bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-3xl border-2 border-slate-600 hover:border-emerald-500 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Sand & Beach</h3>
                <p className="text-slate-300 mb-6">Vehicles buried in sand at beaches, dunes, or desert areas. Axle-deep in soft sand with spinning wheels.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Sand anchor systems</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Beach-rated equipment</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Tire deflation guidance</span>
                  </li>
                </ul>
              </div>

              {/* Ditch Recovery */}
              <div className="group relative bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-3xl border-2 border-slate-600 hover:border-emerald-500 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2">
                <div className="absolute top-6 right-6">
                  <span className="inline-block bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs font-bold border border-red-500/50">URGENT</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Ditch & Embankment</h3>
                <p className="text-slate-300 mb-6">Car slid into roadside ditch, over embankment, or down steep slope. Unstable positioning requiring careful extraction.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Angle assessment</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Stabilization techniques</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Controlled winching</span>
                  </li>
                </ul>
              </div>

              {/* Off-Road */}
              <div className="group relative bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-3xl border-2 border-slate-600 hover:border-emerald-500 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Off-Road & Trail</h3>
                <p className="text-slate-300 mb-6">Stuck on hiking trails, mountain roads, desert paths, or remote locations. Limited access for recovery vehicles.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Trail-rated trucks</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Remote recovery expertise</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Long-reach winch cable</span>
                  </li>
                </ul>
              </div>

              {/* Snow & Ice */}
              <div className="group relative bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-3xl border-2 border-slate-600 hover:border-emerald-500 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Snow & Ice</h3>
                <p className="text-slate-300 mb-6">Vehicle stuck in snow banks, icy conditions, or winter weather situations (rare in San Diego, but we're ready).</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Winter recovery gear</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Traction assistance</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Mountain area service</span>
                  </li>
                </ul>
              </div>

              {/* Parking Obstacles */}
              <div className="group relative bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-3xl border-2 border-slate-600 hover:border-emerald-500 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Parking Obstacles</h3>
                <p className="text-slate-300 mb-6">High-centered on curbs, stuck on parking barriers, medians, wheel stops, or landscaping obstacles in parking lots.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Lift & reposition</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Undercarriage protection</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Precision extraction</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
                Safe <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Recovery Process</span>
              </h2>
              <p className="text-xl text-slate-300">Professional extraction in 5 steps</p>
            </div>

            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-emerald-500 via-green-500 to-teal-500 hidden md:block"></div>

              <div className="space-y-8">

                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl z-10">
                    1
                  </div>
                  <div className="flex-1 bg-slate-800 p-6 rounded-2xl shadow-lg border border-emerald-500/30">
                    <h3 className="text-2xl font-black text-white mb-2">Emergency Call</h3>
                    <p className="text-slate-300 mb-2">Call or text (858) 999-9293 with your location and situation. Describe terrain, vehicle position, and any immediate dangers.</p>
                    <p className="text-sm text-emerald-400">⏱️ Immediate dispatch</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl z-10">
                    2
                  </div>
                  <div className="flex-1 bg-slate-800 p-6 rounded-2xl shadow-lg border border-emerald-500/30">
                    <h3 className="text-2xl font-black text-white mb-2">Scene Assessment</h3>
                    <p className="text-slate-300 mb-2">Operator arrives and evaluates: vehicle position, terrain conditions, anchor points, and safest extraction method.</p>
                    <p className="text-sm text-emerald-400">⏱️ 5-10 minute assessment</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl z-10">
                    3
                  </div>
                  <div className="flex-1 bg-slate-800 p-6 rounded-2xl shadow-lg border border-emerald-500/30">
                    <h3 className="text-2xl font-black text-white mb-2">Equipment Setup</h3>
                    <p className="text-slate-300 mb-2">Position recovery truck, secure anchor points, attach winch cable with protective gear, and verify all connections are safe.</p>
                    <p className="text-sm text-emerald-400">⏱️ 10-15 minutes setup</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl z-10">
                    4
                  </div>
                  <div className="flex-1 bg-slate-800 p-6 rounded-2xl shadow-lg border border-emerald-500/30">
                    <h3 className="text-2xl font-black text-white mb-2">Controlled Extraction</h3>
                    <p className="text-slate-300 mb-2">Gradual, controlled winching while monitoring vehicle stability. May require multiple angles or repositioning for optimal pull.</p>
                    <p className="text-sm text-emerald-400">⏱️ 10-30 minutes depending on situation</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl z-10">
                    5
                  </div>
                  <div className="flex-1 bg-slate-800 p-6 rounded-2xl shadow-lg border border-emerald-500/30">
                    <h3 className="text-2xl font-black text-white mb-2">Vehicle Inspection & Clear</h3>
                    <p className="text-slate-300 mb-2">Inspect vehicle for damage, test drivability, clean winch points, and get you safely back on solid ground or arrange towing if needed.</p>
                    <p className="text-sm text-emerald-400">⏱️ You're free to go!</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
                <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Fair</span> Pricing
              </h2>
              <p className="text-xl text-slate-300">Based on complexity, not profit maximization</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">

              {/* Simple Recovery */}
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-3xl shadow-xl border-2 border-emerald-500/50">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-white mb-2">Simple Recovery</h3>
                  <p className="text-4xl font-black text-emerald-400 mb-2">$125-$150</p>
                  <p className="text-sm text-slate-400">Most common situations</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Single pull direction</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Easy truck access</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Shallow stuck depth</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>No special rigging</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>15-25 min recovery time</span>
                  </li>
                </ul>
              </div>

              {/* Moderate Recovery */}
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-3xl shadow-xl border-2 border-yellow-500/50 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-yellow-500 text-slate-900 px-4 py-1 rounded-full text-xs font-black">MOST COMMON</span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-white mb-2">Moderate Recovery</h3>
                  <p className="text-4xl font-black text-yellow-400 mb-2">$150-$200</p>
                  <p className="text-sm text-slate-400">Requires extra equipment</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Multiple angles needed</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Limited truck access</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Moderate depth/angle</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Some obstacles present</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>30-45 min recovery time</span>
                  </li>
                </ul>
              </div>

              {/* Complex Recovery */}
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-3xl shadow-xl border-2 border-red-500/50">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-white mb-2">Complex Recovery</h3>
                  <p className="text-4xl font-black text-red-400 mb-2">$200-$250</p>
                  <p className="text-sm text-slate-400">Challenging situations</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Deep mud/sand burial</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Steep inclines/declines</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Very limited access</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Special rigging required</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-300">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>45-90 min recovery time</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Guarantee */}
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl p-8 text-white text-center shadow-2xl">
              <div className="max-w-3xl mx-auto">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black mb-3">No Recovery, No Charge Guarantee</h3>
                <p className="text-lg opacity-90">If we can't safely extract your vehicle, you don't pay. That's our promise. We only charge when we succeed.</p>
              </div>
            </div>

          </div>
        </section>

        {/* REVIEWS SECTION */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-16">
              <div className="text-center sm:text-left">
                <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
                  What Our Customers Say
                </h2>
                <p className="text-xl text-slate-300">Real reviews from real customers</p>
              </div>

              {/* Aggregate rating display */}
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-emerald-500/20">
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
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                  <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-bold text-white text-lg">{review.name}</div>
                        <div className="text-sm text-white/50">{review.date}</div>
                      </div>
                      {review.verified && (
                        <div className="flex-shrink-0">
                          <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
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

        {/* FAQ Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
                Common <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-xl text-slate-300">Everything you need to know about winch-out service</p>
            </div>

            <div className="space-y-4">

              <details itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="group bg-slate-700 rounded-2xl shadow-lg border border-emerald-500/30 overflow-hidden">
                <summary itemProp="name" className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-600/50 transition-colors">
                  <span className="font-bold text-lg text-white">How much does winch-out service cost in San Diego?</span>
                  <svg className="w-6 h-6 text-emerald-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="px-6 pb-6">
                  <p itemProp="text" className="text-slate-300 leading-relaxed">
                    Winch-out service costs $125-$250 depending on complexity. Simple recovery (single pull, easy access) is $125-$150. Moderate recovery (multiple angles, obstacles) is $150-$200. Complex recovery (deep mud, steep incline, limited access) is $200-$250. Heavy-duty vehicles may cost more. Price includes arrival, assessment, winch equipment, and recovery. No charge if we can't extract your vehicle.
                  </p>
                </div>
              </details>

              <details itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="group bg-slate-700 rounded-2xl shadow-lg border border-emerald-500/30 overflow-hidden">
                <summary itemProp="name" className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-600/50 transition-colors">
                  <span className="font-bold text-lg text-white">What situations require winch-out service?</span>
                  <svg className="w-6 h-6 text-emerald-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="px-6 pb-6">
                  <p itemProp="text" className="text-slate-300 leading-relaxed">
                    Common winch-out situations include: Vehicle stuck in mud or deep sand, Car in a ditch or off embankment, Off-road recovery (trails, beaches, desert), Snow or ice entrapment, Parking lot obstacles (curbs, medians, barriers), Construction site extraction, Flooded area recovery, Steep incline/hillside situations, and Accident scene vehicle repositioning.
                  </p>
                </div>
              </details>

              <details itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="group bg-slate-700 rounded-2xl shadow-lg border border-emerald-500/30 overflow-hidden">
                <summary itemProp="name" className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-600/50 transition-colors">
                  <span className="font-bold text-lg text-white">How fast can you arrive for winch-out service?</span>
                  <svg className="w-6 h-6 text-emerald-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="px-6 pb-6">
                  <p itemProp="text" className="text-slate-300 leading-relaxed">
                    Average response time is 20-35 minutes in San Diego County. We have winch-equipped trucks strategically located throughout the region. After calling (858) 999-9293, we'll provide an accurate ETA and send real-time GPS tracking. Dangerous situations (traffic hazards, unstable positions) receive priority response.
                  </p>
                </div>
              </details>

              <details itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="group bg-slate-700 rounded-2xl shadow-lg border border-emerald-500/30 overflow-hidden">
                <summary itemProp="name" className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-600/50 transition-colors">
                  <span className="font-bold text-lg text-white">Will winching damage my vehicle?</span>
                  <svg className="w-6 h-6 text-emerald-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="px-6 pb-6">
                  <p itemProp="text" className="text-slate-300 leading-relaxed">
                    No, when done properly by professionals, winching is safe. We use proper attachment points (frame hooks, tow points), protective materials (tree savers, straps, pads), and controlled pulling techniques. Our operators are trained in safe recovery methods. We assess the situation, choose the right equipment, and execute carefully. If your vehicle is already damaged from being stuck, we document existing damage before recovery.
                  </p>
                </div>
              </details>

              <details itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="group bg-slate-700 rounded-2xl shadow-lg border border-emerald-500/30 overflow-hidden">
                <summary itemProp="name" className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-600/50 transition-colors">
                  <span className="font-bold text-lg text-white">Do you recover vehicles from beaches and off-road areas?</span>
                  <svg className="w-6 h-6 text-emerald-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="px-6 pb-6">
                  <p itemProp="text" className="text-slate-300 leading-relaxed">
                    Yes! We specialize in off-road and beach recovery. Our trucks are equipped for sand, trails, and challenging terrain. We've recovered vehicles from: Pacific Beach, Mission Beach, Silver Strand, Coronado Beach, Torrey Pines trails, Anza-Borrego Desert, Cleveland National Forest, and private properties. Our operators understand off-road recovery techniques including sand anchors, multi-point pulls, and deflation strategies.
                  </p>
                </div>
              </details>

              <details itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="group bg-slate-700 rounded-2xl shadow-lg border border-emerald-500/30 overflow-hidden">
                <summary itemProp="name" className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-600/50 transition-colors">
                  <span className="font-bold text-lg text-white">What's the weight limit for your winch service?</span>
                  <svg className="w-6 h-6 text-emerald-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="px-6 pb-6">
                  <p itemProp="text" className="text-slate-300 leading-relaxed">
                    Our heavy-duty winches can handle vehicles up to 15,000+ lbs (standard pickup trucks, SUVs, delivery vans). For larger vehicles (semi-trucks, RVs, heavy equipment over 15,000 lbs), we bring specialized recovery equipment or multiple trucks. Always mention your vehicle type when calling so we dispatch the right equipment. We've successfully recovered everything from compact cars to loaded delivery trucks.
                  </p>
                </div>
              </details>

              <details itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="group bg-slate-700 rounded-2xl shadow-lg border border-emerald-500/30 overflow-hidden">
                <summary itemProp="name" className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-600/50 transition-colors">
                  <span className="font-bold text-lg text-white">Can you pull my car out of a ditch or over an embankment?</span>
                  <svg className="w-6 h-6 text-emerald-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="px-6 pb-6">
                  <p itemProp="text" className="text-slate-300 leading-relaxed">
                    Yes, ditch and embankment recovery is one of our specialties. We assess the angle, stability, and access points before recovery. For steep ditches or rollover situations, we may use multiple attachment points, stabilization techniques, and controlled winching speeds. Safety is our priority—we ensure the vehicle won't roll or shift unexpectedly during extraction. If the vehicle is on its side or upside down, we have equipment to safely right it.
                  </p>
                </div>
              </details>

              <details itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="group bg-slate-700 rounded-2xl shadow-lg border border-emerald-500/30 overflow-hidden">
                <summary itemProp="name" className="flex justify-between items-center p-6 cursor-pointer hover:bg-slate-600/50 transition-colors">
                  <span className="font-bold text-lg text-white">Do you provide winch-out service 24/7?</span>
                  <svg className="w-6 h-6 text-emerald-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="px-6 pb-6">
                  <p itemProp="text" className="text-slate-300 leading-relaxed">
                    Absolutely. We operate 24 hours a day, 7 days a week, 365 days a year including holidays. Whether you're stuck at 3 AM in the desert or during a rainstorm, we're ready to help. Our overnight service has the same fast response time and professional standards. We understand emergencies don't follow business hours.
                  </p>
                </div>
              </details>

            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              Stuck Right Now?<br />Help Is Minutes Away
            </h2>
            <p className="text-xl lg:text-2xl mb-10 opacity-90">
              Professional winch-out and vehicle recovery service anywhere in San Diego County.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
              <WinchOutCTAButtonLarge />

              <a
                href="tel:8589999293"
                className="group inline-flex items-center justify-center gap-3 bg-white text-emerald-600 px-16 py-8 rounded-3xl font-black text-3xl sm:text-4xl shadow-2xl hover:bg-slate-100 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (858) 999-9293
              </a>

              <a
                href="https://wa.me/18589999293?text=I%20need%20a%20winch%20out"
                className="inline-flex items-center gap-2 px-10 py-6 bg-[#25D366] hover:brightness-110 rounded-3xl text-white font-bold text-xl transition-all hover:scale-105"
                style={{
                  boxShadow: '0 0 15px rgba(37, 211, 102, 0.3)',
                }}
              >
                <span className="text-2xl">📱</span>
                WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No Damage Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Certified Operators</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No Recovery, No Charge</span>
              </div>
            </div>
          </div>
        </section>

      </div>

      <LeftPopup />
    </>
  );
}
