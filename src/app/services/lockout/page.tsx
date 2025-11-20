"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import LeftPopup from "@/components/LeftPopup";
import { LockoutCTAButton, LockoutCTAButtonLarge } from "./LockoutCTAButton";
import { useServicePricing, PriceDisplay } from "@/hooks/useServicePricing";
import { useOnlineDiscount } from "@/hooks/useOnlineDiscount";

const BANNER = "#ffba42";
const BRAND = "#1e1e4a";

export default function LockoutPage() {
  // Fetch dynamic pricing from Firebase
  const { standardPrice, onlinePrice, loading, error } = useServicePricing("Lockout Service");
  const { discountText } = useOnlineDiscount();

  // Update page metadata dynamically
  useEffect(() => {
    document.title = "Car Lockout Service San Diego | Fast Unlock in <25 Min | CloseBy Towing";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }

    if (!loading && onlinePrice > 0) {
      metaDesc.setAttribute('content', `Locked out? Professional car unlock service in San Diego. $${onlinePrice} online rate, <25-min response, no damage guaranteed. Available 24/7. Call (858) 999-9293 for immediate help.`);
    } else {
      metaDesc.setAttribute('content', "Locked out? Professional car unlock service in San Diego. Fast response, no damage guaranteed. Available 24/7. Call (858) 999-9293 for immediate help.");
    }
  }, [loading, onlinePrice]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CloseBy Towing - Lockout Service",
    "image": "https://closebytowing.com/services/lockout-hero.webp",
    "@id": "https://closebytowing.com/services/lockout",
    "url": "https://closebytowing.com/services/lockout",
    "telephone": "+18589999293",
    "priceRange": loading ? "$75-$88" : `$${onlinePrice}-$${standardPrice}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Diego",
      "addressRegion": "CA",
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
      "ratingValue": "4.9",
      "reviewCount": "1247"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": loading ? "75" : String(onlinePrice),
      "description": loading ? "Professional lockout service. Non-destructive car unlock." : `Professional lockout service. Non-destructive car unlock. $${onlinePrice} online, $${standardPrice} standard rate.`
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a car lockout service cost in San Diego?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": loading ? "Our lockout service has a flat rate when ordered online with no hidden fees, and our zero damage guarantee is included." : `Our lockout service costs $${onlinePrice} flat rate when ordered online, or $${standardPrice} for phone orders. No hidden fees, and our zero damage guarantee is included.`
        }
      },
      {
        "@type": "Question",
        "name": "How fast can you unlock my car?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our average arrival time is less than 25 minutes. We have trucks strategically positioned across San Diego County for rapid emergency response 24/7."
        }
      },
      {
        "@type": "Question",
        "name": "Will you damage my car when unlocking it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely not. We use professional air-wedge and long-reach tools with zero damage guaranteed - no scratches, no broken locks, no damaged weatherstripping."
        }
      },
      {
        "@type": "Question",
        "name": "Do you unlock all car makes and models?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we unlock all vehicles including Toyota, Honda, Ford, Tesla, and all other makes and models. Our technicians are trained on all vehicle types including keyless entry systems."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* TRUST BAR - Above the Fold */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6">
        <div className="mx-auto max-w-[1600px] flex flex-wrap justify-center items-center gap-6 text-sm font-semibold">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            <span>Avg {"<"}25 Min Response</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>No Damage Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>4.9/5 Stars (1,247 Reviews)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔓</span>
            <span>Available 24/7</span>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-red-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}></div>
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Compelling Copy */}
            <div className="space-y-8">
              {/* Emergency Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="text-red-800 font-bold text-sm"><span aria-hidden="true">🔓</span> LOCKED OUT? WE'RE ON THE WAY</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black leading-[1.05] text-slate-900">
                Locked Out?
                <span className="block mt-2 sm:mt-3 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  We'll Be There in Less Than 25 Minutes
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed">
                Professional car unlock service serving all of San Diego County.
                <span className="font-bold text-slate-900"> No damage. 100% guaranteed.</span>
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 border-2 border-red-200">
                  <svg className="w-5 h-5 text-red-600 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <div className="font-black text-red-900 text-sm">{"<"}25 Min Average</div>
                    <div className="text-xs text-red-700">Emergency response</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200">
                  <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-emerald-900 text-sm">No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-200">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-blue-900 text-sm">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-50 border border-purple-200">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-purple-900 text-sm">All Car Makes/Models</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-50 border border-orange-200">
                  <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold text-orange-900 text-sm">24/7 Emergency Service</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="tel:+18589999293"
                  className="group relative px-10 py-6 rounded-2xl font-black text-xl bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_20px_60px_rgba(220,38,38,0.4)] hover:shadow-[0_20px_80px_rgba(220,38,38,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-offset-2"
                >
                  <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  CALL: (858) 999-9293
                </a>

                <LockoutCTAButton />
              </div>
            </div>

            {/* Right: Hero Image + Floating Cards */}
            <div className="relative mt-8 lg:mt-0">
              {/* Main Image */}
              <div className="relative h-[550px] lg:h-[750px] rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 border-white shadow-[0_50px_150px_rgba(0,0,0,0.5),0_20px_60px_rgba(220,38,38,0.4)]">
                <Image
                  src="/services/lockout-hero.webp"
                  alt="Professional car lockout service technician using specialized tools to unlock vehicle door without damage in San Diego"
                  width={1200}
                  height={1600}
                  priority
                  quality={85}
                  className="absolute inset-0 w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-4 md:-top-6 bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl border border-slate-200 max-w-[160px] md:max-w-[200px] hover:scale-105 hover:shadow-3xl transition-all duration-300 animate-[float_6s_ease-in-out_infinite] z-10">
                <div className="text-3xl md:text-4xl font-black text-red-600 mb-1">211</div>
                <div className="text-xs md:text-sm text-slate-600 font-semibold">Cars Unlocked</div>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 md:-bottom-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl max-w-[180px] md:max-w-[220px] hover:scale-105 hover:shadow-3xl transition-all duration-300 animate-[float_6s_ease-in-out_infinite_2s] z-10">
                <div className="text-2xl md:text-3xl font-black text-white mb-2">0 Damage</div>
                <div className="text-xs text-white/90">100% Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF - Reviews */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
            <h2 className="text-3xl font-black">Trusted by San Diego Drivers</h2>

            {/* Aggregate rating display */}
            <div className="flex items-center gap-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-[#1e1e4a]">4.9</div>
                <div className="flex gap-0.5 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">★</span>
                  ))}
                </div>
              </div>
              <div className="border-l-2 border-[#1e1e4a]/20 pl-4">
                <div className="text-sm font-semibold text-[#1e1e4a]/70">Based on</div>
                <div className="text-xl font-bold text-[#1e1e4a]">1,247+ Reviews</div>
                <div className="flex gap-2 mt-1">
                  <span className="text-xs font-semibold text-[#1e1e4a]/60">Google</span>
                  <span className="text-xs font-semibold text-[#1e1e4a]/60">Yelp</span>
                  <span className="text-xs font-semibold text-[#1e1e4a]/60">Facebook</span>
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
              }
            ].map((review, idx) => (
              <div key={idx} className="rounded-2xl p-6 border border-white/10 hover:shadow-2xl hover:scale-105 transition-all duration-300" style={{ backgroundColor: '#ffba42' }}>
                <div className="flex items-center gap-2 mb-3">
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
                <p className="text-[#1e1e4a] leading-relaxed mb-4">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-[#1e1e4a]">{review.name}</div>
                      <div className="text-xs text-[#1e1e4a]/70">{review.date}</div>
                    </div>
                  </div>
                  {review.verified && (
                    <div className="flex items-center gap-1 text-xs text-emerald-800 font-semibold">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Verified</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 mb-4">
              How We Unlock <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Your Car</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">Professional unlock service in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Call or Book Online",
                desc: "Tell us your location and vehicle details. We'll dispatch the nearest technician immediately.",
                time: "1 minute",
                icon: "📞"
              },
              {
                step: "2",
                title: "We Arrive Fast",
                desc: "Our average arrival time is less than 25 minutes. Track your technician in real-time.",
                time: "less than 25 minutes",
                icon: "🚗"
              },
              {
                step: "3",
                title: "Professional Unlock",
                desc: "Using specialized tools, we unlock your car without any damage to locks or paint.",
                time: "5-10 minutes",
                icon: "🔓"
              },
              {
                step: "4",
                title: "You're Back In!",
                desc: "Pay the flat $75 fee and you're ready to go. No hidden charges, ever.",
                time: "Complete",
                icon: "✅"
              }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-1 bg-gradient-to-r from-red-600 to-orange-600 z-0"></div>
                )}
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-red-600 to-orange-600 text-white text-2xl sm:text-3xl font-black mb-4 sm:mb-6 shadow-xl">
                    {step.step}
                  </div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4" aria-hidden="true">{step.icon}</div>
                  <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-lg min-h-[200px]">
                    <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{step.desc}</p>
                    <div className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-700 text-sm font-semibold">
                      ⏱️ {step.time}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">CloseBy Lockout</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">The most trusted lockout service in San Diego County</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Zero Damage Guaranteed",
                desc: "We use professional air-wedge and long-reach tools. No scratches, no broken locks, no damage to your weatherstripping. 100% guaranteed.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                color: "from-green-500 to-emerald-600"
              },
              {
                title: "Super Fast Response",
                desc: "Average 20-minute arrival time. We have trucks strategically positioned across San Diego County for rapid response.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                color: "from-red-500 to-orange-600"
              },
              {
                title: "All Makes & Models",
                desc: "We unlock cars, trucks, SUVs, and vans from all manufacturers. Toyota, Honda, Ford, Tesla - we've got you covered.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                color: "from-blue-500 to-cyan-600"
              },
              {
                title: "Transparent Pricing",
                desc: "$75 flat rate for most vehicles. No surprises, no hidden fees. Price quoted upfront before we start work.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                color: "from-yellow-500 to-amber-600"
              },
              {
                title: "24/7 Emergency Service",
                desc: "Locked out at 3 AM? We're available 24 hours a day, 7 days a week, including all holidays. Always here when you need us.",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                color: "from-purple-500 to-indigo-600"
              },
              {
                title: "Licensed & Insured",
                desc: "Fully licensed, insured, and background-checked technicians. Your safety and security is our top priority.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                color: "from-slate-500 to-slate-700"
              }
            ].map((feature, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-500`}></div>
                <div className="relative h-full p-8 bg-white rounded-3xl border-2 border-slate-200 hover:border-transparent transition-all duration-500 shadow-lg hover:shadow-2xl">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-slate-900 to-orange-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-600/20 via-transparent to-transparent"></div>

        <div className="relative mx-auto max-w-[1400px] text-center space-y-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-500/20 border border-red-400/30 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-red-400 font-bold text-sm uppercase tracking-wider">Available Right Now</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-tight">
            Locked Out?
            <span className="block mt-3 sm:mt-4 bg-gradient-to-r from-yellow-400 via-orange-300 to-red-500 bg-clip-text text-transparent">
              Help Is Less Than 25 Minutes Away
            </span>
          </h2>

          <p className="text-xl sm:text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Don't panic. We'll unlock your car safely in <span className="font-black text-yellow-400">less than 25 minutes</span> with our <span className="font-black text-yellow-400">zero damage guarantee.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a
              href="tel:+18589999293"
              className="group relative px-16 py-8 rounded-3xl font-black text-3xl bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white shadow-[0_30px_90px_rgba(220,38,38,0.5)] hover:shadow-[0_30px_120px_rgba(220,38,38,0.7)] hover:scale-110 transition-all duration-300 flex items-center gap-4 focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-offset-4 focus:ring-offset-slate-900"
            >
              <svg className="w-8 h-8 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              CALL: (858) 999-9293
            </a>

            <LockoutCTAButtonLarge />

            <a
              href="https://wa.me/18589999293?text=I'm%20locked%20out%20of%20my%20car"
              className="inline-flex items-center gap-2 px-10 py-6 bg-[#25D366] hover:brightness-110 rounded-3xl text-white font-bold text-xl transition-all hover:scale-105"
              style={{
                boxShadow: '0 0 15px rgba(37, 211, 102, 0.3)',
              }}
            >
              <span className="text-2xl">📱</span>
              WhatsApp
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-20 max-w-5xl mx-auto">
            {[
              { icon: "⭐", stat: "4.9/5 Rating", detail: "1,247 reviews" },
              { icon: "🚀", stat: "15,000+", detail: "Cars unlocked" },
              { icon: "⚡", stat: "<25 min", detail: "Avg response" },
              { icon: "💯", stat: "Transparent", detail: "Pricing" }
            ].map((badge, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-center">
                <div className="text-5xl mb-3">{badge.icon}</div>
                <div className="text-3xl font-black text-white mb-1">{badge.stat}</div>
                <div className="text-sm text-white/70">{badge.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900">Other Emergency Services</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Towing", href: "/services/towing" },
              { name: "Jump Start", href: "/services/jump-start" },
              { name: "Tire Change", href: "/services/tire-change" },
              { name: "Gas Delivery", href: "/services/gas-delivery" },
              { name: "Winch Out", href: "/services/winch-out" },
              { name: "Collision Recovery", href: "/services/collision-recovery" }
            ].map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="px-8 py-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-red-600 hover:shadow-xl transition-all duration-300 font-bold text-slate-900 hover:text-red-600 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-offset-2"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Left-side popup */}
      <LeftPopup />
    </main>
  );
}
