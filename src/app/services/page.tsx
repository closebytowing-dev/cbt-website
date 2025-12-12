"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import LeftPopup from "@/components/LeftPopup";

// Service data with images and details
const services = [
  {
    id: "towing",
    name: "Towing",
    tagline: "Professional Vehicle Transport",
    href: "/services/towing",
    description: "State-of-the-art flatbed and wheel-lift towing for any vehicle. From daily drivers to exotic supercars, we handle them all with precision care.",
    image: "/services/tow-truck-hero.webp",
    features: ["Flatbed & Wheel-lift", "Exotic Car Certified", "Long Distance Available"],
    price: "From $75",
    color: "from-red-500 to-orange-600",
    bgColor: "bg-gradient-to-br from-red-500/10 to-orange-500/10",
  },
  {
    id: "jump-start",
    name: "Jump Start",
    tagline: "Instant Battery Revival",
    href: "/services/jump-start",
    description: "Dead battery? Our technicians arrive with professional-grade equipment to get your engine running in minutes, including hybrid and EV support.",
    image: "/services/jump-start-hero.webp",
    features: ["All Vehicle Types", "Hybrid & EV Ready", "Battery Testing"],
    price: "From $55",
    color: "from-yellow-400 to-amber-500",
    bgColor: "bg-gradient-to-br from-yellow-400/10 to-amber-500/10",
  },
  {
    id: "lockout",
    name: "Lockout Service",
    tagline: "Swift Access Recovery",
    href: "/services/lockout",
    description: "Locked out of your vehicle? Our certified technicians use advanced tools to safely unlock any car without damage, day or night.",
    image: "/services/lockout-hero.webp",
    features: ["Damage-Free Entry", "All Makes & Models", "Smart Key Compatible"],
    price: "From $65",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
  },
  {
    id: "tire-change",
    name: "Tire Change",
    tagline: "Rapid Roadside Repair",
    href: "/services/tire-change",
    description: "Flat tire on the highway? We'll swap it for your spare quickly and safely, or tow you to your preferred tire shop if needed.",
    image: "/services/tire-change-hero.webp",
    features: ["Quick Swap Service", "Run-Flat Capable", "Tire Shop Transport"],
    price: "From $65",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
  },
  {
    id: "gas-delivery",
    name: "Gas Delivery",
    tagline: "Fuel When You Need It",
    href: "/services/gas-delivery",
    description: "Running on empty? We deliver fuel directly to your location so you can get back on the road without the hassle of finding a gas station.",
    image: "/services/gas-delivery-hero.webp",
    features: ["Regular & Premium", "Diesel Available", "Delivered to You"],
    price: "From $55",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-gradient-to-br from-orange-500/10 to-red-500/10",
  },
  {
    id: "winch-out",
    name: "Winch-Out",
    tagline: "Expert Vehicle Extraction",
    href: "/services/winch-out",
    description: "Stuck in mud, sand, snow, or a ditch? Our powerful winch equipment safely extracts vehicles from the toughest situations.",
    image: "/services/winch-out-hero.webp",
    features: ["Heavy-Duty Winch", "Off-Road Recovery", "Damage Prevention"],
    price: "From $95",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-gradient-to-br from-purple-500/10 to-violet-500/10",
  },
  {
    id: "collision-recovery",
    name: "Collision Recovery",
    tagline: "Accident Response Experts",
    href: "/services/collision-recovery",
    description: "After an accident, trust our experienced team for safe vehicle recovery. We work directly with insurance companies and provide full documentation.",
    image: "/services/collision-recovery-hero.webp",
    features: ["Insurance Direct", "Scene Documentation", "24/7 Emergency"],
    price: "From $125",
    color: "from-slate-600 to-slate-800",
    bgColor: "bg-gradient-to-br from-slate-600/10 to-slate-800/10",
  },
];

