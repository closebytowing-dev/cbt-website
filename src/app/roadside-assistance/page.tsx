"use client";

import Link from "next/link";
import Image from "next/image";
import { CONTACT, PRICING } from "@/lib/constants";
import LeftPopup from "@/components/LeftPopup";

const BRAND = "#1e1e4a";

// The 5 core roadside services
const ROADSIDE_SERVICES = [
  {
    name: "Battery Jump Start",
    slug: "/jump-start",
    description: "Dead battery? We'll diagnose the issue and get your engine running in minutes. All vehicle types including hybrids.",
    price: `$${PRICING.jumpStart.standard}`,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: "from-yellow-400 to-amber-500",
    features: ["All vehicle types", "Battery testing included", "Hybrid & EV capable"],
  },
  {
    name: "Flat Tire Change",
    slug: "/tire-change",
    description: "We'll swap your flat for your spare tire quickly and safely. Lug nut torque check and tire inspection included.",
    price: `$${PRICING.tireChange.base}`,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    color: "from-slate-500 to-slate-700",
    features: ["Spare tire mounting", "Lug nut torque check", "Tire inspection"],
  },
  {
    name: "Fuel Delivery",
    slug: "/gas-delivery",
    description: "Ran out of gas? We'll bring fuel directly to your location — regular, premium, or diesel. Minimum 2 gallons.",
    price: `$${PRICING.fuelDelivery.light.min}+`,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    color: "from-orange-400 to-red-500",
    features: ["Regular & Premium", "Diesel available", "2+ gallon delivery"],
  },
  {
    name: "Car Lockout Service",
    slug: "/lockout",
    description: "Keys locked in the car? Our technicians unlock all makes and models with zero damage guaranteed.",
    price: `$${PRICING.lockout.standard}`,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    color: "from-blue-400 to-indigo-500",
    features: ["No damage to vehicle", "All lock types", "Smart key capable"],
  },
  {
    name: "Winch-Out Recovery",
    slug: "/winch-out",
    description: "Stuck in mud, sand, a ditch, or off-road? Our heavy-duty winches will extract your vehicle safely.",
    price: `$${PRICING.winchOut.light}+`,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-600",
    features: ["Heavy-duty winches", "Off-road recovery", "All vehicle sizes"],
  },
];

// How it works steps
const STEPS = [
  {
    num: "01",
    title: "Call or Text Us",
    desc: "Tell us your location and what's wrong. We'll dispatch the nearest technician immediately.",
  },
  {
    num: "02",
    title: "We Arrive Fast",
    desc: "Our average response time is 15-25 minutes across San Diego County. Track your tech en route.",
  },
  {
    num: "03",
    title: "Problem Solved",
    desc: "Our trained technician handles your issue on-site. Pay the quoted price — no hidden fees, ever.",
  },
];

// FAQ
const FAQ_DATA = [
  {
    question: "Do I need a membership for your roadside assistance?",
    answer:
      "No membership required! Unlike AAA or motor club services, we provide on-demand roadside assistance to anyone who calls. You only pay for the service you need, when you need it. No annual fees, no membership cards, no waiting periods.",
  },
  {
    question: "How quickly can you get to me?",
    answer:
      "Our average response time throughout San Diego County is 15-25 minutes. We always dispatch the closest available technician to minimize your wait time. We operate 24/7, including holidays.",
  },
  {
    question: "What if I don't know what's wrong with my car?",
    answer:
      "No problem! Our technicians are trained to diagnose common roadside issues. Whether it's a dead battery, electrical problem, or mechanical issue, we'll assess the situation when we arrive. If we can fix it on the spot, we will. If you need a tow, we've got you covered.",
  },
  {
    question: "Can you unlock any type of car?",
    answer:
      "Yes, our technicians are equipped to unlock virtually all makes and models, including vehicles with smart keys, push-button start, and advanced security systems. We use professional tools that won't damage your vehicle or void warranties.",
  },
  {
    question: "What type of fuel do you deliver?",
    answer:
      "We deliver all common fuel types: regular unleaded (87), mid-grade (89), premium (91/93), and diesel. Just let us know what your vehicle needs when you call, and we'll bring the right fuel. Minimum delivery is typically 2 gallons.",
  },
  {
    question: "Is your roadside assistance available 24/7?",
    answer:
      "Absolutely! We operate 24 hours a day, 7 days a week, 365 days a year. Whether it's 2 AM on a Tuesday or noon on Christmas Day, we're here to help.",
  },
  {
    question: "How much does roadside assistance cost?",
    answer:
      `Pricing depends on the service: Jump starts start at $${PRICING.jumpStart.standard}, lockouts at $${PRICING.lockout.standard}, tire changes at $${PRICING.tireChange.base}, and fuel delivery from $${PRICING.fuelDelivery.light.min}. All prices are quoted upfront before we start work — no surprises.`,
  },
];

