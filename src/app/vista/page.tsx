
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT, areaHref } from "@/lib/constants";

/* ─── VISTA ZIP CODES ─── */
const VISTA_ZIP_CODES = ["92081", "92083", "92084", "92085"];

/* ─── SEO METADATA ─── */
export const metadata: Metadata = {
  title: "Towing Vista CA | Tow Truck Vista | 24/7 | CloseBy Towing",
  description:
    "Towing in Vista CA — 92081, 92083, 92084, 92085. Serving Moonlight Amphitheatre, Vista Village, Brengle Terrace Park, Rancho Buena Vista Adobe & SR-78/SR-76. 20-30 min response, 24/7.",
  keywords:
    "towing Vista, Vista tow truck, Vista towing service, Moonlight Amphitheatre towing, Vista Village towing, SR-78 towing Vista, tow truck near me Vista, roadside assistance Vista CA, Brengle Terrace Park towing, Vista 92081 towing",
  openGraph: {
    title: "Towing Vista CA | Tow Truck 24/7 | CloseBy Towing",
    description:
      "North County inland towing experts serving Vista 24/7. Moonlight Amphitheatre, Vista Village, Brengle Terrace Park, Guajome County Park & SR-78/SR-76 corridors covered.",
    url: "https://www.closebytowing.com/vista",
    type: "website",
  },
  alternates: { canonical: "https://www.closebytowing.com/vista" },
};

/* ─── VISTA LANDMARKS ─── */
const LOCAL_LANDMARKS = [
  {
    name: "Moonlight Amphitheatre",
    description:
      "Outdoor theater in Brengle Terrace Park hosting Broadway-caliber musicals under the stars. Event nights generate heavy parking demand on Vale Terrace Drive and throughout the surrounding residential streets.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072M12 9.5v5M18.364 5.636a9 9 0 010 12.728M6 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h2l4-4v14l-4-4z" />
      </svg>
    ),
  },
  {
    name: "Vista Village",
    description:
      "The walkable downtown core along Main Street and East Broadway. Antique shops, craft breweries, eateries, and the AVO Playhouse draw visitors year-round. Parallel parking spots and tight side streets make lockouts and fender-benders common.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    name: "Brengle Terrace Park",
    description:
      "Vista&apos;s crown-jewel recreation complex with sports fields, playgrounds, a skate park, and the Moonlight Amphitheatre. The park&apos;s hilltop location and winding access roads can challenge vehicles with worn brakes or overheating issues.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Rancho Buena Vista Adobe",
    description:
      "A historic landmark and museum dating back to the 1840s, nestled on Vista&apos;s eastern edge near Guajome County Park. Visitors occasionally experience vehicle trouble on the rural roads leading to this attraction.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
      </svg>
    ),
  },
  {
    name: "Guajome County Park",
    description:
      "Over 550 acres of oak woodland, wetlands, and trails on Vista&apos;s southeastern boundary. Campers, hikers, and equestrians use narrow access roads where flat tires, dead batteries, and vehicles stuck on soft shoulders are routine calls.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    name: "SR-78 & SR-76 Corridors",
    description:
      "Vista sits at the junction of two major state routes. SR-78 runs east-west connecting Oceanside to Escondido, while SR-76 cuts through Vista&apos;s northern edge toward Fallbrook. Both carry heavy commuter traffic and generate frequent breakdown calls.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
];

