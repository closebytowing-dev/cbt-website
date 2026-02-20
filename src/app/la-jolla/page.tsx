
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { areaHref, CONTACT } from "@/lib/constants";

// La Jolla ZIP Codes
const LA_JOLLA_ZIP_CODES = ["92037", "92038", "92039", "92092", "92093"];

// SEO Metadata - Unique for La Jolla
export const metadata: Metadata = {
  title: "La Jolla Towing Services | The Jewel of San Diego | 24/7 Premium Care",
  description:
    "Premium towing in La Jolla 92037. Serving La Jolla Cove, Torrey Pines, Bird Rock, UCSD, and The Village. Luxury vehicle specialists with white-glove flatbed service. 15-min response.",
  keywords:
    "towing La Jolla, La Jolla tow truck, luxury towing 92037, La Jolla Cove towing, Torrey Pines roadside, UCSD towing, Bird Rock tow service, La Jolla Shores emergency, exotic car towing La Jolla",
  openGraph: {
    title: "La Jolla Towing | The Jewel Deserves Premium Service | CloseBy",
    description:
      "San Diego's most prestigious neighborhood deserves premium towing. Flatbed specialists for luxury, exotic, and classic vehicles. La Jolla Cove to Torrey Pines coverage.",
    url: "https://www.closebytowing.com/la-jolla",
    type: "website",
    images: [
      {
        url: "/neighborhoods/la-jolla/hero-cove.webp",
        width: 1920,
        height: 1276,
        alt: "La Jolla coastline - Premium towing services",
      },
    ],
  },
  alternates: {
    canonical: "https://www.closebytowing.com/la-jolla",
  },
};

// La Jolla's iconic locations with detailed descriptions
const ICONIC_LOCATIONS = [
  {
    name: "La Jolla Cove",
    description: "California's most photographed coastline. We navigate the steep Prospect Street descent and handle beach parking emergencies with care.",
    image: "/neighborhoods/la-jolla/coastal-cliffs.webp",
    stats: "1M+ Annual Visitors",
  },
  {
    name: "Torrey Pines",
    description: "From the legendary golf course to the State Natural Reserve's clifftop trails. Expert service on North Torrey Pines Road's scenic curves.",
    image: "/neighborhoods/la-jolla/torrey-pines.webp",
    stats: "300-ft Coastal Cliffs",
  },
  {
    name: "The Village",
    description: "Boutique shopping on Girard Avenue, fine dining on Prospect. We know every narrow street and parking structure in downtown La Jolla.",
    image: "/neighborhoods/la-jolla/luxury-coastal.webp",
    stats: "Est. 1894",
  },
  {
    name: "Bird Rock",
    description: "La Jolla's laid-back southern neighborhood. Quick response along La Jolla Boulevard from Tourmaline to Calumet Park.",
    image: "/neighborhoods/la-jolla/ocean-sunset.webp",
    stats: "Historic Surf Spot",
  },
];

// La Jolla landmarks for coverage
const LOCAL_LANDMARKS = [
  {
    name: "La Jolla Shores Beach",
    description: "Mile-long sandy beach, Kellogg Park parking, kayak launch area",
    icon: "🏖️",
    response: "12 min",
  },
  {
    name: "UCSD Campus",
    description: "35,000 students, Geisel Library, medical center complex",
    icon: "🎓",
    response: "10 min",
  },
  {
    name: "Westfield UTC",
    description: "Premier shopping center, underground parking, valet areas",
    icon: "🛍️",
    response: "8 min",
  },
  {
    name: "Scripps Pier",
    description: "Iconic research pier, Ellen Browning Scripps Park parking",
    icon: "🔬",
    response: "14 min",
  },
  {
    name: "Mount Soledad",
    description: "National Veterans Memorial, panoramic viewpoint, winding roads",
    icon: "🏔️",
    response: "15 min",
  },
  {
    name: "Birch Aquarium",
    description: "Scripps Institution of Oceanography, hillside parking lots",
    icon: "🐠",
    response: "12 min",
  },
];

// Nearby neighborhoods for internal linking
const NEARBY_AREAS = [
  { name: "Pacific Beach", slug: "pacific-beach", distance: "3 mi" },
  { name: "Del Mar", slug: "del-mar", distance: "5 mi" },
  { name: "University City", slug: "university-city", distance: "2 mi" },
  { name: "Clairemont", slug: "clairemont", distance: "4 mi" },
  { name: "Mission Beach", slug: "mission-beach", distance: "5 mi" },
  { name: "Point Loma", slug: "point-loma", distance: "8 mi" },
];

