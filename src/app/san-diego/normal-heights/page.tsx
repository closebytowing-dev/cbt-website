
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

// SEO Metadata
export const metadata: Metadata = {
  title: "Towing in Normal Heights San Diego | 24/7 Service | CloseBy Towing",
  description:
    "Fast towing & roadside assistance in Normal Heights. Serving Adams Avenue, Ward Canyon, and surrounding areas. 15-30 min response for all vehicles.",
  keywords:
    "towing Normal Heights, Normal Heights tow truck, Adams Avenue towing, roadside assistance Normal Heights, tow truck near me Normal Heights",
  openGraph: {
    title: "Towing in Normal Heights San Diego | 24/7 Service | CloseBy Towing",
    description:
      "Reliable towing experts serving Normal Heights' eclectic community 24/7. From Adams Avenue to Ward Canyon, professional service for all vehicles.",
    url: "https://www.closebytowing.com/san-diego/normal-heights",
    type: "website",
  },
  alternates: {
    canonical: "https://www.closebytowing.com/san-diego/normal-heights",
  },
};

// Normal Heights specific landmarks
const LOCAL_LANDMARKS = [
  {
    name: "Adams Avenue",
    description: "Main commercial corridor with shops, restaurants, and bars",
    icon: "🛍️",
  },
  {
    name: "Ward Canyon Neighborhood Park",
    description: "Community park and recreation area service",
    icon: "🌳",
  },
  {
    name: "Adams Avenue Street Fair",
    description: "Annual festival and community event support",
    icon: "🎪",
  },
  {
    name: "Adams Avenue Theatre District",
    description: "Entertainment venues and nightlife towing",
    icon: "🎭",
  },
  {
    name: "Antique Row",
    description: "Vintage shops and boutique district service",
    icon: "🏺",
  },
  {
    name: "Local Breweries & Eateries",
    description: "Restaurant and bar parking area coverage",
    icon: "🍺",
  },
];

// Nearby neighborhoods
const NEARBY_AREAS = [
  { name: "North Park", slug: "north-park" },
  { name: "University Heights", slug: "university-heights" },
  { name: "Kensington", slug: "kensington" },
  { name: "City Heights", slug: "city-heights" },
  { name: "El Cajon", slug: "el-cajon" },
  { name: "Hillcrest", slug: "hillcrest" },
];

// Services offered
const SERVICES = [
  { name: "General Towing", slug: "towing", icon: "🚗" },
  { name: "Emergency Towing", slug: "emergency-towing", icon: "🚨" },
  { name: "Flatbed Towing", slug: "flatbed-towing", icon: "🛻" },
  { name: "Accident Towing", slug: "accident-towing", icon: "💥" },
  { name: "Roadside Assistance", slug: "roadside-assistance", icon: "🔧" },
];

// FAQ Data specific to Normal Heights
const FAQ_DATA = [
  {
    question: "Do you provide towing services along Adams Avenue?",
    answer:
      "Yes, absolutely. Adams Avenue is the heart of Normal Heights, and we frequently serve the entire corridor from the I-805 to the I-15. We're familiar with the street parking, business districts, and residential areas along Adams. Whether you're near the antique shops, restaurants, or breweries, our typical response time is 15-25 minutes.",
  },
  {
    question: "Can you help during the Adams Avenue Street Fair?",
    answer:
      "Yes, we provide towing and roadside assistance during the annual Adams Avenue Street Fair and other community events. We're familiar with the street closures, detour routes, and heavy traffic that comes with these celebrations. Our team plans ahead to ensure we can still reach you quickly, even during major events.",
  },
  {
    question: "How quickly can you reach Ward Canyon Neighborhood Park area?",
    answer:
      "We typically arrive at Ward Canyon Park and the surrounding residential neighborhoods within 15-20 minutes. Our drivers know the area's streets and can navigate the residential zones efficiently. We can assist with dead batteries, lockouts, flat tires, and towing from any location in the neighborhood.",
  },
  {
    question: "Do you service the local breweries and restaurant areas?",
    answer:
      "Yes, we regularly serve Normal Heights' vibrant dining and brewery scene. Whether you're at one of the craft breweries, restaurants, or bars along Adams Avenue or the side streets, we're here to help. We understand tight parking situations and can provide quick service for battery jumps, lockouts, or safe towing when needed.",
  },
  {
    question: "Are your services available 24/7 in Normal Heights?",
    answer:
      "Absolutely. Normal Heights has a lively community with evening activities, late-night dining, and entertainment. We provide 24/7 service throughout the neighborhood, including weekends and holidays. Whether you need help at 3 AM on Adams Avenue or early morning in the residential areas, we're here for you.",
  },
];

