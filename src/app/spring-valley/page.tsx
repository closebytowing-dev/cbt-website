
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import Reviews from "@/components/Reviews";

/* ─── SEO METADATA ─── */
export const metadata: Metadata = {
  title:
    "Spring Valley Tow Truck Service | Casa de Oro & East County | CloseBy",
  description:
    "Spring Valley's trusted tow truck company. Covering Casa de Oro, Dictionary Hill, La Presa, Sweetwater Summit & the SR-54/SR-125/SR-94 corridors. 20-min East County response. Call (858) 999-9293.",
  keywords:
    "Spring Valley tow truck, towing Spring Valley CA, Casa de Oro towing, Dictionary Hill tow truck, La Presa towing, SR-54 Spring Valley, SR-125 towing, Jamacha Road towing",
  openGraph: {
    title: "Spring Valley Tow Truck — East County's Canyon Community | CloseBy",
    description:
      "Stranded in Spring Valley? CloseBy Towing covers Casa de Oro to La Presa, Dictionary Hill to Sweetwater Summit. 20-min response, 24/7.",
    url: "https://www.closebytowing.com/spring-valley",
    type: "website",
  },
  alternates: { canonical: "https://www.closebytowing.com/spring-valley" },
};

/* ─── SPRING VALLEY NEIGHBORHOODS — unique data ─── */
const NEIGHBORHOODS = [
  {
    name: "Casa de Oro",
    streets: "Campo Rd, Kenwood Dr, Conrad Dr",
    detail:
      "Spanish for 'House of Gold' — the historic heart of Spring Valley. The Casa de Oro shopping district along Campo Road anchors the community. Tight residential streets, older infrastructure, and hilly driveways make breakdowns here a regular call.",
    eta: "15–20 min",
    color: "from-yellow-500 to-amber-600",
  },
  {
    name: "Dictionary Hill",
    streets: "Dictionary Hill Rd, Helix St, Loma Ln",
    detail:
      "Spring Valley's crown jewel — a nature preserve with panoramic views from Cuyamaca Peak to Point Loma. The steep, winding residential streets leading up the hill challenge even experienced drivers. Our winch-equipped trucks handle the grades.",
    eta: "18–25 min",
    color: "from-emerald-500 to-green-600",
  },
  {
    name: "La Presa",
    streets: "Sweetwater Springs Blvd, Lemon Ave, Elkelton Blvd",
    detail:
      "Southern Spring Valley near the Sweetwater Reservoir. A quiet residential area with canyon-adjacent homes and easy access to SR-125. Dead batteries and flat tires from the reservoir parking areas are a common call.",
    eta: "18–24 min",
    color: "from-sky-500 to-blue-600",
  },
  {
    name: "Bancroft & Sweetwater",
    streets: "Bancroft Dr, Sweetwater Rd, Troy St",
    detail:
      "Spring Valley's commercial crossroads. The Town Center shopping plaza, restaurants, and community services cluster here. Parking lot lockouts, fender benders at busy intersections, and dead batteries keep us busy daily.",
    eta: "15–22 min",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Jamacha Corridor",
    streets: "Jamacha Rd, Jamacha Blvd, Fury Ln",
    detail:
      "The eastern spine of Spring Valley running from Rancho San Diego down to SR-54. Jamacha Road carries heavy commuter traffic, and the intersection with Sweetwater Springs sees frequent incidents during rush hour.",
    eta: "16–22 min",
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Hidden Valley & Canyons",
    streets: "Grand Ave, Helix View Dr, Canyon Rd",
    detail:
      "The tucked-away canyon neighborhoods that give Spring Valley its character. Narrow roads, blind curves, and limited cell service make breakdowns here stressful — but we know every trail and turnaround.",
    eta: "20–28 min",
    color: "from-rose-500 to-pink-600",
  },
];

