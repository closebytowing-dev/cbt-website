import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT, areaHref } from "@/lib/constants";

// Coronado ZIP codes
const CORONADO_ZIP_CODES = ["92118"];

// SEO Metadata
export const metadata: Metadata = {
  title: "Coronado Towing | 24/7 Emergency Tow Truck | ZIP 92118 | CloseBy",
  description:
    "Fast towing service in Coronado CA (92118). 24/7 emergency tow truck, flatbed towing, roadside assistance. Serving Coronado Bridge, Orange Avenue, Naval Base & all island areas. 15-25 min response.",
  keywords:
    "towing Coronado, Coronado tow truck, 92118 towing, Coronado Bridge towing, roadside assistance Coronado, flatbed towing Coronado, emergency tow Coronado, tow truck near me Coronado",
  openGraph: {
    title: "Coronado Towing | 24/7 Emergency Service | CloseBy Towing",
    description:
      "Need a tow in Coronado? Fast 15-25 min response across all of Coronado Island including bridge coverage. Call now for 24/7 professional towing.",
    url: "https://www.closebytowing.com/coronado",
    type: "website",
  },
  alternates: {
    canonical: "https://www.closebytowing.com/coronado",
  },
};

// Nearby neighborhoods for internal linking
const NEARBY_AREAS = [
  { name: "Downtown San Diego", slug: "downtown" },
  { name: "Point Loma", slug: "point-loma" },
  { name: "Imperial Beach", slug: "imperial-beach" },
  { name: "National City", slug: "national-city" },
  { name: "Chula Vista", slug: "chula-vista" },
  { name: "Ocean Beach", slug: "ocean-beach" },
];

// Coronado-specific FAQ
const FAQ_DATA = [
  {
    question: "How fast can a tow truck reach me in Coronado?",
    answer:
      "Our average response time to Coronado is 15-25 minutes. We have drivers strategically positioned to quickly access the island via the Coronado Bridge or from our South Bay coverage area via the Silver Strand. During peak tourist season or special events at the Hotel del, we recommend calling as soon as you need assistance.",
  },
  {
    question: "Do you provide towing on the Coronado Bridge?",
    answer:
      "Yes, we handle Coronado Bridge breakdowns and accidents regularly. Bridge situations require special safety protocols, and our experienced drivers know exactly how to safely secure and remove vehicles from the bridge. We coordinate with CHP as needed for smooth, safe operations.",
  },
  {
    question: "What types of vehicles can you tow in Coronado?",
    answer:
      "We tow all vehicle types in Coronado: cars, SUVs, trucks, motorcycles, and even golf carts which are popular on the island. Our flatbed trucks can handle luxury vehicles, sports cars, and all-wheel-drive vehicles that are common in Coronado. We treat every vehicle with care.",
  },
  {
    question: "Do you offer roadside assistance besides towing?",
    answer:
      "Absolutely! In addition to towing, we provide jump starts for dead batteries, tire changes, fuel delivery, and lockout assistance throughout Coronado. Many times you don't need a tow - just quick roadside help to get you back on the road.",
  },
  {
    question: "What are your towing rates for Coronado?",
    answer:
      "Our rates are competitive and transparent. We provide upfront quotes before any work begins - no hidden fees or surprises. Pricing depends on the service needed, vehicle type, and destination. Call us for an immediate quote specific to your situation.",
  },
  {
    question: "Can you tow from private property or parking garages in Coronado?",
    answer:
      "Yes, we can tow from private parking lots, hotel parking structures, residential complexes, and tight spaces throughout Coronado. Our drivers are experienced with the island's unique parking situations including the narrow streets in the village area.",
  },
];

