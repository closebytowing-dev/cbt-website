
import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, areaHref } from "@/lib/constants";

// San Marcos ZIP codes
const SAN_MARCOS_ZIP_CODES = ["92069", "92078", "92096"];

/* ─── SEO METADATA ─── */
export const metadata: Metadata = {
  title: "Towing San Marcos | Tow Truck San Marcos CA | 24/7 | CloseBy Towing",
  description:
    "Towing San Marcos CA — fast tow truck service covering CSUSM, Restaurant Row, San Elijo Hills, Discovery Hills & SR-78 corridor. 92069, 92078, 92096. 25-min response, 24/7.",
  keywords:
    "towing San Marcos, tow truck San Marcos, San Marcos towing service, CSUSM towing, Restaurant Row towing, SR-78 towing, San Marcos 92069 towing, San Marcos 92078 towing, tow truck near me San Marcos",
  openGraph: {
    title: "Towing San Marcos CA | Tow Truck 24/7 | CloseBy Towing",
    description:
      "North County's growing city trusts CloseBy. CSUSM campus, Restaurant Row, San Elijo Hills, Discovery Hills & SR-78 — we cover all of San Marcos.",
    url: "https://www.closebytowing.com/san-marcos",
    type: "website",
  },
  alternates: { canonical: "https://www.closebytowing.com/san-marcos" },
};

/* ─── SAN MARCOS NEIGHBORHOOD ZONES ─── */
const NEIGHBORHOODS = [
  {
    zone: "Cal State San Marcos & University District",
    streets: "Twin Oaks Valley Rd, Barham Dr, Campus Way, Craven Rd",
    character:
      "Home to Cal State University San Marcos, this academic hub sees heavy student and faculty traffic year-round. Dead batteries in campus parking structures, lockouts after late-night study sessions, and overheated engines on the steep Twin Oaks Valley Road climb are our most common calls. We navigate the university's sprawling campus and surrounding student housing complexes with ease.",
    eta: "15-22 min",
    accent: "from-blue-600 to-indigo-700",
  },
  {
    zone: "Restaurant Row & City Center",
    streets: "San Marcos Blvd, Grand Ave, Via Vera Cruz, Knoll Rd",
    character:
      "San Marcos's vibrant Restaurant Row along Grand Avenue is the city's social heart, packed with craft breweries, taquerias, and upscale dining. Weekend evenings bring full parking lots and tight parallel-parking situations that generate lockout and fender-bender calls. Our drivers know every back lot and side street in this bustling corridor.",
    eta: "12-18 min",
    accent: "from-amber-600 to-orange-700",
  },
  {
    zone: "San Elijo Hills",
    streets: "San Elijo Rd, Elfin Forest Rd, Double Peak Dr, Questhaven Rd",
    character:
      "A master-planned hillside community with panoramic views, winding roads, and the popular Double Peak Park trailhead. Vehicles overheat on steep residential grades, and hikers return to dead batteries after long trail days on Double Peak. Our flatbeds handle the 10-15% grades and narrow cul-de-sacs that define this elevated neighborhood.",
    eta: "18-25 min",
    accent: "from-emerald-600 to-green-700",
  },
  {
    zone: "Discovery Hills & North San Marcos",
    streets: "Discovery St, Borden Rd, Las Posas Rd, Woodland Pkwy",
    character:
      "The rapidly developing northern section of San Marcos features newer residential communities, parks, and growing commercial zones along Woodland Parkway. Construction traffic, delivery trucks, and new-homeowner move-in mishaps keep us busy. Fast access from SR-78 means short response times to this expanding area.",
    eta: "15-20 min",
    accent: "from-sky-600 to-cyan-700",
  },
  {
    zone: "Bradley Park & South San Marcos",
    streets: "Rancho Santa Fe Rd, Bent Ave, Pacific St, Linda Vista Dr",
    character:
      "Bradley Park serves as a recreation hub for families and sports leagues, while the surrounding residential streets wind through established neighborhoods. Weekend soccer tournaments and baseball games fill parking lots to capacity. Flat tires from gravel shoulders and dead batteries from long game days are common calls here.",
    eta: "15-22 min",
    accent: "from-rose-600 to-pink-700",
  },
  {
    zone: "SR-78 Corridor & Commercial District",
    streets: "SR-78 on/off ramps, Nordahl Rd, Las Posas Rd, San Marcos Blvd",
    character:
      "State Route 78 is San Marcos's freeway lifeline, connecting the city to Escondido, Vista, Carlsbad, and the coast. Rush-hour breakdowns at the Nordahl Road and Twin Oaks Valley Road interchanges are daily events. Our trucks are positioned for fast freeway response with full LED safety lighting and CHP coordination capability.",
    eta: "10-15 min",
    accent: "from-teal-600 to-emerald-700",
  },
];

