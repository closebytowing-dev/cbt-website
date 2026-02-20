
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { areaHref, CONTACT } from "@/lib/constants";

/* ─── Allied Gardens — "Built for Heroes, Built to Last" ───
   Design: Warm copper/terracotta palette with cream backgrounds.
   Honors the 1950s post-WWII veteran housing heritage.
   Layout: Centered card hero → History story → I-8 corridor →
           Mission Trails + Grantville split → Vertical service steps →
           Alternating FAQ → Nearby rings → Warm CTA.
   Completely unique structure — shares no layout with La Jolla, 4S Ranch, or templates.
*/

const ZIP_CODES = ["92120"];

// ── SEO ──
export const metadata: Metadata = {
  title:
    "Allied Gardens Towing | San Diego's Mid-Century Gem | 92120 | 24/7 | CloseBy",
  description:
    "Towing in Allied Gardens & Grantville 92120. Covering I-8 corridor, Mission Gorge Rd, Waring Rd, Grantville Trolley Station, Mission Trails Regional Park gateway & all residential streets. 15-min response.",
  keywords:
    "towing Allied Gardens, Allied Gardens tow truck, 92120 towing, Grantville towing, Mission Gorge Road tow service, I-8 towing San Diego, Waring Road roadside assistance, Mission Trails towing",
  openGraph: {
    title: "Allied Gardens Towing | Mid-Century Neighborhood, Modern Service | CloseBy",
    description:
      "Trusted towing for Allied Gardens & Grantville. I-8 freeway response, Grantville Trolley Station coverage, Mission Trails gateway service. 15-min response, 24/7.",
    url: "https://www.closebytowing.com/allied-gardens",
    type: "website",
    images: [
      {
        url: "/neighborhoods/allied-gardens/hero-neighborhood.webp",
        width: 1920,
        height: 1080,
        alt: "Allied Gardens neighborhood - tree-lined streets and mid-century homes",
      },
    ],
  },
  alternates: {
    canonical: "https://www.closebytowing.com/allied-gardens",
  },
};

// ── Neighborhood history milestones ──
const HISTORY_TIMELINE = [
  {
    year: "1955",
    title: "Built for Returning Veterans",
    text: "Allied Gardens was developed as affordable housing for WWII and Korean War veterans. The name 'Allied' honors the Allied forces. Rows of modest ranch homes went up along Waring Road, Greenbrier Avenue, and Golfcrest Drive — many still standing today with their original mid-century character intact.",
  },
  {
    year: "1970s",
    title: "The Community Takes Root",
    text: "Allied Gardens Recreation Center opened on Greenbrier Ave, becoming the neighborhood's gathering place. Lewis Middle School and Hardy Elementary anchored the east side. Families put down roots, and the tree canopy that now defines the neighborhood began to mature.",
  },
  {
    year: "Today",
    title: "Gateway to Mission Trails",
    text: "Allied Gardens is now one of San Diego's most livable mid-city neighborhoods — affordable, tree-shaded, and sitting at the doorstep of the 7,220-acre Mission Trails Regional Park. The Grantville commercial district along Mission Gorge Road brings jobs and services. First-time buyers and long-time residents share these streets.",
  },
];

// ── I-8 Corridor details ──
const FREEWAY_ZONES = [
  {
    name: "I-8 at Waring Road",
    detail: "The main Allied Gardens on-ramp. Merge lane incidents and overheated engines on the uphill eastbound grade are our top calls here.",
    response: "8 min",
  },
  {
    name: "I-8 at Mission Gorge Road",
    detail: "Grantville's primary interchange. Heavy commercial traffic from the auto dealerships and warehouses creates tight situations — we know every shoulder pullout.",
    response: "10 min",
  },
  {
    name: "I-8 at College Avenue",
    detail: "The western gateway to Allied Gardens. SDSU traffic spills into this interchange during events. We stage nearby and respond fast.",
    response: "12 min",
  },
  {
    name: "Mission Gorge Road Corridor",
    detail: "The 2-mile commercial strip through Grantville — auto body shops, restaurants, and the Trolley Station. Lockouts and dead batteries are constant here.",
    response: "10 min",
  },
];

