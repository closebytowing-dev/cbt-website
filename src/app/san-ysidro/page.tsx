
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT, areaHref } from "@/lib/constants";

// San Ysidro ZIP codes
const SAN_YSIDRO_ZIP_CODES = ["92173"];

// SEO Metadata
export const metadata: Metadata = {
  title: "San Ysidro Towing | 92173 | 24/7 | CloseBy",
  description:
    "Towing in San Ysidro 92173. Serving the border crossing, Las Americas Premium Outlets, I-5/I-805 corridors. 25-40 min response.",
  keywords:
    "towing San Ysidro, San Ysidro tow truck, border crossing towing, Las Americas Outlets towing, roadside assistance San Ysidro, I-5 towing, tow truck near me San Ysidro",
  openGraph: {
    title: "San Ysidro Towing | 24/7 | CloseBy",
    description:
      "Local towing experts serving San Ysidro 24/7. From the border crossing to Las Americas Outlets, we're your neighborhood towing solution.",
    url: "https://www.closebytowing.com/san-ysidro",
    type: "website",
  },
  alternates: {
    canonical: "https://www.closebytowing.com/san-ysidro",
  },
};

// San Ysidro specific landmarks
const LOCAL_LANDMARKS = [
  {
    name: "San Ysidro Port of Entry",
    description: "24/7 service near the world's busiest border crossing",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    name: "Las Americas Premium Outlets",
    description: "Quick response to outlet mall parking & shopping areas",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    name: "I-5 & I-805 Border Area",
    description: "Fast freeway service near border approach lanes",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    name: "Camino de la Plaza",
    description: "Serving all retail & commercial areas",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z" />
      </svg>
    ),
  },
  {
    name: "San Ysidro Transit Center",
    description: "Park & ride, trolley station, and commuter areas",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    name: "Beyer Boulevard Corridor",
    description: "Residential neighborhoods & local businesses",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
];

// Nearby neighborhoods
const NEARBY_AREAS = [
  { name: "Chula Vista", slug: "chula-vista" },
  { name: "Otay Mesa", slug: "otay-mesa" },
  { name: "Imperial Beach", slug: "imperial-beach" },
  { name: "National City", slug: "national-city" },
  { name: "Bonita", slug: "bonita" },
  { name: "Spring Valley", slug: "spring-valley" },
];

// Services offered
const SERVICES = [
  { name: "General Towing", slug: "towing", desc: "Standard & flatbed towing for all vehicles" },
  { name: "Emergency Towing", slug: "emergency-towing", desc: "Urgent response for accidents & breakdowns" },
  { name: "Flatbed Towing", slug: "flatbed-towing", desc: "Safe transport for luxury & low-profile cars" },
  { name: "Accident Towing", slug: "accident-towing", desc: "Post-collision recovery & insurance coordination" },
  { name: "Roadside Assistance", slug: "roadside-assistance", desc: "Jump starts, lockouts, tire changes & fuel" },
];

// FAQ Data specific to San Ysidro
const FAQ_DATA = [
  {
    question: "Do you provide towing service near the San Ysidro border crossing?",
    answer:
      "Yes, we provide 24/7 towing and roadside assistance throughout San Ysidro, including areas near the San Ysidro Port of Entry. We're familiar with the border approach lanes, Camino de la Plaza, and all surrounding streets. Whether you're stuck before or after crossing, we can reach you quickly, typically within 25-40 minutes.",
  },
  {
    question: "Can you tow from Las Americas Premium Outlets?",
    answer:
      "Absolutely. We regularly service Las Americas Premium Outlets and know the parking lots well. Whether you have a dead battery, flat tire, or need a tow from the outlet mall, our drivers can navigate the parking areas efficiently and get you back on the road or to your destination.",
  },
  {
    question: "What if I break down on I-5 or I-805 near the border?",
    answer:
      "We provide fast freeway response on I-5 and I-805 throughout the San Ysidro area. The border approach lanes can be congested, but our drivers know alternate routes and can reach stranded vehicles on the shoulder quickly. We handle everything from simple jump starts to full towing services.",
  },
  {
    question: "Do you handle cross-border vehicle issues?",
    answer:
      "While we operate on the US side, we frequently assist travelers coming from or going to the border. If your vehicle breaks down after crossing, we can tow you to a local repair shop or help you get back on the road with roadside assistance. We understand the unique needs of cross-border travelers.",
  },
  {
    question: "How quickly can you respond in San Ysidro?",
    answer:
      "Our typical response time in San Ysidro is 25-40 minutes. We have drivers positioned throughout the South Bay area, allowing us to reach you quickly whether you're near the outlets, border crossing, transit center, or residential neighborhoods. We operate 24/7 and understand the importance of fast service in this busy international gateway.",
  },
];

