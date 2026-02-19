
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import Reviews from "@/components/Reviews";

/* ─── SEO METADATA ─── */
export const metadata: Metadata = {
  title:
    "National City Tow Truck Service | Mile of Cars & South Bay | CloseBy",
  description:
    "National City's trusted tow truck company. Covering Highland Avenue, Plaza Bonita, Mile of Cars, Harbor District & the I-5/SR-54 interchange. 15-minute South Bay response. Call (858) 999-9293.",
  keywords:
    "National City tow truck, towing National City CA, Mile of Cars towing, Plaza Bonita tow truck, Highland Avenue towing, Harbor District roadside assistance, I-5 National City, SR-54 towing",
  openGraph: {
    title: "National City Tow Truck — South Bay's Fastest Response | CloseBy",
    description:
      "Stranded in National City? CloseBy Towing covers Mile of Cars to the Marina, Highland Ave to Plaza Bonita. 15-min response, 24/7.",
    url: "https://www.closebytowing.com/national-city",
    type: "website",
  },
  alternates: { canonical: "https://www.closebytowing.com/national-city" },
};

/* ─── NATIONAL CITY DISTRICTS — unique neighborhood data ─── */
const DISTRICTS = [
  {
    name: "Mile of Cars / Auto Row",
    streets: "National City Blvd, between 18th & 33rd St",
    detail:
      "One of California's oldest and largest auto dealer concentrations — 32 dealerships lining a single boulevard. Dead batteries from test drives, inventory transports between lots, and customer breakdowns keep our trucks busy here daily.",
    eta: "10–15 min",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "Highland Avenue Corridor",
    streets: "Highland Ave, 8th St to 30th St",
    detail:
      "National City's cultural backbone. Filipino restaurants, bakeries, and shops line this avenue — the highest Filipino-American business concentration in the county. Tight parallel parking means door dings and lockouts are part of the daily rhythm.",
    eta: "12–18 min",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Westfield Plaza Bonita",
    streets: "Plaza Bonita Rd, Sweetwater Rd",
    detail:
      "The South Bay's go-to shopping destination draws thousands daily. Our drivers know every parking structure entrance, loading dock, and access road. Dead batteries and fender benders in the lots are our bread and butter.",
    eta: "14–20 min",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Harbor District & Marina",
    streets: "Tidelands Ave, Bay Marina Dr, Pepper Park",
    detail:
      "National City's waterfront along San Diego Bay. Marina slips, Pepper Park, and the Bayshore Bikeway. Waterfront parking lots and narrow marina roads require careful maneuvering — our flatbed drivers are trained for it.",
    eta: "12–16 min",
    color: "from-sky-500 to-blue-600",
  },
  {
    name: "Old Town National City",
    streets: "8th St, Roosevelt Ave, A Ave, B Ave",
    detail:
      "The original heart of the city — historic bungalows, tree-lined streets, and community parks. Narrow residential streets and tight driveways are no obstacle for our recovery equipment.",
    eta: "11–17 min",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Sweetwater / South NC",
    streets: "Sweetwater Rd, Euclid Ave, Palm Ave",
    detail:
      "Southern National City where the Sweetwater River meets the bay. Close to the Chula Vista border with quick access to SR-54. Shopping plazas, schools, and the Sweetwater Town & Country center.",
    eta: "15–22 min",
    color: "from-rose-500 to-pink-600",
  },
];

/* ─── FREEWAY & MAJOR ROAD COVERAGE ─── */
const ROAD_NETWORK = [
  {
    route: "Interstate 5",
    tag: "I-5",
    detail: "The Pacific Coast corridor cuts straight through National City. Exits at Civic Center Dr, 8th Street, Plaza Blvd, and Bay Marina Dr are our highest-volume dispatch points. The I-5/I-805 merge just north of NC is one of the region's most accident-prone interchanges.",
    exits: ["Civic Center Dr", "8th Street", "Plaza Blvd", "Bay Marina Dr", "Main St"],
  },
  {
    route: "State Route 54",
    tag: "SR-54",
    detail: "Connects National City to Spring Valley and the East County. The SR-54/I-805 interchange at the city's southeast corner sees heavy commuter traffic and frequent breakdowns during rush hour.",
    exits: ["Sweetwater Rd", "Euclid Ave", "Plaza Bonita"],
  },
  {
    route: "Highland Avenue",
    tag: "LOCAL",
    detail: "National City's main north-south commercial street parallel to I-5. Runs from the trolley station area all the way south to Sweetwater. Heavy pedestrian and vehicle traffic means fender benders and lockouts are a constant.",
    exits: ["8th St", "18th St", "24th St", "30th St"],
  },
];

