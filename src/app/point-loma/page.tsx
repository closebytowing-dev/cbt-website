import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { areaHref, CONTACT } from "@/lib/constants";

// Point Loma ZIP codes
const POINT_LOMA_ZIP_CODES = ["92106", "92107"];

// SEO Metadata
export const metadata: Metadata = {
  title: "Point Loma Towing | 24/7 Emergency | ZIP 92106, 92107 | CloseBy",
  description:
    "Fast towing in Point Loma CA (92106, 92107). 24/7 emergency tow truck, flatbed towing, roadside assistance. Serving Liberty Station, Shelter Island, Cabrillo Monument. 15-25 min response.",
  keywords:
    "towing Point Loma, Point Loma tow truck, 92106 towing, 92107 towing, Liberty Station towing, Shelter Island towing, Cabrillo Monument towing, Naval Base Point Loma towing",
  openGraph: {
    title: "Point Loma Towing | 24/7 Emergency Service | CloseBy",
    description:
      "Need a tow in Point Loma? Fast 15-25 min response to Liberty Station, Shelter Island, Cabrillo Monument & all peninsula areas. Call now for 24/7 professional towing.",
    url: "https://www.closebytowing.com/point-loma",
    type: "website",
  },
  alternates: {
    canonical: "https://www.closebytowing.com/point-loma",
  },
};

// Nearby neighborhoods for internal linking
const NEARBY_AREAS = [
  { name: "Ocean Beach", slug: "ocean-beach" },
  { name: "Mission Beach", slug: "mission-beach" },
  { name: "Downtown San Diego", slug: "downtown" },
  { name: "Coronado", slug: "coronado" },
  { name: "Pacific Beach", slug: "pacific-beach" },
  { name: "La Jolla", slug: "la-jolla" },
];

// Point Loma-specific FAQ
const FAQ_DATA = [
  {
    question: "How fast can you get to Point Loma?",
    answer:
      "Our average response time to Point Loma is 15-25 minutes. We have drivers positioned for quick access to the peninsula including Liberty Station, Shelter Island, and the hillside neighborhoods. Even the winding roads up to Cabrillo Monument are familiar territory for our team.",
  },
  {
    question: "Do you provide service to Liberty Station?",
    answer:
      "Yes, we regularly service Liberty Station and the entire arts district. Whether you're at the marketplace, Stone Brewing, or attending an event, we can reach you quickly. We know the parking areas and access points throughout the former Naval Training Center.",
  },
  {
    question: "Can you tow from Shelter Island marina areas?",
    answer:
      "Absolutely. Shelter Island is one of our regular service areas. We handle towing from the marina parking, hotel lots, and waterfront restaurants. Our flatbed trucks are ideal for the variety of vehicles we see in the Shelter Island area.",
  },
  {
    question: "Do you serve the Naval Base Point Loma area?",
    answer:
      "We provide service to areas surrounding the Naval Base and work with military personnel and families. While base access requires proper clearance, we can assist with vehicles at the gates or in surrounding neighborhoods. We're proud to serve our military community.",
  },
  {
    question: "How do you handle Point Loma's steep hills?",
    answer:
      "Point Loma's steep terrain and narrow streets are no problem for our experienced drivers. We have the right equipment for safe towing on grades and tight corners. Whether you're in the Fleetridge hills or the Wooded Area, we can reach you safely.",
  },
  {
    question: "What towing services do you offer in Point Loma?",
    answer:
      "We offer complete services: emergency towing, flatbed towing, accident recovery, jump starts, tire changes, fuel delivery, and lockout assistance. Our drivers are experienced with all vehicle types from everyday cars to luxury vehicles common in Point Loma.",
  },
];

