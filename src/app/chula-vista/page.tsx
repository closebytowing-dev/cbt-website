
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import Reviews from "@/components/Reviews";

// Chula Vista ZIP codes
const ZIP_CODES = ["91910", "91911", "91913", "91914", "91915"];

export const metadata: Metadata = {
  title: "Tow Truck Service in Chula Vista | 24/7 Emergency Towing | CloseBy",
  description:
    "Fast tow truck service in Chula Vista CA. Serving Eastlake, Otay Ranch, Bayfront, Third Ave Village & I-805/SR-125 corridors. 20-minute response. Call (858) 999-9293.",
  keywords:
    "tow truck Chula Vista, Chula Vista towing, Eastlake towing, Otay Ranch tow truck, South Bay towing, Chula Vista roadside assistance, 24/7 towing Chula Vista, I-805 towing",
  openGraph: {
    title: "Tow Truck Service in Chula Vista | 24/7 | CloseBy Towing",
    description:
      "Chula Vista's trusted towing company. Eastlake, Otay Ranch, Bayfront & all South Bay neighborhoods. Fast response, fair pricing.",
    url: "https://www.closebytowing.com/chula-vista",
    type: "website",
  },
  alternates: {
    canonical: "https://www.closebytowing.com/chula-vista",
  },
};

// Chula Vista neighborhoods with response data
const NEIGHBORHOODS = [
  {
    name: "Eastlake",
    description:
      "Master-planned community with Eastlake Parkway, shopping plazas, and winding residential streets. Our drivers know every cul-de-sac.",
    response: "18 min",
    icon: "🏘️",
  },
  {
    name: "Otay Ranch",
    description:
      "From Otay Ranch Town Center to the Millenia development, we cover the fastest-growing part of Chula Vista day and night.",
    response: "20 min",
    icon: "🛒",
  },
  {
    name: "Chula Vista Bayfront",
    description:
      "Marina, waterfront hotels, and the Living Coast Discovery Center. Quick access via E Street and Marina Parkway.",
    response: "15 min",
    icon: "⛵",
  },
  {
    name: "Third Avenue Village",
    description:
      "Historic downtown Chula Vista. Boutique shops, restaurants, and the Chula Vista Heritage Museum area. Tight streets, no problem.",
    response: "14 min",
    icon: "🏛️",
  },
  {
    name: "Olympic Training Center",
    description:
      "Elite Athletic Training Center and surrounding neighborhoods off Olympic Parkway. Rapid freeway access via SR-125.",
    response: "22 min",
    icon: "🏅",
  },
  {
    name: "Bonita Long Canyon",
    description:
      "Eastern Chula Vista foothills, Bonita Long Canyon area, and the communities along Proctor Valley Road.",
    response: "25 min",
    icon: "🌄",
  },
];

// Major corridors and roads
const CORRIDORS = [
  { name: "I-805", type: "freeway", note: "E Street to Otay Valley Road" },
  { name: "SR-125", type: "freeway", note: "Olympic Pkwy to Otay Mesa" },
  { name: "I-5", type: "freeway", note: "E Street to Palomar Street" },
  { name: "SR-54", type: "freeway", note: "National City to Spring Valley" },
  { name: "Broadway", type: "road", note: "Downtown to Otay" },
  { name: "H Street", type: "road", note: "East-west through central CV" },
  { name: "E Street", type: "road", note: "Bayfront to I-805" },
  { name: "Olympic Pkwy", type: "road", note: "Eastlake to Otay Ranch" },
  { name: "Eastlake Pkwy", type: "road", note: "Otay Lakes to EastLake" },
  { name: "Third Avenue", type: "road", note: "Historic downtown corridor" },
];

