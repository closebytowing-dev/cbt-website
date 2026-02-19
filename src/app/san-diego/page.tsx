import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/lib/constants";
import Reviews from "@/components/Reviews";

export const metadata: Metadata = {
  title: "Tow Truck San Diego County | All Neighborhoods | CloseBy Towing",
  description:
    "San Diego County's trusted tow truck company. Covering 60+ neighborhoods from Oceanside to San Ysidro, I-5 to I-15. Towing, jump starts, lockouts, gas delivery. Call (858) 999-9293.",
  keywords:
    "tow truck San Diego, San Diego towing company, San Diego County tow truck, roadside assistance San Diego, I-5 towing, I-8 towing, I-15 towing, San Diego neighborhoods towing",
  openGraph: {
    title: "Tow Truck San Diego County | 60+ Neighborhoods | CloseBy Towing",
    description:
      "From the coast to East County, South Bay to North County — we cover every corner of San Diego. 24/7 towing & roadside assistance.",
    url: "https://www.closebytowing.com/san-diego",
    type: "website",
  },
  alternates: {
    canonical: "https://www.closebytowing.com/san-diego",
  },
};

// San Diego's 5 major regions with neighborhoods
const REGIONS = [
  {
    name: "Coastal & Downtown",
    tagline: "From the Gaslamp to La Jolla Cove",
    color: "sky",
    icon: "🌊",
    freeways: ["I-5", "I-8 West", "SR-163"],
    description:
      "San Diego's coastline stretches over 70 miles. Whether you're stuck on the Pacific Coast Highway near Del Mar, broken down in the Gaslamp Quarter after a night out, or dealing with a dead battery at La Jolla Shores — our trucks cover every beach community and downtown block.",
    neighborhoods: [
      { name: "Downtown", slug: "downtown" },
      { name: "La Jolla", slug: "la-jolla" },
      { name: "Pacific Beach", slug: "pacific-beach" },
      { name: "Ocean Beach", slug: "ocean-beach" },
      { name: "Mission Beach", slug: "mission-beach" },
      { name: "Point Loma", slug: "point-loma" },
      { name: "Coronado", slug: "coronado" },
      { name: "Del Mar", slug: "del-mar" },
      { name: "Solana Beach", slug: "solana-beach" },
      { name: "Encinitas", slug: "encinitas" },
    ],
  },
  {
    name: "Central San Diego",
    tagline: "The heart of the city",
    color: "violet",
    icon: "🏙️",
    freeways: ["I-8", "SR-163", "I-805", "SR-15"],
    description:
      "Central San Diego is where the city's busiest corridors converge. Mission Valley's shopping centers, Hillcrest's dense residential streets, Kearny Mesa's auto rows — these are neighborhoods with constant traffic and vehicles that need help at all hours.",
    neighborhoods: [
      { name: "Mission Valley", slug: "mission-valley" },
      { name: "Hillcrest", slug: "hillcrest" },
      { name: "North Park", slug: "north-park" },
      { name: "Bankers Hill", slug: "bankers-hill" },
      { name: "Mission Hills", slug: "mission-hills" },
      { name: "Kearny Mesa", slug: "kearny-mesa" },
      { name: "Clairemont", slug: "clairemont" },
      { name: "University City", slug: "university-city" },
      { name: "Linda Vista", slug: "linda-vista" },
      { name: "Serra Mesa", slug: "serra-mesa" },
      { name: "Normal Heights", slug: "normal-heights" },
      { name: "University Heights", slug: "university-heights" },
    ],
  },
  {
    name: "East County",
    tagline: "From the suburbs to the foothills",
    color: "amber",
    icon: "🌄",
    freeways: ["I-8 East", "SR-67", "SR-125"],
    description:
      "East County is sprawling and varied — from busy El Cajon Boulevard to the rural roads of Alpine and Lakeside. Summer heat pushes engine temps to the limit out here, making overheats and breakdowns more common. Our East County drivers know every canyon road and shopping plaza.",
    neighborhoods: [
      { name: "El Cajon", slug: "el-cajon", topLevel: true },
      { name: "La Mesa", slug: "la-mesa", topLevel: true },
      { name: "Santee", slug: "santee" },
      { name: "Lakeside", slug: "lakeside" },
      { name: "Spring Valley", slug: "spring-valley", topLevel: true },
      { name: "Lemon Grove", slug: "lemon-grove" },
      { name: "Alpine", slug: "alpine" },
      { name: "San Carlos", slug: "san-carlos" },
      { name: "Del Cerro", slug: "del-cerro" },
      { name: "College Area", slug: "college-area" },
      { name: "Allied Gardens", slug: "allied-gardens" },
      { name: "Rancho San Diego", slug: "rancho-san-diego" },
    ],
  },
  {
    name: "South Bay",
    tagline: "San Diego's southern gateway",
    color: "emerald",
    icon: "🌴",
    freeways: ["I-805 South", "I-5 South", "SR-54", "SR-125 South"],
    description:
      "South Bay is home to over 500,000 residents across Chula Vista, National City, and the border communities. Cross-border traffic on I-5 and I-805 means breakdowns are a daily occurrence. We station drivers throughout the South Bay for the fastest possible response.",
    neighborhoods: [
      { name: "Chula Vista", slug: "chula-vista", topLevel: true },
      { name: "National City", slug: "national-city", topLevel: true },
      { name: "Imperial Beach", slug: "imperial-beach" },
      { name: "San Ysidro", slug: "san-ysidro" },
      { name: "Bonita", slug: "bonita" },
      { name: "Otay Mesa", slug: "otay-mesa" },
      { name: "Paradise Hills", slug: "paradise-hills" },
      { name: "Lincoln Park", slug: "lincoln-park" },
      { name: "Logan Heights", slug: "logan-heights" },
      { name: "Skyline", slug: "skyline" },
      { name: "Palm City", slug: "palm-city" },
      { name: "Nestor", slug: "nestor" },
    ],
  },
  {
    name: "North County",
    tagline: "Inland valleys and planned communities",
    color: "rose",
    icon: "🏔️",
    freeways: ["I-15 North", "SR-56", "SR-78"],
    description:
      "North County's master-planned communities, tech corridors, and rolling hills mean long distances between services. From the Qualcomm campus in Sorrento Valley to the ranch estates of Rancho Santa Fe, our North County trucks handle everything from luxury flatbed transport to commuter breakdowns on I-15.",
    neighborhoods: [
      { name: "Mira Mesa", slug: "mira-mesa" },
      { name: "Poway", slug: "poway" },
      { name: "Scripps Ranch", slug: "scripps-ranch" },
      { name: "Rancho Bernardo", slug: "rancho-bernardo" },
      { name: "Carmel Mountain", slug: "carmel-mountain" },
      { name: "Carmel Valley", slug: "carmel-valley" },
      { name: "Sabre Springs", slug: "sabre-springs" },
      { name: "Rancho Penasquitos", slug: "rancho-penasquitos" },
      { name: "4S Ranch", slug: "4s-ranch" },
      { name: "Rancho Santa Fe", slug: "rancho-santa-fe" },
      { name: "Sorrento Valley", slug: "sorrento-valley" },
      { name: "Torrey Hills", slug: "torrey-hills" },
      { name: "Tierrasanta", slug: "tierrasanta" },
    ],
  },
];

