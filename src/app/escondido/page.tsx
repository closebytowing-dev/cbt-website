
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT, areaHref } from "@/lib/constants";

/* ─── SEO METADATA ─── */
export const metadata: Metadata = {
  title:
    "Towing Escondido | Tow Truck Escondido CA | 24/7 | CloseBy Towing",
  description:
    "Towing Escondido — fast tow truck service for North County's largest inland city. San Diego Zoo Safari Park, Downtown Escondido, Kit Carson Park, I-15, SR-78 & Centre City Parkway. 25-min response, 24/7.",
  keywords:
    "towing Escondido, tow truck Escondido, Escondido towing service, 92025 towing, 92026 towing, 92027 towing, 92029 towing, Safari Park towing, I-15 Escondido tow truck, SR-78 towing, Downtown Escondido towing, Palomar Hospital towing, roadside assistance Escondido",
  openGraph: {
    title: "Towing Escondido CA | Tow Truck 24/7 | CloseBy Towing",
    description:
      "North County's largest inland city trusts CloseBy. Safari Park, Downtown Escondido, Kit Carson Park, Palomar Hospital & every major corridor — we cover all of Escondido.",
    url: "https://www.closebytowing.com/escondido",
    type: "website",
  },
  alternates: { canonical: "https://www.closebytowing.com/escondido" },
};

/* ─── ZIP CODES ─── */
const ESCONDIDO_ZIP_CODES = ["92025", "92026", "92027", "92029", "92030"];

/* ─── ESCONDIDO NEIGHBORHOOD ZONES ─── */
const NEIGHBORHOODS = [
  {
    zone: "Downtown Escondido & Grand Avenue",
    streets: "Grand Ave, Broadway, Centre City Pkwy, Juniper St",
    character:
      "The cultural and commercial heart of Escondido. The California Center for the Arts anchors one end while independent restaurants, breweries, and vintage shops line Grand Avenue. Friday night Cruisin' Grand car shows pack the streets from April through September. Lockouts and dead batteries are our most common calls here — we navigate the angled parking, one-way blocks, and event closures with practiced ease.",
    eta: "12-20 min",
    accent: "from-blue-600 to-indigo-700",
  },
  {
    zone: "San Diego Zoo Safari Park & Wild Animal Corridor",
    streets: "San Pasqual Valley Rd, Cloverdale Rd, Rockwood Rd",
    character:
      "Home to the world-renowned San Diego Zoo Safari Park and its 1,800-acre preserve along the San Pasqual Valley. Families spend full days here, and by closing time depleted batteries and overheated engines are common on the long, sun-exposed parking lots. Our trucks handle the narrow valley road and know the park's vehicle staging areas.",
    eta: "18-28 min",
    accent: "from-amber-600 to-yellow-700",
  },
  {
    zone: "Kit Carson Park & Westside Residential",
    streets: "Kit Carson Park, Bear Valley Pkwy, Beethoven Dr, El Norte Pkwy",
    character:
      "Escondido's premier 285-acre park with the Iris Sankey Arboretum, Elfin Forest trails, softball fields, and the Queen Califia sculpture garden. Surrounding residential neighborhoods are a mix of established single-family homes and quiet cul-de-sacs. Flat tires from the gravel parking lots and after-hours lockouts keep our drivers busy.",
    eta: "15-22 min",
    accent: "from-emerald-600 to-green-700",
  },
  {
    zone: "Auto Park Way & Commercial District",
    streets: "Auto Park Way, Valley Pkwy, S Escondido Blvd",
    character:
      "Escondido's auto dealership row and one of North County's busiest commercial strips. Dozens of new and used car dealerships, body shops, and auto service centers line Auto Park Way. We regularly handle dealer trades, customer vehicle transport, and breakdown recovery for shoppers test-driving cars. This corridor generates more towing calls per mile than almost anywhere else in Escondido.",
    eta: "10-18 min",
    accent: "from-orange-600 to-red-700",
  },
  {
    zone: "Palomar Hospital & Medical District",
    streets: "E Valley Pkwy, Palomar Medical Center, Ash St, Fig St",
    character:
      "Palomar Medical Center Escondido is a Level II Trauma Center and the region's largest hospital campus. Visitors, patients, and hospital staff need reliable towing around the clock — dead batteries in the multi-story garage, lockouts during late shifts, and emergency vehicle relocations from the ER loop are routine calls for our team.",
    eta: "12-20 min",
    accent: "from-sky-600 to-cyan-700",
  },
  {
    zone: "Northeast Escondido & Lake Wohlford",
    streets: "Valley Center Rd, Lake Wohlford Rd, Citrus Ave",
    character:
      "Rural Escondido at its best — avocado groves, horse properties, and the scenic drive out to Lake Wohlford where anglers launch boats at dawn. Steep, winding grades with limited cell service make breakdowns more stressful here. Our drivers know every hairpin on Lake Wohlford Road and carry extra supplies for remote recoveries.",
    eta: "20-30 min",
    accent: "from-lime-600 to-green-700",
  },
];