/* ─── SERVICES tailored to National City ─── */
const NC_SERVICES = [
  {
    name: "Dealer & Lot Towing",
    detail: "Mile of Cars dealership transports, auction vehicle moves, and lot management towing. We work with 20+ NC dealers.",
    href: "/services/towing",
    icon: "🚗",
  },
  {
    name: "Freeway Recovery",
    detail: "I-5 shoulder breakdowns, I-805 merge accidents, and SR-54 commuter incidents. CHP-coordinated rapid response.",
    href: "/services/collision-recovery",
    icon: "🛣️",
  },
  {
    name: "Parking Lot Assistance",
    detail: "Plaza Bonita, Sweetwater Town & Country, and strip mall lots. Jump starts, lockouts, and minor collision tows.",
    href: "/services/jump-start",
    icon: "🅿️",
  },
  {
    name: "Flatbed Transport",
    detail: "Lowered imports, luxury vehicles, and classic cars. Damage-free flatbed loading for the South Bay car enthusiast community.",
    href: "/services/towing",
    icon: "🚛",
  },
  {
    name: "Lockout Service",
    detail: "Keys locked in your car on Highland Ave, at the marina, or at Plaza Bonita? Non-destructive entry in minutes.",
    href: "/services/lockout",
    icon: "🔑",
  },
  {
    name: "Fuel & Tire Help",
    detail: "Ran empty on Sweetwater Road? Flat tire near the trolley station? We bring fuel or swap your spare on-site.",
    href: "/services/gas-delivery",
    icon: "⛽",
  },
];

/* ─── FAQ ─── */
const FAQ_DATA = [
  {
    q: "How fast can you reach National City?",
    a: "Our average response to National City is 15 minutes. We stage trucks near the I-5/Plaza Blvd interchange, giving us immediate access to Mile of Cars, Highland Avenue, Plaza Bonita, and the Harbor District. During peak hours, the I-5/I-805 merge can slow outside responders — but we're already inside NC.",
  },
  {
    q: "Do you work with Mile of Cars dealerships?",
    a: "Yes — we're a preferred towing provider for over 20 dealerships on National City Boulevard. We handle new inventory transports between lots, customer vehicle towing, trade-in moves, and auction vehicle delivery. Our flatbed trucks ensure zero-damage transport for new and luxury inventory.",
  },
  {
    q: "Can you tow from Plaza Bonita's parking structure?",
    a: "Absolutely. Our trucks fit inside Westfield Plaza Bonita's multi-level parking garage. We handle dead batteries, lockouts, and collision tows from the mall daily — including the tight corners of the covered parking levels.",
  },
  {
    q: "What does towing cost in National City?",
    a: "Local towing within National City starts at $95 with $5 per additional mile. Jump starts and lockouts start at $65. We always give you the exact price before dispatching — no hidden fees. Dealership accounts get volume pricing.",
  },
  {
    q: "Do you cover the I-5/I-805 merge area?",
    a: "Yes — the I-5/I-805 merge just north of National City is one of San Diego's busiest and most accident-prone interchanges. We coordinate with CHP for shoulder recoveries, disabled vehicle removal, and accident towing in this area multiple times per week.",
  },
  {
    q: "Is there a trolley station nearby for after-tow transit?",
    a: "National City has two trolley stations — 8th Street and 24th Street — on the Blue Line. If your car needs to stay at the shop, you can hop on the trolley to get home. We can tow your vehicle to a shop near either station if that helps.",
  },
];

/* ─── NEARBY AREAS ─── */
const NEARBY = [
  { name: "Chula Vista", href: "/chula-vista" },
  { name: "San Ysidro", href: "/san-diego/san-ysidro" },
  { name: "Paradise Hills", href: "/san-diego/paradise-hills" },
  { name: "Logan Heights", href: "/san-diego/logan-heights" },
  { name: "Lincoln Park", href: "/san-diego/lincoln-park" },
  { name: "Bonita", href: "/san-diego/bonita" },
  { name: "Imperial Beach", href: "/san-diego/imperial-beach" },
  { name: "Coronado", href: "/san-diego/coronado" },
];

