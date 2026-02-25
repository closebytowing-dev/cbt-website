"use client";

import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import LeftPopup from "@/components/LeftPopup";

/* ─── EV Brands ─── */
const EV_BRANDS = [
  { name: "Tesla (Model S, 3, X, Y, Cybertruck)", icon: "T" },
  { name: "Rivian (R1T, R1S)", icon: "R" },
  { name: "Lucid (Air, Gravity)", icon: "L" },
  { name: "BMW i (i4, iX, i5, i7)", icon: "B" },
  { name: "Nissan Leaf / Ariya", icon: "N" },
  { name: "Chevrolet Bolt EV / EUV", icon: "C" },
  { name: "Ford Mustang Mach-E / F-150 Lightning", icon: "F" },
  { name: "Hyundai Ioniq 5 / Ioniq 6", icon: "H" },
  { name: "Kia EV6 / EV9", icon: "K" },
  { name: "Mercedes EQS / EQE / EQB", icon: "M" },
  { name: "Audi e-tron / Q8 e-tron", icon: "A" },
  { name: "Porsche Taycan", icon: "P" },
  { name: "Volkswagen ID.4 / ID. Buzz", icon: "V" },
  { name: "Polestar 2 / Polestar 3", icon: "P" },
  { name: "Genesis GV60 / Electrified GV70", icon: "G" },
  { name: "Toyota bZ4X", icon: "T" },
];

/* ─── FAQ ─── */
const FAQ_DATA = [
  {
    question: "Why do electric vehicles need special towing?",
    answer:
      "Electric vehicles have unique drivetrain architectures that differ fundamentally from traditional gas-powered cars. EVs use electric motors connected directly to the wheels through fixed-ratio gearboxes. When the wheels turn without the motor being powered, it can force the motor to spin and generate electricity through regenerative braking — even when the vehicle is off. This back-feeding of current can overheat and permanently damage the motor, inverter, and battery management system. Additionally, EVs carry high-voltage battery packs (typically 400V-800V) that require careful handling during transport. Only flatbed towing eliminates these risks entirely by keeping all wheels off the ground.",
  },
  {
    question: "Can you tow a Tesla with a regular tow truck?",
    answer:
      "You should never tow a Tesla using a wheel-lift or dolly-style tow truck. Tesla explicitly states in their owner's manuals that all models must be transported on a flatbed. Even placing the vehicle in \"Transport Mode\" does not make it safe for conventional towing — Transport Mode only disengages the parking brake and allows the car to roll freely onto a flatbed. At CloseBy Towing, every Tesla tow uses our hydraulic flatbed trucks to ensure zero wheel rotation and zero risk of drivetrain damage.",
  },
  {
    question: "How much does EV towing cost in San Diego?",
    answer:
      "EV towing pricing is comparable to standard flatbed towing in San Diego. Your total cost depends on the base hook-up fee, the distance towed, and the travel distance to reach your location. Because we exclusively use flatbed equipment for EVs, there is no additional surcharge beyond our standard flatbed rate. We provide an exact upfront quote before dispatch so you know the total cost with no surprises. Call us for an instant quote.",
  },
  {
    question: "What happens if my EV runs out of charge on the road?",
    answer:
      "If your electric vehicle runs out of battery charge while driving, the car will gradually lose power and coast to a stop. Unlike gas cars, you cannot simply bring fuel to an EV on the roadside. The solution is a flatbed tow to the nearest compatible charging station — whether that is a Tesla Supercharger, a CCS/CHAdeMO DC fast charger, or your home charging setup. We can transport your EV to any charging station or destination within San Diego County and beyond. Our dispatchers can also help you identify the nearest fast-charging location.",
  },
  {
    question: "Do you handle EV accident recovery?",
    answer:
      "Yes, we provide full accident and collision recovery services for electric vehicles. Our technicians are trained in high-voltage safety protocols specific to damaged EVs, including identifying compromised battery enclosures, exposed high-voltage cabling, and coolant leaks from the thermal management system. We coordinate with emergency responders and follow manufacturer guidelines for safely loading a damaged EV onto our flatbed. If the battery pack is visibly damaged or leaking, we follow additional safety procedures before transport.",
  },
  {
    question: "Can you tow an EV to a specific dealership or body shop?",
    answer:
      "Absolutely. We regularly tow electric vehicles to authorized dealerships, EV-certified body shops, and specialty repair facilities throughout San Diego County and beyond. Whether you need your Tesla delivered to a Tesla Service Center, your Rivian taken to an authorized shop, or any EV transported to your preferred mechanic, we handle door-to-door delivery. We can also coordinate with your insurance company if the tow is related to a claim.",
  },
  {
    question: "Is it safe to tow an EV in the rain or at night?",
    answer:
      "Yes, our flatbed towing is safe in all weather conditions and at all hours. The vehicle is securely strapped to the flatbed with no wheels touching the road, so rain, wet roads, and low visibility do not affect the safety of transport. Our trucks are equipped with full lighting, reflective markers, and all DOT-required safety equipment. We operate 24 hours a day, 7 days a week, including during storms and inclement weather.",
  },
  {
    question: "What areas in San Diego do you cover for EV towing?",
    answer:
      "We provide specialized EV towing throughout all of San Diego County. This includes Downtown San Diego, La Jolla, Del Mar, Encinitas, Carlsbad, Oceanside, Escondido, Poway, Rancho Bernardo, Scripps Ranch, Mira Mesa, University City, Pacific Beach, Mission Valley, Hillcrest, North Park, Chula Vista, National City, El Cajon, Santee, La Mesa, and all surrounding communities. We also handle long-distance EV transport to Los Angeles, Orange County, and anywhere in California.",
  },
];