/* ─── FREEWAY CORRIDORS ─── */
const FREEWAYS = [
  {
    name: "Interstate 15",
    tag: "I-15",
    description:
      "Escondido's primary north-south artery, running along the city's western edge. The Centre City Parkway, Via Rancho Parkway, and Valley Parkway interchanges are high-accident zones during rush hour. We can reach any I-15 incident between the Deer Springs Road exit and the SR-78 junction within 15 minutes.",
    color: "bg-teal-700",
  },
  {
    name: "State Route 78",
    tag: "SR-78",
    description:
      "The east-west freeway connecting Escondido to Oceanside and Vista to the west and Ramona to the east. The SR-78/I-15 interchange is one of North County's busiest cloverleafs — fender-benders, merging collisions, and overheated engines are daily occurrences. Our trucks are positioned for fast response along the entire SR-78 Escondido corridor.",
    color: "bg-amber-700",
  },
  {
    name: "Centre City Parkway",
    tag: "CCP",
    description:
      "The 5-mile arterial paralleling I-15 through central Escondido. This divided highway handles overflow commuter traffic and connects directly to Downtown. Rush-hour congestion, poorly timed lights, and distracted driving generate frequent calls along this fast-moving surface street.",
    color: "bg-stone-700",
  },
];

/* ─── SERVICES ─── */
const SERVICES_LIST = [
  {
    name: "Local Towing",
    href: "/towing",
    description:
      "Professional towing anywhere in Escondido — from Downtown Grand Avenue to the Safari Park corridor. Flatbed and wheel-lift equipped.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12l2 5h-1.5M8 7H6m2 0v5m6-5v5m-6 0h6m-6 0H4.5M14 12h3.5M4.5 12a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm13 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
      </svg>
    ),
  },
  {
    name: "Jump Start",
    href: "/jump-start",
    description:
      "Dead battery at Safari Park or Palomar Hospital garage? We arrive in 15-25 minutes with professional-grade jump packs to get you running.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: "Lockout Service",
    href: "/lockout",
    description:
      "Locked out of your car on Grand Avenue or at Kit Carson Park? Our technicians open your vehicle without damage in minutes — no drilling, no scratches.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    name: "Tire Change",
    href: "/tire-change",
    description:
      "Flat tire on SR-78 or in a gravel parking lot near Lake Wohlford? We swap your spare on-site or tow you to the nearest tire shop in Escondido.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.07-5.07a1 1 0 010-1.41l.71-.71a1 1 0 011.41 0l3.54 3.54 7.07-7.07a1 1 0 011.41 0l.71.71a1 1 0 010 1.41l-8.36 8.36a1 1 0 01-1.42.04z" />
      </svg>
    ),
  },
  {
    name: "Gas Delivery",
    href: "/gas-delivery",
    description:
      "Ran out of gas on Valley Parkway or along the San Pasqual Valley corridor? We deliver enough fuel to get you to the nearest Escondido station.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    name: "Winch-Out Recovery",
    href: "/winch-out",
    description:
      "Vehicle stuck in mud near Lake Wohlford, off-road on a ranch driveway, or slid into a ditch? Our heavy-duty winch rigs pull you out safely.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    name: "Collision Recovery",
    href: "/collision-recovery",
    description:
      "Accident on I-15 or the SR-78/I-15 interchange? We coordinate with CHP, clear debris, and transport your vehicle to the body shop or yard of your choice.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
  },
  {
    name: "Roadside Assistance",
    href: "/roadside-assistance",
    description:
      "General roadside help across Escondido — whether it's a minor mechanical issue, overheating, or you just need a tow to your trusted mechanic.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.07-5.07M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

/* ─── FAQ ─── */
const FAQ_DATA = [
  {
    question: "How fast can you get to the San Diego Zoo Safari Park?",
    answer:
      "We typically arrive at the San Diego Zoo Safari Park within 18-28 minutes. Our drivers are familiar with the San Pasqual Valley Road approach, the sprawling parking lots, and the staging areas near the main entrance. Whether your battery died after a long day with the family or your car overheated in the exposed lots, we handle Safari Park calls regularly and know exactly where to find you.",
  },
  {
    question: "What does towing cost in Escondido?",
    answer:
      "We provide upfront, transparent pricing before dispatch — no hidden fees, no surprises. Standard Escondido tows start at competitive rates based on distance and vehicle type. Remote area pickups like Lake Wohlford or steep hillside recoveries may include a small terrain surcharge. You will always know your exact price before we send a truck. We also offer military and first-responder discounts.",
  },
  {
    question: "Do you handle I-15 and SR-78 freeway breakdowns near Escondido?",
    answer:
      "Absolutely. I-15 along Escondido's western edge and SR-78 running east-west through the city are two of our busiest corridors. The SR-78/I-15 interchange is a frequent accident zone, and we respond to breakdowns, collisions, and flat tires within 15 minutes. We carry full LED safety lighting, traffic cones, and coordinate directly with CHP for safe freeway recoveries.",
  },
  {
    question: "Can you reach the rural areas northeast of Escondido?",
    answer:
      "Yes — Escondido's northeast quadrant includes avocado groves, horse properties, and the scenic road out to Lake Wohlford. These areas have winding grades, limited shoulders, and sometimes spotty cell service. Our drivers know every curve on Lake Wohlford Road and Valley Center Road. We carry extra recovery gear for unpaved driveways, gravel shoulders, and off-road situations common in rural Escondido.",
  },
  {
    question: "Do you provide service near Palomar Hospital?",
    answer:
      "Palomar Medical Center Escondido is one of our most frequent service locations. We handle dead batteries in the multi-level parking garage, lockouts during late-night shifts, and emergency vehicle relocations near the ER entrance. Our drivers know the hospital campus layout, the one-way access roads, and the security protocols required for hospital property towing.",
  },
  {
    question: "What about Downtown Escondido events and Cruisin' Grand?",
    answer:
      "We regularly service Downtown Escondido, especially during Cruisin' Grand (the Friday night classic car show from April through September), the weekly farmers market, and concerts at the California Center for the Arts. Our drivers understand the temporary road closures, angled parking zones, and pedestrian-heavy areas around Grand Avenue. We can tow vehicles without disrupting event traffic or damaging show cars.",
  },
  {
    question: "Do you serve the Auto Park Way dealership corridor?",
    answer:
      "Auto Park Way is one of our most-traveled routes. We work with multiple Escondido dealerships for dealer trades, customer vehicle transport, and lot-to-lot moves. Whether you bought a car and it won't start the next morning, need a flatbed for a specialty vehicle, or broke down while test-driving, we provide fast, professional service along the entire Auto Park Way corridor.",
  },
];

/* ─── NEARBY AREAS ─── */
const NEARBY = [
  { name: "San Marcos", slug: "san-marcos" },
  { name: "Vista", slug: "vista" },
  { name: "Rancho Bernardo", slug: "rancho-bernardo" },
  { name: "Poway", slug: "poway" },
  { name: "4S Ranch", slug: "4s-ranch" },
  { name: "Sabre Springs", slug: "sabre-springs" },
  { name: "Carmel Mountain", slug: "carmel-mountain" },
  { name: "Rancho Penasquitos", slug: "rancho-penasquitos" },
];

export default function EscondidoPage() {
  return (
    <main className="bg-slate-50">

      {/* ══════════ HERO — Dark Slate/Blue ══════════ */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden bg-[#0c1222]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/neighborhoods/shared/towing-hero.webp"
            alt="CloseBy Towing truck providing service in Escondido California"
            fill
            priority
            className="object-cover object-[center_45%]"
            sizes="100vw"
            style={{ filter: "brightness(0.55) saturate(1.1)" }}
          />
        </div>

        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1222]/80 via-[#0c1222]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222]/95 via-[#0c1222]/30 to-transparent" />

        {/* Subtle blue ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-600/10 via-transparent to-transparent" />

        {/* Bottom wave transition */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20 sm:h-28">
            <path
              d="M0,100 C200,80 400,110 600,85 C800,60 1000,100 1200,75 C1350,58 1400,80 1440,70 L1440,120 L0,120Z"
              fill="#f8fafc"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-32 sm:pb-40 pt-36 sm:pt-44 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-black/40 border border-blue-400/25 rounded-full px-5 py-2 mb-6">
              <svg className="w-4 h-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-blue-200 text-sm font-semibold tracking-wide">
                North County&apos;s Largest Inland City &bull; ZIP: {ESCONDIDO_ZIP_CODES.join(", ")}
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]">
              <span className="text-white">Towing</span>
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
                Escondido
              </span>
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Your trusted <span className="text-blue-300 font-semibold">tow truck in Escondido</span> — covering
              Safari Park, Downtown Grand Ave, Kit Carson Park, Palomar Hospital &amp; the{" "}
              <span className="text-blue-300 font-semibold">I-15 &amp; SR-78 corridors</span>.
              Population 150,000+ and growing — we know every road.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              {[
                { value: "25 min", label: "Avg Response" },
                { value: "24/7", label: "Always On" },
                { value: "5 ZIPs", label: "Full Coverage" },
              ].map((s) => (
                <div key={s.label} className="bg-black/40 rounded-xl p-3 sm:p-4 text-center border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-blue-300">{s.value}</div>
                  <div className="text-xs text-white/50 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/30"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: {CONTACT.phone}
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/20"
              >
                WhatsApp Us
              </a>
            </div>

            {/* Trust line */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/50">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                5.0 Stars
              </span>
              <span>Licensed &amp; Insured</span>
              <span>No Hidden Fees</span>
              <span>Military Discount</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TRUST BAR ══════════ */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { stat: "15-25 min", label: "Average Response Time", icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              )},
              { stat: "5.0", label: "Google Rating", icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              )},
              { stat: "24/7", label: "Always Available", icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
              )},
              { stat: "15,000+", label: "Vehicles Served", icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h17.25" /></svg>
              )},
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xl font-black text-slate-900">{item.stat}</div>
                  <div className="text-xs text-slate-500">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ WHY ESCONDIDO DRIVERS CALL CLOSEBY ══════════ */}
      <section className="py-20 sm:py-28 bg-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-700 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Local Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              Why Escondido Drivers Call{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">CloseBy</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Escondido is North County&apos;s largest inland city — over 150,000 residents spread across 37 square miles
              of valleys, hillsides, and commercial corridors. From the bustling I-15/SR-78 interchange to the quiet
              avocado groves above Lake Wohlford, breakdowns happen everywhere. Whether your car overheats climbing
              San Pasqual Valley Road, you lock your keys in the car at the California Center for the Arts, or you
              need an accident tow off Auto Park Way, CloseBy Towing responds fast because we know Escondido inside
              and out. Our drivers live here, work here, and have driven every road in every ZIP code — 92025, 92026,
              92027, 92029, and 92030.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                ),
                title: "I-15 & SR-78 Collisions",
                desc: "The SR-78/I-15 interchange is one of North County's highest-accident zones. We respond to freeway incidents within 15 minutes with CHP coordination.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18Z" />
                  </svg>
                ),
                title: "Safari Park Batteries",
                desc: "Families spend all day at the Zoo Safari Park — by closing time, dead batteries in the sun-baked lots are our most common call from San Pasqual Valley.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                ),
                title: "Downtown Lockouts",
                desc: "Grand Avenue's angled parking and crowded event nights lead to lockouts. We open vehicles damage-free in minutes, even during Cruisin' Grand.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: "Rural Road Recovery",
                desc: "Northeast Escondido's ranch driveways and Lake Wohlford's winding grades challenge most tow trucks — our winch-equipped rigs handle it daily.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-gradient-to-b from-blue-50 to-white border border-blue-100 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 text-blue-700 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ NEIGHBORHOODS ══════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-700 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Neighborhood Coverage
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              Every Corner of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Escondido</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From the cultural corridors of Downtown to the rural stretches near Lake Wohlford,
              our drivers know every neighborhood, every shortcut, and every tricky driveway in Escondido.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {NEIGHBORHOODS.map((n) => (
              <div
                key={n.zone}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${n.accent}`} />
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {n.zone}
                  </h3>
                  <span className="shrink-0 ml-3 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                    {n.eta}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-medium mb-3 tracking-wide">{n.streets}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{n.character}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FREEWAY CORRIDORS ══════════ */}
      <section className="py-20 sm:py-28 bg-[#0c1222] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/8 rounded-full blur-[100px]" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-sky-300 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Highway Response
            </span>
            <h2 className="text-4xl sm:text-5xl font-black">
              Escondido&apos;s{" "}
              <span className="bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent">
                Road Corridors
              </span>
            </h2>
            <p className="mt-6 text-lg text-blue-200/70 max-w-3xl mx-auto leading-relaxed">
              Two major freeways and a high-speed arterial converge in Escondido, making it one of
              North County&apos;s busiest transportation hubs — and one of our most active service zones.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FREEWAYS.map((fw) => (
              <div
                key={fw.tag}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-blue-400/30 transition-all"
              >
                <span className={`inline-block ${fw.color} text-white text-sm font-black px-4 py-1.5 rounded-lg mb-4`}>
                  {fw.tag}
                </span>
                <h3 className="text-lg font-bold text-white mb-3">{fw.name}</h3>
                <p className="text-blue-200/70 text-sm leading-relaxed">{fw.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-700 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              What We Do
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              Towing &amp; Roadside Services in{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Escondido</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Full-service towing and roadside assistance available 24 hours a day, 7 days a week,
              across all five Escondido ZIP codes. Click any service to learn more.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_LIST.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="group bg-gradient-to-b from-blue-50/50 to-white rounded-2xl p-6 sm:p-8 border border-blue-100/50 hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{s.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ MID-PAGE CTA ══════════ */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black">
            Stranded in Escondido Right Now?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Don&apos;t wait on hold with a national chain. Call your local Escondido tow truck and get
            a real person, real pricing, and a truck on the way in minutes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {CONTACT.phone}
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/15 hover:bg-white/25 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/30"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-700 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Common Questions
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              Escondido Towing{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">FAQ</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-blue-50/50 transition-colors">
                  <h3 className="font-semibold text-slate-900 pr-8">{faq.question}</h3>
                  <svg className="w-5 h-5 text-blue-500 transition-transform group-open:rotate-180 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* ══════════ FINAL CTA ══════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#0c1222] via-[#141e38] to-[#0e1628] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">
            Need a Tow in{" "}
            <span className="bg-gradient-to-r from-sky-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent">
              Escondido?
            </span>
          </h2>
          <p className="mt-6 text-xl text-blue-200/80 max-w-2xl mx-auto">
            North County&apos;s largest inland city deserves towing that knows the terrain.
            Call now for upfront pricing and fast dispatch to any Escondido neighborhood.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: {CONTACT.phone}
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all border border-white/20"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-blue-200/60 text-sm">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              5.0 Google Stars
            </span>
            <span>Licensed &amp; Insured</span>
            <span>No Hidden Fees</span>
            <span>Military Discount</span>
          </div>
        </div>
      </section>

      {/* ══════════ NEARBY AREAS ══════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Also Serving{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Nearby Areas</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Escondido connects to many North County communities. We serve them all with the same fast response.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {NEARBY.map((a) => (
              <Link
                key={a.name}
                href={areaHref(a.slug)}
                className="group bg-slate-50 hover:bg-blue-50 rounded-xl p-4 text-center border border-slate-100 hover:border-blue-200 transition-all"
              >
                <span className="font-semibold text-slate-700 group-hover:text-blue-700 transition-colors">
                  {a.name}
                </span>
              </Link>
            ))}
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
              { "@type": "ListItem", position: 2, name: "San Diego Towing", item: "https://www.closebytowing.com/san-diego" },
              { "@type": "ListItem", position: 3, name: "Escondido Towing", item: "https://www.closebytowing.com/escondido" },
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
            "@id": "https://www.closebytowing.com/escondido",
            name: "CloseBy Towing - Escondido",
            description:
              "Fast towing and roadside assistance in Escondido CA. Serving San Diego Zoo Safari Park, Downtown Escondido, Kit Carson Park, Palomar Hospital & I-15/SR-78 corridors 24/7.",
            url: "https://www.closebytowing.com/escondido",
            telephone: CONTACT.phone,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Escondido",
              addressRegion: "CA",
              postalCode: ESCONDIDO_ZIP_CODES[0],
              addressCountry: "US",
            },
            areaServed: {
              "@type": "City",
              name: "Escondido",
              containedInPlace: { "@type": "County", name: "San Diego County" },
            },
            geo: { "@type": "GeoCoordinates", latitude: 33.1192, longitude: -117.0864 },
            serviceType: [
              "Towing Service",
              "Roadside Assistance",
              "Flatbed Towing",
              "Jump Start Service",
              "Lockout Service",
              "Tire Change",
              "Fuel Delivery",
              "Winch-Out Recovery",
              "Collision Recovery",
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