export default function CoronadoPage() {
  return (
    <main className="bg-slate-900">
      {/* Hero Section - Towing-focused with dramatic styling */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/neighborhoods/shared/flatbed-truck-1.webp"
            alt="Professional tow truck providing 24/7 emergency towing service in Coronado San Diego"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl">
            {/* ZIP Code Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-4 py-2 rounded-lg font-bold text-sm mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              SERVING ZIP CODE {CORONADO_ZIP_CODES[0]}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.9]">
              CORONADO
              <span className="block text-amber-400">TOWING</span>
            </h1>

            <p className="mt-6 text-xl sm:text-2xl text-slate-300 leading-relaxed">
              24/7 emergency towing and roadside assistance for Coronado Island. Fast response across the bridge, Orange Avenue, and all island neighborhoods.
            </p>

            {/* Response Time Highlight */}
            <div className="mt-8 flex items-center gap-4">
              <div className="bg-green-500/20 border border-green-400/50 rounded-xl px-6 py-4">
                <div className="text-3xl font-black text-green-400">15-25 MIN</div>
                <div className="text-sm text-green-300">Average Response</div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl px-6 py-4">
                <div className="text-3xl font-black text-white">24/7</div>
                <div className="text-sm text-slate-400">Always Available</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-5 rounded-xl font-black text-xl transition-all hover:scale-105 shadow-2xl shadow-amber-500/30"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {CONTACT.phone}
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-5 rounded-xl font-bold text-xl transition-all border border-white/30 backdrop-blur-sm"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              TOWING SERVICES IN <span className="text-amber-400">CORONADO</span>
            </h2>
            <p className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto">
              Complete towing and roadside assistance for all of Coronado Island, ZIP code {CORONADO_ZIP_CODES[0]}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-amber-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Emergency Towing</h3>
              <p className="text-slate-400">
                24/7 emergency tow truck dispatch to anywhere in Coronado. Accidents, breakdowns, or any urgent situation - we respond fast.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-amber-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Flatbed Towing</h3>
              <p className="text-slate-400">
                Safe flatbed transport for luxury vehicles, sports cars, and all-wheel-drive vehicles. Your car never touches the road.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-amber-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Roadside Assistance</h3>
              <p className="text-slate-400">
                Jump starts, tire changes, fuel delivery, and lockout service. Quick help to get you moving without a tow.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-amber-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Accident Recovery</h3>
              <p className="text-slate-400">
                Professional accident scene towing and vehicle recovery. We work with insurance companies and law enforcement.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-amber-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Bridge Coverage</h3>
              <p className="text-slate-400">
                Specialized Coronado Bridge emergency response. Safe vehicle removal from the bridge with proper traffic management.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-amber-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Motorcycle Towing</h3>
              <p className="text-slate-400">
                Careful motorcycle transport with specialized equipment. We secure and protect your bike during transport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                COMPLETE <span className="text-amber-400">CORONADO</span> COVERAGE
              </h2>
              <p className="mt-6 text-xl text-slate-400">
                We know every street, landmark, and parking situation on Coronado Island. From the Coronado Bridge entrance to the Silver Strand, our drivers navigate the island efficiently to reach you fast.
              </p>

              {/* Areas List */}
              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                  <h3 className="font-bold text-white mb-3">Key Areas</h3>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      Orange Avenue / Village
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      Hotel del Coronado
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      Ferry Landing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      Coronado Cays
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                  <h3 className="font-bold text-white mb-3">Major Routes</h3>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      Coronado Bridge (SR-75)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      Silver Strand Blvd
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      4th Street
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      Ocean Boulevard
                    </li>
                  </ul>
                </div>
              </div>

              {/* ZIP Code Callout */}
              <div className="mt-8 bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-black text-amber-400">{CORONADO_ZIP_CODES[0]}</div>
                  <div>
                    <div className="font-bold text-white">Coronado ZIP Code</div>
                    <div className="text-slate-400">Full island coverage including Naval Base adjacent areas</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/neighborhoods/shared/city-night-road.webp"
                  alt="Tow truck responding to call in Coronado at night"
                  width={600}
                  height={450}
                  className="object-cover w-full"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-xl">
                <div className="text-3xl font-black text-amber-400">15-25</div>
                <div className="text-white font-medium">Min Response</div>
                <div className="text-slate-500 text-sm">Avg to Coronado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              WHY <span className="text-amber-400">CORONADO</span> TRUSTS US
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Response</h3>
              <p className="text-slate-400">15-25 minute average arrival to Coronado</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fully Licensed</h3>
              <p className="text-slate-400">Licensed, insured, and professionally trained</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fair Pricing</h3>
              <p className="text-slate-400">Upfront quotes with no hidden fees</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Local Experts</h3>
              <p className="text-slate-400">We know Coronado's streets and landmarks</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              CORONADO TOWING <span className="text-amber-400">FAQ</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"
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

      {/* Nearby Areas */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white">
              ALSO SERVING <span className="text-amber-400">NEARBY AREAS</span>
            </h2>
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

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
            NEED A TOW IN CORONADO?
          </h2>
          <p className="mt-6 text-xl text-slate-800 max-w-2xl mx-auto">
            Don&apos;t wait stranded. Our professional team is ready 24/7 to help you anywhere on Coronado Island.
          </p>

          <div className="mt-10">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-12 py-6 rounded-xl font-black text-2xl transition-all hover:scale-105 shadow-2xl"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              CALL {CONTACT.phone}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-slate-800">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold">24/7 Available</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold">Fast Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.closebytowing.com/coronado",
            name: "CloseBy Towing - Coronado",
            description:
              "24/7 emergency towing and roadside assistance in Coronado, CA 92118. Fast response to Coronado Bridge, Orange Avenue, Hotel del Coronado, and all island areas. Professional flatbed towing, jump starts, tire changes, and lockout service.",
            url: "https://www.closebytowing.com/coronado",
            telephone: CONTACT.phone,
            image: "https://www.closebytowing.com/neighborhoods/shared/flatbed-truck-1.webp",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Coronado",
              addressRegion: "CA",
              postalCode: "92118",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 32.6859,
              longitude: -117.1831,
            },
            areaServed: CORONADO_ZIP_CODES.map((zip) => ({
              "@type": "PostalAddress",
              postalCode: zip,
              addressLocality: "Coronado",
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
              "Accident Towing",
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
              ratingValue: "4.9",
              reviewCount: "150",
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
                name: "San Diego Towing",
                item: "https://www.closebytowing.com/san-diego/towing",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Coronado",
                item: "https://www.closebytowing.com/coronado",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
