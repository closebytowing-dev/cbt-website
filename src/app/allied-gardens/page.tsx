
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { areaHref, CONTACT } from "@/lib/constants";

/* ─── Allied Gardens — "Built for Heroes, Built to Last" ───
   Design: Deep indigo + warm terracotta/burnt sienna accents on cream.
   Vintage-established feel honoring 1955 post-WWII veteran housing roots.
   Visual richness: Full-bleed hero, photo gallery, floating cards, glowing stats.
   Layout: Immersive hero → Photo story grid → History timeline →
           I-8 Corridor feature → Dual identity split → Services →
           Mission Trails gateway → FAQ → Nearby → CTA.
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
    title:
      "Allied Gardens Towing | Mid-Century Neighborhood, Modern Service | CloseBy",
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

// ── Neighborhood character snapshots ──
const NEIGHBORHOOD_SNAPSHOTS = [
  {
    title: "Mid-Century Ranch Homes",
    text: "Row after row of 1955-era single-story homes with low-pitched roofs, attached garages, and mature landscaping. These are the homes that housed a generation of returning veterans — and many original families still live here.",
    image: "/neighborhoods/allied-gardens/ranch-homes.webp",
    imageAlt: "Classic mid-century ranch homes on a tree-lined Allied Gardens street",
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-square",
  },
  {
    title: "Mission Trails Gateway",
    text: "7,220 acres of wilderness start where Allied Gardens ends. Cowles Mountain, the Visitor Center, and Father Junipero Serra Trail are all accessible from neighborhood streets.",
    image: "/neighborhoods/allied-gardens/mission-trails.webp",
    imageAlt: "Mission Trails Regional Park view from Allied Gardens",
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Grantville Transit Hub",
    text: "The Green Line Trolley station with 400+ park-and-ride spaces anchors the commercial district. Mission Gorge Road's auto dealerships and restaurants line both sides.",
    image: "/neighborhoods/allied-gardens/grantville-trolley.webp",
    imageAlt: "Grantville Trolley Station and Mission Gorge Road commercial area",
    span: "",
    aspect: "aspect-[4/3]",
  },
];

// ── History milestones ──
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

// ── I-8 Corridor ──
const FREEWAY_ZONES = [
  {
    name: "I-8 at Waring Road",
    detail:
      "The main Allied Gardens on-ramp. Merge lane incidents and overheated engines on the uphill eastbound grade are our top calls here.",
    response: "8 min",
  },
  {
    name: "I-8 at Mission Gorge Road",
    detail:
      "Grantville's primary interchange. Heavy commercial traffic from the auto dealerships and warehouses creates tight situations — we know every shoulder pullout.",
    response: "10 min",
  },
  {
    name: "I-8 at College Avenue",
    detail:
      "The western gateway to Allied Gardens. SDSU traffic spills into this interchange during events. We stage nearby and respond fast.",
    response: "12 min",
  },
  {
    name: "Mission Gorge Road Corridor",
    detail:
      "The 2-mile commercial strip through Grantville — auto body shops, restaurants, and the Trolley Station. Lockouts and dead batteries are constant here.",
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
        text: "The heart of the neighborhood. Allied Gardens Rec Center sits on Greenbrier. Golfcrest runs along the old golf course. These wide residential streets are where most of our home-driveway calls originate.",
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
        name: "Alvarado Medical Center",
        text: "Alvarado Hospital and surrounding medical offices generate emergency calls from staff and visitors. We reach the ER entrance in 10 minutes and know the parking structure layout.",
      },
    ],
  },
};

// ── Services ──
const SERVICES = [
  {
    name: "I-8 Freeway Towing",
    slug: "emergency-towing",
    context:
      "Allied Gardens sits along one of San Diego's busiest east-west freeways. We handle I-8 breakdowns, accidents, and shoulder recoveries between College Ave and the Mission Gorge interchange daily.",
    stat: "8-min I-8 response",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Trolley Station Jump Starts",
    slug: "services/jump-start",
    context:
      "Grantville commuters leave cars parked 8-10 hours with dome lights on or old batteries that don't survive the summer heat. We jump more cars at this station than almost any other in San Diego.",
    stat: "400+ space lot",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    name: "Residential Lockouts",
    slug: "services/lockout",
    context:
      "Allied Gardens' 1950s homes often have narrow driveways with cars parked nose-in. We arrive fast and work carefully in tight spaces without scratching your vehicle or your neighbor's.",
    stat: "15-min response",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    name: "Hillside Flatbed Transport",
    slug: "flatbed-towing",
    context:
      "The hills along Orcutt Avenue and the Del Cerro border mean steep driveways and grades. Our flatbed handles inclined loading safely — critical when a car dies halfway up a hillside driveway.",
    stat: "Hill-grade rated",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
];

// ── FAQ ──
const FAQ_DATA = [
  {
    question:
      "I'm stuck on I-8 near the Waring Road exit. How fast can you get here?",
    answer:
      "The Waring Road interchange is our fastest response zone in Allied Gardens — typically 8–10 minutes. We approach from Mission Gorge Road to avoid the freeway backup. If you're on the shoulder, stay in your vehicle with hazards on. If you need to exit the freeway first, the Waring Road off-ramp has a wide shoulder where we can safely load.",
  },
  {
    question:
      "My car died at the Grantville Trolley park-and-ride. It's 6 PM and I just got off the train.",
    answer:
      "We get this call almost daily. The Green Line park-and-ride at Grantville holds 400+ vehicles and dead batteries are extremely common after a full day of parking — especially in summer when heat drains older batteries. We'll meet you at your car, jump it or tow it, and have you on your way. Typical response: 12–15 minutes.",
  },
  {
    question:
      "Do you know the residential streets in Allied Gardens? Some are pretty narrow.",
    answer:
      "We've been towing from Allied Gardens residential streets for years. Greenbrier Avenue, Golfcrest Drive, Orcutt Avenue, Zion Avenue — we know which blocks have tight cul-de-sacs, which driveways are steep, and where we need our compact rig instead of the full-size flatbed. Many homes here were built in the 1950s with single-car driveways, so precision matters.",
  },
  {
    question: "Can you tow from the Alvarado Hospital area?",
    answer:
      "Yes — Alvarado Hospital Medical Center on Alvarado Road is in our regular service area. We handle emergency tows from the ER parking area, the main visitor lot, and the medical offices along Alvarado Canyon Road. Staff who work late shifts and find dead batteries are frequent callers. We're usually there in 10 minutes.",
  },
  {
    question:
      "What about the Mission Gorge Road businesses in Grantville?",
    answer:
      "Mission Gorge Road through Grantville is one of our most-serviced corridors. From the auto dealerships and body shops to the restaurants and retail, we handle lockouts, dead batteries, flat tires, and tows along this stretch constantly. We also do lot-to-lot vehicle transfers for the dealerships and body shops.",
  },
];

// ── Nearby areas ──
const NEARBY_AREAS = [
  { name: "Del Cerro", slug: "del-cerro", distance: "1 mi", direction: "South" },
  { name: "San Carlos", slug: "san-carlos", distance: "2 mi", direction: "East" },
  { name: "College Area", slug: "college-area", distance: "2 mi", direction: "West" },
  { name: "Tierrasanta", slug: "tierrasanta", distance: "3 mi", direction: "North" },
  { name: "Mission Valley", slug: "mission-valley", distance: "3 mi", direction: "NW" },
  { name: "La Mesa", slug: "la-mesa", distance: "3 mi", direction: "SE" },
];

export default function AlliedGardensPage() {
  return (
    <main className="bg-amber-50/30">
      {/* ===== HERO — Full-bleed immersive with warm vintage overlay ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          {/* [PHOTO: Wide golden-hour shot of a tree-lined Allied Gardens street —
               mature oak canopy overhead, single-story ranch homes with warm-toned stucco,
               a quiet sidewalk with long shadows, vintage neighborhood warmth] */}
          <Image
            src="/neighborhoods/allied-gardens/hero-neighborhood.webp"
            alt="Tree-lined residential street in Allied Gardens with classic mid-century ranch homes"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Warm vintage gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/95 via-indigo-950/75 to-amber-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/70 via-transparent to-indigo-900/30" />
        </div>

        {/* Warm decorative glows */}
        <div className="absolute top-24 right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-16 w-72 h-72 bg-orange-400/8 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="max-w-3xl">
            {/* Heritage badges */}
            <div className="inline-flex items-center gap-3 mb-8 flex-wrap">
              <div className="flex items-center gap-2 bg-amber-600/20 backdrop-blur-md border border-amber-500/30 rounded-full px-5 py-2">
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
                <span className="text-amber-300 text-sm font-semibold tracking-wide">EST. 1955 &bull; VETERAN-BUILT COMMUNITY</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-white/90 text-sm font-medium">Available 24/7</span>
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight">
              Allied Gardens
              <span className="block mt-3 bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">
                Towing & Roadside
              </span>
            </h1>

            {/* Rich description */}
            <p className="mt-8 text-xl sm:text-2xl text-indigo-200/90 leading-relaxed max-w-2xl">
              Where 1950s ranch homes sit under a canopy of{" "}
              <span className="text-amber-400 font-medium">century-old oaks</span>, and{" "}
              <span className="text-amber-400 font-medium">Mission Trails</span> wilderness begins at the end of the block.
              From the <span className="text-amber-400 font-medium">I-8 corridor</span> to the{" "}
              <span className="text-amber-400 font-medium">Grantville Trolley</span> — we've been towing these streets for years.
            </p>

            {/* ZIP display */}
            <div className="mt-8 flex items-center gap-3">
              <span className="text-indigo-300/60 text-sm font-medium">Serving ZIP</span>
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-amber-500/20">
                92120
              </span>
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">15</div>
                <div className="text-sm text-indigo-300/60 mt-1">Min Response</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-3xl sm:text-4xl font-bold text-amber-400">I-8</div>
                <div className="text-sm text-indigo-300/60 mt-1">Corridor Pro</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">24/7</div>
                <div className="text-sm text-indigo-300/60 mt-1">Always On</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-900 px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-amber-500/30 hover:shadow-amber-400/40 hover:scale-[1.02]"
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/50 text-xs tracking-widest uppercase">Explore</span>
          <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===== NEIGHBORHOOD SNAPSHOTS — Bento photo grid ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-700 font-semibold tracking-wider text-sm uppercase mb-4">
              The Neighborhood Up Close
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
              This Is <span className="text-amber-700">Allied Gardens</span>
            </h2>
            <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto">
              A 1950s veteran-built community where tree-shaded streets meet one of America's largest urban wilderness parks.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NEIGHBORHOOD_SNAPSHOTS.map((snap, i) => (
              <div
                key={snap.title}
                className={`group relative overflow-hidden rounded-3xl ${snap.span}`}
              >
                <div className={`relative ${snap.aspect}`}>
                  {/* [PHOTO placeholders noted in NEIGHBORHOOD_SNAPSHOTS data above] */}
                  <Image
                    src={snap.image}
                    alt={snap.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes={i === 0 ? "50vw" : "25vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className={`font-bold text-white ${i === 0 ? "text-3xl" : "text-xl"}`}>
                    {snap.title}
                  </h3>
                  <p className={`mt-2 text-slate-300 ${i === 0 ? "text-base" : "text-sm"} leading-relaxed`}>
                    {snap.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HISTORY — Warm timeline with floating era cards ===== */}
      <section className="py-24 bg-gradient-to-b from-amber-50 to-orange-50/50">
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

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 hidden md:block" />

            <div className="space-y-10">
              {HISTORY_TIMELINE.map((era, i) => (
                <div key={era.year} className="relative md:pl-24">
                  {/* Dot */}
                  <div className="absolute left-[22px] top-2 w-[18px] h-[18px] rounded-full bg-gradient-to-br from-amber-500 to-orange-600 border-[3px] border-amber-50 shadow-md hidden md:block" />

                  <div className={`rounded-3xl p-8 shadow-sm ${
                    i === 0
                      ? "bg-white border-2 border-amber-200"
                      : i === 1
                      ? "bg-white border border-stone-200"
                      : "bg-white border-2 border-amber-200"
                  }`}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`text-4xl font-black tracking-tight ${
                        i === 2 ? "text-amber-600" : "text-amber-700"
                      }`}>{era.year}</span>
                      <div className="h-px flex-1 bg-amber-200" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{era.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">{era.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== I-8 CORRIDOR — Feature section ===== */}
      <section className="py-24 bg-indigo-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Feature stat banner */}
          <div className="text-center mb-16">
            <span className="inline-block text-orange-400 font-semibold tracking-wider text-sm uppercase mb-4">
              Freeway Response Team
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold">
              The <span className="text-orange-400">I-8 Corridor</span>
            </h2>
            <p className="mt-6 text-xl text-indigo-300/70 max-w-2xl mx-auto">
              Interstate 8 cuts directly through Allied Gardens and Grantville — breakdowns, rush-hour fender benders, and overheated engines on the eastbound grade are a daily reality. We're positioned for exactly this stretch.
            </p>

            {/* Glowing coverage span */}
            <div className="mt-10 inline-flex items-center gap-6 bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-5 border border-white/10">
              <div className="text-left">
                <div className="text-xs text-indigo-400 uppercase tracking-wide font-medium">Coverage Span</div>
                <div className="text-xl font-bold text-orange-400 mt-1">College Ave → Mission Gorge Rd</div>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="text-left">
                <div className="text-xs text-indigo-400 uppercase tracking-wide font-medium">Distance</div>
                <div className="text-xl font-bold text-white mt-1">~3 Miles</div>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <div className="text-left">
                <div className="text-xs text-indigo-400 uppercase tracking-wide font-medium">Every</div>
                <div className="text-xl font-bold text-white mt-1">On/Off Ramp</div>
              </div>
            </div>
          </div>

          {/* Response zone grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {FREEWAY_ZONES.map((zone) => (
              <div
                key={zone.name}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:border-orange-400/40 transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-bold text-xl text-white group-hover:text-orange-400 transition-colors">
                    {zone.name}
                  </h3>
                  <div className="flex-shrink-0 bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-orange-500/20">
                    {zone.response}
                  </div>
                </div>
                <p className="text-indigo-200/60 leading-relaxed">{zone.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DUAL IDENTITY — Residential + Commercial ===== */}
      <section className="py-24 bg-white">
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
            {/* Residential card */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-3xl p-8 border border-amber-200 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{DUAL_IDENTITY.residential.title}</h3>
                  <p className="text-sm text-amber-700/70">{DUAL_IDENTITY.residential.subtitle}</p>
                </div>
              </div>
              <div className="space-y-6">
                {DUAL_IDENTITY.residential.features.map((f) => (
                  <div key={f.name} className="bg-white rounded-xl p-5 border border-amber-100">
                    <h4 className="font-bold text-amber-800 mb-2 text-lg">{f.name}</h4>
                    <p className="text-slate-600 leading-relaxed">{f.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Commercial card */}
            <div className="bg-gradient-to-br from-indigo-50 to-slate-50 rounded-3xl p-8 border border-indigo-200 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{DUAL_IDENTITY.commercial.title}</h3>
                  <p className="text-sm text-indigo-600/70">{DUAL_IDENTITY.commercial.subtitle}</p>
                </div>
              </div>
              <div className="space-y-6">
                {DUAL_IDENTITY.commercial.features.map((f) => (
                  <div key={f.name} className="bg-white rounded-xl p-5 border border-indigo-100">
                    <h4 className="font-bold text-indigo-800 mb-2 text-lg">{f.name}</h4>
                    <p className="text-slate-600 leading-relaxed">{f.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES — Visual cards with icons and stats ===== */}
      <section className="py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-700 font-semibold tracking-wider text-sm uppercase mb-4">
              What Allied Gardens Needs Most
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
              Our Top <span className="text-amber-700">Local Services</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={service.slug.startsWith("services/") ? `/${service.slug}` : `/san-diego/${service.slug}`}
                className="group bg-white hover:bg-gradient-to-br hover:from-amber-50 hover:to-orange-50 rounded-3xl p-8 transition-all duration-300 border border-stone-200 hover:border-amber-300 hover:shadow-xl"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                        {service.name}
                      </h3>
                      <span className="hidden sm:inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                        {service.stat}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{service.context}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-amber-600 font-semibold text-sm">
                      <span>Learn More</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ — Warm accordion with rich styling ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-700 font-semibold tracking-wider text-sm uppercase mb-4">
              Straight Answers
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
              Allied Gardens <span className="text-amber-700">FAQ</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <details
                key={i}
                className="group bg-amber-50/50 rounded-2xl border border-amber-200/60 overflow-hidden hover:border-amber-400 transition-colors"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="font-bold text-lg text-slate-900 pr-8">{faq.question}</h3>
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-200 rounded-xl flex items-center justify-center group-open:bg-amber-500 transition-colors">
                    <svg
                      className="w-5 h-5 text-amber-700 group-open:text-white transition-all group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEARBY AREAS ===== */}
      <section className="py-20 bg-amber-50/50">
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
                className="group bg-white hover:bg-amber-50 rounded-2xl p-5 text-center border border-amber-100 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-1">
                  {area.direction} &bull; {area.distance}
                </div>
                <div className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                  {area.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA — Warm immersive banner ===== */}
      <section className="relative py-24 overflow-hidden">
        {/* Background with warm overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-amber-950 to-indigo-950" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Need Help in{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Allied Gardens?</span>
          </h2>

          <p className="mt-8 text-xl text-indigo-200/70 max-w-2xl mx-auto">
            From I-8 shoulders to Grantville parking lots to your own driveway on Greenbrier — one call, and we're on our way.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-900 px-10 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl shadow-amber-500/30 hover:scale-105"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {CONTACT.phone}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-indigo-200/60">
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
