
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { areaHref, CONTACT } from "@/lib/constants";

/* ─── 4S Ranch — "The Community That Has It All" ───
   Design: Warm teal/emerald palette with stone backgrounds.
   Layout: Diagonal hero → Community character cards → School zone safety →
           Response map → Horizontal services → Side-by-side FAQ → CTA.
   Completely unique structure — no section order shared with La Jolla or templates.
*/

const ZIP_CODES = ["92127"];

// ── SEO ──
export const metadata: Metadata = {
  title:
    "4S Ranch Towing | North County's Master-Planned Community | 24/7 | CloseBy",
  description:
    "Towing in 4S Ranch 92127. Covering 4S Commons Town Center, Design 39 Campus, Del Norte High, Sports Park, Camino Del Sur corridor & every cul-de-sac. Family-vehicle specialists. 15-min response.",
  keywords:
    "towing 4S Ranch, 4S Ranch tow truck, 92127 towing, 4S Commons towing, Design 39 tow service, Del Norte High School towing, Camino Del Sur roadside assistance, North County San Diego tow truck",
  openGraph: {
    title: "4S Ranch Towing | The Community That Has It All | CloseBy",
    description:
      "Trusted towing for 4S Ranch's 10,000+ homes. From 4S Commons shopping to Del Norte High School to every gated cul-de-sac — 15-minute response, 24/7.",
    url: "https://www.closebytowing.com/4s-ranch",
    type: "website",
    images: [
      {
        url: "/neighborhoods/4s-ranch/hero-community.webp",
        width: 1920,
        height: 1080,
        alt: "4S Ranch master-planned community - Professional towing services",
      },
    ],
  },
  alternates: {
    canonical: "https://www.closebytowing.com/4s-ranch",
  },
};

// ── Community Character — what makes 4S Ranch unique ──
const COMMUNITY_PILLARS = [
  {
    title: "10,000+ Homes, One Community",
    text: "Built between 2003 and 2013, 4S Ranch transformed 3,000 acres of North County ranch land into San Diego's most sought-after master-planned community. Today, over 30,000 residents call these tree-lined streets home — from young families in Pacific Highlands to empty-nesters in Stonebridge Estates.",
    stat: "30K+",
    statLabel: "Residents",
  },
  {
    title: "Top-Rated Schools Drive Everything",
    text: "4S Ranch exists because of its schools. Design 39 Campus pioneered project-based learning in PUSD. Del Norte High School ranks among California's best public high schools. Stone Ranch Elementary and Monterey Ridge Elementary consistently earn 9/10+ on GreatSchools. Families move across the country to get into these attendance zones.",
    stat: "#1",
    statLabel: "School District",
  },
  {
    title: "The Commons Is the Town Square",
    text: "4S Commons Town Center isn't just a strip mall — it's where 4S Ranch gathers. Friday nights bring families to Broken Yolk and Board & Brew. Saturday mornings mean Starbucks runs and Target trips. The parking lot stays full from dawn to 9 PM, and our drivers know every entrance, exit, and tight corner in the complex.",
    stat: "40+",
    statLabel: "Shops & Restaurants",
  },
];

// ── School zones and family-specific coverage ──
const SCHOOL_ZONES = [
  {
    name: "Del Norte High School",
    address: "16601 Nighthawk Ln",
    detail:
      "2,400 students, massive parking lot off Camino Del Norte. We handle morning drop-off fender benders and after-school dead batteries weekly.",
    response: "10 min",
  },
  {
    name: "Design 39 Campus",
    address: "17050 Del Sur Ridge Rd",
    detail:
      "Innovative K-8 school with a single-lane pickup loop that becomes a traffic headache at 2:45 PM. We know the drill — quick in, quick out.",
    response: "12 min",
  },
  {
    name: "Stone Ranch Elementary",
    address: "17050 4S Ranch Pkwy",
    detail:
      "Nestled on 4S Ranch Parkway near the Sports Park. Narrow residential streets around here mean we send our compact rig when possible.",
    response: "11 min",
  },
  {
    name: "Monterey Ridge Elementary",
    address: "17117 4S Ranch Pkwy",
    detail:
      "Right next to Stone Ranch on the parkway. The double-school zone means heavy traffic 7:30–8:15 AM and 2:30–3:15 PM. We route around it.",
    response: "11 min",
  },
];