export default function NormalHeightsPage() {
  return (
    <main className="bg-white">
      {/* Hero Section - Rose/Pink theme for Normal Heights' eclectic community vibe */}
      <section className="relative bg-gradient-to-br from-rose-950 via-rose-900 to-rose-800 text-white overflow-hidden">
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-24 text-white">
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
              {/* Location badge */}
              <div className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-400/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-pink-200 text-sm font-medium">Serving Normal Heights 24/7</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Normal Heights
                <span className="block text-pink-400 mt-2">Towing Service</span>
              </h1>

              <p className="mt-6 text-xl text-rose-100 leading-relaxed max-w-xl">
                Normal Heights' trusted towing service for the eclectic community. From <span className="text-pink-300 font-semibold">Adams Avenue</span> to{" "}
                <span className="text-pink-300 font-semibold">Ward Canyon Park</span>, reliable service with{" "}
                <span className="text-pink-300 font-semibold">15-30 minute</span> response times.
              </p>

              {/* Quick stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-pink-400">15-30</div>
                  <div className="text-sm text-rose-100">Min Response</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-pink-400">24/7</div>
                  <div className="text-sm text-rose-100">Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-pink-400">Local</div>
                  <div className="text-sm text-rose-100">Experts</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-400 text-rose-950 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-pink-500/30"
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-pink-500/30">
                <div className="aspect-[4/3] bg-rose-900/50 relative">
                  <Image
                    src="/hero/home-hero.webp"
                    alt="Tow truck serving Normal Heights San Diego near Adams Avenue"
                    fill
                    className="object-cover"
                    priority
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-950/70 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Landmarks Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              We Know <span className="text-rose-900">Normal Heights</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              From Adams Avenue to Ward Canyon Park, our drivers know every corner of Normal Heights' eclectic community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCAL_LANDMARKS.map((landmark, index) => (
              <div
                key={index}
                className="group bg-slate-50 hover:bg-rose-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-rose-200"
              >
                <div className="text-4xl mb-4">{landmark.icon}</div>
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-rose-900 transition-colors">
                  {landmark.name}
                </h3>
                <p className="mt-2 text-slate-600 text-sm">{landmark.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Normal Heights Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Normal Heights&apos; <span className="text-rose-900">Trusted Towing Service</span>
              </h2>

              <div className="mt-6 prose prose-lg text-slate-600">
                <p>
                  Normal Heights, known for its eclectic character and strong community feel, deserves towing services that understand the neighborhood&apos;s unique personality. Our team specializes in providing reliable, professional towing and roadside assistance throughout this vibrant community.
                </p>
                <p>
                  Whether you&apos;re exploring the shops and restaurants on Adams Avenue, attending the famous Adams Avenue Street Fair, enjoying a night out at local breweries, or living in one of the area&apos;s charming residential streets, CloseBy Towing delivers friendly, professional service for all vehicle types.
                </p>
                <p>
                  Our drivers understand Normal Heights&apos;s street layout—from the busy Adams Avenue corridor to the quiet residential neighborhoods and Ward Canyon Park area. We provide fast 15-30 minute response times while ensuring your vehicle receives the careful handling it deserves.
                </p>
              </div>

              {/* Common services callout */}
              <div className="mt-8 bg-rose-100 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">Common Normal Heights Services:</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "Adams Avenue towing",
                    "Street parking assistance",
                    "Dead battery jump starts",
                    "Restaurant & bar lockouts",
                    "Flat tire changes",
                    "Emergency roadside help",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-rose-900 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Coverage details */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-rose-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Normal Heights Coverage Area
              </h3>

              <div className="space-y-3">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">Areas We Service:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Adams Avenue", "Ward Canyon", "Mansfield St", "El Cajon Blvd", "Adams Avenue Theatre District", "Antique Row"].map((area) => (
                      <span key={area} className="bg-white px-3 py-1 rounded-full text-sm text-slate-600 border border-slate-200">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">Popular Destinations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Adams Avenue Businesses", "Local Breweries", "Ward Canyon Park", "Street Fair Grounds"].map((spot) => (
                      <span key={spot} className="bg-rose-100 text-rose-900 px-3 py-1 rounded-full text-sm font-medium">
                        {spot}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">Major Streets:</h4>
                  <div className="grid grid-cols-2 gap-1 text-sm text-slate-600">
                    <span>• Adams Avenue</span>
                    <span>• El Cajon Boulevard</span>
                    <span>• 32nd Street</span>
                    <span>• 33rd Street</span>
                    <span>• Mansfield Street</span>
                    <span>• Meade Avenue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Services in <span className="text-rose-900">Normal Heights</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Full range of towing and roadside services available 24/7 throughout Normal Heights.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/san-diego/${service.slug}`}
                className="group bg-slate-50 hover:bg-rose-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-rose-200 text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-slate-900 group-hover:text-rose-900 transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-slate-500 mt-2">Available in Normal Heights</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-rose-950 via-rose-900 to-rose-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Also Serving <span className="text-pink-400">Nearby Areas</span>
            </h2>
            <p className="mt-4 text-lg text-rose-200 max-w-2xl mx-auto">
              Normal Heights connects to many great San Diego communities. We serve them all.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {NEARBY_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/san-diego/${area.slug}`}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1"
              >
                <span className="font-semibold text-white group-hover:text-pink-400 transition-colors">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Normal Heights Towing <span className="text-rose-900">FAQ</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                  <h3 className="font-semibold text-slate-900 pr-8">{faq.question}</h3>
                  <svg
                    className="w-5 h-5 text-rose-900 flex-shrink-0 transition-transform group-open:rotate-180"
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

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-rose-950 via-rose-900 to-rose-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold">
            Need a Tow in <span className="text-pink-400">Normal Heights?</span>
          </h2>

          <p className="mt-6 text-xl text-rose-100 max-w-2xl mx-auto">
            Experience reliable towing service for Normal Heights' eclectic community. Our professional drivers are ready to assist you 24/7 with fast response and friendly care.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-400 text-rose-950 px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: {CONTACT.phone}
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-rose-200">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Trusted by San Diego Drivers</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>24/7 Normal Heights Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.closebytowing.com/san-diego/normal-heights",
            name: "CloseBy Towing - Normal Heights",
            description:
              "Professional towing and roadside assistance in Normal Heights San Diego. Serving Adams Avenue, Ward Canyon Park, and all Normal Heights neighborhoods 24/7.",
            url: "https://www.closebytowing.com/san-diego/normal-heights",
            telephone: CONTACT.phone,
            areaServed: {
              "@type": "Neighborhood",
              name: "Normal Heights",
              containedInPlace: {
                "@type": "City",
                name: "San Diego",
              },
            },
            serviceType: ["Towing Service", "Roadside Assistance", "Emergency Towing"],
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