/* ─── SERVICES ─── */
const SERVICES = [
  {
    name: "General Towing",
    slug: "towing",
    description:
      "Professional local and long-distance towing for sedans, SUVs, trucks, and vans across San Marcos.",
  },
  {
    name: "Emergency Towing",
    slug: "emergency-towing",
    description:
      "Rapid emergency response for accidents, breakdowns, and roadside emergencies on SR-78 and local roads.",
  },
  {
    name: "Flatbed Towing",
    slug: "flatbed-towing",
    description:
      "Hydraulic flatbed transport for luxury vehicles, lowered cars, AWD vehicles, and motorcycles.",
  },
  {
    name: "Accident Towing",
    slug: "accident-towing",
    description:
      "Collision recovery and post-accident towing with CHP coordination at SR-78 and intersection incidents.",
  },
  {
    name: "Roadside Assistance",
    slug: "roadside-assistance",
    description:
      "Jump starts, lockouts, tire changes, and fuel delivery throughout San Marcos neighborhoods.",
  },
];

/* ─── FAQ ─── */
const FAQ_DATA = [
  {
    question: "How quickly can you reach Cal State San Marcos (CSUSM)?",
    answer:
      "We typically arrive at the CSUSM campus within 15-22 minutes. Our drivers are familiar with the university's parking structures, campus loop roads, and the surrounding student housing complexes along Twin Oaks Valley Road and Barham Drive. Whether you need a jump start in Lot F, a lockout at the University Village, or a tow from the Mangrum parking structure, we know the campus layout and can reach you quickly.",
  },
  {
    question: "Do you service Restaurant Row and Grand Avenue?",
    answer:
      "Absolutely. Restaurant Row along Grand Avenue is one of our most-serviced areas in San Marcos. We regularly respond to lockouts in brewery parking lots, fender-benders in tight restaurant parking areas, and dead batteries after long dinner outings. Our drivers know every back lot, side street, and parallel-parking zone along this popular dining corridor and can navigate tight spaces without blocking traffic.",
  },
  {
    question: "Can you handle the steep hills in San Elijo Hills?",
    answer:
      "Yes, San Elijo Hills has some of the steepest residential grades in North County, with 10-15% inclines on roads like Double Peak Drive and Questhaven Road. Our winch-equipped flatbeds are specifically designed for hillside operations. We also service the Double Peak Park trailhead, where hikers frequently return to dead batteries or flat tires after a long climb to the summit.",
  },
  {
    question: "How much does towing cost in San Marcos?",
    answer:
      "We provide upfront pricing before dispatch with no hidden fees or surprises. Standard San Marcos tows start at competitive rates based on distance and vehicle type. Campus recovery, hillside service, and after-hours freeway response are all included in our transparent pricing. You will know the exact cost before we send a truck. We also offer student and military discounts for CSUSM students and nearby Camp Pendleton personnel.",
  },
  {
    question: "Do you cover SR-78 breakdowns through San Marcos?",
    answer:
      "SR-78 through San Marcos is one of our most-covered corridors. We respond to freeway breakdowns, accidents, flat tires, and overheated engines within 10-15 minutes along the San Marcos stretch. We cover every interchange including Nordahl Road, Twin Oaks Valley Road, San Marcos Boulevard, and Las Posas Road. Our trucks carry full LED safety lighting and we coordinate with CHP for safe freeway recoveries.",
  },
  {
    question: "What areas near San Marcos do you also serve?",
    answer:
      "We serve all communities surrounding San Marcos, including Escondido to the east, Vista to the west, Carlsbad to the southwest, and Rancho Santa Fe to the south. Our coverage extends along the entire SR-78 corridor from Oceanside to Escondido. Whether you break down at the San Marcos border or deep in a neighboring city, CloseBy Towing can reach you quickly with the same fast, professional service.",
  },
];

/* ─── NEARBY AREAS ─── */
const NEARBY = [
  { name: "Escondido", slug: "escondido" },
  { name: "Vista", slug: "vista" },
  { name: "Carlsbad", slug: "carlsbad" },
  { name: "Rancho Santa Fe", slug: "rancho-santa-fe" },
  { name: "Encinitas", slug: "encinitas" },
  { name: "Poway", slug: "poway" },
  { name: "Solana Beach", slug: "solana-beach" },
  { name: "4S Ranch", slug: "4s-ranch" },
];