const stats = [
  { value: "20-35", label: "Min Response", suffix: "min" },
  { value: "10,000", label: "Happy Customers", suffix: "+" },
  { value: "4.9", label: "Star Rating", suffix: "/5" },
  { value: "15", label: "Years Experience", suffix: "+" },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Parallax and mouse tracking effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Auto-rotate featured service
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Schema markup for SEO
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Roadside Assistance",
    "provider": {
      "@type": "LocalBusiness",
      "name": "CloseBy Towing",
      "telephone": "+1-858-999-9293",
      "url": "https://closebytowing.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Diego",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1247"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "San Diego"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roadside Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description,
          "url": `https://closebytowing.com${service.href}`
        }
      }))
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Animated Background Gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,186,66,0.15), transparent 40%)`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      </div>

      {/* HERO SECTION - Cinematic Full-Screen */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
              backgroundSize: '100px 100px',
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          />
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8 animate-fadeInUp">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-white/80">Available 24/7 Across San Diego</span>
          </div>

          {/* Main Headline with Gradient */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight mb-8">
            <span className="block text-white/90 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              Roadside
            </span>
            <span
              className="block bg-gradient-to-r from-[#ffba42] via-amber-400 to-orange-500 bg-clip-text text-transparent animate-fadeInUp"
              style={{ animationDelay: '0.2s' }}
            >
              Excellence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            Premium roadside assistance that arrives fast and delivers perfection.
            <span className="text-white font-semibold"> 7 specialized services</span> designed for every emergency.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <a
              href="tel:+18589999293"
              className="group relative px-10 py-5 rounded-2xl font-bold text-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ffba42] to-orange-500 transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-[#ffba42] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-3 text-black">
                <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (858) 999-9293
              </span>
            </a>
            <button
              onClick={() => servicesRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-10 py-5 rounded-2xl font-bold text-xl bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all"
            >
              <span className="flex items-center gap-3">
                Explore Services
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </button>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="text-3xl md:text-4xl font-black text-white">
                  {stat.value}<span className="text-[#ffba42]">{stat.suffix}</span>
                </div>
                <div className="text-sm text-white/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* SERVICES SHOWCASE - Interactive Cards */}
      <section ref={servicesRef} className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-[0.3em] text-[#ffba42] uppercase mb-4">
              Our Services
            </h2>
            <h3 className="text-5xl md:text-7xl font-black leading-tight">
              Everything You Need,
              <span className="block text-white/40">When You Need It</span>
            </h3>
          </div>

          {/* Featured Service Showcase */}
          <div className="relative mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Side */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
                <Image
                  src={services[activeService].image}
                  alt={services[activeService].name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Floating Price Tag */}
                <div className="absolute top-6 right-6 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20">
                  <span className="text-2xl font-black text-[#ffba42]">{services[activeService].price}</span>
                </div>

                {/* Service Badge */}
                <div className="absolute bottom-6 left-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${services[activeService].color}`}>
                    <span className="text-white font-bold">{services[activeService].name}</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-4xl md:text-5xl font-black mb-2">{services[activeService].name}</h4>
                  <p className="text-xl text-[#ffba42] font-medium">{services[activeService].tagline}</p>
                </div>

                <p className="text-lg text-white/70 leading-relaxed">
                  {services[activeService].description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {services[activeService].features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  href={services[activeService].href}
                  className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r ${services[activeService].color} text-white hover:scale-105 transition-transform`}
                >
                  Learn More
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service Selector Pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-12">
              {services.map((service, idx) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(idx)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    activeService === idx
                      ? `bg-gradient-to-r ${service.color} text-white scale-105`
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID - Bento Style */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black">
              All Services at a <span className="text-[#ffba42]">Glance</span>
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Link
                key={service.id}
                href={service.href}
                className={`group relative overflow-hidden rounded-3xl ${
                  idx === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`relative ${idx === 0 ? 'aspect-[16/9] md:aspect-[4/3]' : 'aspect-[4/3]'}`}>
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    {/* Price Badge */}
                    <div className="absolute top-6 right-6">
                      <span className={`px-4 py-2 rounded-xl bg-gradient-to-r ${service.color} text-white text-sm font-bold`}>
                        {service.price}
                      </span>
                    </div>

                    {/* Service Info */}
                    <div>
                      <h3 className={`font-black mb-2 ${idx === 0 ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
                        {service.name}
                      </h3>
                      <p className="text-white/70 mb-4 line-clamp-2">{service.tagline}</p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.features.slice(0, idx === 0 ? 3 : 2).map((feature, fidx) => (
                          <span key={fidx} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80">
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Learn More */}
                      <div className="flex items-center gap-2 text-[#ffba42] font-semibold group-hover:gap-4 transition-all">
                        <span>Learn More</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-t ${service.color}`} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Premium Features */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-sm font-bold tracking-[0.3em] text-[#ffba42] uppercase mb-4">
                Why CloseBy
              </h2>
              <h3 className="text-5xl md:text-6xl font-black leading-tight mb-8">
                The Gold Standard in
                <span className="block text-white/40">Roadside Assistance</span>
              </h3>

              <div className="space-y-6">
                {[
                  { icon: "lightning", title: "Fastest Response Times", desc: "Average 20-35 minute arrival across all of San Diego County" },
                  { icon: "shield", title: "Fully Licensed & Insured", desc: "CA DOT certified with $1M+ liability coverage for your peace of mind" },
                  { icon: "dollar", title: "Transparent Pricing", desc: "Upfront quotes with no hidden fees. What we quote is what you pay." },
                  { icon: "star", title: "5-Star Service Guarantee", desc: "4.9 rating from 1,247+ reviews. Satisfaction guaranteed or money back." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#ffba42]/50 transition-all group">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ffba42] to-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon === "lightning" && (
                        <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                      )}
                      {item.icon === "shield" && (
                        <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                      {item.icon === "dollar" && (
                        <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                        </svg>
                      )}
                      {item.icon === "star" && (
                        <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                <Image
                  src="/services/flatbed.webp"
                  alt="Professional CloseBy Towing truck"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 animate-float">
                <div className="text-4xl font-black text-[#ffba42]">24/7</div>
                <div className="text-sm text-white/70">Always Available</div>
              </div>

              <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#ffba42]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm text-white/70 mt-1">1,247+ Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION - Timeline */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-[#ffba42]/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-[0.3em] text-[#ffba42] uppercase mb-4">
              How It Works
            </h2>
            <h3 className="text-5xl md:text-6xl font-black">
              Help in <span className="text-[#ffba42]">4 Simple Steps</span>
            </h3>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#ffba42] via-[#ffba42]/50 to-transparent hidden md:block" />

            {[
              { step: "01", title: "Call or Book Online", desc: "Reach us 24/7 via phone, text, or our online form. Describe your situation and location.", time: "1 min" },
              { step: "02", title: "Get Instant Quote", desc: "Receive upfront, transparent pricing with no hidden fees. Approve and we dispatch immediately.", time: "2 min" },
              { step: "03", title: "Track Your Driver", desc: "Watch your driver approach in real-time with GPS tracking and ETA updates.", time: "20-35 min" },
              { step: "04", title: "Problem Solved", desc: "Our certified technician resolves your issue professionally. Pay only what was quoted.", time: "Done!" },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`relative flex items-center gap-8 mb-16 last:mb-0 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={`flex-1 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#ffba42]/50 transition-all ${idx % 2 === 1 ? 'md:text-right' : ''}`}>
                  <div className="text-6xl font-black text-white/10 mb-4">{item.step}</div>
                  <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                  <p className="text-white/60 mb-4">{item.desc}</p>
                  <span className="inline-block px-4 py-2 rounded-xl bg-[#ffba42]/20 text-[#ffba42] font-bold text-sm">
                    {item.time}
                  </span>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-[#ffba42] to-orange-500 items-center justify-center flex-shrink-0 z-10">
                  <span className="text-2xl font-black text-black">{idx + 1}</span>
                </div>

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - Full Impact */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffba42]/20 via-orange-500/10 to-red-500/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ffba42]/20 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-black leading-tight mb-8">
            Ready When
            <span className="block bg-gradient-to-r from-[#ffba42] to-orange-500 bg-clip-text text-transparent">
              You Need Us
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12">
            Don't let a roadside emergency ruin your day. San Diego's most trusted towing and roadside service is just one call away.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+18589999293"
              className="group relative px-12 py-6 rounded-2xl font-black text-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ffba42] to-orange-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-4 text-black">
                <svg className="w-8 h-8 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call (858) 999-9293
              </span>
            </a>

            <a
              href="sms:+18589999293?&body=I need roadside assistance"
              className="px-12 py-6 rounded-2xl font-bold text-xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all"
            >
              Text Us Instead
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/40 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No Hidden Fees
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Satisfaction Guaranteed
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <LeftPopup />
    </main>
  );
}
