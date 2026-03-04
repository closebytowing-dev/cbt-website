import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CONTACT } from "@/lib/constants";
import LeftPopup from "@/components/LeftPopup";

/* ── Metadata ── */
export const metadata: Metadata = {
  title: "Tow Truck Near Me in San Diego | 24/7 Emergency Towing - CloseBy Towing",
  description:
    "Looking for a tow truck near you? CloseBy Towing provides fast 24/7 towing across San Diego, Chula Vista, El Cajon, Poway, La Mesa, National City & nearby areas. Call (858) 999-9293.",
  keywords:
    "towing near me, tow truck near me, 24 hour towing near me, emergency towing near me, roadside assistance near me, towing service near me, closest tow truck, tow truck in my area, san diego towing near me",
  alternates: { canonical: "https://www.closebytowing.com/towing-near-me" },
  openGraph: {
    title: "Tow Truck Near Me in San Diego | 24/7 Emergency Towing - CloseBy Towing",
    description:
      "Fast local towing & emergency dispatch across San Diego County. Call (858) 999-9293.",
    url: "https://www.closebytowing.com/towing-near-me",
    type: "website",
  },
};

/* ── FAQ Data ── */
const FAQ_ITEMS = [
  {
    q: "How fast can a tow truck reach me?",
    a: "Most calls are dispatched quickly, and typical arrival times are about 15–25 minutes depending on your exact location and traffic conditions across San Diego County.",
  },
  {
    q: "Do you offer 24/7 towing near me?",
    a: "Yes. CloseBy Towing dispatches local drivers 24 hours a day, 7 days a week across San Diego County — including holidays, weekends, and late-night emergencies.",
  },
  {
    q: "What types of vehicles can you tow?",
    a: "We tow most cars, SUVs, motorcycles, and light-duty trucks. For special situations like accidents or low-clearance vehicles, we can dispatch a flatbed when needed.",
  },
  {
    q: "How much does towing cost?",
    a: "Pricing depends on factors like distance, vehicle type, and service needs. We always provide an upfront quote before dispatch — no hidden fees. Call us at (858) 999-9293 for a quick quote and immediate dispatch.",
  },
  {
    q: "Do you provide roadside assistance too?",
    a: "Yes. In addition to towing, we offer jump starts, lockouts, tire changes, and fuel delivery in many areas across San Diego.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve all of San Diego County, including San Diego, Chula Vista, La Mesa, El Cajon, National City, Poway, Pacific Beach, Kearny Mesa, Clairemont, Spring Valley, Coronado, and surrounding communities.",
  },
];

/* ── Schema ── */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CloseBy Towing",
  image: "https://www.closebytowing.com/services/tow-truck-hero.webp",
  "@id": "https://www.closebytowing.com/towing-near-me",
  url: "https://www.closebytowing.com/towing-near-me",
  telephone: "+1-858-999-9293",
  priceRange: "$$",
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
  areaServed: [
    "San Diego", "Chula Vista", "National City", "La Mesa", "El Cajon",
    "Poway", "Mission Valley", "Kearny Mesa", "Downtown San Diego",
    "Pacific Beach", "Clairemont", "Spring Valley", "Lemon Grove",
    "Imperial Beach", "Coronado",
  ].map((name) => ({ "@type": "City", name })),
  serviceType: ["Towing", "Emergency Towing", "Flatbed Towing", "Roadside Assistance"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "50",
  },
  sameAs: [
    "https://facebook.com/closebytowing",
    "https://twitter.com/closebytowing",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
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
      name: "Towing Near Me",
      item: "https://www.closebytowing.com/towing-near-me",
    },
  ],
};

