import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { TowingCTAButton, TowingCTAButtonLarge } from "./TowingCTAButton";
import LeftPopup from "@/components/LeftPopup";

export const metadata: Metadata = {
  title: "24/7 Towing Service San Diego | Fast Response, Upfront Pricing | CloseBy Towing",
  description: "Professional towing service in San Diego. 20-35 min response time. Flatbed & wheel-lift. Licensed, insured, trusted by 10,000+ customers. Call (858) 999-9293 for immediate help.",
  keywords: "towing San Diego, emergency towing, flatbed towing, cheap towing near me, 24/7 tow truck, roadside assistance San Diego",
  alternates: { canonical: "/services/towing" },
  openGraph: {
    title: "Professional Towing Service San Diego | CloseBy Towing",
    description: "Fast, reliable towing with 20-35 minute response. Trusted by 10,000+ customers.",
    type: "website",
  },
};

const BANNER = "#ffba42";
const BRAND = "#1e1e4a";
const TRUST_GREEN = "#10b981";

export default function TowingPage() {
  // Enhanced Schema Markup for SEO
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CloseBy Towing",
    "image": "https://yourdomain.com/towing-truck.jpg",
    "@id": "https://yourdomain.com/services/towing",
    "url": "https://yourdomain.com/services/towing",
    "telephone": "+18589999293",
    "priceRange": "$$",
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
    "sameAs": [
      "https://facebook.com/closebytowing",
      "https://twitter.com/closebytowing"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1247"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Towing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Towing",
            "description": "24/7 emergency towing service with 20-35 minute response time"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flatbed Towing",
            "description": "Safe flatbed towing for luxury and damaged vehicles"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does towing cost in San Diego?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Towing costs in San Diego typically range from $75-$125 for local tows, depending on distance and vehicle type. We provide upfront pricing before dispatch with no hidden fees."
        }
      },
      {
        "@type": "Question",
        "name": "How fast can you arrive for emergency towing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our average response time is 20-35 minutes for emergency towing in San Diego County. We dispatch the nearest available truck and provide real-time ETA updates."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer flatbed towing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer both flatbed and wheel-lift towing options. Flatbed towing is recommended for luxury vehicles, AWD/4WD vehicles, or vehicles with transmission damage."
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
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 px-6">
        <div className="mx-auto max-w-[1600px] flex flex-wrap justify-center items-center gap-6 text-sm font-semibold">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
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
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>10,000+ Customers Served</span>
          </div>
        </div>
      </div>

      {/* HERO SECTION - Maximum Trust & Conversion */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
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
                <span className="text-red-700 font-bold text-sm">EMERGENCY TOWING - CALL NOW</span>
              </div>

              <h1 className="text-6xl lg:text-8xl font-black leading-[1.05] text-slate-900">
                Stuck on the Road?
                <span className="block mt-3 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  We're Less Than 25 Minutes Away
                </span>
              </h1>

              <p className="text-2xl text-slate-600 leading-relaxed">
                San Diego's most trusted towing service. <span className="font-bold text-slate-900">No hidden fees.</span> <span className="font-bold text-slate-900">No surprises.</span> Just fast, professional help when you need it most.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200">
                  <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-emerald-900 text-sm">Upfront Pricing</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-200">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-blue-900 text-sm">All Insurance Accepted</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-50 border border-purple-200">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-purple-900 text-sm">Damage-Free Guarantee</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-50 border border-orange-200">
                  <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold text-orange-900 text-sm">24/7 Available</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold text-blue-900 text-sm">CA DOT Licensed</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="tel:+18589999293"
                  className="group relative px-10 py-6 rounded-2xl font-black text-xl bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_20px_60px_rgba(220,38,38,0.4)] hover:shadow-[0_20px_80px_rgba(220,38,38,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  CALL: (858) 999-9293
                </a>

                <TowingCTAButton />
              </div>

              {/* Price Range & Urgency */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border-2 border-amber-200">
                  <span className="text-xl">💵</span>
                  <div>
                    <div className="font-black text-amber-900 text-sm">From $75</div>
                    <div className="text-xs text-amber-700">No hidden fees</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 border-2 border-red-200">
                  <svg className="w-5 h-5 text-red-600 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <div className="font-black text-red-900 text-sm">Avg: 23 min</div>
                    <div className="text-xs text-red-700">Most arrive sooner</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Hero Image + Floating Cards */}
            <div className="relative mt-8 lg:mt-0 lg:ml-auto lg:max-w-[90%]">
              {/* Main Image - Responsive aspect ratio */}
              <div className="relative aspect-[16/9] md:aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 border-white shadow-[0_30px_90px_rgba(0,0,0,0.15)]">
                <Image
                  src="/services/tow-truck-hero.webp"
                  alt="CloseBy Towing professional tow truck in San Diego"
                  width={1200}
                  height={1500}
                  className="w-full h-full object-cover"
                  priority
                />
                {/* Image overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Floating Stats - with animations and mobile responsive */}
              <div className="absolute left-2 md:-left-6 top-10 md:top-20 bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl border border-slate-200 max-w-[160px] md:max-w-[200px] hover:scale-105 hover:shadow-3xl transition-all duration-300 animate-[float_6s_ease-in-out_infinite]">
                <div className="text-3xl md:text-4xl font-black text-blue-600 mb-1">15+</div>
                <div className="text-xs md:text-sm text-slate-600 font-semibold">Years Experience</div>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 md:-bottom-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl max-w-[220px] md:max-w-[280px] hover:scale-105 hover:shadow-3xl transition-all duration-300 animate-[float_6s_ease-in-out_infinite_2s] z-10">
                <div className="text-2xl md:text-3xl font-black text-white mb-2">100% Satisfaction</div>
                <div className="text-xs text-white/90">Or your money back</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF - Reviews Ticker */}
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

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
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

      {/* SERVICE TYPES - Visual Grid */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-4">
              Complete Towing <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From emergency breakdowns to planned transport, we handle every situation with expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Emergency Towing",
                desc: "Broke down? We're on our way. Average 20-35 minute response time across San Diego County.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                color: "from-red-500 to-red-600",
                popular: true
              },
              {
                name: "Flatbed Towing",
                desc: "Safest option for luxury cars, AWD/4WD vehicles, and motorcycles. Zero wheel contact with the road.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                color: "from-blue-500 to-blue-600"
              },
              {
                name: "Long Distance Towing",
                desc: "Need to get across California? We handle long-distance towing with care and competitive pricing.",
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                color: "from-purple-500 to-purple-600"
              },
              {
                name: "Accident Recovery",
                desc: "Collision or accident? We work with all insurance companies and provide detailed documentation.",
                icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                color: "from-orange-500 to-orange-600"
              },
              {
                name: "Motorcycle Towing",
                desc: "Specialized equipment for safe motorcycle transport. We treat your bike like our own.",
                icon: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                color: "from-green-500 to-green-600"
              },
              {
                name: "Exotic Car Towing",
                desc: "Ferrari? Lamborghini? Tesla? We have specialized training for high-value vehicles.",
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                color: "from-yellow-500 to-yellow-600"
              }
            ].map((service, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-500`}></div>
                <div className="relative h-full p-8 bg-white rounded-3xl border-2 border-slate-200 hover:border-transparent transition-all duration-500 shadow-lg hover:shadow-2xl">
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">{service.name}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TRANSPARENCY - Build Trust */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-4">
              Transparent <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              No hidden fees. No surprise charges. What we quote is what you pay.
            </p>
          </div>

          {/* Side-by-side layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* How Your Price is Calculated */}
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-2 border-blue-400/30 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-6 flex items-center gap-3">
                <svg className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
                Your Price is Based On:
              </h3>

              <div className="space-y-3">
                {[
                  { label: "Hook-up Fee", value: "$75", icon: "🎯", desc: "Base charge to dispatch truck" },
                  { label: "Distance Towed", value: "$8/mile", icon: "📍", desc: "Actual towing distance" },
                  { label: "Travel to You", value: "$2/mile", icon: "🚗", desc: "Our drive to reach you" },
                  { label: "Time of Service", value: "Variable", icon: "🕐", desc: "Standard, after-hours, or rush" },
                  { label: "Equipment Needed", value: "Variable", icon: "🛡️", desc: "Flatbed, wrecker, dolly, or special gear" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <span className="text-xl md:text-2xl">{item.icon}</span>
                      <div>
                        <div className="font-bold text-white text-base md:text-lg">{item.label}</div>
                        <div className="text-xs md:text-sm text-white/60 mt-1">{item.desc}</div>
                      </div>
                    </div>
                    <div className="text-lg md:text-xl font-black text-yellow-400 whitespace-nowrap ml-3">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA to Price Calculator */}
            <div className="relative group flex items-center">
              <div className="w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 rounded-3xl opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-8 md:p-10 text-center h-full flex flex-col justify-center">
                  <h4 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Get Your Exact Price Now</h4>
                  <p className="text-lg md:text-xl text-slate-800 mb-8">Takes 30 seconds. No phone call required.</p>
                  <div className="flex justify-center">
                    <TowingCTAButtonLarge />
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-2 text-sm md:text-base text-slate-700">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span>Price locked before dispatch • No payment required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - Step by Step */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-4">
              Simple <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-slate-600">From breakdown to destination in 4 easy steps</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Call or Book Online",
                desc: "Describe your situation. We'll ask for your location and vehicle details.",
                time: "2 minutes"
              },
              {
                step: "2",
                title: "Get Instant Quote",
                desc: "Receive upfront pricing with no hidden fees. Approve and we dispatch immediately.",
                time: "1 minute"
              },
              {
                step: "3",
                title: "Driver Arrives",
                desc: "Track your driver in real-time. Average arrival time: 20-35 minutes.",
                time: "20-35 min"
              },
              {
                step: "4",
                title: "Safe Transport",
                desc: "Your vehicle is carefully loaded and transported to your chosen destination.",
                time: "Varies"
              }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-600 z-0"></div>
                )}
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white text-3xl font-black mb-6 shadow-xl">
                    {step.step}
                  </div>
                  <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-lg min-h-[220px]">
                    <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{step.desc}</p>
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">
                      ⏱️ {step.time}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO-OPTIMIZED FAQ */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-slate-600">Everything you need to know about our towing services</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How much does towing cost in San Diego?",
                a: "Your towing cost depends on several factors: (1) Base hook-up fee of $75 to dispatch our truck, (2) Distance towed at $8/mile for the actual tow, (3) Dead miles at $2/mile (our travel to reach you), (4) Time of service - standard rates during business hours, with additional charges for after-hours or rush situations, and (5) Equipment needed - flatbed service adds $45, and special situations like underground garages may require a wrecker with dollies, or electric vehicles that need dollies for safe transport. We provide an estimated price based on the information you give us, but sometimes we discover additional needs when we arrive (like tight garage spaces or special equipment requirements). We're completely honest and transparent - every extra service has a fixed price that we'll explain before performing the work. Most local tows within San Diego range from $100-$200 depending on these factors."
              },
              {
                q: "How fast can you arrive for emergency towing?",
                a: "Our average response time is 20-35 minutes for emergency towing throughout San Diego County. We have strategically positioned trucks across the region to ensure rapid response. When you call, we immediately dispatch the nearest available driver and provide you with real-time GPS tracking and ETA updates via text message. In true emergencies, we've been known to arrive in as little as 15 minutes."
              },
              {
                q: "Do you offer flatbed towing?",
                a: "Yes, we offer both flatbed and traditional wheel-lift towing options. Flatbed towing is strongly recommended for luxury vehicles, exotic cars, AWD/4WD vehicles, motorcycles, or any vehicle with transmission damage. Flatbed service ensures zero wheel contact with the road, eliminating any risk of additional damage during transport. Our fleet includes multiple flatbed trucks available 24/7."
              },
              {
                q: "Can you tow long-distance in California?",
                a: "Absolutely! We handle long-distance towing throughout California. Whether you need to get from San Diego to Los Angeles, San Francisco, or anywhere else in the state, we provide safe, reliable long-distance transport. We offer competitive flat-rate pricing for long hauls and can accommodate both scheduled transports and emergency situations."
              },
              {
                q: "Do you work with insurance companies?",
                a: "Yes, we work with ALL major insurance companies including AAA, Geico, State Farm, Progressive, Allstate, and many more. We can bill your insurance directly for covered services and provide all necessary documentation for your claim. Even if your insurance doesn't cover towing, our prices are competitive and transparent."
              },
              {
                q: "What types of vehicles can you tow?",
                a: "We can tow virtually any vehicle including sedans, SUVs, trucks, vans, motorcycles, exotic cars, classic cars, and even small RVs. Our diverse fleet includes different tow truck types to handle vehicles of all sizes and conditions. If you have a specialty vehicle, just let us know when you call and we'll dispatch the appropriate equipment."
              },
              {
                q: "Are you available 24/7?",
                a: "Yes, CloseBy Towing operates 24 hours a day, 7 days a week, 365 days a year including all holidays. Breakdowns don't follow a schedule, and neither do we. Call us anytime, day or night, and you'll speak with a real person who can immediately dispatch help to your location."
              },
              {
                q: "What areas of San Diego do you serve?",
                a: "We provide towing services throughout all of San Diego County including Downtown San Diego, La Jolla, Pacific Beach, Mission Valley, Chula Vista, El Cajon, Carlsbad, Escondido, and everywhere in between. If you're in San Diego County, we can reach you quickly."
              }
            ].map((faq, idx) => (
              <details key={idx} itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-white hover:border-blue-600 transition-all duration-300 hover:shadow-xl">
                <summary itemProp="name" className="cursor-pointer select-none p-6 font-bold text-xl flex items-start justify-between text-slate-900 list-none">
                  <span className="flex-1 pr-4">{faq.q}</span>
                  <svg
                    className="w-7 h-7 text-blue-600 group-open:rotate-180 transition-transform duration-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="px-6 pb-6 border-t border-slate-100 pt-4">
                  <p itemProp="text" className="text-slate-600 text-lg leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - Maximum Conversion */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-cyan-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>

        <div className="relative mx-auto max-w-[1400px] text-center space-y-12">
          <h2 className="text-6xl lg:text-8xl font-black text-white leading-tight">
            Need a Tow?
            <span className="block mt-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              We're Already Close By
            </span>
          </h2>

          <p className="text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Don't waste time calling around. Get professional help in <span className="font-black text-yellow-400">20-35 minutes</span> with upfront pricing and zero hidden fees.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a
              href="tel:+18589999293"
              className="group relative px-16 py-8 rounded-3xl font-black text-3xl bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white shadow-[0_30px_90px_rgba(220,38,38,0.5)] hover:shadow-[0_30px_120px_rgba(220,38,38,0.7)] hover:scale-110 transition-all duration-300 flex items-center gap-4"
            >
              <svg className="w-8 h-8 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              CALL: (858) 999-9293
            </a>

            <TowingCTAButtonLarge />

            <a
              href="https://wa.me/18589999293?text=I%20need%20a%20tow"
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
              { icon: "🚀", stat: "10,000+", detail: "Happy customers" },
              { icon: "⚡", stat: "20-35 min", detail: "Avg response" },
              { icon: "💯", stat: "15+ Years", detail: "Experience" }
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
      <section className="py-20 px-6 bg-[#ffba42]">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900">Other Emergency Services</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Collision Recovery", href: "/services/collision-recovery" },
              { name: "Jump Start", href: "/services/jump-start" },
              { name: "Tire Change", href: "/services/tire-change" },
              { name: "Lockout Service", href: "/services/lockout" },
              { name: "Gas Delivery", href: "/services/gas-delivery" },
              { name: "Winch Out", href: "/services/winch-out" }
            ].map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="px-8 py-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300 font-bold text-slate-900 hover:text-blue-600 hover:scale-105"
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
