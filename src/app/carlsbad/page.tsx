import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT, areaHref } from "@/lib/constants";

// Carlsbad ZIP codes
const CARLSBAD_ZIP_CODES = ["92008", "92009", "92010", "92011"];

// SEO Metadata
export const metadata: Metadata = {
  title: "Carlsbad Towing | 92008 92009 92010 92011 | 24/7 | CloseBy",
  description:
    "Fast 24/7 towing service in Carlsbad CA (92008, 92009, 92010, 92011). Serving LEGOLAND, Carlsbad Village, Carlsbad Lagoon, Flower Fields, Carlsbad Premium Outlets & all Carlsbad neighborhoods. 15-25 min response.",
  keywords:
    "towing Carlsbad, Carlsbad tow truck, 92008 towing, 92009 towing, 92010 towing, 92011 towing, roadside assistance Carlsbad, LEGOLAND towing, Carlsbad Village towing, tow truck near me Carlsbad, flatbed towing Carlsbad, emergency tow Carlsbad",
  openGraph: {
    title: "Carlsbad Towing | 24/7 Emergency Service | CloseBy Towing",
    description:
      "Need a tow in Carlsbad? Fast 15-25 min response across all Carlsbad neighborhoods including LEGOLAND, Carlsbad Village, the Flower Fields, and Carlsbad Premium Outlets. Call now for 24/7 professional towing.",
    url: "https://www.closebytowing.com/carlsbad",
    type: "website",
  },
  alternates: {
    canonical: "https://www.closebytowing.com/carlsbad",
  },
};

// Nearby areas for internal linking
const NEARBY_AREAS = [
  { name: "Oceanside", slug: "oceanside" },
  { name: "Encinitas", slug: "encinitas" },
  { name: "Vista", slug: "vista" },
  { name: "San Marcos", slug: "san-marcos" },
  { name: "Solana Beach", slug: "solana-beach" },
  { name: "Del Mar", slug: "del-mar" },
];

// Carlsbad-specific FAQ
const FAQ_DATA = [
  {
    question: "How fast can a tow truck reach me in Carlsbad?",
    answer:
      "Our average response time to Carlsbad is 15-25 minutes. We have drivers strategically positioned throughout North County to quickly reach any location in Carlsbad, whether you are near the coast along Carlsbad Boulevard, inland near El Camino Real, or anywhere along the I-5 corridor. During peak tourist season or busy weekends at LEGOLAND and the Flower Fields, we recommend calling as soon as you need help so we can dispatch immediately.",
  },
  {
    question: "Do you provide towing near LEGOLAND and the Carlsbad Premium Outlets?",
    answer:
      "Absolutely. LEGOLAND California and the Carlsbad Premium Outlets are two of the busiest destinations in North County, and we handle calls from those areas regularly. Our drivers know the parking structures, surrounding roads, and access points around both attractions. Whether your car will not start in the LEGOLAND parking lot or you have a flat tire at the outlets, we will get to you quickly and take care of your vehicle.",
  },
  {
    question: "Can you help with breakdowns on I-5 through Carlsbad?",
    answer:
      "Yes, we respond to breakdowns on Interstate 5 through Carlsbad all the time. The I-5 corridor runs through the heart of Carlsbad from the Encinitas border in the south to Oceanside in the north, and our drivers are experienced with highway breakdown protocols, shoulder safety procedures, and coordinating with CHP when needed. We will get you and your vehicle off the freeway safely.",
  },
  {
    question: "What towing services do you offer in the Carlsbad Village area?",
    answer:
      "We offer the full range of towing and roadside assistance services in Carlsbad Village and the surrounding downtown area. This includes emergency towing, flatbed towing for luxury or specialty vehicles, jump starts, lockout service, tire changes, and fuel delivery. Our drivers are familiar with the tight streets, angled parking, and busy restaurant areas throughout the Village, so we can handle any situation without causing disruption.",
  },
  {
    question: "Do you tow from Carlsbad State Beach and the Carlsbad Lagoon area?",
    answer:
      "Yes, we regularly service Carlsbad State Beach, South Carlsbad State Beach, and the Carlsbad Lagoon area. Beach parking lots, coastal access roads, and the lagoon trailhead areas are all within our standard coverage. Sand, tight spaces, and seasonal beach traffic are conditions our drivers handle with ease. We also cover Carlsbad Boulevard along the entire coastal stretch.",
  },
  {
    question: "Are your Carlsbad towing services available 24 hours a day?",
    answer:
      "Yes, CloseBy Towing operates 24 hours a day, 7 days a week, 365 days a year in Carlsbad and all surrounding communities. Whether you need a tow at 2 AM after a late flight into the Palomar Airport area, an early morning jump start before work, or emergency roadside help during evening rush hour on Palomar Airport Road, our team is always on call and ready to respond.",
  },
  {
    question: "What are your towing rates for Carlsbad?",
    answer:
      "Our rates are competitive and transparent. We provide upfront quotes before any work begins, so you always know the cost. There are no hidden fees or surprise charges. Pricing depends on the specific service needed, vehicle type, and tow destination. Call us anytime for an immediate, no-obligation quote tailored to your exact situation in Carlsbad.",
  },
];

