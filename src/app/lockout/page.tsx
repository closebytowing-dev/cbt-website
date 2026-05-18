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
    "@id": "https://closebytowing.com/lockout",
    "url": "https://closebytowing.com/lockout",
    "telephone": "+1-858-999-9293",
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
    "areaServed": {
      "@type": "Place",
      "name": "San Diego County",
      "geo": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 32.7157,
          "longitude": -117.1611
        },
        "geoRadius": "50"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "22"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": loading ? "75" : String(onlinePrice),
      "description": loading ? "Professional lockout service. Non-destructive car unlock." : `Professional lockout service. Non-destructive car unlock. $${onlinePrice} online, $${standardPrice} standard rate.`
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
        "item": "https://www.closebytowing.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Lockout Service",
        "item": "https://www.closebytowing.com/lockout"
      }
    ]
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
          "text": "Our average arrival time is 15-25 minutes. We have trucks strategically positioned across San Diego County for rapid emergency response 24/7."
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
      },
      {
        "@type": "Question",
        "name": "Can you unlock my car if I have a smart key or push-button start?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our technicians are trained to handle modern vehicles with smart keys, push-button start, and keyless entry systems. We use specialized techniques that work with all electronic lock systems without causing any damage."
        }
      },
      {
        "@type": "Question",
        "name": "What if my keys are locked in the trunk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We handle trunk lockouts regularly. Our technicians can unlock the main cabin first and then access the trunk release, or use specialized tools to open the trunk directly depending on your vehicle model."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide lockout service for commercial vehicles and vans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We provide lockout service for all vehicle types including commercial vans, box trucks, work trucks, and fleet vehicles. Our technicians carry tools for both standard and commercial vehicle locks."
        }
      },
      {
        "@type": "Question",
        "name": "Is your lockout service available on holidays?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We operate 24 hours a day, 365 days a year, including all major holidays. Lockouts don't wait for business hours, and neither do we. Call us anytime at (858) 999-9293."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
            <span>5.0 Perfect Rating on Google</span>
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
                  We'll Be There in 15-25 Minutes
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
                <div className="text-3xl font-extrabold text-[#1e1e4a]">5.0</div>
                <div className="flex gap-0.5 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">★</span>
                  ))}
                </div>
              </div>
              <div className="border-l-2 border-[#1e1e4a]/20 pl-4">
                <div className="text-sm font-semibold text-[#1e1e4a]/70">Based on</div>
                <div className="text-xl font-bold text-[#1e1e4a]"></div>
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
                desc: "Our average arrival time is 15-25 minutes. Track your technician in real-time.",
                time: "15-25 minutes",
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

      {/* TYPES OF LOCKOUTS WE HANDLE */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 mb-4">
              Types of Lockouts <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">We Handle</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              No matter how you got locked out, our trained technicians have the right tools and experience to get you back in your vehicle quickly and safely.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Standard Car Door Lockout",
                desc: "The most common lockout scenario. Whether your keys are sitting on the seat, stuck in the ignition, or you accidentally hit the lock button while closing the door, we use professional air-wedge and long-reach tools to open your door in minutes. Works on all sedans, coupes, hatchbacks, and compact cars.",
                icon: "🔑",
                color: "from-red-500 to-orange-600"
              },
              {
                title: "Trunk Lockout",
                desc: "Keys locked in the trunk is more common than you might think. Our technicians access the trunk either through the cabin release or with specialized trunk-entry tools. We handle rear-entry vehicles, split-folding seats, and sealed trunk compartments across all vehicle makes and models.",
                icon: "🚗",
                color: "from-blue-500 to-cyan-600"
              },
              {
                title: "Smart Key & Push-Button Start",
                desc: "Modern vehicles with keyless entry and push-button start systems require specialized knowledge. Our technicians are trained on proximity key systems from Toyota, Honda, BMW, Mercedes, Tesla, and all other manufacturers. We bypass the electronic lock safely without affecting your key programming.",
                icon: "📱",
                color: "from-purple-500 to-indigo-600"
              },
              {
                title: "SUV & Truck Lockout",
                desc: "Larger vehicles like SUVs, pickup trucks, and crossovers often have different lock mechanisms than standard cars. Our technicians carry specialized long-reach tools sized for taller vehicles and are experienced with heavy-duty door frames on trucks from Ford, Chevy, Ram, Toyota, and more.",
                icon: "🛻",
                color: "from-green-500 to-emerald-600"
              },
              {
                title: "Commercial Vehicle Lockout",
                desc: "Locked out of your work van, box truck, or fleet vehicle? Downtime costs money. We prioritize commercial lockout calls and carry tools for commercial-grade lock systems found on Sprinter vans, cargo vans, and utility trucks. Get back to work fast with our rapid response service.",
                icon: "📦",
                color: "from-yellow-500 to-amber-600"
              },
              {
                title: "Child or Pet Locked in Car",
                desc: "This is our highest priority emergency. If a child or pet is locked inside a vehicle, call us immediately at (858) 999-9293 and also call 911. We dispatch our nearest technician at top speed for these life-threatening situations. There is no charge for child or pet rescue lockouts.",
                icon: "🚨",
                color: "from-red-600 to-red-800"
              }
            ].map((lockout, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${lockout.color} rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-500`}></div>
                <div className="relative h-full p-8 bg-white rounded-3xl border-2 border-slate-200 hover:border-transparent transition-all duration-500 shadow-lg hover:shadow-2xl">
                  <div className="text-5xl mb-4" aria-hidden="true">{lockout.icon}</div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">{lockout.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{lockout.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Not sure if we can handle your specific lockout situation? Call us at{" "}
              <a href="tel:+18589999293" className="font-bold text-red-600 hover:underline">(858) 999-9293</a>{" "}
              and describe your situation. Our dispatchers will let you know exactly how we can help. If your vehicle also needs{" "}
              <Link href="/towing" className="font-bold text-red-600 hover:underline">towing</Link>{" "}
              or other{" "}
              <Link href="/roadside-assistance" className="font-bold text-red-600 hover:underline">roadside assistance</Link>,
              we can bundle services to save you time and money.
            </p>
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

      {/* SAN DIEGO COVERAGE AREA */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 mb-4">
              San Diego <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Lockout Coverage</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              We provide car lockout service across all of San Diego County. Our trucks are positioned throughout the region so we can reach you in 15-25 minutes no matter where you are.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Coverage description */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-slate-900">Serving Every Corner of San Diego County</h3>
              <p className="text-slate-600 leading-relaxed">
                Whether you are locked out in the busy streets of Downtown San Diego, at a beachside parking lot in Pacific Beach or Ocean Beach, or stranded in a suburban neighborhood in Poway or Rancho Bernardo, our lockout technicians are never far away. We cover all of central San Diego including Hillcrest, North Park, Mission Valley, and Kearny Mesa. Our coverage extends south to Chula Vista, National City, and Imperial Beach near the border, and north all the way through Del Mar, Encinitas, and Solana Beach along the coast.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Inland communities are fully covered as well. From La Mesa and El Cajon in the east to Mira Mesa, Scripps Ranch, and Rancho Penasquitos in the north, our dispatchers know the fastest routes to reach you. We also serve Coronado, Point Loma, Mission Beach, La Jolla, and University City. If you are anywhere in San Diego County and need a car unlocked, call us at{" "}
                <a href="tel:+18589999293" className="font-bold text-red-600 hover:underline">(858) 999-9293</a>.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our lockout service pairs perfectly with our other{" "}
                <Link href="/roadside-assistance" className="font-bold text-red-600 hover:underline">roadside assistance</Link>{" "}
                offerings. If you need a{" "}
                <Link href="/jump-start" className="font-bold text-red-600 hover:underline">jump start</Link>,{" "}
                <Link href="/tire-change" className="font-bold text-red-600 hover:underline">tire change</Link>,{" "}
                <Link href="/gas-delivery" className="font-bold text-red-600 hover:underline">gas delivery</Link>, or{" "}
                <Link href="/towing" className="font-bold text-red-600 hover:underline">towing service</Link>{" "}
                at the same time, our technician can handle multiple services in a single visit.
              </p>
            </div>

            {/* Area grid */}
            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-6">Areas We Cover</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Downtown", "Hillcrest", "North Park", "Pacific Beach",
                  "Ocean Beach", "Point Loma", "La Jolla", "Mission Valley",
                  "Kearny Mesa", "Mira Mesa", "Scripps Ranch", "Poway",
                  "Rancho Bernardo", "Rancho Penasquitos", "Del Mar", "Encinitas",
                  "Solana Beach", "Chula Vista", "National City", "Imperial Beach",
                  "Coronado", "La Mesa", "El Cajon", "Santee",
                  "Clairemont", "University City", "Carmel Valley", "Tierrasanta",
                  "Mission Beach", "Spring Valley"
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 hover:bg-red-50 hover:border-red-200 transition-colors">
                    <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-semibold text-slate-700">{area}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-500 italic">
                Plus many more neighborhoods throughout San Diego County. Call to confirm coverage in your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-[1000px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-lg text-slate-600">Everything you need to know about our car lockout service in San Diego</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How much does a car lockout service cost in San Diego?",
                a: loading
                  ? "Our lockout service has a flat rate when ordered online with no hidden fees, and our zero damage guarantee is included. We believe in transparent pricing with no surprise charges after the job is done."
                  : `Our lockout service costs $${onlinePrice} flat rate when ordered online, or $${standardPrice} for phone orders. No hidden fees, and our zero damage guarantee is included. The price is the same whether it is daytime, nighttime, a weekend, or a holiday. We believe in transparent pricing with no surprise charges after the job is done.`
              },
              {
                q: "How fast can you unlock my car?",
                a: "Our average arrival time is 15-25 minutes. We have trucks strategically positioned across San Diego County for rapid emergency response 24/7. Once our technician arrives, the actual unlock process typically takes just 5 to 10 minutes depending on your vehicle type and lock system."
              },
              {
                q: "Will you damage my car when unlocking it?",
                a: "Absolutely not. We use professional air-wedge and long-reach tools with zero damage guaranteed. That means no scratches on your paint, no broken locks, and no damaged weatherstripping or door seals. Our technicians are specifically trained in non-destructive entry techniques. If any damage were to occur, our insurance fully covers it."
              },
              {
                q: "Do you unlock all car makes and models?",
                a: "Yes, we unlock all vehicles including Toyota, Honda, Ford, Chevrolet, Nissan, Hyundai, Kia, BMW, Mercedes-Benz, Audi, Tesla, and every other make and model on the road today. Our technicians carry a full range of tools and are trained on both domestic and import vehicles, including older classic cars and the latest models with advanced electronic locks."
              },
              {
                q: "Can you unlock my car if I have a smart key or push-button start?",
                a: "Yes. Our technicians are trained to handle modern vehicles with smart keys, push-button start, and keyless entry systems. We use specialized techniques that work with all electronic lock systems without causing any damage or affecting your key fob programming. This includes vehicles from Tesla, BMW, Mercedes, Lexus, and all other brands with proximity key technology."
              },
              {
                q: "What if my keys are locked in the trunk?",
                a: "We handle trunk lockouts regularly. Our technicians can unlock the main cabin first and then access the trunk release, or use specialized tools to open the trunk directly depending on your vehicle model. Either way, we get your keys back without damaging your vehicle."
              },
              {
                q: "Do you provide lockout service for commercial vehicles and vans?",
                a: "Absolutely. We provide lockout service for all vehicle types including commercial vans, box trucks, work trucks, and fleet vehicles. Our technicians carry tools for commercial-grade lock systems found on Sprinter vans, Ford Transits, cargo vans, and utility trucks. We know that downtime costs your business money, so we prioritize commercial lockout calls."
              },
              {
                q: "Is your lockout service available on holidays and late at night?",
                a: "Yes. We operate 24 hours a day, 365 days a year, including all major holidays such as Christmas, Thanksgiving, New Year's, and the Fourth of July. Lockouts do not wait for business hours, and neither do we. The price stays the same regardless of when you call. Reach us anytime at (858) 999-9293."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border-2 border-slate-200 p-6 sm:p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
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
          <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-tight">
            Locked Out?
            <span className="block mt-3 sm:mt-4 bg-gradient-to-r from-yellow-400 via-orange-300 to-red-500 bg-clip-text text-transparent">
              Help Is 15-25 Minutes Away
            </span>
          </h2>

          <p className="text-xl sm:text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Don't panic. We'll unlock your car safely in <span className="font-black text-yellow-400">15-25 minutes</span> with our <span className="font-black text-yellow-400">zero damage guarantee.</span>
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
              { icon: "⭐", stat: "5.0 Google Rating", detail: "" },
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

      {/* CROSS-SERVICE LINKS */}
      <section className="py-20 px-6 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Complete <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Roadside Assistance</span> Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Locked out and need more help? CloseBy Towing offers a full range of emergency roadside services across San Diego County. Our technician can handle multiple services in one visit.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Towing Service",
                href: "/towing",
                desc: "Flatbed and wheel-lift towing for all vehicle types. 24/7 emergency towing with a 20-minute average response time across San Diego.",
                icon: "🚛"
              },
              {
                name: "Roadside Assistance",
                href: "/roadside-assistance",
                desc: "Comprehensive roadside help including lockouts, jump starts, tire changes, and fuel delivery. One call covers all your needs.",
                icon: "🛣️"
              },
              {
                name: "Jump Start Service",
                href: "/jump-start",
                desc: "Dead battery? Our technicians carry professional-grade jump packs that work on all vehicles, including trucks and SUVs with large engines.",
                icon: "🔋"
              },
              {
                name: "Gas Delivery",
                href: "/gas-delivery",
                desc: "Ran out of gas on the freeway or in a parking lot? We deliver enough fuel to get you to the nearest gas station safely.",
                icon: "⛽"
              },
              {
                name: "Tire Change Service",
                href: "/tire-change",
                desc: "Flat tire and no spare experience? Our technicians swap your flat for your spare quickly and safely, getting you back on the road.",
                icon: "🔧"
              },
              {
                name: "Winch Out",
                href: "/winch-out",
                desc: "Stuck in mud, sand, a ditch, or a tight parking spot? Our winch-out service pulls your vehicle to safety without causing damage.",
                icon: "⛓️"
              }
            ].map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group block p-6 rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-red-500 hover:shadow-xl transition-all duration-300 hover:bg-white"
              >
                <div className="text-4xl mb-4" aria-hidden="true">{service.icon}</div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-red-600 transition-colors mb-2">{service.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-red-600 font-bold text-sm group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services (compact link bar) */}
      <section className="py-12 px-6 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-slate-900">Quick Links to All Services</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Towing", href: "/towing" },
              { name: "Roadside Assistance", href: "/roadside-assistance" },
              { name: "Jump Start", href: "/jump-start" },
              { name: "Tire Change", href: "/tire-change" },
              { name: "Gas Delivery", href: "/gas-delivery" },
              { name: "Winch Out", href: "/winch-out" },
              { name: "Collision Recovery", href: "/collision-recovery" }
            ].map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="px-6 py-3 rounded-xl bg-white border-2 border-slate-200 hover:border-red-600 hover:shadow-lg transition-all duration-300 font-bold text-slate-900 hover:text-red-600 hover:scale-105 text-sm focus:outline-none focus:ring-4 focus:ring-red-300 focus:ring-offset-2"
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
