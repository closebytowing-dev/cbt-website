
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { areaHref, CONTACT } from "@/lib/constants";

// SEO Metadata
export const metadata: Metadata = {
  title: "Flatbed Towing San Diego | 24/7 | CloseBy",
  description:
    "Premium flatbed towing in San Diego for luxury cars, AWD vehicles, lowered cars & motorcycles. Zero-damage guarantee. 24/7 service with 15-25 min response.",
  keywords:
    "flatbed towing San Diego, flatbed tow truck, luxury car towing, exotic car transport, AWD towing, motorcycle towing, lowered car towing, safe vehicle transport",
  openGraph: {
    title: "Flatbed Towing San Diego | 24/7 | CloseBy",
    description:
      "Premium flatbed towing for luxury, exotic, AWD & specialty vehicles. Zero-damage transport guaranteed. 24/7 availability.",
    url: "https://www.closebytowing.com/san-diego/flatbed-towing",
    type: "website",
  },
  alternates: {
    canonical: "https://www.closebytowing.com/san-diego/flatbed-towing",
  },
};

// Nearby areas for internal linking
const NEARBY_AREAS = [
  { name: "La Jolla", slug: "la-jolla" },
  { name: "Mission Valley", slug: "mission-valley" },
  { name: "Hillcrest", slug: "hillcrest" },
  { name: "Pacific Beach", slug: "pacific-beach" },
  { name: "Kearny Mesa", slug: "kearny-mesa" },
  { name: "University City", slug: "university-city" },
];

// Related services
const RELATED_SERVICES = [
  { name: "Emergency Towing", slug: "emergency-towing", icon: "🚨" },
  { name: "Accident Towing", slug: "accident-towing", icon: "💥" },
  { name: "Local Towing", slug: "towing", icon: "🚗" },
  { name: "Roadside Assistance", slug: "roadside-assistance", icon: "🔧" },
];

// Vehicle types we specialize in
const VEHICLE_TYPES = [
  {
    name: "Luxury & Exotic Cars",
    description: "Porsche, Ferrari, Lamborghini, Bentley, Rolls-Royce & more",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-amber-500 to-yellow-600",
  },
  {
    name: "AWD & 4WD Vehicles",
    description: "Tesla, Subaru, Audi Quattro, BMW xDrive, Mercedes 4MATIC",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Lowered & Modified Cars",
    description: "Slammed vehicles, air suspension, wide body kits, show cars",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    ),
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "Motorcycles & Sport Bikes",
    description: "Harley-Davidson, Ducati, BMW, sport bikes, custom choppers",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Classic & Vintage Cars",
    description: "Muscle cars, antiques, collectibles, barn finds, restorations",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Electric Vehicles",
    description: "Tesla, Rivian, Lucid, BMW i-Series, electric conversions",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "from-green-500 to-emerald-600",
  },
];

// FAQ Data
const FAQ_DATA = [
  {
    question: "Why should I choose flatbed towing over traditional towing?",
    answer:
      "Flatbed towing keeps all four wheels off the ground, eliminating road contact and preventing transmission, drivetrain, and tire damage. It's the safest method for luxury vehicles, AWD/4WD cars, lowered vehicles, and any car where you want zero-risk transport. Traditional tow trucks drag two wheels on the ground, which can damage AWD systems and low-clearance vehicles.",
  },
  {
    question: "Can you tow my lowered car without damage?",
    answer:
      "Absolutely! Our flatbed trucks feature low-angle ramps and adjustable hydraulics specifically designed for lowered vehicles. We can safely load cars with as little as 2 inches of ground clearance. Our operators are trained in proper loading techniques for slammed cars, air suspension vehicles, and cars with wide body kits.",
  },
  {
    question: "Is flatbed towing safe for Tesla and electric vehicles?",
    answer:
      "Yes, flatbed is the ONLY recommended towing method for Tesla and most EVs. Electric vehicles have complex drivetrain systems that can be damaged if wheels are dragged. Our operators are trained in EV-specific protocols, including proper tie-down points and battery safety procedures.",
  },
  {
    question: "How much does flatbed towing cost in San Diego?",
    answer:
      "Flatbed towing starts at $95 for local service within San Diego, plus $5 per mile for longer distances. Exact pricing depends on your location, destination, and any special handling requirements. We provide upfront quotes with no hidden fees. Call us for an instant price.",
  },
  {
    question: "Can you transport my car to a specific mechanic or dealership?",
    answer:
      "Yes! We transport vehicles anywhere in San Diego County and beyond. Whether it's your preferred mechanic, a dealership service center, an auction house, or a car show venue, we'll deliver your vehicle safely to any destination you specify.",
  },
  {
    question: "Do you offer enclosed transport for high-value vehicles?",
    answer:
      "While our flatbed trucks provide excellent protection, we can arrange enclosed transport for extremely valuable vehicles like rare exotics, concours cars, or vehicles requiring climate-controlled transport. Contact us for enclosed transport availability and pricing.",
  },
];

