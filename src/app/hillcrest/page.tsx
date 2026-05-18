import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { areaHref, CONTACT } from "@/lib/constants";

// Hillcrest ZIP code
const HILLCREST_ZIP_CODES = ["92103"];

// SEO Metadata
export const metadata: Metadata = {
  title: "Hillcrest Towing | 24/7 Emergency | ZIP 92103 | CloseBy",
  description:
    "Fast towing in Hillcrest CA (92103). 24/7 emergency tow truck, flatbed towing, roadside assistance. Serving University Ave, Balboa Park, Robinson Ave. 15-25 min response.",
  keywords:
    "towing Hillcrest, Hillcrest tow truck, 92103 towing, University Avenue towing, Balboa Park towing, Robinson Avenue towing, Uptown San Diego towing",
  openGraph: {
    title: "Hillcrest Towing | 24/7 Emergency Service | CloseBy",
    description:
      "Need a tow in Hillcrest? Fast 15-25 min response to University Ave, Balboa Park, Robinson Ave & all Uptown areas. Call now for 24/7 professional towing.",
    url: "https://www.closebytowing.com/hillcrest",
    type: "website",
  },
  alternates: {
    canonical: "https://www.closebytowing.com/hillcrest",
  },
};

// Nearby neighborhoods for internal linking
const NEARBY_AREAS = [
  { name: "North Park", slug: "north-park" },
  { name: "Mission Hills", slug: "mission-hills" },
  { name: "University Heights", slug: "university-heights" },
  { name: "Bankers Hill", slug: "bankers-hill" },
  { name: "Downtown", slug: "downtown" },
  { name: "Normal Heights", slug: "normal-heights" },
];

// Hillcrest-specific FAQ
const FAQ_DATA = [
  {
    question: "How fast can you get to Hillcrest?",
    answer:
      "Our average response time to Hillcrest is 15-25 minutes. We have drivers positioned throughout the central San Diego area for quick access to all Hillcrest streets including University Avenue, Robinson Avenue, and the residential areas near Balboa Park.",
  },
  {
    question: "Do you service the busy nightlife areas?",
    answer:
      "Yes, Hillcrest has a vibrant nightlife scene and we're experienced helping people on University and Robinson Avenues during peak hours. Whether it's a dead battery after dinner, a lockout outside a bar, or any other roadside emergency, we're available 24/7.",
  },
  {
    question: "Can you navigate Hillcrest's narrow streets?",
    answer:
      "Absolutely. Hillcrest's historic neighborhoods have narrow streets, tight corners, and challenging parking. Our drivers are locals who know how to maneuver through the community. We can reach you in the hills, canyons, and tight urban streets without issue.",
  },
  {
    question: "What about Balboa Park access?",
    answer:
      "We serve all areas adjacent to Balboa Park including zoo parking areas, museum parking, and residential streets bordering the park. If you're visiting the Zoo or museums and have car trouble, we can reach the parking areas quickly.",
  },
  {
    question: "Do you offer flatbed towing in Hillcrest?",
    answer:
      "Yes, we provide flatbed towing throughout Hillcrest. This is essential for the variety of vehicles in the area, from everyday cars to luxury vehicles. Flatbed towing protects your vehicle and works well on Hillcrest's hilly terrain.",
  },
  {
    question: "What towing services do you offer in Hillcrest?",
    answer:
      "We offer complete services: emergency towing, flatbed towing, accident recovery, jump starts, tire changes, fuel delivery, and lockout assistance. Our drivers handle the busy urban environment of Hillcrest with expertise.",
  },
];