export default function SanMarcosPage() {
  return (
    <main className="bg-stone-950">

      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
        {/* Abstract background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/8 rounded-full blur-[120px]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        {/* Bottom wave transition */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-16 sm:h-24">
            <path d="M0,100 C200,60 400,90 600,70 C800,50 1000,80 1200,60 C1350,45 1400,55 1440,50 L1440,120 L0,120Z" fill="#0c0a09" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-32 sm:pb-40 pt-36 sm:pt-44 w-full">
          <div className="max-w-2xl">
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-indigo-400/20 rounded-full px-5 py-2 mb-6 backdrop-blur-sm">
              <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-indigo-200 text-sm font-semibold tracking-wide">North County Inland &bull; ZIP: {SAN_MARCOS_ZIP_CODES.join(", ")}</span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
              <span className="text-white">Towing</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-300 via-blue-200 to-amber-300 bg-clip-text text-transparent">
                San Marcos
              </span>
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl">
              Your trusted <span className="text-indigo-300 font-semibold">tow truck in San Marcos</span> — covering
              CSUSM campus, Restaurant Row, San Elijo Hills, Discovery Hills &amp; the{" "}
              <span className="text-indigo-300 font-semibold">SR-78 corridor</span>. Population 97,000 and growing.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              {[
                { value: "25 min", label: "Avg Response" },
                { value: "24/7", label: "Always On" },
                { value: "SR-78", label: "Corridor" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 rounded-xl p-3 sm:p-4 text-center border border-white/10 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-black text-indigo-300">{s.value}</div>
                  <div className="text-xs text-white/40 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-400 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-indigo-500/30"
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
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/40">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                5.0 Stars
              </span>
              <span>Licensed &amp; Insured</span>
              <span>No Hidden Fees</span>
              <span>Student Discount</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TRUST BAR ══════════ */}
      <section className="bg-stone-950 py-8 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "97K+", label: "Residents Served", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
              { value: "3 ZIPs", label: "Full Coverage", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
              { value: "24/7", label: "Day & Night", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { value: "25 min", label: "Avg Response", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                  </svg>
                </div>
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="text-xs text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ ABOUT SAN MARCOS — WHY DRIVERS CALL US ══════════ */}
      <section className="py-20 sm:py-28 bg-stone-950 relative">
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-[100px]" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-indigo-400 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Local Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              San Marcos Trusts{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">CloseBy</span>
            </h2>
            <p className="mt-6 text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
              San Marcos is one of North County&apos;s fastest-growing cities, with a population of approximately 97,000 residents spread
              across 24 square miles of inland valleys and rolling hills. Home to Cal State San Marcos, a thriving Restaurant Row, and
              rapidly expanding residential communities like San Elijo Hills and Discovery Hills, the city generates unique towing
              demands that require genuine local knowledge.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left column - detailed text */}
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">A University City with Country Roots</h3>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  San Marcos sits in the heart of North County inland, bisected by State Route 78 and bordered by Escondido to the
                  east, Vista to the west, and Carlsbad to the southwest. The city&apos;s transformation from agricultural land to a modern
                  university city has been remarkable, but the rolling terrain and hillside communities still present challenges for
                  drivers and tow operators alike.
                </p>
                <p>
                  The presence of Cal State San Marcos brings over 17,000 students who commute daily along Twin Oaks Valley Road and
                  SR-78. Grand Avenue&apos;s Restaurant Row draws diners from across the county. San Elijo Hills&apos; steep grades test vehicles
                  during summer heat. And San Marcos Creek&apos;s flood-prone zones create seasonal road hazards. CloseBy Towing knows
                  every one of these pressure points and positions our trucks accordingly.
                </p>
                <p>
                  Whether you&apos;re a CSUSM student locked out of your car in a campus parking structure, a family stranded at Bradley
                  Park after a weekend game, or a commuter with a blown tire on SR-78 during rush hour, CloseBy Towing delivers fast,
                  professional service with upfront pricing and no hidden fees. We treat every vehicle with the care it deserves,
                  from economy sedans to luxury SUVs.
                </p>
              </div>
            </div>

            {/* Right column - key info cards */}
            <div className="space-y-4">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h4 className="font-bold text-white text-sm mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Major Roads We Service
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["SR-78", "Twin Oaks Valley Rd", "San Marcos Blvd", "Nordahl Rd", "Grand Ave", "Rancho Santa Fe Rd", "Las Posas Rd", "San Elijo Rd"].map((road) => (
                    <span key={road} className="bg-white/10 px-3 py-1 rounded-full text-sm text-white/70 border border-white/10">
                      {road}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h4 className="font-bold text-white text-sm mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Key Landmarks
                </h4>
                <div className="grid grid-cols-2 gap-1 text-sm text-white/60">
                  <span>CSUSM Campus</span>
                  <span>Restaurant Row</span>
                  <span>San Marcos Creek</span>
                  <span>Discovery Hills</span>
                  <span>Bradley Park</span>
                  <span>San Elijo Hills</span>
                  <span>Double Peak Park</span>
                  <span>San Marcos Civic Center</span>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h4 className="font-bold text-white text-sm mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Common San Marcos Calls
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "CSUSM campus lockouts",
                    "SR-78 freeway breakdowns",
                    "Restaurant Row fender-benders",
                    "San Elijo Hills recovery",
                    "Dead batteries at trailheads",
                    "Student vehicle assistance",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/60">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ NEIGHBORHOODS ══════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-indigo-400 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Neighborhood Coverage
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Every Corner of{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">San Marcos</span>
            </h2>
            <p className="mt-6 text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
              From the CSUSM university district to the hilltop vistas of San Elijo Hills, our drivers know San Marcos inside and out.
              We cover all three ZIP codes -- 92069, 92078, and 92096 -- with fast, reliable towing and roadside assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {NEIGHBORHOODS.map((n) => (
              <div
                key={n.zone}
                className="group relative bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-indigo-400/30 transition-all duration-300"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${n.accent}`} />
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {n.zone}
                  </h3>
                  <span className="shrink-0 ml-3 bg-indigo-500/20 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full">
                    {n.eta}
                  </span>
                </div>
                <p className="text-xs text-white/30 font-medium mb-3 tracking-wide">{n.streets}</p>
                <p className="text-white/60 text-sm leading-relaxed">{n.character}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section className="py-20 sm:py-28 bg-stone-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-indigo-400 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              What We Do
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Towing Services in{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">San Marcos</span>
            </h2>
            <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">
              Full range of towing and roadside services available 24/7 throughout San Marcos and the surrounding North County area.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/san-diego/${service.slug}`}
                className="group bg-white/5 hover:bg-white/10 rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-indigo-400/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/20">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h17.25M3.375 14.25V6.75A1.125 1.125 0 014.5 5.625h7.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">{service.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ MID-PAGE CTA ══════════ */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Stranded in San Marcos?
          </h2>
          <p className="mt-4 text-lg text-indigo-200/70 max-w-2xl mx-auto">
            Whether you&apos;re on SR-78, at CSUSM, or in San Elijo Hills -- help is one call away. Upfront pricing, fast dispatch, no surprises.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
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
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/20"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="py-20 sm:py-28 bg-stone-950">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-indigo-400 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Common Questions
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              San Marcos Towing{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">FAQ</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <details
                key={i}
                className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-indigo-400/20 transition-all"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 transition-colors">
                  <h3 className="font-semibold text-white pr-8">{faq.question}</h3>
                  <svg className="w-5 h-5 text-indigo-400 transition-transform group-open:rotate-180 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ NEARBY AREAS ══════════ */}
      <section className="py-16 sm:py-20 bg-stone-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Also Serving{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Nearby Areas</span>
            </h2>
            <p className="mt-4 text-white/50 max-w-2xl mx-auto">
              San Marcos connects to many North County communities along SR-78 and surrounding roads. We serve them all.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {NEARBY.map((a) => (
              <Link
                key={a.name}
                href={areaHref(a.slug)}
                className="group bg-white/5 hover:bg-white/10 rounded-xl p-4 text-center border border-white/10 hover:border-indigo-400/30 transition-all"
              >
                <span className="font-semibold text-white/70 group-hover:text-indigo-300 transition-colors">
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
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">
            Need a Tow in{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-blue-200 to-amber-300 bg-clip-text text-transparent">
              San Marcos?
            </span>
          </h2>
          <p className="mt-6 text-xl text-white/60 max-w-2xl mx-auto">
            North County&apos;s growing university city deserves towing that knows every road, every campus lot, and every
            hillside neighborhood. Call now for upfront pricing and fast dispatch to anywhere in San Marcos.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-400 hover:to-blue-400 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg shadow-indigo-500/25"
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

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/40 text-sm">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              5.0 Google Stars
            </span>
            <span>Licensed &amp; Insured</span>
            <span>No Hidden Fees</span>
            <span>Student &amp; Military Discount</span>
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
              { "@type": "ListItem", position: 3, name: "San Marcos Towing", item: "https://www.closebytowing.com/san-marcos" },
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
            "@id": "https://www.closebytowing.com/san-marcos",
            name: "CloseBy Towing - San Marcos",
            description:
              "Fast towing and roadside assistance in San Marcos CA. Serving CSUSM, Restaurant Row, San Elijo Hills, Discovery Hills, Bradley Park & the SR-78 corridor 24/7.",
            url: "https://www.closebytowing.com/san-marcos",
            telephone: CONTACT.phone,
            address: {
              "@type": "PostalAddress",
              addressLocality: "San Marcos",
              addressRegion: "CA",
              postalCode: SAN_MARCOS_ZIP_CODES[0],
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 33.1434,
              longitude: -117.1661,
            },
            areaServed: {
              "@type": "City",
              name: "San Marcos",
              containedInPlace: { "@type": "County", name: "San Diego County" },
            },
            serviceType: ["Towing Service", "Roadside Assistance", "Flatbed Towing", "Emergency Towing"],
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