export default function PointLomaPage() {
  return (
    <main className="bg-slate-900">
      {/* Hero Section - Maritime towing theme */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/neighborhoods/shared/flatbed-truck-1.webp"
            alt="Professional tow truck providing 24/7 emergency towing service in Point Loma San Diego"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl">
            {/* ZIP Code Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              SERVING ZIP CODES {POINT_LOMA_ZIP_CODES.join(", ")}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.9]">
              POINT LOMA
              <span className="block text-blue-400">TOWING</span>
            </h1>

            <p className="mt-6 text-xl sm:text-2xl text-slate-300 leading-relaxed">
              24/7 emergency towing for Point Loma peninsula. Fast response to Liberty Station, Shelter Island, Cabrillo Monument, and all hillside neighborhoods.
            </p>

            {/* Response Time Highlight */}
            <div className="mt-8 flex items-center gap-4">
              <div className="bg-green-500/20 border border-green-400/50 rounded-xl px-6 py-4">
                <div className="text-3xl font-black text-green-400">15-25 MIN</div>
                <div className="text-sm text-green-300">Average Response</div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl px-6 py-4">
                <div className="text-3xl font-black text-white">24/7</div>
                <div className="text-sm text-slate-400">Always Available</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-5 rounded-xl font-black text-xl transition-all hover:scale-105 shadow-2xl shadow-blue-600/30"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {CONTACT.phone}
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-5 rounded-xl font-bold text-xl transition-all border border-white/30 backdrop-blur-sm"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              TOWING SERVICES IN <span className="text-blue-400">POINT LOMA</span>
            </h2>
            <p className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto">
              Complete towing and roadside assistance for Point Loma, ZIP codes {POINT_LOMA_ZIP_CODES.join(" & ")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-blue-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Emergency Towing</h3>
              <p className="text-slate-400">
                24/7 emergency response to anywhere on the peninsula. Accidents, breakdowns, or any urgent situation - we're there fast.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-blue-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Flatbed Towing</h3>
              <p className="text-slate-400">
                Safe flatbed transport for all vehicle types. Essential for Point Loma's steep hills and luxury vehicles.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-blue-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Roadside Assistance</h3>
              <p className="text-slate-400">
                Jump starts, tire changes, fuel delivery, and lockout service. Quick help to get you moving without a tow.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-blue-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Accident Recovery</h3>
              <p className="text-slate-400">
                Professional accident scene towing and recovery. We work with insurance companies and coordinate with authorities.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-blue-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Hill Recovery</h3>
              <p className="text-slate-400">
                Expert handling of Point Loma's steep grades and narrow streets. Our drivers know every hill and corner.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="group bg-slate-700/50 rounded-2xl p-8 border border-slate-600 hover:border-blue-500/50 transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Marina Service</h3>
              <p className="text-slate-400">
                Serving Shelter Island marina areas, boat trailer assistance, and waterfront parking lot recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                COMPLETE <span className="text-blue-400">POINT LOMA</span> COVERAGE
              </h2>
              <p className="mt-6 text-xl text-slate-400">
                We know every street, hill, and marina on the Point Loma peninsula. From the harbor to the monument, our drivers navigate the unique terrain efficiently to reach you fast.
              </p>

              {/* Areas List */}
              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                  <h3 className="font-bold text-white mb-3">Peninsula Areas</h3>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      Liberty Station
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      Shelter Island
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      Fleetridge / Wooded Area
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      La Playa / Roseville
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                  <h3 className="font-bold text-white mb-3">Key Locations</h3>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      Cabrillo Monument
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      Fort Rosecrans
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      Naval Base Area
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      Point Loma Nazarene
                    </li>
                  </ul>
                </div>
              </div>

              {/* ZIP Code Callout */}
              <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                <div className="flex items-center gap-4 flex-wrap">
                  <div>
                    <span className="text-3xl font-black text-blue-400">92106</span>
                    <span className="text-slate-400 mx-2">&</span>
                    <span className="text-3xl font-black text-blue-400">92107</span>
                  </div>
                  <div>
                    <div className="font-bold text-white">Point Loma ZIP Codes</div>
                    <div className="text-slate-400">Full peninsula coverage</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/neighborhoods/shared/roadside-service.webp"
                  alt="Roadside assistance in Point Loma"
                  width={600}
                  height={450}
                  className="object-cover w-full"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-xl">
                <div className="text-3xl font-black text-blue-400">15-25</div>
                <div className="text-white font-medium">Min Response</div>
                <div className="text-slate-500 text-sm">Avg to Point Loma</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              WHY <span className="text-blue-400">POINT LOMA</span> TRUSTS US
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Response</h3>
              <p className="text-slate-400">15-25 minute average arrival to Point Loma</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fully Licensed</h3>
              <p className="text-slate-400">Licensed, insured, and professionally trained</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fair Pricing</h3>
              <p className="text-slate-400">Upfront quotes with no hidden fees</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Peninsula Experts</h3>
              <p className="text-slate-400">We know every hill and marina</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              POINT LOMA TOWING <span className="text-blue-400">FAQ</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-700/50 transition-colors">
                  <h3 className="font-bold text-white pr-8 text-left">{faq.question}</h3>
                  <svg
                    className="w-5 h-5 text-blue-400 flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
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

      {/* Nearby Areas */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white">
              ALSO SERVING <span className="text-blue-400">NEARBY AREAS</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {NEARBY_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={areaHref(area.slug)}
                className="group bg-slate-700/50 rounded-xl p-4 text-center border border-slate-600 hover:border-blue-500/50 transition-all hover:-translate-y-1"
              >
                <span className="font-bold text-white group-hover:text-blue-400 transition-colors">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            NEED A TOW IN POINT LOMA?
          </h2>
          <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto">
            Don&apos;t wait stranded on the peninsula. Our professional team is ready 24/7 to help you anywhere in Point Loma.
          </p>

          <div className="mt-10">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-blue-700 px-12 py-6 rounded-xl font-black text-2xl transition-all hover:scale-105 shadow-2xl"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              CALL {CONTACT.phone}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold">24/7 Available</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold">Fast Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.closebytowing.com/point-loma",
            name: "CloseBy Towing - Point Loma",
            description:
              "24/7 emergency towing and roadside assistance in Point Loma, CA 92106 & 92107. Fast response to Liberty Station, Shelter Island, Cabrillo Monument, and all peninsula areas. Professional flatbed towing, jump starts, tire changes, and lockout service.",
            url: "https://www.closebytowing.com/point-loma",
            telephone: CONTACT.phone,
            image: "https://www.closebytowing.com/neighborhoods/shared/flatbed-truck-1.webp",
            address: {
              "@type": "PostalAddress",
              addressLocality: "San Diego",
              addressRegion: "CA",
              postalCode: "92106",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 32.7194,
              longitude: -117.2280,
            },
            areaServed: POINT_LOMA_ZIP_CODES.map((zip) => ({
              "@type": "PostalAddress",
              postalCode: zip,
              addressLocality: "San Diego",
              addressRegion: "CA",
              addressCountry: "US",
            })),
            serviceType: [
              "Emergency Towing",
              "Flatbed Towing",
              "Roadside Assistance",
              "Jump Start Service",
              "Tire Change",
              "Lockout Service",
              "Accident Towing",
              "Hill Recovery",
            ],
            priceRange: "$$",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "00:00",
              closes: "23:59",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "180",
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
                name: "Point Loma",
                item: "https://www.closebytowing.com/point-loma",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
