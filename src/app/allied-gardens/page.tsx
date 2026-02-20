
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { areaHref, CONTACT } from "@/lib/constants";

/* ─── Allied Gardens — "Built for Heroes" ───
   Design: CHP-inspired — bold two-tone color blocking, hard splits,
   large authoritative typography, flat solid colors, no gradients.
   Palette: Deep terracotta/rust (#7c2d12) + off-white + near-black.
   Clean, official, trustworthy. Zero startup gloss.
*/

const ZIP = "92120";

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
        url: "/neighborhoods/allied-gardens/hero-street.webp",
        width: 1920,
        height: 1080,
        alt: "Allied Gardens neighborhood street with mid-century homes",
      },
    ],
  },
  alternates: {
    canonical: "https://www.closebytowing.com/allied-gardens",
  },
};

// ── I-8 response data ──
const I8_ZONES = [
  { location: "I-8 at Waring Road", time: "8 min", note: "Main Allied Gardens interchange" },
  { location: "I-8 at Mission Gorge", time: "10 min", note: "Grantville commercial hub" },
  { location: "I-8 at College Avenue", time: "12 min", note: "Western gateway / SDSU" },
  { location: "Mission Gorge Road", time: "10 min", note: "2-mile commercial corridor" },
];

// ── Street-level coverage ──
const RESIDENTIAL_STREETS = [
  {
    name: "Waring Road",
    detail: "North-south spine. Speed limit 35, feels slower — kids on bikes, dog walkers, cars backing out of driveways. Our compact rig navigates without clipping mailboxes.",
  },
  {
    name: "Greenbrier Avenue",
    detail: "Home to Allied Gardens Rec Center. Wide residential blocks where most home-driveway calls originate. We know every house number range.",
  },
  {
    name: "Golfcrest Drive",
    detail: "Runs along the old Mission Trails Golf Course. Mature tree canopy, parked cars lining both sides. Tight but manageable for our experienced drivers.",
  },
  {
    name: "Orcutt & Zion Avenues",
    detail: "Southern border with Del Cerro. Hillier terrain, steeper driveways. We carry wheel chocks for inclined loading and know the tight turning radii.",
  },
];

const GRANTVILLE_LOCATIONS = [
  {
    name: "Grantville Trolley Station",
    detail: "Green Line park-and-ride, 400+ spaces. Dead batteries from all-day parking are the #1 call. We handle the bus loop and the shopping center across Mission Gorge too.",
  },
  {
    name: "Auto Row & Industrial",
    detail: "Mission Gorge Road between I-8 and Friars Road — auto dealers, body shops, light industrial. We move vehicles between shops and handle lot-to-lot transfers.",
  },
  {
    name: "Alvarado Medical Center",
    detail: "Alvarado Hospital on Alvarado Road. Emergency tows from the ER lot, visitor parking, and surrounding medical offices. Staff on late shifts are frequent callers.",
  },
];

// ── Services ──
const SERVICES = [
  {
    name: "I-8 Freeway Response",
    slug: "emergency-towing",
    text: "Breakdowns, accidents, and shoulder recoveries between College Ave and Mission Gorge — daily.",
  },
  {
    name: "Trolley Station Jump Starts",
    slug: "services/jump-start",
    text: "Grantville commuters leave cars 8-10 hours. Dome lights, old batteries, summer heat. We jump more cars here than almost any station in SD.",
  },
  {
    name: "Residential Lockouts",
    slug: "services/lockout",
    text: "1950s homes with narrow driveways, cars parked nose-in. We work carefully in tight spaces without scratching your vehicle or your neighbor's.",
  },
  {
    name: "Hillside Flatbed Towing",
    slug: "flatbed-towing",
    text: "The hills along Orcutt and the Del Cerro border mean steep driveways and grades. Inclined loading is critical when a car dies halfway up.",
  },
  {
    name: "Tire Changes",
    slug: "services/tire-change",
    text: "Mission Gorge Road construction debris and gravel shoulders puncture tires regularly. We carry standard sedan and SUV sizes.",
  },
];

