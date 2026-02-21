
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { areaHref, CONTACT, PRICING } from "@/lib/constants";

// SEO Metadata
export const metadata: Metadata = {
  title: "Roadside Assistance San Diego | CloseBy",
  description:
    "Fast roadside assistance in San Diego: jump starts, lockouts, tire changes, fuel delivery & more. 20-35 min response, 24/7. No membership required.",
  keywords:
    "roadside assistance San Diego, jump start service, car lockout help, flat tire change, fuel delivery, battery service, mobile mechanic, 24/7 roadside help",
  openGraph: {
    title: "Roadside Assistance San Diego | CloseBy",
    description:
      "Stuck on the road? We provide fast roadside help - jump starts, lockouts, tire changes, fuel delivery. Available 24/7.",
    url: "https://www.closebytowing.com/san-diego/roadside-assistance",
    type: "website",
  },
  alternates: {
    canonical: "https://www.closebytowing.com/san-diego/roadside-assistance",
  },
};

// Nearby areas for internal linking
const NEARBY_AREAS = [
  { name: "Pacific Beach", slug: "pacific-beach" },
  { name: "Mission Valley", slug: "mission-valley" },
  { name: "Hillcrest", slug: "hillcrest" },
  { name: "Clairemont", slug: "clairemont" },
  { name: "Mira Mesa", slug: "mira-mesa" },
  { name: "University City", slug: "university-city" },
];

// Roadside services offered
const ROADSIDE_SERVICES = [
  {
    name: "Battery Jump Start",
    slug: "/jump-start",
    description: "Dead battery? We'll get you running in minutes with our professional jump start service.",
    price: `$${PRICING.jumpStart.standard}`,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "from-yellow-400 to-orange-500",
    features: ["All vehicle types", "Instant diagnosis", "Battery testing included"],
  },
  {
    name: "Car Lockout Service",
    slug: "/lockout",
    description: "Locked your keys in the car? Our experts unlock all vehicle types without damage.",
    price: `$${PRICING.lockout.standard}`,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    color: "from-blue-400 to-indigo-500",
    features: ["No damage to vehicle", "All lock types", "Smart key capable"],
  },
  {
    name: "Flat Tire Change",
    slug: "/tire-change",
    description: "We'll swap your flat for your spare, or provide temporary repair to get you moving.",
    price: `$${PRICING.tireChange.base}`,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "from-slate-500 to-slate-700",
    features: ["Spare tire mounting", "Lug nut torque check", "Tire inspection"],
  },
  {
    name: "Fuel Delivery",
    slug: "/gas-delivery",
    description: "Ran out of gas? We'll bring fuel right to your location - regular, premium, or diesel.",
    price: `$${PRICING.fuelDelivery.light.min}+`,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: "from-green-400 to-emerald-500",
    features: ["Regular & Premium", "Diesel available", "2+ gallon delivery"],
  },
];

// Related towing services
const RELATED_SERVICES = [
  { name: "Emergency Towing", slug: "emergency-towing", icon: "🚨" },
  { name: "Flatbed Towing", slug: "flatbed-towing", icon: "🛻" },
  { name: "Accident Towing", slug: "accident-towing", icon: "💥" },
  { name: "Local Towing", slug: "towing", icon: "🚗" },
];

// FAQ Data
const FAQ_DATA = [
  {
    question: "Do I need a membership for your roadside assistance?",
    answer:
      "No membership required! Unlike AAA or motor club services, we provide on-demand roadside assistance to anyone who calls. You only pay for the service you need, when you need it. No annual fees, no membership cards, no waiting periods.",
  },
  {
    question: "How quickly can you get to me?",
    answer:
      "Our average response time throughout San Diego is 20-35 minutes. Response times vary based on your location, traffic conditions, and time of day, but we always dispatch the closest available technician to minimize your wait time.",
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
      "Absolutely! We operate 24 hours a day, 7 days a week, 365 days a year. Whether it's 2 AM on a Tuesday or noon on Christmas Day, we're here to help. Roadside emergencies don't follow business hours, and neither do we.",
  },
];

