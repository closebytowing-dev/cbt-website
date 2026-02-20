import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { areaHref, CONTACT } from "@/lib/constants";

// Mission Beach ZIP code
const MISSION_BEACH_ZIP_CODES = ["92109"];

// SEO Metadata
export const metadata: Metadata = {
  title: "Mission Beach Towing | 24/7 Emergency | ZIP 92109 | CloseBy",
  description:
    "Fast towing in Mission Beach CA (92109). 24/7 emergency tow truck, flatbed towing, roadside assistance. Serving Belmont Park, Mission Beach Boardwalk, Mission Bay. 15-25 min response.",
  keywords:
    "towing Mission Beach, Mission Beach tow truck, 92109 towing, Belmont Park towing, beach towing San Diego, roadside assistance Mission Beach, emergency tow Mission Beach, Mission Bay towing",
  openGraph: {
    title: "Mission Beach Towing | 24/7 Emergency Service | CloseBy",
    description:
      "Need a tow in Mission Beach? Fast 15-25 min response to Belmont Park, Boardwalk, Mission Bay & all beach areas. Call now for 24/7 professional towing.",
    url: "https://www.closebytowing.com/san-diego/mission-beach",
    type: "website",
  },
  alternates: {
    canonical: "https://www.closebytowing.com/san-diego/mission-beach",
  },
};

// Nearby neighborhoods for internal linking
const NEARBY_AREAS = [
  { name: "Pacific Beach", slug: "pacific-beach" },
  { name: "Ocean Beach", slug: "ocean-beach" },
  { name: "La Jolla", slug: "la-jolla" },
  { name: "Point Loma", slug: "point-loma" },
  { name: "Downtown San Diego", slug: "downtown" },
  { name: "Bay Park", slug: "bay-park" },
];

// Mission Beach-specific FAQ
const FAQ_DATA = [
  {
    question: "How fast can you get to Mission Beach?",
    answer:
      "Our average response time to Mission Beach is 15-25 minutes. We have drivers stationed near the beach communities for quick access to all Mission Beach areas including the Boardwalk, Belmont Park, and Mission Bay side. Even during busy summer weekends, we maintain fast response times.",
  },
  {
    question: "Do you tow from beach parking lots?",
    answer:
      "Yes, we service all Mission Beach parking areas including the Boardwalk lots, Belmont Park parking, street parking throughout the beach community, and Mission Bay side lots. Our drivers are experienced with the tight spaces and heavy foot traffic common in beach parking areas.",
  },
  {
    question: "Can you help if my car gets stuck in sand?",
    answer:
      "Absolutely! Beach sand recovery is one of our specialties. Whether you drove too close to soft sand or got stuck near a beach access point, we have the winch equipment and experience to safely extract your vehicle without damage.",
  },
  {
    question: "What towing services do you offer in Mission Beach?",
    answer:
      "We offer complete towing services: emergency towing, flatbed towing for all vehicle types, accident recovery, jump starts, tire changes, fuel delivery, and lockout assistance. Our drivers handle everything from compact cars to SUVs stuck in beach parking.",
  },
  {
    question: "Do you provide service late at night in Mission Beach?",
    answer:
      "Yes, Mission Beach has active nightlife and we provide 24/7 service to the entire area. Whether it's 2 AM after the bars close or early morning before sunrise surfing, we're available to help with any towing or roadside need.",
  },
  {
    question: "What areas of Mission Beach do you cover?",
    answer:
      "We cover all of Mission Beach including the Boardwalk, South Mission Beach, North Mission Beach, Belmont Park area, Mission Bay side, Ventura Place, and all surrounding streets. The entire 92109 ZIP code is our service area.",
  },
];