// ── Two neighborhoods in one ──
const DUAL_IDENTITY = {
  residential: {
    title: "Allied Gardens Residential",
    subtitle: "Tree-shaded streets, ranch homes, and quiet evenings",
    features: [
      {
        name: "Waring Road",
        text: "The north-south spine of Allied Gardens. Speed limit is 35 but feels slower — kids on bikes, dog walkers, and cars backing out of driveways. Our compact rig navigates these blocks without clipping mailboxes.",
      },
      {
        name: "Greenbrier & Golfcrest",
        text: "The heart of the neighborhood. Allied Gardens Rec Center sits on Greenbrier. Golfcrest runs along the old Mission Trails Golf Course. These wide residential streets are where most of our home-driveway calls originate.",
      },
      {
        name: "Orcutt & Zion Avenues",
        text: "The southern border with Del Cerro. Hillier terrain, steeper driveways. We carry wheel chocks for inclined loading and know which streets have tight turning radii.",
      },
    ],
  },
  commercial: {
    title: "Grantville Commercial District",
    subtitle: "Mission Gorge Road's mile of business and transit",
    features: [
      {
        name: "Grantville Trolley Station",
        text: "Green Line park-and-ride with 400+ spaces. Dead batteries from all-day parking are the #1 call. We also handle tows from the bus loop and the shopping center across Mission Gorge.",
      },
      {
        name: "Auto Row & Industrial",
        text: "Mission Gorge Road between I-8 and Friars Road is lined with auto dealers, body shops, and light industrial. We move vehicles between shops and handle lot-to-lot transfers.",
      },
      {
        name: "Alvarado Medical Center Area",
        text: "Alvarado Hospital and surrounding medical offices generate emergency calls from staff and visitors. We reach the ER entrance in 10 minutes and know the parking structure layout.",
      },
    ],
  },
};

// ── Services with Allied Gardens context ──
const SERVICES = [
  {
    name: "I-8 Freeway Towing",
    slug: "emergency-towing",
    context: "Allied Gardens sits along one of San Diego's busiest east-west freeways. We handle I-8 breakdowns, accidents, and shoulder recoveries between College Ave and the Mission Gorge interchange daily.",
    stat: "8-min I-8 response",
  },
  {
    name: "Trolley Station Jump Starts",
    slug: "services/jump-start",
    context: "Grantville Trolley commuters leave cars parked 8-10 hours with dome lights on, phone chargers plugged in, or old batteries that don't survive the summer heat. We jump more cars here than almost any other trolley station in San Diego.",
    stat: "400+ space lot",
  },
  {
    name: "Residential Lockouts",
    slug: "services/lockout",
    context: "Allied Gardens' 1950s homes often have narrow driveways with cars parked nose-in. When you lock your keys in the car at home, we arrive fast and work carefully in tight spaces without scratching your vehicle or your neighbor's.",
    stat: "15-min response",
  },
  {
    name: "Flatbed Transport",
    slug: "flatbed-towing",
    context: "The hills along Orcutt Avenue and the Del Cerro border mean steep driveways and grades. Our flatbed handles inclined loading safely — critical when a car dies halfway up a hillside driveway.",
    stat: "Hill-grade rated",
  },
  {
    name: "Tire Change Service",
    slug: "services/tire-change",
    context: "Mission Gorge Road construction debris and the gravel shoulders along Grantville's industrial stretch puncture tires regularly. We carry standard sedan and SUV sizes and can swap your flat roadside.",
    stat: "Common sizes stocked",
  },
];

