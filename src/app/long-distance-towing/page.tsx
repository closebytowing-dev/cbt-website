"use client";

import Link from "next/link";
import { CONTACT } from "@/lib/constants";

/* ─── FAQ DATA ─── */
const FAQ_DATA = [
  {
    question: "How much does long distance towing from San Diego cost?",
    answer:
      "Long distance towing rates depend on the total mileage, vehicle type, and transport method (open flatbed vs. enclosed). A San Diego to Los Angeles tow typically ranges from $350 to $600, while longer routes like San Diego to Las Vegas or Phoenix may range from $800 to $1,500. We provide a firm, all-inclusive quote before dispatch so there are never hidden fees or surprise charges on arrival.",
  },
  {
    question: "Is my vehicle insured during long distance transport?",
    answer:
      "Yes, every vehicle we transport is covered by our comprehensive cargo insurance policy for the full duration of the trip. Our coverage protects against damage during loading, transit, and unloading. We carry $1 million in general liability insurance and can provide a certificate of insurance upon request before your transport begins.",
  },
  {
    question: "How long does it take to tow a car from San Diego to Los Angeles?",
    answer:
      "Door-to-door transport from San Diego to Los Angeles typically takes 3 to 5 hours depending on traffic conditions and exact pickup and delivery locations. We schedule departures to avoid peak rush-hour congestion on I-5 and I-405 whenever possible. You will receive real-time GPS tracking updates throughout the journey so you always know where your vehicle is.",
  },
  {
    question: "Can you transport my car from San Diego to another state?",
    answer:
      "Absolutely. We handle interstate towing to Arizona, Nevada, Utah, Oregon, Texas, and beyond. Our operators hold all required federal and state permits for interstate vehicle transport. Whether you are relocating, purchased a vehicle out of state, or need to get your car to a specialty repair shop across state lines, we have you covered.",
  },
  {
    question: "Do you offer enclosed transport for luxury or classic cars?",
    answer:
      "Yes, we offer fully enclosed transport for high-value, luxury, exotic, and classic vehicles. Enclosed carriers protect your car from road debris, weather, UV exposure, and dust throughout the entire journey. This is the preferred option for vehicles like Porsches, Ferraris, vintage muscle cars, and any vehicle where cosmetic condition is paramount.",
  },
  {
    question: "What types of vehicles can you tow long distance?",
    answer:
      "We transport sedans, SUVs, trucks, vans, luxury vehicles, exotic sports cars, classic cars, motorcycles, and light commercial vehicles. Our fleet includes standard flatbed carriers for everyday vehicles and specialized enclosed trailers for high-value transport. If your vehicle has wheels and weighs under 10,000 lbs, we can move it.",
  },
  {
    question: "How do I track my vehicle during long distance transport?",
    answer:
      "Every long distance transport includes real-time GPS tracking. Once your vehicle is loaded, we send you a tracking link via text message so you can follow your vehicle's location on a live map throughout the entire journey. Our dispatch team is also available by phone 24/7 to provide status updates at any time.",
  },
  {
    question: "What is the difference between long distance towing and auto shipping?",
    answer:
      "Long distance towing uses a single flatbed truck that picks up your vehicle and delivers it directly to the destination without transfers. Auto shipping companies often use multi-car carriers and may transfer your vehicle between trucks at hub locations. Our direct flatbed method means fewer hands on your vehicle, faster delivery times, and a lower risk of damage during transit.",
  },
  {
    question: "Can I put personal items in my car during long distance towing?",
    answer:
      "We allow a small amount of personal items in the vehicle during transport, typically up to one box or bag in the trunk. However, we cannot be responsible for personal belongings inside the vehicle. We recommend removing all valuables, electronics, and important documents before transport. Excessive weight from personal items may affect the transport quote.",
  },
];

/* ─── COMMON ROUTES ─── */
const COMMON_ROUTES = [
  { from: "San Diego", to: "Los Angeles", distance: "120 mi", time: "3-5 hrs", highway: "I-5 North" },
  { from: "San Diego", to: "Phoenix, AZ", distance: "355 mi", time: "6-8 hrs", highway: "I-8 East" },
  { from: "San Diego", to: "Las Vegas, NV", distance: "330 mi", time: "5-7 hrs", highway: "I-15 North" },
  { from: "San Diego", to: "San Francisco", distance: "500 mi", time: "8-10 hrs", highway: "I-5 North" },
  { from: "San Diego", to: "Tucson, AZ", distance: "405 mi", time: "6-8 hrs", highway: "I-8 East" },
  { from: "San Diego", to: "Palm Springs", distance: "140 mi", time: "2-3 hrs", highway: "I-15 / I-10" },
  { from: "San Diego", to: "Orange County", distance: "90 mi", time: "2-3 hrs", highway: "I-5 North" },
  { from: "San Diego", to: "Sacramento", distance: "505 mi", time: "8-10 hrs", highway: "I-5 North" },
];