// ── Major roads and zones ──
const COVERAGE_ZONES = [
  {
    zone: "Camino Del Sur Corridor",
    description:
      "The spine of 4S Ranch. Runs north-south from Rancho Bernardo Road to Del Sur. Speed limit drops to 35 through the community, but we still see fender benders at the Dove Canyon intersection daily.",
    streets: [
      "Camino Del Sur",
      "Dove Canyon Rd",
      "Via Elegante",
      "Rancho Bernardo Rd",
    ],
  },
  {
    zone: "4S Ranch Parkway Loop",
    description:
      "The interior road connecting schools, the Sports Park, and residential clusters. Narrower lanes, speed bumps, and school zones make this tricky — our drivers train on this route specifically.",
    streets: [
      "4S Ranch Pkwy",
      "Nighthawk Ln",
      "Goldfinch Ln",
      "Canyon Hills Rd",
    ],
  },
  {
    zone: "The Commons & Commercial",
    description:
      "4S Commons Town Center, the gas stations on Camino Del Sur, and the professional offices along Del Sur Ridge. Parking lot lockouts and dead batteries are our bread and butter here.",
    streets: [
      "4S Commons Dr",
      "Del Sur Ridge Rd",
      "Sendero Ave",
      "Town Center Dr",
    ],
  },
];

// ── Nearby areas ──
const NEARBY_AREAS = [
  { name: "Rancho Bernardo", slug: "rancho-bernardo", distance: "3 mi", direction: "North" },
  { name: "Rancho Penasquitos", slug: "rancho-penasquitos", distance: "5 mi", direction: "West" },
  { name: "Poway", slug: "poway", distance: "6 mi", direction: "East" },
  { name: "Rancho Santa Fe", slug: "rancho-santa-fe", distance: "7 mi", direction: "Northwest" },
  { name: "Sabre Springs", slug: "sabre-springs", distance: "4 mi", direction: "South" },
  { name: "Scripps Ranch", slug: "scripps-ranch", distance: "6 mi", direction: "Southwest" },
];

// ── Services, described for 4S Ranch specifically ──
const SERVICES = [
  {
    name: "Flatbed Towing",
    slug: "flatbed-towing",
    why: "4S Ranch driveways are steep and many homes sit on cul-de-sacs. Our flatbed handles inclined loading without scraping bumpers on the grade change.",
  },
  {
    name: "Jump Start Service",
    slug: "services/jump-start",
    why: "Target and Trader Joe's runs at 4S Commons leave dome lights on. We jump-start more vehicles in that parking lot than anywhere else in North County.",
  },
  {
    name: "Lockout Service",
    slug: "services/lockout",
    why: "Keyless entry systems glitch when proximity sensors interfere with shopping cart corrals. We unlock SUVs, minivans, and luxury vehicles at the Commons all week long.",
  },
  {
    name: "Roadside Assistance",
    slug: "roadside-assistance",
    why: "Flat tires from construction debris on Camino Del Sur are still common as new developments go in east of 4S Ranch. We carry the most common SUV and sedan tire sizes.",
  },
  {
    name: "Emergency Towing",
    slug: "emergency-towing",
    why: "The Dove Canyon/Camino Del Sur intersection sees the most incidents in 4S Ranch. We're positioned to reach any accident on this corridor in under 12 minutes.",
  },
];

// ── FAQ — real questions from 4S Ranch residents ──
const FAQ_DATA = [
  {
    question: "My car broke down on Camino Del Sur during rush hour. How fast can you reach me?",
    answer:
      "Camino Del Sur is the main artery through 4S Ranch and we know the traffic patterns by heart. During peak hours (7–9 AM, 4–6 PM), we approach from Rancho Bernardo Road or 4S Ranch Parkway depending on which segment you're on. Typical response: 12–18 minutes. Off-peak, we're there in 10 minutes flat.",
  },
  {
    question: "Can you tow from inside the gated communities?",
    answer:
      "Yes — we service Pacific Highlands Ranch, Stonebridge Estates, Cielo, and every gated neighborhood in 4S Ranch. For gated communities, call ahead and we'll coordinate gate access with your HOA or have you open the guest lane. Our trucks are sized to navigate the narrow community streets without damaging curbs or landscaping.",
  },
  {
    question: "My teenager's car died in the Del Norte High School parking lot. Can you help?",
    answer:
      "Absolutely — we get calls from Del Norte's parking lot regularly. Dead batteries from phone chargers left plugged in are the #1 issue. We can jump-start or tow from the student lot, staff lot, or the pickup loop. If it's during school hours, we'll work with campus security to access the vehicle.",
  },
  {
    question: "Do you know how to get around 4S Commons when it's packed?",
    answer:
      "4S Commons Town Center is one of our most-visited locations. We know the rear access road behind Target, the overflow lot near Broken Yolk, and the best approach angles for the Starbucks/Chipotle side versus the Trader Joe's side. Even on a Saturday afternoon when the lot is full, we can reach your vehicle without blocking traffic.",
  },
  {
    question: "I have a Tesla/EV that ran out of charge on 4S Ranch Parkway. What do I do?",
    answer:
      "EV flatbed transport is becoming one of our most common 4S Ranch calls. We load your Tesla, Rivian, or EV onto our flatbed and transport it to the nearest DC fast charger — typically the Supercharger station on Bernardo Center Drive in Rancho Bernardo (5 minutes away) or the ChargePoint at 4S Commons.",
  },
];