// ── FAQ ──
const FAQ_DATA = [
  {
    question: "I'm stuck on I-8 near the Waring Road exit. How fast can you get here?",
    answer: "The Waring Road interchange is our fastest response zone in Allied Gardens — typically 8–10 minutes. We approach from Mission Gorge Road to avoid the freeway backup. If you're on the shoulder, stay in your vehicle with hazards on. If you need to exit the freeway first, the Waring Road off-ramp has a wide shoulder where we can safely load.",
  },
  {
    question: "My car died at the Grantville Trolley park-and-ride. It's 6 PM and I just got off the train.",
    answer: "We get this call almost daily. The Green Line park-and-ride at Grantville holds 400+ vehicles and dead batteries are extremely common after a full day of parking — especially in summer when heat drains older batteries. We'll meet you at your car, jump it or tow it, and have you on your way. Typical response: 12–15 minutes.",
  },
  {
    question: "Do you know the residential streets in Allied Gardens? Some are pretty narrow.",
    answer: "We've been towing from Allied Gardens residential streets for years. Greenbrier Avenue, Golfcrest Drive, Orcutt Avenue, Zion Avenue — we know which blocks have tight cul-de-sacs, which driveways are steep, and where we need our compact rig instead of the full-size flatbed. Many homes here were built in the 1950s with single-car driveways, so precision matters.",
  },
  {
    question: "Can you tow from the Alvarado Hospital area?",
    answer: "Yes — Alvarado Hospital Medical Center on Alvarado Road is in our regular service area. We handle emergency tows from the ER parking area, the main visitor lot, and the medical offices along Alvarado Canyon Road. Staff who work late shifts and find dead batteries are frequent callers. We're usually there in 10 minutes.",
  },
  {
    question: "What about the Mission Gorge Road businesses in Grantville?",
    answer: "Mission Gorge Road through Grantville is one of our most-serviced corridors. From the auto dealerships and body shops to the restaurants and retail, we handle lockouts, dead batteries, flat tires, and tows along this stretch constantly. We also do lot-to-lot vehicle transfers for the dealerships and body shops in the area.",
  },
];

// ── Nearby areas ──
const NEARBY_AREAS = [
  { name: "Del Cerro", slug: "del-cerro", distance: "1 mi", direction: "South" },
  { name: "San Carlos", slug: "san-carlos", distance: "2 mi", direction: "East" },
  { name: "College Area", slug: "college-area", distance: "2 mi", direction: "West" },
  { name: "Tierrasanta", slug: "tierrasanta", distance: "3 mi", direction: "North" },
  { name: "Mission Valley", slug: "mission-valley", distance: "3 mi", direction: "Northwest" },
  { name: "La Mesa", slug: "la-mesa", distance: "3 mi", direction: "Southeast" },
];