// Services specific to Chula Vista needs
const SERVICES = [
  {
    name: "Emergency Towing",
    href: "/services/towing",
    description: "Broke down on I-805 or SR-125? We dispatch the closest truck to your Chula Vista location immediately.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    name: "Flatbed Transport",
    href: "/services/towing",
    description: "Safe flatbed towing for lowered vehicles, AWD, and luxury cars throughout the Chula Vista area.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    name: "Collision Recovery",
    href: "/services/collision-recovery",
    description: "Accident on I-805 through Chula Vista? We coordinate with CHP and handle vehicle recovery safely.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    name: "Jump Start",
    href: "/services/jump-start",
    description: "Dead battery at Otay Ranch Town Center or Eastlake? We jump start your car on the spot — fast.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    name: "Lockout Service",
    href: "/services/lockout",
    description: "Locked out at the Bayfront, the mall, or at home? We unlock your car without damage in minutes.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    name: "Gas Delivery",
    href: "/services/gas-delivery",
    description: "Ran out of gas on the way to Otay Ranch? We deliver fuel to your exact location in Chula Vista.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
];

// Nearby areas
const NEARBY_AREAS = [
  { name: "National City", slug: "national-city" },
  { name: "San Ysidro", slug: "san-ysidro" },
  { name: "Bonita", slug: "bonita" },
  { name: "Otay Mesa", slug: "otay-mesa" },
  { name: "Spring Valley", slug: "spring-valley" },
  { name: "Imperial Beach", slug: "imperial-beach" },
  { name: "Paradise Hills", slug: "paradise-hills" },
  { name: "Palm City", slug: "palm-city" },
];

// Chula Vista FAQ
const FAQ_DATA = [
  {
    question: "How fast can you get to Chula Vista?",
    answer:
      "Our average response time to Chula Vista is 20 minutes. We stage drivers near the I-805/H Street interchange for fast coverage from the Bayfront to Eastlake. I-805, SR-125, and I-5 give us rapid freeway access to every part of the city.",
  },
  {
    question: "Do you tow from I-805 through Chula Vista?",
    answer:
      "Yes — I-805 through Chula Vista is one of our busiest corridors. From the E Street on-ramp south to Otay Valley Road, we respond to breakdowns, accidents, and disabled vehicles on the freeway and all connecting ramps. We also cover SR-125 and I-5 interchanges.",
  },
  {
    question: "Do you serve Eastlake and Otay Ranch?",
    answer:
      "Absolutely. Eastlake and Otay Ranch are among our most-served neighborhoods. We know the shopping centers, winding residential streets, and the fastest routes through these master-planned communities — from Otay Ranch Town Center to the Millenia development.",
  },
  {
    question: "What does towing cost in Chula Vista?",
    answer:
      "Towing in Chula Vista starts at $95 for the hook-up plus $5 per mile. You get your exact price before we dispatch — no hidden fees, no surprises. Roadside services like jump starts and lockouts start at $65.",
  },
  {
    question: "Can you reach the Bayfront and marina area?",
    answer:
      "We serve the entire Chula Vista Bayfront including the marina, waterfront hotels, Living Coast Discovery Center, and the developing bayfront district. Our typical response to the Bayfront area is about 15 minutes.",
  },
  {
    question: "Do you offer service in Spanish?",
    answer:
      "Sí — se habla español. Many of our dispatchers and drivers are bilingual. Chula Vista has a large Spanish-speaking community and we want everyone to feel comfortable when they need help on the road.",
  },
];

export default function ChulaVistaPage() {
  return (
    <main className="bg-white">
      {/* ── HERO — Full-bleed sunset photo ── */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden bg-[#1a0e05]">
        {/* Real Chula Vista towing photo — sunset shot */}
        <div className="absolute inset-0">
          <Image
            src="/hero/chula-vista-towing.webp"
            alt="CloseBy Towing truck servicing a vehicle in Chula Vista at sunset"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0e05] via-[#1a0e05]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0e05]/85 via-[#1a0e05]/35 to-transparent" />
          {/* Warm sunset tint to enhance the golden-hour sky */}
          <div className="absolute inset-0 bg-orange-950/10 mix-blend-multiply" />
          {/* Vignette */}
          <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.5)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-16 pt-32 sm:pb-24 sm:pt-40 w-full">
          {/* ZIP badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-5 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-200 text-sm font-medium tracking-wide">
              Serving Chula Vista 24/7 &bull; {ZIP_CODES.slice(0, 3).join(" &bull; ")}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] max-w-3xl">
            Tow Truck Service
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 mt-2">
              in Chula Vista
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-amber-100/90 leading-relaxed max-w-2xl">
            San Diego County&apos;s second-largest city deserves fast, reliable towing. From{" "}
            <span className="text-amber-300 font-semibold">Eastlake</span> to the{" "}
            <span className="text-amber-300 font-semibold">Bayfront</span>, our drivers are stationed
            throughout the South Bay for{" "}
            <span className="text-amber-300 font-semibold">20-minute response</span>.
          </p>

          {/* Glassmorphism stat cards */}
          <div className="mt-8 flex flex-wrap gap-4">
            {[
              { value: "~20", label: "Min Response" },
              { value: "24/7", label: "Available" },
              { value: "$95", label: "Starting At" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 text-center border border-white/15 min-w-[100px]"
              >
                <div className="text-2xl sm:text-3xl font-black text-amber-300">{stat.value}</div>
                <div className="text-xs sm:text-sm text-amber-100/70">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <svg className="w-5 h-5 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="relative">Call: {CONTACT.phone}</span>
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all border border-white/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.124 1.521 5.86L0 24l6.335-1.652A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82c-1.99 0-3.87-.528-5.49-1.45l-.394-.234-3.758.98.998-3.648-.257-.408A9.78 9.78 0 012.18 12c0-5.422 4.398-9.82 9.82-9.82 5.422 0 9.82 4.398 9.82 9.82 0 5.422-4.398 9.82-9.82 9.82z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-10 flex flex-wrap gap-6 text-amber-200/60 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Dispatch active now
            </span>
            <span>Licensed &amp; Insured</span>
            <span>Se Habla Espa&ntilde;ol</span>
            <span>Military Discount</span>
          </div>
        </div>
      </section>

      {/* ── REVIEWS — scrolling carousel ── */}
      <div className="relative z-20 -mt-12">
        <Reviews />
      </div>

      {/* ── NEIGHBORHOODS WE SERVE ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              We Know <span className="text-amber-600">Every Corner</span> of Chula Vista
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Our drivers are stationed throughout the South Bay. No matter which Chula Vista neighborhood
              you&apos;re in, help is close by.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEIGHBORHOODS.map((n) => (
              <div
                key={n.name}
                className="group bg-slate-50 hover:bg-amber-50 rounded-2xl p-6 transition-all duration-200 hover:shadow-lg border border-slate-100 hover:border-amber-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{n.icon}</span>
                  <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">
                    ~{n.response}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-amber-700 transition-colors">
                  {n.name}
                </h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{n.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT CHULA VISTA + COVERAGE ── */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — Story */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Chula Vista&apos;s <span className="text-amber-600">Trusted Towing Company</span>
              </h2>
              <div className="mt-6 space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Chula Vista is the second-largest city in San Diego County — and one of the fastest-growing.
                  With over 275,000 residents spread from the Bayfront to the eastern foothills, the city&apos;s
                  road network is vast and varied.
                </p>
                <p>
                  Our drivers navigate Chula Vista daily. We know the congestion on H Street during rush hour,
                  the tight turns in Third Avenue Village, and the long stretches of Olympic Parkway between
                  Eastlake and Otay Ranch. When your car breaks down in Chula Vista, we don&apos;t need GPS
                  to find you — we already know the way.
                </p>
                <p>
                  Whether you need a tow from the I-805 shoulder, a jump start in an Eastlake parking lot, or
                  a lockout at the Bayfront marina, CloseBy Towing is the call to make.
                </p>
              </div>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="mt-8 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-amber-950 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: {CONTACT.phone}
              </a>
            </div>

            {/* Right — Coverage Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200">
              <h3 className="font-bold text-xl text-slate-900 mb-6">Chula Vista Road Coverage</h3>

              {/* Freeways */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Freeways &amp; Highways
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {CORRIDORS.filter((c) => c.type === "freeway").map((c) => (
                    <div key={c.name} className="bg-amber-50 rounded-lg p-3 border border-amber-100">
                      <div className="font-bold text-amber-800 text-lg">{c.name}</div>
                      <div className="text-xs text-amber-600">{c.note}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Major Roads */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  Major Roads
                </h4>
                <div className="flex flex-wrap gap-2">
                  {CORRIDORS.filter((c) => c.type === "road").map((c) => (
                    <span
                      key={c.name}
                      className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full text-sm font-medium border border-slate-200"
                    >
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* ZIP codes */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  ZIP Codes Served
                </h4>
                <div className="flex flex-wrap gap-2">
                  {ZIP_CODES.map((z) => (
                    <span
                      key={z}
                      className="bg-[#1e1e4a] text-white px-3 py-1.5 rounded-full text-sm font-bold"
                    >
                      {z}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES IN CHULA VISTA ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Towing &amp; Roadside Services in <span className="text-amber-600">Chula Vista</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Whatever you need on the road, we handle it — from emergency towing on I-805 to a quick
              jump start in your Eastlake driveway.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="group bg-slate-50 hover:bg-amber-50 rounded-2xl p-6 transition-all duration-200 hover:shadow-lg border border-slate-100 hover:border-amber-200"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-amber-700 transition-colors">
                  {s.name}
                </h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CLOSEBY — TRUST DIFFERENTIATORS ── */}
      <section className="py-16 sm:py-24 bg-[#1e1e4a] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why Chula Vista Chooses <span className="text-amber-400">CloseBy Towing</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Upfront Pricing", detail: "Know your price before we dispatch", icon: "💰" },
              { label: "20 Min Avg ETA", detail: "Staged throughout the South Bay", icon: "⚡" },
              { label: "Licensed & Insured", detail: "Full liability coverage on every job", icon: "🛡️" },
              { label: "Se Habla Español", detail: "Bilingual dispatch and drivers", icon: "🌎" },
              { label: "24/7 Availability", detail: "Nights, weekends, holidays — always", icon: "🕐" },
              { label: "No Damage Guarantee", detail: "Your vehicle arrives as loaded", icon: "✅" },
              { label: "Local Dispatch", detail: "San Diego–based, not a call center", icon: "📍" },
              { label: "Military Discount", detail: "Thank you for your service", icon: "🎖️" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-amber-400/30 transition-colors"
              >
                <span className="text-2xl">{item.icon}</span>
                <h3 className="mt-3 font-bold text-white">{item.label}</h3>
                <p className="mt-1 text-white/60 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEARBY AREAS ── */}
      <section className="py-16 sm:py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Also Serving <span className="text-amber-600">South Bay &amp; Beyond</span>
            </h2>
            <p className="mt-3 text-slate-600">
              Need a tow outside Chula Vista? We cover these neighboring areas too.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {NEARBY_AREAS.map((a) => (
              <Link
                key={a.slug}
                href={a.slug === "national-city" ? "/national-city" : `/san-diego/${a.slug}`}
                className="group bg-white rounded-xl p-4 text-center border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all"
              >
                <span className="font-semibold text-slate-900 group-hover:text-amber-700 transition-colors">
                  {a.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Chula Vista Towing <span className="text-amber-600">FAQ</span>
            </h2>
          </div>
          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <details
                key={i}
                className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden hover:border-amber-200 transition-colors"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-amber-50/50 transition-colors">
                  <h3 className="font-semibold text-slate-900 pr-8">{faq.question}</h3>
                  <svg
                    className="w-5 h-5 text-amber-500 transition-transform group-open:rotate-180 flex-shrink-0"
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

      {/* ── FINAL CTA ── */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-amber-900 via-orange-900 to-yellow-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('/noise.png')", backgroundRepeat: "repeat" }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold">
            Need a Tow Truck in <span className="text-amber-300">Chula Vista?</span>
          </h2>
          <p className="mt-6 text-xl text-amber-100">
            South Bay&apos;s trusted towing service. Fast response, fair pricing, 24/7.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-amber-950 px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
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
              WhatsApp Us
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-amber-200 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              5.0 Stars on Google
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              24/7 Service
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Licensed &amp; Insured
            </span>
          </div>
        </div>
      </section>

      {/* ── STRUCTURED DATA ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.closebytowing.com" },
              { "@type": "ListItem", position: 2, name: "Chula Vista Towing", item: "https://www.closebytowing.com/chula-vista" },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.closebytowing.com/chula-vista",
            name: "CloseBy Towing - Chula Vista",
            description:
              "Fast, reliable tow truck service in Chula Vista CA. Serving Eastlake, Otay Ranch, Bayfront, Third Avenue Village, and all South Bay neighborhoods 24/7.",
            url: "https://www.closebytowing.com/chula-vista",
            telephone: CONTACT.phone,
            areaServed: [
              { "@type": "City", name: "Chula Vista" },
              { "@type": "Place", name: "Eastlake" },
              { "@type": "Place", name: "Otay Ranch" },
            ],
            serviceType: ["Towing Service", "Roadside Assistance", "Emergency Towing", "Flatbed Towing"],
            priceRange: "$$",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_DATA.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />
    </main>
  );
}