/* ─── Special Precautions Data ─── */
const PRECAUTIONS = [
  {
    title: "Never Use Wheel-Lift or Dolly Towing",
    desc: "Conventional tow methods rotate the wheels, which forces the electric motor to spin and generate electricity through regenerative braking. This uncontrolled back-feeding of current can destroy the motor windings, damage the inverter, and even cause thermal runaway in the battery pack. Every EV must be loaded onto a flatbed with all four wheels completely off the ground.",
    icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
    gradient: "from-red-500 to-red-600",
  },
  {
    title: "Regenerative Braking Concerns",
    desc: "Even with the vehicle powered off, many EVs will engage regenerative braking when the wheels are rotated externally. This is a built-in safety feature that cannot be fully disabled. The generated electricity has nowhere to go safely when the vehicle systems are not managing the charge cycle, leading to potential overheating of electrical components and battery cells.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "High-Voltage Battery Safety",
    desc: "EV battery packs operate at 400 to 800 volts — enough to be lethal. Our technicians are trained to identify orange high-voltage cabling, understand battery enclosure integrity, and recognize signs of thermal events. After an accident, a compromised battery can release toxic gases or ignite hours later. We follow manufacturer-specific safety protocols for every make and model.",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    gradient: "from-yellow-500 to-amber-600",
  },
  {
    title: "Weight Distribution & Loading",
    desc: "Electric vehicles are significantly heavier than their gas counterparts due to the battery pack mounted under the floor. A Tesla Model S weighs over 4,800 lbs; a Rivian R1T exceeds 7,000 lbs. Our flatbed trucks are rated for these weights, and our operators know how to balance the load correctly. Improper weight distribution during transport can damage suspension components and the battery enclosure.",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
    gradient: "from-emerald-500 to-teal-600",
  },
];

