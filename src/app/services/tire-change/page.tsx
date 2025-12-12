"use client";

import Link from "next/link";
import Image from "next/image";
import { TireChangeCTAButton, FinalCTAButton } from "./TireChangeCTAButton";
import LeftPopup from "@/components/LeftPopup";
import { useServicePricing, PriceDisplay } from "@/hooks/useServicePricing";
import { useEffect } from "react";

const BANNER = "#ffba42";
const BRAND = "#1e1e4a";
const ACCENT = "#6366f1";

export default function TireChangePage() {
  // Fetch dynamic pricing from Firebase
  const { standardPrice, onlinePrice, loading, error } = useServicePricing("Tire Change");

  // Update page metadata dynamically
  useEffect(() => {
    document.title = "Emergency Tire Change Service San Diego | <25 Min Response | CloseBy Towing";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }

    if (!loading && onlinePrice > 0) {
      metaDesc.setAttribute('content', `Stranded with a flat tire? Professional tire change service in San Diego. $${onlinePrice} online rate, <25 min response, all vehicles. Available 24/7. Call (858) 999-9293 for immediate help.`);
    } else {
      metaDesc.setAttribute('content', "Stranded with a flat tire? Professional tire change service in San Diego. Fast response, all vehicles. Available 24/7. Call (858) 999-9293 for immediate help.");
    }
  }, [loading, onlinePrice]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Emergency Tire Change Service",
    provider: {
      "@type": "LocalBusiness",
      name: "CloseBy Towing",
      telephone: "+1-858-999-9293",
      url: "https://www.closebytowing.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Diego",
        addressRegion: "CA",
        addressCountry: "US"
      }
    },
    areaServed: {
      "@type": "City",
      name: "San Diego"
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://www.closebytowing.com/services/tire-change",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: "+1-858-999-9293",
        contactType: "customer service",
        availableLanguage: "English",
        areaServed: "US"
      }
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: loading ? "65-75" : `${onlinePrice}-${standardPrice}`,
      description: loading ? "Professional roadside tire change service. Fast 20-35 minute response time." : `Professional roadside tire change service. $${onlinePrice} when ordered online, $${standardPrice} standard rate. Fast 20-35 minute response time.`,
      availability: "https://schema.org/InStock"
    },
    image: "https://closebytowing.com/services/tire-change-hero.webp",
    serviceType: "Emergency Tire Change, Flat Tire Service, Spare Tire Installation",
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a tire change service cost in San Diego?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": loading ? "Our tire change service has a flat rate with no hidden fees. Service includes professional installation, torque to manufacturer specs, and pressure verification." : `Our tire change service costs $${onlinePrice} when ordered online, or $${standardPrice} for phone orders. This is a flat rate with no hidden fees. Service includes professional installation, torque to manufacturer specs, and pressure verification.`
        }
      },
      {
        "@type": "Question",
        "name": "How fast can you change my tire?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We arrive in less than 25 minutes on average, and the actual tire change takes 15-20 minutes. You'll be back on the road in under an hour from your initial call."
        }
      },
      {
        "@type": "Question",
        "name": "What if I don't have a spare tire?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No spare tire? We can help coordinate getting your vehicle to a nearby tire shop, or we can arrange for a new tire to be brought to your location. We'll discuss all available options with you on-site."
        }
      },
      {
        "@type": "Question",
        "name": "Do you service all vehicle types?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We service cars, SUVs, trucks, and most other vehicle types. Our technicians have the proper equipment and expertise to handle various vehicle sizes safely."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION - Premium Apple-style */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e1e4a] via-[#2a2a5a] to-[#1e1e4a]">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-transparent to-blue-600/10 animate-pulse"></div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12 py-16 lg:py-24">
          <div className="grid lg:grid-cols-[40%_60%] gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-semibold">Available 24/7</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                Tire Change Service
                <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                  San Diego
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-xl">
                Professional roadside assistance serving <span className="font-bold text-white">all of San Diego County</span>. Arrives in <span className="font-bold text-yellow-400">20-35 minutes</span>.
                No damage. 100% guaranteed.
              </p>

              {/* Pricing with clarity */}
              <div className="flex items-center gap-4 pt-4">
                <div className="text-center">
                  <div className="inline-block px-3 py-1 rounded-lg bg-green-500/20 border-2 border-green-400/40 mb-2">
                    <span className="text-sm text-green-300 font-bold">ONLINE RATE</span>
                  </div>
                  <div className="text-5xl font-black text-yellow-400">
                    <PriceDisplay price={onlinePrice} loading={loading} fallback="$..." />
                  </div>
                  <div className="text-sm text-green-300 font-semibold mt-1">Save 15%</div>
                </div>
                <div className="h-16 w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="text-5xl font-black text-yellow-400">20-35</div>
                  <div className="text-sm text-white/60 mt-1">Minutes ETA</div>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-6">
                <TireChangeCTAButton />
                <a
                  href="tel:18589999293"
                  className="px-10 py-6 rounded-2xl font-black text-2xl sm:text-3xl border-2 border-white/30 bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  Call (858) 999-9293
                </a>
              </div>
            </div>

            {/* Right Image - Premium placeholder */}
            <div className="relative h-[500px] lg:h-[700px] group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-purple-600/30 rounded-[3rem] blur-3xl group-hover:blur-2xl transition-all duration-700"></div>
              <div className="relative h-full rounded-[2.5rem] overflow-hidden border-2 border-white/30 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl shadow-[0_25px_80px_-15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_35px_100px_-15px_rgba(251,191,36,0.3)] transition-all duration-700">
                <Image
                  src="/services/tire-change-hero.webp"
                  alt="Professional tire change service technician replacing flat tire on roadside in San Diego"
                  width={1200}
                  height={900}
                  priority
                  quality={90}
                  className="absolute inset-0 w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none"></div>

                {/* Floating Trust Badges */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/95 backdrop-blur-xl border-2 border-yellow-400/50 shadow-2xl">
                    <span className="text-3xl font-black text-slate-900">1,500+</span>
                    <span className="text-sm font-bold text-slate-600">Tires Changed</span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-green-500/95 backdrop-blur-xl border-2 border-green-300 shadow-2xl">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-lg font-black text-white">0 Damage Record</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE - Interactive Visual */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: BANNER }}>
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/20 to-transparent"></div>
        <div className="relative mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-4 text-slate-900">
              How It <span className="text-white">Works</span>
            </h2>
            <p className="text-xl text-slate-800 max-w-2xl mx-auto font-semibold">
              We've perfected the roadside assistance experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: "01",
                title: "You Call",
                desc: "Reach us 24/7. We locate you instantly and dispatch the nearest technician.",
                icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              },
              {
                step: "02",
                title: "We Arrive",
                desc: "Professional technician arrives in 20-35 minutes with all the right tools.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z"
              },
              {
                step: "03",
                title: "Back on Road",
                desc: "Tire changed safely in 15-20 minutes after arrival. You're back to your day.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-white to-slate-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                <div className="relative h-full p-10 bg-white/95 backdrop-blur-sm rounded-3xl border-2 border-slate-900/20 hover:border-slate-900/40 transition-all duration-500 hover:shadow-2xl hover:bg-white">
                  <div className="text-8xl font-black text-orange-100 mb-6">{item.step}</div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED - Visual Cards with Images */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-4">
              Premium Service, <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Standard</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Every tire change includes our complete professional service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Professional Equipment", desc: "Hydraulic jacks, torque wrenches, impact tools", icon: "🔧" },
              { title: "Safety First", desc: "Reflective gear, traffic cones, hazard lights", icon: "⚠️" },
              { title: "Perfect Torque", desc: "Lug nuts torqued to exact manufacturer specs", icon: "⚙️" },
              { title: "Pressure Check", desc: "Spare tire pressure verified before you leave", icon: "📊" },
              { title: "Secure Storage", desc: "Flat tire safely stored in your vehicle", icon: "🔒" },
              { title: "All Vehicles", desc: "Cars, SUVs, trucks - we handle them all", icon: "🚗" },
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                <div className="relative h-full p-8 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY SECTION - Image Placeholders */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-4" style={{ color: BRAND }}>
              See Our <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-xl text-slate-600">Professional service you can trust</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Professional Tools", aspect: "aspect-square", imgSrc: "/services/tire-change-tools.webp" },
              { label: "Technician at Work", aspect: "aspect-square", imgSrc: "/services/tire-change-at-work.webp" },
              { label: "Safety Equipment", aspect: "aspect-square", imgSrc: "/services/tire-change-safety.webp" },
              { label: "Happy Customer", aspect: "aspect-square", imgSrc: "/services/tire-change-customer.webp" },
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className={`${item.aspect} relative`}>
                  {item.imgSrc ? (
                    <Image
                      src={item.imgSrc}
                      alt={item.label}
                      width={800}
                      height={800}
                      quality={85}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900">
                      <div className="text-center space-y-3 p-6">
                        <svg className="w-16 h-16 mx-auto text-yellow-400 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-white/60 text-sm font-medium">{item.label}</p>
                        <p className="text-white/30 text-xs">800x800px</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Large Feature Image */}
          <div className="mt-6 relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 hover:shadow-2xl transition-all duration-500">
            <div className="aspect-[21/9] relative">
              <Image
                src="/services/tire-change-feature.webp"
                alt="Wide angle view of professional tire change service in action"
                width={2100}
                height={900}
                quality={85}
                className="absolute inset-0 w-full h-full object-cover"
                sizes="(max-width: 1400px) 100vw, 1400px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CONVERSION CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="mx-auto max-w-[1200px] relative z-10">
          <div className="text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Ready to Get Back on the Road?
            </h2>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Don't wait in the heat or cold. Our expert technicians will arrive in <span className="font-bold text-yellow-300">20-35 minutes</span> with professional equipment to change your tire safely.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <TireChangeCTAButton />

              <div className="flex items-center gap-4 px-8 py-6 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/30">
                <div>
                  <div className="text-sm text-white/80 font-semibold">Or Call Now</div>
                  <a
                    href="tel:8589999293"
                    className="text-2xl sm:text-3xl font-black text-white hover:text-yellow-300 transition-colors"
                  >
                    (858) 999-9293
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
              <div className="flex items-center gap-2 text-white">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="font-bold">All Vehicles</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="font-bold">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="font-bold">No Hidden Fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Split with Image */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Placeholder */}
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden order-2 lg:order-1">
              <Image
                src="/services/tire-change-equipment.webp"
                alt="Professional tire change equipment and tools used by CloseBy Towing technicians"
                width={1200}
                height={900}
                quality={85}
                className="absolute inset-0 w-full h-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-5xl lg:text-6xl font-black leading-tight" style={{ color: BRAND }}>
                Why Customers Choose <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">CloseBy</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Certified Professionals",
                    desc: "Every technician is licensed, insured, and background-checked. Your safety is our priority.",
                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  },
                  {
                    title: "Lightning Fast Response",
                    desc: "Average 20-35 minute arrival time. Real-time GPS tracking so you know exactly when we'll arrive.",
                    icon: "M13 10V3L4 14h7v7l9-11h-7z"
                  },
                  {
                    title: "Transparent Pricing",
                    desc: loading ? "Flat rate. No hidden fees, no surprises. What we quote is what you pay." : `$${onlinePrice} flat rate. No hidden fees, no surprises. What we quote is what you pay.`,
                    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  },
                  {
                    title: "Complete Service",
                    desc: "From arrival to departure, we handle everything. You just wait safely in your vehicle or nearby.",
                    icon: "M5 13l4 4L19 7"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: BRAND }}>{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              What Our Customers Say
            </h2>

            {/* Aggregate rating display */}
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-yellow-500/20">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-bold text-white text-lg">{review.name}</div>
                      <div className="text-sm text-white/50">{review.date}</div>
                    </div>
                    {review.verified && (
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
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

      {/* FAQ - Premium Modern Design */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-[900px]">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-4" style={{ color: BRAND }}>
              Common <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-slate-600">Everything you need to know</p>
          </div>

          <div className="space-y-4">
            <PremiumFaq q="What if I don't have a spare?">
              No spare tire? We can help coordinate getting your vehicle to a nearby tire shop, or we can arrange for a new tire to be brought to your location. We'll discuss all available options with you on-site.
            </PremiumFaq>
            <PremiumFaq q="Can you patch my tire?">
              We specialize in tire changes rather than repairs. However, we can securely store your flat tire in your vehicle so you can take it to a tire shop for evaluation and possible patching or repair.
            </PremiumFaq>
            <PremiumFaq q="Do you sell tires?">
              We don't sell tires directly, but we work with local tire shops and can help coordinate getting you a replacement tire quickly. Our focus is getting you back on the road safely with your spare.
            </PremiumFaq>
            <PremiumFaq q="What about TPMS sensors?">
              Most spare tires don't have TPMS (Tire Pressure Monitoring System) sensors, so your dashboard light may illuminate after we install your spare. This is normal. We recommend getting your flat tire repaired or replaced as soon as possible to restore full TPMS functionality.
            </PremiumFaq>
            <PremiumFaq q="How long does a tire change take?">
              Most tire changes take 15-20 minutes once we arrive. Combined with our less than 25 minute average response time, you'll be back on the road quickly.
            </PremiumFaq>
            <PremiumFaq q="Do you service all vehicle types?">
              Yes! We service cars, SUVs, trucks, and most other vehicle types. Our technicians have the proper equipment and expertise to handle various vehicle sizes safely.
            </PremiumFaq>
          </div>
        </div>
      </section>

      {/* FINAL CTA - Stunning Visual */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e1e4a] via-purple-900 to-[#1e1e4a]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative mx-auto max-w-[1400px] text-center space-y-8">
          <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight">
            Stranded? We're
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Already On Our Way
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust CloseBy for fast, professional roadside assistance.
            Available 24/7/365 across San Diego County.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <FinalCTAButton />

            <a
              href="tel:18589999293"
              className="group px-12 py-6 rounded-2xl font-bold text-xl border-2 border-white/40 bg-white/10 backdrop-blur-xl text-white hover:bg-white hover:text-[#1e1e4a] transition-all duration-300 hover:scale-110 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (858) 999-9293
            </a>

            <a
              href="https://wa.me/18589999293?text=I%20need%20a%20tire%20change"
              className="inline-flex items-center gap-2 px-8 py-5 bg-[#25D366] hover:brightness-110 rounded-2xl text-white font-bold text-lg transition-all hover:scale-105"
              style={{
                boxShadow: '0 0 15px rgba(37, 211, 102, 0.3)',
              }}
            >
              <span className="text-xl">📱</span>
              WhatsApp
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-12 pt-16 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>24/7 Availability</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span>5-Star Rated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services - Minimal Footer Style */}
      <section className="py-16 px-6 border-t border-slate-200" style={{ background: '#ffba42' }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900">Explore Our Other Services</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/towing" className="px-6 py-3 rounded-xl bg-white border border-slate-200 hover:border-slate-900 hover:shadow-lg transition-all duration-300 font-semibold text-slate-700 hover:text-slate-900">
              Towing
            </Link>
            <Link href="/services/collision-recovery" className="px-6 py-3 rounded-xl bg-white border border-slate-200 hover:border-slate-900 hover:shadow-lg transition-all duration-300 font-semibold text-slate-700 hover:text-slate-900">
              Collision Recovery
            </Link>
            <Link href="/services/jump-start" className="px-6 py-3 rounded-xl bg-white border border-slate-200 hover:border-slate-900 hover:shadow-lg transition-all duration-300 font-semibold text-slate-700 hover:text-slate-900">
              Jump Start
            </Link>
            <Link href="/services/lockout" className="px-6 py-3 rounded-xl bg-white border border-slate-200 hover:border-slate-900 hover:shadow-lg transition-all duration-300 font-semibold text-slate-700 hover:text-slate-900">
              Lockout Service
            </Link>
            <Link href="/services/gas-delivery" className="px-6 py-3 rounded-xl bg-white border border-slate-200 hover:border-slate-900 hover:shadow-lg transition-all duration-300 font-semibold text-slate-700 hover:text-slate-900">
              Gas Delivery
            </Link>
            <Link href="/services/winch-out" className="px-6 py-3 rounded-xl bg-white border border-slate-200 hover:border-slate-900 hover:shadow-lg transition-all duration-300 font-semibold text-slate-700 hover:text-slate-900">
              Winch Out
            </Link>
          </div>
        </div>
      </section>

      <LeftPopup />
    </main>
  );
}

function PremiumFaq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-yellow-400 transition-all duration-300 hover:shadow-xl">
      <summary className="cursor-pointer select-none p-6 font-bold text-lg flex items-center justify-between" style={{ color: BRAND }}>
        <span className="flex items-center gap-3">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white text-sm font-black">
            ?
          </span>
          {q}
        </span>
        <svg
          className="w-6 h-6 text-slate-400 group-open:rotate-180 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
        {children}
      </div>
    </details>
  );
}