// Premium services for La Jolla
const PREMIUM_SERVICES = [
  {
    name: "Luxury Flatbed Towing",
    slug: "flatbed-towing",
    description: "Enclosed-style flatbed transport for Ferrari, Lamborghini, Porsche, and all premium vehicles",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    name: "24/7 Emergency Response",
    slug: "emergency-towing",
    description: "Round-the-clock service for La Jolla's active nightlife and early beach-goers",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Beach Recovery",
    slug: "winch-out",
    description: "Specialized sand extraction for vehicles stuck at La Jolla Shores and Windansea",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    name: "Roadside Assistance",
    slug: "roadside-assistance",
    description: "Jump starts, lockouts, fuel delivery, and tire changes anywhere in La Jolla",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

// FAQ specific to La Jolla
const FAQ_DATA = [
  {
    question: "Do you specialize in luxury and exotic vehicle towing in La Jolla?",
    answer:
      "Absolutely. La Jolla has one of the highest concentrations of luxury vehicles in San Diego County. Our fleet includes specialized flatbed tow trucks with soft straps, wheel nets, and low-angle loading for low-clearance exotics. We regularly transport Ferrari, Lamborghini, McLaren, Bentley, and Rolls-Royce vehicles. Every driver is trained in proper supercar handling protocols.",
  },
  {
    question: "What's your response time to La Jolla Cove and the Village area?",
    answer:
      "We typically reach La Jolla Cove, Prospect Street, and the Village shopping district within 12-15 minutes. We're familiar with the one-way streets, limited parking zones, and steep grades around Coast Boulevard. For beach emergencies at the Cove or Children's Pool, we have drivers who know the best access points.",
  },
  {
    question: "Can you help with vehicles stuck in sand at La Jolla Shores?",
    answer:
      "Yes, beach vehicle recovery is one of our specialties. La Jolla Shores, Windansea, and Marine Street Beach occasionally see vehicles venture too far onto soft sand. We use specialized winching equipment and sand recovery boards to safely extract vehicles without causing additional damage.",
  },
  {
    question: "Do you service the UCSD campus and medical center?",
    answer:
      "We provide 24/7 service to all UCSD facilities including the main campus, Scripps Institution of Oceanography, Moores Cancer Center, and Jacobs Medical Center. We're familiar with the campus parking structures and know which roads allow commercial vehicle access. Student, staff, and visitor vehicles are all welcome.",
  },
  {
    question: "Are you available for Torrey Pines golf tournaments and events?",
    answer:
      "Yes, we've provided towing services during Farmers Insurance Open and other major events at Torrey Pines Golf Course. We understand the increased traffic patterns and parking challenges during tournaments. Our drivers can navigate the temporary road configurations and reach stranded vehicles efficiently.",
  },
  {
    question: "What if my car breaks down on Mount Soledad's steep roads?",
    answer:
      "Mount Soledad's winding roads and 15% grades require experienced tow operators. We regularly service the Mount Soledad Memorial area and the residential neighborhoods along Via Capri and Soledad Mountain Road. Our trucks are equipped for steep incline recovery and we know the safest loading positions on hillside roads.",
  },
];

export default function LaJollaPage() {
  return (
    <main className="bg-white">
      {/* ===== HERO SECTION - Immersive Full-Screen Design ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/neighborhoods/la-jolla/hero-cove.webp"
            alt="La Jolla coastline aerial view - Premium towing services in The Jewel of San Diego"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-900/30" />
        </div>

        {/* Floating Elements - Decorative */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="max-w-3xl">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-amber-600/10 backdrop-blur-md border border-amber-400/30 rounded-full px-5 py-2">
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
                <span className="text-amber-300 text-sm font-semibold tracking-wide">THE JEWEL OF SAN DIEGO</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-white/90 text-sm font-medium">Available 24/7</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              La Jolla
              <span className="block mt-2 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                Premium Towing
              </span>
            </h1>

            {/* Unique Description */}
            <p className="mt-8 text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-2xl">
              Where Mediterranean-style coastline meets California luxury. From the sea caves of{" "}
              <span className="text-amber-400 font-medium">La Jolla Cove</span> to the windswept bluffs of{" "}
              <span className="text-amber-400 font-medium">Torrey Pines</span>, we deliver white-glove towing service worthy of San Diego's most exclusive enclave.
            </p>

            {/* ZIP Code Display */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-slate-400 text-sm font-medium">Serving ZIP Codes:</span>
              {LA_JOLLA_ZIP_CODES.map((zip) => (
                <span
                  key={zip}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-amber-500/20"
                >
                  {zip}
                </span>
              ))}
            </div>

            {/* Stats Row */}
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">15</div>
                <div className="text-sm text-slate-400 mt-1">Min Response</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-3xl sm:text-4xl font-bold text-amber-400">VIP</div>
                <div className="text-sm text-slate-400 mt-1">Luxury Care</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">24/7</div>
                <div className="text-sm text-slate-400 mt-1">Always On</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-amber-500/30 hover:shadow-amber-400/40 hover:scale-[1.02]"
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/60 text-xs tracking-widest uppercase">Explore</span>
          <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ===== ICONIC LOCATIONS - Bento Grid Gallery ===== */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-amber-600 font-semibold tracking-wider text-sm uppercase mb-4">
              We Know Every Corner
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
              Iconic <span className="text-amber-600">La Jolla</span> Locations
            </h2>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
              From the world-famous Cove to the prestigious fairways of Torrey Pines, our drivers navigate La Jolla's unique terrain with expertise.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ICONIC_LOCATIONS.map((location, index) => (
              <div
                key={location.name}
                className={`group relative overflow-hidden rounded-3xl ${
                  index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div className={`relative ${index === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                  <Image
                    src={location.image}
                    alt={`${location.name} - La Jolla towing coverage area`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes={index === 0 ? "50vw" : "25vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="inline-block self-start bg-amber-500/90 text-slate-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {location.stats}
                  </span>
                  <h3 className={`font-bold text-white ${index === 0 ? "text-3xl" : "text-xl"}`}>
                    {location.name}
                  </h3>
                  <p className={`mt-2 text-slate-300 ${index === 0 ? "text-base" : "text-sm"} leading-relaxed`}>
                    {location.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT LA JOLLA - Storytelling Section ===== */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div>
              <span className="inline-block text-amber-600 font-semibold tracking-wider text-sm uppercase mb-4">
                The Jewel Deserves The Best
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                Why La Jolla Trusts{" "}
                <span className="text-amber-600">CloseBy Towing</span>
              </h2>

              <div className="mt-8 space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-900">La Jolla isn't just any San Diego neighborhood</strong>—it's a world-class destination where $10 million oceanfront estates share streets with Nobel laureates from Scripps and UCSD. The seven sea caves at La Jolla Cove attract over a million visitors annually, while Torrey Pines hosts PGA tournaments watched by millions worldwide.
                </p>
                <p>
                  This extraordinary community demands extraordinary service. That's why CloseBy Towing has become La Jolla's preferred towing provider. We understand that a vehicle stranded on Prospect Street needs more than just towing—it needs <strong className="text-slate-900">discretion, care, and premium handling</strong>.
                </p>
                <p>
                  Our flatbed fleet specializes in luxury vehicles: from the Ferraris cruising Coast Boulevard to the Teslas charging at UTC mall. We've recovered Range Rovers from Torrey Pines' sandy shoulders and transported vintage Porsches from The Bishop's School with white-glove care.
                </p>
              </div>

              {/* Feature Badges */}
              <div className="mt-10 flex flex-wrap gap-3">
                {["Luxury Vehicle Certified", "UCSD Preferred Vendor", "Beach Recovery Specialists", "Insured to $1M"].map((badge) => (
                  <span
                    key={badge}
                    className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium border border-slate-200"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Image Stack Side */}
            <div className="relative">
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <div className="aspect-[4/5]">
                    <Image
                      src="/neighborhoods/la-jolla/beach-aerial.webp"
                      alt="Aerial view of La Jolla coastline and beaches"
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                  </div>
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs border border-slate-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Trusted Since 2019</div>
                      <div className="text-sm text-slate-500">Serving La Jolla Residents</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 right-12 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COVERAGE LANDMARKS - Response Time Grid ===== */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-amber-400 font-semibold tracking-wider text-sm uppercase mb-4">
              Lightning-Fast Response
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Every La Jolla <span className="text-amber-400">Landmark Covered</span>
            </h2>
            <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
              Strategic positioning means we reach any location in La Jolla within minutes, not hours.
            </p>
          </div>

          {/* Landmarks Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCAL_LANDMARKS.map((landmark) => (
              <div
                key={landmark.name}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{landmark.icon}</span>
                  <div className="bg-amber-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                    {landmark.response}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{landmark.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{landmark.description}</p>
              </div>
            ))}
          </div>

          {/* ZIP Codes Banner */}
          <div className="mt-16 bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-500/20 rounded-2xl p-8 border border-amber-400/30">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Complete La Jolla Coverage</h3>
                <p className="text-slate-300 mt-2">All ZIP codes served with premium response times</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {LA_JOLLA_ZIP_CODES.map((zip) => (
                  <div
                    key={zip}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3 text-center"
                  >
                    <div className="text-2xl font-bold text-amber-400">{zip}</div>
                    <div className="text-xs text-slate-400 mt-1">La Jolla</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PREMIUM SERVICES - Card Grid ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-amber-600 font-semibold tracking-wider text-sm uppercase mb-4">
              White-Glove Service
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
              Premium Services for <span className="text-amber-600">La Jolla</span>
            </h2>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
              Every service tailored to La Jolla's discerning standards and unique geography.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {PREMIUM_SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/san-diego/${service.slug}`}
                className="group bg-slate-50 hover:bg-gradient-to-br hover:from-amber-50 hover:to-orange-50 rounded-3xl p-8 transition-all duration-300 border border-slate-100 hover:border-amber-200 hover:shadow-xl"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-amber-600 font-semibold">
                      <span>Learn More</span>
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* ===== NEARBY AREAS - Horizontal Scroll ===== */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-amber-600 font-semibold tracking-wider text-sm uppercase mb-4">
              Regional Coverage
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
              Serving <span className="text-amber-600">Neighboring Communities</span>
            </h2>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
              La Jolla connects to San Diego's finest coastal and inland neighborhoods. We serve them all.
            </p>
          </div>

          {/* Areas Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {NEARBY_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={areaHref(area.slug)}
                className="group bg-white rounded-2xl p-6 text-center border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  {area.name}
                </div>
                <div className="text-sm text-slate-500 mt-1">{area.distance} away</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION - Accordion Style ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-amber-600 font-semibold tracking-wider text-sm uppercase mb-4">
              Questions Answered
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
              La Jolla Towing <span className="text-amber-600">FAQ</span>
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-amber-300 transition-colors"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="font-bold text-lg text-slate-900 pr-8">{faq.question}</h3>
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center group-open:bg-amber-500 transition-colors">
                    <svg
                      className="w-5 h-5 text-amber-600 group-open:text-white transition-all group-open:rotate-180"
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

      {/* ===== FINAL CTA - Full Width Banner ===== */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/neighborhoods/la-jolla/ocean-sunset.webp"
            alt="La Jolla sunset - Call for premium towing"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/90 to-slate-950/95" />
        </div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Need Premium Towing in{" "}
            <span className="text-amber-400">La Jolla?</span>
          </h2>

          <p className="mt-8 text-xl text-slate-300 max-w-2xl mx-auto">
            The Jewel of San Diego deserves nothing less than exceptional service. Our professional team is standing by 24/7 to assist you.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 px-10 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl shadow-amber-500/30 hover:scale-105"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {CONTACT.phone}
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-300">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>24/7 La Jolla Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STRUCTURED DATA / SCHEMA ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.closebytowing.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "San Diego Towing",
                item: "https://www.closebytowing.com/san-diego/towing",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "La Jolla",
                item: "https://www.closebytowing.com/la-jolla",
              },
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
            "@id": "https://www.closebytowing.com/la-jolla",
            name: "CloseBy Towing - La Jolla",
            description:
              "Premium towing and roadside assistance in La Jolla, San Diego. Serving La Jolla Cove, Torrey Pines, Bird Rock, UCSD, and all La Jolla neighborhoods 24/7. Luxury and exotic vehicle specialists with white-glove flatbed service.",
            url: "https://www.closebytowing.com/la-jolla",
            telephone: CONTACT.phone,
            image: "https://www.closebytowing.com/neighborhoods/la-jolla/hero-cove.webp",
            areaServed: LA_JOLLA_ZIP_CODES.map((zip) => ({
              "@type": "PostalAddress",
              postalCode: zip,
              addressLocality: "La Jolla",
              addressRegion: "CA",
              addressCountry: "US",
            })),
            geo: {
              "@type": "GeoCoordinates",
              latitude: 32.8328,
              longitude: -117.2713,
            },
            serviceType: [
              "Towing Service",
              "Roadside Assistance",
              "Luxury Vehicle Towing",
              "Flatbed Towing",
              "Emergency Towing",
              "Beach Vehicle Recovery",
            ],
            priceRange: "$$",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
            sameAs: [
              "https://www.google.com/maps?cid=closebytowing",
            ],
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
