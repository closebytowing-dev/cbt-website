import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Towing San Diego | 24/7 Service | CloseBy",
  description:
    "Fast, reliable towing in San Diego. Licensed & insured professionals available 24/7. Flatbed and wheel-lift trucks for any vehicle. Call now for immediate response.",
  keywords:
    "towing San Diego, San Diego tow truck, 24/7 towing, flatbed towing San Diego, emergency towing, professional towing service",
  alternates: { canonical: "/san-diego/towing" },
  openGraph: {
    title: "Towing San Diego | CloseBy Towing",
    description:
      "Professional tow truck service when you need it most. Fast response, transparent pricing, and care for your vehicle.",
    type: "website",
    url: "https://www.closebytowing.com/san-diego/towing",
    images: [
      {
        url: "/hero/home-hero.webp",
        width: 1200,
        height: 630,
        alt: "CloseBy Towing - Professional Towing San Diego",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Towing San Diego | CloseBy Towing",
    description:
      "Professional tow truck service when you need it most. Fast response, transparent pricing.",
  },
};

// San Diego areas for internal linking
const SAN_DIEGO_AREAS = [
  // Downtown & Beaches
  { name: "Pacific Beach", slug: "pacific-beach" },
  { name: "La Jolla", slug: "la-jolla" },
  { name: "Mission Beach", slug: "mission-beach" },
  { name: "Ocean Beach", slug: "ocean-beach" },
  { name: "Point Loma", slug: "point-loma" },
  { name: "Coronado", slug: "coronado" },
  { name: "Del Mar", slug: "del-mar" },
  // Central San Diego
  { name: "Mission Valley", slug: "mission-valley" },
  { name: "Hillcrest", slug: "hillcrest" },
  { name: "Kearny Mesa", slug: "kearny-mesa" },
  { name: "Clairemont", slug: "clairemont" },
  { name: "University City", slug: "university-city" },
  { name: "North Park", slug: "north-park" },
  { name: "Linda Vista", slug: "linda-vista" },
  { name: "Serra Mesa", slug: "serra-mesa" },
  // East County
  { name: "El Cajon", slug: "el-cajon" },
  { name: "La Mesa", slug: "la-mesa" },
  { name: "Spring Valley", slug: "spring-valley" },
  { name: "Santee", slug: "santee" },
  { name: "Lakeside", slug: "lakeside" },
  { name: "Lemon Grove", slug: "lemon-grove" },
  { name: "San Carlos", slug: "san-carlos" },
  { name: "Allied Gardens", slug: "allied-gardens" },
  // South Bay
  { name: "Chula Vista", slug: "chula-vista" },
  { name: "National City", slug: "national-city" },
  { name: "San Ysidro", slug: "san-ysidro" },
  { name: "Bonita", slug: "bonita" },
  { name: "Imperial Beach", slug: "imperial-beach" },
  { name: "Paradise Hills", slug: "paradise-hills" },
  { name: "Otay Mesa", slug: "otay-mesa" },
  // North County
  { name: "Mira Mesa", slug: "mira-mesa" },
  { name: "Poway", slug: "poway" },
  { name: "Scripps Ranch", slug: "scripps-ranch" },
  { name: "Tierrasanta", slug: "tierrasanta" },
  { name: "Rancho Bernardo", slug: "rancho-bernardo" },
  { name: "Carmel Mountain", slug: "carmel-mountain" },
  { name: "Sabre Springs", slug: "sabre-springs" },
  { name: "Rancho Penasquitos", slug: "rancho-penasquitos" },
];

// Other services for cross-linking
const OTHER_SERVICES = [
  {
    name: "Emergency Towing",
    description: "Immediate response for breakdowns and accidents",
    href: "/san-diego/emergency-towing",
  },
  {
    name: "Flatbed Towing",
    description: "Safe transport for luxury and specialty vehicles",
    href: "/san-diego/flatbed-towing",
  },
  {
    name: "Accident Towing",
    description: "Professional collision recovery services",
    href: "/san-diego/accident-towing",
  },
  {
    name: "Roadside Assistance",
    description: "Jump starts, lockouts, tire changes, and fuel delivery",
    href: "/san-diego/roadside-assistance",
  },
];

// FAQ data
const FAQ_DATA = [
  {
    question: "How quickly can you get to me?",
    answer:
      "Our average response time in San Diego is 25-35 minutes. Response times can vary based on traffic conditions, time of day, and your exact location within San Diego County. When you call, we'll give you an accurate ETA and dispatch the nearest available truck immediately. For highway breakdowns on I-5, I-8, I-15, or SR-163, we often arrive even faster due to our strategic positioning.",
  },
  {
    question: "How much does towing cost in San Diego?",
    answer:
      "Towing costs depend on several factors: distance, vehicle type, time of service, and equipment needed. We provide upfront quotes before dispatching so you know exactly what you'll pay - no surprises, no hidden fees. Most local tows within San Diego range from $95-$175. Long-distance tows are quoted based on mileage. We're competitively priced and transparent about every charge.",
  },
  {
    question: "Do you tow all types of vehicles?",
    answer:
      "Yes, we tow cars, SUVs, trucks, vans, motorcycles, and specialty vehicles. Our fleet includes flatbed trucks for lowered vehicles, luxury cars, and all-wheel drive vehicles that require all four wheels off the ground. We also have wheel-lift trucks for standard vehicles and tight spaces. Just let us know what you're driving and we'll send the right equipment.",
  },
  {
    question: "What if I was in an accident?",
    answer:
      "We handle accident towing regularly and work with all insurance companies. After ensuring you're safe, call us and we'll coordinate with police if they're on scene. We document everything for your insurance claim and can transport your vehicle to any body shop or location you choose. If you're unsure where to take it, we can recommend trusted repair shops in San Diego.",
  },
  {
    question: "Are you available on holidays?",
    answer:
      "Yes, we operate 24 hours a day, 7 days a week, 365 days a year - including all holidays. Breakdowns don't take days off, and neither do we. Our dispatch team and drivers are always ready to help, whether it's Christmas morning or 3 AM on a Tuesday.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve all of San Diego County, including Downtown San Diego, Mission Valley, La Jolla, Pacific Beach, Clairemont, Kearny Mesa, Mira Mesa, El Cajon, La Mesa, Chula Vista, National City, Escondido, Carlsbad, and everywhere in between. If you're in San Diego County, we can reach you.",
  },
];

export default function TowingSanDiegoPage() {
  // BreadcrumbList Schema
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
        "name": "San Diego Towing",
        "item": "https://www.closebytowing.com/san-diego/towing"
      }
    ]
  };

  // Schema markup for LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CloseBy Towing",
    image: "https://www.closebytowing.com/hero/home-hero.webp",
    "@id": "https://www.closebytowing.com/san-diego/towing",
    url: "https://www.closebytowing.com/san-diego/towing",
    telephone: CONTACT.phoneRaw,
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
    areaServed: {
      "@type": "City",
      name: "San Diego",
    },
  };

  // Schema markup for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1: HERO
          Purpose: Instant trust, instant action option
          Design: Stripe-inspired calm gradient, confident typography
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#1e1e4a]">
        {/* Subtle gradient mesh background - Stripe-inspired */}
        <div className="absolute inset-0">
          {/* Primary gradient orb */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#2a2a6a]/50 to-transparent rounded-full blur-3xl" />
          {/* Secondary accent orb */}
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#ffba42]/10 to-transparent rounded-full blur-3xl" />
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Content */}
            <div className="space-y-6 sm:space-y-8">
              {/* Trust badge line */}
              <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base text-white/80">
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-[#ffba42]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Licensed & Insured</span>
                </span>
                <span className="text-white/40">•</span>
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>4.9 Rating</span>
                </span>
                <span className="text-white/40">•</span>
                <span className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-[#ffba42]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Available 24/7</span>
                </span>
              </div>

              {/* H1 - The only H1 on the page */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight">
                Towing San Diego
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-xl">
                Professional tow truck service when you need it most. Fast response,
                transparent pricing, and care for your vehicle.
              </p>

              {/* Primary CTA */}
              <div className="pt-2">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-xl bg-[#ffba42] text-[#1e1e4a] font-bold text-lg sm:text-xl shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-300 hover:scale-[1.02]"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now: {CONTACT.phone}
                </a>
              </div>

              {/* Secondary text */}
              <p className="text-sm sm:text-base text-white/60">
                Average response time:{" "}
                <span className="text-white/90 font-semibold">25-35 minutes</span>
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="relative">
              {/* Image container with rounded corners */}
              <div className="relative aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden bg-white/5">
                <Image
                  src="/san-diego/towing-hero.webp"
                  alt="CloseBy Towing professional tow truck ready for 24/7 service in San Diego"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2: WHAT WE DO
          Purpose: Quick clarity on services
          Design: White background, generous spacing, clean cards
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1e1e4a] mb-4">
              San Diego&apos;s Trusted Towing Service
            </h2>
          </div>

          {/* Description paragraphs */}
          <div className="max-w-3xl mx-auto space-y-5 text-gray-700 text-lg leading-relaxed mb-12 lg:mb-16">
            <p>
              We provide professional towing throughout San Diego County. Whether you&apos;re
              stranded on the I-5, stuck in a parking garage downtown, or need a vehicle
              transported across town, we&apos;re here to help.
            </p>
            <p>
              Our fleet includes flatbed trucks for luxury and all-wheel-drive vehicles,
              and wheel-lift trucks for standard vehicles and tight spaces. From compact
              cars to large SUVs and trucks, we have the right equipment for your vehicle.
            </p>
            <p>
              We handle accident recovery, breakdowns, relocations, and planned transports.
              Every job gets the same level of professionalism and care.{" "}
              <span className="font-semibold text-[#1e1e4a]">
                Transparent pricing means you&apos;ll know the cost before we dispatch.
              </span>
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: 24/7 Availability */}
            <div className="group p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#ffba42]/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#1e1e4a] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-[#ffba42]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e1e4a] mb-2">24/7 Availability</h3>
              <p className="text-gray-600 leading-relaxed">
                Day or night, weekends and holidays. We&apos;re always here when you need us.
              </p>
            </div>

            {/* Card 2: All Vehicle Types */}
            <div className="group p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#ffba42]/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#1e1e4a] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-[#ffba42]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e1e4a] mb-2">All Vehicle Types</h3>
              <p className="text-gray-600 leading-relaxed">
                Flatbed and wheel-lift trucks for cars, SUVs, trucks, and motorcycles.
              </p>
            </div>

            {/* Card 3: Transparent Pricing */}
            <div className="group p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#ffba42]/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#1e1e4a] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 text-[#ffba42]"
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
              </div>
              <h3 className="text-xl font-bold text-[#1e1e4a] mb-2">Transparent Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                Know your cost upfront. No surprises, no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3: WHEN YOU NEED US
          Purpose: Help people self-identify their situation
          Design: Light gray background, two columns with image
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1e1e4a] mb-8">
                When You Need Professional Towing
              </h2>

              <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>
                  <span className="font-semibold text-[#1e1e4a]">Vehicle breakdown</span> -
                  Engine trouble, overheating, won&apos;t start, or making a noise you
                  don&apos;t trust. When your car stops cooperating, we get you off the road
                  safely.
                </p>
                <p>
                  <span className="font-semibold text-[#1e1e4a]">Flat tire</span> - No spare,
                  can&apos;t change it yourself, or in an unsafe location. We&apos;ll either
                  change it on the spot or transport you to a tire shop.
                </p>
                <p>
                  <span className="font-semibold text-[#1e1e4a]">After an accident</span> -
                  We work with insurance companies, coordinate with body shops, and handle
                  all the documentation. Focus on your safety - we&apos;ll take care of
                  your vehicle.
                </p>
                <p>
                  <span className="font-semibold text-[#1e1e4a]">Vehicle relocation</span> -
                  Moving, buying or selling, taking it to a mechanic, or just need it
                  somewhere else. We handle planned transports with the same care as
                  emergencies.
                </p>
                <p className="pt-2 text-[#1e1e4a] font-medium">
                  Whatever the situation, we&apos;ll get you taken care of.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-lg">
                <Image
                  src="/san-diego/driver-helping-customer.webp"
                  alt="CloseBy Towing driver assisting a customer in San Diego"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4: WHY CLOSEBY
          Purpose: Differentiation, trust-building
          Design: Navy background for contrast, premium feel
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#1e1e4a] relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ffba42]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Why San Diego Chooses CloseBy
            </h2>
          </div>

          {/* Trust points grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Point 1 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.08] border border-white/10 hover:border-[#ffba42]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ffba42]/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#ffba42]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Locally Owned & Operated
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    We&apos;re not a national chain. We know San Diego&apos;s streets,
                    neighborhoods, and traffic patterns.
                  </p>
                </div>
              </div>
            </div>

            {/* Point 2 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.08] border border-white/10 hover:border-[#ffba42]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ffba42]/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#ffba42]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Licensed & Fully Insured
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Your vehicle is protected. Our drivers are background-checked
                    professionals.
                  </p>
                </div>
              </div>
            </div>

            {/* Point 3 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.08] border border-white/10 hover:border-[#ffba42]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ffba42]/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#ffba42]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Modern Equipment</h3>
                  <p className="text-white/70 leading-relaxed">
                    Clean flatbed trucks with the latest in secure loading technology.
                  </p>
                </div>
              </div>
            </div>

            {/* Point 4 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.08] border border-white/10 hover:border-[#ffba42]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ffba42]/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#ffba42]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Real-Time Updates</h3>
                  <p className="text-white/70 leading-relaxed">
                    Track your tow truck and know exactly when help arrives.
                  </p>
                </div>
              </div>
            </div>

            {/* Point 5 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.08] border border-white/10 hover:border-[#ffba42]/30 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ffba42]/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#ffba42]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Transparent Pricing</h3>
                  <p className="text-white/70 leading-relaxed">
                    The price we quote is the price you pay. Period.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5: AREAS WE SERVE
          Purpose: Internal linking for SEO, local relevance
          Design: White background, clean grid of links
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1e1e4a] mb-4">
              Towing Throughout San Diego
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide fast towing service across San Diego County. Whether you&apos;re
              downtown, in the coastal communities, or East County, we&apos;ve got you
              covered.
            </p>
          </div>

          {/* Area links grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {SAN_DIEGO_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/san-diego/${area.slug}`}
                className="group flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#ffba42] hover:bg-[#ffba42]/5 transition-all duration-300"
              >
                <span className="font-medium text-[#1e1e4a] group-hover:text-[#1e1e4a]">
                  {area.name}
                </span>
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-[#ffba42] group-hover:translate-x-1 transition-all"
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 6: OTHER SERVICES
          Purpose: Internal linking to service pages, cross-selling
          Design: Light gray background, horizontal cards
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1e1e4a] mb-4">
              Our Services
            </h2>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {OTHER_SERVICES.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group flex items-center justify-between p-6 sm:p-8 rounded-2xl bg-white border border-gray-100 hover:border-[#ffba42]/30 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#1e1e4a] mb-1 group-hover:text-[#1e1e4a]">
                    {service.name}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-[#ffba42] group-hover:translate-x-1 transition-all flex-shrink-0 ml-4"
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 7: FAQ
          Purpose: Answer real questions, capture long-tail searches
          Design: White background, accordion style
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1e1e4a] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ accordion */}
          <div className="space-y-4">
            {FAQ_DATA.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border border-gray-200 bg-white hover:border-[#ffba42]/50 transition-all duration-300 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-[#1e1e4a] list-none">
                  <span className="pr-4">{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-[#ffba42] flex-shrink-0 group-open:rotate-180 transition-transform duration-300"
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
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 8: FINAL CTA
          Purpose: One last conversion opportunity
          Design: Navy background with gradient, centered, confident
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#1e1e4a] relative overflow-hidden">
        {/* Background gradient elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1e1e4a] via-[#2a2a6a] to-[#1e1e4a]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#ffba42]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Need a Tow in San Diego?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl mx-auto">
            We&apos;re ready to help. Call now for fast, professional service.
          </p>

          {/* Primary CTA */}
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="inline-flex items-center gap-3 px-10 sm:px-12 py-5 sm:py-6 rounded-xl bg-[#ffba42] text-[#1e1e4a] font-bold text-xl sm:text-2xl shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-300 hover:scale-[1.02] mb-6"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call {CONTACT.phone}
          </a>

          {/* Secondary link */}
          <p className="text-white/60">
            Or{" "}
            <Link
              href="/contact"
              className="text-[#ffba42] hover:text-[#ffba42]/80 underline underline-offset-4 transition-colors"
            >
              request a tow online
            </Link>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 9: TRUST FOOTER STRIP
          Purpose: Final trust signals
          Design: Light background, small strip above footer
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-6 sm:py-8 bg-gray-100 border-t border-gray-200">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#10b981]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Licensed & Insured
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#1e1e4a]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              San Diego Local Business
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              4.9 Customer Rating
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#ffba42]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              24/7 Service
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
