
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { areaHref, CONTACT } from "@/lib/constants";

// Oceanside ZIP codes
const OCEANSIDE_ZIP_CODES = ["92054", "92056", "92057", "92058"];

// SEO Metadata
export const metadata: Metadata = {
  title: "Oceanside Towing | 92054, 92056, 92057, 92058 | 24/7 | CloseBy",
  description:
    "Towing in Oceanside 92054, 92056, 92057, 92058. Serving Oceanside Pier, Camp Pendleton, Oceanside Harbor, Mission San Luis Rey & the Transit Center. 15-25 min response. 24/7 service.",
  keywords:
    "towing Oceanside, Oceanside tow truck, roadside assistance Oceanside, Camp Pendleton towing, Oceanside Pier towing, tow truck near me Oceanside, Oceanside Harbor towing, emergency towing Oceanside CA, I-5 towing Oceanside, flatbed towing Oceanside",
  openGraph: {
    title: "Oceanside Towing | 24/7 North County Coastal Service | CloseBy",
    description:
      "North County's largest coastal city trusts CloseBy Towing for 24/7 professional towing and roadside assistance. Oceanside Pier to Camp Pendleton, we cover it all.",
    url: "https://www.closebytowing.com/oceanside",
    type: "website",
  },
  alternates: {
    canonical: "https://www.closebytowing.com/oceanside",
  },
};

// Oceanside specific landmarks
const LOCAL_LANDMARKS = [
  {
    name: "Oceanside Pier",
    description:
      "The longest wooden over-water pier on the West Coast. We serve the surrounding beach parking lots, Pacific Street, and The Strand boardwalk area.",
    icon: "🌊",
  },
  {
    name: "Camp Pendleton",
    description:
      "One of the largest Marine Corps bases in the US. We assist military personnel, families, and civilian vehicles near all base access gates along I-5.",
    icon: "🎖️",
  },
  {
    name: "Oceanside Harbor",
    description:
      "Full-service harbor village with restaurants, shops, and charter boats. Our tow trucks service Harbor Drive, the marina parking areas, and nearby hotels.",
    icon: "⛵",
  },
  {
    name: "Mission San Luis Rey",
    description:
      "California's 18th historic mission, known as the King of the Missions. We cover Mission Avenue, the retreat center, and all surrounding residential streets.",
    icon: "⛪",
  },
  {
    name: "Oceanside Transit Center",
    description:
      "Major transportation hub connecting Coaster, Sprinter, Amtrak, and Metrolink services. Quick response for commuter vehicle emergencies in the station area.",
    icon: "🚆",
  },
  {
    name: "Oceanside Municipal Airport",
    description:
      "General aviation airport serving North County. We handle vehicle breakdowns, lockouts, and towing for travelers and employees in the airport vicinity.",
    icon: "✈️",
  },
];

// Nearby neighborhoods
const NEARBY_AREAS = [
  { name: "Carlsbad", slug: "carlsbad" },
  { name: "Vista", slug: "vista" },
  { name: "San Marcos", slug: "san-marcos" },
  { name: "Encinitas", slug: "encinitas" },
  { name: "Solana Beach", slug: "solana-beach" },
  { name: "Del Mar", slug: "del-mar" },
];