export default function HillcrestPage() {
  return (
    <main className="bg-slate-900">
      {/* Hero Section - Uptown towing theme */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/neighborhoods/shared/city-night-road.webp"
            alt="Professional tow truck providing 24/7 emergency towing service in Hillcrest San Diego"
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
            <div className="inline-flex items-center gap-2 bg-fuchsia-600 text-white px-4 py-2 rounded-lg font-bold text-sm mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              SERVING ZIP CODE {HILLCREST_ZIP_CODES[0]}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.9]">
              HILLCREST
              <span className="block text-fuchsia-400">TOWING</span>
            </h1>

            <p className="mt-6 text-xl sm:text-2xl text-slate-300 leading-relaxed">
              24/7 emergency towing for Hillcrest and Uptown San Diego. Fast response to University Avenue, Robinson Avenue, Balboa Park, and all Uptown neighborhoods.
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
                className="inline-flex items-center justify-center gap-3 bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-8 py-5 rounded-xl font-black text-xl transition-all hover:scale-105 shadow-2xl shadow-fuchsia-600/30"
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
              TOWING SERVICES IN <span className="text-fuchsia-400">HILLCREST</span>
            </h2>
            <p className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto">
              Complete towing and roadside assistance for Hillcrest, ZIP code {HILLCREST_ZIP_CODES[0]}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-fuchsia-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-fuchsia-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Emergency Towing</h3>
              <p className="text-slate-400">
                24/7 emergency response to anywhere in Hillcrest. Accidents, breakdowns, or any urgent situation - we're there fast.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-fuchsia-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-fuchsia-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Flatbed Towing</h3>
              <p className="text-slate-400">
                Safe flatbed transport for all vehicle types. Perfect for luxury cars and navigating Hillcrest's hilly terrain.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-fuchsia-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-fuchsia-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Roadside Assistance</h3>
              <p className="text-slate-400">
                Jump starts, tire changes, fuel delivery, and lockout service. Quick help to get you moving without a tow.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-fuchsia-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-fuchsia-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Accident Recovery</h3>
              <p className="text-slate-400">
                Professional accident scene towing and recovery. We work with insurance companies and coordinate with authorities.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-fuchsia-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-fuchsia-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Late Night Service</h3>
              <p className="text-slate-400">
                Hillcrest's nightlife never sleeps and neither do we. Full towing and roadside service during all hours.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-fuchsia-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-fuchsia-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lockout Service</h3>
              <p className="text-slate-400">
                Locked out in Hillcrest? Our technicians provide fast, damage-free lockout service to get you back in your car.
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
                COMPLETE <span className="text-fuchsia-400">HILLCREST</span> COVERAGE
              </h2>
              <p className="mt-6 text-xl text-slate-400">
                We know every street, corner, and parking situation in Hillcrest. From busy University Avenue to the quiet residential streets near Balboa Park, our drivers navigate Uptown efficiently to reach you fast.
              </p>

              {/* Areas List */}
              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                  <h3 className="font-bold text-white mb-3">Main Streets</h3>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full" />
                      University Avenue
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full" />
                      Robinson Avenue
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full" />
                      Washington Street
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full" />
                      Park Boulevard
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                  <h3 className="font-bold text-white mb-3">Key Locations</h3>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full" />
                      Balboa Park (North)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full" />
                      Hillcrest Sign
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full" />
                      Farmers Market Area
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full" />
                      Medical Complex
                    </li>
                  </ul>
                </div>
              </div>

              {/* ZIP Code Callout */}
              <div className="mt-8 bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-black text-fuchsia-400">{HILLCREST_ZIP_CODES[0]}</div>
                  <div>
                    <div className="font-bold text-white">Hillcrest ZIP Code</div>
                    <div className="text-slate-400">Full Uptown coverage including adjacent areas</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/neighborhoods/shared/roadside-service.webp"
                  alt="Roadside assistance in Hillcrest San Diego"
                  width={600}
                  height={450}
                  className="object-cover w-full"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-xl">
                <div className="text-3xl font-black text-fuchsia-400">15-25</div>
                <div className="text-white font-medium">Min Response</div>
                <div className="text-slate-500 text-sm">Avg to Hillcrest</div>
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
              WHY <span className="text-fuchsia-400">HILLCREST</span> TRUSTS US
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-fuchsia-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Response</h3>
              <p className="text-slate-400">15-25 minute average arrival to Hillcrest</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-fuchsia-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fully Licensed</h3>
              <p className="text-slate-400">Licensed, insured, and professionally trained</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-fuchsia-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fair Pricing</h3>
              <p className="text-slate-400">Upfront quotes with no hidden fees</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-fuchsia-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Uptown Experts</h3>
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
              HILLCREST TOWING <span className="text-fuchsia-400">FAQ</span>
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
                    className="w-5 h-5 text-fuchsia-400 flex-shrink-0 transition-transform group-open:rotate-180"
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
              ALSO SERVING <span className="text-fuchsia-400">NEARBY AREAS</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {NEARBY_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={areaHref(area.slug)}
                className="group bg-slate-700/50 rounded-xl p-4 text-center border border-slate-600 hover:border-fuchsia-500/50 transition-all hover:-translate-y-1"
              >
                <span className="font-bold text-white group-hover:text-fuchsia-400 transition-colors">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-fuchsia-600 to-fuchsia-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            NEED A TOW IN HILLCREST?
          </h2>
          <p className="mt-6 text-xl text-fuchsia-100 max-w-2xl mx-auto">
            Don&apos;t wait stranded in Uptown. Our professional team is ready 24/7 to help you anywhere in Hillcrest.
          </p>

          <div className="mt-10">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-fuchsia-700 px-12 py-6 rounded-xl font-black text-2xl transition-all hover:scale-105 shadow-2xl"
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
            "@id": "https://www.closebytowing.com/hillcrest",
            name: "CloseBy Towing - Hillcrest",
            description:
              "24/7 emergency towing and roadside assistance in Hillcrest, CA 92103. Fast response to University Avenue, Robinson Avenue, Balboa Park, and all Uptown areas. Professional flatbed towing, jump starts, tire changes, and lockout service.",
            url: "https://www.closebytowing.com/hillcrest",
            telephone: CONTACT.phone,
            image: "https://www.closebytowing.com/neighborhoods/shared/city-night-road.webp",
            address: {
              "@type": "PostalAddress",
              addressLocality: "San Diego",
              addressRegion: "CA",
              postalCode: "92103",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 32.7488,
              longitude: -117.1605,
            },
            areaServed: HILLCREST_ZIP_CODES.map((zip) => ({
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
              reviewCount: "160",
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
                item: "https://www.closebytowing.com/towing",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Hillcrest",
                item: "https://www.closebytowing.com/hillcrest",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