export default function FourSRanchPage() {
  return (
    <main className="bg-stone-50">
      {/* ===== HERO — Diagonal split with community identity ===== */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-teal-950 via-teal-900 to-emerald-950 overflow-hidden">
        {/* Diagonal photo slice on right */}
        <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block">
          <div className="absolute inset-0 -skew-x-6 origin-top-right translate-x-8 overflow-hidden">
            {/* [PHOTO: Aerial golden-hour shot looking down Camino Del Sur through 4S Ranch —
                 tree-lined median, red tile roofs on both sides, 4S Commons visible in mid-ground,
                 rolling hills fading into North County distance] */}
            <Image
              src="/neighborhoods/4s-ranch/hero-community.webp"
              alt="Aerial view of 4S Ranch master-planned community along Camino Del Sur"
              fill
              className="object-cover skew-x-6"
              priority
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-950 via-teal-950/60 to-transparent skew-x-6" />
          </div>
        </div>

        {/* Decorative glow */}
        <div className="absolute top-32 left-1/4 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-16 right-1/3 w-56 h-56 bg-teal-300/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="max-w-2xl">
            {/* Community badge */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-emerald-500/15 backdrop-blur-md border border-emerald-400/30 rounded-full px-5 py-2">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span className="text-emerald-300 text-sm font-semibold tracking-wide">MASTER-PLANNED COMMUNITY</span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight">
              4S Ranch
              <span className="block mt-3 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Towing & Roadside
              </span>
            </h1>

            {/* Unique descriptor */}
            <p className="mt-8 text-xl sm:text-2xl text-teal-200/90 leading-relaxed max-w-xl">
              From the packed parking lot at{" "}
              <span className="text-emerald-400 font-medium">4S Commons</span> to the quiet cul-de-sacs of{" "}
              <span className="text-emerald-400 font-medium">Pacific Highlands</span> — we know every school zone,
              every speed bump, and every gate code in North County's favorite neighborhood.
            </p>

            {/* ZIP */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-teal-400/70 text-sm font-medium">ZIP Code</span>
              <span className="bg-emerald-500 text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-emerald-500/25">
                92127
              </span>
            </div>

            {/* Stats — horizontal */}
            <div className="mt-10 flex gap-8">
              <div>
                <div className="text-4xl font-bold text-white">15</div>
                <div className="text-sm text-teal-300/70 mt-1">Min Avg Response</div>
              </div>
              <div className="border-l border-white/10 pl-8">
                <div className="text-4xl font-bold text-emerald-400">10K+</div>
                <div className="text-sm text-teal-300/70 mt-1">Homes Covered</div>
              </div>
              <div className="border-l border-white/10 pl-8">
                <div className="text-4xl font-bold text-white">24/7</div>
                <div className="text-sm text-teal-300/70 mt-1">Year-Round</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="group inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-400/40 hover:scale-[1.02]"
              >
                <svg className="w-6 h-6 transition-transform group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {CONTACT.phone}
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE 4S RANCH DIFFERENCE — Community character storytelling ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-teal-700 font-semibold tracking-wider text-sm uppercase mb-4">
              We Live Here Too
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
              Understanding <span className="text-teal-700">4S Ranch</span>
            </h2>
            <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto">
              This isn't just another suburban subdivision. 4S Ranch is a community with a specific rhythm, specific roads, and specific needs. We know them all.
            </p>
          </div>

          {/* Three storytelling columns with stats */}
          <div className="grid lg:grid-cols-3 gap-8">
            {COMMUNITY_PILLARS.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`relative rounded-3xl p-8 ${
                  i === 0
                    ? "bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100"
                    : i === 1
                    ? "bg-gradient-to-br from-stone-50 to-amber-50 border border-stone-200"
                    : "bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100"
                }`}
              >
                {/* Stat badge */}
                <div className="flex items-end gap-2 mb-6">
                  <span className={`text-5xl font-black ${
                    i === 0 ? "text-teal-600" : i === 1 ? "text-amber-600" : "text-emerald-600"
                  }`}>
                    {pillar.stat}
                  </span>
                  <span className="text-sm font-medium text-slate-500 mb-1.5">{pillar.statLabel}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SCHOOL ZONE SAFETY — Unique to family communities ===== */}
      <section className="py-24 bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left column — context */}
            <div className="lg:col-span-2">
              <span className="inline-block text-amber-600 font-semibold tracking-wider text-sm uppercase mb-4">
                Family-First Coverage
              </span>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                Every School Zone,{" "}
                <span className="text-amber-600">Every Pickup Loop</span>
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                4S Ranch has four schools within a two-mile radius. That means twice-daily traffic surges, teenage drivers, and
                parking lots full of minivans with dead batteries. We've adapted our routes and response plans specifically for
                school-hour traffic patterns.
              </p>

              {/* [PHOTO: Ground-level shot of a tree-lined residential street in 4S Ranch
                   with a school zone sign visible, morning light, crosswalk in foreground] */}
              <div className="mt-8 relative rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-[3/2]">
                  <Image
                    src="/neighborhoods/4s-ranch/school-zone.webp"
                    alt="4S Ranch school zone street with tree-lined sidewalks"
                    fill
                    className="object-cover"
                    sizes="40vw"
                  />
                </div>
              </div>
            </div>

            {/* Right column — school cards */}
            <div className="lg:col-span-3 space-y-4">
              {SCHOOL_ZONES.map((school) => (
                <div
                  key={school.name}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:border-amber-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.547l1.607.688a3 3 0 002.346 0l1.607-.688v3.547a9.026 9.026 0 00-2.3 1.638a1 1 0 01-1.46 0z" />
                        </svg>
                        <h3 className="font-bold text-lg text-slate-900">{school.name}</h3>
                      </div>
                      <p className="text-xs text-slate-400 mb-2">{school.address}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{school.detail}</p>
                    </div>
                    <div className="flex-shrink-0 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-xl text-center">
                      <div className="text-lg font-bold">{school.response}</div>
                      <div className="text-xs text-emerald-600">response</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== COVERAGE ZONES — Road-by-road breakdown ===== */}
      <section className="py-24 bg-teal-950 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-emerald-400 font-semibold tracking-wider text-sm uppercase mb-4">
              Street-Level Knowledge
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Coverage <span className="text-emerald-400">Zone by Zone</span>
            </h2>
            <p className="mt-6 text-xl text-teal-300/70 max-w-2xl mx-auto">
              4S Ranch is 3,000 acres divided into distinct zones. Here's how we cover every square foot.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {COVERAGE_ZONES.map((zone, i) => (
              <div
                key={zone.zone}
                className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-emerald-400/40 transition-all duration-300 group"
              >
                {/* Zone number */}
                <div className="absolute -top-4 -left-2 w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-500/30">
                  {i + 1}
                </div>

                <h3 className="text-2xl font-bold text-white mt-2 mb-4">{zone.zone}</h3>
                <p className="text-teal-200/70 leading-relaxed mb-6">{zone.description}</p>

                {/* Street tags */}
                <div className="flex flex-wrap gap-2">
                  {zone.streets.map((street) => (
                    <span
                      key={street}
                      className="bg-white/10 border border-white/10 text-teal-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {street}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ZIP banner */}
          <div className="mt-16 bg-gradient-to-r from-emerald-500/15 via-teal-400/10 to-emerald-500/15 rounded-2xl p-8 border border-emerald-400/20 text-center">
            <div className="text-teal-300/70 text-sm font-medium mb-2">Full Coverage Area</div>
            <div className="text-5xl font-black text-emerald-400">92127</div>
            <div className="text-teal-200/60 text-sm mt-2">Every street, every cul-de-sac, every gated community</div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES — Horizontal cards with 4S-specific reasoning ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-teal-700 font-semibold tracking-wider text-sm uppercase mb-4">
              Tailored to This Community
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
              Why 4S Ranch Calls Us <span className="text-teal-700">for These</span>
            </h2>
          </div>

          <div className="space-y-6">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={service.slug.startsWith("services/") ? `/${service.slug}` : `/san-diego/${service.slug}`}
                className="group flex flex-col md:flex-row items-start md:items-center gap-6 bg-stone-50 hover:bg-gradient-to-r hover:from-teal-50 hover:to-emerald-50 rounded-2xl p-6 md:p-8 transition-all duration-300 border border-stone-100 hover:border-teal-200 hover:shadow-lg"
              >
                {/* Number */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-lg group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  {i + 1}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{service.why}</p>
                </div>

                {/* Arrow */}
                <svg className="w-6 h-6 text-slate-300 group-hover:text-teal-600 transition-all group-hover:translate-x-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ — Side-by-side card layout (not accordion) ===== */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-teal-700 font-semibold tracking-wider text-sm uppercase mb-4">
              Real Questions, Real Answers
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
              4S Ranch Residents <span className="text-teal-700">Ask Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {FAQ_DATA.map((faq, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-8 border border-stone-200 ${
                  i === FAQ_DATA.length - 1 && FAQ_DATA.length % 2 !== 0 ? "md:col-span-2 md:max-w-2xl md:mx-auto" : ""
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center">
                    <span className="font-bold text-sm">Q</span>
                  </div>
                  <h3 className="font-bold text-slate-900 leading-snug">{faq.question}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed pl-12">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEARBY AREAS — Direction-tagged grid ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Also Serving <span className="text-teal-700">North County</span>
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              4S Ranch sits at the heart of North County San Diego. We cover every direction.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {NEARBY_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={areaHref(area.slug)}
                className="group bg-stone-50 hover:bg-teal-50 rounded-2xl p-5 text-center border border-stone-200 hover:border-teal-300 hover:shadow-md transition-all duration-300"
              >
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-1">{area.direction}</div>
                <div className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {area.name}
                </div>
                <div className="text-sm text-slate-500 mt-1">{area.distance}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA — Emerald gradient banner ===== */}
      <section className="py-24 bg-gradient-to-br from-teal-900 via-emerald-900 to-teal-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Stranded in{" "}
            <span className="text-emerald-400">4S Ranch?</span>
          </h2>

          <p className="mt-8 text-xl text-teal-200/80 max-w-2xl mx-auto">
            From Camino Del Sur to the Commons parking lot to your own driveway — we'll be there in 15 minutes or less. Call now.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="group inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl shadow-emerald-500/30 hover:scale-105"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {CONTACT.phone}
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-teal-200/70">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>5-Star Google Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>24/7 North County Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STRUCTURED DATA ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.closebytowing.com" },
              { "@type": "ListItem", position: 2, name: "San Diego Towing", item: "https://www.closebytowing.com/san-diego/towing" },
              { "@type": "ListItem", position: 3, name: "4S Ranch", item: "https://www.closebytowing.com/4s-ranch" },
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
            "@id": "https://www.closebytowing.com/4s-ranch",
            name: "CloseBy Towing - 4S Ranch",
            description:
              "Professional towing and roadside assistance in 4S Ranch, San Diego 92127. Serving 4S Commons Town Center, Design 39 Campus, Del Norte High School, Sports Park, Camino Del Sur corridor, and all gated communities 24/7.",
            url: "https://www.closebytowing.com/4s-ranch",
            telephone: CONTACT.phone,
            image: "https://www.closebytowing.com/neighborhoods/4s-ranch/hero-community.webp",
            address: {
              "@type": "PostalAddress",
              addressLocality: "4S Ranch",
              addressRegion: "CA",
              postalCode: "92127",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 33.0278,
              longitude: -117.1109,
            },
            areaServed: {
              "@type": "PostalAddress",
              postalCode: "92127",
              addressLocality: "4S Ranch",
              addressRegion: "CA",
              addressCountry: "US",
            },
            serviceType: [
              "Towing Service",
              "Roadside Assistance",
              "Flatbed Towing",
              "Jump Start Service",
              "Lockout Service",
              "Emergency Towing",
            ],
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
