
import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import Reviews from "@/components/Reviews";

/* ─── SEO METADATA ─── */
export const metadata: Metadata = {
  title: "Towing Poway | Tow Truck Poway CA | 24/7 | CloseBy Towing",
  description:
    "Towing Poway — fast tow truck service for The City in the Country. Lake Poway, Old Poway Park, Twin Peaks, Blue Sky Reserve & I-15/SR-67 corridors. 25-min response, 24/7.",
  keywords:
    "towing Poway, tow truck Poway, Poway towing service, Lake Poway tow truck, Old Poway Park towing, I-15 Poway towing, SR-67 towing, Poway 92064 towing",
  openGraph: {
    title: "Towing Poway CA | Tow Truck 24/7 | CloseBy Towing",
    description:
      "The City in the Country trusts CloseBy. Lake Poway, Old Poway Park, Twin Peaks, Blue Sky Reserve & I-15 — we cover all of Poway.",
    url: "https://www.closebytowing.com/poway",
    type: "website",
  },
  alternates: { canonical: "https://www.closebytowing.com/poway" },
};

/* ─── POWAY NEIGHBORHOOD ZONES ─── */
const NEIGHBORHOODS = [
  {
    zone: "Old Poway Park & Heritage District",
    streets: "Midland Rd, Aubrey St, Temple St, Nelson Ln",
    character:
      "The soul of Poway. A vintage steam train chugs past the heritage museum, Saturday farmers markets pack the parking lot, and families fill the boardwalk for seasonal festivals. Lockouts and dead batteries are the most common calls here — we navigate the narrow park roads and residential overflow parking with ease.",
    eta: "15–22 min",
    accent: "from-amber-600 to-yellow-700",
  },
  {
    zone: "Lake Poway & Blue Sky Reserve",
    streets: "Lake Poway Rd, Espola Rd, Blue Sky Trail",
    character:
      "San Diego's beloved day-use reservoir surrounded by 60 acres of oak woodland and chaparral. Hikers, fishermen, and boaters call when vehicles overheat on the steep climb to the parking lot or won't start after a long trail day. Our trucks handle the narrow, winding access road year-round.",
    eta: "22–30 min",
    accent: "from-sky-600 to-cyan-700",
  },
  {
    zone: "Twin Peaks & South Poway Estates",
    streets: "Twin Peaks Rd, Old Coach Rd, Stoneridge Country Club",
    character:
      "Poway's most prestigious enclave. Gated communities with steep hillside driveways, estate lots measured in acres, and switchback roads that test any vehicle's brakes. Our winch-equipped flatbeds specialize in the 12–18% grades that define this hilltop community — no driveway is too steep.",
    eta: "20–28 min",
    accent: "from-emerald-600 to-green-700",
  },
  {
    zone: "Poway Road Corridor",
    streets: "Poway Rd, Community Rd, Garden Rd, Kirkham Way",
    character:
      "Poway's commercial spine running east-west from I-15 to the heart of town. Auto dealerships, strip malls, restaurants, and the Poway Unified School District offices generate steady towing demand. Morning and evening rush-hour breakdowns along this 4-mile stretch are our bread and butter.",
    eta: "12–18 min",
    accent: "from-orange-600 to-red-700",
  },
  {
    zone: "Rancho Arbolitos & North Poway",
    streets: "Espola Rd, Titan Way, Pomerado Rd (north section)",
    character:
      "Where suburban Poway meets open country. Horse properties, citrus groves, and semi-rural lots line the roads north of Lake Poway Road. Unpaved shoulders and gravel driveways require careful positioning — our drivers carry extra ground mats to protect your property during recovery.",
    eta: "25–35 min",
    accent: "from-lime-600 to-green-700",
  },
  {
    zone: "Scripps Poway Parkway & Business Parks",
    streets: "Scripps Poway Pkwy, Pomerado Rd (south), Daniels Way",
    character:
      "Poway's tech and business corridor along the southern edge. Corporate campuses, industrial parks, and the connection to Scripps Ranch generate weekday commuter breakdowns and fleet towing calls. Quick freeway access via I-15 means fast response to this busy zone.",
    eta: "15–20 min",
    accent: "from-indigo-600 to-blue-700",
  },
];

