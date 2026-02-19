
import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import Reviews from "@/components/Reviews";

/* ─── SEO METADATA ─── */
export const metadata: Metadata = {
  title:
    "Towing La Mesa | Tow Truck La Mesa CA | 24/7 | CloseBy Towing",
  description:
    "Towing La Mesa — fast tow truck service covering Downtown Village, Grossmont Center, Lake Murray & the I-8 corridor. 20-min response, licensed & insured, 24/7.",
  keywords:
    "towing La Mesa, tow truck La Mesa, La Mesa towing service, Grossmont towing, Downtown La Mesa tow truck, Lake Murray roadside assistance, I-8 La Mesa towing, La Mesa 91941 92042",
  openGraph: {
    title: "Towing La Mesa CA | Tow Truck 24/7 | CloseBy Towing",
    description:
      "The Jewel of the Hills deserves premium towing. Downtown Village, Grossmont, Lake Murray & I-8 — we cover all of La Mesa.",
    url: "https://www.closebytowing.com/la-mesa",
    type: "website",
  },
  alternates: { canonical: "https://www.closebytowing.com/la-mesa" },
};

/* ─── LA MESA NEIGHBORHOOD ZONES ─── */
const NEIGHBORHOODS = [
  {
    zone: "Downtown La Mesa Village",
    streets: "La Mesa Blvd, Palm Ave, Date Ave, Allison Ave",
    character:
      "The beating heart of La Mesa. Brick-lined sidewalks, antique shops, farm-to-table restaurants, and the famous Oktoberfest & Classic Car Shows. Narrow one-way streets and angled parking stalls mean fender-benders and lockouts are part of village life — we handle them fast.",
    eta: "12–18 min",
    accent: "from-violet-500 to-purple-600",
  },
  {
    zone: "Grossmont Area",
    streets: "Fletcher Pkwy, Grossmont Center Dr, Murray Dr",
    character:
      "Home to Grossmont Center — East County's premier open-air shopping destination — and Grossmont Hospital, the region's busiest medical campus. Multi-level parking structures with tight turns and low clearances keep our flatbed drivers busy here daily.",
    eta: "14–20 min",
    accent: "from-amber-500 to-yellow-600",
  },
  {
    zone: "Lake Murray",
    streets: "Lake Murray Blvd, Baltimore Dr, Kiowa Dr",
    character:
      "San Diego's beloved urban reservoir surrounded by rolling hills, a 3.2-mile walking loop, and quiet residential streets. Hikers, fishermen, and commuters all call us when their car won't cooperate at the trailhead or along the narrow lakeside roads.",
    eta: "16–22 min",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    zone: "Mt. Helix Adjacent",
    streets: "Fuerte Dr, Lemon Ave, Yale Ave",
    character:
      "Steep hillside properties with breathtaking views — and winding roads that challenge even experienced drivers. Grades exceed 15% in places. Our winch-equipped trucks specialize in the tight switchbacks and narrow driveways of this prestigious hilltop community.",
    eta: "18–25 min",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    zone: "Spring Street Corridor",
    streets: "Spring St, University Ave, El Cajon Blvd",
    character:
      "La Mesa's commercial backbone connecting I-8 to the Village. Dense traffic, auto dealerships, and strip-mall parking lots generate steady demand for towing and jump-starts, especially during the morning and evening rush on Spring Street.",
    eta: "10–16 min",
    accent: "from-rose-500 to-pink-600",
  },
  {
    zone: "Rolando & Western La Mesa",
    streets: "College Ave, 70th St, Saranac St",
    character:
      "Where La Mesa meets San Diego's College Area. Tree-lined residential streets, apartment complexes near SDSU, and the 70th Street trolley corridor. We respond quickly to this densely populated transition zone between the two cities.",
    eta: "12–18 min",
    accent: "from-indigo-500 to-blue-600",
  },
];