/* ════════════════════════════════════════════════════════════ */
/*  PAGE COMPONENT                                            */
/* ════════════════════════════════════════════════════════════ */
export default function NationalCityPage() {
  return (
    <main className="bg-slate-50">

      {/* ══════════ HERO — Harbor/waterfront theme ══════════ */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden bg-[#0c1929]">
        {/* Placeholder for hero photo */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/neighborhoods/shared/flatbed-truck-1.webp')] bg-cover bg-center opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1929] via-[#0c1929]/65 to-[#0c1929]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1929]/90 via-[#0c1929]/40 to-transparent" />
          <div className="absolute inset-0 bg-blue-950/10 mix-blend-multiply" />
        </div>

        {/* Wave accent at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 sm:h-20">
            <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="#f8fafc" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-24 pt-32 sm:pb-32 sm:pt-40 w-full">
          {/* ZIP badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-500/15 backdrop-blur-sm border border-cyan-400/30 rounded-full px-5 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-200 text-sm font-medium tracking-wide">
              91950 &bull; 91951 &bull; South Bay
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] max-w-3xl">
            South Bay&apos;s
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-400 mt-2">
              Towing Headquarters
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
            Home to the legendary <span className="text-cyan-300 font-semibold">Mile of Cars</span>,{" "}
            <span className="text-cyan-300 font-semibold">Westfield Plaza Bonita</span>, and a bustling{" "}
            <span className="text-cyan-300 font-semibold">Harbor District</span> on San Diego Bay — National City
            keeps our trucks rolling around the clock.
          </p>

          {/* Glassmorphism stat cards */}
          <div className="mt-8 flex flex-wrap gap-4">
            {[
              { value: "~15", label: "Min Response" },
              { value: "24/7", label: "Available" },
              { value: "I-5", label: "& SR-54" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/8 backdrop-blur-md rounded-2xl px-6 py-4 text-center border border-white/10 min-w-[100px]"
              >
                <div className="text-2xl sm:text-3xl font-black text-cyan-300">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:scale-105 relative overflow-hidden"
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
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all border border-white/20"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Trust line */}
          <div className="mt-10 flex flex-wrap gap-6 text-slate-400 text-sm">
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
      <div className="relative z-20 -mt-8">
        <Reviews />
      </div>

      {/* ══════════ NATIONAL CITY IDENTITY ══════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Why National City Needs Local Towers
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
              The South Bay&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">
                Automotive Capital
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
              <p>
                National City packs more automotive activity per square mile than almost anywhere in San Diego County.
                The <strong className="text-slate-800">Mile of Cars</strong> on National City Boulevard — 32 dealerships
                between 18th and 33rd Streets — generates constant towing demand: inventory transports, customer
                breakdowns, trade-in shuffles, and auction deliveries.
              </p>
              <p>
                But it&apos;s not just the dealerships. <strong className="text-slate-800">Highland Avenue</strong> is
                the cultural heartbeat — the county&apos;s densest Filipino-American business corridor, buzzing with
                restaurants, bakeries, and shops. <strong className="text-slate-800">Westfield Plaza Bonita</strong> draws
                shoppers from across the South Bay. And the <strong className="text-slate-800">Harbor District</strong> along
                San Diego Bay adds marina traffic, waterfront events, and Bayshore Bikeway visitors.
              </p>
              <p>
                Three freeways converge here — <strong className="text-slate-800">I-5</strong> running north-south,{" "}
                <strong className="text-slate-800">I-805</strong> merging just to the north, and{" "}
                <strong className="text-slate-800">SR-54</strong> connecting east to Spring Valley. When one jams,
                National City feels it. Our trucks are staged inside the city so we don&apos;t get caught in the same traffic.
              </p>
            </div>

            {/* Key facts card */}
            <div className="bg-[#0c1929] rounded-3xl p-8 text-white shadow-xl">
              <h3 className="font-bold text-lg mb-6 text-cyan-400">National City at a Glance</h3>
              <div className="space-y-4">
                {[
                  { label: "Mile of Cars", note: "32 dealerships on one boulevard" },
                  { label: "Highland Avenue", note: "Filipino-American cultural hub" },
                  { label: "Plaza Bonita", note: "South Bay's largest mall" },
                  { label: "Harbor District", note: "Marina, Pepper Park, bayfront" },
                  { label: "24th St Trolley", note: "Blue Line transit hub" },
                  { label: "Sweetwater Rd", note: "SR-54 to Plaza Bonita connector" },
                  { label: "I-5 / I-805 Merge", note: "Region's busiest interchange" },
                  { label: "Civic Center", note: "City Hall, library, police HQ" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-white">{item.label}</span>
                      <span className="text-slate-400 text-sm ml-2">— {item.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ DISTRICT-BY-DISTRICT COVERAGE ══════════ */}
      <section className="py-20 sm:py-28 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              District-by-District Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
              Every Block of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">
                National City
              </span>
            </h2>
            <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
              Six dispatch zones with dedicated response times. Our drivers don&apos;t GPS their way around — they grew up here.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DISTRICTS.map((d) => (
              <div
                key={d.name}
                className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-cyan-300 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${d.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-cyan-700 transition-colors">
                    {d.name}
                  </h3>
                  <span className="bg-cyan-100 text-cyan-800 text-xs font-bold px-3 py-1 rounded-full">
                    {d.eta}
                  </span>
                </div>
                <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-3">{d.streets}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{d.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FREEWAY & ROAD COVERAGE ══════════ */}
      <section className="py-20 sm:py-28 bg-[#0c1929] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-500" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Road &amp; Freeway Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
              I-5, SR-54 &amp;{" "}
              <span className="text-cyan-400">Highland Ave</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {ROAD_NETWORK.map((r) => (
              <div
                key={r.tag}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/40 transition-all"
              >
                <div className="inline-flex items-center gap-2 bg-cyan-500 text-[#0c1929] px-4 py-1.5 rounded-full font-black text-lg mb-5">
                  {r.tag}
                </div>
                <h3 className="font-bold text-lg text-white mb-3">{r.route}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{r.detail}</p>
                <div className="flex flex-wrap gap-2">
                  {r.exits.map((e) => (
                    <span key={e} className="text-xs bg-white/10 text-slate-300 px-3 py-1 rounded-full border border-white/10">
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
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              What We Do in National City
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
              Services Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">
                the South Bay
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NC_SERVICES.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="group bg-slate-50 hover:bg-cyan-50 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg border border-slate-200 hover:border-cyan-300"
              >
                <span className="text-4xl block mb-4">{s.icon}</span>
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-cyan-700 transition-colors mb-2">
                  {s.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TRUST DIFFERENTIATORS ══════════ */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "🏙️", label: "South Bay Based" },
              { icon: "⏱️", label: "15 Min Avg ETA" },
              { icon: "🛡️", label: "Licensed & Insured" },
              { icon: "💰", label: "Upfront Pricing" },
              { icon: "🇺🇸", label: "Military Discount" },
              { icon: "🌙", label: "True 24/7 Service" },
            ].map((t) => (
              <div key={t.label} className="bg-white rounded-xl p-5 text-center shadow-sm border border-slate-200">
                <span className="text-3xl block mb-2">{t.icon}</span>
                <span className="text-slate-700 text-sm font-semibold">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ NEARBY AREAS ══════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Also Serving{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">
                Nearby Areas
              </span>
            </h2>
            <p className="mt-3 text-slate-600">Neighboring communities we reach in minutes.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {NEARBY.map((a) => (
              <Link
                key={a.name}
                href={a.href}
                className="group bg-slate-50 hover:bg-cyan-50 rounded-xl p-5 text-center transition-all border border-slate-200 hover:border-cyan-300 hover:shadow-md"
              >
                <span className="font-bold text-slate-800 group-hover:text-cyan-700 transition-colors">{a.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="py-20 sm:py-28 bg-slate-100">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              National City Towing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">FAQ</span>
            </h2>
          </div>
          <div className="space-y-3">
            {FAQ_DATA.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                  <h3 className="font-semibold text-slate-900 pr-8 text-left">{faq.q}</h3>
                  <svg className="w-5 h-5 text-cyan-500 transition-transform group-open:rotate-180 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FINAL CTA ══════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#0c1929] via-[#0f2847] to-[#0c1929] text-white relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-black">
            Stranded in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-300">
              National City?
            </span>
          </h2>
          <p className="mt-6 text-xl text-slate-300">
            Mile of Cars to the Marina — one call and we&apos;re on our way.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:scale-105 relative overflow-hidden"
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
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all border border-white/20"
            >
              WhatsApp Us
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-slate-400 text-sm">
            <span>5.0 ★ Google Rating</span>
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
              { "@type": "ListItem", position: 3, name: "National City", item: "https://www.closebytowing.com/national-city" },
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
            "@id": "https://www.closebytowing.com/national-city",
            name: "CloseBy Towing - National City",
            description:
              "National City tow truck service covering Mile of Cars, Highland Avenue, Plaza Bonita, Harbor District & I-5/SR-54 corridors. 24/7 South Bay dispatch.",
            url: "https://www.closebytowing.com/national-city",
            telephone: CONTACT.phone,
            areaServed: [
              { "@type": "PostalAddress", postalCode: "91950", addressLocality: "National City", addressRegion: "CA" },
              { "@type": "PostalAddress", postalCode: "91951", addressLocality: "National City", addressRegion: "CA" },
            ],
            geo: { "@type": "GeoCoordinates", latitude: 32.6781, longitude: -117.0992 },
            serviceType: ["Towing Service", "Roadside Assistance", "Flatbed Towing", "Dealer Transport"],
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