// ── FAQ ──
const FAQ_DATA = [
  {
    q: "I'm stuck on I-8 near the Waring Road exit. How fast?",
    a: "Waring Road is our fastest zone — 8 to 10 minutes. We approach from Mission Gorge Road to avoid the backup. The off-ramp has a wide shoulder for safe loading.",
  },
  {
    q: "My car died at the Grantville Trolley park-and-ride after work.",
    a: "We get this call almost daily. 400+ vehicles park there and dead batteries are extremely common after a full day — especially in summer. We'll meet you at your car in 12-15 minutes.",
  },
  {
    q: "Do you know the narrow residential streets in Allied Gardens?",
    a: "Greenbrier, Golfcrest, Orcutt, Zion — we know which blocks have tight cul-de-sacs, which driveways are steep, and where we need the compact rig. Many homes were built in the 1950s with single-car driveways.",
  },
  {
    q: "Can you tow from Alvarado Hospital?",
    a: "Yes. ER parking, visitor lot, medical offices along Alvarado Canyon Road. Staff on late shifts with dead batteries are frequent callers. Usually there in 10 minutes.",
  },
  {
    q: "What about the Mission Gorge Road businesses?",
    a: "One of our most-serviced corridors. Dealerships, body shops, restaurants, retail. Lockouts, dead batteries, flat tires, tows, and lot-to-lot transfers — all day, every day.",
  },
];

// ── Nearby ──
const NEARBY = [
  { name: "Del Cerro", slug: "del-cerro", mi: "1" },
  { name: "San Carlos", slug: "san-carlos", mi: "2" },
  { name: "College Area", slug: "college-area", mi: "2" },
  { name: "Tierrasanta", slug: "tierrasanta", mi: "3" },
  { name: "Mission Valley", slug: "mission-valley", mi: "3" },
  { name: "La Mesa", slug: "la-mesa", mi: "3" },
];

