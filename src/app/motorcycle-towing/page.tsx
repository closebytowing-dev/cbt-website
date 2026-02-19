
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import Reviews from "@/components/Reviews";

/* ─── SEO METADATA ─── */
export const metadata: Metadata = {
  title: "Motorcycle Towing San Diego | Safe Bike Transport 24/7 | CloseBy Towing",
  description:
    "Motorcycle towing San Diego — specialized flatbed & wheel-lift equipment for sport bikes, Harleys, cruisers & dirt bikes. No damage guaranteed. Starting at $65. 20-30 min response. Call (858) 999-9293.",
  keywords:
    "motorcycle towing San Diego, motorcycle transport San Diego, bike tow truck, Harley towing, sport bike towing, motorcycle breakdown San Diego, motorcycle accident towing, dirt bike towing",
  openGraph: {
    title: "Motorcycle Towing San Diego | Safe Bike Transport 24/7 | CloseBy Towing",
    description:
      "Specialized motorcycle towing across San Diego. Flatbed & wheel-lift equipment, no damage guaranteed. Starting at $65.",
    url: "https://www.closebytowing.com/motorcycle-towing",
    type: "website",
  },
  alternates: { canonical: "https://www.closebytowing.com/motorcycle-towing" },
};

/* ─── BIKE TYPES ─── */
const BIKE_TYPES = [
  {
    type: "Sport Bikes",
    examples: "Yamaha R1, Kawasaki Ninja, Honda CBR, Suzuki GSX-R, Ducati Panigale",
    detail:
      "Low-clearance fairings and clip-on bars require careful loading technique. Our soft-strap tie-down system secures your sport bike without contact to painted bodywork or carbon fiber.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    type: "Harleys & Cruisers",
    examples: "Road King, Street Glide, Softail, Indian Chief, Vulcan, Boulevard",
    detail:
      "Heavy touring bikes up to 900+ lbs are no problem. Our hydraulic flatbed ramp and winch handle the weight safely. Saddlebags, windshields, and chrome stay untouched.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    type: "Dirt Bikes & Dual Sport",
    examples: "CRF450, KTM EXC, WR250, DRZ400, KLR 650",
    detail:
      "Coming back from Anza-Borrego or Otay Mountain with a broken chain or blown fork seal? We pick up dirt bikes trailside and transport them home or to your mechanic.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    type: "Trikes & Scooters",
    examples: "Can-Am Spyder, Harley Tri Glide, Vespa, Honda PCX, Yamaha XMAX",
    detail:
      "Three-wheelers need wider deck space. Scooters need delicate handling. We have the right straps and chocks for every configuration — no bike is too small or too unusual.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

/* ─── COMMON SCENARIOS ─── */
const SCENARIOS = [
  {
    title: "Freeway Breakdown",
    description:
      "Chain snaps on I-5, overheating on I-15, or flat tire on I-8 — freeway breakdowns are dangerous on two wheels. We arrive with full LED safety lighting, traffic cones, and a flatbed to get your bike off the shoulder fast.",
    freeways: "I-5, I-8, I-15, SR-163, SR-56",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
  },
  {
    title: "Accident Recovery",
    description:
      "Motorcycle accidents require extra care. We photograph damage before loading, use soft straps to avoid further harm, and coordinate with insurance companies. Your bike gets treated like evidence — handled with precision.",
    freeways: "All San Diego roads",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0H21M3.375 14.25h17.25M3.375 14.25V6.75A1.125 1.125 0 0 1 4.5 5.625h7.5" />
      </svg>
    ),
  },
  {
    title: "Dead Battery",
    description:
      "Left the key on at a Gaslamp parking garage? Battery drained overnight in Pacific Beach? We'll attempt a jump start first — and if the battery is beyond help, we tow your bike to your home or shop.",
    freeways: "Citywide",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z" />
      </svg>
    ),
  },
  {
    title: "Flat Tire on the Road",
    description:
      "Most motorcycles don't carry a spare. A nail on the 163 or a blowout on Friars Road means you're stuck. We load your bike on our flatbed and deliver it to the nearest tire shop or your preferred mechanic.",
    freeways: "SR-163, Friars Rd, El Cajon Blvd",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
  },
];