export default function AlliedGardensPage() {
  return (
    <main className="bg-stone-50">
      {/* ===== HERO — Centered floating card over background ===== */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          {/* [PHOTO: Wide shot of a tree-lined Allied Gardens residential street —
               mature oaks/eucalyptus, single-story ranch homes with low-pitched roofs,
               a quiet sidewalk, warm afternoon light filtering through the canopy] */}
          <Image
            src="/neighborhoods/allied-gardens/hero-neighborhood.webp"
            alt="Tree-lined residential street in Allied Gardens with classic mid-century homes"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-900/50 to-stone-950/80" />
        </div>

        {/* Floating hero card */}
        <div className="relative max-w-4xl mx-auto px-4 py-20 text-center">
          {/* Heritage badge */}
          <div className="inline-flex items-center gap-2 bg-amber-700/30 backdrop-blur-md border border-amber-500/30 rounded-full px-5 py-2 mb-8">
            <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
            </svg>
            <span className="text-amber-300 text-sm font-semibold tracking-wide">EST. 1955 &bull; SAN DIEGO&apos;S MID-CENTURY GEM</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight">
            Allied Gardens
            <span className="block mt-3 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Towing & Roadside
            </span>
          </h1>

          <p className="mt-8 text-xl sm:text-2xl text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Where 1950s ranch homes meet{" "}
            <span className="text-amber-400 font-medium">Mission Trails wilderness</span>. From the{" "}
            <span className="text-amber-400 font-medium">I-8 corridor</span> to the{" "}
            <span className="text-amber-400 font-medium">Grantville Trolley</span> — we've towed these streets for years and know every block.
          </p>

          {/* Stats row */}
          <div className="mt-10 flex justify-center gap-10 sm:gap-16">
            <div>
              <div className="text-4xl font-bold text-white">15</div>
              <div className="text-sm text-stone-400 mt-1">Min Response</div>
            </div>
            <div className="border-l border-white/15 pl-10 sm:pl-16">
              <div className="text-4xl font-bold text-amber-400">92120</div>
              <div className="text-sm text-stone-400 mt-1">Full Coverage</div>
            </div>
            <div className="border-l border-white/15 pl-10 sm:pl-16">
              <div className="text-4xl font-bold text-white">24/7</div>
              <div className="text-sm text-stone-400 mt-1">Always On</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-amber-700/30 hover:scale-[1.02]"
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
      </section>

      {/* ===== NEIGHBORHOOD HISTORY — Timeline storytelling ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-700 font-semibold tracking-wider text-sm uppercase mb-4">
              A Neighborhood With a Story
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
              Built for <span className="text-amber-700">Heroes</span>
            </h2>
            <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto">
              Understanding Allied Gardens means understanding its roots. This is a neighborhood built with purpose — and that purpose still defines it.
            </p>
          </div>

          {/* Vertical timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 hidden md:block" />

            <div className="space-y-12">
              {HISTORY_TIMELINE.map((era, i) => (
                <div key={era.year} className="relative md:pl-24">
                  {/* Timeline dot */}
                  <div className="absolute left-5 top-1 w-7 h-7 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 border-4 border-white shadow-lg hidden md:flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  <div className={`rounded-2xl p-8 ${
                    i === 0 ? "bg-amber-50 border border-amber-200" :
                    i === 1 ? "bg-stone-50 border border-stone-200" :
                    "bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200"
                  }`}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl font-black text-amber-700">{era.year}</span>
                      <div className="h-px flex-1 bg-amber-200" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{era.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{era.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== I-8 CORRIDOR — Freeway response section ===== */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left — context */}
            <div className="lg:col-span-2">
              <span className="inline-block text-orange-400 font-semibold tracking-wider text-sm uppercase mb-4">
                Freeway Response Team
              </span>
              <h2 className="text-4xl font-bold leading-tight">
                The <span className="text-orange-400">I-8 Corridor</span>
              </h2>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                Interstate 8 cuts directly through Allied Gardens and Grantville. That means freeway breakdowns,
                rush-hour fender benders, and overheated engines on the eastbound grade are a daily reality.
                We've positioned our response for this exact stretch.
              </p>
              <div className="mt-8 bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-sm text-slate-400 mb-2">I-8 Coverage Span</div>
                <div className="text-2xl font-bold text-orange-400">College Ave → Mission Gorge Rd</div>
                <div className="text-sm text-slate-400 mt-2">~3 miles of freeway, every on-ramp and off-ramp covered</div>
              </div>
            </div>

            {/* Right — response zone cards */}
            <div className="lg:col-span-3 space-y-4">
              {FREEWAY_ZONES.map((zone) => (
                <div
                  key={zone.name}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-400/40 transition-all duration-300 flex items-start gap-6"
                >
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-white group-hover:text-orange-400 transition-colors">{zone.name}</h3>
                    <p className="mt-2 text-slate-400 text-sm leading-relaxed">{zone.detail}</p>
                  </div>
                  <div className="flex-shrink-0 bg-orange-500/20 border border-orange-400/30 text-orange-400 px-4 py-2 rounded-xl text-center">
                    <div className="text-lg font-bold">{zone.response}</div>
                    <div className="text-xs text-orange-300/70">response</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== DUAL IDENTITY — Residential + Commercial side by side ===== */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-700 font-semibold tracking-wider text-sm uppercase mb-4">
              Two Neighborhoods in One
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
              We Know <span className="text-amber-700">Both Sides</span>
            </h2>
            <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto">
              Allied Gardens is quiet ranch homes on one side and the bustling Grantville commercial district on the other. We service both with equal expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Residential side */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{DUAL_IDENTITY.residential.title}</h3>
                  <p className="text-sm text-slate-500">{DUAL_IDENTITY.residential.subtitle}</p>
                </div>
              </div>
              <div className="space-y-6">
                {DUAL_IDENTITY.residential.features.map((f) => (
                  <div key={f.name}>
                    <h4 className="font-bold text-amber-800 mb-1">{f.name}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{f.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Commercial side */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{DUAL_IDENTITY.commercial.title}</h3>
                  <p className="text-sm text-slate-500">{DUAL_IDENTITY.commercial.subtitle}</p>
                </div>
              </div>
              <div className="space-y-6">
                {DUAL_IDENTITY.commercial.features.map((f) => (
                  <div key={f.name}>
                    <h4 className="font-bold text-orange-700 mb-1">{f.name}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{f.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES — Vertical steps with context + stat badges ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-700 font-semibold tracking-wider text-sm uppercase mb-4">
              What Allied Gardens Needs Most
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
              Our Top <span className="text-amber-700">Local Services</span>
            </h2>
          </div>

          <div className="space-y-8">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={service.slug.startsWith("services/") ? `/${service.slug}` : `/san-diego/${service.slug}`}
                className="group block relative bg-stone-50 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 rounded-2xl p-8 transition-all duration-300 border border-stone-100 hover:border-amber-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-6">
                  {/* Step number */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-amber-500/20">
                    {i + 1}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                        {service.name}
                      </h3>
                      <span className="hidden sm:inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                        {service.stat}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{service.context}</p>
                  </div>

                  <svg className="w-5 h-5 text-slate-300 group-hover:text-amber-600 transition-all group-hover:translate-x-1 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ — Alternating left/right cards ===== */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-700 font-semibold tracking-wider text-sm uppercase mb-4">
              Straight Answers
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
              Allied Gardens <span className="text-amber-700">FAQ</span>
            </h2>
          </div>

          <div className="space-y-6">
            {FAQ_DATA.map((faq, i) => (
              <div
                key={i}
                className={`flex ${i % 2 === 1 ? "md:justify-end" : ""}`}
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 md:max-w-[85%]">
                  <h3 className="font-bold text-slate-900 mb-3 flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                      Q
                    </span>
                    <span className="leading-snug">{faq.question}</span>
                  </h3>
                  <p className="text-slate-600 leading-relaxed pl-10">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEARBY AREAS — with directional context ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Serving <span className="text-amber-700">Every Direction</span>
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Allied Gardens sits in the geographic center of eastern San Diego. Every neighboring community is within minutes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {NEARBY_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={areaHref(area.slug)}
                className="group bg-stone-50 hover:bg-amber-50 rounded-2xl p-5 text-center border border-stone-200 hover:border-amber-300 hover:shadow-md transition-all duration-300"
              >
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-1">{area.direction} &bull; {area.distance}</div>
                <div className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                  {area.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA — Warm copper gradient ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-900 to-stone-900" />
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Stranded in{" "}
            <span className="text-amber-400">Allied Gardens?</span>
          </h2>

          <p className="mt-8 text-xl text-amber-200/80 max-w-2xl mx-auto">
            From I-8 shoulders to Grantville parking lots to your own driveway on Greenbrier — one call, and we're on our way.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-10 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl shadow-amber-600/30 hover:scale-105"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {CONTACT.phone}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-amber-200/70">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>5-Star Google Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>24/7 East SD Service</span>
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
              { "@type": "ListItem", position: 3, name: "Allied Gardens", item: "https://www.closebytowing.com/allied-gardens" },
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
            "@id": "https://www.closebytowing.com/allied-gardens",
            name: "CloseBy Towing - Allied Gardens",
            description:
              "Professional towing and roadside assistance in Allied Gardens & Grantville, San Diego 92120. I-8 freeway response, Grantville Trolley Station coverage, Mission Gorge Road corridor, and all residential streets. 24/7 service.",
            url: "https://www.closebytowing.com/allied-gardens",
            telephone: CONTACT.phone,
            image: "https://www.closebytowing.com/neighborhoods/allied-gardens/hero-neighborhood.webp",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Allied Gardens",
              addressRegion: "CA",
              postalCode: "92120",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 32.7637,
              longitude: -117.0892,
            },
            areaServed: {
              "@type": "PostalAddress",
              postalCode: "92120",
              addressLocality: "Allied Gardens",
              addressRegion: "CA",
              addressCountry: "US",
            },
            serviceType: [
              "Towing Service",
              "Roadside Assistance",
              "Freeway Towing",
              "Jump Start Service",
              "Lockout Service",
              "Flatbed Towing",
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
