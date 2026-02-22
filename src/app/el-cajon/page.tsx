
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT, areaHref } from "@/lib/constants";
import Reviews from "@/components/Reviews";

/* ─── SEO METADATA ─── */
export const metadata: Metadata = {
  title:
    "El Cajon Tow Truck Service | 24/7 East County Towing | CloseBy Towing",
  description:
    "El Cajon's go-to tow truck company. Valley-wide coverage from Parkway Plaza to Fletcher Hills, Bostonia to Granite Hills. I-8 & SR-67 corridor specialists. Call (858) 999-9293.",
  keywords:
    "El Cajon tow truck, towing El Cajon CA, East County towing, I-8 towing El Cajon, Parkway Plaza tow truck, Fletcher Hills towing, Bostonia roadside assistance, El Cajon 92020",
  openGraph: {
    title: "El Cajon Tow Truck — East County's Fastest Response | CloseBy",
    description:
      "Stuck in The Box? CloseBy Towing reaches every corner of El Cajon in 15-25 minutes. Parkway Plaza, Fletcher Hills, Downtown & beyond.",
    url: "https://www.closebytowing.com/el-cajon",
    type: "website",
  },
  alternates: { canonical: "https://www.closebytowing.com/el-cajon" },
};

/* ─── EL CAJON NEIGHBORHOODS — unique micro-area data ─── */
const VALLEY_ZONES = [
  {
    zone: "Downtown El Cajon",
    streets: "Main St, Magnolia Ave, Rea Ave",
    character:
      "The revitalized heart of East County. Prescott Promenade hosts weekly events, while Main Street buzzes with restaurants and local shops. Tight parking means lockouts and fender benders — we handle both.",
    eta: "12–18 min",
    accent: "from-amber-500 to-orange-600",
  },
  {
    zone: "Fletcher Hills",
    streets: "Fletcher Pkwy, Baltimore Dr, Lake Murray",
    character:
      "Hillside homes with winding roads and stunning reservoir views. From Valhalla High School traffic to Lake Murray trail parking, our flatbed navigates the steep grades with ease.",
    eta: "15–22 min",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    zone: "Bostonia",
    streets: "Bradley Ave, Pepper Dr, Woodside Ave",
    character:
      "The eastern gateway between El Cajon and Lakeside. Mixed residential and ranch properties where roadside breakdowns happen far from gas stations. We come to you.",
    eta: "18–25 min",
    accent: "from-sky-500 to-blue-600",
  },
  {
    zone: "Granite Hills",
    streets: "Dehesa Rd, Granite Hills Dr, Via Mercado",
    character:
      "Boulder-strewn hillside community south of I-8. Steep driveways, narrow cul-de-sacs, and the Singing Hills golf corridor. Our trucks are built for these roads.",
    eta: "16–23 min",
    accent: "from-violet-500 to-purple-600",
  },
  {
    zone: "Parkway Plaza District",
    streets: "Fletcher Pkwy, Johnson Ave, Parkway Dr",
    character:
      "East County's retail hub. Thousands of daily visitors mean dead batteries in parking structures, lockouts at Target, and minor collisions on Fletcher Parkway during rush hour.",
    eta: "14–20 min",
    accent: "from-rose-500 to-pink-600",
  },
  {
    zone: "Gillespie Field Area",
    streets: "N Mollison Ave, Cuyamaca St, Marshall Ave",
    character:
      "Aviation businesses, industrial parks, and the weekly swap meet grounds. From small planes to big rigs, this commercial corridor keeps our dispatch busy.",
    eta: "13–19 min",
    accent: "from-cyan-500 to-teal-600",
  },
];