/* ─── FAQ ─── */
const FAQ_DATA = [
  {
    question: "How do you secure a motorcycle on the flatbed?",
    answer:
      "We use motorcycle-specific wheel chocks that lock your front tire in place, combined with ratchet soft-loop straps attached to the handlebars, frame, and rear axle. Soft loops prevent any chrome or paint scratching. Your bike is secured at four points minimum — it's not moving an inch during transport.",
  },
  {
    question: "How much does motorcycle towing cost in San Diego?",
    answer:
      "Motorcycle towing starts at $65 for local San Diego pickups. Final price depends on distance, time of day, and pickup location (freeway recovery may include a safety surcharge). You get an exact quote before we dispatch — no surprises on your bill.",
  },
  {
    question: "Can you tow a motorcycle that's been in an accident?",
    answer:
      "Yes. We handle accident-damaged motorcycles with extra care. We photograph the damage for insurance documentation, use specialized loading techniques for bikes with bent frames or missing fairings, and transport to the body shop, impound lot, or your home — wherever you need it.",
  },
  {
    question: "Do you tow Harley-Davidsons and heavy touring bikes?",
    answer:
      "Absolutely. Our flatbed ramp and hydraulic winch handle bikes up to 1,000+ lbs. Road Kings, Street Glides, Gold Wings, Indian Chieftains — we tow heavy touring bikes daily. Saddlebags, tour packs, and windshields stay on and stay protected.",
  },
  {
    question: "How fast can you get to me?",
    answer:
      "Our average response time across San Diego is 20–30 minutes. Freeway breakdowns on I-5, I-8, or I-15 are often faster because we have trucks positioned along major corridors. We dispatch the closest available truck the moment you call.",
  },
  {
    question: "Can you transport my motorcycle long distance?",
    answer:
      "Yes. We handle long-distance motorcycle transport across California and beyond. Whether you bought a bike in LA, need to ship to a specialty shop in Orange County, or are relocating — we offer enclosed and open flatbed options for long hauls.",
  },
  {
    question: "Do you tow dirt bikes and off-road motorcycles?",
    answer:
      "We do. Broken down after a ride in Anza-Borrego, Otay Mountain, or the Corral Canyon OHV area? We'll pick up your dirt bike trailside (as close as our truck can safely reach) and transport it home or to your mechanic.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards (Visa, Mastercard, Amex, Discover), cash, Apple Pay, Google Pay, and Zelle. Payment is collected after your motorcycle is safely delivered — never before.",
  },
];

/* ─── SAN DIEGO COVERAGE AREAS ─── */
const COVERAGE_AREAS = [
  "Downtown", "Pacific Beach", "Ocean Beach", "Mission Beach", "La Jolla",
  "Point Loma", "Hillcrest", "North Park", "Kearny Mesa", "Mira Mesa",
  "Clairemont", "Mission Valley", "El Cajon", "La Mesa", "Chula Vista",
  "National City", "Poway", "Santee", "Spring Valley", "Coronado",
  "Encinitas", "Del Mar", "Rancho Bernardo", "Scripps Ranch", "Carmel Valley",
];