export default function SanYsidroPage() {
  return (
    <main className="bg-slate-950">
      {/* HERO — Full-bleed photo with overlay */}
      <section className="relative min-h-[92vh] md:min-h-[88vh] flex items-end overflow-hidden">
        {/* Background Image */}
        <Image
          src="/neighborhoods/san-ysidro-hero.webp"
          alt="San Ysidro neighborhood near the US-Mexico border crossing in San Diego"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />

        {/* Accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400" />

        <div className="relative w-full max-w-7xl mx-auto px-4 pb-12 md:pb-20 pt-32">
          {/* ZIP badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-400/30 backdrop-blur-md rounded-full px-5 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 text-sm font-semibold tracking-wide uppercase">
              San Ysidro &bull; ZIP {SAN_YSIDRO_ZIP_CODES[0]} &bull; 24/7 Service
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight max-w-3xl">
            Towing at San Diego&apos;s
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Southern Gateway
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
            From the <span className="text-white font-semibold">border crossing</span> to{" "}
            <span className="text-white font-semibold">Las Americas Outlets</span> &mdash; fast, professional towing
            with <span className="text-emerald-400 font-semibold">25-40 minute</span> response times.
          </p>

          {/* CTA Row */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="group inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white hover:text-slate-900 px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/40"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {CONTACT.phone}
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all border border-white/20 hover:border-white/40"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Quick stats bar */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span><span className="text-white font-semibold">25-40 min</span> response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span><span className="text-white font-semibold">24/7</span> availability</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span><span className="text-white font-semibold">Licensed</span> & insured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span><span className="text-white font-semibold">Border area</span> experts</span>
            </div>
          </div>
        </div>
      </section>

      {/* LANDMARKS — Dark cards with teal accents */}
      <section className="relative py-20 sm:py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-emerald-400 font-semibold text-sm tracking-widest uppercase mb-3">Local Expertise</p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white">
              We Know San Ysidro
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              From the border crossing to Las Americas Outlets, our drivers know every street in this unique international gateway.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LOCAL_LANDMARKS.map((landmark, index) => (
              <div
                key={index}
                className="group relative bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  {landmark.icon}
                </div>
                <h3 className="font-bold text-lg text-white group-hover:text-emerald-400 transition-colors">
                  {landmark.name}
                </h3>
                <p className="mt-2 text-slate-400 text-sm leading-relaxed">{landmark.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT — Split layout with coverage info */}
      <section className="py-20 sm:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left content — 3 cols */}
            <div className="lg:col-span-3">
              <p className="text-emerald-400 font-semibold text-sm tracking-widest uppercase mb-3">About This Area</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                San Ysidro&apos;s Trusted
                <span className="text-emerald-400"> Towing Partner</span>
              </h2>

              <div className="mt-8 space-y-5 text-slate-300 text-lg leading-relaxed">
                <p>
                  San Ysidro is home to the <span className="text-white font-medium">world&apos;s busiest land border crossing</span>, connecting San Diego to Tijuana, Mexico. With thousands of vehicles passing through daily, plus major shopping destinations like Las Americas Premium Outlets, this vibrant community has unique towing needs.
                </p>
                <p>
                  Whether you&apos;re a local resident, cross-border shopper, commuter, or traveler, CloseBy Towing understands the urgency of vehicle breakdowns in this busy international gateway. Our drivers know the area intimately &mdash; from Camino de la Plaza to Beyer Boulevard, from the border approach lanes to the transit center.
                </p>
                <p>
                  We provide fast, professional towing and roadside assistance throughout San Ysidro, with typical response times of <span className="text-emerald-400 font-semibold">25-40 minutes</span>. Our team handles everything from simple jump starts to complex accident recovery.
                </p>
              </div>

              {/* Common calls */}
              <div className="mt-10 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-4 text-lg">Common San Ysidro Calls</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Border area breakdowns",
                    "Outlet mall dead batteries",
                    "I-5 freeway service",
                    "Transit center assistance",
                    "Camino de la Plaza towing",
                    "24/7 emergency service",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Coverage card — 2 cols */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                  Coverage Area
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Major Roads</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Camino de la Plaza", "Beyer Blvd", "San Ysidro Blvd", "Dairy Mart Rd", "E. San Ysidro Blvd", "I-5 Corridor"].map((road) => (
                        <span key={road} className="bg-slate-700/60 px-3 py-1.5 rounded-lg text-sm text-slate-300 border border-slate-600/50">
                          {road}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Freeways</h4>
                    <div className="flex flex-wrap gap-2">
                      {["I-5 South", "I-805 Connection", "Border Approach", "Via de San Ysidro"].map((freeway) => (
                        <span key={freeway} className="bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-lg text-sm font-medium border border-emerald-500/20">
                          {freeway}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Key Locations</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
                      {["Las Americas Outlets", "Border Crossing", "Transit Center", "Outlet Center", "PedWest/PedEast", "Local Neighborhoods"].map((loc) => (
                        <div key={loc} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-emerald-400" />
                          {loc}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick call card */}
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-6 text-center">
                <p className="text-emerald-100 text-sm font-medium mb-2">Need help now?</p>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="text-2xl font-black text-white hover:text-emerald-200 transition-colors"
                >
                  {CONTACT.phone}
                </a>
                <p className="text-emerald-200 text-sm mt-2">Available around the clock</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — Horizontal cards */}
      <section className="py-20 sm:py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-emerald-400 font-semibold text-sm tracking-widest uppercase mb-3">What We Offer</p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white">
              Services in San Ysidro
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Full range of towing and roadside services available 24/7 throughout the border community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={`/san-diego/${service.slug}`}
                className="group relative bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-white text-lg group-hover:text-emerald-400 transition-colors">
                    {service.name}
                  </h3>
                  <svg className="w-5 h-5 text-slate-600 group-hover:text-emerald-400 transition-colors flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Available in San Ysidro
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY AREAS */}
      <section className="py-20 sm:py-28 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-emerald-400 font-semibold text-sm tracking-widest uppercase mb-3">Expanding Reach</p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white">
              Also Serving Nearby Areas
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              San Ysidro connects to many South Bay communities. We serve them all.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {NEARBY_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={areaHref(area.slug)}
                className="group bg-slate-800/60 hover:bg-emerald-500/10 border border-slate-700 hover:border-emerald-500/30 rounded-xl py-5 px-4 text-center transition-all duration-300"
              >
                <span className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-emerald-400 font-semibold text-sm tracking-widest uppercase mb-3">Common Questions</p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white">
              San Ysidro Towing FAQ
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden transition-colors open:border-emerald-500/30"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                  <h3 className="font-semibold text-white pr-6 text-[15px] leading-snug">{faq.question}</h3>
                  <svg
                    className="w-5 h-5 text-emerald-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 -mt-1">
                  <p className="text-slate-400 leading-relaxed text-[15px]">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-950" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[200px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-600 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight">
            Need a Tow in
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              San Ysidro?
            </span>
          </h2>

          <p className="mt-6 text-xl text-emerald-100/80 max-w-2xl mx-auto">
            Don&apos;t wait. Our local drivers are ready to help you 24/7. Fast response, fair prices, professional service.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-2xl shadow-black/30"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {CONTACT.phone}
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all border border-white/20"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-emerald-200/70 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              5-Star Rated
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              24/7 Service
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
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.closebytowing.com" },
            { "@type": "ListItem", "position": 2, "name": "San Diego Towing", "item": "https://www.closebytowing.com/san-diego/towing" },
            { "@type": "ListItem", "position": 3, "name": "San Ysidro", "item": "https://www.closebytowing.com/san-ysidro" },
          ],
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.closebytowing.com/san-ysidro",
            name: "CloseBy Towing - San Ysidro",
            description:
              "Fast towing and roadside assistance in San Ysidro San Diego. Serving the border crossing, Las Americas Outlets, and all San Ysidro neighborhoods 24/7.",
            url: "https://www.closebytowing.com/san-ysidro",
            telephone: CONTACT.phone,
            address: {
              "@type": "PostalAddress",
              addressLocality: "San Diego",
              addressRegion: "CA",
              postalCode: SAN_YSIDRO_ZIP_CODES[0],
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 32.5555,
              longitude: -117.0461,
            },
            areaServed: {
              "@type": "Neighborhood",
              name: "San Ysidro",
              containedInPlace: { "@type": "City", name: "San Diego" },
            },
            serviceType: ["Towing Service", "Roadside Assistance"],
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
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
    </main>
  );
}
