import Link from "next/link";
import type { Metadata } from "next";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Emergency Towing San Diego | 24/7 | CloseBy",
  description:
    "Need emergency towing in San Diego? We respond in 20-35 minutes, 24/7. Highway breakdowns, accidents, urgent situations. Call now for immediate dispatch.",
  keywords:
    "emergency towing San Diego, 24/7 towing, urgent tow truck, highway towing San Diego, roadside emergency, fast towing service",
  alternates: { canonical: "https://www.closebytowing.com/san-diego/emergency-towing" },
  openGraph: {
    title: "Emergency Towing San Diego | CloseBy Towing",
    description: "Immediate response when you need it most. 24/7 emergency towing across San Diego County.",
    type: "website",
    url: "https://www.closebytowing.com/san-diego/emergency-towing",
  },
};

const NEARBY_AREAS = [
  { name: "Mission Valley", slug: "mission-valley" },
  { name: "Pacific Beach", slug: "pacific-beach" },
  { name: "Kearny Mesa", slug: "kearny-mesa" },
  { name: "La Mesa", slug: "la-mesa" },
  { name: "Chula Vista", slug: "chula-vista" },
  { name: "El Cajon", slug: "el-cajon" },
];

const RELATED_SERVICES = [
  { name: "General Towing", href: "/san-diego/towing", desc: "Standard tow truck service" },
  { name: "Accident Towing", href: "/san-diego/accident-towing", desc: "Post-collision recovery" },
  { name: "Roadside Assistance", href: "/san-diego/roadside-assistance", desc: "Quick fixes on the spot" },
  { name: "Flatbed Towing", href: "/san-diego/flatbed-towing", desc: "Safe vehicle transport" },
];

const FAQ_DATA = [
  {
    question: "How fast can you reach me in an emergency?",
    answer: "Our average emergency response time in San Diego is 20-35 minutes. For highway breakdowns on I-5, I-8, I-15, or SR-163, we often arrive faster due to our strategic positioning. When you call, we dispatch the nearest available truck immediately and give you an accurate ETA.",
  },
  {
    question: "What should I do while waiting for the tow truck?",
    answer: "First, ensure your safety: turn on hazard lights, move to a safe location if possible (behind guardrails on highways), and stay visible. Keep your phone charged and accessible. If you're on a busy highway, stay in your vehicle with seatbelt fastened until we arrive. Our dispatcher will keep you updated on the truck's location.",
  },
  {
    question: "Do you charge extra for emergency or late-night calls?",
    answer: "We maintain transparent, competitive pricing around the clock. While some situations (like highway recoveries or complex extractions) may cost more due to equipment needs, we don't add arbitrary 'emergency fees.' You'll know the price before we dispatch.",
  },
  {
    question: "Can you help with highway breakdowns?",
    answer: "Absolutely. We regularly assist drivers on I-5, I-8, I-15, SR-163, and all San Diego County highways. Our drivers are trained for highway safety protocols and carry proper equipment for shoulder extractions. We coordinate with CHP when needed.",
  },
  {
    question: "What if I'm not sure where I am?",
    answer: "No problem. We can help you identify your location using your phone's GPS, nearby mile markers, exit numbers, or landmarks. Our dispatchers are familiar with San Diego and can often pinpoint your location from a brief description.",
  },
  {
    question: "Do you provide emergency towing for all vehicle types?",
    answer: "Yes. Our emergency fleet includes flatbeds for all-wheel-drive vehicles, luxury cars, and lowered vehicles, plus wheel-lift trucks for standard vehicles and tight spaces. Whether you drive a compact car, SUV, truck, or motorcycle, we can help.",
  },
];

export default function EmergencyTowingSanDiegoPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CloseBy Towing - Emergency Services",
    image: "https://www.closebytowing.com/hero/home-hero.webp",
    "@id": "https://www.closebytowing.com/san-diego/emergency-towing",
    url: "https://www.closebytowing.com/san-diego/emergency-towing",
    telephone: CONTACT.phoneRaw,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Diego",
      addressRegion: "CA",
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
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
                  "name": "Emergency Towing",
                  "item": "https://www.closebytowing.com/san-diego/emergency-towing"
            }
      ]
}) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO - Urgent, action-focused design with red accents */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e1e4a] via-[#2d1f47] to-[#1e1e4a]">
        {/* Animated pulse effect for urgency */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ffba42]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Dispatching Now - 24/7 Emergency Response
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Emergency Towing<br />
              <span className="text-[#ffba42]">San Diego</span>
            </h1>

            <p className="text-xl sm:text-2xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              When every minute counts. Immediate dispatch, average arrival 20-35 minutes. Highway breakdowns, accidents, urgent situations.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xl shadow-lg shadow-red-600/30 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now: {CONTACT.phone}
              </a>
              <Link
                href="/san-diego/towing"
                className="inline-flex items-center justify-center gap-2 px-8 py-5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition-all"
              >
                Not urgent? Standard towing
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                20-35 min avg response
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                All highways covered
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Licensed & insured
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN TO CALL - Scenario-based */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1e1e4a] mb-4">
              When Every Minute Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Emergency situations require immediate response. Here&apos;s when to call our emergency line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Highway breakdown */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-red-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e1e4a] mb-3">Highway Breakdown</h3>
              <p className="text-gray-600 leading-relaxed">
                Stranded on I-5, I-8, I-15, or SR-163? Highway breakdowns are dangerous. We prioritize these calls and coordinate with CHP when needed. Stay in your vehicle with hazards on - we&apos;re coming.
              </p>
            </div>

            {/* Late night emergency */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e1e4a] mb-3">Late Night / Early Morning</h3>
              <p className="text-gray-600 leading-relaxed">
                2 AM and your car won&apos;t start? We maintain full dispatch capability around the clock. Our night crew responds just as fast as daytime - no reduced service, no excuses.
              </p>
            </div>

            {/* Unsafe location */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e1e4a] mb-3">Unsafe Location</h3>
              <p className="text-gray-600 leading-relaxed">
                Broken down in an unfamiliar or uncomfortable area? Your safety is the priority. Call us immediately - we&apos;ll get there fast and get you somewhere safe.
              </p>
            </div>

            {/* Blocking traffic */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e1e4a] mb-3">Blocking Traffic</h3>
              <p className="text-gray-600 leading-relaxed">
                Vehicle stuck in a lane, intersection, or parking lot entrance? These situations escalate quickly. We&apos;ll clear you out fast to prevent accidents and tickets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHWAYS WE COVER */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#1e1e4a]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Every San Diego Highway Covered
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Our trucks are strategically positioned across the county for rapid highway response.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {["I-5", "I-8", "I-15", "I-805", "SR-163", "SR-52", "SR-94", "SR-125", "SR-56", "SR-78"].map((highway) => (
              <div key={highway} className="p-6 rounded-xl bg-white/10 border border-white/10 text-center hover:bg-white/20 transition-all">
                <span className="text-2xl font-black text-[#ffba42]">{highway}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT TO DO WHILE WAITING */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1e1e4a] text-center mb-12">
            While You Wait for Help
          </h2>

          <div className="space-y-6">
            {[
              { num: "1", title: "Get Safe", desc: "Turn on hazards, pull as far off the road as possible, set up flares or triangles if you have them." },
              { num: "2", title: "Stay Visible", desc: "Keep interior lights on at night. If you must exit, wear bright clothing and stay behind guardrails." },
              { num: "3", title: "Stay in Touch", desc: "Keep your phone charged. We'll text you driver details and a tracking link when dispatched." },
              { num: "4", title: "Don't Accept Random Help", desc: "Well-meaning strangers can cause more damage. Wait for our professional equipment." },
            ].map((step) => (
              <div key={step.num} className="flex gap-6 p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-[#1e1e4a] flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-[#ffba42]">{step.num}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1e1e4a] mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS WE SERVE */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1e1e4a] text-center mb-8">
            Emergency Towing Across San Diego
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {NEARBY_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={area.slug === "chula-vista" ? "/chula-vista" : `/san-diego/${area.slug}`}
                className="group flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#ffba42] hover:bg-[#ffba42]/5 transition-all"
              >
                <span className="font-medium text-[#1e1e4a]">{area.name}</span>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-[#ffba42] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1e1e4a] text-center mb-8">
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RELATED_SERVICES.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group flex items-center justify-between p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#ffba42]/30 hover:shadow-lg transition-all"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#1e1e4a] mb-1">{service.name}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-[#ffba42] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1e1e4a] text-center mb-12">
            Emergency Towing FAQ
          </h2>
          <div className="space-y-4">
            {FAQ_DATA.map((faq, idx) => (
              <details key={idx} className="group rounded-2xl border border-gray-200 bg-white hover:border-[#ffba42]/50 transition-all overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-[#1e1e4a] list-none">
                  <span className="pr-4">{faq.question}</span>
                  <svg className="w-5 h-5 text-[#ffba42] flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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

      {/* FINAL CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-red-600 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/noise.png')] opacity-5" />
        </div>
        <div className="relative mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Emergency? Call Now.
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We&apos;re dispatching trucks right now across San Diego.
          </p>
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="inline-flex items-center gap-3 px-12 py-6 rounded-xl bg-white text-red-600 font-bold text-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {CONTACT.phone}
          </a>
        </div>
      </section>
    </main>
  );
}