export default function RoadsideAssistancePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.closebytowing.com/roadside-assistance#service",
        name: "CloseBy Towing - Roadside Assistance",
        description:
          "24/7 on-demand roadside assistance in San Diego County. Jump starts, tire changes, fuel delivery, lockout service, and winch-out recovery with 15-25 minute response.",
        serviceType: [
          "Roadside Assistance",
          "Jump Start Service",
          "Tire Change Service",
          "Fuel Delivery",
          "Lockout Service",
          "Winch-Out Recovery",
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
          priceRange: "$",
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
          serviceUrl: "https://www.closebytowing.com/roadside-assistance",
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
          name: "Roadside Assistance Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Battery Jump Start" },
              priceCurrency: "USD",
              price: String(PRICING.jumpStart.standard),
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Flat Tire Change" },
              priceCurrency: "USD",
              price: String(PRICING.tireChange.base),
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Fuel Delivery" },
              priceCurrency: "USD",
              price: String(PRICING.fuelDelivery.light.min),
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Car Lockout Service" },
              priceCurrency: "USD",
              price: String(PRICING.lockout.standard),
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Winch-Out Recovery" },
              priceCurrency: "USD",
              price: String(PRICING.winchOut.light),
            },
          ],
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.closebytowing.com" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.closebytowing.com/services" },
          { "@type": "ListItem", position: 3, name: "Roadside Assistance", item: "https://www.closebytowing.com/roadside-assistance" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* TRUST BAR */}
      <div className="bg-gradient-to-r from-sky-600 to-indigo-700 text-white py-3 px-4">
        <div className="mx-auto max-w-7xl flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-sm font-semibold">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            15-25 Min Response
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            No Membership Needed
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            5.0 Google Rating
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Licensed & Insured
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-sky-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.12) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-14 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Copy */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-200">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500" />
                </span>
                <span className="text-sky-800 font-bold text-sm">STRANDED? HELP IS ON THE WAY</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05]" style={{ color: BRAND }}>
                Roadside Assistance
                <span className="block mt-2 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  San Diego 24/7
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed">
                Jump starts, flat tires, lockouts, fuel delivery & winch-outs.
                <span className="font-bold text-slate-900"> No membership. No hidden fees.</span>
              </p>

              {/* Service pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Jump Starts", color: "bg-yellow-50 border-yellow-200 text-yellow-800" },
                  { label: "Tire Changes", color: "bg-slate-50 border-slate-200 text-slate-800" },
                  { label: "Fuel Delivery", color: "bg-orange-50 border-orange-200 text-orange-800" },
                  { label: "Lockouts", color: "bg-blue-50 border-blue-200 text-blue-800" },
                  { label: "Winch-Outs", color: "bg-emerald-50 border-emerald-200 text-emerald-800" },
                ].map((pill) => (
                  <span key={pill.label} className={`px-4 py-2 rounded-full border text-sm font-semibold ${pill.color}`}>
                    {pill.label}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="group relative px-10 py-6 rounded-2xl font-black text-xl text-white shadow-[0_20px_60px_rgba(14,165,233,0.35)] hover:shadow-[0_20px_80px_rgba(14,165,233,0.5)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 to-indigo-600"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {CONTACT.phone}
                </a>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}?text=I%20need%20roadside%20assistance`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-10 py-6 rounded-2xl font-bold text-xl bg-[#25D366] hover:brightness-110 text-white transition-all hover:scale-105 shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right: Pricing card */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-black text-xl text-slate-900">Transparent Pricing</h2>
                    <p className="text-slate-500 text-sm">No membership fees. Pay only when you need us.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { service: "Jump Start", price: `$${PRICING.jumpStart.standard}`, icon: "⚡" },
                    { service: "Tire Change", price: `$${PRICING.tireChange.base}`, icon: "🛞" },
                    { service: "Fuel Delivery", price: `from $${PRICING.fuelDelivery.light.min}`, icon: "⛽" },
                    { service: "Lockout", price: `$${PRICING.lockout.standard}`, icon: "🔑" },
                    { service: "Winch-Out", price: `from $${PRICING.winchOut.light}`, icon: "🪝" },
                  ].map((row) => (
                    <div key={row.service} className="flex items-center justify-between py-3 px-4 bg-slate-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{row.icon}</span>
                        <span className="font-semibold text-slate-800">{row.service}</span>
                      </div>
                      <span className="font-black text-sky-600 text-lg">{row.price}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-sky-50 rounded-xl p-4 border border-sky-100">
                  <p className="text-sm text-sky-800 font-medium text-center">
                    Prices quoted upfront before work begins. No hidden fees.
                  </p>
                </div>
              </div>

              {/* Comparison snippet */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-4">CloseBy vs. AAA</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { feature: "Annual fee", us: "$0", them: "$56-164/yr" },
                    { feature: "Response time", us: "15-25 min", them: "45-90 min" },
                    { feature: "Membership", us: "Not required", them: "Required" },
                    { feature: "Call limits", us: "Unlimited", them: "4/year" },
                  ].map((row) => (
                    <div key={row.feature} className="grid grid-cols-3 gap-2 items-center">
                      <span className="text-slate-400">{row.feature}</span>
                      <span className="font-bold text-emerald-400 text-center">{row.us}</span>
                      <span className="text-slate-500 text-center">{row.them}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              5 Services, <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">One Call</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Whatever roadside emergency you&apos;re facing, we&apos;ve got the right solution and the closest technician.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROADSIDE_SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={service.slug}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-100 hover:border-sky-200 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`} />

                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 group-hover:text-sky-600 transition-colors">
                      {service.name}
                    </h3>
                    <span className="text-sky-600 font-black text-lg">{service.price}</span>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>

                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {service.features.map((feature) => (
                    <span key={feature} className="inline-flex items-center gap-1 text-sm text-slate-500">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              How It <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-lg text-slate-600">Help in 3 simple steps. No signup, no app download required.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((step, idx) => (
              <div key={idx} className="relative text-center">
                {idx < 2 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-sky-300 to-indigo-300" />
                )}
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 text-white text-2xl font-black mb-6 shadow-xl shadow-sky-500/20">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Why San Diego Drivers <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">Choose CloseBy</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "No Membership Required",
                desc: "Pay only when you need us. No annual fees, no contracts, no membership cards. On-demand help for anyone.",
                icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                gradient: "from-sky-500 to-blue-600",
              },
              {
                title: "Faster Than AAA",
                desc: "15-25 minute average response. We dispatch immediately — no membership verification, no call center runaround.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                gradient: "from-yellow-500 to-amber-600",
              },
              {
                title: "Upfront Pricing",
                desc: "Know exactly what you'll pay before we start. Price quoted on the phone, no surprises when we arrive.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                gradient: "from-emerald-500 to-teal-600",
              },
              {
                title: "All Vehicle Types",
                desc: "Cars, trucks, SUVs, vans, motorcycles, hybrids, EVs — we handle them all. No vehicle is too old or too new.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                gradient: "from-purple-500 to-indigo-600",
              },
              {
                title: "24/7 Emergency Service",
                desc: "3 AM flat tire? Christmas Day lockout? We're here every hour of every day, including all holidays.",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                gradient: "from-red-500 to-orange-600",
              },
              {
                title: "Licensed & Insured",
                desc: "Fully licensed, insured, and background-checked technicians. Your safety and vehicle are in professional hands.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                gradient: "from-slate-500 to-slate-700",
              },
            ].map((feature, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-15 blur transition duration-500`} />
                <div className="relative h-full p-8 bg-white rounded-2xl border border-slate-200 hover:border-transparent transition-all shadow-sm hover:shadow-xl">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 transition-colors open:border-sky-300 open:bg-sky-50/50"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                  <h3 className="font-semibold text-slate-900 pr-6">{faq.question}</h3>
                  <svg className="w-5 h-5 text-sky-500 flex-shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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

      {/* FINAL CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-indigo-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-600/20 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-4xl px-4 text-center space-y-10">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">
            Stranded?
            <span className="block mt-3 bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">
              Help Is 15-25 Minutes Away
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto">
            Jump starts, lockouts, tire changes, fuel delivery, winch-outs &mdash; one call handles it all.{" "}
            <span className="font-bold text-sky-300">No membership needed.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="group px-14 py-7 rounded-2xl font-black text-2xl bg-white text-slate-900 shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <svg className="w-7 h-7 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {CONTACT.phone}
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=I%20need%20roadside%20assistance`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-14 py-7 rounded-2xl font-bold text-2xl bg-[#25D366] hover:brightness-110 text-white transition-all hover:scale-105 flex items-center justify-center gap-3 shadow-lg"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 text-white/70 text-sm pt-8">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              5.0 Google Rating
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              24/7 Available
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 px-4 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900">Need a Tow Instead?</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Towing", href: "/towing" },
              { name: "Collision Recovery", href: "/collision-recovery" },
              { name: "Heavy Duty Towing", href: "/heavyduty" },
            ].map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="px-8 py-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-sky-500 hover:shadow-lg transition-all font-bold text-slate-900 hover:text-sky-600"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LeftPopup />
    </main>
  );
}