export default function RoadsideAssistancePage() {
  return (
    <main className="bg-white">
      {/* Hero Section - Friendly/Helpful Green Theme */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-teal-500/20 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Helper badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-emerald-200 text-sm font-medium">No Membership Required</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Roadside Assistance
                <span className="block text-emerald-300 mt-2">San Diego</span>
              </h1>

              <p className="mt-6 text-xl text-emerald-100 leading-relaxed max-w-xl">
                Stranded? We&apos;ve got your back. From dead batteries to flat tires, locked keys to empty tanks -
                our <span className="text-emerald-300 font-semibold">20-35 minute response</span> gets you back on the road fast.
              </p>

              {/* Service quick links */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { icon: "⚡", label: "Jump Starts" },
                  { icon: "🔑", label: "Lockouts" },
                  { icon: "🛞", label: "Tire Changes" },
                  { icon: "⛽", label: "Fuel Delivery" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-emerald-500/30"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now: {CONTACT.phone}
                </a>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/30"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Text Us on WhatsApp
                </a>
              </div>
            </div>

            {/* Right - Image + pricing card */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-emerald-900/50 relative">
                  <Image
                    src="/hero/home-hero.webp"
                    alt="Roadside assistance technician helping a stranded driver in San Diego"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 to-transparent" />
                </div>

                {/* Pricing preview badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white rounded-xl p-4 shadow-xl">
                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <span className="text-emerald-500">💰</span> Transparent Pricing
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-slate-50 rounded-lg px-3 py-2">
                        <span className="text-slate-600">Jump Start:</span>
                        <span className="font-bold text-slate-900 ml-1">${PRICING.jumpStart.standard}</span>
                      </div>
                      <div className="bg-slate-50 rounded-lg px-3 py-2">
                        <span className="text-slate-600">Lockout:</span>
                        <span className="font-bold text-slate-900 ml-1">${PRICING.lockout.standard}</span>
                      </div>
                      <div className="bg-slate-50 rounded-lg px-3 py-2">
                        <span className="text-slate-600">Tire Change:</span>
                        <span className="font-bold text-slate-900 ml-1">${PRICING.tireChange.base}</span>
                      </div>
                      <div className="bg-slate-50 rounded-lg px-3 py-2">
                        <span className="text-slate-600">Fuel Delivery:</span>
                        <span className="font-bold text-slate-900 ml-1">${PRICING.fuelDelivery.light.min}+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Our Roadside <span className="text-emerald-600">Services</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              From minor inconveniences to emergency situations, we provide fast, professional help to get you back on the road.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ROADSIDE_SERVICES.map((service, index) => (
              <Link
                key={index}
                href={service.slug}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-100 hover:border-emerald-200 overflow-hidden relative"
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`} />

                <div className="flex gap-5">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <h3 className="font-bold text-xl text-slate-900 group-hover:text-emerald-600 transition-colors">
                        {service.name}
                      </h3>
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-bold text-sm">
                        {service.price}
                      </span>
                    </div>
                    <p className="mt-2 text-slate-600">{service.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.features.map((feature, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-sm text-slate-500"
                        >
                          <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Why San Diego Drivers <span className="text-emerald-600">Choose CloseBy</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Skip the membership fees and long wait times. We provide fast, affordable roadside help when you need it most.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  {
                    icon: "🚫",
                    title: "No Membership Required",
                    description: "Pay only when you need help. No annual fees, no contracts, no hidden costs.",
                  },
                  {
                    icon: "⚡",
                    title: "Faster Than AAA",
                    description: "20-35 minute average response. We dispatch immediately - no membership verification delays.",
                  },
                  {
                    icon: "💵",
                    title: "Upfront Pricing",
                    description: "Know exactly what you'll pay before we arrive. No surprises, no hidden fees.",
                  },
                  {
                    icon: "🏆",
                    title: "Professional Technicians",
                    description: "Our team is trained to handle all vehicle types and common roadside emergencies.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-2xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison card */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="font-bold text-xl text-center mb-6">CloseBy vs. AAA Membership</h3>

              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center pb-4 border-b border-slate-200">
                  <div />
                  <div className="font-bold text-emerald-600">CloseBy</div>
                  <div className="font-bold text-slate-400">AAA</div>
                </div>

                {[
                  { feature: "Annual Fee", closeby: "$0", aaa: "$56-164/yr" },
                  { feature: "Wait Time", closeby: "20-35 min", aaa: "45-90 min" },
                  { feature: "Membership Required", closeby: "No", aaa: "Yes" },
                  { feature: "Coverage Limits", closeby: "None", aaa: "4 calls/yr" },
                  { feature: "Service Area", closeby: "San Diego", aaa: "Nationwide" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 gap-4 text-center py-3 border-b border-slate-100 last:border-0">
                    <div className="text-left text-slate-600">{row.feature}</div>
                    <div className="font-semibold text-emerald-600">{row.closeby}</div>
                    <div className="text-slate-400">{row.aaa}</div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-center text-sm text-slate-500">
                *Prices accurate as of 2024. AAA pricing varies by region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 sm:py-24 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Roadside Help Across <span className="text-emerald-300">San Diego</span>
            </h2>
            <p className="mt-4 text-lg text-emerald-200 max-w-2xl mx-auto">
              Stranded anywhere in San Diego County? We&apos;ll come to you - neighborhoods, freeways, parking lots, anywhere.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {NEARBY_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={areaHref(area.slug)}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/50 transition-colors">
                  <svg className="w-5 h-5 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-semibold text-white group-hover:text-emerald-300 transition-colors">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-center text-emerald-200">
            Not listed?{" "}
            <a href={`tel:${CONTACT.phoneRaw}`} className="text-emerald-300 font-semibold hover:underline">
              Call us
            </a>{" "}
            - we cover ALL of San Diego County!
          </p>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Need a <span className="text-emerald-600">Tow Instead?</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              If your vehicle needs more than roadside assistance, we&apos;ve got you covered with our full range of towing services.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RELATED_SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/san-diego/${service.slug}`}
                className="group bg-slate-50 hover:bg-emerald-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-emerald-200"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-slate-500 mt-1">San Diego County</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Roadside Assistance <span className="text-emerald-600">FAQ</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Common questions about our roadside services in San Diego.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                  <h3 className="font-semibold text-slate-900 pr-8">{faq.question}</h3>
                  <svg
                    className="w-5 h-5 text-emerald-500 flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-teal-500/20 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 mb-6">
            <svg className="w-4 h-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-emerald-200 text-sm font-medium">Help is Minutes Away</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold">
            Stranded in <span className="text-emerald-300">San Diego?</span>
          </h2>

          <p className="mt-6 text-xl text-emerald-100 max-w-2xl mx-auto">
            Don&apos;t wait. We&apos;ll have a professional technician at your location in 20-35 minutes. Jump starts, lockouts, flat tires, fuel delivery - we handle it all.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg shadow-emerald-500/30"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: {CONTACT.phone}
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all border border-white/30"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-emerald-200">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Trusted by San Diego Drivers</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>24/7 Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
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
            },
            {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Roadside Assistance",
                  "item": "https://www.closebytowing.com/san-diego/roadside-assistance"
            }
      ]
}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.closebytowing.com/san-diego/roadside-assistance",
            name: "CloseBy Towing - Roadside Assistance San Diego",
            description:
              "Fast roadside assistance in San Diego: jump starts, lockouts, tire changes, fuel delivery. 20-35 min response, 24/7. No membership required.",
            url: "https://www.closebytowing.com/san-diego/roadside-assistance",
            telephone: CONTACT.phone,
            areaServed: {
              "@type": "City",
              name: "San Diego",
              "@id": "https://www.wikidata.org/wiki/Q16552",
            },
            serviceType: "Roadside Assistance",
            priceRange: "$",
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
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />
    </main>
  );
}