// San Diego freeway system with details
const FREEWAYS = [
  {
    name: "Interstate 5",
    tag: "I-5",
    route: "Oceanside → San Ysidro (Border)",
    miles: "75 mi through SD County",
    note: "California's busiest north–south freeway. We cover every exit from Oceanside to the San Ysidro border crossing.",
  },
  {
    name: "Interstate 8",
    tag: "I-8",
    route: "Ocean Beach → Alpine",
    miles: "35 mi through SD County",
    note: "Connects the coast to East County through Mission Valley. Heavy commuter traffic and a steep grade past SDSU.",
  },
  {
    name: "Interstate 15",
    tag: "I-15",
    route: "Downtown → Escondido",
    miles: "40 mi through SD County",
    note: "The north–south spine of inland San Diego. Tech commuters, Qualcomm Stadium traffic, and the Express Lanes.",
  },
  {
    name: "Interstate 805",
    tag: "I-805",
    route: "Sorrento Valley → San Ysidro",
    miles: "28 mi",
    note: "Parallels I-5 through the center of San Diego. Heavy South Bay and cross-border traffic daily.",
  },
  {
    name: "State Route 163",
    tag: "SR-163",
    route: "Downtown → Kearny Mesa",
    miles: "11 mi",
    note: "Cuts through Balboa Park and connects downtown to the central business corridors.",
  },
  {
    name: "State Route 56",
    tag: "SR-56",
    route: "Torrey Pines → I-15",
    miles: "10 mi",
    note: "East–west connector linking the coast to inland North County through Carmel Valley and Rancho Penasquitos.",
  },
];