/* ─── FREEWAY & MAJOR ROAD COVERAGE ─── */
const ROAD_NETWORK = [
  {
    route: "State Route 54",
    tag: "SR-54",
    detail: "The primary east-west connector linking Spring Valley to National City and the I-5/I-805 corridors. The SR-54/SR-125 interchange on Spring Valley's western edge is a high-volume breakdown zone during commute hours.",
    exits: ["Sweetwater Rd", "Jamacha Rd", "Briarwood Rd", "Bancroft Dr"],
  },
  {
    route: "State Route 125",
    tag: "SR-125",
    detail: "The toll road running along Spring Valley's eastern border connects to Otay Mesa and the South Bay. The elevated highway means breakdowns require shoulder recovery expertise — our drivers handle this corridor regularly.",
    exits: ["Sweetwater Springs", "Jamacha Rd", "SR-54 Interchange"],
  },
  {
    route: "State Route 94",
    tag: "SR-94",
    detail: "The Martin Luther King Jr. Freeway skirts Spring Valley's northern edge, connecting to downtown San Diego. The Campo Rd on-ramp and Lemon Grove interchange are key access points we cover daily.",
    exits: ["Campo Rd", "Lemon Grove Ave", "Euclid Ave", "College Ave"],
  },
];

/* ─── SERVICES tailored to Spring Valley ─── */
const SV_SERVICES = [
  {
    name: "Canyon & Hill Recovery",
    detail: "Steep driveways, canyon roads, and the Dictionary Hill grades. Winch-equipped trucks for Spring Valley's unique terrain.",
    href: "/services/winch-out",
    icon: "⛰️",
  },
  {
    name: "Freeway Breakdown Response",
    detail: "SR-54, SR-125, and SR-94 shoulder recoveries. CHP-coordinated rapid response for disabled vehicles.",
    href: "/services/towing",
    icon: "🛣️",
  },
  {
    name: "Residential Towing",
    detail: "Narrow driveways, tight cul-de-sacs, and hillside properties. Our flatbed fits where others won't.",
    href: "/services/towing",
    icon: "🏡",
  },
  {
    name: "Jump Start Service",
    detail: "Dead battery at Casa de Oro shopping center, Sweetwater Summit trailhead, or your driveway? 20-minute response.",
    href: "/services/jump-start",
    icon: "🔋",
  },
  {
    name: "Lockout Service",
    detail: "Keys locked in your car at the Town Center, a trailhead, or a canyon overlook? Non-destructive entry in minutes.",
    href: "/services/lockout",
    icon: "🔑",
  },
  {
    name: "Tire & Fuel Help",
    detail: "Flat tire on Jamacha Rd or ran empty on Campo? We bring fuel or swap your spare on-site — no tow needed.",
    href: "/services/tire-change",
    icon: "⛽",
  },
];

/* ─── FAQ ─── */
const FAQ_DATA = [
  {
    q: "How fast can you reach Spring Valley?",
    a: "Our average response to Spring Valley is 20 minutes. We stage trucks near the SR-54/Sweetwater Rd area, giving us quick access to Casa de Oro, the Bancroft corridor, and La Presa. Canyon neighborhoods like Dictionary Hill and Hidden Valley may take a few extra minutes due to terrain.",
  },
  {
    q: "Can you handle the steep hills around Dictionary Hill?",
    a: "Yes — our trucks are winch-equipped specifically for terrain like Dictionary Hill's grades. The narrow, winding streets and steep driveways are no problem. We recover vehicles from hillside properties, canyon edges, and the nature preserve access roads regularly.",
  },
  {
    q: "Do you cover the SR-125 toll road?",
    a: "Absolutely. We respond to breakdowns on SR-125 from the Jamacha Rd interchange down to Otay Mesa. The elevated toll road requires specialized shoulder recovery — our drivers are experienced with the limited access points and coordinate with CHP for safe operations.",
  },
  {
    q: "What does towing cost in Spring Valley?",
    a: "Local towing within Spring Valley starts at $95 with $5 per additional mile. Jump starts and lockouts start at $65. Canyon recoveries involving winch work may have additional equipment fees — but we always quote the exact price before dispatching. No surprises.",
  },
  {
    q: "Do you tow from apartment complexes in Spring Valley?",
    a: "Yes. Spring Valley has many apartment and condo communities, and we're experienced with their parking lots, carports, and access restrictions. We also work with property managers for authorized towing when needed.",
  },
  {
    q: "What if I break down on Jamacha Road during rush hour?",
    a: "Jamacha Road is one of Spring Valley's busiest corridors, especially during commute hours. We prioritize road-blocking breakdowns for safety. Our dispatcher will coordinate your location and get a truck to you as fast as possible — typically within 20 minutes even in traffic.",
  },
];