/* ── Reviews ── */
const REVIEWS = [
  {
    name: "Joe Barajas",
    text: "I had my 1968 MGB towed by CloseBy Towing. Daniel was friendly, professional and the price was reasonable. Highly recommend.",
    date: "Recent",
  },
  {
    name: "Brenda Valadez",
    text: "Great service! The driver arrived sooner than expected, and made a stressful situation much easier! If you ever need roadside assistance this is the company to call!",
    date: "Recent",
  },
  {
    name: "Jacob Perkins",
    text: "Fantastic and professional towing service. Very friendly and very fair, affordable prices. Would recommend to anyone looking for a tow.",
    date: "Recent",
  },
  {
    name: "Adam Perse'",
    text: "This company was very fast and helpful. I blew a tire on Olympic Parkway during rush hour traffic and they truly made me feel like a priority.",
    date: "Recent",
  },
];

/* ── Response Times ── */
const RESPONSE_TIMES = [
  { area: "Downtown / Central SD", time: "~15 minutes", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { area: "Chula Vista / South Bay", time: "~20 minutes", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
  { area: "El Cajon / East County", time: "~20 minutes", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
];

/* ── Services ── */
const SERVICES = [
  {
    title: "Emergency Towing",
    desc: "Broke down on the side of the road? We dispatch the nearest truck to your location for fast, safe towing to the shop or destination of your choice.",
    href: "/towing",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Roadside Assistance",
    desc: "Jump starts, tire changes, fuel delivery, and lockout service — all without a membership. One call and we're on the way.",
    href: "/roadside-assistance",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Emergency Towing San Diego",
    desc: "Dedicated emergency response across the San Diego metro area. We cover every freeway, neighborhood, and parking lot in the city.",
    href: "/san-diego/emergency-towing",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
  },
  {
    title: "Flatbed Towing",
    desc: "The safest towing method for luxury cars, AWD vehicles, motorcycles, and accident-damaged vehicles. All four wheels stay off the road.",
    href: "/san-diego/flatbed-towing",
    icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z",
    icon2:
      "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
  },
  {
    title: "San Diego Towing",
    desc: "Our main San Diego towing hub — local coverage across every neighborhood, freeway, and community in the county.",
    href: "/san-diego/towing",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
    icon2: "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Jump Start Service",
    desc: "Dead battery? We'll come to you and get your car started fast — no membership needed. Available 24/7 across San Diego.",
    href: "/jump-start",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Lockout Service",
    desc: "Locked your keys in the car? Our trained technicians can safely unlock your vehicle without damage. Fast response, any time of day.",
    href: "/lockout",
    icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
  },
  {
    title: "Tire Change",
    desc: "Flat tire on the freeway or in a parking lot? We'll swap your spare on fast so you can get moving again safely.",
    href: "/tire-change",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    icon2: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    title: "Gas Delivery",
    desc: "Ran out of fuel? We'll bring enough gas to get you to the nearest station. No need to walk — just call and we'll come to you.",
    href: "/gas-delivery",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
];

/* ── Coverage Areas ── */
const AREAS = [
  "San Diego",
  "Chula Vista",
  "National City",
  "La Mesa",
  "El Cajon",
  "Poway",
  "Mission Valley",
  "Kearny Mesa",
  "Downtown San Diego",
  "Pacific Beach",
  "Clairemont",
  "Spring Valley",
  "Lemon Grove",
  "Imperial Beach",
  "Coronado",
  "La Jolla",
  "North Park",
  "Hillcrest",
  "Point Loma",
  "Santee",
  "Escondido",
  "Oceanside",
  "Carlsbad",
];

/* ── Why Choose Us ── */
const REASONS = [
  {
    title: "Fast Local Response",
    desc: "15–25 minute average arrival. We dispatch the closest truck — not a call center across the country.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Professional, Licensed Drivers",
    desc: "Every driver is background-checked, licensed by the state of California, and trained for safe vehicle handling.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Transparent Upfront Pricing",
    desc: "You get a quote before we dispatch. No hidden fees, no mileage surprises. The price we quote is the price you pay.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Flatbed & Accident Recovery",
    desc: "We operate flatbed tow trucks for damage-free transport and handle accident recovery with insurance coordination.",
    icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Available 24/7/365",
    desc: "Breakdowns don't wait for business hours. We're dispatching tow trucks around the clock — holidays included.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    title: "All Payment Methods",
    desc: "Cash, credit cards, debit, Apple Pay, Google Pay — we make payment easy so you can focus on getting back on the road.",
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  },
];

/* ══════════════════════════════════════════
   PAGE COMPONENT
   ══════════════════════════════════════════ */
export default function TowingNearMePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Schema Markup ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* ═══════════════════════════════════
          1. HERO — Above the Fold
          ═══════════════════════════════════ */}
      <section className="relative min-h-[70vh] lg:min-h-[75vh] overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <Image
            src="/services/towing-near-me-hero.webp"
            alt="CloseBy Towing flatbed truck carrying a classic Rolls-Royce in San Diego"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/40 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 flex items-center min-h-[70vh] lg:min-h-[75vh]">
          <div className="w-full lg:w-1/2 py-16 sm:py-20 lg:py-24 space-y-6 sm:space-y-7">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="text-sm text-white/50">
              <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white/70">Towing Near Me</span>
            </nav>

            {/* Emergency badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/15 border border-red-500/30 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
              </span>
              <span className="text-red-300 font-bold text-sm tracking-wide">
                EMERGENCY TOWING — DISPATCHING NOW
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] text-white drop-shadow-lg">
              Tow Truck{" "}
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                Near Me
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-white/80 font-bold">
                in San Diego &mdash; 24/7 Emergency Towing
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/70 font-medium">
              Fast Response &bull; Local Tow Trucks &bull; Available Now
            </p>

            {/* Primary CTA — Call */}
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-10 py-5 sm:py-6 rounded-2xl font-black text-lg sm:text-xl bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_20px_60px_rgba(220,38,38,0.4)] hover:shadow-[0_20px_80px_rgba(220,38,38,0.6)] hover:scale-[1.03] transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now: {CONTACT.phone}
            </a>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "Licensed & Insured",
                "24/7 Emergency Service",
                "Fast Local Dispatch",
              ].map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-white/80 font-semibold">{label}</span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="text-center bg-white/5 rounded-xl p-3 border border-white/10 backdrop-blur-sm">
                <div className="text-lg font-black text-white">15–25 min</div>
                <div className="text-[11px] text-white/50 font-medium">Avg. Response</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-3 border border-white/10 backdrop-blur-sm">
                <div className="text-lg font-black text-white">24/7</div>
                <div className="text-[11px] text-white/50 font-medium">Always On</div>
              </div>
              <div className="text-center bg-white/5 rounded-xl p-3 border border-white/10 backdrop-blur-sm">
                <div className="text-lg font-black text-white">5.0</div>
                <div className="text-[11px] text-white/50 font-medium">Google Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          2. LOCAL RELEVANCE
          ═══════════════════════════════════ */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 text-center">
            Towing Service Wherever You Are in San Diego
          </h2>

          <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
            <p>
              When you search &ldquo;towing near me,&rdquo; you need a
              company that&rsquo;s actually close. CloseBy Towing has
              drivers positioned across San Diego County so we can
              reach you fast — whether you&rsquo;re stuck on the I-5
              in{" "}
              <strong className="text-slate-800">Downtown San Diego</strong>, broken down on the 8 near{" "}
              <strong className="text-slate-800">La Mesa</strong>, or
              dealing with a flat tire in{" "}
              <strong className="text-slate-800">Pacific Beach</strong>.
            </p>
            <p>
              Our dispatch system identifies the nearest available
              truck to your GPS location. That&rsquo;s how we maintain
              a 15–25 minute average response time across communities
              like{" "}
              <strong className="text-slate-800">Chula Vista</strong>,{" "}
              <strong className="text-slate-800">National City</strong>,{" "}
              <strong className="text-slate-800">El Cajon</strong>,
              and everywhere in between. No long waits, no
              runaround — just a professional driver heading your way.
            </p>
            <p>
              Every tow includes upfront pricing quoted before
              dispatch, a licensed and insured operator, and careful
              handling of your vehicle. From routine breakdowns to
              accident recovery, we treat every call like an
              emergency because to you, it is one.
            </p>
          </div>

          {/* Area pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {AREAS.map((area) => (
              <span
                key={area}
                className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-medium border border-slate-200"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          3. ARRIVAL TIME RESPONSE CARDS
          ═══════════════════════════════════ */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">
              Tow Truck Near You in Minutes
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              We dispatch from strategic locations across San Diego County so a
              truck is always close to your location.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {RESPONSE_TIMES.map((rt) => (
              <div
                key={rt.area}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-red-500/15 flex items-center justify-center mb-4">
                  <svg
                    className="w-7 h-7 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={rt.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-1">{rt.area}</h3>
                <p className="text-2xl font-black text-red-400">{rt.time}</p>
                <p className="text-sm text-white/40 mt-1">avg. arrival</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-white/40 mt-8">
            Times are averages and may vary based on traffic, weather, and call volume.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════
          4. SERVICES PROVIDED
          ═══════════════════════════════════ */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">
              Complete Towing &amp; Roadside Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              One call handles everything — from emergency towing to
              roadside assistance across San Diego County.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-red-300 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={svc.icon}
                    />
                    {"icon2" in svc && (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={svc.icon2}
                      />
                    )}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-red-700 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">
                  {svc.desc}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-red-600 group-hover:gap-2 transition-all">
                  Learn More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          5. WHY CHOOSE CLOSEBY TOWING
          ═══════════════════════════════════ */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">
            Why Choose CloseBy Towing
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REASONS.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/15 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={r.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{r.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mid-section CTA */}
          <div className="mt-12 text-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now: {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          6. REVIEWS / SOCIAL PROOF
          ═══════════════════════════════════ */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              What Our Customers Say
            </h2>

            {/* Aggregate rating */}
            <div className="flex items-center gap-4 bg-white px-5 py-3 rounded-xl shadow-md border border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-slate-900">
                  5.0
                </div>
                <div className="flex gap-0.5 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="text-yellow-500 text-base"
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-l-2 border-slate-200 pl-4">
                <div className="text-sm font-semibold text-slate-500">
                  Based on
                </div>
                <div className="text-lg font-bold text-slate-900">
                  Google Reviews
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {REVIEWS.map((review, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-5 border border-amber-200"
                style={{ backgroundColor: "#ffba42" }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-[#1e1e4a] text-sm leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-[#1e1e4a] text-sm">
                        {review.name}
                      </div>
                      <div className="text-[11px] text-[#1e1e4a]/60">
                        {review.date}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-800 font-semibold">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Verified
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          7. FAQ SECTION
          ═══════════════════════════════════ */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-xl border border-slate-200 bg-white overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer select-none font-bold text-slate-900 hover:bg-slate-50 transition-colors">
                  <span>{faq.q}</span>
                  <svg
                    className="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform group-open:rotate-180"
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
                <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          8. FINAL CTA
          ═══════════════════════════════════ */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 text-white text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            Stranded? Help Is{" "}
            <span className="bg-gradient-to-r from-red-400 to-amber-400 bg-clip-text text-transparent">
              15–25 Minutes Away
            </span>
          </h2>
          <p className="text-lg text-white/60">
            Don&rsquo;t wait on the side of the road. Call now and a
            tow truck will be dispatched immediately.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 rounded-2xl font-black text-lg bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_15px_50px_rgba(220,38,38,0.4)] hover:scale-[1.03] transition-all"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now: {CONTACT.phone}
            </a>

            <a
              href={`https://wa.me/${CONTACT.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 rounded-2xl font-bold text-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-emerald-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Licensed &amp; Insured
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-emerald-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              5.0 Star Rating
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-emerald-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Upfront Pricing
            </span>
          </div>
        </div>
      </section>

      {/* ── LeftPopup ── */}
      <LeftPopup />
    </main>
  );
}
