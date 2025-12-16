
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT, STATS } from "@/lib/constants";

// SEO Metadata
export const metadata: Metadata = {
  title: "Towing in Santee San Diego | 24/7 East County Service | CloseBy Towing",
  description:
    "Fast towing & roadside assistance in Santee. We cover Santee Lakes, Trolley Square, Mission Gorge & SR-52/SR-125 corridors. 20-40 min East County response.",
  keywords:
    "towing Santee, Santee tow truck, East County towing, roadside assistance Santee, SR-52 towing, tow truck near me Santee, Trolley Square towing",
  openGraph: {
    title: "Towing in Santee San Diego | 24/7 East County Service | CloseBy Towing",
    description:
      "Local towing experts serving Santee 24/7. From Trolley Square to Santee Lakes, we're your East County towing solution.",
    url: "https://www.closebytowing.com/san-diego/santee",
    type: "website",
  },
  alternates: {
    canonical: "https://www.closebytowing.com/san-diego/santee",
  },
};

// Santee specific landmarks
const LOCAL_LANDMARKS = [
  {
    name: "Trolley Square",
    description: "Fast service to Target, Walmart & major retail parking areas",
    icon: "🛒",
  },
  {
    name: "Santee Lakes",
    description: "Recreation area, camping & fishing spot assistance",
    icon: "🎣",
  },
  {
    name: "Town Center Community Park",
    description: "Family park, trails & community event support",
    icon: "🌳",
  },
  {
    name: "Santee Trolley Station",
    description: "Green Line transit hub & park-and-ride service",
    icon: "🚇",
  },
  {
    name: "Mission Gorge Road",
    description: "Main commercial corridor with shopping & dining",
    icon: "🏪",
  },
  {
    name: "Carlton Oaks Golf Course",
    description: "Golf course & residential community access",
    icon: "⛳",
  },
];

// Nearby neighborhoods
const NEARBY_AREAS = [
  { name: "El Cajon", slug: "el-cajon" },
  { name: "Lakeside", slug: "lakeside" },
  { name: "La Mesa", slug: "la-mesa" },
  { name: "Mission Valley", slug: "mission-valley" },
  { name: "Allied Gardens", slug: "allied-gardens" },
  { name: "San Carlos", slug: "san-carlos" },
];

// Services offered
const SERVICES = [
  { name: "General Towing", slug: "towing", icon: "🚗" },
  { name: "Emergency Towing", slug: "emergency-towing", icon: "🚨" },
  { name: "Flatbed Towing", slug: "flatbed-towing", icon: "🛻" },
  { name: "Accident Towing", slug: "accident-towing", icon: "💥" },
  { name: "Roadside Assistance", slug: "roadside-assistance", icon: "🔧" },
];

// FAQ Data specific to Santee
const FAQ_DATA = [
  {
    question: "How quickly can you get to Trolley Square in Santee?",
    answer:
      "We typically arrive at Trolley Square within 20-35 minutes. Our drivers know the shopping center well, including Target, Walmart, and all the surrounding retail parking areas. We handle everything from dead batteries to towing from the parking structures.",
  },
  {
    question: "Do you service SR-52 and SR-125 in the Santee area?",
    answer:
      "Yes, we provide rapid freeway response on SR-52 and SR-125 through Santee. These East County highways can be busy, especially during rush hour. Whether you're stuck on the shoulder, at an exit, or on the main lanes, we'll reach you quickly and safely remove your vehicle.",
  },
  {
    question: "Can you help with vehicles near Santee Lakes Recreation Area?",
    answer:
      "Absolutely. We serve Santee Lakes and the surrounding recreation areas regularly. Whether you're camping, fishing, or visiting the lakes and your vehicle won't start, we can get you towed or provide roadside assistance. We're familiar with the access roads and camping areas.",
  },
  {
    question: "What about towing from residential areas in East Santee?",
    answer:
      "We serve all Santee neighborhoods, from the hillside communities off Fanita Drive to the residential areas near Carlton Oaks. East County terrain can be challenging, but our drivers know the area well and can navigate steep driveways and narrow streets with ease.",
  },
  {
    question: "How do you handle the heat in Santee during summer?",
    answer:
      "Santee gets hot in summer, which can cause battery failures and overheating. We're equipped for East County's desert climate with extra coolant, battery equipment, and water. Our response times stay consistent even during heat waves, typically 20-40 minutes throughout Santee.",
  },
];