/* ─── SERVICE TYPES ─── */
const SERVICE_TYPES = [
  {
    title: "Interstate Towing",
    description:
      "Full-service interstate vehicle transport across California, Arizona, Nevada, and beyond. We hold all required federal and state operating permits for legal interstate commercial vehicle transport. Our drivers are experienced with long-haul routes and know the best corridors, rest stops, and fuel stations along every major interstate connecting San Diego to destinations throughout the western United States. Whether you need a car moved from San Diego to Phoenix for a relocation, or from San Diego to Portland for a family member, our interstate towing service handles every detail from pickup to delivery.",
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
  },
  {
    title: "Flatbed Transport",
    description:
      "Our primary long distance method uses hydraulic flatbed carriers that keep all four wheels off the road for the entire journey. This eliminates drivetrain wear, tire degradation, and transmission stress that can occur with dolly or wheel-lift methods over hundreds of miles. Flatbed transport is the industry gold standard for long distance moves and is required for all-wheel-drive vehicles, lowered cars, and vehicles with ground clearance issues. Every vehicle is secured with professional-grade ratchet straps at multiple tie-down points to prevent any movement during transit.",
    icon: "M8 7h12l2 5h-1.5M8 7H6m2 0v5m6-5v5m-6 0h6m-6 0H4.5M14 12h3.5M4.5 12a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm13 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5z",
  },
  {
    title: "Enclosed Transport",
    description:
      "Premium enclosed carrier service for luxury, exotic, classic, and high-value vehicles that require maximum protection during long distance moves. Our enclosed trailers shield your vehicle from road debris, rocks, weather, dust, UV rays, and prying eyes throughout the entire journey. Climate-controlled options are available for vehicles that are sensitive to temperature extremes. Enclosed transport is the preferred choice for Ferraris, Porsches, Lamborghinis, vintage muscle cars, concours show cars, and any vehicle where maintaining flawless cosmetic condition is essential. Soft tie-downs and protective wheel nets ensure zero contact damage.",
    icon: "M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01",
  },
  {
    title: "City-to-City Transport",
    description:
      "Scheduled city-to-city vehicle transport for individuals, dealerships, and businesses that need reliable, recurring vehicle moves between major metropolitan areas. Our city-to-city service covers popular corridors like San Diego to Los Angeles, San Diego to Orange County, San Diego to the Inland Empire, and San Diego to Palm Springs. This service is ideal for dealership inventory transfers, seasonal relocations, snowbird vehicle moves, and corporate fleet redistribution. We offer volume discounts for multiple vehicles and can coordinate regular pickup schedules to meet ongoing transport needs.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

/* ─── HOW IT WORKS STEPS ─── */
const STEPS = [
  {
    step: "1",
    title: "Call for a Free Quote",
    description:
      "Call us or request a quote online. Tell us your pickup location, destination, vehicle details, and preferred timeline. We provide a firm, all-inclusive price within minutes with no obligation and no hidden fees.",
  },
  {
    step: "2",
    title: "We Pick Up Your Vehicle",
    description:
      "On your scheduled date, our licensed driver arrives with a clean flatbed carrier. We perform a thorough pre-transport inspection, document your vehicle's condition with photos, and secure it with professional tie-downs for the journey.",
  },
  {
    step: "3",
    title: "Safe Delivery with GPS Tracking",
    description:
      "Track your vehicle in real time via our GPS link as it travels to the destination. Upon arrival, we perform a final inspection with you, confirm everything is in perfect condition, and hand over the keys. Payment is collected after safe delivery.",
  },
];

/* ─── WHY CHOOSE CLOSEBY ─── */
const WHY_CHOOSE = [
  {
    title: "GPS Real-Time Tracking",
    description: "Follow your vehicle on a live map from pickup to delivery. Full transparency, zero guesswork.",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Fully Insured Transport",
    description: "$1M liability coverage on every vehicle we transport. Certificate of insurance available on request.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "No Hidden Fees",
    description: "The price we quote is the price you pay. Fuel, tolls, and mileage are included. No surprise charges at delivery.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Licensed & DOT Compliant",
    description: "All federal and state permits for interstate commercial vehicle transport. Background-checked, professional drivers.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
  {
    title: "Direct Door-to-Door",
    description: "Single flatbed, single driver, no transfers. Your vehicle goes directly from pickup to destination without stops at hub yards.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    title: "24/7 Availability",
    description: "Schedule pickups any day, any time. Emergency long distance tows dispatched around the clock, weekends and holidays included.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

/* ─── CROSS-SERVICE LINKS ─── */
const RELATED_SERVICES = [
  { name: "Local Towing", href: "/towing" },
  { name: "Heavy Duty Towing", href: "/heavyduty" },
  { name: "Motorcycle Towing", href: "/motorcycle-towing" },
  { name: "Collision Recovery", href: "/collision-recovery" },
];

/* ─── SCHEMA.ORG DATA ─── */
const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.closebytowing.com/long-distance-towing#service",
      name: "Long Distance Towing San Diego",
      description:
        "Professional long distance towing and interstate vehicle transport from San Diego. Flatbed and enclosed carrier options with GPS tracking, full insurance coverage, and door-to-door delivery to Los Angeles, Phoenix, Las Vegas, San Francisco, and beyond.",
      url: "https://www.closebytowing.com/long-distance-towing",
      serviceType: ["Long Distance Towing", "Interstate Vehicle Transport", "Flatbed Transport", "Enclosed Auto Transport"],
      areaServed: [
        { "@type": "State", name: "California" },
        { "@type": "State", name: "Arizona" },
        { "@type": "State", name: "Nevada" },
      ],
      provider: {
        "@type": "LocalBusiness",
        "@id": "https://www.closebytowing.com#organization",
        name: "CloseBy Towing",
        telephone: "+1-858-999-9293",
        address: {
          "@type": "PostalAddress",
          addressLocality: "San Diego",
          addressRegion: "CA",
          postalCode: "92101",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "32.7157",
          longitude: "-117.1611",
        },
        priceRange: "$$",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "22",
        },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Long Distance Towing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "San Diego to Los Angeles Towing",
              description: "Flatbed towing from San Diego to Los Angeles, approx. 120 miles via I-5.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "San Diego to Phoenix Interstate Towing",
              description: "Interstate vehicle transport from San Diego to Phoenix, AZ, approx. 355 miles via I-8.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "San Diego to Las Vegas Towing",
              description: "Long distance towing from San Diego to Las Vegas, NV, approx. 330 miles via I-15.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Enclosed Luxury Vehicle Transport",
              description: "Premium enclosed carrier transport for luxury, exotic, and classic vehicles.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.closebytowing.com/long-distance-towing#faq",
      mainEntity: FAQ_DATA.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.closebytowing.com/long-distance-towing#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.closebytowing.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.closebytowing.com/services" },
        { "@type": "ListItem", position: 3, name: "Long Distance Towing", item: "https://www.closebytowing.com/long-distance-towing" },
      ],
    },
  ],
};

export default function LongDistanceTowingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* ── Schema.org Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      {/* ══════════ HERO SECTION ══════════ */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden bg-[#0a0a2e]">
        {/* Deep navy gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a2e] via-[#111145] to-[#0d0d35]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a2e]/95 via-transparent to-[#0a0a2e]/40" />

        {/* Amber accent glow */}
        <div className="absolute top-[20%] right-[20%] w-[500px] h-[400px] bg-amber-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[300px] bg-amber-600/5 rounded-full blur-[100px]" />

        {/* Highway-stripe accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-40" />

        {/* Bottom edge transition */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full h-16 sm:h-24">
            <path d="M0,90 L0,60 L360,25 L720,50 L1080,12 L1440,42 L1440,90Z" fill="#f9fafb" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-32 sm:pb-40 pt-36 sm:pt-44 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-5 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-300 text-sm font-semibold tracking-wide">Interstate Vehicle Transport</span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
              <span className="text-white">Long Distance</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                Towing
              </span>
              <br />
              <span className="text-white/80">San Diego</span>
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl">
              Professional <span className="text-white font-semibold">flatbed &amp; enclosed transport</span> from
              San Diego to <span className="text-amber-300 font-semibold">LA, Phoenix, Las Vegas</span>, and
              anywhere in the western U.S. GPS tracked, fully insured, door-to-door delivery.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              {[
                { value: "500+", label: "Miles Range" },
                { value: "GPS", label: "Live Tracking" },
                { value: "24/7", label: "Dispatch" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 rounded-xl p-3 sm:p-4 text-center border border-amber-500/20">
                  <div className="text-2xl sm:text-3xl font-black text-amber-400">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-[#0a0a2e] px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: {CONTACT.phone}
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-slate-600"
              >
                WhatsApp Us
              </a>
            </div>

            {/* Trust line */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                5.0 Google Stars
              </span>
              <span>$1M Insurance</span>
              <span>Licensed &amp; DOT Compliant</span>
              <span>All-Inclusive Pricing</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TRUST BAR ══════════ */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: "Fully Insured", sublabel: "$1M Liability Coverage", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { label: "GPS Tracked", sublabel: "Real-Time Updates", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
              { label: "DOT Certified", sublabel: "Interstate Licensed", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
              { label: "5.0 Stars", sublabel: "Perfect Google Rating", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0a0a2e] to-[#1e1e4a] flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-[#0a0a2e] text-sm">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SERVICE DESCRIPTION SECTIONS ══════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Our Transport Services
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0a0a2e]">
              Long Distance{" "}
              <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                Towing Services
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From a quick run to Los Angeles to a cross-state move to Phoenix or Las Vegas, CloseBy Towing offers
              multiple long distance transport options tailored to your vehicle type, budget, and timeline. Every
              service includes GPS tracking, comprehensive insurance, and transparent all-inclusive pricing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {SERVICE_TYPES.map((service) => (
              <div
                key={service.title}
                className="group bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0a0a2e] to-[#1e1e4a] text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0a0a2e] mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ COMMON ROUTES ══════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Popular Destinations
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0a0a2e]">
              Common Routes{" "}
              <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                From San Diego
              </span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              We regularly transport vehicles along these corridors. Not seeing your destination? Call us for a quote
              to any location in the western United States.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {COMMON_ROUTES.map((route) => (
              <div
                key={route.to}
                className="bg-white rounded-2xl p-5 border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0a0a2e] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#0a0a2e] text-sm">{route.to}</h3>
                </div>
                <div className="space-y-1.5 text-xs text-gray-500">
                  <div className="flex justify-between">
                    <span>Distance</span>
                    <span className="font-semibold text-[#0a0a2e]">{route.distance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Est. Time</span>
                    <span className="font-semibold text-[#0a0a2e]">{route.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Route</span>
                    <span className="font-semibold text-amber-600">{route.highway}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA below routes */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Need a custom route? We transport vehicles to any city in the western U.S.</p>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-[#0a0a2e] hover:bg-[#14144a] text-amber-400 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Get a Free Quote: {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ HOW IT WORKS ══════════ */}
      <section className="py-20 sm:py-28 bg-[#0a0a2e] text-white relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600/5 rounded-full blur-[100px]" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Simple Process
            </span>
            <h2 className="text-4xl sm:text-5xl font-black">
              How It{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Three easy steps from quote to delivery. No stress, no surprises, no hassle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((item) => (
              <div
                key={item.step}
                className="relative bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-amber-500/30 transition-all"
              >
                {/* Step number */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20">
                  <span className="text-[#0a0a2e] font-black text-xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Connector lines on desktop */}
          <div className="hidden md:flex justify-center mt-8 gap-4 items-center">
            <div className="h-0.5 w-32 bg-gradient-to-r from-amber-500/50 to-amber-500/20" />
            <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="h-0.5 w-32 bg-gradient-to-r from-amber-500/20 to-amber-500/50" />
            <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="h-0.5 w-32 bg-gradient-to-r from-amber-500/50 to-amber-500/20" />
          </div>
        </div>
      </section>

      {/* ══════════ WHY CHOOSE CLOSEBY ══════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              The CloseBy Difference
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0a0a2e]">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                CloseBy Towing
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Long distance vehicle transport is a big decision. You want a company that treats your car with the same
              care you would. Here is why thousands of San Diego drivers trust CloseBy Towing for their long distance
              moves over national shipping brokers and multi-car carrier companies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#0a0a2e] to-[#1e1e4a] text-amber-400 mb-4">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-[#0a0a2e] text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ MID-PAGE CTA ══════════ */}
      <section className="py-16 bg-gradient-to-r from-[#0a0a2e] via-[#14144a] to-[#0a0a2e]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Move Your Vehicle?
          </h2>
          <p className="text-slate-400 mb-8 text-lg max-w-2xl mx-auto">
            Get a free, no-obligation quote for long distance towing from San Diego. Transparent pricing, no hidden
            fees, and a firm price before we dispatch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-[#0a0a2e] px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: {CONTACT.phone}
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all border border-slate-600"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ DETAILED SERVICE CONTENT ══════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0a0a2e] mb-6">
              Professional Long Distance Towing From San Diego
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              When you need to move a vehicle over long distances, the stakes are higher than a quick local tow.
              Hundreds of miles on the road means hundreds of miles where something can go wrong if you choose the
              wrong transport company. At CloseBy Towing, we have built our long distance division around one
              principle: your vehicle arrives at its destination in the exact same condition it left your driveway.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Unlike multi-car carrier services that load eight to ten vehicles on an open trailer, we use dedicated
              single-vehicle flatbed carriers for every long distance tow. This means your car is the only vehicle on
              the truck, it never gets transferred between carriers at intermediate yards, and it goes directly from
              your pickup address to your delivery address without unnecessary stops or handling by multiple drivers.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our long distance towing service covers all major routes departing San Diego including Interstate 5
              northbound to Los Angeles, Orange County, and up the California coast to San Francisco and Sacramento;
              Interstate 8 eastbound through the desert to Yuma and Phoenix, Arizona; Interstate 15 northbound through
              Temecula, the Inland Empire, Barstow, and on to Las Vegas, Nevada; and combinations of these routes to
              reach destinations throughout California, Arizona, Nevada, Utah, Oregon, and the broader western
              United States.
            </p>

            <h3 className="text-2xl font-bold text-[#0a0a2e] mt-10 mb-4">
              Who Uses Long Distance Towing?
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Long distance towing is not just for breakdowns. Many of our customers use this service for planned
              vehicle moves that benefit from professional handling and full insurance coverage. Common scenarios
              include:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Relocating to or from San Diego and needing your car transported to your new city",
                "Purchasing a vehicle from a private seller or dealership in another city and needing it delivered to San Diego",
                "Sending a car to a family member, college student, or military service member stationed out of area",
                "Transporting a non-running, project, or classic car to a specialty repair shop or restoration garage in another city",
                "Dealerships transferring inventory between locations in different metro areas",
                "Snowbird seasonal vehicle moves between San Diego and summer residences in Arizona, Nevada, or Northern California",
                "Moving an accident-damaged vehicle to an out-of-area body shop recommended by your insurance provider",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-amber-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold text-[#0a0a2e] mt-10 mb-4">
              Open Flatbed vs. Enclosed Transport
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We offer two primary transport methods for long distance moves. Open flatbed transport is our standard
              and most cost-effective option. Your vehicle rides on a hydraulic tilt-bed carrier with all four wheels
              secured and off the ground. This method is excellent for everyday vehicles, trucks, SUVs, and any car
              where you want reliable, insured transport at the best price.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Enclosed transport is our premium tier, designed for vehicles that demand extra protection. Your car
              rides inside a fully enclosed trailer that shields it from road debris, weather, and environmental
              exposure. We recommend enclosed transport for luxury vehicles valued over $75,000, exotic sports cars,
              classic cars, concours show vehicles, and any car where maintaining a flawless exterior is non-negotiable.
              Both methods include full insurance coverage, GPS tracking, and door-to-door delivery.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Common Questions
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0a0a2e]">
              Long Distance Towing{" "}
              <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">FAQ</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <details
                key={i}
                className="group bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-amber-200 transition-all"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-100/80 transition-colors">
                  <h3 className="font-semibold text-[#0a0a2e] pr-8">{faq.question}</h3>
                  <svg className="w-5 h-5 text-amber-500 transition-transform group-open:rotate-180 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CROSS-SERVICE LINKS ══════════ */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-[#0a0a2e]">Other Towing Services</h3>
            <p className="text-gray-500 mt-2">Explore our full range of towing and transport services in San Diego.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {RELATED_SERVICES.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group px-6 py-3 rounded-xl bg-white border border-gray-200 hover:border-amber-400 hover:shadow-md transition-all font-semibold text-[#0a0a2e] hover:text-amber-600 text-sm"
              >
                {service.name}
                <svg className="w-4 h-4 inline ml-2 text-gray-400 group-hover:text-amber-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FINAL CTA ══════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#0a0a2e] via-[#14144a] to-[#0d0d35] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
        </div>

        {/* Amber accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">
            Need Your Vehicle Moved{" "}
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Long Distance?
            </span>
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            From San Diego to anywhere in the western United States. Flatbed transport, enclosed carriers,
            GPS tracked, and fully insured. Get your free quote in minutes.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-[#0a0a2e] px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: {CONTACT.phone}
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all border border-slate-600"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-slate-500 text-sm">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              5.0 Google Stars
            </span>
            <span>$1M Insurance Coverage</span>
            <span>Licensed &amp; DOT Compliant</span>
            <span>Free Quote by Phone</span>
          </div>
        </div>
      </section>
    </main>
  );
}