export default function CarlsbadPage() {
  return (
    <main className="bg-slate-900">
      {/* ── Hero Section ── */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">
        {/* Decorative wave at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-24 text-slate-900">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="currentColor"
              opacity=".15"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              fill="currentColor"
              opacity=".3"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Location badge */}
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-amber-200 text-sm font-medium">Serving Carlsbad 24/7 &bull; ZIP: {CARLSBAD_ZIP_CODES.join(", ")}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                CARLSBAD
                <span className="block text-amber-400 mt-2">TOWING &amp; ROADSIDE</span>
              </h1>

              <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-xl">
                Carlsbad&apos;s trusted towing service covering every corner of this North County coastal city. From{" "}
                <span className="text-amber-300 font-semibold">LEGOLAND</span> to{" "}
                <span className="text-amber-300 font-semibold">Carlsbad Village</span> and the{" "}
                <span className="text-amber-300 font-semibold">Flower Fields</span>, professional towing and roadside assistance with{" "}
                <span className="text-amber-300 font-semibold">15-25 minute</span> response times.
              </p>

              {/* Quick stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-amber-400">15-25</div>
                  <div className="text-sm text-slate-300">Min Response</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-amber-400">24/7</div>
                  <div className="text-sm text-slate-300">Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-amber-400">115K+</div>
                  <div className="text-sm text-slate-300">Residents Served</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-amber-500/30"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call: {CONTACT.phone}
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
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/30">
                <div className="aspect-[4/3] bg-slate-900/50 relative">
                  <Image
                    src="/neighborhoods/shared/flatbed-truck-1.webp"
                    alt="CloseBy Towing flatbed truck serving Carlsbad California near LEGOLAND"
                    fill
                    className="object-cover"
                    priority
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                  {/* ZIP code overlay */}
                  <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-amber-400/30">
                    <div className="text-amber-200 text-xs font-medium">ZIP Codes</div>
                    <div className="text-white font-bold">{CARLSBAD_ZIP_CODES.join(" &bull; ")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="py-8 bg-slate-800 border-y border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="font-bold text-white">15-25 Min Response</div>
              <div className="text-sm text-slate-400">Average arrival time</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div className="font-bold text-white">Licensed &amp; Insured</div>
              <div className="text-sm text-slate-400">Fully certified operators</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <div className="font-bold text-white">5.0 Star Rated</div>
              <div className="text-sm text-slate-400">Perfect Google rating</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="font-bold text-white">Upfront Pricing</div>
              <div className="text-sm text-slate-400">No hidden fees ever</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Complete Carlsbad Coverage ── */}
      <section className="py-20 lg:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              COMPLETE <span className="text-amber-400">CARLSBAD</span> COVERAGE
            </h2>

            <div className="mt-6 space-y-5 text-lg text-slate-400 leading-relaxed">
              <p>
                Carlsbad is one of North County San Diego&apos;s most vibrant cities, home to approximately 115,000 residents spread across a diverse landscape that stretches from pristine coastal beaches to thriving inland business parks. As a full-service towing and roadside assistance provider, CloseBy Towing has built deep local knowledge of every neighborhood, major road, and landmark throughout Carlsbad&apos;s four ZIP codes: 92008, 92009, 92010, and 92011.
              </p>
              <p>
                Whether you are a tourist visiting LEGOLAND California with your family, a business traveler near the Palomar Airport Road corridor, a local shopping at Carlsbad Premium Outlets, or a resident commuting along El Camino Real, our professional drivers can reach you quickly. We understand the traffic patterns on I-5 through Carlsbad, the seasonal congestion around the Flower Fields during spring bloom, and the weekend crowds that fill Carlsbad Village and Carlsbad State Beach. This local expertise means faster response times and better service for every customer.
              </p>
              <p>
                Our fleet includes modern flatbed tow trucks, wheel-lift trucks, and fully equipped roadside assistance vehicles. Every driver is trained, licensed, and insured. We treat your vehicle with the same care and respect we would give our own, whether it is a family minivan, a luxury sedan, a motorcycle, or a commercial vehicle. Carlsbad deserves top-tier towing service, and that is exactly what CloseBy Towing delivers around the clock.
              </p>
            </div>

            {/* Key Areas + Major Routes */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-800/70 rounded-xl p-5 border border-slate-700">
                <h3 className="font-bold text-amber-400 mb-3">Key Carlsbad Landmarks</h3>
                <ul className="space-y-2.5 text-slate-300">
                  {[
                    "LEGOLAND California",
                    "Carlsbad Premium Outlets",
                    "The Flower Fields",
                    "Carlsbad Village",
                    "Carlsbad Lagoon",
                    "Carlsbad State Beach",
                    "Aviara Golf Course",
                  ].map((landmark) => (
                    <li key={landmark} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0" />
                      {landmark}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/70 rounded-xl p-5 border border-slate-700">
                <h3 className="font-bold text-amber-400 mb-3">Major Routes We Cover</h3>
                <ul className="space-y-2.5 text-slate-300">
                  {[
                    "Interstate 5 (I-5)",
                    "Palomar Airport Road",
                    "El Camino Real",
                    "Carlsbad Boulevard",
                    "Cannon Road",
                    "Poinsettia Lane",
                    "Tamarack Avenue",
                  ].map((road) => (
                    <li key={road} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0" />
                      {road}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ZIP + Response Time badges */}
            <div className="mt-8 flex flex-wrap gap-4">
              {CARLSBAD_ZIP_CODES.map((zip) => (
                <div key={zip} className="bg-amber-500/10 border border-amber-500/30 rounded-xl px-5 py-3 flex items-center gap-3">
                  <div className="text-2xl font-black text-amber-400">{zip}</div>
                  <div>
                    <div className="font-bold text-white text-sm">Carlsbad ZIP</div>
                    <div className="text-slate-500 text-xs">Full coverage</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section className="py-20 lg:py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              TOWING SERVICES IN <span className="text-amber-400">CARLSBAD</span>
            </h2>
            <p className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto">
              Complete towing and roadside assistance for all of Carlsbad, covering ZIP codes {CARLSBAD_ZIP_CODES.join(", ")}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Towing */}
            <Link href="/towing" className="group bg-slate-700/50 rounded-2xl p-10 border border-slate-600 hover:border-amber-500/50 transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-9 h-9 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Emergency Towing</h3>
              <p className="text-base text-slate-400 leading-relaxed">
                24/7 emergency tow truck dispatch to anywhere in Carlsbad. Breakdowns on I-5, accidents on Palomar Airport Road, or any urgent situation.
              </p>
            </Link>

            {/* Jump Start */}
            <Link href="/jump-start" className="group bg-slate-700/50 rounded-2xl p-10 border border-slate-600 hover:border-amber-500/50 transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-9 h-9 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Battery Jump Start</h3>
              <p className="text-base text-slate-400 leading-relaxed">
                Dead battery at the LEGOLAND parking lot or Carlsbad Premium Outlets? We will get you started fast without a tow.
              </p>
            </Link>

            {/* Lockout */}
            <Link href="/lockout" className="group bg-slate-700/50 rounded-2xl p-10 border border-slate-600 hover:border-amber-500/50 transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-9 h-9 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Lockout Service</h3>
              <p className="text-base text-slate-400 leading-relaxed">
                Locked out at Carlsbad State Beach or the Village? Our technicians open your vehicle quickly without causing damage.
              </p>
            </Link>

            {/* Tire Change */}
            <Link href="/tire-change" className="group bg-slate-700/50 rounded-2xl p-10 border border-slate-600 hover:border-amber-500/50 transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-9 h-9 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Tire Change</h3>
              <p className="text-base text-slate-400 leading-relaxed">
                Flat tire on Carlsbad Boulevard or El Camino Real? We swap your spare on-site so you can continue your drive.
              </p>
            </Link>

            {/* Fuel Delivery */}
            <Link href="/gas-delivery" className="group bg-slate-700/50 rounded-2xl p-10 border border-slate-600 hover:border-amber-500/50 transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-9 h-9 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Fuel Delivery</h3>
              <p className="text-base text-slate-400 leading-relaxed">
                Ran out of gas near the Carlsbad Lagoon or on I-5? We deliver fuel directly to your location so you can keep moving.
              </p>
            </Link>

            {/* Collision Recovery */}
            <Link href="/collision-recovery" className="group bg-slate-700/50 rounded-2xl p-10 border border-slate-600 hover:border-amber-500/50 transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-9 h-9 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Collision Recovery</h3>
              <p className="text-base text-slate-400 leading-relaxed">
                Professional accident scene towing and vehicle recovery throughout Carlsbad. We coordinate with insurance and law enforcement.
              </p>
            </Link>

            {/* Winch-Out */}
            <Link href="/winch-out" className="group bg-slate-700/50 rounded-2xl p-10 border border-slate-600 hover:border-amber-500/50 transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-9 h-9 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Winch-Out / Recovery</h3>
              <p className="text-base text-slate-400 leading-relaxed">
                Vehicle stuck in sand near the beach, a ditch, or off-road? Our winch-out equipment safely recovers vehicles from tough spots.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Carlsbad Trusts CloseBy ── */}
      <section className="py-20 lg:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              WHY <span className="text-amber-400">CARLSBAD</span> TRUSTS US
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
              Carlsbad is a city of families, businesses, and visitors who expect reliable, professional service. Here is why thousands of San Diego County drivers choose CloseBy Towing when they need help on the road.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Response</h3>
              <p className="text-slate-400">15-25 minute average arrival anywhere in Carlsbad</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fully Licensed</h3>
              <p className="text-slate-400">Licensed, insured, and professionally trained operators</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fair Pricing</h3>
              <p className="text-slate-400">Upfront quotes with no hidden fees or surprise charges</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Local Experts</h3>
              <p className="text-slate-400">We know Carlsbad&apos;s streets, landmarks, and traffic patterns</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mid-Page CTA ── */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Stranded in Carlsbad Right Now?
          </h2>
          <p className="mt-4 text-lg text-slate-800 max-w-2xl mx-auto">
            Do not wait on the side of the road. Our Carlsbad towing team is standing by 24/7 and can reach you in 15-25 minutes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-xl font-black text-xl transition-all hover:scale-105 shadow-lg"
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
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-10 py-5 rounded-xl font-bold text-xl transition-all border border-[#25D366]/50"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-20 lg:py-24 bg-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              CARLSBAD TOWING <span className="text-amber-400">FAQ</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Common questions about our towing and roadside assistance services in Carlsbad.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-900/80 rounded-xl border border-slate-700 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-700/50 transition-colors">
                  <h3 className="font-bold text-white pr-8 text-left">{faq.question}</h3>
                  <svg
                    className="w-5 h-5 text-amber-400 flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nearby Areas ── */}
      <section className="py-16 lg:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white">
              ALSO SERVING <span className="text-amber-400">NEARBY AREAS</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Carlsbad connects to many thriving North County communities. We proudly serve them all with the same fast, professional towing and roadside assistance.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {NEARBY_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={areaHref(area.slug)}
                className="group bg-slate-700/50 rounded-xl p-4 text-center border border-slate-600 hover:border-amber-500/50 transition-all hover:-translate-y-1"
              >
                <span className="font-bold text-white group-hover:text-amber-400 transition-colors">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 bg-slate-900 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white">
            NEED A TOW IN <span className="text-amber-400">CARLSBAD</span>?
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Do not wait stranded on the road. Our professional Carlsbad towing team is ready around the clock to help you with any vehicle emergency. One call and we are on our way.
          </p>

          <div className="mt-10">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 px-12 py-6 rounded-xl font-black text-2xl transition-all hover:scale-105 shadow-2xl shadow-amber-500/20"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              CALL {CONTACT.phone}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-slate-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Licensed &amp; Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">24/7 Available</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Fast Carlsbad Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Schema.org Structured Data: LocalBusiness ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.closebytowing.com/carlsbad",
            name: "CloseBy Towing - Carlsbad",
            description:
              "24/7 emergency towing and roadside assistance in Carlsbad, CA. Serving LEGOLAND, Carlsbad Village, Carlsbad Premium Outlets, Carlsbad Lagoon, the Flower Fields, Carlsbad State Beach, Aviara Golf Course, and all Carlsbad neighborhoods. Fast 15-25 minute response across ZIP codes 92008, 92009, 92010, and 92011.",
            url: "https://www.closebytowing.com/carlsbad",
            telephone: CONTACT.phone,
            image: "https://www.closebytowing.com/neighborhoods/shared/flatbed-truck-1.webp",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Carlsbad",
              addressRegion: "CA",
              postalCode: CARLSBAD_ZIP_CODES[0],
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 33.1581,
              longitude: -117.3506,
            },
            areaServed: CARLSBAD_ZIP_CODES.map((zip) => ({
              "@type": "PostalAddress",
              postalCode: zip,
              addressLocality: "Carlsbad",
              addressRegion: "CA",
              addressCountry: "US",
            })),
            serviceType: [
              "Emergency Towing",
              "Flatbed Towing",
              "Roadside Assistance",
              "Jump Start Service",
              "Tire Change",
              "Lockout Service",
              "Fuel Delivery",
              "Collision Recovery",
              "Winch-Out Recovery",
            ],
            priceRange: "$$",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "00:00",
              closes: "23:59",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "150",
            },
          }),
        }}
      />

      {/* ── Schema.org Structured Data: BreadcrumbList ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: "San Diego",
                item: "https://www.closebytowing.com/san-diego",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Carlsbad",
                item: "https://www.closebytowing.com/carlsbad",
              },
            ],
          }),
        }}
      />

      {/* ── Schema.org Structured Data: FAQPage ── */}
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