// All 7 services
const ALL_SERVICES = [
  {
    name: "Towing",
    href: "/services/towing",
    description: "Flatbed and wheel-lift towing for any vehicle — cars, SUVs, trucks, motorcycles, and luxury vehicles.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    name: "Collision Recovery",
    href: "/services/collision-recovery",
    description: "Post-accident vehicle recovery. We coordinate with CHP, document for insurance, and transport safely.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    name: "Jump Start",
    href: "/services/jump-start",
    description: "Dead battery? We come to you with professional jump-start equipment — no need for another car.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    name: "Lockout Service",
    href: "/services/lockout",
    description: "Locked your keys inside? We open your car without damage in minutes — any make, any model.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    name: "Tire Change",
    href: "/services/tire-change",
    description: "Flat tire on the freeway or in a parking lot? We swap it for your spare quickly and safely.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.657-5.657a8 8 0 1111.314 0l-5.657 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: "Gas Delivery",
    href: "/services/gas-delivery",
    description: "Ran out of fuel? We deliver enough gas to get you to the nearest station — wherever you are.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      </svg>
    ),
  },
  {
    name: "Winch-Out",
    href: "/services/winch-out",
    description: "Stuck in mud, sand, a ditch, or an embankment? Our winch equipment pulls you out safely.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
];

// San Diego FAQ
const FAQ_DATA = [
  {
    question: "What parts of San Diego County do you cover?",
    answer:
      "We cover all of San Diego County — over 60 neighborhoods across 5 regions. From Oceanside and Carlsbad in the north to San Ysidro at the Mexican border, and from the beaches to Alpine in the east. Every major freeway (I-5, I-8, I-15, I-805) and every community in between.",
  },
  {
    question: "How does your response time vary across San Diego?",
    answer:
      "We stage drivers in each region of San Diego County for consistent response times. Coastal and central San Diego: 15–25 minutes. East County and North County: 20–30 minutes. South Bay: 15–25 minutes. Freeway breakdowns often get faster response because we can dispatch from multiple directions.",
  },
  {
    question: "Which San Diego freeways do you respond to?",
    answer:
      "All of them. We respond to breakdowns and accidents on I-5, I-8, I-15, I-805, SR-163, SR-56, SR-52, SR-67, SR-78, SR-125, and SR-54. Freeway calls are prioritized because shoulder breakdowns are a safety hazard — we dispatch immediately.",
  },
  {
    question: "Do you offer different services in different areas?",
    answer:
      "Every service we offer — towing, jump starts, lockouts, tire changes, gas delivery, winch-outs, and collision recovery — is available in every neighborhood across San Diego County. No matter where you are, you get the same fast response and professional service.",
  },
  {
    question: "Are there extra charges for remote areas like Alpine or Lakeside?",
    answer:
      "Our pricing is transparent and distance-based. Towing starts at $95 for the hookup plus $5 per mile. You get your exact price before we dispatch — no surprises, no hidden fees, regardless of which neighborhood you're in.",
  },
  {
    question: "Can you tow my car to a shop in a different part of San Diego?",
    answer:
      "Absolutely. We tow to any destination in San Diego County — your preferred mechanic, a dealership, your home, or an auto body shop. Long-distance tows within the county are quoted upfront based on mileage. Just tell us where you need the vehicle to go.",
  },
];

