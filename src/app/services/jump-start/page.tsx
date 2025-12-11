"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import LeftPopup from "@/components/LeftPopup";
import JumpStartCTAButton from "@/components/JumpStartCTAButton";
import { useServicePricing, PriceDisplay } from "@/hooks/useServicePricing";
import { useOnlineDiscount } from "@/hooks/useOnlineDiscount";
import { useVisibility } from "@/hooks/useVisibility";

const BANNER = "#ffba42";
const BRAND = "#1e1e4a";
const ELECTRIC_BLUE = "#3b82f6";
const ELECTRIC_CYAN = "#06b6d4";

export default function JumpStartPage() {
  // Fetch dynamic pricing from Firebase
  const { standardPrice, onlinePrice, loading, error } = useServicePricing("Jump Start");
  const { discountText } = useOnlineDiscount();
  const { config } = useVisibility();
  const showBanners = config.customerRequestForm?.saveBanners !== false;

  useEffect(() => {
    document.title = "Jump Start Service | CloseBy Towing";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    if (!loading && onlinePrice > 0) {
      metaDesc.setAttribute('content', `Dead battery? We'll jump start your vehicle fast. $${standardPrice} regular price—order online for $${onlinePrice} and save 15%.`);
    } else {
      metaDesc.setAttribute('content', "Dead battery? We'll jump start your vehicle fast. Order online and save 15%.");
    }
  }, [loading, standardPrice, onlinePrice]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Battery Jump Start",
    provider: { "@type": "LocalBusiness", name: "CloseBy Towing" },
    areaServed: "San Diego County",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: loading ? 75 : onlinePrice,
      description: loading ? "Jump start service with 15% online discount" : `Jump start service. $${standardPrice} regular price, $${onlinePrice} online (save 15%).`,
    },
  };

  return (
    <main className="min-h-screen bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO SECTION - Electric Theme with Split Design */}
      <section className="relative h-[85vh] lg:h-[80vh] flex items-start pt-12 lg:pt-20 overflow-hidden bg-gradient-to-br from-black via-slate-900 to-black">
        {/* Animated Electric Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        {/* Electric Bolts Animation - Hidden on mobile to prevent overflow */}
        <div className="hidden lg:block absolute top-20 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden lg:block absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="hidden lg:block absolute top-1/2 left-1/2 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>


        <div className="relative z-10 mx-auto max-w-[1600px] w-full px-6 lg:px-12 pt-10 lg:pt-16 pb-6 lg:pb-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-start">
            {/* Left: Content */}
            <div className="space-y-8 lg:space-y-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl border border-blue-400/30">
                <svg className="w-5 h-5 text-yellow-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-bold text-white">Fast Response • 25 Min Average</span>
                <div className="h-2 w-2 rounded-full bg-green-400 animate-ping"></div>
              </div>

              {/* Main Headline with Spark Icon */}
              <div className="space-y-4 relative">
                {/* Large Sparking Lightning Icon */}
                <div className="absolute -top-12 -right-12 lg:-right-20">
                  <div className="relative">
                    {/* Outer glow rings */}
                    <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>

                    {/* Lightning bolt icon - outlined */}
                    <svg className="relative w-24 h-24 lg:w-32 lg:h-32 text-blue-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" style={{
                      animation: 'sparkPulse 2s ease-in-out infinite, sparkRotate 4s ease-in-out infinite'
                    }}>
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>

                    {/* Sparking particles */}
                    <div className="absolute top-0 left-0 w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
                    <div className="absolute top-1/4 right-0 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                    <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                    <div className="absolute bottom-0 right-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.9s' }}></div>
                  </div>
                </div>

                <h1 className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tight">
                  Dead
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
                    Battery?
                  </span>
                </h1>
                <p className="text-2xl lg:text-3xl text-white/70 font-light leading-relaxed">
                  We'll get you <span className="font-bold text-cyan-400">powered up</span> and back on the road in <span className="font-bold text-yellow-400">under 25 minutes</span>.
                </p>
              </div>

              {/* Pricing Cards - Side by Side */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                    <div className="relative px-6 py-8 bg-slate-900 rounded-2xl border border-blue-500/30">
                      <div className="text-sm text-blue-400 font-semibold mb-2">Online Price</div>
                      <div className="flex items-end gap-2 mb-1">
                        <div className="text-3xl font-black text-white/40 line-through">
                          <PriceDisplay price={standardPrice} loading={loading} fallback="$..." />
                        </div>
                        <div className="text-5xl font-black text-cyan-400">
                          <PriceDisplay price={onlinePrice} loading={loading} fallback="$..." />
                        </div>
                      </div>
                      <div className="text-xs text-green-400 font-bold">Save 15% Online!</div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                    <div className="relative px-6 py-8 bg-slate-900 rounded-2xl border border-yellow-500/30">
                      <div className="text-sm text-yellow-400 font-semibold mb-2">Arrival Time</div>
                      <div className="text-5xl font-black text-white mb-1">&lt;25</div>
                      <div className="text-xs text-white/60">Minutes</div>
                    </div>
                  </div>
                </div>

                {/* High Demand & Guarantee Badges - Single Row */}
                <div className="grid grid-cols-2 gap-4">
                  {/* High Demand Badge */}
                  <div className="relative bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-2 border-green-500/50 rounded-xl px-3 py-3 text-center overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-green-400/10 to-transparent animate-pulse"></div>
                    <p className="relative text-white font-bold text-xs sm:text-sm">
                      🚨 <span className="text-yellow-300 animate-pulse">HIGH DEMAND</span>
                    </p>
                  </div>

                  {/* Guarantee Badge */}
                  <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-400/30 rounded-xl px-3 py-3">
                    <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm font-bold text-purple-300">Satisfaction Guaranteed</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <JumpStartCTAButton />

                <a
                  href="tel:18589999293"
                  className="group px-10 py-6 rounded-2xl font-bold text-2xl sm:text-3xl border-2 border-white/30 bg-white/5 backdrop-blur-xl text-white hover:bg-white hover:text-black transition-all duration-500 hover:scale-105 flex items-center justify-center gap-3 whitespace-nowrap"
                >
                  <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  (858) 999-9293
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold">24/7 Available</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold">No Hidden Fees</span>
                </div>
              </div>
            </div>

            {/* Right: Feature Image with Electric Frame */}
            <div className="relative h-[550px] lg:h-[850px]">
              {/* Electric Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-cyan-500/30 to-blue-500/30 rounded-[4rem] blur-3xl animate-pulse"></div>

              {/* Main Image Container */}
              <div className="relative h-full rounded-[4rem] overflow-hidden border-2 border-blue-400/50 shadow-[0_0_100px_rgba(59,130,246,0.3)]">
                <img
                  src="/services/jump-start-hero.webp"
                  alt="Professional Jump Start Service - CloseBy Towing Technician with Booster Pack"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating Stats Badges - Adjusted for mobile to prevent overflow */}
              <div className="absolute left-2 top-2 lg:-left-6 lg:-top-6 bg-gradient-to-br from-blue-600 to-cyan-600 text-white px-6 py-4 rounded-2xl shadow-2xl rotate-[-5deg] hover:rotate-0 transition-transform duration-300 animate-[float_6s_ease-in-out_infinite]">
                <div className="text-3xl font-black">412+</div>
                <div className="text-xs opacity-80">This Month</div>
              </div>
              <div className="absolute right-2 bottom-2 lg:-right-6 lg:-bottom-6 bg-gradient-to-br from-green-500 to-emerald-500 text-white px-6 py-4 rounded-2xl shadow-2xl rotate-[5deg] hover:rotate-0 transition-transform duration-300 animate-[float_6s_ease-in-out_infinite_1s]">
                <div className="text-3xl font-black">4.9★</div>
                <div className="text-xs opacity-80">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANIMATED STATS COUNTER */}
      <section className="relative py-8 lg:py-12 bg-gradient-to-b from-black to-slate-900 border-y border-blue-500/20 overflow-visible">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "5,000+", label: "Jump Starts", icon: "⚡" },
              { number: "< 25 min", label: "Avg Response", icon: "⏱️" },
              { number: "100%", label: "Success Rate", icon: "✓" },
              { number: loading ? "$..." : `$${onlinePrice}`, label: "Online Price", icon: "💰" },
            ].map((stat, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-50 blur transition duration-500"></div>
                <div className="relative text-center p-8 bg-slate-900/50 backdrop-blur-xl rounded-3xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-500">
                  <div className="text-5xl mb-3">{stat.icon}</div>
                  <div className="text-5xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-blue-400 font-semibold uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED - Electric Cards */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-6xl lg:text-7xl font-black text-white mb-4">
              What's <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Included</span>
            </h2>
            <p className="text-xl text-white/60">Professional service, every single time</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Pro-Grade Equipment",
                desc: "Commercial booster packs with surge protection for your vehicle's electronics",
                icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
                color: "from-blue-600 to-cyan-600"
              },
              {
                title: "Safety First",
                desc: "Complete electrical system checks to prevent damage during jump start",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                color: "from-green-600 to-emerald-600"
              },
              {
                title: "Battery Assessment",
                desc: "Quick diagnostic to check if your battery needs replacement or just a charge",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
                color: "from-yellow-600 to-orange-600"
              },
              {
                title: "Alternator Check",
                desc: "We verify your alternator is charging properly to prevent future issues",
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                color: "from-purple-600 to-pink-600"
              },
              {
                title: "Clean Connections",
                desc: "We clean corroded terminals to ensure optimal electrical flow",
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                color: "from-cyan-600 to-blue-600"
              },
              {
                title: "Expert Advice",
                desc: "Honest recommendations on whether you need a new battery or tow service",
                icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
                color: "from-red-600 to-rose-600"
              },
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl opacity-20 group-hover:opacity-40 blur transition duration-500`}></div>
                <div className="relative h-full p-8 bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS WITH IMAGES - Unique Vertical Timeline */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-900 to-black">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-20">
            <h2 className="text-6xl lg:text-7xl font-black text-white mb-4">
              How It <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-white/60">From stranded to started in three simple steps</p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Call or Request Online",
                desc: "Reach us 24/7 via phone or online booking. We'll locate you via GPS and dispatch immediately.",
                imgLabel: "Customer Calling for Service",
                imgSrc: "/services/jump-start-step-1.webp",
                align: "left"
              },
              {
                step: "02",
                title: "Expert Arrives Fast",
                desc: "Certified technician arrives in under 25 minutes with professional-grade equipment.",
                imgLabel: "Technician Arriving with Equipment",
                imgSrc: "/services/jump-start-step-2.webp",
                align: "right"
              },
              {
                step: "03",
                title: "Back on the Road",
                desc: "We jump start your vehicle, test the system, and provide expert advice on next steps.",
                imgLabel: "Successful Jump Start",
                imgSrc: "/services/jump-start-step-3.webp",
                align: "left"
              },
            ].map((item, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row gap-8 items-center ${item.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition duration-500"></div>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-blue-400/30">
                      {item.imgSrc ? (
                        <img
                          src={item.imgSrc}
                          alt={item.imgLabel}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                          <div className="text-center space-y-4 p-8">
                            <svg className="w-24 h-24 mx-auto text-blue-400 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-white/60 font-medium">{item.imgLabel}</p>
                            <p className="text-white/30 text-sm">1200x900px</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="text-9xl font-black text-blue-500/10 absolute -top-8 -left-4">{item.step}</div>
                    <div className="relative space-y-4">
                      <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/30">
                        <span className="text-blue-400 font-bold text-sm">STEP {item.step}</span>
                      </div>
                      <h3 className="text-4xl font-black text-white">{item.title}</h3>
                      <p className="text-xl text-white/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HYBRID & EV SECTION - Special callout */}
      <section className="py-24 px-6 bg-gradient-to-br from-green-900/20 via-black to-black border-y border-green-500/20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-[3rem] blur-2xl"></div>
              <div className="relative h-full border-2 border-green-400/30 rounded-[3rem] overflow-hidden">
                <img
                  src="/services/jump-start-ev.webp"
                  alt="Hybrid and Electric Vehicle Jump Start Service"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-400/30">
                <span className="text-green-400 text-sm font-bold">HYBRID & EV READY</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
                We Service <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Hybrid</span> and <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Electric</span> Vehicles
              </h2>
              <p className="text-xl text-white/70 leading-relaxed">
                Don't let a dead 12V battery strand your hybrid or EV. We have the specialized knowledge and equipment to safely jump-start hybrid and electric vehicles without damaging sensitive electronics.
              </p>
              <ul className="space-y-4">
                {[
                  "Safe 12V auxiliary battery jump starts",
                  "Knowledge of hybrid system protocols",
                  "Protection for high-voltage components",
                  "Expert guidance on traction battery issues"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/80">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-slate-900">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              What Our Customers Say
            </h2>

            {/* Aggregate rating display */}
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-blue-500/20">
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
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-bold text-white text-lg">{review.name}</div>
                      <div className="text-sm text-white/50">{review.date}</div>
                    </div>
                    {review.verified && (
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
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

      {/* FAQ - Lightning Design */}
      <section className="py-24 px-6 bg-black">
        <div className="mx-auto max-w-[1000px]">
          <div className="text-center mb-16">
            <h2 className="text-6xl lg:text-7xl font-black text-white mb-4">
              Got <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Questions?</span>
            </h2>
            <p className="text-xl text-white/60">We've got answers</p>
          </div>

          <div className="space-y-4">
            <ElectricFaq q="How fast can you arrive?">
              Most jump starts are completed within 25 minutes from your call. We dispatch the nearest technician immediately and provide real-time ETA updates via text.
            </ElectricFaq>
            <ElectricFaq q="Do you service hybrids and EVs?">
              Absolutely! We specialize in hybrid and EV 12V auxiliary battery jump starts. Our technicians are trained to work safely around high-voltage systems without causing damage.
            </ElectricFaq>
            <ElectricFaq q="What if my battery is completely dead?">
              No problem. Our professional-grade booster packs can jump start completely dead batteries. After the jump, we'll test your charging system and advise if you need a replacement battery.
            </ElectricFaq>
            <ElectricFaq q="Will you damage my car's electronics?">
              Never. We use commercial-grade equipment with surge protection and follow manufacturer protocols to protect your vehicle's sensitive electronics, computers, and safety systems.
            </ElectricFaq>
            <ElectricFaq q="What if the jump start doesn't work?">
              If your battery won't hold a charge or if there's an alternator issue, we'll advise you on the best next steps. Your jump start fee can be applied toward a tow to a repair shop.
            </ElectricFaq>
            <ElectricFaq q="Do you sell or install batteries?">
              We don't sell batteries, but we can jump start your vehicle so you can drive to an auto parts store or mechanic. We'll provide honest advice on whether you need a new battery.
            </ElectricFaq>
          </div>
        </div>
      </section>

      {/* FINAL CTA - Electric Explosion */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-cyan-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        <div className="relative mx-auto max-w-[1400px] text-center space-y-10">
          {/* Electric Bolt Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-3xl"></div>
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <h2 className="text-5xl lg:text-8xl font-black text-white leading-tight">
            Battery Dead?
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              We're Already Coming
            </span>
          </h2>

          <p className="text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Don't wait in the dark. Our certified technicians are standing by 24/7 with professional equipment to get you powered up fast.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            {showBanners && (
              <button
                onClick={() => {
                  const launcherButton = document.querySelector('button[aria-label*="Get instant price"]') as HTMLButtonElement;
                  if (launcherButton) {
                    launcherButton.click();
                  }
                }}
                className="relative px-14 py-7 rounded-2xl font-extrabold text-2xl bg-[#42b3ffff] text-black hover:brightness-110 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
                style={{
                  boxShadow: '0 0 20px rgba(66, 179, 255, 0.5), 0 0 40px rgba(66, 179, 255, 0.3)',
                }}
              >
                <span
                  className="absolute inset-0 shimmer-effect"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, transparent 30%, rgba(255,255,255,0.9) 50%, transparent 70%, transparent 100%)',
                    transform: 'translateX(-100%)',
                  }}
                />
                <span className="relative z-10"><span style={{ color: 'red' }}>💰</span> Order Online & Save {discountText}</span>
              </button>
            )}

            <a
              href="tel:18589999293"
              className="group px-14 py-7 rounded-2xl font-bold text-2xl border-2 border-white/50 bg-white/10 backdrop-blur-xl text-white hover:bg-white hover:text-black transition-all duration-500 hover:scale-110 flex items-center gap-3"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now: (858) 999-9293
            </a>

            <a
              href="https://wa.me/18589999293?text=I%20need%20a%20jump%20start"
              className="inline-flex items-center gap-2 px-8 py-5 bg-[#25D366] hover:brightness-110 rounded-2xl text-white font-bold text-lg transition-all hover:scale-105"
              style={{
                boxShadow: '0 0 15px rgba(37, 211, 102, 0.3)',
              }}
            >
              <span className="text-xl">📱</span>
              WhatsApp
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 max-w-4xl mx-auto">
            {[
              { icon: "⚡", text: "Instant Dispatch" },
              { icon: "🔒", text: "Licensed & Insured" },
              { icon: "⭐", text: "5-Star Service" },
              { icon: "🚀", text: "Under 25 Minutes" },
            ].map((badge, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="text-3xl">{badge.icon}</div>
                <div className="text-sm text-white/70 font-semibold">{badge.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 px-6 bg-slate-950 border-t border-blue-500/10">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">More Roadside Services</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/towing" className="px-6 py-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border border-blue-500/20 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 font-semibold text-white hover:text-blue-400">
              Towing Service
            </Link>
            <Link href="/services/tire-change" className="px-6 py-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border border-blue-500/20 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 font-semibold text-white hover:text-blue-400">
              Tire Change
            </Link>
            <Link href="/services/lockout" className="px-6 py-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border border-blue-500/20 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 font-semibold text-white hover:text-blue-400">
              Lockout Service
            </Link>
            <Link href="/services/gas-delivery" className="px-6 py-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border border-blue-500/20 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 font-semibold text-white hover:text-blue-400">
              Gas Delivery
            </Link>
            <Link href="/services/winch-out" className="px-6 py-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border border-blue-500/20 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 font-semibold text-white hover:text-blue-400">
              Winch Out
            </Link>
            <Link href="/services/collision-recovery" className="px-6 py-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border border-blue-500/20 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 font-semibold text-white hover:text-blue-400">
              Collision Recovery
            </Link>
          </div>
        </div>
      </section>

      {/* Left-side popup */}
      <LeftPopup />
    </main>
  );
}

function ElectricFaq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-slate-900/50 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
      <summary className="cursor-pointer select-none p-6 font-bold text-lg flex items-center justify-between text-white">
        <span className="flex items-center gap-3">
          <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
          </span>
          {q}
        </span>
        <svg
          className="w-6 h-6 text-blue-400 group-open:rotate-180 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-6 pb-6 text-white/70 leading-relaxed border-t border-blue-500/10 pt-4">
        {children}
      </div>
    </details>
  );
}