// Services offered
const SERVICES = [
  {
    name: "General Towing",
    slug: "towing",
    description: "Local and long-distance towing for all vehicles in Oceanside",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    name: "Emergency Towing",
    slug: "emergency-towing",
    description: "Rapid emergency response on I-5, SR-76, Coast Highway, and all Oceanside roads",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Flatbed Towing",
    slug: "flatbed-towing",
    description: "Safe flatbed transport for trucks, SUVs, and specialty vehicles throughout North County",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    name: "Accident Towing",
    slug: "accident-towing",
    description: "Collision recovery and accident scene towing with police and insurance coordination",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    name: "Roadside Assistance",
    slug: "roadside-assistance",
    description: "Jump starts, lockouts, tire changes, and fuel delivery anywhere in Oceanside",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

// FAQ Data specific to Oceanside
const FAQ_DATA = [
  {
    question:
      "How quickly can you reach the Oceanside Pier and beach areas?",
    answer:
      "We typically arrive at the Oceanside Pier, The Strand, and surrounding beach parking areas within 15-20 minutes. Our drivers are very familiar with Pacific Street, Myers Street, Pier View Way, and all the beachfront access roads. Whether you are parked near the amphitheatre, the pier plaza, or any of the metered lots along The Strand, we will get to you fast. Oceanside's beach district stays busy year-round with surfers, tourists, and locals, so we maintain rapid coverage of the entire coastal corridor.",
  },
  {
    question:
      "Do you provide towing services near Camp Pendleton?",
    answer:
      "Absolutely. Camp Pendleton is one of the largest Marine Corps installations in the country, and we proudly serve military personnel, their families, and civilian workers. We respond to vehicle emergencies near the main gate, the back gate off Vandegrift Boulevard, and along the I-5 corridor that runs adjacent to the base. Our drivers understand the unique access requirements around military installations and can coordinate with base security when needed. Whether you need a jump start before morning PT or a tow after a long commute, we are here to help.",
  },
  {
    question:
      "What areas of Oceanside do you cover?",
    answer:
      "We cover all of Oceanside, which spans ZIP codes 92054, 92056, 92057, and 92058. This includes Downtown Oceanside, South Oceanside (South O), Fire Mountain, Eastside Capistrano, Mission Mesa, Morro Hills, Rancho Del Oro, Oceana, Ivey Ranch, Peacock, Thunder Drive, and every neighborhood in between. We also service the Oceanside Harbor Village, the Transit Center area, Oceanside Boulevard commercial corridor, and the entire stretch of Coast Highway from Carlsbad border to Camp Pendleton. With a population of roughly 175,000, Oceanside is the largest city in North County, and our fleet is positioned to cover every square mile of it.",
  },
  {
    question:
      "Can you help with breakdowns on I-5 or SR-76 in the Oceanside area?",
    answer:
      "Yes, highway breakdowns on I-5 and SR-76 (Mission Avenue) are among our most common calls in Oceanside. Interstate 5 runs through the heart of the city and carries heavy traffic between San Diego and Orange County. SR-76 connects coastal Oceanside to the inland communities of Vista, San Marcos, and beyond. Our tow trucks are equipped for safe highway-side recovery, and our drivers are trained in Caltrans safety protocols for working on high-speed roadways. We can also assist on Coast Highway, Oceanside Boulevard, El Camino Real, and all surface streets throughout the city.",
  },
  {
    question:
      "Do you offer towing near Oceanside Harbor and the marina?",
    answer:
      "We absolutely do. Oceanside Harbor is a major attraction with its restaurants, shops, charter fishing boats, and the Cape Cod-style harbor village. We regularly respond to calls along Harbor Drive North, Harbor Drive South, and the surrounding hotel and restaurant district. Visitors sometimes experience dead batteries after a long day on the water or return to find a flat tire in the harbor parking lot. Our typical response time to the harbor area is 15-20 minutes, and we handle everything from lockouts to full towing with professional care.",
  },
  {
    question:
      "Are your towing services available 24 hours a day, 7 days a week in Oceanside?",
    answer:
      "Yes, we operate around the clock, 365 days a year throughout Oceanside. Whether it is a 2 AM breakdown on I-5, an early morning lockout at the Transit Center before your Coaster commute, or a flat tire at Oceanside Pier on a busy summer Saturday, we are always available. Oceanside has a vibrant nightlife downtown, early-morning military schedules near Camp Pendleton, and constant tourist activity at the pier and harbor. Our 24/7 availability means you never have to wait until business hours for professional towing and roadside assistance. Just call us any time and we will dispatch a truck immediately.",
  },
];

export default function OceansidePage() {
  return (
    <main className="bg-slate-950">
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />

        {/* Wave decoration at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-24 text-slate-950">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="currentColor"
              opacity=".15"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              fill="currentColor"
              opacity=".3"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Location badge with ZIP codes */}
              <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-indigo-200 text-sm font-medium">
                  Serving Oceanside 24/7 &bull; ZIP: {OCEANSIDE_ZIP_CODES.join(", ")}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Oceanside
                <span className="block text-indigo-400 mt-2">Towing &amp; Roadside</span>
              </h1>

              <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-xl">
                Oceanside&apos;s trusted towing service for North County&apos;s largest coastal city. From{" "}
                <span className="text-indigo-300 font-semibold">Oceanside Pier</span> to{" "}
                <span className="text-indigo-300 font-semibold">Camp Pendleton</span>, professional towing and roadside
                assistance with{" "}
                <span className="text-indigo-300 font-semibold">15-25 minute</span> response times across all four ZIP
                codes.
              </p>

              {/* Quick stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-indigo-400">15-25</div>
                  <div className="text-sm text-slate-300">Min Response</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-indigo-400">24/7</div>
                  <div className="text-sm text-slate-300">Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-indigo-400">175K</div>
                  <div className="text-sm text-slate-300">Population</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-indigo-500/30"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call: {CONTACT.phone}
                </a>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/30"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-indigo-500/30">
                <div className="aspect-[4/3] bg-slate-900/50 relative">
                  <Image
                    src="/neighborhoods/shared/flatbed-truck-1.webp"
                    alt="Professional tow truck serving Oceanside near the Oceanside Pier"
                    fill
                    className="object-cover"
                    priority
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                  {/* ZIP code overlay */}
                  <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-indigo-400/30">
                    <div className="text-indigo-200 text-xs font-medium">ZIP Codes</div>
                    <div className="text-white font-bold">{OCEANSIDE_ZIP_CODES.join(" | ")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="py-6 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-slate-300">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Licensed &amp; Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">5-Star Google Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">24/7 Availability</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="font-medium">15-25 Min Response</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-medium">Locally Owned</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCAL LANDMARKS SECTION ===== */}
      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-indigo-400 font-semibold tracking-wider text-sm uppercase mb-4">
              We Know Every Corner
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              We Know <span className="text-indigo-400">Oceanside</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              From the iconic pier to Camp Pendleton&apos;s gates, our drivers know every road, parking lot, and landmark in Oceanside.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCAL_LANDMARKS.map((landmark, index) => (
              <div
                key={index}
                className="group bg-slate-900 hover:bg-slate-800 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-800 hover:border-indigo-500/50"
              >
                <div className="text-4xl mb-4">{landmark.icon}</div>
                <h3 className="font-bold text-lg text-white group-hover:text-indigo-400 transition-colors">
                  {landmark.name}
                </h3>
                <p className="mt-2 text-slate-400 text-sm leading-relaxed">{landmark.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT OCEANSIDE SECTION ===== */}
      <section className="py-16 sm:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-indigo-400 font-semibold tracking-wider text-sm uppercase mb-4">
                North County&apos;s Largest Coastal City
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Oceanside&apos;s <span className="text-indigo-400">Reliable Towing Service</span>
              </h2>

              <div className="mt-6 space-y-4 text-lg text-slate-300 leading-relaxed">
                <p>
                  Oceanside is the third-largest city in San Diego County, home to approximately 175,000 residents. Situated along the stunning North County coastline, it stretches from the shores of the Pacific Ocean east to the rolling hills of the San Luis Rey River valley, and from the gates of Marine Corps Base Camp Pendleton south to Carlsbad. This vast geography, combined with major transportation corridors like Interstate 5, State Route 76, and Coast Highway, means vehicle breakdowns and roadside emergencies happen every single day.
                </p>
                <p>
                  CloseBy Towing has built a reputation as Oceanside&apos;s go-to towing provider. Whether you are a Marine stationed at Camp Pendleton, a surfer visiting the legendary Oceanside Pier, a commuter catching the Coaster at the Transit Center, or a resident navigating the neighborhoods of Rancho Del Oro and Fire Mountain, our professional drivers deliver fast, courteous service around the clock. We understand the unique demands of this community, from high-traffic summer weekends at the beach to early-morning military formation calls near the base.
                </p>
                <p>
                  Our fleet of modern tow trucks is equipped to handle any situation: from compact sedans and lifted trucks to motorcycles and boats trailered through the harbor area. With response times averaging 15-25 minutes across all four Oceanside ZIP codes, we are committed to getting you back on the road or safely to your destination as quickly as possible.
                </p>
              </div>

              {/* Common services callout */}
              <div className="mt-8 bg-indigo-950/50 rounded-xl p-6 border border-indigo-500/20">
                <h3 className="font-bold text-white mb-4">Common Oceanside Calls:</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "I-5 freeway breakdowns",
                    "Beach parking lot lockouts",
                    "Camp Pendleton gate area tows",
                    "Harbor & marina service",
                    "SR-76 accident recovery",
                    "Transit Center jump starts",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Coverage details */}
            <div className="bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-700">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Oceanside Coverage Area
              </h3>

              <div className="space-y-3">
                <div className="bg-slate-900 rounded-lg p-4">
                  <h4 className="font-semibold text-white text-sm mb-2">Neighborhoods We Service:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Downtown Oceanside",
                      "South O",
                      "Fire Mountain",
                      "Rancho Del Oro",
                      "Oceana",
                      "Ivey Ranch",
                      "Mission Mesa",
                      "Morro Hills",
                    ].map((area) => (
                      <span key={area} className="bg-slate-800 px-3 py-1 rounded-full text-sm text-slate-300 border border-slate-700">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900 rounded-lg p-4">
                  <h4 className="font-semibold text-white text-sm mb-2">Major Roads:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["I-5", "SR-76", "Coast Highway", "Mission Avenue", "Oceanside Blvd", "El Camino Real"].map((road) => (
                      <span key={road} className="bg-indigo-950 text-indigo-300 px-3 py-1 rounded-full text-sm font-medium border border-indigo-500/30">
                        {road}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900 rounded-lg p-4">
                  <h4 className="font-semibold text-white text-sm mb-2">Key Destinations:</h4>
                  <div className="grid grid-cols-2 gap-1 text-sm text-slate-400">
                    <span>&bull; Oceanside Pier</span>
                    <span>&bull; Camp Pendleton</span>
                    <span>&bull; Oceanside Harbor</span>
                    <span>&bull; Mission San Luis Rey</span>
                    <span>&bull; Transit Center</span>
                    <span>&bull; Municipal Airport</span>
                  </div>
                </div>

                <div className="bg-slate-900 rounded-lg p-4">
                  <h4 className="font-semibold text-white text-sm mb-2">ZIP Codes Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {OCEANSIDE_ZIP_CODES.map((zip) => (
                      <span
                        key={zip}
                        className="bg-indigo-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-indigo-500/20"
                      >
                        {zip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-indigo-400 font-semibold tracking-wider text-sm uppercase mb-4">
              Full-Service Towing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Services in <span className="text-indigo-400">Oceanside</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Complete towing and roadside assistance available 24/7 across all of Oceanside. From the pier to the freeway, we have you covered.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={areaHref(service.slug)}
                className="group bg-slate-900 hover:bg-slate-800 rounded-xl p-6 transition-all duration-300 hover:shadow-xl border border-slate-800 hover:border-indigo-500/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/30 transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white group-hover:text-indigo-400 transition-colors text-lg">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-slate-400 text-sm leading-relaxed">{service.description}</p>
                    <div className="mt-3 inline-flex items-center gap-2 text-indigo-400 text-sm font-semibold">
                      <span>Learn More</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* ===== MID-PAGE CTA ===== */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 border-y border-indigo-700/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Stranded in Oceanside? We&apos;ll Be There Fast.
          </h2>
          <p className="mt-4 text-lg text-indigo-200 max-w-2xl mx-auto">
            Do not wait on the side of the road. Our professional tow trucks are positioned throughout Oceanside for the fastest possible response.
          </p>
          <div className="mt-8">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-indigo-900 px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ===== NEARBY AREAS SECTION ===== */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-indigo-400 font-semibold tracking-wider text-sm uppercase mb-4">
              Regional Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Also Serving <span className="text-indigo-400">Nearby Areas</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Oceanside connects to many thriving North County communities. We serve them all with the same fast, professional care.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {NEARBY_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={areaHref(area.slug)}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1"
              >
                <span className="font-semibold text-white group-hover:text-indigo-400 transition-colors">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-16 sm:py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-indigo-400 font-semibold tracking-wider text-sm uppercase mb-4">
              Questions Answered
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Oceanside Towing <span className="text-indigo-400">FAQ</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-indigo-500/50 transition-colors"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-750 transition-colors">
                  <h3 className="font-semibold text-white pr-8">{faq.question}</h3>
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center group-open:bg-indigo-500 transition-colors">
                    <svg
                      className="w-5 h-5 text-indigo-400 group-open:text-white transition-all group-open:rotate-180"
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
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA SECTION ===== */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold">
            Need a Tow in <span className="text-indigo-400">Oceanside?</span>
          </h2>

          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
            North County&apos;s largest coastal city deserves dependable towing. Our professional drivers are ready to assist you 24 hours a day, 7 days a week, across all of Oceanside and surrounding communities.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg shadow-indigo-500/30"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: {CONTACT.phone}
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-300">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Licensed &amp; Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Trusted by San Diego Drivers</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>24/7 Oceanside Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SCHEMA.ORG STRUCTURED DATA ===== */}
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
                item: "https://www.closebytowing.com/towing",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Oceanside",
                item: "https://www.closebytowing.com/oceanside",
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
            "@id": "https://www.closebytowing.com/oceanside",
            name: "CloseBy Towing - Oceanside",
            description:
              "Professional towing and roadside assistance in Oceanside, California. Serving Oceanside Pier, Camp Pendleton, Oceanside Harbor, Mission San Luis Rey, the Transit Center, and all Oceanside neighborhoods 24/7. North County's largest coastal city covered by fast, reliable tow trucks.",
            url: "https://www.closebytowing.com/oceanside",
            telephone: CONTACT.phone,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Oceanside",
              addressRegion: "CA",
              postalCode: OCEANSIDE_ZIP_CODES[0],
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 33.1959,
              longitude: -117.3795,
            },
            areaServed: OCEANSIDE_ZIP_CODES.map((zip) => ({
              "@type": "PostalAddress",
              postalCode: zip,
              addressLocality: "Oceanside",
              addressRegion: "CA",
              addressCountry: "US",
            })),
            serviceType: [
              "Towing Service",
              "Roadside Assistance",
              "Emergency Towing",
              "Flatbed Towing",
              "Accident Towing",
              "Jump Start Service",
              "Lockout Service",
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