/** Resolve the correct href for a neighborhood */
function neighborhoodHref(slug: string, topLevel?: boolean) {
  return topLevel ? `/${slug}` : `/san-diego/${slug}`;
}

export default function SanDiegoPage() {
  const totalNeighborhoods = REGIONS.reduce((sum, r) => sum + r.neighborhoods.length, 0);

  return (
    <main className="bg-white">
      {/* ── HERO — Full-bleed photo with overlay ── */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-end text-white overflow-hidden">
        {/* Background image */}
        <Image
          src="/hero/san-diego-flatbed.png"
          alt="CloseBy Towing flatbed truck with vehicle loaded, San Diego skyline at golden hour"
          fill
          className="object-cover object-[center_60%]"
          priority
          sizes="100vw"
          quality={90}
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a2e] via-[#0a0a2e]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a2e]/80 via-transparent to-transparent" />
        {/* Warm golden-hour color tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-cyan-900/10" />

        {/* Floating stat cards — desktop only */}
        <div className="absolute top-28 right-8 xl:right-16 hidden lg:flex flex-col gap-3 z-10">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 text-center shadow-2xl">
            <div className="text-3xl font-bold text-[#ffba42]">{totalNeighborhoods}+</div>
            <div className="text-xs text-white/70 font-medium mt-0.5">Neighborhoods</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 text-center shadow-2xl">
            <div className="text-3xl font-bold text-cyan-400">24/7</div>
            <div className="text-xs text-white/70 font-medium mt-0.5">Always On</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 text-center shadow-2xl">
            <div className="text-3xl font-bold text-emerald-400">~20</div>
            <div className="text-xs text-white/70 font-medium mt-0.5">Min Response</div>
          </div>
        </div>

        {/* Content — anchored to bottom */}
        <div className="relative z-10 w-full pb-12 sm:pb-16 pt-40 sm:pt-48">
          <div className="max-w-7xl mx-auto px-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <svg className="w-4 h-4 text-[#ffba42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white/90 text-sm font-medium">
                Covering {totalNeighborhoods}+ Neighborhoods &bull; Every Major Freeway
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-3xl">
              Tow Truck Service
              <span className="block text-[#ffba42] mt-1">Across San Diego</span>
            </h1>

            <p className="mt-6 text-xl sm:text-2xl text-white/80 leading-relaxed max-w-2xl">
              From <span className="text-white font-semibold">Oceanside</span> to the{" "}
              <span className="text-white font-semibold">border</span>, from{" "}
              <span className="text-white font-semibold">the coast</span> to{" "}
              <span className="text-white font-semibold">Alpine</span> — one call, one company,{" "}
              every corner of the county.
            </p>

            {/* Freeway tags — mobile visible */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["I-5", "I-8", "I-15", "I-805", "SR-163", "SR-56"].map((fw) => (
                <span
                  key={fw}
                  className="bg-white/10 backdrop-blur-sm border border-white/15 text-white/80 text-sm font-mono font-bold px-3 py-1 rounded-lg"
                >
                  {fw}
                </span>
              ))}
              <span className="text-white/50 text-sm self-center">+ 5 more</span>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="group inline-flex items-center justify-center gap-3 bg-[#ffba42] hover:bg-[#ffc85c] text-[#1e1e4a] px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-xl shadow-[#ffba42]/30 relative overflow-hidden"
              >
                {/* Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <svg className="w-6 h-6 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="relative">Call: {CONTACT.phone}</span>
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all border border-white/25 hover:border-white/40"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.124 1.521 5.86L0 24l6.335-1.652A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82c-1.99 0-3.87-.528-5.49-1.45l-.394-.234-3.758.98.998-3.648-.257-.408A9.78 9.78 0 012.18 12c0-5.422 4.398-9.82 9.82-9.82 5.422 0 9.82 4.398 9.82 9.82 0 5.422-4.398 9.82-9.82 9.82z" />
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* Trust line — bottom edge */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-white/60 text-sm">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                5.0 on Google
              </span>
              <span>Licensed &amp; Insured</span>
              <span>No Hidden Fees</span>
              <span>Se Habla Español</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS — scrolling carousel from homepage ── */}
      <div className="relative z-20 -mt-12">
        <Reviews />
      </div>

      {/* ── ABOUT SAN DIEGO COVERAGE ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">
            Why San Diego Drivers Call <span className="text-[#1e1e4a]">CloseBy</span>
          </h2>
          <div className="mt-8 space-y-5 text-lg text-slate-600 leading-relaxed">
            <p>
              San Diego County covers over 4,200 square miles — from the Pacific coastline to the
              Anza-Borrego desert, from Camp Pendleton to the Tijuana border crossing. With 3.3 million
              residents and millions of annual tourists, vehicles break down constantly across this vast
              and diverse landscape.
            </p>
            <p>
              CloseBy Towing is built for San Diego&apos;s unique geography. We don&apos;t operate from
              a single yard — our trucks are staged across 5 regions so the closest driver is always
              minutes away. Stuck on the I-5 merge in Sorrento Valley? Locked out at Petco Park?
              Overheated climbing the I-8 grade past San Diego State? We&apos;ve handled all of it,
              thousands of times.
            </p>
            <p>
              Every neighborhood page below has local details — response times, landmarks we serve,
              roads we cover, and FAQs specific to that area. Find yours and see exactly how we can
              help where you are.
            </p>
          </div>
        </div>
      </section>

      {/* ── REGION-BY-REGION NEIGHBORHOODS ── */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Every Region. Every Neighborhood.
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Click any neighborhood to see local coverage details, response times, and area-specific
              information.
            </p>
          </div>

          <div className="space-y-12">
            {REGIONS.map((region) => {
              const colorMap: Record<string, { border: string; bg: string; text: string; tag: string }> = {
                sky: { border: "border-sky-200", bg: "bg-sky-50", text: "text-sky-700", tag: "bg-sky-100 text-sky-700" },
                violet: { border: "border-violet-200", bg: "bg-violet-50", text: "text-violet-700", tag: "bg-violet-100 text-violet-700" },
                amber: { border: "border-amber-200", bg: "bg-amber-50", text: "text-amber-700", tag: "bg-amber-100 text-amber-700" },
                emerald: { border: "border-emerald-200", bg: "bg-emerald-50", text: "text-emerald-700", tag: "bg-emerald-100 text-emerald-700" },
                rose: { border: "border-rose-200", bg: "bg-rose-50", text: "text-rose-700", tag: "bg-rose-100 text-rose-700" },
              };
              const c = colorMap[region.color];

              return (
                <div key={region.name} className={`bg-white rounded-2xl border ${c.border} overflow-hidden shadow-sm`}>
                  {/* Region header */}
                  <div className={`${c.bg} px-6 sm:px-8 py-6`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                          <span className="text-3xl">{region.icon}</span>
                          {region.name}
                        </h3>
                        <p className="mt-1 text-slate-600">{region.tagline}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {region.freeways.map((fw) => (
                          <span key={fw} className={`${c.tag} text-xs font-bold px-2.5 py-1 rounded-full`}>
                            {fw}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="mt-4 text-slate-600 text-sm leading-relaxed max-w-3xl">
                      {region.description}
                    </p>
                  </div>

                  {/* Neighborhood grid */}
                  <div className="px-6 sm:px-8 py-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                      {region.neighborhoods.map((n) => (
                        <Link
                          key={n.slug}
                          href={neighborhoodHref(n.slug, "topLevel" in n && n.topLevel)}
                          className={`group flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-100 hover:${c.border} hover:${c.bg} transition-all duration-150`}
                        >
                          <svg className={`w-4 h-4 ${c.text} opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          <span className="font-medium text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                            {n.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FREEWAY COVERAGE ── */}
      <section className="py-16 sm:py-24 bg-[#0a1628] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              San Diego <span className="text-cyan-400">Freeway Coverage</span>
            </h2>
            <p className="mt-4 text-blue-200/70 max-w-2xl mx-auto">
              Broke down on the shoulder? We respond to every major freeway and highway in San Diego County.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FREEWAYS.map((fw) => (
              <div key={fw.tag} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-cyan-500/20 text-cyan-400 font-mono font-bold text-lg px-3 py-1 rounded-lg">
                    {fw.tag}
                  </span>
                  <span className="text-white/40 text-sm">{fw.miles}</span>
                </div>
                <div className="text-white/80 text-sm font-medium mb-2">{fw.route}</div>
                <p className="text-white/50 text-sm leading-relaxed">{fw.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL SERVICES ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Every Service, <span className="text-[#1e1e4a]">Every Neighborhood</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              All seven of our services are available anywhere in San Diego County — no exceptions, no extra fees for remote areas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {ALL_SERVICES.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="group bg-slate-50 hover:bg-blue-50 rounded-2xl p-6 transition-all duration-200 hover:shadow-lg border border-slate-100 hover:border-blue-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1e1e4a] text-[#ffba42] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900">{s.name}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              San Diego Towing <span className="text-[#1e1e4a]">FAQ</span>
            </h2>
          </div>
          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-200 transition-colors"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-blue-50/50 transition-colors">
                  <h3 className="font-semibold text-slate-900 pr-8">{faq.question}</h3>
                  <svg
                    className="w-5 h-5 text-blue-500 transition-transform group-open:rotate-180 flex-shrink-0"
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
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#1a3a5c] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(56,189,248,0.15) 0%, transparent 60%)" }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold">
            Stranded Somewhere in <span className="text-cyan-400">San Diego?</span>
          </h2>
          <p className="mt-6 text-xl text-blue-200/80">
            It doesn&apos;t matter which neighborhood, which freeway, or what time it is. We&apos;re here.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-[#ffba42] hover:bg-[#ffc85c] text-[#1e1e4a] px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg shadow-[#ffba42]/20"
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
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all border border-white/20"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-blue-200/70 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              5.0 Stars on Google
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              24/7 Availability
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              { "@type": "ListItem", position: 2, name: "San Diego", item: "https://www.closebytowing.com/san-diego" },
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
            "@id": "https://www.closebytowing.com/san-diego",
            name: "CloseBy Towing - San Diego County",
            description:
              "Full-service towing and roadside assistance covering all of San Diego County. 60+ neighborhoods, every major freeway, 24/7 availability.",
            url: "https://www.closebytowing.com/san-diego",
            telephone: CONTACT.phone,
            areaServed: [
              { "@type": "AdministrativeArea", name: "San Diego County" },
              { "@type": "City", name: "San Diego" },
              { "@type": "City", name: "Chula Vista" },
              { "@type": "City", name: "El Cajon" },
              { "@type": "City", name: "La Mesa" },
              { "@type": "City", name: "National City" },
              { "@type": "City", name: "Poway" },
              { "@type": "City", name: "Santee" },
            ],
            serviceType: [
              "Towing Service",
              "Roadside Assistance",
              "Emergency Towing",
              "Flatbed Towing",
              "Jump Start Service",
              "Lockout Service",
              "Tire Change Service",
            ],
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