export default function SanteePage() {
  return (
    <main className="bg-white">
      {/* Hero Section - Immersive full-bleed design with frameless image */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] overflow-hidden">
        {/* Full-bleed background image - positioned to the right, blurs into left */}
        <div className="absolute inset-0">
          <Image
            src="/san-diego/santee/hero-flatbed.webp"
            alt="CloseBy Towing flatbed truck with San Diego skyline at night"
            fill
            className="object-cover object-right"
            priority
            sizes="100vw"
          />
          {/* Multi-layer gradient overlay for seamless text integration */}
          {/* Dark overlay from left fading to transparent on right - creates text area */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 via-40% to-transparent" />
          {/* Blur effect on left side using backdrop blur with gradient mask */}
          <div
            className="absolute inset-0 backdrop-blur-sm"
            style={{
              maskImage: 'linear-gradient(to right, black 0%, black 30%, transparent 60%)',
              WebkitMaskImage: 'linear-gradient(to right, black 0%, black 30%, transparent 60%)',
            }}
          />
          {/* Subtle amber tint to match Santee's desert vibe */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-transparent to-transparent" />
          {/* Bottom fade for smooth transition to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center min-h-[70vh] lg:min-h-[80vh] py-16 lg:py-24">
            {/* Left Content - Text over the blurred/darkened area */}
            <div className="max-w-2xl">
              {/* Location badge with glow effect */}
              <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-md border border-amber-400/40 rounded-full px-5 py-2 mb-8 shadow-lg shadow-amber-500/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
                </span>
                <span className="text-amber-200 text-sm font-medium tracking-wide">Live Dispatch • Santee 24/7</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight">
                <span className="text-white drop-shadow-2xl">Santee</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 mt-2">
                  Towing & Roadside
                </span>
              </h1>

              <p className="mt-8 text-xl sm:text-2xl text-white/90 leading-relaxed max-w-xl font-light">
                Your <span className="text-amber-300 font-semibold">East County experts</span>. From Trolley Square to Santee Lakes —
                we respond in <span className="text-amber-300 font-semibold">20-40 minutes</span>, guaranteed.
              </p>

              {/* Stats row - glassmorphism cards */}
              <div className="mt-10 flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20 shadow-xl">
                  <div className="text-3xl font-black text-amber-300">20-40</div>
                  <div className="text-sm text-white/70 font-medium">Min Response</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20 shadow-xl">
                  <div className="text-3xl font-black text-amber-300">24/7</div>
                  <div className="text-sm text-white/70 font-medium">Always On</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20 shadow-xl">
                  <div className="text-3xl font-black text-amber-300">Top Rated</div>
                  <div className="text-sm text-white/70 font-medium">Service</div>
                </div>
              </div>

              {/* CTAs - prominent and modern */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-900 px-8 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-2xl shadow-amber-500/40"
                >
                  <svg className="w-6 h-6 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now: {CONTACT.phone}
                </a>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all border border-white/30 hover:border-white/50"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>1,200+ Happy Customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Landmarks Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              We Know <span className="text-amber-600">Santee</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              From Trolley Square shopping to Santee Lakes recreation, our drivers know every road, hill, and shortcut in East County's outdoor haven.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCAL_LANDMARKS.map((landmark, index) => (
              <div
                key={index}
                className="group bg-slate-50 hover:bg-amber-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-amber-200"
              >
                <div className="text-4xl mb-4">{landmark.icon}</div>
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-amber-600 transition-colors">
                  {landmark.name}
                </h3>
                <p className="mt-2 text-slate-600 text-sm">{landmark.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Santee Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Santee&apos;s <span className="text-amber-600">Trusted Towing Partner</span>
              </h2>

              <div className="mt-6 prose prose-lg text-slate-600">
                <p>
                  Santee is East County&apos;s outdoor recreation hub, where desert warmth meets family-friendly community living. With Santee Lakes, rolling hills, and excellent shopping at Trolley Square, this area has unique towing needs that require local expertise.
                </p>
                <p>
                  Whether you&apos;re stuck on SR-52 or SR-125, broke down at Trolley Square shopping center, need help near Santee Lakes, or can&apos;t start your car in one of the hillside neighborhoods, CloseBy Towing provides fast, professional service with 20-40 minute response times throughout Santee.
                </p>
                <p>
                  Our East County drivers know Santee&apos;s terrain well—from the flat commercial areas along Mission Gorge Road to the steep residential streets off Fanita Drive. We handle everything from simple jump starts in the heat to complex recoveries on challenging terrain.
                </p>
              </div>

              {/* Common services callout */}
              <div className="mt-8 bg-amber-100 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">Common Santee Calls:</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "Trolley Square parking issues",
                    "Heat-related breakdowns",
                    "SR-52/SR-125 freeway tows",
                    "Santee Lakes assistance",
                    "Hillside residential towing",
                    "Trolley station service",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map/visual representation */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Santee Coverage Area
              </h3>

              <div className="space-y-3">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">Major Roads We Service:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Mission Gorge Rd", "Cuyamaca St", "Magnolia Ave", "Mast Blvd", "Fanita Dr", "Carlton Hills Blvd"].map((road) => (
                      <span key={road} className="bg-white px-3 py-1 rounded-full text-sm text-slate-600 border border-slate-200">
                        {road}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">Freeway Access:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["SR-52 East/West", "SR-125 North/South", "SR-67 North"].map((freeway) => (
                      <span key={freeway} className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                        {freeway}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">Popular Destinations:</h4>
                  <div className="grid grid-cols-2 gap-1 text-sm text-slate-600">
                    <span>• Trolley Square</span>
                    <span>• Santee Lakes</span>
                    <span>• Target Santee</span>
                    <span>• Walmart Santee</span>
                    <span>• Santee Trolley Station</span>
                    <span>• Carlton Oaks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Services in <span className="text-amber-600">Santee</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Full range of towing and roadside services available 24/7 throughout Santee and East County.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/san-diego/${service.slug}`}
                className="group bg-slate-50 hover:bg-amber-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-amber-200 text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-slate-500 mt-2">Available in Santee</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas Section */}
      <section className="py-16 sm:py-24 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Also Serving <span className="text-amber-300">Nearby Areas</span>
            </h2>
            <p className="mt-4 text-lg text-amber-200 max-w-2xl mx-auto">
              Santee connects to many East County communities. We serve them all.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {NEARBY_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/san-diego/${area.slug}`}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1"
              >
                <span className="font-semibold text-white group-hover:text-amber-300 transition-colors">
                  {area.name}
                </span>
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
              Santee Towing <span className="text-amber-600">FAQ</span>
            </h2>
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
      <section className="py-16 sm:py-24 bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold">
            Need a Tow in <span className="text-amber-300">Santee?</span>
          </h2>

          <p className="mt-6 text-xl text-amber-100 max-w-2xl mx-auto">
            Don&apos;t wait in the East County heat. Our local drivers are ready to help you 24/7. Fast response, fair prices, professional service.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: {CONTACT.phone}
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-amber-200">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
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
              <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>24/7 Santee Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.closebytowing.com/san-diego/santee",
            name: "CloseBy Towing - Santee",
            description:
              "Fast towing and roadside assistance in Santee San Diego. Serving Trolley Square, Santee Lakes, and all East County neighborhoods 24/7.",
            url: "https://www.closebytowing.com/san-diego/santee",
            telephone: CONTACT.phone,
            areaServed: {
              "@type": "City",
              name: "Santee",
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "San Diego County",
              },
            },
            serviceType: ["Towing Service", "Roadside Assistance", "Emergency Towing"],
            priceRange: "$$",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
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