/* ─── I-8 CORRIDOR — El Cajon's lifeline ─── */
const FREEWAY_CORRIDORS = [
  {
    route: "Interstate 8",
    tag: "I-8",
    role: "El Cajon's main artery connecting Ocean Beach to the desert. Exits at Severin Dr, Magnolia Ave, 2nd St, Main St, and Greenfield Dr are our most-dispatched locations.",
    exits: ["Severin Dr", "Magnolia Ave", "2nd Street", "Main St", "Greenfield Dr", "Los Coches Rd"],
  },
  {
    route: "State Route 67",
    tag: "SR-67",
    role: "The north-south corridor linking El Cajon to Ramona through Lakeside. Merges with I-8 at one of East County's most accident-prone interchanges.",
    exits: ["Prospect Ave", "Bradley Ave", "Riverford Rd"],
  },
  {
    route: "State Route 125",
    tag: "SR-125",
    role: "The tolled expressway skirting El Cajon's eastern edge. Connects to SR-52 northbound and Otay Mesa southbound. Less traffic, but higher speeds mean bigger incidents.",
    exits: ["Via Mercado", "Dehesa Rd"],
  },
];

/* ─── SERVICES tailored to El Cajon needs ─── */
const EC_SERVICES = [
  {
    name: "I-8 Freeway Recovery",
    detail:
      "Shoulder breakdowns, overheated engines climbing from the coast, and multi-car pileups at the SR-67 merge. CHP-coordinated response.",
    href: "/towing",
    icon: "🛣️",
  },
  {
    name: "Parking Lot Towing",
    detail:
      "Parkway Plaza, Walmart, Costco, and the dozens of strip malls along Fletcher Parkway. Dead batteries and lockouts are our specialty.",
    href: "/jump-start",
    icon: "🅿️",
  },
  {
    name: "Flatbed Transport",
    detail:
      "Low-clearance sports cars, AWD vehicles, and classic trucks from El Cajon's car culture. Damage-free flatbed loading every time.",
    href: "/towing",
    icon: "🚛",
  },
  {
    name: "Hill & Canyon Recovery",
    detail:
      "Fletcher Hills, Granite Hills, and Crest-area vehicles that slide off steep driveways or narrow canyon roads. Winch-out equipped.",
    href: "/winch-out",
    icon: "⛰️",
  },
  {
    name: "Lockout Assistance",
    detail:
      "Keys locked in your car at Gillespie Field, the swap meet, or Main Street? Non-destructive entry for all vehicle makes.",
    href: "/lockout",
    icon: "🔑",
  },
  {
    name: "Fuel & Tire Emergencies",
    detail:
      "Ran out of gas on Jamacha Road? Flat tire on Bradley Ave? We bring fuel or swap your spare — no tow needed.",
    href: "/gas-delivery",
    icon: "⛽",
  },
];

/* ─── FAQ — El Cajon specific ─── */
const FAQ_DATA = [
  {
    q: "What's the fastest you can reach Downtown El Cajon?",
    a: "Our closest truck typically arrives at Downtown El Cajon in 12–18 minutes. We stage drivers near the I-8/Main Street interchange for rapid East County response, especially during the Wednesday night Cajon Classic Cruise when call volume spikes.",
  },
  {
    q: "Do you handle breakdowns at the I-8 and SR-67 interchange?",
    a: "Yes — this is one of our highest-volume call areas. The merge of I-8 and SR-67 sees frequent accidents and breakdowns, especially during commute hours. We coordinate with CHP and have trucks positioned to reach this interchange quickly from both directions.",
  },
  {
    q: "Can you tow from Parkway Plaza's parking structure?",
    a: "Absolutely. Our flatbed trucks fit inside Parkway Plaza's multi-level parking structure. We handle dead batteries, lockouts, and collision tows from the mall daily — including the covered parking levels that some companies won't service.",
  },
  {
    q: "What are your El Cajon towing rates?",
    a: "Local towing within El Cajon starts at $95 with $5 per additional mile. Jump starts are $65, lockouts are $65, and tire changes start at $75. We always quote the exact price before dispatching — no hidden fees, no surprises.",
  },
  {
    q: "Do you serve the Crest and Harbison Canyon areas?",
    a: "Yes. While technically unincorporated, Crest and Harbison Canyon are part of our El Cajon service zone. The mountain roads require experienced drivers and proper equipment — our trucks are winch-equipped for the steep terrain.",
  },
  {
    q: "Is there a fee for towing to local El Cajon auto shops?",
    a: "Your base towing fee covers up to 5 miles, which includes delivery to most El Cajon auto shops along Main Street, El Cajon Boulevard, and Fletcher Parkway. We work with dozens of local mechanics and can recommend trusted shops if needed.",
  },
];