export default function MissionBeachPage() {
  return (
    <main className="bg-slate-900">
      {/* Hero Section - Beach towing theme */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/neighborhoods/shared/flatbed-truck-1.webp"
            alt="Professional tow truck providing 24/7 emergency towing service in Mission Beach San Diego"
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
            <div className="inline-flex items-center gap-2 bg-cyan-500 text-white px-4 py-2 rounded-lg font-bold text-sm mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              SERVING ZIP CODE {MISSION_BEACH_ZIP_CODES[0]}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.9]">
              MISSION BEACH
              <span className="block text-cyan-400">TOWING</span>
            </h1>

            <p className="mt-6 text-xl sm:text-2xl text-slate-300 leading-relaxed">
              24/7 emergency towing for Mission Beach. Fast response to Belmont Park, the Boardwalk, Mission Bay, and all beach community areas.
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
                className="inline-flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-5 rounded-xl font-black text-xl transition-all hover:scale-105 shadow-2xl shadow-cyan-500/30"
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
              TOWING SERVICES IN <span className="text-cyan-400">MISSION BEACH</span>
            </h2>
            <p className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto">
              Complete towing and roadside assistance for Mission Beach, ZIP code {MISSION_BEACH_ZIP_CODES[0]}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-cyan-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Emergency Towing</h3>
              <p className="text-slate-400">
                24/7 emergency response to anywhere in Mission Beach. Accidents, breakdowns, or any urgent situation - we're there fast.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-cyan-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Flatbed Towing</h3>
              <p className="text-slate-400">
                Safe flatbed transport for all vehicle types. Perfect for luxury cars, lowered vehicles, and all-wheel-drive vehicles.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-cyan-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Roadside Assistance</h3>
              <p className="text-slate-400">
                Jump starts, tire changes, fuel delivery, and lockout service. Quick help to get you moving without a tow.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-cyan-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Accident Recovery</h3>
              <p className="text-slate-400">
                Professional accident scene towing and recovery. We work with insurance companies and coordinate with authorities.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-cyan-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sand Winch-Out</h3>
              <p className="text-slate-400">
                Stuck in beach sand? We specialize in sand extraction with proper winch equipment to safely free your vehicle.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-cyan-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lockout Service</h3>
              <p className="text-slate-400">
                Locked out at the beach? Our technicians provide fast, damage-free lockout service to get you back in your car.
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
                COMPLETE <span className="text-cyan-400">MISSION BEACH</span> COVERAGE
              </h2>
              <p className="mt-6 text-xl text-slate-400">
                We know every street, parking lot, and beach access point in Mission Beach. From the ocean side Boardwalk to Mission Bay, our drivers navigate the beach community efficiently to reach you fast.
              </p>

              {/* Areas List */}
              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                  <h3 className="font-bold text-white mb-3">Beach Areas</h3>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      Mission Beach Boardwalk
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      South Mission Beach
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      North Mission Beach
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      Mission Bay Side
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                  <h3 className="font-bold text-white mb-3">Key Locations</h3>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      Belmont Park
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      The Wave House
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      Ventura Place
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      Mission Beach Pier
                    </li>
                  </ul>
                </div>
              </div>

              {/* ZIP Code Callout */}
              <div className="mt-8 bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-black text-cyan-400">{MISSION_BEACH_ZIP_CODES[0]}</div>
                  <div>
                    <div className="font-bold text-white">Mission Beach ZIP Code</div>
                    <div className="text-slate-400">Full coverage across entire beach community</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/neighborhoods/shared/roadside-service.webp"
                  alt="Roadside assistance in Mission Beach"
                  width={600}
                  height={450}
                  className="object-cover w-full"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-xl">
                <div className="text-3xl font-black text-cyan-400">15-25</div>
                <div className="text-white font-medium">Min Response</div>
                <div className="text-slate-500 text-sm">Avg to Mission Beach</div>
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
              WHY <span className="text-cyan-400">MISSION BEACH</span> TRUSTS US
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Response</h3>
              <p className="text-slate-400">15-25 minute average arrival to Mission Beach</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fully Licensed</h3>
              <p className="text-slate-400">Licensed, insured, and professionally trained</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fair Pricing</h3>
              <p className="text-slate-400">Upfront quotes with no hidden fees</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Beach Experts</h3>
              <p className="text-slate-400">We know every street and parking spot</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              MISSION BEACH TOWING <span className="text-cyan-400">FAQ</span>
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
                    className="w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform group-open:rotate-180"
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
              ALSO SERVING <span className="text-cyan-400">NEARBY AREAS</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {NEARBY_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={areaHref(area.slug)}
                className="group bg-slate-700/50 rounded-xl p-4 text-center border border-slate-600 hover:border-cyan-500/50 transition-all hover:-translate-y-1"
              >
                <span className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-cyan-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            NEED A TOW IN MISSION BEACH?
          </h2>
          <p className="mt-6 text-xl text-cyan-100 max-w-2xl mx-auto">
            Don&apos;t wait stranded at the beach. Our professional team is ready 24/7 to help you anywhere in Mission Beach.
          </p>

          <div className="mt-10">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-cyan-700 px-12 py-6 rounded-xl font-black text-2xl transition-all hover:scale-105 shadow-2xl"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              CALL {CONTACT.phone}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-white">
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
            "@id": "https://www.closebytowing.com/san-diego/mission-beach",
            name: "CloseBy Towing - Mission Beach",
            description:
              "24/7 emergency towing and roadside assistance in Mission Beach, CA 92109. Fast response to Belmont Park, Mission Beach Boardwalk, Mission Bay, and all beach areas. Professional flatbed towing, jump starts, tire changes, lockout service, and sand winch-out.",
            url: "https://www.closebytowing.com/san-diego/mission-beach",
            telephone: CONTACT.phone,
            image: "https://www.closebytowing.com/neighborhoods/shared/flatbed-truck-1.webp",
            address: {
              "@type": "PostalAddress",
              addressLocality: "San Diego",
              addressRegion: "CA",
              postalCode: "92109",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 32.7702,
              longitude: -117.2528,
            },
            areaServed: MISSION_BEACH_ZIP_CODES.map((zip) => ({
              "@type": "PostalAddress",
              postalCode: zip,
              addressLocality: "San Diego",
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
              "Sand Winch-Out",
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
              reviewCount: "175",
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
                name: "Mission Beach",
                item: "https://www.closebytowing.com/san-diego/mission-beach",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