export default function EVTowingPage() {
  /* ─── Schema.org Structured Data ─── */
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.closebytowing.com/ev-towing#service",
        name: "Electric Vehicle Towing San Diego",
        description:
          "Specialized flatbed-only towing for Tesla, Rivian, Lucid, BMW i, and all electric vehicles in San Diego County. Trained EV technicians, high-voltage safety protocols, and 24/7 availability.",
        serviceType: [
          "Electric Vehicle Towing",
          "Tesla Towing",
          "EV Flatbed Transport",
          "EV Accident Recovery",
          "Charging Station Transport",
        ],
        provider: {
          "@type": "LocalBusiness",
          name: "CloseBy Towing",
          "@id": "https://www.closebytowing.com#organization",
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
        areaServed: {
          "@type": "City",
          name: "San Diego",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://www.closebytowing.com/ev-towing",
          servicePhone: {
            "@type": "ContactPoint",
            telephone: "+1-858-999-9293",
            contactType: "customer service",
            availableLanguage: ["English", "Spanish"],
            areaServed: "US",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "EV Towing Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Tesla Flatbed Towing",
                description:
                  "Specialized flatbed towing for all Tesla models including Model S, 3, X, Y, and Cybertruck",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "EV Accident Recovery",
                description:
                  "Safe recovery of damaged electric vehicles with high-voltage safety protocols",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Charging Station Transport",
                description:
                  "Flatbed transport of dead EVs to nearest compatible charging station",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Long-Distance EV Transport",
                description:
                  "Safe flatbed transport for electric vehicles across California",
              },
            },
          ],
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
      },
      {
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
            name: "Services",
            item: "https://www.closebytowing.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "EV Towing",
            item: "https://www.closebytowing.com/ev-towing",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_DATA.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ─── TRUST BAR ─── */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-3 px-4">
        <div className="mx-auto max-w-7xl flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-sm font-semibold">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Flatbed-Only EV Transport
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            15-25 Min Response
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            5.0 Google Rating
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            EV-Trained Technicians
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Licensed & Insured
          </div>
        </div>
      </div>

      {/* ─── HERO SECTION ─── */}
      <section className="relative bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.07]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.3) 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        {/* Green glow accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/15 backdrop-blur-md border border-emerald-400/30 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
              </span>
              <span className="text-emerald-300 font-bold text-sm tracking-wide uppercase">
                EV Towing Specialists -- San Diego
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] text-white mb-6">
              Electric Vehicle
              <br />
              Towing Experts
              <span className="block mt-3 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                San Diego 24/7
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mb-8">
              Your electric vehicle is a precision machine worth tens of thousands of
              dollars. It demands towing professionals who understand high-voltage
              systems, regenerative braking, and the absolute requirement for
              flatbed-only transport.{" "}
              <span className="font-bold text-white">
                We are San Diego&apos;s EV towing specialists.
              </span>
            </p>

            {/* Service pills */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {[
                { label: "Tesla Certified", icon: "T" },
                { label: "Flatbed Only", icon: "F" },
                { label: "High-Voltage Safe", icon: "H" },
                { label: "All EV Brands", icon: "E" },
                { label: "Charging Station Delivery", icon: "C" },
              ].map((pill) => (
                <span
                  key={pill.label}
                  className="px-4 py-2 rounded-full bg-emerald-500/10 backdrop-blur-sm border border-emerald-400/25 text-emerald-200 text-sm font-semibold flex items-center gap-2"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-500/30 flex items-center justify-center text-xs font-black text-emerald-300">
                    {pill.icon}
                  </span>
                  {pill.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="group relative px-10 py-5 rounded-2xl font-black text-xl text-white shadow-[0_20px_60px_rgba(16,185,129,0.35)] hover:shadow-[0_25px_80px_rgba(16,185,129,0.5)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {CONTACT.phone}
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}?text=I%20need%20EV%20towing%20in%20San%20Diego`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-xl bg-[#25D366] hover:brightness-110 text-white transition-all hover:scale-105 shadow-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTRO / SERVICE DESCRIPTION ─── */}
      <section className="py-16 sm:py-20 px-6 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6">
              San Diego&apos;s Trusted{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                EV Towing Service
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Electric vehicles are revolutionizing transportation, but they also
              require a fundamentally different approach to towing. A conventional
              wheel-lift or dolly tow that works fine for a gas-powered sedan can
              cause thousands of dollars in damage to an EV&apos;s drivetrain,
              battery system, and onboard electronics. At CloseBy Towing, we have
              invested in the training, equipment, and expertise to transport every
              electric vehicle safely — from a compact Nissan Leaf to a massive
              Rivian R1T.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">
                Tesla Towing Expertise
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Tesla vehicles are the most common EVs on San Diego roads, and we tow
                more Teslas than any other electric brand. We understand Transport
                Mode activation for every model, proper tie-down points that avoid
                the underbody battery enclosure, and the specific loading procedures
                that Tesla recommends in their service documentation. Whether
                it&apos;s a Model 3 with a flat tire, a Model Y after a fender
                bender, or a Cybertruck that needs long-distance transport, our
                drivers handle it with precision.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">
                Charging Station Transport
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Ran out of charge? Unlike a gas car where we can bring fuel to you, a
                dead EV needs to be physically transported to a charging station. We
                will flatbed your vehicle to the nearest compatible charger — whether
                that is a Tesla Supercharger, an Electrify America CCS station, a
                ChargePoint location, or your home Level 2 setup. Our dispatchers
                know the San Diego charging network and can recommend the fastest
                option based on your vehicle and current location.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h-.375a3 3 0 013-3h.375M20.25 14.25h.375a3 3 0 00-3-3h-.375m0 0V6.375c0-.621-.504-1.125-1.125-1.125h-2.25c-.621 0-1.125.504-1.125 1.125v4.875"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">
                Strict Flatbed-Only Policy
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We enforce a zero-tolerance flatbed-only policy for every electric
                vehicle we tow. No exceptions. No wheel-lift. No dollies. No
                conventional hook-and-chain. Every EV is loaded onto a hydraulic
                flatbed carrier with all four wheels completely off the road surface.
                This is not a preference — it is the only safe method recognized by
                Tesla, Rivian, Lucid, BMW, and every other EV manufacturer. We will
                never compromise your vehicle&apos;s safety for convenience.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">
                EV-Specific Precautions
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our technicians follow a comprehensive EV handling checklist for every
                job. This includes verifying the vehicle is powered down, engaging
                Transport Mode when available, identifying and avoiding high-voltage
                components during tie-down, using soft straps that will not scratch
                alloy wheels or body panels, and confirming proper load weight
                distribution given the heavy battery pack. After accidents, we also
                inspect for battery damage indicators before loading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY EVs NEED SPECIAL TOWING ─── */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Why EVs Need{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Special Towing
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Towing an electric vehicle the wrong way is not just risky — it can
              destroy the drivetrain, damage a battery pack worth $15,000 or more,
              and even create a fire hazard. Here is why every detail matters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PRECAUTIONS.map((item, idx) => (
              <div key={idx} className="group relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-15 blur transition duration-500`}
                />
                <div className="relative h-full p-8 bg-white rounded-2xl border border-slate-200 hover:border-transparent transition-all shadow-sm hover:shadow-xl">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                  >
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MID-PAGE CTA ─── */}
      <section className="py-16 px-6 bg-gradient-to-r from-emerald-600 to-teal-700">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Need Your EV Towed Right Now?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Our EV-trained drivers are standing by with flatbed equipment across San
            Diego County. Average response time: 15-25 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-black text-xl bg-white text-emerald-700 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call {CONTACT.phone}
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=I%20need%20EV%20towing`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-xl bg-[#25D366] hover:brightness-110 text-white transition-all hover:scale-105 shadow-lg"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ─── EV BRANDS WE TOW ─── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              EV Brands{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                We Tow
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We have hands-on experience towing every major electric vehicle brand
              on the road today. Our drivers know the specific loading procedures,
              tie-down points, and Transport Mode activation for each manufacturer.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {EV_BRANDS.map((brand, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-black text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                  {brand.icon}
                </div>
                <span className="font-semibold text-slate-800 text-sm leading-tight">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-500 text-sm">
              Don&apos;t see your EV brand listed? We tow all electric and plug-in
              hybrid vehicles. Call us at{" "}
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="font-bold text-emerald-600 hover:underline"
              >
                {CONTACT.phone}
              </a>{" "}
              for immediate assistance.
            </p>
          </div>
        </div>
      </section>

      {/* ─── HOW OUR EV TOWING WORKS ─── */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              How Our EV Towing{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Process Works
              </span>
            </h2>
            <p className="text-lg text-slate-600">
              A safe, methodical approach from your first call to final delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Call & Describe",
                desc: "Tell us your EV make, model, location, and situation. We immediately dispatch the nearest flatbed truck equipped for electric vehicles.",
              },
              {
                step: "02",
                title: "Upfront Quote",
                desc: "We provide a transparent price before dispatch. No hidden fees, no EV surcharges beyond standard flatbed rates. Price locked before we roll.",
              },
              {
                step: "03",
                title: "Safe Loading",
                desc: "Our technician activates Transport Mode (if applicable), positions the flatbed, and loads your EV using manufacturer-approved procedures and soft straps.",
              },
              {
                step: "04",
                title: "Secure Delivery",
                desc: "Your EV is transported to your chosen destination — charging station, dealership, body shop, or home — with all four wheels off the ground the entire way.",
              },
            ].map((step, idx) => (
              <div key={idx} className="relative text-center">
                {idx < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-emerald-300 to-teal-300" />
                )}
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-2xl font-black mb-6 shadow-xl shadow-emerald-500/20">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DETAILED SERVICE DESCRIPTIONS ─── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Complete EV Towing{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Service Coverage
              </span>
            </h2>
          </div>

          <div className="space-y-12">
            {/* Emergency EV Towing */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/50 border border-slate-200">
              <h3 className="text-2xl font-black text-slate-900 mb-4">
                Emergency EV Towing &mdash; 24/7 Response
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Breakdowns do not wait for business hours, and neither do we. Whether
                your Tesla lost power on the I-5 at midnight, your Rivian had a tire
                blowout on the I-15, or your BMW iX showed a critical battery warning
                on Highway 163, we respond with the same urgency and professionalism
                around the clock. Our flatbed trucks are pre-positioned across San
                Diego County to ensure the fastest possible response to any EV
                emergency. When you call, we dispatch immediately — no membership
                verification, no call center delays, just a trained EV towing
                professional heading your way within minutes.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Every emergency call follows our strict EV safety protocol. Our
                dispatcher will ask about your vehicle&apos;s condition, any warning
                lights displayed, and whether you smell anything unusual — all
                critical information for safely approaching and loading an electric
                vehicle, especially after an accident or system failure.
              </p>
            </div>

            {/* EV Accident Recovery */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/50 border border-slate-200">
              <h3 className="text-2xl font-black text-slate-900 mb-4">
                EV Accident & Collision Recovery
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Recovering a damaged electric vehicle after an accident requires
                additional safety considerations that most towing companies simply do
                not account for. A compromised high-voltage battery pack can present
                serious hazards including thermal runaway, toxic gas release, and
                delayed ignition — sometimes hours after the initial impact. Our
                technicians are trained to visually inspect the battery enclosure for
                signs of damage, identify leaking coolant from the thermal management
                system, and follow the specific shutdown procedures recommended by
                each manufacturer.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We coordinate with first responders and insurance companies to ensure
                a safe, documented recovery process. All damaged EVs are loaded using
                our flatbed equipment with extra care taken around the undercarriage
                where the battery pack is mounted. We provide detailed documentation
                and photographs for your insurance claim.
              </p>
            </div>

            {/* Long-Distance EV Transport */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/50 border border-slate-200">
              <h3 className="text-2xl font-black text-slate-900 mb-4">
                Long-Distance EV Transport Across California
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Need your electric vehicle transported from San Diego to Los Angeles,
                San Francisco, Sacramento, or anywhere in California? We provide safe
                long-distance flatbed transport for all EV brands. Unlike driving your
                EV hundreds of miles with multiple charging stops, our flatbed service
                gets your vehicle to its destination without adding a single mile to
                the odometer or a single charge cycle to the battery. This is ideal
                for moving, selling a vehicle to an out-of-area buyer, or
                transporting an EV to a specialized repair facility. We offer
                competitive flat-rate pricing for long-distance EV hauls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ─── */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              EV Towing{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                FAQ
              </span>
            </h2>
            <p className="text-lg text-slate-600">
              Answers to the most common questions about towing electric vehicles in
              San Diego.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 transition-colors open:border-emerald-300 open:bg-emerald-50/50"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                  <h3 className="font-semibold text-slate-900 pr-6">
                    {faq.question}
                  </h3>
                  <svg
                    className="w-5 h-5 text-emerald-500 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 -mt-1">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-slate-900 to-teal-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-4xl px-6 text-center space-y-10">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
            Your EV Deserves
            <span className="block mt-3 bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent">
              Expert Towing
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto">
            Do not risk thousands in damage with a conventional tow. Get
            flatbed-only, EV-safe transport from trained specialists in{" "}
            <span className="font-bold text-emerald-300">15-25 minutes</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="group px-14 py-7 rounded-2xl font-black text-2xl bg-white text-emerald-700 shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <svg
                className="w-7 h-7 text-emerald-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {CONTACT.phone}
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=I%20need%20EV%20towing`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-14 py-7 rounded-2xl font-bold text-2xl bg-[#25D366] hover:brightness-110 text-white transition-all hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
            >
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 text-white/70 text-sm pt-8">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-emerald-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              5.0 Google Rating
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-emerald-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              24/7 Available
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-emerald-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Flatbed Only for EVs
            </div>
          </div>
        </div>
      </section>

      {/* ─── CROSS-SERVICE LINKS ─── */}
      <section className="py-16 px-6 bg-emerald-50 border-t border-emerald-200">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900">
              Explore Our Other Services
            </h3>
            <p className="text-slate-600 mt-2">
              CloseBy Towing provides a full range of towing and roadside services
              across San Diego County.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "General Towing", href: "/towing" },
              { name: "Roadside Assistance", href: "/roadside-assistance" },
              { name: "Long-Distance Towing", href: "/long-distance-towing" },
              { name: "Battery Jump Start", href: "/jump-start" },
              { name: "Collision Recovery", href: "/collision-recovery" },
              { name: "Tire Change", href: "/tire-change" },
            ].map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="px-8 py-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all font-bold text-slate-900 hover:text-emerald-600"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STICKY MOBILE CTA BAR ─── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          className="flex items-center justify-center gap-3 w-full py-4 font-black text-lg transition-all min-h-[56px] bg-gradient-to-r from-emerald-500 to-teal-600 text-white"
        >
          <svg
            className="w-5 h-5 animate-pulse"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          EV Towing: {CONTACT.phone}
        </a>
      </div>

      {/* Bottom padding for sticky bar on mobile */}
      <div
        className="lg:hidden"
        style={{ height: "calc(3.5rem + env(safe-area-inset-bottom, 0px))" }}
      />

      {/* Left-side popup */}
      <LeftPopup />
    </main>
  );
}