/* ─── FREEWAY CORRIDORS ─── */
const FREEWAYS = [
  {
    name: "Interstate 15",
    tag: "I-15",
    description:
      "Poway's primary freeway lifeline along the western edge. The Poway Road and Rancho Bernardo Road interchanges are high-traffic zones where commuter breakdowns, fender-benders, and overheated engines happen daily. We're positioned to reach any I-15 incident near Poway within 15 minutes.",
    color: "bg-teal-700",
  },
  {
    name: "State Route 67",
    tag: "SR-67",
    description:
      "The two-lane highway running through Poway's eastern hills toward Ramona and the backcountry. Winding grades, limited shoulders, and wildlife crossings make SR-67 one of East County's most challenging roads. Our trucks carry full safety lighting for this fast-moving, narrow corridor.",
    color: "bg-amber-700",
  },
  {
    name: "Scripps Poway Parkway",
    tag: "SPP",
    description:
      "The 6-mile arterial connecting I-15 to eastern Poway. Rush-hour congestion, construction zones, and the steep descent past Sycamore Canyon generate frequent calls. This is Poway's busiest non-freeway road — and one of our most-traveled response routes.",
    color: "bg-stone-700",
  },
];

/* ─── SERVICES ─── */
const SERVICES = [
  {
    name: "Hillside & Rural Recovery",
    description:
      "Twin Peaks grades, unpaved ranch driveways, and Blue Sky trail access roads — our winch-equipped flatbeds handle terrain that standard tow trucks can't.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    name: "I-15 & SR-67 Freeway Response",
    description:
      "Rapid deployment to any breakdown along Poway's two major highway corridors. Full LED safety lighting, traffic cones, and CHP coordination for safe freeway recoveries.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: "Trail & Recreation Towing",
    description:
      "Dead battery at Lake Poway? Flat tire at Blue Sky trailhead? We reach Poway's recreation areas in 20–30 minutes with jump start kits, spare air, and flatbed capability.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Ranch & Estate Access",
    description:
      "Poway's horse properties and multi-acre estates have driveways that challenge most tow trucks. We carry ground protection mats and have experience on gravel, dirt, and steep private roads.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: "Jump Start & Lockout",
    description:
      "Poway's warm afternoons drain batteries fast. Locked out at Old Poway Park? Dead start after a Lake Poway hike? We arrive in 15–25 minutes with professional-grade tools.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    name: "Flatbed & Long-Distance",
    description:
      "Whether it's a classic car from a Poway car show or a daily driver headed to a specialty shop, our hydraulic flatbeds transport vehicles safely across town or across the state.",
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
    question: "How fast can you get to Lake Poway or Blue Sky Reserve?",
    answer:
      "We typically arrive at Lake Poway within 22–30 minutes. The steep, winding access road to the lake parking lot is familiar territory for our drivers. For Blue Sky Ecological Reserve trailhead, expect 20–28 minutes. We carry jump-start kits and spare-air canisters for the most common post-hike vehicle issues.",
  },
  {
    question: "Do you handle the steep hills near Twin Peaks?",
    answer:
      "Absolutely. Twin Peaks and South Poway have some of the steepest residential grades in North County — 12% to 18% inclines. Our winch-equipped flatbeds are built for exactly this terrain. We secure vehicles on hillside driveways and switchback roads without any risk of rollback or property damage.",
  },
  {
    question: "Can you reach Poway's rural and ranch properties?",
    answer:
      "Yes — Poway's unique 'City in the Country' character includes horse properties, citrus groves, and semi-rural lots with unpaved driveways and gravel access roads. Our trucks carry ground protection mats to prevent driveway damage. We've recovered vehicles from private dirt roads, ranch gates, and off-road situations throughout Poway.",
  },
  {
    question: "How much does towing cost in Poway?",
    answer:
      "We provide upfront pricing before dispatch — no surprises. Standard Poway tows start at competitive rates based on distance and vehicle type. Rural and hillside recoveries may include a small terrain surcharge. You'll know your exact price before we send a truck. Military and first-responder discounts available.",
  },
  {
    question: "Do you service I-15 and SR-67 breakdowns near Poway?",
    answer:
      "I-15 along Poway's western edge and SR-67 through the eastern hills are two of our most-covered corridors. We respond to freeway breakdowns, accidents, and flat tires within 15 minutes on I-15 and 20 minutes on SR-67. We carry full LED safety lighting and coordinate with CHP when needed.",
  },
  {
    question: "What about Old Poway Park events and the farmers market?",
    answer:
      "We regularly service Old Poway Park, especially during the Saturday farmers market, holiday festivals, and community events. Our drivers know the park layout, the narrow roads around the heritage train depot, and the residential overflow parking areas. We can tow without disrupting event traffic.",
  },
];