/* ─── FREEWAY CORRIDORS ─── */
const FREEWAYS = [
  {
    name: "Interstate 8",
    tag: "I-8",
    description:
      "The main artery slicing east-west through the heart of La Mesa. From the Spring Street on-ramp to the Fletcher Parkway interchange, this stretch sees bumper-to-bumper commuter traffic, overheated engines, and collision debris daily. We're positioned to reach any I-8 breakdown within La Mesa in under 15 minutes.",
    color: "bg-violet-600",
  },
  {
    name: "State Route 94",
    tag: "SR-94",
    description:
      "The Martin Luther King Jr. Freeway runs along La Mesa's southern edge, connecting to Spring Valley and downtown San Diego. Narrow shoulders and fast-moving traffic make breakdowns here especially dangerous — our trucks carry full LED safety lighting for quick, visible response.",
    color: "bg-amber-600",
  },
  {
    name: "State Route 125",
    tag: "SR-125",
    description:
      "The toll road borders La Mesa's eastern flank near Grossmont Center. Drivers sometimes run out of gas or suffer flat tires between the sparse exits. We service the toll lanes and can meet you at the Grossmont Summit or any point along the 125 corridor.",
    color: "bg-cyan-600",
  },
];

/* ─── SERVICES ─── */
const SERVICES = [
  {
    name: "Downtown Village Recovery",
    description:
      "Tight one-way streets, angled parking, and crowded event nights — our drivers navigate the Village's unique layout to reach your vehicle without damaging neighboring cars.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: "Hill & Steep-Grade Towing",
    description:
      "Mt. Helix slopes, Lake Murray hills, and Grossmont Summit — our winch-equipped flatbeds handle inclines that other companies refuse. No grade is too steep.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    name: "I-8 Freeway Response",
    description:
      "Rapid deployment to any I-8 breakdown between Spring Street and Fletcher Parkway. Full LED safety lighting, traffic cones, and CHP coordination included.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: "Grossmont Parking Structure",
    description:
      "Low-clearance garages and tight spiral ramps are our specialty. We extract vehicles from Grossmont Center and Hospital structures without scraping a single panel.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    name: "Jump Start & Lockout",
    description:
      "Dead battery at Lake Murray trailhead? Locked out after dinner in the Village? We arrive in 15–20 minutes with professional-grade boosters and lockout kits.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    name: "Flatbed & Long-Distance",
    description:
      "Whether it's a classic car from the La Mesa Car Show or a daily driver headed to a dealer, our hydraulic flatbeds transport vehicles safely across town or across the state.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12l2 5h-1.5M8 7H6m2 0v5m6-5v5m-6 0h6m-6 0H4.5M14 12h3.5M4.5 12a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm13 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
      </svg>
    ),
  },
];

/* ─── FAQ ─── */
const FAQ_DATA = [
  {
    question: "How fast can you get to Downtown La Mesa Village?",
    answer:
      "We typically arrive in the Village within 12–18 minutes. Our drivers know the one-way street pattern on La Mesa Boulevard, the best approach routes past the antique shops, and where to stage during crowded events like Oktoberfest and the Classic Car Show.",
  },
  {
    question: "Do you handle steep hills near Mt. Helix?",
    answer:
      "Absolutely. The Mt. Helix area has some of the steepest residential streets in East County — grades exceeding 15%. Our winch-equipped flatbed trucks are built for exactly this terrain. We secure vehicles on steep driveways and narrow switchbacks without any risk of rollback.",
  },
  {
    question: "What about Grossmont Center parking structures?",
    answer:
      "We service Grossmont Center and Grossmont Hospital regularly. Our drivers know the clearance heights of every parking structure level, the spiral ramp dimensions, and the quickest exit routes. We can also respond to the medical campus for employee and visitor vehicles 24/7.",
  },
  {
    question: "How much does towing cost in La Mesa?",
    answer:
      "We provide upfront pricing before dispatch — no surprises. Standard La Mesa tows start at competitive rates based on distance and vehicle type. You'll know your exact price before we send a truck. Military and first-responder discounts available.",
  },
  {
    question: "Can you reach Lake Murray quickly?",
    answer:
      "Yes — Lake Murray is one of our regular coverage zones. Whether you're at the trailhead parking lot, along Baltimore Drive, or in the surrounding residential streets, we typically arrive in 16–22 minutes. The hilly terrain around the lake doesn't slow us down.",
  },
  {
    question: "Do you handle I-8 breakdowns through La Mesa?",
    answer:
      "I-8 through La Mesa is one of our most-covered corridors. From the Spring Street on-ramp to the Fletcher Parkway interchange, we respond to freeway breakdowns, accidents, and flat tires in under 15 minutes. We carry full LED safety lighting and coordinate with CHP when needed.",
  },
];