/* ─── NEARBY AREAS ─── */
const NEARBY = [
  { name: "La Mesa", href: "/la-mesa" },
  { name: "El Cajon", href: "/el-cajon" },
  { name: "Lemon Grove", href: "/san-diego/lemon-grove" },
  { name: "National City", href: "/national-city" },
  { name: "Chula Vista", href: "/chula-vista" },
  { name: "Rancho San Diego", href: "/san-diego/rancho-san-diego" },
  { name: "Bonita", href: "/san-diego/bonita" },
  { name: "San Ysidro", href: "/san-diego/san-ysidro" },
];

/* ════════════════════════════════════════════════════════════ */
/*  PAGE COMPONENT                                            */
/* ════════════════════════════════════════════════════════════ */
export default function SpringValleyPage() {
  return (
    <main className="bg-stone-50">

      {/* ══════════ HERO — Sunlit residential neighborhood ══════════ */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden bg-[#1a2e1a]">
        {/* Real Spring Valley towing photo — bright daytime residential */}
        <div className="absolute inset-0">
          <Image
            src="/hero/spring-valley-towing.webp"
            alt="CloseBy Towing truck recovering a classic Ford in a Spring Valley neighborhood"
            fill
            priority
            className="object-cover object-[center_40%]"
            sizes="100vw"
          />
          {/* Warm golden-hour grade — preserves the sunny California feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e1a] via-[#1a2e1a]/50 to-amber-900/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e1a]/90 via-[#1a2e1a]/45 to-transparent" />
          {/* Warm tint to enhance the sunlit look */}
          <div className="absolute inset-0 bg-amber-800/10 mix-blend-multiply" />
          {/* Soft vignette */}
          <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.4)]" />
        </div>

        {/* Diagonal accent — unique to Spring Valley */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-500/[0.06] to-transparent pointer-events-none" />

        {/* Canyon ridgeline silhouette at bottom — unique SVG */}
        <div className="absolute bottom-0 left-0 right-0 z-[5]">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-20 sm:h-28">
            <path d="M0,55 L60,40 L140,58 L240,22 L340,48 L420,18 L540,42 L660,28 L780,52 L880,20 L1000,45 L1100,25 L1200,50 L1320,30 L1440,45 L1440,100 L0,100 Z" fill="#292524" opacity="0.08" />
            <path d="M0,75 C240,95 480,60 720,80 C960,100 1200,65 1440,80 L1440,100 L0,100 Z" fill="#faf5f0" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-28 pt-32 sm:pb-36 sm:pt-44 w-full">
          {/* ZIP badge */}
          <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-md border border-green-400/30 rounded-full px-5 py-2.5 mb-6 shadow-lg shadow-black/10">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-100 text-sm font-semibold tracking-wide">
              91977 &bull; 91978 &bull; East County
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-[1.05] max-w-4xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
            Towing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-green-300 to-emerald-400 mt-1">
              Spring Valley
            </span>
          </h1>

          <p className="mt-7 text-lg sm:text-xl text-stone-200 leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
            Need a <span className="text-lime-300 font-semibold">tow truck in Spring Valley</span>? From{" "}
            <span className="text-lime-300 font-semibold">Casa de Oro</span> to{" "}
            <span className="text-lime-300 font-semibold">Dictionary Hill</span> and the{" "}
            <span className="text-lime-300 font-semibold">Sweetwater canyons</span> — our trucks handle
            the hills, the curves, and the terrain that defines this community.
          </p>

          {/* Glassmorphism stat cards — warm backdrop for daytime photo */}
          <div className="mt-8 flex flex-wrap gap-4">
            {[
              { value: "~20", label: "Min Response" },
              { value: "24/7", label: "Available" },
              { value: "SR-54", label: "SR-125 & 94" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-black/25 backdrop-blur-lg rounded-2xl px-7 py-4 text-center border border-white/[0.15] min-w-[110px] hover:bg-black/30 transition-colors shadow-lg"
              >
                <div className="text-2xl sm:text-3xl font-black text-lime-300">{stat.value}</div>
                <div className="text-xs sm:text-sm text-stone-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs — warm green with amber glow */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-9 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-green-700/30 hover:shadow-green-600/50 transition-all hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <svg className="w-5 h-5 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="relative">{CONTACT.phone}</span>
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/15 backdrop-blur-md hover:bg-white/25 text-white px-9 py-4 rounded-2xl font-bold text-lg transition-all border border-white/20 shadow-lg"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Trust line */}
          <div className="mt-10 flex flex-wrap gap-6 text-stone-300 text-sm drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
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

      {/* ── REVIEWS ── */}
      <div className="relative z-20 -mt-24">
        <Reviews />
      </div>

      {/* ══════════ SPRING VALLEY IDENTITY ══════════ */}
      <section className="py-20 sm:py-28 bg-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-green-700 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Why Spring Valley Needs Canyon-Ready Towers
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              East County&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Hidden Hillside
              </span>
            </h2>
            <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-[17px] text-slate-600 leading-relaxed">
              <p>
                Spring Valley isn&apos;t flat suburban sprawl — it&apos;s a community carved into canyons and draped over hills.
                <strong className="text-slate-800"> Dictionary Hill</strong>, the neighborhood&apos;s high point, offers
                panoramic views but punishes vehicles with steep grades and hairpin turns.{" "}
                <strong className="text-slate-800">Casa de Oro</strong> — &quot;House of Gold&quot; — anchors the community
                with its historic shopping district along Campo Road.
              </p>
              <p>
                Three state routes converge here: <strong className="text-slate-800">SR-54</strong> connects west to
                National City and the bay, <strong className="text-slate-800">SR-125</strong> runs the eastern toll
                corridor to Otay Mesa, and <strong className="text-slate-800">SR-94</strong> links north toward downtown
                San Diego. Add <strong className="text-slate-800">Jamacha Road</strong> — Spring Valley&apos;s busiest
                surface street — and <strong className="text-slate-800">Sweetwater Road</strong> winding through the
                canyons, and you get a community that keeps tow trucks busy around the clock.
              </p>
              <p>
                The <strong className="text-slate-800">Sweetwater Reservoir</strong> and{" "}
                <strong className="text-slate-800">Sweetwater Summit Regional Park</strong> draw hikers and cyclists
                whose vehicles sometimes don&apos;t cooperate after a long day on the trails. Our trucks are staged inside
                Spring Valley so we don&apos;t fight the same canyon traffic to reach you.
              </p>
            </div>

            {/* Key facts card */}
            <div className="bg-gradient-to-br from-[#1a2e1a] via-[#243d24] to-[#1a2e1a] rounded-3xl p-8 sm:p-10 text-white shadow-2xl border border-white/[0.06] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl" />
              <h3 className="font-bold text-lg mb-8 text-green-400 relative">Spring Valley at a Glance</h3>
              <div className="space-y-5 relative">
                {[
                  { label: "Casa de Oro", note: "Historic community center on Campo Rd" },
                  { label: "Dictionary Hill", note: "Nature preserve with panoramic views" },
                  { label: "La Presa", note: "Residential area near Sweetwater Reservoir" },
                  { label: "Sweetwater Summit", note: "Regional park & trailhead" },
                  { label: "Jamacha Road", note: "Primary commercial corridor" },
                  { label: "SR-54 / SR-125", note: "Freeway interchange at west edge" },
                  { label: "Town Center", note: "Bancroft & Sweetwater shopping hub" },
                  { label: "60,000+ Residents", note: "San Diego's largest unincorporated area" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                    <div>
                      <span className="font-semibold text-white">{item.label}</span>
                      <span className="text-stone-400 text-sm ml-2">— {item.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ NEIGHBORHOOD-BY-NEIGHBORHOOD COVERAGE ══════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-stone-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-green-700 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Neighborhood-by-Neighborhood
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
              Every Canyon &amp; Hill in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Spring Valley
              </span>
            </h2>
            <p className="mt-5 text-slate-500 text-lg max-w-2xl mx-auto">
              Six dispatch zones covering flat streets to steep canyon grades. We know where the roads narrow and where cell service drops.
            </p>
            <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEIGHBORHOODS.map((d) => (
              <div
                key={d.name}
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-200/80 hover:border-green-200 relative overflow-hidden hover:-translate-y-1"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${d.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-green-700 transition-colors">
                    {d.name}
                  </h3>
                  <span className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 text-xs font-bold px-4 py-1.5 rounded-full border border-green-200/60">
                    {d.eta}
                  </span>
                </div>
                <p className="text-stone-400 text-xs font-semibold uppercase tracking-widest mb-3">{d.streets}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{d.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FREEWAY & ROAD COVERAGE ══════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#1a2e1a] via-[#243d24] to-[#1a2e1a] text-white relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-green-400 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Road &amp; Freeway Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
              SR-54, SR-125 &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">SR-94</span>
            </h2>
            <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {ROAD_NETWORK.map((r) => (
              <div
                key={r.tag}
                className="group bg-white/[0.04] backdrop-blur-sm rounded-3xl p-8 border border-white/[0.08] hover:border-green-500/30 transition-all duration-500 hover:bg-white/[0.07]"
              >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-[#1a2e1a] px-5 py-2 rounded-full font-black text-lg mb-6 shadow-lg shadow-green-500/20">
                  {r.tag}
                </div>
                <h3 className="font-bold text-lg text-white mb-3">{r.route}</h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-6">{r.detail}</p>
                <div className="flex flex-wrap gap-2">
                  {r.exits.map((e) => (
                    <span key={e} className="text-xs bg-white/[0.08] text-stone-300 px-3 py-1.5 rounded-full border border-white/[0.08] hover:border-green-500/30 transition-colors">
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-green-700 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              What We Do in Spring Valley
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
              Services Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Canyon Country
              </span>
            </h2>
            <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SV_SERVICES.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="group bg-gradient-to-b from-white to-stone-50/80 hover:from-green-50 hover:to-white rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:shadow-green-100/50 border border-stone-200/80 hover:border-green-300 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-green-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-4xl block mb-5 relative">{s.icon}</span>
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-green-700 transition-colors mb-3 relative">
                  {s.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed relative">{s.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TRUST DIFFERENTIATORS ══════════ */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "⛰️", label: "Canyon-Ready" },
              { icon: "⏱️", label: "20 Min Avg ETA" },
              { icon: "🛡️", label: "Licensed & Insured" },
              { icon: "💰", label: "Upfront Pricing" },
              { icon: "🇺🇸", label: "Military Discount" },
              { icon: "🌙", label: "True 24/7 Service" },
            ].map((t) => (
              <div key={t.label} className="group bg-white rounded-2xl p-6 text-center shadow-sm border border-stone-200/80 hover:shadow-lg hover:border-green-200 transition-all duration-300 hover:-translate-y-0.5">
                <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform duration-300">{t.icon}</span>
                <span className="text-slate-700 text-sm font-bold">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ NEARBY AREAS ══════════ */}
      <section className="py-20 sm:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Also Serving{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Nearby Areas
              </span>
            </h2>
            <p className="mt-3 text-slate-500">Neighboring communities we reach in minutes.</p>
            <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {NEARBY.map((a) => (
              <Link
                key={a.name}
                href={a.href}
                className="group bg-white hover:bg-gradient-to-br hover:from-green-50 hover:to-white rounded-2xl p-6 text-center transition-all duration-300 border border-stone-200/80 hover:border-green-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="font-bold text-slate-800 group-hover:text-green-700 transition-colors">{a.name}</span>
                <span className="block text-xs text-slate-400 mt-1 group-hover:text-green-500 transition-colors">View area &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-green-700 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Spring Valley Towing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">FAQ</span>
            </h2>
            <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
          </div>
          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <details key={i} className="group bg-stone-50 rounded-2xl border border-stone-200/80 overflow-hidden hover:border-green-200 transition-colors">
                <summary className="flex items-center justify-between p-6 sm:p-7 cursor-pointer hover:bg-white transition-colors">
                  <h3 className="font-semibold text-slate-900 pr-8 text-left">{faq.q}</h3>
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0 group-open:bg-green-600 transition-colors">
                    <svg className="w-4 h-4 text-green-600 transition-all group-open:rotate-180 group-open:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 sm:px-7 pb-6 sm:pb-7">
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FINAL CTA ══════════ */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-[#1a2e1a] via-[#243d24] to-[#1a2e1a] text-white relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/[0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-emerald-500/[0.05] rounded-full blur-[100px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight">
            Stranded in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-300 to-lime-400">
              Spring Valley?
            </span>
          </h2>
          <p className="mt-6 text-xl text-stone-300 max-w-lg mx-auto">
            Casa de Oro to Dictionary Hill — one call and we&apos;re navigating the canyons to reach you.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-green-600/30 hover:shadow-green-600/50 transition-all hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <svg className="w-6 h-6 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="relative">Call: {CONTACT.phone}</span>
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/[0.08] hover:bg-white/[0.15] text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all border border-white/[0.15] hover:border-white/30 backdrop-blur-sm"
            >
              WhatsApp Us
            </a>
          </div>
          <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-stone-400 text-sm">
            <span className="flex items-center gap-2">
              <span className="text-yellow-400">&#9733;</span> 5.0 Google Rating
            </span>
            <span>No Hidden Fees</span>
            <span>All Payment Methods</span>
            <span>Se Habla Espa&ntilde;ol</span>
          </div>
        </div>
      </section>

      {/* ══════════ STRUCTURED DATA ══════════ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.closebytowing.com" },
              { "@type": "ListItem", position: 2, name: "San Diego", item: "https://www.closebytowing.com/san-diego" },
              { "@type": "ListItem", position: 3, name: "Spring Valley", item: "https://www.closebytowing.com/spring-valley" },
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
            "@id": "https://www.closebytowing.com/spring-valley",
            name: "CloseBy Towing - Spring Valley",
            description:
              "Spring Valley tow truck service covering Casa de Oro, Dictionary Hill, La Presa, Sweetwater Summit & SR-54/SR-125/SR-94 corridors. 24/7 East County dispatch.",
            url: "https://www.closebytowing.com/spring-valley",
            telephone: CONTACT.phone,
            areaServed: [
              { "@type": "PostalAddress", postalCode: "91977", addressLocality: "Spring Valley", addressRegion: "CA" },
              { "@type": "PostalAddress", postalCode: "91978", addressLocality: "Spring Valley", addressRegion: "CA" },
            ],
            geo: { "@type": "GeoCoordinates", latitude: 32.7448, longitude: -116.9989 },
            serviceType: ["Towing Service", "Roadside Assistance", "Hill Terrain Recovery", "Canyon Recovery"],
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
            mainEntity: FAQ_DATA.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </main>
  );
}
