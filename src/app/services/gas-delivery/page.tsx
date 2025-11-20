"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { GasDeliveryCTAButton, GasDeliveryCTAButtonLarge } from "./GasDeliveryCTAButton";
import LeftPopup from "@/components/LeftPopup";
import { useServicePricing, PriceDisplay } from "@/hooks/useServicePricing";

export default function GasDeliveryPage() {
  // Fetch dynamic pricing from Firebase
  const { standardPrice, onlinePrice, loading, error } = useServicePricing("Fuel Delivery");

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Mouse tracking for gradient effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a1f] text-white overflow-hidden">

      {/* HERO SECTION - Interactive Background */}
      <section className="relative min-h-[75vh] flex items-start pt-20 overflow-hidden">

        {/* Animated Gradient Background */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(251, 146, 60, 0.3), rgba(249, 115, 22, 0.2), transparent 50%)`,
          }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(251, 146, 60, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 146, 60, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        {/* Floating Fuel Drops */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-500/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 7}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Hero Copy */}
          <div className="space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/50 text-orange-300 px-4 py-2 rounded-full font-semibold text-sm backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              24/7 FUEL DELIVERY • 6 TRUCKS READY NOW
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tight">
              Out of Gas?
              <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent mt-2">
                We'll Fuel You Up.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-2xl text-slate-300 leading-relaxed max-w-xl">
              Emergency fuel delivery to your exact location.
              <span className="font-bold text-orange-400"> Gas, diesel, or premium</span> for any vehicle type.
              <span className="font-bold text-orange-400"> 20-35 minutes</span> arrival time.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300">EPA-Certified Fuel</span>
              </div>

              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-bold">4.9/5</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-300">1,247 reviews</span>
              </div>

              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300">15,000+ Deliveries</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <GasDeliveryCTAButton />

              <a
                href="tel:8589999293"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-6 rounded-2xl font-black text-xl sm:text-2xl border-2 border-white/30 bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-7 h-7 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (858) 999-9293
              </a>
            </div>

          </div>

          {/* Right Side - Hero Image */}
          <div className="relative -mt-12">
            <div className="relative w-full h-[650px] lg:h-[750px] rounded-3xl overflow-hidden shadow-2xl border-2 border-orange-500/30">
              <Image
                src="/services/gas-delivery-hero.webp"
                alt="Professional gas and diesel fuel delivery service in San Diego"
                fill
                className="object-cover"
                priority
              />

              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Floating Stats Badge - Moved to middle bottom */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-br from-orange-500 to-amber-600 text-white p-8 rounded-3xl shadow-2xl border border-white/20">
              <p className="text-5xl font-black mb-1">15,000+</p>
              <p className="text-base opacity-90 font-medium">Fuel Deliveries</p>
            </div>

            {/* Floating Rating Badge */}
            <div className="absolute -top-8 -right-8 bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-3xl shadow-2xl border border-white/20">
              <p className="text-5xl font-black mb-1">4.9/5</p>
              <p className="text-base opacity-90 font-medium">Customer Rating</p>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 blur-3xl -z-10"></div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

      </section>

      {/* ALL FUEL TYPES SECTION */}
      <section className="relative pt-12 pb-32 bg-gradient-to-b from-[#0a0a1f] to-slate-900">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-4">
              We Deliver <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">All Fuel Types</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Premium quality fuel delivered directly to your vehicle. EPA-certified and stored in DOT-approved containers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              { id: "regular", name: "Regular Unleaded", octane: "87", icon: "⛽", desc: "Standard gasoline for most passenger vehicles", color: "slate", popular: true },
              { id: "premium", name: "Premium Gasoline", octane: "91+", icon: "⭐", desc: "High-octane fuel for luxury & sports cars", color: "amber" },
              { id: "diesel", name: "Diesel Fuel", octane: "D", icon: "🚚", desc: "For diesel engines and heavy-duty vehicles", color: "emerald" },
              { id: "midgrade", name: "Mid-Grade", octane: "89", icon: "⚡", desc: "Balanced option for higher performance", color: "blue" },
              { id: "def", name: "DEF Fluid", octane: "DEF", icon: "💧", desc: "Diesel exhaust fluid for SCR systems", color: "sky" },
              { id: "racing", name: "Racing Fuel", octane: "100+", icon: "🏁", desc: "High-performance racing fuel", color: "red" },
            ].map((fuel, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
              >
                {fuel.popular && (
                  <div className="absolute top-6 right-6">
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-bold border border-green-500/50">
                      POPULAR
                    </span>
                  </div>
                )}

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                  {fuel.icon}
                </div>

                <div className="mb-4">
                  <div className="inline-block bg-white/10 px-3 py-1 rounded-lg mb-3">
                    <span className="text-sm font-bold text-orange-400">{fuel.octane} OCTANE</span>
                  </div>
                  <h3 className="text-2xl font-black mb-2">{fuel.name}</h3>
                  <p className="text-slate-300">{fuel.desc}</p>
                </div>

                <div className="space-y-2 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>EPA Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>DOT-Approved Containers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Fresh Fuel Guarantee</span>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* VEHICLE TYPES SECTION */}
      <section className="relative py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-4">
              Fuel for <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Every Vehicle</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From compact cars to massive construction equipment—we service all vehicle types.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Light-Duty */}
            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 text-4xl">
                🚗
              </div>
              <h3 className="text-2xl font-black mb-4">Light-Duty Vehicles</h3>
              <p className="text-slate-300 mb-6">Standard passenger vehicles and small commercial vehicles.</p>

              <div className="space-y-2 mb-6 text-slate-300">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Cars & Sedans</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>SUVs & Crossovers</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Minivans & Compact Trucks</span>
                </div>
              </div>

              <div className="bg-orange-500/20 border border-orange-400/50 rounded-xl p-4">
                <p className="text-sm font-bold text-orange-300 mb-1">Delivery Fee</p>
                <p className="text-3xl font-black text-orange-400">$45-$50</p>
                <p className="text-xs text-orange-300 mt-1">+ fuel at market rate</p>
              </div>
            </div>

            {/* Medium-Duty */}
            <div className="bg-gradient-to-br from-orange-600/20 to-amber-600/20 backdrop-blur-sm p-8 rounded-3xl border border-orange-500/30 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 text-4xl">
                🚙
              </div>
              <h3 className="text-2xl font-black mb-4">Medium-Duty Vehicles</h3>
              <p className="text-slate-300 mb-6">Commercial trucks and larger recreational vehicles.</p>

              <div className="space-y-2 mb-6 text-slate-300">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Full-Size Pickup Trucks</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Box Trucks & Cargo Vans</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>RVs & Motorhomes</span>
                </div>
              </div>

              <div className="bg-orange-500/20 border border-orange-400/50 rounded-xl p-4">
                <p className="text-sm font-bold text-orange-300 mb-1">Delivery Fee</p>
                <p className="text-3xl font-black text-orange-400">$50-$60</p>
                <p className="text-xs text-orange-300 mt-1">+ fuel at market rate</p>
              </div>
            </div>

            {/* Heavy-Duty */}
            <div className="bg-gradient-to-br from-red-600/20 to-rose-600/20 backdrop-blur-sm p-8 rounded-3xl border border-red-500/30 hover:border-red-400 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 text-4xl">
                🚚
              </div>
              <h3 className="text-2xl font-black mb-4">Heavy-Duty Vehicles</h3>
              <p className="text-slate-300 mb-6">Large commercial vehicles and construction equipment.</p>

              <div className="space-y-2 mb-6 text-slate-300">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Semi-Trucks & 18-Wheelers</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Construction Equipment</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Buses & Farm Equipment</span>
                </div>
              </div>

              <div className="bg-orange-500/20 border border-orange-400/50 rounded-xl p-4">
                <p className="text-sm font-bold text-orange-300 mb-1">Delivery Fee</p>
                <p className="text-3xl font-black text-orange-400">$55-$65</p>
                <p className="text-xs text-orange-300 mt-1">+ fuel at market rate</p>
              </div>
            </div>

          </div>

          {/* Commercial Fleet CTA */}
          <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white text-center shadow-2xl">
            <h3 className="text-3xl font-black mb-3">Commercial Fleet Services</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">Need regular fuel delivery for your business? We offer fleet accounts with volume discounts and scheduled deliveries.</p>
            <a href="tel:8589999293" className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Request Fleet Quote
            </a>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="relative py-32 bg-gradient-to-b from-slate-900 to-[#0a0a1f]">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-4">
              How It <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-slate-300">Get fuel delivered in 4 simple steps</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-orange-500 via-amber-500 to-yellow-500 hidden md:block"></div>

            <div className="space-y-8">

              {[
                { num: 1, title: "Call or Text Us", desc: "Contact us at (858) 999-9293 with your location and fuel type needed.", time: "< 1 min" },
                { num: 2, title: "Get Instant Quote & ETA", desc: "Upfront pricing and real-time GPS tracking of your driver.", time: "Immediate" },
                { num: 3, title: "We Arrive & Deliver", desc: "Certified technician arrives with fresh fuel in DOT-approved containers.", time: "20-35 min" },
                { num: 4, title: "You're Back on the Road", desc: "Pay with cash, card, or digital payment. Quick and easy.", time: "Done!" },
              ].map((step, i) => (
                <div key={i} className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl z-10">
                    {step.num}
                  </div>
                  <div className="flex-1 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300">
                    <h3 className="text-2xl font-black text-white mb-2">{step.title}</h3>
                    <p className="text-slate-300 mb-2">{step.desc}</p>
                    <p className="text-sm text-orange-400">⏱️ {step.time}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="relative py-32 bg-[#0a0a1f]">
        <div className="max-w-[1600px] mx-auto px-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-16">
            <div className="text-center sm:text-left">
              <h2 className="text-5xl lg:text-6xl font-black mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-slate-300">Real reviews from real customers</p>
            </div>

            {/* Aggregate rating display */}
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-orange-500/20">
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
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-bold text-white text-lg">{review.name}</div>
                      <div className="text-sm text-white/50">{review.date}</div>
                    </div>
                    {review.verified && (
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
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

      {/* FINAL CTA */}
      <section className="relative py-32 bg-gradient-to-br from-orange-900 via-amber-900 to-orange-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            Out of Fuel Right Now?
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            We're ready to help. Fast delivery in 20-35 minutes. Call or request online instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GasDeliveryCTAButtonLarge />

            <a
              href="tel:8589999293"
              className="group inline-flex items-center justify-center gap-3 bg-white text-orange-900 px-12 py-6 rounded-2xl font-black text-3xl sm:text-4xl shadow-2xl hover:bg-slate-100 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (858) 999-9293
            </a>

            <a
              href="https://wa.me/18589999293?text=I%20need%20gas%20delivery"
              className="inline-flex items-center gap-2 px-10 py-6 bg-[#25D366] hover:brightness-110 rounded-2xl text-white font-bold text-xl transition-all hover:scale-105"
              style={{
                boxShadow: '0 0 15px rgba(37, 211, 102, 0.3)',
              }}
            >
              <span className="text-2xl">📱</span>
              WhatsApp
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-white/60">
            <span>✓ EPA-Certified Fuel</span>
            <span>•</span>
            <span>✓ 24/7 Available</span>
            <span>•</span>
            <span>✓ No Hidden Fees</span>
            <span>•</span>
            <span>✓ 15,000+ Served</span>
          </div>
        </div>
      </section>

      <LeftPopup />
    </div>
  );
}