export default function FlatbedTowingPage() {
  return (
    <main className="bg-white">
      {/* Hero Section - Premium/Elegant Theme */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Decorative gold accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Premium badge */}
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-amber-300 text-sm font-medium">Premium Vehicle Transport</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Flatbed Towing
                <span className="block text-amber-400 mt-2">San Diego</span>
              </h1>

              <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-xl">
                The safest way to transport your vehicle. Our flatbed trucks keep all four wheels off
                the ground, providing <span className="text-amber-400 font-semibold">zero-damage transport</span> for
                luxury cars, AWD vehicles, lowered cars, and motorcycles.
              </p>

              {/* Key benefits */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-slate-200 font-medium">Zero Damage Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-slate-200 font-medium">15-25 Min Response</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-slate-200 font-medium">All San Diego County</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-slate-200 font-medium">Upfront Pricing</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
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
                  className="inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-slate-600"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                <div className="aspect-[4/3] bg-slate-800 relative">
                  <Image
                    src="/hero/home-hero.webp"
                    alt="Professional flatbed tow truck for safe vehicle transport in San Diego"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>
                {/* Badge overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-slate-900/90 backdrop-blur-sm rounded-xl p-4 border border-amber-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-amber-400 font-bold">Fully Insured Transport</p>
                        <p className="text-slate-400 text-sm">Your vehicle is protected from pickup to delivery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Flatbed Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Why Choose <span className="text-amber-500">Flatbed Towing?</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Not all tow trucks are created equal. Flatbed towing provides superior protection for your vehicle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Flatbed Advantages */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Flatbed Towing</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "All 4 wheels off the ground - zero road contact",
                  "No transmission or drivetrain stress",
                  "Safe for AWD, 4WD & electric vehicles",
                  "Perfect for lowered & modified cars",
                  "Protects expensive tires & wheels",
                  "No mileage added to odometer",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Traditional Towing Risks */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-500">Traditional Wheel-Lift Towing</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "2 wheels dragging on the road",
                  "Can damage AWD/4WD transmissions",
                  "Risk of scraping lowered vehicles",
                  "Tire wear during transport",
                  "Not suitable for many modern cars",
                  "Adds miles to your vehicle",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-slate-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Vehicles We <span className="text-amber-500">Specialize In</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              From exotic supercars to lowered show cars, we have the expertise and equipment to handle your vehicle with care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VEHICLE_TYPES.map((vehicle, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden"
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${vehicle.color}`} />

                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${vehicle.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {vehicle.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{vehicle.name}</h3>
                <p className="text-slate-600">{vehicle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Our <span className="text-amber-400">Safe Transport</span> Process
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Every flatbed transport follows our meticulous 5-step process to ensure your vehicle arrives in perfect condition.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Vehicle Assessment",
                description: "We document your vehicle's condition before loading",
              },
              {
                step: "02",
                title: "Careful Loading",
                description: "Low-angle ramp approach prevents scraping",
              },
              {
                step: "03",
                title: "Secure Strapping",
                description: "8-point tie-down system holds vehicle firm",
              },
              {
                step: "04",
                title: "Safe Transport",
                description: "Professional driving, no sudden stops",
              },
              {
                step: "05",
                title: "Gentle Unloading",
                description: "Reverse process at destination with care",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center mb-4">
                  <span className="text-amber-400 font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Flatbed Towing Across <span className="text-amber-500">San Diego</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Our flatbed trucks service all of San Diego County. Select your area for local service information.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {NEARBY_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={areaHref(area.slug)}
                className="group bg-white rounded-xl p-4 text-center shadow hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                  <svg className="w-5 h-5 text-amber-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-semibold text-slate-700 group-hover:text-amber-600 transition-colors">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-center text-slate-600">
            Don&apos;t see your area?{" "}
            <a href={`tel:${CONTACT.phoneRaw}`} className="text-amber-600 font-semibold hover:underline">
              Call us
            </a>{" "}
            - we cover all of San Diego County!
          </p>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Related <span className="text-amber-500">Services</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              CloseBy Towing offers a full range of towing and roadside services across San Diego.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RELATED_SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/san-diego/${service.slug}`}
                className="group bg-slate-50 hover:bg-amber-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-amber-200"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
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
              Frequently Asked <span className="text-amber-500">Questions</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Everything you need to know about flatbed towing in San Diego.
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
                    className="w-5 h-5 text-amber-500 flex-shrink-0 transition-transform group-open:rotate-180"
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
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-amber-500 blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-amber-500 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span className="text-amber-300 text-sm font-medium">Premium Vehicle Protection</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold">
            Need Safe <span className="text-amber-400">Flatbed Transport?</span>
          </h2>

          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
            Protect your investment with professional flatbed towing. We respond in 15-25 minutes, 24/7, with upfront pricing and zero-damage guarantee.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
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
              className="inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all border border-slate-600"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
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
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
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
                  "name": "Flatbed Towing",
                  "item": "https://www.closebytowing.com/san-diego/flatbed-towing"
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
            "@id": "https://www.closebytowing.com/san-diego/flatbed-towing",
            name: "CloseBy Towing - Flatbed Towing San Diego",
            description:
              "Premium flatbed towing services in San Diego for luxury cars, AWD vehicles, lowered cars, motorcycles, and specialty vehicles. Zero-damage transport guaranteed.",
            url: "https://www.closebytowing.com/san-diego/flatbed-towing",
            telephone: CONTACT.phone,
            areaServed: {
              "@type": "City",
              name: "San Diego",
              "@id": "https://www.wikidata.org/wiki/Q16552",
            },
            serviceType: "Flatbed Towing",
            priceRange: "$$",
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