export default function AlliedGardensPage() {
  return (
    <main>
      {/* ===== HERO — Diagonal split: navy left → gold stripe → photo right ===== */}
      <section className="relative min-h-[60vh] overflow-hidden">
        {/* Photo background — fills the entire hero, visible on the right */}
        <div className="absolute inset-0 hidden lg:block">
          <Image
            src="/neighborhoods/allied-gardens/hero-street.webp"
            alt="Allied Gardens neighborhood — mid-century homes and tree-lined streets in San Diego"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Navy overlay with diagonal clip — covers left ~55%, angled edge */}
        <div
          className="hidden lg:block absolute inset-0 bg-[#1e1e4a] z-10"
          style={{ clipPath: "polygon(0 0, 55% 0, 45% 100%, 0 100%)" }}
        />

        {/* Gold diagonal stripe — sits right along the angled edge */}
        <div
          className="hidden lg:block absolute inset-0 z-20"
          style={{ clipPath: "polygon(55% 0, 56% 0, 46% 100%, 45% 100%)" }}
        >
          <div className="w-full h-full bg-[#ffba42]" />
        </div>

        {/* Mobile: solid navy background */}
        <div className="absolute inset-0 lg:hidden bg-[#1e1e4a]" />

        {/* Text content — sits on top of everything */}
        <div className="relative z-30 flex min-h-[60vh]">
          <div className="w-full lg:w-1/2 flex items-center">
            <div className="max-w-2xl ml-auto px-6 sm:px-12 lg:px-16 py-20 lg:py-16 relative">
              {/* Identifier */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-amber-400" />
                <span className="text-amber-300 text-sm font-bold tracking-[0.2em] uppercase">
                  Est. 1955 &bull; ZIP {ZIP}
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
                Allied
                <br />
                Gardens
              </h1>

              <p className="mt-6 text-2xl font-bold text-amber-300">
                Towing & Roadside Assistance
              </p>

              <p className="mt-6 text-lg text-blue-100/80 leading-relaxed max-w-lg">
                San Diego&apos;s original veteran-built neighborhood. Mid-century ranch homes under a canopy of oaks,
                the I-8 corridor at the front door, and 7,220 acres of Mission Trails wilderness out the back.
                We&apos;ve been towing these streets for years.
              </p>

              {/* Hard stat blocks */}
              <div className="mt-10 flex gap-0">
                <div className="bg-[#161638] px-6 py-4 border-r border-[#2a2a5a]">
                  <div className="text-3xl font-black text-white">15</div>
                  <div className="text-xs text-amber-400 font-semibold uppercase tracking-wide mt-1">Min Response</div>
                </div>
                <div className="bg-[#161638] px-6 py-4 border-r border-[#2a2a5a]">
                  <div className="text-3xl font-black text-white">I-8</div>
                  <div className="text-xs text-amber-400 font-semibold uppercase tracking-wide mt-1">Corridor</div>
                </div>
                <div className="bg-[#161638] px-6 py-4">
                  <div className="text-3xl font-black text-white">24/7</div>
                  <div className="text-xs text-amber-400 font-semibold uppercase tracking-wide mt-1">Year-Round</div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-3 bg-amber-400 text-[#1e1e4a] px-8 py-4 font-black text-lg tracking-wide hover:bg-amber-300 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {CONTACT.phone}
                </a>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 border-2 border-amber-400 text-amber-200 px-8 py-4 font-bold text-lg hover:bg-[#2a2a5a] transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CLOSEBY TOWING — Orange trust band ===== */}
      <section className="bg-[#ffba42] py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1e1e4a] mb-2">
            Why CloseBy Towing?
          </h2>
          <p className="text-base sm:text-lg text-[#1e1e4a]/70 mb-8">
            Trustworthy, fast, and upfront — exactly when you need it most.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5">
            {[
              { icon: "🕑", title: "24/7 San Diego Dispatch", desc: "Call anytime — we're ready day or night." },
              { icon: "✅", title: "Licensed & Insured", desc: "Professional drivers and covered operations." },
              { icon: "💵", title: "Upfront, Fair Pricing", desc: "Clear quotes before we roll." },
              { icon: "⚡", title: "Fast ETAs", desc: "Local routes for quicker arrivals." },
              { icon: "🛡️", title: "Damage-Free Equipment", desc: "Soft straps, dollies, and careful loading." },
              { icon: "🚚", title: "Flatbed & Wheel-Lift", desc: "Right truck for your vehicle and situation." },
              { icon: "💳", title: "Card or Cash Accepted", desc: "Pay the way that's easiest for you." },
              { icon: "⭐", title: "5-Star Rated Locally", desc: "Customers trust CloseBy Towing." },
            ].map((p) => (
              <div key={p.title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-xl sm:text-2xl shrink-0 shadow-md">
                  <span aria-hidden="true">{p.icon}</span>
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-[#1e1e4a] leading-tight">{p.title}</div>
                  <div className="mt-1 text-sm text-[#1e1e4a]/70">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEIGHBORHOOD STORY — Clean typographic block ===== */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-0.5 bg-[#1e1e4a]" />
            <span className="text-[#1e1e4a] text-sm font-bold tracking-[0.2em] uppercase">The Neighborhood</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight max-w-3xl">
            Built for veterans in 1955.
            <br />
            Still standing strong.
          </h2>

          <div className="mt-10 grid lg:grid-cols-3 gap-12 text-lg text-slate-700 leading-relaxed">
            <p>
              <strong className="text-slate-900">Allied Gardens was built for heroes.</strong> After World War II and the Korean War,
              rows of affordable ranch homes went up along Waring Road, Greenbrier Avenue, and Golfcrest Drive for returning
              servicemembers. The name &quot;Allied&quot; honors the Allied forces. Many original homes still stand with their
              mid-century character intact.
            </p>
            <p>
              Today, Allied Gardens is one of San Diego&apos;s most livable mid-city neighborhoods. The tree canopy that returning
              veterans planted has matured into a shaded urban forest. First-time buyers share these blocks with families who&apos;ve
              been here for generations. The Rec Center on Greenbrier is still the community&apos;s living room.
            </p>
            <p>
              And at the end of the block, 7,220 acres of wilderness. <strong className="text-slate-900">Mission Trails Regional
              Park</strong> — one of the largest urban parks in the country — begins where Allied Gardens ends. Cowles Mountain,
              the Visitor Center, and Father Junipero Serra Trail are all a short walk from residential streets.
            </p>
          </div>
        </div>
      </section>

      {/* ===== I-8 CORRIDOR — Dark authoritative data block ===== */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-0.5 bg-amber-400" />
            <span className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase">Freeway Response</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            The I-8 Corridor
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl">
            Interstate 8 cuts through Allied Gardens and Grantville. Breakdowns, fender benders, and overheated
            engines on the eastbound grade are a daily reality. We cover every on-ramp and off-ramp across 3 miles.
          </p>

          {/* Clean data table */}
          <div className="mt-12 border-t border-slate-700">
            {I8_ZONES.map((zone) => (
              <div
                key={zone.location}
                className="flex items-center justify-between py-5 border-b border-slate-800 hover:bg-slate-800/50 transition-colors px-2"
              >
                <div>
                  <div className="text-lg font-bold text-white">{zone.location}</div>
                  <div className="text-sm text-slate-500 mt-0.5">{zone.note}</div>
                </div>
                <div className="text-2xl font-black text-amber-400">{zone.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STREET COVERAGE — Two-column, residential + commercial ===== */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-0.5 bg-[#1e1e4a]" />
            <span className="text-[#1e1e4a] text-sm font-bold tracking-[0.2em] uppercase">Street-Level Knowledge</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
            Two neighborhoods in one.
          </h2>

          <div className="mt-12 grid lg:grid-cols-2 gap-16">
            {/* Residential */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-[#1e1e4a] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-wide">Allied Gardens Residential</h3>
              </div>

              <div className="space-y-8">
                {RESIDENTIAL_STREETS.map((s) => (
                  <div key={s.name} className="border-l-2 border-[#1e1e4a] pl-6">
                    <h4 className="font-bold text-slate-900 text-lg">{s.name}</h4>
                    <p className="mt-1 text-slate-600 leading-relaxed">{s.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Commercial */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-slate-900 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-wide">Grantville Commercial</h3>
              </div>

              <div className="space-y-8">
                {GRANTVILLE_LOCATIONS.map((s) => (
                  <div key={s.name} className="border-l-2 border-slate-900 pl-6">
                    <h4 className="font-bold text-slate-900 text-lg">{s.name}</h4>
                    <p className="mt-1 text-slate-600 leading-relaxed">{s.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES — Clean list, no cards ===== */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-0.5 bg-[#1e1e4a]" />
            <span className="text-[#1e1e4a] text-sm font-bold tracking-[0.2em] uppercase">Services</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
            What Allied Gardens calls us for.
          </h2>

          <div className="mt-12 border-t border-stone-300">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={service.slug.startsWith("services/") ? `/${service.slug}` : `/san-diego/${service.slug}`}
                className="group flex items-start justify-between gap-8 py-6 border-b border-stone-300 hover:bg-stone-200/50 transition-colors px-2"
              >
                <div className="flex items-start gap-5">
                  <span className="text-[#1e1e4a] font-black text-lg mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1e1e4a] transition-colors">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-slate-600 leading-relaxed max-w-xl">{service.text}</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-slate-400 group-hover:text-[#1e1e4a] transition-all group-hover:translate-x-1 flex-shrink-0 mt-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ — Minimal accordion ===== */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-0.5 bg-[#1e1e4a]" />
            <span className="text-[#1e1e4a] text-sm font-bold tracking-[0.2em] uppercase">FAQ</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-12">
            Common questions.
          </h2>

          <div className="border-t border-slate-200">
            {FAQ_DATA.map((faq, i) => (
              <details key={i} className="group border-b border-slate-200">
                <summary className="flex items-center justify-between py-6 cursor-pointer px-2">
                  <h3 className="font-bold text-slate-900 pr-8 text-lg">{faq.q}</h3>
                  <svg
                    className="w-5 h-5 text-[#1e1e4a] flex-shrink-0 transition-transform group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </summary>
                <div className="pb-6 px-2">
                  <p className="text-slate-600 leading-relaxed max-w-3xl">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEARBY AREAS — Clean grid ===== */}
      <section className="bg-stone-100 py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-wide mb-8">
            Also Serving
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {NEARBY.map((area) => (
              <Link
                key={area.slug}
                href={areaHref(area.slug)}
                className="group bg-white py-4 px-5 text-center border border-stone-200 hover:border-[#1e1e4a] transition-colors"
              >
                <div className="font-bold text-slate-900 group-hover:text-[#1e1e4a] transition-colors">
                  {area.name}
                </div>
                <div className="text-xs text-slate-500 mt-1">{area.mi} mi</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA — Hard two-tone split ===== */}
      <section className="flex flex-col lg:flex-row">
        {/* Left — dark */}
        <div className="w-full lg:w-1/2 bg-slate-900 py-20 px-6 sm:px-12 flex items-center justify-end">
          <div className="max-w-lg lg:mr-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Stranded in
              <br />
              Allied Gardens?
            </h2>
            <p className="mt-6 text-lg text-slate-400">
              From I-8 shoulders to Grantville parking lots to your own driveway on Greenbrier.
              One call. We&apos;re on our way.
            </p>
          </div>
        </div>

        {/* Right — navy */}
        <div className="w-full lg:w-1/2 bg-[#1e1e4a] py-20 px-6 sm:px-12 flex items-center">
          <div className="max-w-lg lg:ml-16">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-3 bg-amber-400 text-[#1e1e4a] px-10 py-5 font-black text-xl tracking-wide hover:bg-amber-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {CONTACT.phone}
            </a>

            <div className="mt-10 flex flex-col gap-4 text-blue-200/80">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-amber-400" />
                <span className="font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-amber-400" />
                <span className="font-semibold">5-Star Google Rating</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-amber-400" />
                <span className="font-semibold">24/7 East San Diego Service</span>
              </div>
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
            image: "https://www.closebytowing.com/neighborhoods/allied-gardens/hero-street.webp",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Allied Gardens",
              addressRegion: "CA",
              postalCode: ZIP,
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 32.7637,
              longitude: -117.0892,
            },
            areaServed: {
              "@type": "PostalAddress",
              postalCode: ZIP,
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
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