/* ─── NEARBY AREAS ─── */
const NEARBY = [
  { name: "La Mesa", slug: "la-mesa" },
  { name: "Santee", slug: "santee" },
  { name: "Lakeside", slug: "lakeside" },
  { name: "Spring Valley", slug: "spring-valley" },
  { name: "Alpine", slug: "alpine" },
  { name: "Rancho San Diego", slug: "rancho-san-diego" },
  { name: "Lemon Grove", slug: "lemon-grove" },
  { name: "San Carlos", slug: "san-carlos" },
];

/* ════════════════════════════════════════════════════════════ */
/*  PAGE COMPONENT                                            */
/* ════════════════════════════════════════════════════════════ */
export default function ElCajonPage() {
  return (
    <main className="bg-stone-50">

      {/* ══════════ HERO — Full-bleed photo with cinematic overlays ══════════ */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden bg-[#1c1917]">
        {/* Real El Cajon towing photo */}
        <div className="absolute inset-0">
          <Image
            src="/hero/el-cajon-towing.webp"
            alt="CloseBy Towing truck servicing a vehicle at an El Cajon dealership"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-[#1c1917]/60 to-[#1c1917]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1917]/90 via-[#1c1917]/40 to-transparent" />
          {/* Warm golden tint for cohesion */}
          <div className="absolute inset-0 bg-amber-900/15 mix-blend-multiply" />
          {/* Vignette edges */}
          <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.5)]" />
        </div>

        {/* Mountain silhouette accent */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-15">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,120 L0,80 L120,40 L240,65 L360,25 L480,55 L600,15 L720,50 L840,20 L960,60 L1080,30 L1200,70 L1320,35 L1440,60 L1440,120 Z" fill="#a8744f" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-16 pt-32 sm:pb-24 sm:pt-40 w-full">
          {/* ZIP badge */}
          <div className="inline-flex items-center gap-2 bg-amber-900/40 backdrop-blur-sm border border-amber-700/40 rounded-full px-5 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-200 text-sm font-medium tracking-wide">
              92019 &bull; 92020 &bull; 92021
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] max-w-3xl">
            East County&apos;s
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 mt-2">
              Valley Towing Experts
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-stone-300 leading-relaxed max-w-2xl">
            Nestled in <span className="text-amber-300 font-semibold">&quot;The Box&quot;</span> — surrounded by mountains on three sides —
            El Cajon&apos;s geography means every minute counts when you&apos;re stranded. Our trucks are already in the valley, ready to roll.
          </p>

          {/* CTA row */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all hover:scale-105 relative overflow-hidden"
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
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.106 1.519 5.834L0 24l6.336-1.652A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.91 0-3.72-.508-5.313-1.453l-.381-.226-3.756.98.999-3.648-.25-.396A9.77 9.77 0 012.182 12C2.182 6.584 6.584 2.182 12 2.182S21.818 6.584 21.818 12 17.416 21.818 12 21.818z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Quick stats strip */}
          <div className="mt-10 flex flex-wrap gap-6 text-stone-400 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Dispatch active now
            </span>
            <span>24/7/365</span>
            <span>Licensed &amp; Insured</span>
            <span>Se Habla Espa&ntilde;ol</span>
            <span>Military Discount</span>
          </div>
        </div>
      </section>

      {/* ── REVIEWS — scrolling carousel ── */}
      <div className="relative z-20 -mt-12">
        <Reviews />
      </div>

      {/* ══════════ THE VALLEY — Geography narrative ══════════ */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        {/* Subtle topographic texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0C13.431 0 0 13.431 0 30c0 16.569 13.431 30 30 30 16.569 0 30-13.431 30-30C60 13.431 46.569 0 30 0zm0 55C16.193 55 5 43.807 5 30S16.193 5 30 5s25 11.193 25 25-11.193 25-25 25z' fill='%23000' fill-opacity='1'/%3E%3C/svg%3E")` }} />

        <div className="relative max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Why &quot;The Box&quot; Needs Local Drivers
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900">
              El Cajon Sits in a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Natural Valley
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-5 text-lg text-stone-600 leading-relaxed">
              <p>
                El Cajon&apos;s name comes from the Spanish <em>&quot;cajón&quot;</em> — a box or drawer — describing the valley enclosed
                by mountains on three sides. This geography channels traffic through a handful of corridors:
                <strong className="text-stone-800"> I-8 running east-west</strong>, <strong className="text-stone-800">SR-67 heading north</strong>, and
                local arterials like <strong className="text-stone-800">Fletcher Parkway</strong> and <strong className="text-stone-800">Main Street</strong>.
              </p>
              <p>
                When one of those corridors jams — an overheated engine climbing from the coast on I-8, a fender bender at the
                SR-67 merge, a flat tire leaving Parkway Plaza — the whole valley slows down. That&apos;s why we keep trucks
                <em> inside</em> the valley at all times. National chains dispatching from Mira Mesa or downtown can take
                45+ minutes to reach you. We&apos;re already here.
              </p>
              <p>
                From the <strong className="text-stone-800">Wednesday night Cajon Classic Cruise</strong> on Main Street to
                weekend swap meets at <strong className="text-stone-800">Gillespie Field</strong>, we know when and where El Cajon
                gets busy — and we staff accordingly.
              </p>
            </div>

            {/* Key corridors card */}
            <div className="bg-stone-900 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="font-bold text-lg mb-6 text-amber-400">Critical El Cajon Corridors</h3>
              <div className="space-y-4">
                {[
                  { road: "I-8 (East-West)", note: "15,000+ daily vehicles through El Cajon" },
                  { road: "SR-67 (North)", note: "Lakeside & Ramona commuter traffic" },
                  { road: "Fletcher Parkway", note: "Parkway Plaza to Grossmont area" },
                  { road: "Main Street", note: "Downtown core, Cajon Classic Cruise" },
                  { road: "Magnolia Avenue", note: "I-8 junction to residential neighborhoods" },
                  { road: "Jamacha Road", note: "South toward Rancho San Diego" },
                  { road: "El Cajon Boulevard", note: "Dealership row to La Mesa border" },
                  { road: "Bradley Avenue", note: "Bostonia corridor to SR-67" },
                ].map((c) => (
                  <div key={c.road} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-white">{c.road}</span>
                      <span className="text-stone-400 text-sm ml-2">— {c.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ VALLEY ZONES — neighborhood deep-dive ══════════ */}
      <section className="py-20 sm:py-28 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Zone-by-Zone Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900">
              Every Corner of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                El Cajon
              </span>
            </h2>
            <p className="mt-4 text-stone-600 text-lg max-w-2xl mx-auto">
              Six dispatch zones with dedicated response times. Our drivers don&apos;t use GPS to find your street — they already know it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALLEY_ZONES.map((z) => (
              <div
                key={z.zone}
                className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200 hover:border-amber-300 relative overflow-hidden"
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${z.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />

                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-xl text-stone-900 group-hover:text-amber-700 transition-colors">
                    {z.zone}
                  </h3>
                  <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
                    {z.eta}
                  </span>
                </div>

                <p className="text-stone-500 text-xs font-medium uppercase tracking-wider mb-3">
                  {z.streets}
                </p>

                <p className="text-stone-600 text-sm leading-relaxed">
                  {z.character}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ I-8 FREEWAY SECTION ══════════ */}
      <section className="py-20 sm:py-28 bg-stone-900 text-white relative overflow-hidden">
        {/* Road stripe accents */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-amber-500/30" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              Freeway Corridor Specialists
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
              I-8, SR-67 &amp;{" "}
              <span className="text-amber-400">SR-125</span>
            </h2>
            <p className="mt-4 text-stone-400 text-lg max-w-2xl mx-auto">
              Three freeways converge at El Cajon. We patrol all of them.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {FREEWAY_CORRIDORS.map((f) => (
              <div
                key={f.tag}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-amber-500/40 transition-all"
              >
                <div className="inline-flex items-center gap-2 bg-amber-500 text-stone-900 px-4 py-1.5 rounded-full font-black text-lg mb-5">
                  {f.tag}
                </div>
                <h3 className="font-bold text-lg text-white mb-3">{f.route}</h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-5">{f.role}</p>
                <div className="flex flex-wrap gap-2">
                  {f.exits.map((e) => (
                    <span
                      key={e}
                      className="text-xs bg-white/10 text-stone-300 px-3 py-1 rounded-full border border-white/10"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES — El Cajon specific ══════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
              What We Do in El Cajon
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900">
              Services Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                The Valley
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EC_SERVICES.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="group bg-stone-50 hover:bg-amber-50 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg border border-stone-200 hover:border-amber-300"
              >
                <span className="text-4xl block mb-4">{s.icon}</span>
                <h3 className="font-bold text-lg text-stone-900 group-hover:text-amber-700 transition-colors mb-2">
                  {s.name}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">{s.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TRUST DIFFERENTIATORS ══════════ */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "🏔️", label: "Valley-Based Trucks" },
              { icon: "⏱️", label: "15-25 Min Avg" },
              { icon: "🛡️", label: "Licensed & Insured" },
              { icon: "💰", label: "Upfront Pricing" },
              { icon: "🇺🇸", label: "Military Discount" },
              { icon: "🌙", label: "True 24/7 Service" },
            ].map((t) => (
              <div
                key={t.label}
                className="bg-white rounded-xl p-5 text-center shadow-sm border border-stone-200"
              >
                <span className="text-3xl block mb-2">{t.icon}</span>
                <span className="text-stone-700 text-sm font-semibold">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ NEARBY AREAS ══════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900">
              Also Serving{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                East County
              </span>
            </h2>
            <p className="mt-3 text-stone-600">Neighboring communities we reach in minutes.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {NEARBY.map((a) => (
              <Link
                key={a.slug}
                href={areaHref(a.slug)}
                className="group bg-stone-50 hover:bg-amber-50 rounded-xl p-5 text-center transition-all border border-stone-200 hover:border-amber-300 hover:shadow-md"
              >
                <span className="font-bold text-stone-800 group-hover:text-amber-700 transition-colors">{a.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="py-20 sm:py-28 bg-stone-100">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900">
              El Cajon Towing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">FAQ</span>
            </h2>
          </div>
          <div className="space-y-3">
            {FAQ_DATA.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-stone-50 transition-colors">
                  <h3 className="font-semibold text-stone-900 pr-8 text-left">{faq.q}</h3>
                  <svg
                    className="w-5 h-5 text-amber-500 transition-transform group-open:rotate-180 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-stone-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FINAL CTA ══════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-32">
            <path d="M0,120 L0,80 L120,40 L240,65 L360,25 L480,55 L600,15 L720,50 L840,20 L960,60 L1080,30 L1200,70 L1320,35 L1440,60 L1440,120 Z" fill="#a8744f" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-black">
            Stranded in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              El Cajon?
            </span>
          </h2>
          <p className="mt-6 text-xl text-stone-300">
            Our trucks are in the valley right now. One call and we&apos;re on our way.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all hover:scale-105 relative overflow-hidden"
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
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-stone-400 text-sm">
            <span>5.0 ★ Google Rating</span>
            <span>No Hidden Fees</span>
            <span>All Payment Methods</span>
            <span>Se Habla Español</span>
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
              { "@type": "ListItem", position: 3, name: "El Cajon", item: "https://www.closebytowing.com/el-cajon" },
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
            "@id": "https://www.closebytowing.com/el-cajon",
            name: "CloseBy Towing - El Cajon",
            description:
              "El Cajon tow truck service covering the entire valley — Downtown, Fletcher Hills, Bostonia, Granite Hills, Parkway Plaza & I-8 corridor. 24/7 dispatch.",
            url: "https://www.closebytowing.com/el-cajon",
            telephone: CONTACT.phone,
            areaServed: [
              { "@type": "PostalAddress", postalCode: "92019", addressLocality: "El Cajon", addressRegion: "CA" },
              { "@type": "PostalAddress", postalCode: "92020", addressLocality: "El Cajon", addressRegion: "CA" },
              { "@type": "PostalAddress", postalCode: "92021", addressLocality: "El Cajon", addressRegion: "CA" },
            ],
            geo: { "@type": "GeoCoordinates", latitude: 32.7948, longitude: -116.9625 },
            serviceType: ["Towing Service", "Roadside Assistance", "Flatbed Towing", "Lockout Service"],
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
