"use client";

import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import LeftPopup from "@/components/LeftPopup";

export default function BatteryReplacementPage() {
  /* ── Schema.org Structured Data ── */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mobile Car Battery Replacement",
    description:
      "Professional mobile car battery replacement service in San Diego. On-site battery testing, diagnosis, and replacement for all makes and models including hybrid and electric vehicles.",
    provider: {
      "@type": "LocalBusiness",
      name: "CloseBy Towing",
      telephone: CONTACT.phoneRaw,
      url: "https://www.closebytowing.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Diego",
        addressRegion: "CA",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 32.7157,
        longitude: -117.1611,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "22",
      },
    },
    areaServed: {
      "@type": "Place",
      name: "San Diego County, CA",
    },
    serviceType: "Battery Replacement",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "95",
      description:
        "Mobile car battery replacement starting at $95. Includes on-site battery testing and diagnosis.",
      availability: "https://schema.org/InStock",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a mobile battery replacement cost in San Diego?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mobile battery replacement in San Diego starts at $95, which includes on-site diagnostics and testing. The total cost depends on the battery type your vehicle requires. We provide an upfront quote before any work begins with no hidden fees.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a mobile battery replacement take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The battery replacement itself typically takes 15-30 minutes once our technician arrives. Combined with our 15-25 minute average response time, you can expect to be back on the road within about an hour of your call.",
        },
      },
      {
        "@type": "Question",
        name: "Can you replace the battery in my hybrid or electric vehicle?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We replace 12V auxiliary batteries in hybrid and electric vehicles from all manufacturers including Toyota, Honda, Tesla, and more. Our technicians are trained on the specific safety protocols required for high-voltage vehicle systems.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if I need a battery replacement or just a jump start?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our technicians perform a comprehensive battery load test on-site. If your battery holds adequate charge and voltage under load, a jump start may be all you need. If the battery fails the test, we recommend replacement to prevent being stranded again.",
        },
      },
      {
        "@type": "Question",
        name: "What brands of batteries do you install?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We carry high-quality, name-brand batteries from trusted manufacturers that meet or exceed OEM specifications. Every battery we install comes with a manufacturer warranty for your peace of mind.",
        },
      },
      {
        "@type": "Question",
        name: "Do you dispose of my old battery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we handle the removal and environmentally responsible disposal or recycling of your old battery at no extra charge. Car batteries contain lead and acid, so proper disposal is important for the environment.",
        },
      },
      {
        "@type": "Question",
        name: "Can you replace batteries for commercial vehicles and fleets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We service commercial vehicles, work trucks, vans, and fleet vehicles of all sizes. We offer fleet accounts with priority dispatch and volume pricing for businesses that need ongoing battery service.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.closebytowing.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Battery Replacement",
        item: "https://www.closebytowing.com/battery-replacement",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ═══════════════════════════════════════════════════════════════
          TRUST BAR
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-gradient-to-r from-sky-600 to-indigo-700 text-white py-3 px-6">
        <div className="mx-auto max-w-[1600px] flex flex-wrap justify-center items-center gap-6 text-sm font-semibold">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span>15-25 Min Response</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>5.0 Perfect Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Available 24/7</span>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-15">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.08) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Ambient glow effects */}
        <div className="hidden lg:block absolute top-20 left-10 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="hidden lg:block absolute bottom-16 right-16 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="hidden lg:block absolute top-1/2 left-1/3 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="relative z-10 mx-auto max-w-[1600px] w-full px-6 lg:px-12 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left: Content */}
            <div className="space-y-8 lg:space-y-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-sky-600/20 to-indigo-600/20 backdrop-blur-xl border border-sky-400/30">
                <svg
                  className="w-5 h-5 text-sky-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-sm font-bold text-white">
                  Mobile Battery Service - We Come To You
                </span>
                <div className="h-2 w-2 rounded-full bg-green-400 animate-ping"></div>
              </div>

              {/* Main Headline */}
              <div className="space-y-5">
                <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] tracking-tight">
                  Car Battery
                  <span className="block bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-500 bg-clip-text text-transparent">
                    Replacement
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/70 font-light leading-relaxed max-w-xl">
                  On-site battery testing, diagnosis, and replacement for every
                  vehicle. Our certified mobile technicians arrive in{" "}
                  <span className="font-bold text-sky-400">15-25 minutes</span>{" "}
                  with the right battery for your car.
                </p>
              </div>

              {/* Arrival Time + Phone */}
              <div className="flex flex-col sm:flex-row items-stretch gap-4">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-sky-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative h-full px-6 py-5 bg-slate-900 rounded-2xl border border-sky-500/30 flex items-center gap-4">
                    <div>
                      <div className="text-xs text-sky-400 font-semibold uppercase tracking-wider">
                        Response Time
                      </div>
                      <div className="text-4xl font-black text-white leading-none">
                        &lt;25
                      </div>
                      <div className="text-xs text-white/60">Minutes</div>
                    </div>
                  </div>
                </div>

                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="group px-8 py-5 rounded-2xl font-bold text-2xl sm:text-3xl border-2 border-white/30 bg-white/5 backdrop-blur-xl text-white hover:bg-white hover:text-slate-900 transition-all duration-500 hover:scale-105 flex items-center justify-center gap-3 whitespace-nowrap"
                >
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {CONTACT.phone}
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2 text-white/80">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-semibold">
                    Licensed & Insured
                  </span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <svg
                    className="w-5 h-5 text-sky-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-semibold">24/7 Available</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <svg
                    className="w-5 h-5 text-indigo-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-semibold">No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <svg
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-semibold">
                    Warranty Included
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Visual Feature Panel */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-sky-500/20 rounded-[3rem] blur-3xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-[2.5rem] border border-sky-400/20 p-8 lg:p-10 space-y-6">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-black text-white">
                    Full-Service Battery Replacement
                  </h2>
                </div>
                <ul className="space-y-4">
                  {[
                    "Free on-site battery diagnostics and load testing",
                    "Premium brand batteries for all makes and models",
                    "Old battery removal and eco-friendly recycling",
                    "Electrical system and alternator verification",
                    "Terminal cleaning and corrosion prevention",
                    "Manufacturer warranty on every battery installed",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 text-center">
                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-[0_20px_60px_rgba(56,189,248,0.3)] hover:shadow-[0_20px_80px_rgba(56,189,248,0.5)] hover:scale-105 transition-all duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Get Battery Help Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BATTERY TESTING & DIAGNOSTICS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-400/30">
                <span className="text-sky-400 text-sm font-bold uppercase tracking-wider">
                  Battery Testing
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                Expert Battery{" "}
                <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                  Diagnostics
                </span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Not every dead battery needs a replacement. Our certified
                technicians use professional-grade diagnostic equipment to
                perform comprehensive load tests, measuring cold cranking amps
                (CCA), voltage output, and internal resistance. We test your
                battery under real-world conditions to determine whether it
                needs replacing or if a simpler fix will get you back on the
                road.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                We also inspect your alternator output, starter draw, and
                parasitic drain to make sure nothing else is causing your
                battery to fail. This thorough approach saves you money by
                preventing unnecessary replacements and catches problems that
                would otherwise leave you stranded again in a few days.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "CCA and voltage load testing under real conditions",
                  "Alternator output and charging system check",
                  "Parasitic draw detection for phantom battery drains",
                  "Terminal and cable connection inspection",
                  "Honest, transparent diagnosis with no upselling",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <svg
                      className="w-5 h-5 flex-shrink-0 text-sky-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-sky-500/20 to-indigo-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-3xl border border-sky-400/20 p-8 space-y-6">
                <h3 className="text-2xl font-bold text-white text-center">
                  What Our Testing Covers
                </h3>
                {[
                  {
                    label: "Battery Voltage",
                    desc: "Resting and under-load voltage measurement",
                    icon: "M13 10V3L4 14h7v7l9-11h-7z",
                  },
                  {
                    label: "Cold Cranking Amps",
                    desc: "CCA test to measure starting power",
                    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
                  },
                  {
                    label: "Charging System",
                    desc: "Alternator output verification at idle and RPM",
                    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                  },
                  {
                    label: "Electrical Connections",
                    desc: "Terminal corrosion, cable integrity, and ground straps",
                    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-sky-400/30 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={item.icon}
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.label}</h4>
                      <p className="text-sm text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BATTERY REPLACEMENT SERVICE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 px-6 bg-slate-900">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-4">
              Professional{" "}
              <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                Battery Replacement
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              When your battery fails our load test, we replace it on the spot
              with a premium battery matched precisely to your vehicle. No tow
              truck needed, no trip to the auto parts store, no waiting around.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Passenger Vehicles",
                desc: "Cars, sedans, coupes, hatchbacks, and crossovers from all manufacturers. We carry a full range of standard and AGM batteries for every make and model on the road today, from compact Hondas to full-size Chevys.",
                icon: "M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm9.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-10-8h10l1 5H6.5l1-5z",
                color: "from-sky-500 to-sky-600",
              },
              {
                title: "SUVs & Trucks",
                desc: "Larger vehicles need more cranking power, and we carry the heavy-duty batteries to match. From mid-size SUVs like the Toyota 4Runner to full-size trucks like the Ford F-250, we have the right battery in stock.",
                icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
                color: "from-indigo-500 to-indigo-600",
              },
              {
                title: "European & Luxury",
                desc: "BMW, Mercedes-Benz, Audi, Porsche, and other European vehicles often require specific AGM or EFB batteries. Our technicians know the exact battery specifications and reset procedures these vehicles demand.",
                icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
                color: "from-violet-500 to-violet-600",
              },
              {
                title: "Start-Stop Vehicles",
                desc: "Modern vehicles with auto start-stop technology require specialized AGM or EFB batteries designed to handle frequent cycling. Installing a standard battery will cause premature failure. We use the correct battery type every time.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                color: "from-sky-600 to-indigo-600",
              },
              {
                title: "Diesel Vehicles",
                desc: "Diesel engines have significantly higher compression ratios and require batteries with greater cranking amps. We carry heavy-duty batteries and dual-battery solutions for diesel trucks, SUVs, and commercial vehicles.",
                icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
                color: "from-amber-500 to-orange-600",
              },
              {
                title: "Motorcycles & Powersports",
                desc: "We also service motorcycle, ATV, UTV, and jet ski batteries. These smaller batteries require careful handling and specific terminal types. Our technicians carry a range of powersports batteries for on-site replacement.",
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                color: "from-emerald-500 to-teal-600",
              },
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-500`}
                ></div>
                <div className="relative h-full p-8 bg-slate-800/60 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-sky-400/30 transition-all duration-500">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          HYBRID & EV BATTERIES
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 px-6 bg-gradient-to-br from-emerald-950/30 via-slate-950 to-slate-950 border-y border-emerald-500/20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/30">
                <span className="text-emerald-400 text-sm font-bold uppercase tracking-wider">
                  Hybrid & EV Ready
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                Hybrid &{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Electric Vehicle
                </span>{" "}
                Battery Service
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Even though hybrid and electric vehicles rely on large traction
                batteries for propulsion, they still use a standard 12V
                auxiliary battery to power the onboard computer systems, lights,
                locks, and accessories. When this 12V battery dies, your hybrid
                or EV is completely immobilized, unable to even open the doors
                electronically or shift out of park.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Our technicians are specifically trained to work with hybrid
                and EV electrical systems. We understand the safety protocols,
                the specific battery types these vehicles require, and the
                recalibration procedures needed after a battery swap. Whether
                you drive a Toyota Prius, a Tesla Model 3, a Chevy Bolt, or a
                Ford Mustang Mach-E, we have the right 12V battery and the
                expertise to install it safely.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Safe 12V auxiliary battery replacement for all hybrids and EVs",
                  "Trained technicians who understand high-voltage safety protocols",
                  "Correct AGM batteries matched to EV system requirements",
                  "Post-installation system check and computer recalibration",
                  "No risk to high-voltage traction battery or drive components",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-3xl blur-2xl"></div>
              <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-3xl border border-emerald-400/20 p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Vehicles We Service
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Toyota Prius / RAV4 Hybrid",
                    "Tesla Model 3 / Y / S / X",
                    "Honda CR-V Hybrid / Accord",
                    "Chevrolet Bolt / Volt",
                    "Ford Mustang Mach-E / F-150 Lightning",
                    "Hyundai Ioniq / Kona Electric",
                    "Kia EV6 / Niro",
                    "BMW i4 / iX / 330e",
                    "Mercedes EQS / EQB",
                    "Volkswagen ID.4",
                    "Rivian R1T / R1S",
                    "And many more...",
                  ].map((vehicle, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 py-2 text-sm text-white/70"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></div>
                      {vehicle}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          COMMERCIAL VEHICLES
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/15 to-sky-500/15 rounded-3xl blur-2xl"></div>
              <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-3xl border border-indigo-400/20 p-8 lg:p-10 space-y-6">
                <h3 className="text-2xl font-bold text-white text-center">
                  Fleet & Commercial Benefits
                </h3>
                {[
                  {
                    title: "Priority Dispatch",
                    desc: "Fleet accounts get priority routing for faster response times",
                  },
                  {
                    title: "Volume Pricing",
                    desc: "Competitive rates for businesses with ongoing battery needs",
                  },
                  {
                    title: "Detailed Invoicing",
                    desc: "Itemized invoices with VIN, battery specs, and warranty info",
                  },
                  {
                    title: "Flexible Payment",
                    desc: "Net-30 terms available for qualified commercial accounts",
                  },
                  {
                    title: "Maintenance Records",
                    desc: "We track battery history across your entire fleet",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-white/5"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center text-white font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-sm text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/30">
                <span className="text-indigo-400 text-sm font-bold uppercase tracking-wider">
                  Commercial & Fleet
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                Commercial Vehicle{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
                  Battery Service
                </span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                A dead battery in your work vehicle or fleet means lost revenue
                and missed appointments. Our commercial battery replacement
                service is designed to minimize downtime and get your vehicles
                back in service fast. We stock heavy-duty commercial batteries
                for delivery vans, box trucks, service vehicles, and work
                trucks used throughout San Diego County.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                We work with plumbing companies, HVAC contractors, delivery
                services, property management firms, and rideshare drivers who
                cannot afford to have vehicles sitting idle. Our fleet accounts
                come with priority dispatch, volume pricing, and detailed
                invoicing to make battery maintenance hassle-free for your
                entire operation.
              </p>
              <div className="pt-4">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-indigo-500 to-sky-500 text-white hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Ask About Fleet Accounts: {CONTACT.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          HOW IT WORKS - 3 Steps
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 px-6 bg-slate-900">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-4">
              How It{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-white/60">
              From dead battery to full power in three simple steps
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Call Us - We Dispatch Immediately",
                desc: "Call our 24/7 dispatch line or text us your location. Tell us your vehicle year, make, and model so we can bring the right battery. We dispatch the closest technician to your location immediately and send you a real-time ETA via text message so you know exactly when help is arriving.",
                align: "left",
              },
              {
                step: "02",
                title: "On-Site Testing & Diagnosis",
                desc: "Our certified technician arrives in 15-25 minutes with professional diagnostic equipment. We perform a comprehensive battery load test and inspect your entire charging system. If your battery passes the test, we will let you know honestly and suggest alternative solutions rather than selling you something you do not need.",
                align: "right",
              },
              {
                step: "03",
                title: "Replace & Verify",
                desc: "If replacement is needed, we install a premium battery matched to your vehicle's exact specifications right on the spot. We clean the terminals, apply corrosion inhibitor, verify the charging system is working correctly, and properly dispose of your old battery. You drive away with a new battery and full warranty coverage.",
                align: "left",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  item.align === "right" ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Step Number Visual */}
                <div className="lg:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/30 to-indigo-500/30 rounded-full blur-2xl"></div>
                    <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center shadow-[0_0_60px_rgba(56,189,248,0.3)]">
                      <span className="text-5xl font-black text-white">
                        {item.step}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/3">
                  <div className="relative space-y-4">
                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-sky-600/20 to-indigo-600/20 border border-sky-400/30">
                      <span className="text-sky-400 font-bold text-sm">
                        STEP {item.step}
                      </span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black text-white">
                      {item.title}
                    </h3>
                    <p className="text-lg text-white/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY CHOOSE CLOSEBY
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                CloseBy
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              San Diego trusts CloseBy Towing for mobile battery replacement
              because we combine speed, expertise, and transparent pricing every
              single time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Rapid 15-25 Minute Response",
                desc: "Our strategically positioned mobile units cover all of San Diego County. From La Jolla to Chula Vista, from downtown to East County, we arrive fast because we are always nearby. Average response time is 15-25 minutes, day or night, weekday or weekend.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                color: "from-sky-500 to-sky-600",
              },
              {
                title: "Certified Mobile Technicians",
                desc: "Every CloseBy technician is trained in automotive electrical systems and carries professional-grade diagnostic tools. We do not guess - we test, diagnose, and verify every step of the way so you get the right solution the first time.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                color: "from-indigo-500 to-indigo-600",
              },
              {
                title: "Premium Batteries with Warranty",
                desc: "We only install high-quality, name-brand batteries that meet or exceed your vehicle manufacturer's specifications. Every battery comes with a full manufacturer warranty so you have peace of mind and protection against defects.",
                icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
                color: "from-amber-500 to-orange-500",
              },
              {
                title: "Transparent, Upfront Pricing",
                desc: "We quote the total price before we begin any work, including the battery, installation, and old battery disposal. No surprise charges, no hidden fees, no bait-and-switch tactics. The price we quote is the price you pay.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                color: "from-emerald-500 to-teal-500",
              },
              {
                title: "24/7 Emergency Availability",
                desc: "Batteries fail at the worst times: early mornings, late nights, holidays, and weekends. That is exactly why we operate around the clock, 365 days a year. No matter when your battery dies, we are available to replace it.",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                color: "from-violet-500 to-purple-600",
              },
              {
                title: "Eco-Friendly Battery Disposal",
                desc: "Old car batteries are classified as hazardous waste containing lead and sulfuric acid. We handle the removal and take your old battery to a certified recycling facility at no additional cost, keeping toxic materials out of landfills.",
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                color: "from-green-500 to-emerald-600",
              },
            ].map((feature, idx) => (
              <div key={idx} className="group relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-500`}
                ></div>
                <div className="relative h-full p-8 bg-slate-800/60 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-sky-400/30 transition-all duration-500">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={feature.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MID-PAGE CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-gradient-to-r from-sky-600 to-indigo-700">
        <div className="mx-auto max-w-[1200px] text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-black text-white">
            Battery Problems? We Are On the Way.
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Do not wait for a tow truck. Our mobile technicians come to you,
            test your battery, and replace it on the spot. Available 24/7
            across San Diego County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="group px-12 py-6 rounded-2xl font-black text-2xl bg-white text-indigo-700 hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center gap-3 shadow-2xl"
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call: {CONTACT.phone}
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp.replace("+", "")}?text=I%20need%20a%20battery%20replacement`}
              className="inline-flex items-center gap-2 px-8 py-5 bg-[#25D366] hover:brightness-110 rounded-2xl text-white font-bold text-lg transition-all hover:scale-105"
              style={{
                boxShadow: "0 0 15px rgba(37, 211, 102, 0.3)",
              }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FAQ SECTION (7+ questions)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 px-6 bg-slate-950">
        <div className="mx-auto max-w-[900px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-white/60">
              Everything you need to know about our battery replacement service
            </p>
          </div>

          <div className="space-y-4">
            <FaqItem q="How much does a mobile battery replacement cost in San Diego?">
              Mobile battery replacement in San Diego starts at $95, which
              includes on-site diagnostics, load testing, and the service call.
              The total cost depends on the specific battery your vehicle
              requires, as some vehicles need standard flooded batteries while
              others require premium AGM or EFB types. We always provide a
              complete, upfront quote before starting any work so there are
              never surprise charges on your bill.
            </FaqItem>
            <FaqItem q="How long does a mobile battery replacement take?">
              The battery replacement itself typically takes 15 to 30 minutes
              once our technician arrives at your location. That includes
              removing the old battery, installing and securing the new one,
              cleaning the terminals, and verifying that your charging system
              is functioning correctly. Combined with our average 15-25 minute
              response time, most customers are back on the road within about
              an hour of making the call.
            </FaqItem>
            <FaqItem q="Can you replace the battery in my hybrid or electric vehicle?">
              Yes, we replace the 12V auxiliary batteries in hybrid and
              electric vehicles from all manufacturers, including Toyota,
              Honda, Tesla, Chevrolet, Ford, Hyundai, Kia, BMW, and Mercedes.
              Our technicians are trained on the specific safety protocols for
              working around high-voltage systems and know the correct battery
              specifications and post-installation procedures for each vehicle.
            </FaqItem>
            <FaqItem q="How do I know if I need a battery replacement or just a jump start?">
              Our technicians perform a comprehensive battery load test on-site
              using professional diagnostic equipment. If your battery holds
              adequate charge and voltage under load and your alternator is
              charging properly, a jump start may be all you need. If the
              battery fails the load test, meaning it cannot deliver sufficient
              cranking amps, we will recommend replacement. We never push an
              unnecessary replacement.
            </FaqItem>
            <FaqItem q="What brands of batteries do you install?">
              We carry high-quality, name-brand batteries from trusted
              manufacturers that meet or exceed your vehicle manufacturer's
              OEM specifications. We stock batteries from leading brands that
              are specifically designed for the demands of San Diego's climate,
              which means heat-resistant construction that lasts longer in our
              warm weather. Every battery comes with a full manufacturer
              warranty.
            </FaqItem>
            <FaqItem q="Do you dispose of my old battery?">
              Yes, we handle the removal and environmentally responsible
              disposal of your old battery at no additional charge. Car
              batteries contain lead, sulfuric acid, and other hazardous
              materials that must be recycled properly. We transport all used
              batteries to certified recycling facilities, keeping toxic
              materials out of San Diego's landfills and waterways.
            </FaqItem>
            <FaqItem q="Can you replace batteries for commercial vehicles and fleets?">
              Absolutely. We service commercial vehicles, work trucks, delivery
              vans, and fleet vehicles of all sizes throughout San Diego
              County. We offer dedicated fleet accounts with priority
              dispatching, volume pricing, detailed invoicing with VIN
              tracking, and net-30 payment terms for qualified businesses.
              Call us to set up a fleet account.
            </FaqItem>
            <FaqItem q="What if my battery keeps dying even after replacement?">
              If a new battery keeps going dead, the problem is usually
              elsewhere in the electrical system. Common culprits include a
              failing alternator, a parasitic drain from an aftermarket
              accessory, or a wiring issue. Our technicians test the charging
              system and check for parasitic draws as part of every
              replacement so we can catch these issues before you drive away.
            </FaqItem>
            <FaqItem q="Do you service batteries on weekends and holidays?">
              Yes. We operate 24 hours a day, 7 days a week, 365 days a year,
              including all major holidays. Battery failures are emergencies
              that do not follow a business schedule, and neither do we. There
              is no extra charge for after-hours, weekend, or holiday service
              calls.
            </FaqItem>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 lg:py-36 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-sky-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-sky-500/25 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/25 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative mx-auto max-w-[1400px] text-center space-y-10">
          {/* Battery Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-sky-400/30 rounded-full blur-3xl"></div>
              <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center">
                <svg
                  className="w-14 h-14 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight">
            Dead Battery?
            <span className="block bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-500 bg-clip-text text-transparent">
              We Replace It On the Spot
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Professional mobile battery replacement anywhere in San Diego.
            Our certified technicians arrive in 15-25 minutes with the right
            battery for your vehicle. Available around the clock, every day.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="group px-14 py-7 rounded-2xl font-black text-2xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-[0_20px_60px_rgba(56,189,248,0.4)] hover:shadow-[0_20px_80px_rgba(56,189,248,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-4"
            >
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now: {CONTACT.phone}
            </a>

            <a
              href={`https://wa.me/${CONTACT.whatsapp.replace("+", "")}?text=I%20need%20a%20battery%20replacement`}
              className="inline-flex items-center gap-2 px-8 py-5 bg-[#25D366] hover:brightness-110 rounded-2xl text-white font-bold text-lg transition-all hover:scale-105"
              style={{
                boxShadow: "0 0 15px rgba(37, 211, 102, 0.3)",
              }}
            >
              WhatsApp Us
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 max-w-4xl mx-auto">
            {[
              { label: "15-25 Min", detail: "Response Time" },
              { label: "5.0 Rating", detail: "Google Reviews" },
              { label: "24/7", detail: "Always Available" },
              { label: "Warranty", detail: "Every Battery" },
            ].map((badge, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
              >
                <div className="text-2xl font-black text-white">
                  {badge.label}
                </div>
                <div className="text-sm text-white/60 font-semibold">
                  {badge.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CROSS-SERVICE LINKS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-slate-950 border-t border-sky-500/10">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">
              More Roadside Services
            </h3>
            <p className="text-white/50 mt-2">
              Need something other than a battery? We offer a full range of
              emergency roadside services across San Diego County.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/jump-start"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border border-sky-500/20 hover:border-sky-500/50 hover:shadow-lg transition-all duration-300 font-semibold text-white hover:text-sky-400"
            >
              Jump Start Service
            </Link>
            <Link
              href="/roadside-assistance"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border border-sky-500/20 hover:border-sky-500/50 hover:shadow-lg transition-all duration-300 font-semibold text-white hover:text-sky-400"
            >
              Roadside Assistance
            </Link>
            <Link
              href="/towing"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border border-sky-500/20 hover:border-sky-500/50 hover:shadow-lg transition-all duration-300 font-semibold text-white hover:text-sky-400"
            >
              Towing Service
            </Link>
            <Link
              href="/lockout"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border border-sky-500/20 hover:border-sky-500/50 hover:shadow-lg transition-all duration-300 font-semibold text-white hover:text-sky-400"
            >
              Lockout Service
            </Link>
            <Link
              href="/tire-change"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border border-sky-500/20 hover:border-sky-500/50 hover:shadow-lg transition-all duration-300 font-semibold text-white hover:text-sky-400"
            >
              Tire Change
            </Link>
            <Link
              href="/gas-delivery"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border border-sky-500/20 hover:border-sky-500/50 hover:shadow-lg transition-all duration-300 font-semibold text-white hover:text-sky-400"
            >
              Gas Delivery
            </Link>
          </div>
        </div>
      </section>

      {/* Left-side popup */}
      <LeftPopup />
    </main>
  );
}

/* ── FAQ Accordion Component ── */
function FaqItem({
  q,
  children,
}: {
  q: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group relative overflow-hidden rounded-2xl border border-sky-500/20 bg-slate-900/50 backdrop-blur-xl hover:border-sky-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]">
      <summary className="cursor-pointer select-none p-6 font-bold text-lg flex items-center justify-between text-white">
        <span className="flex items-center gap-3">
          <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
              />
            </svg>
          </span>
          {q}
        </span>
        <svg
          className="w-6 h-6 text-sky-400 group-open:rotate-180 transition-transform duration-300 flex-shrink-0 ml-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>
      <div className="px-6 pb-6 text-white/70 leading-relaxed border-t border-sky-500/10 pt-4">
        {children}
      </div>
    </details>
  );
}
