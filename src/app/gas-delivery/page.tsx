"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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

  // Set canonical URL
  useEffect(() => {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.closebytowing.com/gas-delivery');
  }, []);

  // FAQ data used for both rendering and schema
  const faqItems = [
    {
      question: "How fast can you deliver fuel to my location in San Diego?",
      answer: "Our average response time is 15 to 25 minutes throughout San Diego County. We maintain a fleet of six fuel delivery trucks strategically positioned across the region, allowing us to reach stranded drivers quickly whether they are on Interstate 5, Interstate 8, Interstate 15, or any local road in the greater San Diego area."
    },
    {
      question: "What types of fuel do you deliver?",
      answer: "We deliver all major fuel types including regular unleaded (87 octane), mid-grade (89 octane), premium gasoline (91+ octane), diesel fuel, DEF fluid for diesel exhaust systems, and high-performance racing fuel. All fuel is EPA-certified and transported in DOT-approved safety containers to ensure quality and compliance."
    },
    {
      question: "How much does emergency fuel delivery cost in San Diego?",
      answer: "Our fuel delivery service includes a delivery fee starting at $45 to $65 depending on your vehicle type and location, plus the cost of fuel at current market rates. We provide upfront pricing before dispatch so there are no surprises. Order online through our website to save on the delivery fee."
    },
    {
      question: "Do you deliver fuel 24 hours a day, 7 days a week?",
      answer: "Yes, CloseBy Towing offers 24/7 emergency fuel delivery service throughout San Diego County. Whether you run out of gas at 2 AM on the freeway or during afternoon rush hour in downtown San Diego, our team is always ready to respond. We operate 365 days a year including all holidays."
    },
    {
      question: "Can you deliver fuel to commercial vehicles and trucks?",
      answer: "Absolutely. We service all vehicle types from compact cars and sedans to full-size pickup trucks, RVs, box trucks, semi-trucks, and even construction equipment. We carry both gasoline and diesel fuel and can handle large-volume deliveries for commercial fleets. Contact us for fleet pricing and scheduled delivery options."
    },
    {
      question: "What happens if I put the wrong fuel type in my vehicle?",
      answer: "If you accidentally put the wrong fuel in your vehicle, do not start the engine. Call us immediately at (858) 999-9293 and we can coordinate with our towing team to transport your vehicle to a qualified mechanic for a fuel system flush. Running an engine with the wrong fuel type can cause serious and expensive damage to the fuel system and engine."
    },
    {
      question: "Is your fuel delivery service available throughout all of San Diego County?",
      answer: "Yes, we provide fuel delivery across the entire San Diego County area. Our coverage includes downtown San Diego, La Jolla, Pacific Beach, Mission Valley, Chula Vista, National City, El Cajon, La Mesa, Poway, Rancho Bernardo, Escondido, Oceanside, Carlsbad, Encinitas, Del Mar, and all surrounding communities. We also cover major freeways including I-5, I-8, I-15, and SR-163."
    },
    {
      question: "What payment methods do you accept for fuel delivery?",
      answer: "We accept all major payment methods including cash, Visa, Mastercard, American Express, Discover, Apple Pay, Google Pay, and Venmo. You can also pay securely through our online ordering system when you request service through our website. Fleet accounts with monthly invoicing are available for commercial customers."
    }
  ];

  // Schema.org structured data
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.closebytowing.com/gas-delivery#service",
        "name": "Emergency Gas & Fuel Delivery San Diego",
        "description": "24/7 emergency fuel delivery service in San Diego County. We deliver regular unleaded, premium, diesel, and DEF fluid directly to your vehicle in 15-25 minutes. EPA-certified fuel in DOT-approved containers.",
        "url": "https://www.closebytowing.com/gas-delivery",
        "image": "https://www.closebytowing.com/services/gas-delivery-hero.webp",
        "serviceType": "Fuel Delivery",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://www.closebytowing.com/#business",
          "name": "CloseBy Towing",
          "image": "https://www.closebytowing.com/services/gas-delivery-hero.webp",
          "url": "https://www.closebytowing.com",
          "telephone": "+1-858-999-9293",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Diego",
            "addressRegion": "CA",
            "postalCode": "92101",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 32.7157,
            "longitude": -117.1611
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "22"
          },
          "sameAs": [
            "https://facebook.com/closebytowing",
            "https://twitter.com/closebytowing"
          ]
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "San Diego",
            "sameAs": "https://en.wikipedia.org/wiki/San_Diego"
          },
          {
            "@type": "City",
            "name": "Chula Vista"
          },
          {
            "@type": "City",
            "name": "El Cajon"
          },
          {
            "@type": "City",
            "name": "La Mesa"
          },
          {
            "@type": "City",
            "name": "National City"
          },
          {
            "@type": "City",
            "name": "Poway"
          },
          {
            "@type": "City",
            "name": "Encinitas"
          },
          {
            "@type": "AdministrativeArea",
            "name": "San Diego County"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Fuel Delivery Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Regular Unleaded Delivery",
                "description": "87 octane regular unleaded gasoline delivered to your vehicle"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Premium Gasoline Delivery",
                "description": "91+ octane premium gasoline for luxury and sports vehicles"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Diesel Fuel Delivery",
                "description": "Diesel fuel delivery for trucks, commercial vehicles, and equipment"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "DEF Fluid Delivery",
                "description": "Diesel exhaust fluid for SCR-equipped diesel vehicles"
              }
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.closebytowing.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Gas Delivery",
            "item": "https://www.closebytowing.com/gas-delivery"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0a1f] text-white overflow-hidden">

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

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
              <span className="font-bold text-orange-400"> 15-25 minutes</span> arrival time.
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
                <span className="font-bold">5.0</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-300"></span>
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
              <p className="text-5xl font-black mb-1">5.0</p>
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
              { id: "regular", name: "Regular Unleaded", octane: "87", icon: "\u26FD", desc: "Standard gasoline for most passenger vehicles", color: "slate", popular: true },
              { id: "premium", name: "Premium Gasoline", octane: "91+", icon: "\u2B50", desc: "High-octane fuel for luxury & sports cars", color: "amber" },
              { id: "diesel", name: "Diesel Fuel", octane: "D", icon: "\uD83D\uDE9A", desc: "For diesel engines and heavy-duty vehicles", color: "emerald" },
              { id: "midgrade", name: "Mid-Grade", octane: "89", icon: "\u26A1", desc: "Balanced option for higher performance", color: "blue" },
              { id: "def", name: "DEF Fluid", octane: "DEF", icon: "\uD83D\uDCA7", desc: "Diesel exhaust fluid for SCR systems", color: "sky" },
              { id: "racing", name: "Racing Fuel", octane: "100+", icon: "\uD83C\uDFC1", desc: "High-performance racing fuel", color: "red" },
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
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">Getting fuel delivered to your stranded vehicle in San Diego is simple. Our streamlined four-step process gets you back on the road as quickly as possible with zero hassle.</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-orange-500 via-amber-500 to-yellow-500 hidden md:block"></div>

            <div className="space-y-8">

              {[
                { num: 1, title: "Call, Text, or Order Online", desc: "Contact us at (858) 999-9293 by phone or text, or use our online request form to save on your delivery fee. Let us know your exact location, the type of fuel your vehicle needs, and approximately how much fuel you require. Our dispatchers are standing by around the clock to assist you.", time: "< 1 min" },
                { num: 2, title: "Get Instant Quote & ETA", desc: "We provide a clear, upfront price quote before dispatching a driver so you know exactly what to expect. Our system uses real-time GPS to assign the nearest available truck and send you a live ETA. No surprise charges and no hidden fees.", time: "Immediate" },
                { num: 3, title: "We Arrive & Deliver Fresh Fuel", desc: "A certified CloseBy Towing technician arrives at your location with fresh, EPA-certified fuel stored in DOT-approved safety containers. We carefully fill your tank with the correct fuel type and verify your vehicle starts without issue before leaving.", time: "15-25 min" },
                { num: 4, title: "You're Back on the Road", desc: "Pay conveniently with cash, credit card, debit card, Apple Pay, Google Pay, or Venmo. If you ordered online, your payment is already handled. We confirm everything is running smoothly and you are safely on your way.", time: "Done!" },
              ].map((step, i) => (
                <div key={i} className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl z-10">
                    {step.num}
                  </div>
                  <div className="flex-1 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300">
                    <h3 className="text-2xl font-black text-white mb-2">{step.title}</h3>
                    <p className="text-slate-300 mb-2">{step.desc}</p>
                    <p className="text-sm text-orange-400">Time: {step.time}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* SAN DIEGO COVERAGE SECTION */}
      <section className="relative py-32 bg-[#0a0a1f]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-4">
              San Diego <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Coverage Area</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our fleet of fuel delivery trucks covers all of San Diego County. Whether you are stuck on a busy freeway or in a quiet neighborhood, we will get fuel to you fast.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left - Areas Served */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                  <svg className="w-7 h-7 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Communities We Serve
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Downtown San Diego", "La Jolla", "Pacific Beach", "Mission Valley",
                    "Mission Beach", "Ocean Beach", "Point Loma", "Hillcrest",
                    "North Park", "Chula Vista", "National City", "El Cajon",
                    "La Mesa", "Poway", "Rancho Bernardo", "Scripps Ranch",
                    "Del Mar", "Encinitas", "Solana Beach", "Coronado",
                    "Imperial Beach", "Spring Valley", "Santee", "Lakeside",
                  ].map((area, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-300">
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Freeways & Details */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                  <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Major Freeways Covered
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Interstate 5 (I-5)", desc: "From the border at San Ysidro through downtown to Oceanside and beyond" },
                    { name: "Interstate 8 (I-8)", desc: "Ocean Beach through Mission Valley, El Cajon, and east to Alpine" },
                    { name: "Interstate 15 (I-15)", desc: "From National City through Mira Mesa, Rancho Bernardo, to Escondido" },
                    { name: "Interstate 805 (I-805)", desc: "Chula Vista through National City and connecting to I-5 in Sorrento Valley" },
                    { name: "SR-163", desc: "Downtown through Hillcrest, Mission Valley, and into Kearny Mesa" },
                    { name: "SR-52 & SR-56", desc: "East-west corridors through Clairemont, Kearny Mesa, and Rancho Penasquitos" },
                  ].map((freeway, i) => (
                    <div key={i} className="border-l-2 border-orange-500/50 pl-4">
                      <h4 className="font-bold text-white">{freeway.name}</h4>
                      <p className="text-sm text-slate-400">{freeway.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 p-6 rounded-2xl border border-orange-500/30">
                <p className="text-lg text-white font-bold mb-2">Running out of gas on the freeway?</p>
                <p className="text-slate-300 text-sm mb-4">Pull over safely to the right shoulder, turn on your hazard lights, and call us immediately. Our drivers are trained to safely deliver fuel at freeway shoulder locations throughout San Diego County. If your vehicle needs additional help, we also offer <Link href="/towing" className="text-orange-400 underline hover:text-orange-300">emergency towing</Link> and <Link href="/roadside-assistance" className="text-orange-400 underline hover:text-orange-300">full roadside assistance</Link>.</p>
                <a href="tel:8589999293" className="inline-flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call (858) 999-9293 Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="relative py-32 bg-gradient-to-b from-[#0a0a1f] to-slate-900">
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to know about our emergency fuel delivery service in San Diego. Have a question not listed here? Call us at (858) 999-9293 and we will be happy to help.
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((faq, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center text-sm font-black">
                      Q
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-slate-300 leading-relaxed pl-11">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="relative py-32 bg-slate-900">
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
                <div className="text-3xl font-extrabold text-white">5.0</div>
                <div className="flex gap-0.5 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">&#9733;</span>
                  ))}
                </div>
              </div>
              <div className="border-l-2 border-white/20 pl-4">
                <div className="text-sm font-semibold text-white/70">Based on</div>
                <div className="text-xl font-bold text-white"></div>
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

      {/* CROSS-SERVICE LINKS SECTION */}
      <section className="relative py-24 bg-gradient-to-b from-slate-900 to-[#0a0a1f]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-4">
              Need <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">More Help?</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Running out of gas is just one of the roadside emergencies we handle. CloseBy Towing offers a full range of services across San Diego County to get you back on the road no matter what happened.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <Link href="/towing" className="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mb-5 text-2xl group-hover:scale-110 transition-transform">
                🚛
              </div>
              <h3 className="text-xl font-black text-white mb-2">Towing Service</h3>
              <p className="text-slate-400 text-sm mb-4">24/7 emergency towing with flatbed and wheel-lift options. Fast 20-minute response throughout San Diego County for breakdowns, accidents, and vehicle transport.</p>
              <span className="text-orange-400 font-bold text-sm group-hover:text-orange-300 transition-colors flex items-center gap-1">
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>

            <Link href="/roadside-assistance" className="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-5 text-2xl group-hover:scale-110 transition-transform">
                🛣️
              </div>
              <h3 className="text-xl font-black text-white mb-2">Roadside Assistance</h3>
              <p className="text-slate-400 text-sm mb-4">Complete roadside help including tire changes, battery service, fuel delivery, and more. One call handles everything so you do not have to figure out what service you need.</p>
              <span className="text-orange-400 font-bold text-sm group-hover:text-orange-300 transition-colors flex items-center gap-1">
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>

            <Link href="/jump-start" className="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mb-5 text-2xl group-hover:scale-110 transition-transform">
                🔋
              </div>
              <h3 className="text-xl font-black text-white mb-2">Jump Start Service</h3>
              <p className="text-slate-400 text-sm mb-4">Dead battery? Our technicians arrive fast with professional jump start equipment to get your engine running again. Works on all vehicle types and battery sizes.</p>
              <span className="text-orange-400 font-bold text-sm group-hover:text-orange-300 transition-colors flex items-center gap-1">
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>

            <Link href="/lockout" className="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-5 text-2xl group-hover:scale-110 transition-transform">
                🔑
              </div>
              <h3 className="text-xl font-black text-white mb-2">Lockout Service</h3>
              <p className="text-slate-400 text-sm mb-4">Locked out of your car? Our trained technicians use professional tools to safely unlock your vehicle without causing any damage. Available 24 hours a day across San Diego.</p>
              <span className="text-orange-400 font-bold text-sm group-hover:text-orange-300 transition-colors flex items-center gap-1">
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>

            <Link href="/winch-out" className="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-5 text-2xl group-hover:scale-110 transition-transform">
                ⛓️
              </div>
              <h3 className="text-xl font-black text-white mb-2">Winch-Out Service</h3>
              <p className="text-slate-400 text-sm mb-4">Vehicle stuck in mud, sand, a ditch, or off the road? Our winch-out service safely recovers your vehicle and gets it back onto solid ground without additional damage.</p>
              <span className="text-orange-400 font-bold text-sm group-hover:text-orange-300 transition-colors flex items-center gap-1">
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>

            {/* Gas Delivery highlight card */}
            <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 backdrop-blur-sm p-8 rounded-3xl border-2 border-orange-500/50">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-5 text-2xl">
                ⛽
              </div>
              <h3 className="text-xl font-black text-white mb-2">Gas Delivery</h3>
              <p className="text-slate-300 text-sm mb-4">You are here! Emergency fuel delivery for all vehicle types. Regular, premium, diesel, and DEF fluid delivered in 15-25 minutes anywhere in San Diego County.</p>
              <span className="text-orange-400 font-bold text-sm flex items-center gap-1">
                Currently Viewing
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
            </div>

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
            We're ready to help. Fast delivery in 15-25 minutes. Call or request online instantly.
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
            <span>EPA-Certified Fuel</span>
            <span>|</span>
            <span>24/7 Available</span>
            <span>|</span>
            <span>No Hidden Fees</span>
            <span>|</span>
            <span>15,000+ Served</span>
          </div>
        </div>
      </section>

      <LeftPopup />
    </div>
  );
}