/* ─── NEARBY AREAS ─── */
const NEARBY = [
  { name: "El Cajon", href: "/el-cajon" },
  { name: "Spring Valley", href: "/spring-valley" },
  { name: "Lemon Grove", href: "/san-diego/lemon-grove" },
  { name: "Santee", href: "/san-diego/santee" },
  { name: "College Area", href: "/san-diego/college-area" },
  { name: "San Carlos", href: "/san-diego/san-carlos" },
  { name: "Del Cerro", href: "/san-diego/del-cerro" },
  { name: "Allied Gardens", href: "/san-diego/allied-gardens" },
];

export default function LaMesaPage() {
  return (
    <main className="bg-white">

      {/* ══════════ HERO — Jewel of the Hills ══════════ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Deep amethyst/jewel gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1040] via-[#2d1854] to-[#1e0e3a]" />

        {/* Warm gold radial glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-400/8 rounded-full blur-[100px]" />
        </div>

        {/* Jewel facet pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23d4a543' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }} />

        {/* Rolling hills silhouette */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-32 sm:h-44">
            <defs>
              <linearGradient id="hillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2d1854" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#1a1040" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            {/* Back hills (lighter) */}
            <path d="M0,140 C120,80 240,110 360,90 C480,70 540,100 660,85 C780,70 840,95 960,80 C1080,65 1200,100 1320,75 C1380,65 1420,85 1440,80 L1440,200 L0,200Z" fill="url(#hillGrad)" opacity="0.5" />
            {/* Front hills (darker) */}
            <path d="M0,160 C160,120 280,150 400,130 C520,110 600,140 720,125 C840,110 920,135 1040,120 C1160,105 1280,140 1400,115 L1440,110 L1440,200 L0,200Z" fill="#1a1040" opacity="0.7" />
            {/* Foreground */}
            <path d="M0,175 C200,150 350,170 500,155 C650,140 750,165 900,150 C1050,135 1150,160 1300,145 C1380,138 1420,150 1440,145 L1440,200 L0,200Z" fill="white" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:py-28 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/25 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
              <span className="text-amber-300 text-lg">💎</span>
              <span className="text-amber-200 text-sm font-semibold tracking-wide">The Jewel of the Hills</span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight">
              <span className="text-white">Towing</span>
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
                La Mesa
              </span>
            </h1>

            <p className="mt-6 text-xl sm:text-2xl text-purple-100/80 leading-relaxed max-w-2xl">
              Your trusted <span className="text-amber-300 font-semibold">tow truck in La Mesa</span> — covering
              Downtown Village, Grossmont Center, Lake Murray &amp; the I-8 corridor with{" "}
              <span className="text-amber-300 font-semibold">20-minute average response</span>.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              {[
                { value: "20 min", label: "Avg Response" },
                { value: "24/7", label: "Always On" },
                { value: "I-8", label: "Corridor" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-amber-300">{s.value}</div>
                  <div className="text-xs text-purple-200/70 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-[#1a1040] px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
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
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/20 backdrop-blur-sm"
              >
                WhatsApp Us
              </a>
            </div>

            {/* Trust line */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-purple-200/60">
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

      {/* ── REVIEWS ── */}
      <div className="relative z-20 -mt-8">
        <Reviews />
      </div>

      {/* ══════════ LA MESA IDENTITY ══════════ */}
      <section className="py-20 sm:py-28 bg-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-violet-700 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              East County&apos;s Jewel
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              Why La Mesa Trusts{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">CloseBy</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Nestled in the hills of East County, La Mesa is a city of 60,000 with a character all its own — a vibrant
              downtown village, world-class medical facilities, and hilltop views that stretch to the coast. The terrain
              that makes La Mesa beautiful also makes it challenging for towing. Steep grades near Mt. Helix, narrow
              historic streets in the Village, and multi-level parking garages at Grossmont demand a towing company with
              local expertise. That&apos;s us.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                stat: "60,000+",
                label: "Residents Served",
                detail: "Covering every neighborhood from Rolando to Fletcher Hills",
              },
              {
                stat: "3",
                label: "Freeway Corridors",
                detail: "I-8, SR-94, and SR-125 — all within our rapid-response zone",
              },
              {
                stat: "91941/42",
                label: "ZIP Codes",
                detail: "Complete coverage across both La Mesa postal zones",
              },
            ].map((item) => (
              <div key={item.label} className="text-center p-8 rounded-2xl bg-gradient-to-b from-violet-50 to-white border border-violet-100">
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  {item.stat}
                </div>
                <div className="mt-2 font-bold text-slate-900">{item.label}</div>
                <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ NEIGHBORHOODS ══════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-violet-700 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Neighborhood Coverage
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              Every Corner of{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">La Mesa</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {NEIGHBORHOODS.map((n) => (
              <div
                key={n.zone}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-violet-200 transition-all duration-300"
              >
                {/* Accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${n.accent}`} />

                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
                    {n.zone}
                  </h3>
                  <span className="shrink-0 ml-3 bg-violet-50 text-violet-700 text-xs font-bold px-3 py-1 rounded-full">
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
      <section className="py-20 sm:py-28 bg-[#1a1040] text-white relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px]" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-300 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Freeway Response
            </span>
            <h2 className="text-4xl sm:text-5xl font-black">
              La Mesa&apos;s{" "}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                Highway Corridors
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FREEWAYS.map((fw) => (
              <div
                key={fw.tag}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-amber-400/30 transition-all"
              >
                <span className={`inline-block ${fw.color} text-white text-sm font-black px-4 py-1.5 rounded-lg mb-4`}>
                  {fw.tag}
                </span>
                <h3 className="text-lg font-bold text-white mb-3">{fw.name}</h3>
                <p className="text-purple-200/70 text-sm leading-relaxed">{fw.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-violet-700 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              What We Do
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              Towing Services in{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">La Mesa</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.name}
                className="group bg-gradient-to-b from-violet-50/50 to-white rounded-2xl p-6 sm:p-8 border border-violet-100/50 hover:shadow-lg hover:border-violet-200 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-violet-500/20">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-violet-700 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Common Questions
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              La Mesa Towing{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">FAQ</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-violet-50/50 transition-colors">
                  <h3 className="font-semibold text-slate-900 pr-8">{faq.question}</h3>
                  <svg
                    className="w-5 h-5 text-violet-500 transition-transform group-open:rotate-180 shrink-0"
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

      {/* ══════════ FINAL CTA ══════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#1a1040] via-[#2d1854] to-[#1e0e3a] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">
            Need a Tow in{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
              La Mesa?
            </span>
          </h2>
          <p className="mt-6 text-xl text-purple-200/80 max-w-2xl mx-auto">
            The Jewel of the Hills deserves premium towing service.
            Call now for upfront pricing and fast dispatch.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-[#1a1040] px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
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

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-purple-200/60 text-sm">
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
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Nearby Areas</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {NEARBY.map((a) => (
              <Link
                key={a.name}
                href={a.href}
                className="group bg-slate-50 hover:bg-violet-50 rounded-xl p-4 text-center border border-slate-100 hover:border-violet-200 transition-all"
              >
                <span className="font-semibold text-slate-700 group-hover:text-violet-700 transition-colors">
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
              { "@type": "ListItem", position: 3, name: "La Mesa Towing", item: "https://www.closebytowing.com/la-mesa" },
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
            "@id": "https://www.closebytowing.com/la-mesa",
            name: "CloseBy Towing - La Mesa",
            description:
              "Fast towing and roadside assistance in La Mesa CA. Serving Downtown Village, Grossmont Center, Lake Murray, Mt. Helix area & I-8 corridor 24/7.",
            url: "https://www.closebytowing.com/la-mesa",
            telephone: CONTACT.phone,
            areaServed: {
              "@type": "City",
              name: "La Mesa",
              containedInPlace: { "@type": "County", name: "San Diego County" },
            },
            serviceType: ["Towing Service", "Roadside Assistance", "Flatbed Towing"],
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