/* ─── NEARBY AREAS ─── */
const NEARBY = [
  { name: "Rancho Bernardo", href: "/san-diego/rancho-bernardo" },
  { name: "Scripps Ranch", href: "/san-diego/scripps-ranch" },
  { name: "Sabre Springs", href: "/san-diego/sabre-springs" },
  { name: "Rancho Penasquitos", href: "/san-diego/rancho-penasquitos" },
  { name: "Carmel Mountain", href: "/san-diego/carmel-mountain" },
  { name: "Mira Mesa", href: "/san-diego/mira-mesa" },
  { name: "4S Ranch", href: "/san-diego/4s-ranch" },
  { name: "Santee", href: "/san-diego/santee" },
];

export default function PowayPage() {
  return (
    <main className="bg-stone-50">

      {/* ══════════ HERO — The City in the Country ══════════ */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Deep sage/earth gradient — country warmth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a1a] via-[#2a3d20] to-[#1e2e14]" />

        {/* Warm sunlight glow from top-right */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-amber-400/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-emerald-500/6 rounded-full blur-[100px]" />
        </div>

        {/* Tree canopy texture overlay */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='20' r='18' fill='none' stroke='%2390b880' stroke-width='0.5'/%3E%3Ccircle cx='20' cy='55' r='14' fill='none' stroke='%2390b880' stroke-width='0.5'/%3E%3Ccircle cx='60' cy='55' r='14' fill='none' stroke='%2390b880' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }} />

        {/* Layered mountain/hill horizon silhouette — country landscape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 180" preserveAspectRatio="none" className="w-full h-28 sm:h-40">
            {/* Distant ridge */}
            <path d="M0,120 C100,80 200,100 350,70 C500,40 600,90 750,55 C900,20 1000,65 1150,40 C1300,15 1380,50 1440,35 L1440,180 L0,180Z" fill="#1e2e14" opacity="0.4" />
            {/* Mid ridge with tree bumps */}
            <path d="M0,140 C60,125 90,110 140,120 C190,130 220,105 280,115 C340,125 380,100 440,110 C500,120 540,95 600,105 C660,115 700,90 760,100 C820,110 860,88 920,98 C980,108 1020,85 1080,95 C1140,105 1180,82 1240,92 C1300,102 1340,80 1400,90 L1440,85 L1440,180 L0,180Z" fill="#1e2e14" opacity="0.65" />
            {/* Foreground */}
            <path d="M0,160 C200,148 400,155 600,145 C800,135 1000,150 1200,140 C1350,133 1400,142 1440,138 L1440,180 L0,180Z" fill="#fafaf9" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:py-28 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-600/15 border border-amber-500/25 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
              <span className="text-amber-300 text-lg">🌿</span>
              <span className="text-amber-200 text-sm font-semibold tracking-wide">The City in the Country</span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight">
              <span className="text-white">Towing</span>
              <br />
              <span className="bg-gradient-to-r from-lime-300 via-emerald-200 to-green-300 bg-clip-text text-transparent">
                Poway
              </span>
            </h1>

            <p className="mt-6 text-xl sm:text-2xl text-green-100/80 leading-relaxed max-w-2xl">
              Your trusted <span className="text-lime-300 font-semibold">tow truck in Poway</span> — covering
              Lake Poway, Old Poway Park, Twin Peaks, Blue Sky Reserve &amp; the{" "}
              <span className="text-lime-300 font-semibold">I-15 &amp; SR-67 corridors</span>.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              {[
                { value: "25 min", label: "Avg Response" },
                { value: "24/7", label: "Always On" },
                { value: "I-15", label: "& SR-67" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-lime-300">{s.value}</div>
                  <div className="text-xs text-green-200/60 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-[#1a2a1a] px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-emerald-500/25"
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
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-green-200/50">
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

      {/* ══════════ POWAY IDENTITY ══════════ */}
      <section className="py-20 sm:py-28 bg-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-emerald-700 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              North County&apos;s Country Escape
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              Why Poway Trusts{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">CloseBy</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Poway isn&apos;t just another suburb — it&apos;s 39 square miles of rolling hills, horse trails, oak
              woodlands, and a fiercely independent community of 50,000 that chose to stay &quot;The City in the
              Country.&quot; The same terrain that makes Poway beautiful makes it challenging for towing. Steep grades
              near Twin Peaks, dirt ranch driveways, narrow lake access roads, and the winding SR-67 corridor demand a
              towing company with local expertise. That&apos;s us.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                stat: "50,000+",
                label: "Residents Served",
                detail: "From Poway Road shopping to Blue Sky trailheads",
              },
              {
                stat: "39 sq mi",
                label: "City Coverage",
                detail: "The largest city by area in inland North County",
              },
              {
                stat: "92064",
                label: "ZIP Code",
                detail: "Complete coverage across all of Poway",
              },
            ].map((item) => (
              <div key={item.label} className="text-center p-8 rounded-2xl bg-gradient-to-b from-emerald-50 to-white border border-emerald-100">
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
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
      <section className="py-20 sm:py-28 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-emerald-700 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Neighborhood Coverage
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              Every Corner of{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Poway</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {NEIGHBORHOODS.map((n) => (
              <div
                key={n.zone}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-100 hover:shadow-lg hover:border-emerald-200 transition-all duration-300"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${n.accent}`} />
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {n.zone}
                  </h3>
                  <span className="shrink-0 ml-3 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
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
      <section className="py-20 sm:py-28 bg-[#1a2a1a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/8 rounded-full blur-[120px]" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-lime-300 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Highway Response
            </span>
            <h2 className="text-4xl sm:text-5xl font-black">
              Poway&apos;s{" "}
              <span className="bg-gradient-to-r from-lime-300 to-emerald-300 bg-clip-text text-transparent">
                Road Corridors
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FREEWAYS.map((fw) => (
              <div
                key={fw.tag}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-lime-400/30 transition-all"
              >
                <span className={`inline-block ${fw.color} text-white text-sm font-black px-4 py-1.5 rounded-lg mb-4`}>
                  {fw.tag}
                </span>
                <h3 className="text-lg font-bold text-white mb-3">{fw.name}</h3>
                <p className="text-green-200/70 text-sm leading-relaxed">{fw.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-emerald-700 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              What We Do
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              Towing Services in{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Poway</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.name}
                className="group bg-gradient-to-b from-emerald-50/50 to-white rounded-2xl p-6 sm:p-8 border border-emerald-100/50 hover:shadow-lg hover:border-emerald-200 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/20">
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
      <section className="py-20 sm:py-28 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-emerald-700 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Common Questions
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              Poway Towing{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">FAQ</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-emerald-50/50 transition-colors">
                  <h3 className="font-semibold text-slate-900 pr-8">{faq.question}</h3>
                  <svg className="w-5 h-5 text-emerald-500 transition-transform group-open:rotate-180 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#1a2a1a] via-[#2a3d20] to-[#1e2e14] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">
            Need a Tow in{" "}
            <span className="bg-gradient-to-r from-lime-300 via-emerald-200 to-green-300 bg-clip-text text-transparent">
              Poway?
            </span>
          </h2>
          <p className="mt-6 text-xl text-green-200/80 max-w-2xl mx-auto">
            The City in the Country deserves towing that knows the terrain.
            Call now for upfront pricing and fast dispatch.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-[#1a2a1a] px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg shadow-emerald-500/25"
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

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-green-200/60 text-sm">
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
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Nearby Areas</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {NEARBY.map((a) => (
              <Link
                key={a.name}
                href={a.href}
                className="group bg-stone-50 hover:bg-emerald-50 rounded-xl p-4 text-center border border-stone-100 hover:border-emerald-200 transition-all"
              >
                <span className="font-semibold text-slate-700 group-hover:text-emerald-700 transition-colors">
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
              { "@type": "ListItem", position: 3, name: "Poway Towing", item: "https://www.closebytowing.com/poway" },
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
            "@id": "https://www.closebytowing.com/poway",
            name: "CloseBy Towing - Poway",
            description:
              "Fast towing and roadside assistance in Poway CA. Serving Lake Poway, Old Poway Park, Twin Peaks, Blue Sky Reserve & I-15/SR-67 corridors 24/7.",
            url: "https://www.closebytowing.com/poway",
            telephone: CONTACT.phone,
            areaServed: {
              "@type": "City",
              name: "Poway",
              containedInPlace: { "@type": "County", name: "San Diego County" },
            },
            geo: { "@type": "GeoCoordinates", latitude: 32.9628, longitude: -117.0359 },
            serviceType: ["Towing Service", "Roadside Assistance", "Flatbed Towing", "Rural Road Recovery"],
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