/* ─── SERVICES ─── */
const SERVICES_LIST = [
  {
    name: "Local Towing",
    href: "/towing",
    description: "Standard and flatbed towing for all vehicle types throughout Vista and North County.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12l2 5h-1.5M8 7H6m2 0v5m6-5v5m-6 0h6m-6 0H4.5M14 12h3.5M4.5 12a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm13 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
      </svg>
    ),
  },
  {
    name: "Jump Start",
    href: "/jump-start",
    description: "Fast battery jump starts for dead batteries at parking lots, parks, and residential driveways.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    name: "Lockout Service",
    href: "/lockout",
    description: "Locked out on Main Street or at Brengle Terrace? Our techs open doors without damage.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    name: "Tire Change",
    href: "/tire-change",
    description: "On-site flat tire swap using your spare. Common on SR-78 shoulders and Guajome Park trails.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.648-3.384A1.2 1.2 0 016.89 9.6h10.22a1.2 1.2 0 011.117 2.186l-5.648 3.384a1.2 1.2 0 01-1.16 0z" />
        <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    name: "Fuel Delivery",
    href: "/gas-delivery",
    description: "Ran out of gas on SR-76 or Business Park Drive? We deliver fuel to your location.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L12 21l-1.006-.503a2.25 2.25 0 01-1.244-2.013v-2.927a2.25 2.25 0 00-.659-1.591L3.659 8.409A2.25 2.25 0 013 6.818V5.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
      </svg>
    ),
  },
  {
    name: "Collision Recovery",
    href: "/collision-recovery",
    description: "Accident towing and debris cleanup on SR-78, SR-76, and Vista surface streets.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
  },
  {
    name: "Winch-Out / Recovery",
    href: "/winch-out",
    description: "Vehicle stuck in mud at Guajome Park or off a Vista hillside? Our winch trucks pull you free.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

/* ─── FAQ ─── */
const FAQ_DATA = [
  {
    question: "How quickly can you reach Vista for a tow?",
    answer:
      "Our average response time to Vista is 20 to 30 minutes, depending on your exact location and traffic conditions. For calls near the SR-78 and SR-76 interchange or along Vista Village Drive, response is often faster because our trucks frequently patrol those corridors. For more remote locations like Guajome County Park or the eastern hills, it may take slightly longer, but we always provide an honest ETA before dispatching.",
  },
  {
    question: "Do you provide towing during Moonlight Amphitheatre events?",
    answer:
      "Absolutely. Moonlight Amphitheatre events at Brengle Terrace Park draw large crowds, and the surrounding streets see heavy parking. We handle dead batteries, lockouts, flat tires, and full tows during and after shows. Our drivers are familiar with the park layout, Vale Terrace Drive, and the residential overflow parking areas. We can reach the amphitheatre lot within 15 to 20 minutes on event nights.",
  },
  {
    question: "Can you tow my vehicle from Vista Village or downtown Vista?",
    answer:
      "Yes, we service Vista Village and the downtown core along Main Street and East Broadway regularly. The area has parallel parking, angled spots, and tight side streets that can make breakdowns stressful. Our drivers are experienced with careful extraction from tight spaces. Whether you need a jump start outside one of the local breweries or a full tow from a side street, we handle it with care.",
  },
  {
    question: "What about breakdowns on SR-78 or SR-76 near Vista?",
    answer:
      "SR-78 and SR-76 are two of Vista&apos;s most critical roadways, and both generate frequent towing calls. SR-78 connects Oceanside and Escondido through the heart of Vista with heavy commuter traffic. SR-76 runs along Vista&apos;s northern boundary toward Fallbrook. We respond to freeway breakdowns, accidents, flat tires, and overheated engines on both corridors. Our trucks carry full LED safety lighting and we coordinate with CHP when the situation requires it.",
  },
  {
    question: "Do you service the Guajome County Park and Rancho Buena Vista Adobe area?",
    answer:
      "Yes. Guajome County Park is a 550-acre preserve on Vista&apos;s southeastern edge with narrow access roads, camping areas, and equestrian trails. Vehicles get flat tires on gravel shoulders, batteries die after long hikes, and occasionally a car gets stuck on a soft shoulder. The nearby Rancho Buena Vista Adobe attracts history buffs and school groups. We reach both locations within 25 to 30 minutes and carry recovery equipment suitable for the terrain.",
  },
  {
    question: "How much does towing cost in Vista?",
    answer:
      "We provide transparent, upfront pricing before dispatch so there are no surprises. A standard tow within Vista typically starts at competitive rates based on distance and vehicle type. Factors like after-hours calls, larger vehicles, or difficult terrain at locations like Guajome Park may affect pricing. We always quote your exact cost over the phone before sending a truck. No hidden fees, no bait-and-switch. Military and first-responder discounts are available.",
  },
  {
    question: "Are your towing services available 24/7 in Vista?",
    answer:
      "Yes, CloseBy Towing operates around the clock in Vista and throughout San Diego County. Whether you need help at 2 AM on Business Park Drive or during Saturday afternoon traffic on SR-78, our dispatch team is ready. Vista has an active community with events, nightlife in Vista Village, and commuters on the highways at all hours. We staff our trucks accordingly to maintain fast response times day and night, weekdays and weekends, including holidays.",
  },
];

/* ─── NEARBY AREAS ─── */
const NEARBY = [
  { name: "San Marcos", slug: "san-marcos" },
  { name: "Oceanside", slug: "oceanside" },
  { name: "Escondido", slug: "escondido" },
  { name: "Carlsbad", slug: "carlsbad" },
  { name: "Encinitas", slug: "encinitas" },
  { name: "Rancho Santa Fe", slug: "rancho-santa-fe" },
  { name: "Poway", slug: "poway" },
  { name: "Rancho Bernardo", slug: "rancho-bernardo" },
];

/* ─── VISTA NEIGHBORHOOD ZONES ─── */
const NEIGHBORHOODS = [
  {
    zone: "Vista Village & Downtown",
    streets: "Main St, E Broadway, Indiana Ave, Citrus Ave",
    character:
      "The walkable heart of Vista where antique shops, craft breweries, and the AVO Playhouse line Main Street. Parallel parking, tight side streets, and event crowds create the most common lockout and minor collision calls in the city. Our response time to downtown is among our fastest in Vista.",
    eta: "15-22 min",
    accent: "from-amber-600 to-orange-700",
  },
  {
    zone: "Brengle Terrace & Moonlight Amphitheatre",
    streets: "Vale Terrace Dr, Sunset Dr, Foothill Dr",
    character:
      "Vista&apos;s premier recreation and entertainment complex. The Moonlight Amphitheatre draws thousands on performance nights, filling the hilltop parking lot and overflowing onto residential streets below. Dead batteries after evening shows and overheated engines on the climb up are our most common calls here.",
    eta: "18-25 min",
    accent: "from-violet-600 to-purple-700",
  },
  {
    zone: "Shadowridge & Business Park Drive",
    streets: "Business Park Dr, Shadowridge Dr, Sycamore Ave",
    character:
      "Vista&apos;s master-planned Shadowridge community and adjacent business parks house corporate offices, tech companies, and thousands of daily commuters. Morning and evening rush-hour breakdowns along Business Park Drive and the SR-78 on-ramps keep our trucks busy every weekday.",
    eta: "18-25 min",
    accent: "from-sky-600 to-cyan-700",
  },
  {
    zone: "SR-78 Corridor",
    streets: "SR-78, Vista Way, Hacienda Dr, Emerald Dr",
    character:
      "The SR-78 freeway is Vista&apos;s primary east-west artery, carrying tens of thousands of vehicles daily between Oceanside and Escondido. Breakdowns, fender-benders, and overheated engines in stop-and-go traffic are daily occurrences. The Vista Way and Hacienda Drive interchanges are our highest-volume response zones.",
    eta: "15-20 min",
    accent: "from-red-600 to-rose-700",
  },
  {
    zone: "Guajome & East Vista",
    streets: "Guajome Lake Rd, N Santa Fe Ave, SR-76",
    character:
      "Rural eastern Vista where 550-acre Guajome County Park and the historic Rancho Buena Vista Adobe draw hikers, campers, and history buffs. Narrow access roads, gravel shoulders, and limited cell coverage make breakdowns more stressful here. Our trucks carry recovery gear suitable for the terrain.",
    eta: "22-30 min",
    accent: "from-emerald-600 to-green-700",
  },
  {
    zone: "North Vista & SR-76",
    streets: "SR-76, Bobier Dr, N Melrose Dr, Mar Vista Dr",
    character:
      "The northern stretch of Vista bordering Oceanside and connecting to Fallbrook via SR-76. A mix of older residential neighborhoods, light industrial zones, and the Rancho Buena Vista High School campus. SR-76 traffic and school-zone congestion generate steady towing demand year-round.",
    eta: "20-28 min",
    accent: "from-teal-600 to-cyan-700",
  },
];

export default function VistaPage() {
  return (
    <main className="bg-slate-950">

      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/neighborhoods/shared/suburban-street.webp"
            alt="CloseBy Towing truck serving Vista CA in North County San Diego"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            style={{ filter: "brightness(0.35) saturate(0.9)" }}
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

        {/* Ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-indigo-500/5" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-24 sm:pb-32 pt-36 sm:pt-44 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-black/40 border border-amber-400/25 rounded-full px-5 py-2 mb-6">
              <svg className="w-4 h-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-amber-200 text-sm font-semibold tracking-wide">Serving Vista 24/7 &bull; ZIP: {VISTA_ZIP_CODES.join(", ")}</span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]">
              <span className="text-white">Towing</span>
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
                Vista
              </span>
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Your trusted <span className="text-amber-300 font-semibold">tow truck in Vista</span> &mdash; covering
              Moonlight Amphitheatre, Vista Village, Brengle Terrace Park, Guajome County Park &amp; the{" "}
              <span className="text-amber-300 font-semibold">SR-78 &amp; SR-76 corridors</span>.
              Approximately 100,000 residents count on fast, reliable service.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              {[
                { value: "20-30", label: "Min Response" },
                { value: "24/7", label: "Always On" },
                { value: "SR-78", label: "& SR-76" },
              ].map((s) => (
                <div key={s.label} className="bg-black/40 rounded-xl p-3 sm:p-4 text-center border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-amber-300">{s.value}</div>
                  <div className="text-xs text-white/50 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-amber-500/30"
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
      <section className="bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "15,000+", label: "Vehicles Served" },
              { value: "5.0", label: "Google Rating" },
              { value: "24/7", label: "Availability" },
              { value: "20-30 min", label: "Avg Vista Response" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-black text-amber-400">{stat.value}</div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ ABOUT VISTA ══════════ */}
      <section className="py-20 sm:py-28 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
                Local Expertise
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white">
                Why Vista Drivers Choose{" "}
                <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">CloseBy</span>
              </h2>

              <div className="mt-6 space-y-5 text-slate-300 text-lg leading-relaxed">
                <p>
                  Vista is a city of approximately 100,000 residents in North County inland San Diego, known for its vibrant arts
                  scene, historic landmarks, and strong sense of community. Situated at the crossroads of SR-78 and SR-76, Vista
                  connects Oceanside to the west, Escondido to the east, and Carlsbad and San Marcos to the south. This strategic
                  position means heavy commuter traffic flows through Vista daily, and with that traffic comes inevitable breakdowns,
                  flat tires, dead batteries, and accidents.
                </p>
                <p>
                  CloseBy Towing understands Vista&apos;s roads like a local. We know that Vista Village&apos;s charming downtown fills up
                  on weekends, that Moonlight Amphitheatre performances pack Brengle Terrace Park on summer evenings, and that the
                  rural roads around Guajome County Park demand recovery equipment most tow companies do not carry. We know the
                  SR-78 backups between Emerald Drive and Hacienda Drive, the school-zone congestion near Rancho Buena Vista High,
                  and the business park commuters along Shadowridge.
                </p>
                <p>
                  Whether you are stranded on the shoulder of SR-78 during rush hour, locked out of your car after a performance
                  at the Moonlight Amphitheatre, or dealing with a flat tire on the way to Guajome County Park, CloseBy Towing
                  delivers fast, honest, professional service. We quote upfront prices over the phone, arrive in 20 to 30 minutes,
                  and treat every vehicle like our own.
                </p>
              </div>
            </div>

            {/* Image + coverage card */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/neighborhoods/shared/flatbed-truck-1.webp"
                    alt="CloseBy Towing flatbed truck ready for service in Vista CA"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-amber-400/30">
                    <div className="text-amber-300 text-xs font-medium">Vista ZIP Codes</div>
                    <div className="text-white font-bold">{VISTA_ZIP_CODES.join(" | ")}</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Vista Coverage Area
                </h3>
                <div className="space-y-3">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-200 text-sm mb-2">Major Roads:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["SR-78", "SR-76", "Vista Village Dr", "Hacienda Dr", "Business Park Dr", "Shadowridge Dr", "Mar Vista Dr", "S Santa Fe Ave"].map((road) => (
                        <span key={road} className="bg-slate-700 px-3 py-1 rounded-full text-sm text-slate-300 border border-slate-600">
                          {road}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-200 text-sm mb-2">Key Destinations:</h4>
                    <div className="grid grid-cols-2 gap-1 text-sm text-slate-400">
                      <span>Moonlight Amphitheatre</span>
                      <span>Vista Village</span>
                      <span>Brengle Terrace Park</span>
                      <span>Guajome County Park</span>
                      <span>Rancho Buena Vista Adobe</span>
                      <span>AVO Playhouse</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ LANDMARKS ══════════ */}
      <section className="py-20 sm:py-28 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Local Knowledge
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              We Know{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Vista</span>
            </h2>
            <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              From the Moonlight Amphitheatre stage lights to the oak-shaded trails at Guajome County Park,
              our drivers know every landmark, back road, and shortcut in Vista.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCAL_LANDMARKS.map((landmark) => (
              <div
                key={landmark.name}
                className="group bg-slate-800/50 hover:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-700/50 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/20">
                  {landmark.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                  {landmark.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{landmark.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ NEIGHBORHOODS ══════════ */}
      <section className="py-20 sm:py-28 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Neighborhood Coverage
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Every Corner of{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Vista</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {NEIGHBORHOODS.map((n) => (
              <div
                key={n.zone}
                className="group relative bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${n.accent}`} />
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {n.zone}
                  </h3>
                  <span className="shrink-0 ml-3 bg-amber-500/15 text-amber-400 text-xs font-bold px-3 py-1 rounded-full">
                    {n.eta}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium mb-3 tracking-wide">{n.streets}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{n.character}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section className="py-20 sm:py-28 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              What We Do
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Towing &amp; Roadside Services in{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Vista</span>
            </h2>
            <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Full range of towing and roadside assistance available around the clock
              throughout Vista and surrounding North County communities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES_LIST.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group bg-slate-800/50 hover:bg-slate-800 rounded-2xl p-6 border border-slate-700/50 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/20">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                  {service.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                <span className="inline-block mt-3 text-amber-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ MID-PAGE CTA ══════════ */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950">
            Stranded in Vista? We&apos;re On the Way.
          </h2>
          <p className="mt-4 text-lg text-slate-800 max-w-2xl mx-auto">
            One call gets a professional tow truck dispatched to your location in Vista.
            Transparent pricing, fast response, no surprises.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-slate-950 hover:bg-slate-800 text-amber-400 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: {CONTACT.phone}
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/20 hover:bg-white/30 text-slate-950 px-8 py-4 rounded-xl font-bold text-lg transition-all border border-slate-950/20"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="py-20 sm:py-28 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Common Questions
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Vista Towing{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">FAQ</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <details
                key={i}
                className="group bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-amber-500/30 transition-all"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-800/50 transition-colors">
                  <h3 className="font-semibold text-white pr-8">{faq.question}</h3>
                  <svg className="w-5 h-5 text-amber-400 transition-transform group-open:rotate-180 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ NEARBY AREAS ══════════ */}
      <section className="py-16 sm:py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Also Serving{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Nearby Areas</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Vista connects to many North County communities. We serve them all with the same fast, professional service.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {NEARBY.map((a) => (
              <Link
                key={a.name}
                href={areaHref(a.slug)}
                className="group bg-slate-800/50 hover:bg-slate-800 rounded-xl p-4 text-center border border-slate-700/50 hover:border-amber-500/30 transition-all"
              >
                <span className="font-semibold text-slate-300 group-hover:text-amber-400 transition-colors">
                  {a.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FINAL CTA ══════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">
            Need a Tow in{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
              Vista?
            </span>
          </h2>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
            North County inland&apos;s trusted towing service. Call now for upfront pricing and fast dispatch to anywhere in Vista.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
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

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-slate-400 text-sm">
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
              { "@type": "ListItem", position: 3, name: "Vista Towing", item: "https://www.closebytowing.com/vista" },
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
            "@id": "https://www.closebytowing.com/vista",
            name: "CloseBy Towing - Vista",
            description:
              "Professional towing and roadside assistance in Vista CA. Serving Moonlight Amphitheatre, Vista Village, Brengle Terrace Park, Guajome County Park, Rancho Buena Vista Adobe & SR-78/SR-76 corridors 24/7. Population ~100,000.",
            url: "https://www.closebytowing.com/vista",
            telephone: CONTACT.phone,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Vista",
              addressRegion: "CA",
              postalCode: "92081",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 33.2000,
              longitude: -117.2426,
            },
            areaServed: {
              "@type": "City",
              name: "Vista",
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "San Diego County",
              },
            },
            serviceType: [
              "Towing Service",
              "Roadside Assistance",
              "Flatbed Towing",
              "Emergency Towing",
              "Jump Start Service",
              "Lockout Service",
              "Tire Change",
              "Fuel Delivery",
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