export default function MotorcycleTowingPage() {
  return (
    <main className="bg-gray-50">

      {/* ══════════ HERO — Real Photo + Chrome Steel ══════════ */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden bg-[#0c0c0f]">
        {/* Real motorcycle towing photo — Harley on flatbed at night */}
        <div className="absolute inset-0">
          <Image
            src="/hero/motorcycle-towing.webp"
            alt="Harley-Davidson motorcycle secured on CloseBy Towing flatbed at night in San Diego"
            fill
            priority
            className="object-cover object-[center_40%]"
            sizes="100vw"
            style={{ filter: "brightness(1.1) contrast(1.05)" }}
          />
        </div>

        {/* Overlays — photo is dark, keep it light for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0f]/80 via-[#0c0c0f]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0f]/95 via-[#0c0c0f]/20 to-transparent" />

        {/* Chrome headlight glow — picks up the Harley's dual headlamps */}
        <div className="absolute top-[30%] right-[35%] w-[400px] h-[300px] bg-white/4 rounded-full blur-[100px]" />

        {/* Warm city-light reflection along bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-amber-500/5 to-transparent" />

        {/* Bottom edge — sharp diamond-plate inspired angular cut */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full h-16 sm:h-24">
            {/* Back shadow layer */}
            <path d="M0,90 L0,60 L240,30 L480,50 L720,15 L960,45 L1200,20 L1440,40 L1440,90Z" fill="#0c0c0f" opacity="0.4" />
            {/* Main cut */}
            <path d="M0,90 L0,65 L360,25 L720,50 L1080,12 L1440,42 L1440,90Z" fill="#f9fafb" />
          </svg>
        </div>

        {/* Content — positioned bottom-left */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-32 sm:pb-40 pt-36 sm:pt-44 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-zinc-500/20 rounded-full px-5 py-2 mb-6">
              <span className="text-zinc-300 text-sm font-semibold tracking-wide">Specialized Motorcycle Transport</span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
              <span className="text-white">Motorcycle</span>
              <br />
              <span className="text-white">Towing</span>
              <br />
              <span className="bg-gradient-to-r from-zinc-300 via-white to-zinc-400 bg-clip-text text-transparent">
                San Diego
              </span>
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-xl">
              Specialized <span className="text-white font-semibold">flatbed &amp; wheel-lift equipment</span> built
              for motorcycles. No damage to your bike — guaranteed. Serving{" "}
              <span className="text-white font-semibold">all San Diego</span> 24/7.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              {[
                { value: "$65", label: "Starting At" },
                { value: "20 min", label: "Avg Response" },
                { value: "24/7", label: "Always On" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 rounded-xl p-3 sm:p-4 text-center border border-zinc-700/50">
                  <div className="text-2xl sm:text-3xl font-black text-white">{s.value}</div>
                  <div className="text-xs text-zinc-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-zinc-100 text-zinc-900 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-white/10"
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
                className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-zinc-700"
              >
                WhatsApp Us
              </a>
            </div>

            {/* Trust line */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                5.0 Stars
              </span>
              <span>No Damage Guarantee</span>
              <span>Licensed &amp; Insured</span>
              <span>Soft-Strap System</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <div className="relative z-20 -mt-8">
        <Reviews />
      </div>

      {/* ══════════ WHY SPECIALIZED MOTORCYCLE TOWING ══════════ */}
      <section className="py-20 sm:py-28 bg-white relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-zinc-500 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Purpose-Built for Bikes
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-zinc-900">
              Why Regular Tow Trucks{" "}
              <span className="bg-gradient-to-r from-zinc-600 to-zinc-400 bg-clip-text text-transparent">
                Damage Motorcycles
              </span>
            </h2>
            <p className="mt-6 text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed">
              Standard tow trucks use chains, hooks, and dollies designed for cars. On a motorcycle, that means
              scratched chrome, cracked fairings, bent handlebars, and damaged exhaust. CloseBy uses{" "}
              <strong>motorcycle-specific equipment</strong> — wheel chocks, soft-loop straps, and hydraulic flatbed ramps —
              so your bike arrives in the same condition we found it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Wheel Chocks",
                desc: "Front wheel locks into a steel chock bolted to our flatbed deck. Your bike stands upright without anyone holding it.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                title: "Soft-Loop Straps",
                desc: "Nylon loops wrap around handlebars and frame without touching paint or chrome. Ratchet tension holds firm without crushing.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
              },
              {
                title: "Hydraulic Flatbed Ramp",
                desc: "Low-angle loading ramp means your bike rolls on gently. No dragging, no lifting, no risk of a drop.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12l2 5h-1.5M8 7H6m2 0v5m6-5v5m-6 0h6m-6 0H4.5M14 12h3.5M4.5 12a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm13 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-gradient-to-b from-zinc-50 to-white border border-zinc-200 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-zinc-100 text-zinc-700 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-zinc-900 text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ BIKE TYPES WE TOW ══════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-zinc-500 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Every Bike, Every Brand
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-zinc-900">
              Motorcycles We{" "}
              <span className="bg-gradient-to-r from-zinc-600 to-zinc-400 bg-clip-text text-transparent">Tow</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {BIKE_TYPES.map((b) => (
              <div
                key={b.type}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-zinc-100 hover:shadow-lg hover:border-zinc-300 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-zinc-500/20">
                  {b.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-1">{b.type}</h3>
                <p className="text-xs text-zinc-400 font-medium mb-3 tracking-wide">{b.examples}</p>
                <p className="text-zinc-600 text-sm leading-relaxed">{b.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ COMMON SCENARIOS ══════════ */}
      <section className="py-20 sm:py-28 bg-[#1c1c1f] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-500/5 rounded-full blur-[120px]" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-zinc-400 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              When You Need Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-black">
              Common{" "}
              <span className="bg-gradient-to-r from-zinc-300 to-white bg-clip-text text-transparent">
                Motorcycle Emergencies
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {SCENARIOS.map((s) => (
              <div
                key={s.title}
                className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-zinc-500/30 transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 text-white mb-4">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-3">{s.description}</p>
                <span className="inline-block bg-white/10 text-zinc-300 text-xs font-semibold px-3 py-1 rounded-full">
                  {s.freeways}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PRICING ══════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-zinc-500 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Transparent Pricing
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-zinc-900">
              Motorcycle Towing{" "}
              <span className="bg-gradient-to-r from-zinc-600 to-zinc-400 bg-clip-text text-transparent">Rates</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-zinc-50 to-white rounded-3xl p-8 sm:p-12 border border-zinc-200 shadow-sm">
            <div className="text-center mb-8">
              <div className="text-lg text-zinc-500 mb-2">Starting at</div>
              <div className="text-7xl sm:text-8xl font-black text-zinc-900">
                $65
              </div>
              <div className="text-zinc-500 mt-2">Local San Diego motorcycle tow</div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
              {[
                "Upfront price before dispatch",
                "No hidden fees or surcharges",
                "Credit, debit, cash, Apple Pay",
                "Insurance billing available",
                "Military & first responder discount",
                "Pay after delivery — not before",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-zinc-700 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-zinc-600">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Get Your Exact Price
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ COVERAGE AREAS ══════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-zinc-500 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              All San Diego
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-zinc-900">
              Motorcycle Towing{" "}
              <span className="bg-gradient-to-r from-zinc-600 to-zinc-400 bg-clip-text text-transparent">Coverage</span>
            </h2>
            <p className="mt-4 text-zinc-500">
              We tow motorcycles across every neighborhood in San Diego County.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {COVERAGE_AREAS.map((area) => (
              <span
                key={area}
                className="bg-white border border-zinc-200 text-zinc-700 font-medium text-sm px-4 py-2 rounded-full hover:border-zinc-400 hover:bg-zinc-50 transition-all"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-zinc-500 font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Common Questions
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-zinc-900">
              Motorcycle Towing{" "}
              <span className="bg-gradient-to-r from-zinc-600 to-zinc-400 bg-clip-text text-transparent">FAQ</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <details
                key={i}
                className="group bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-zinc-100/80 transition-colors">
                  <h3 className="font-semibold text-zinc-900 pr-8">{faq.question}</h3>
                  <svg className="w-5 h-5 text-zinc-400 transition-transform group-open:rotate-180 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-zinc-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FINAL CTA ══════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#18181b] via-[#27272a] to-[#1c1c1f] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-zinc-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">
            Bike Broke Down in{" "}
            <span className="bg-gradient-to-r from-zinc-300 via-white to-zinc-400 bg-clip-text text-transparent">
              San Diego?
            </span>
          </h2>
          <p className="mt-6 text-xl text-zinc-400 max-w-2xl mx-auto">
            Don&apos;t trust your motorcycle to a generic tow truck.
            Call the specialists — we&apos;ll be there in 20 minutes.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-zinc-100 text-zinc-900 px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg shadow-white/10"
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
              className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all border border-zinc-700"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-zinc-500 text-sm">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              5.0 Google Stars
            </span>
            <span>No Damage Guarantee</span>
            <span>Licensed &amp; Insured</span>
            <span>Starting at $65</span>
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
              { "@type": "ListItem", position: 2, name: "Motorcycle Towing San Diego", item: "https://www.closebytowing.com/motorcycle-towing" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.closebytowing.com/motorcycle-towing",
            name: "Motorcycle Towing San Diego",
            description:
              "Specialized motorcycle towing service in San Diego. Flatbed and wheel-lift equipment for sport bikes, Harleys, cruisers, dirt bikes, and trikes. No damage guaranteed. 20-30 minute response.",
            url: "https://www.closebytowing.com/motorcycle-towing",
            provider: {
              "@type": "LocalBusiness",
              name: "CloseBy Towing",
              telephone: CONTACT.phone,
              areaServed: {
                "@type": "City",
                name: "San Diego",
                containedInPlace: { "@type": "County", name: "San Diego County" },
              },
            },
            serviceType: "Motorcycle Towing",
            offers: {
              "@type": "Offer",
              price: "65",
              priceCurrency: "USD",
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "65",
                priceCurrency: "USD",
                description: "Starting price for local motorcycle tow in San Diego",
              },
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
