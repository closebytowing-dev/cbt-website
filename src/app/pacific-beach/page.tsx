
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { areaHref, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pacific Beach Towing | 92109 | 24/7 | CloseBy",
  description:
    "Towing in Pacific Beach 92109. Serving Garnet Ave, Crystal Pier, Mission Bay & boardwalk. Fast 15-25 min response from PB's local beach community tow experts.",
  keywords:
    "towing Pacific Beach, PB tow truck, 92109 towing, Garnet Avenue towing, Crystal Pier roadside assistance, Mission Boulevard towing, beach towing San Diego",
  openGraph: {
    title: "Towing in Pacific Beach San Diego | 24/7 | CloseBy Towing",
    url: "https://www.closebytowing.com/pacific-beach",
    type: "website",
  },
  alternates: {
    canonical: "https://www.closebytowing.com/pacific-beach",
  },
};

// Pacific Beach ZIP codes: 92109 (primary), parts of 92109
const PB_ZIP_CODES = ["92109"];

const LOCAL_LANDMARKS = [
  {
    name: "Garnet Avenue",
    description: "Main street with bars, restaurants & busy nightlife parking",
    icon: "🍻",
  },
  {
    name: "Crystal Pier",
    description: "Historic pier area & beachfront parking lots",
    icon: "🏖️",
  },
  {
    name: "Mission Bay",
    description: "Waterfront recreation area & Belmont Park vicinity",
    icon: "🌊",
  },
  {
    name: "Pacific Beach Drive",
    description: "Beachfront residential & tourist areas",
    icon: "🏡",
  },
  {
    name: "Grand Avenue",
    description: "Shopping, dining & residential corridor",
    icon: "🛍️",
  },
  {
    name: "Crown Point",
    description: "Mission Bay residential area & boat launches",
    icon: "⛵",
  },
];

const NEARBY_AREAS = [
  { name: "Mission Beach", slug: "mission-beach" },
  { name: "La Jolla", slug: "la-jolla" },
  { name: "Clairemont", slug: "clairemont" },
  { name: "Mission Bay", slug: "mission-bay" },
  { name: "University City", slug: "university-city" },
  { name: "Ocean Beach", slug: "ocean-beach" },
];

const SERVICES = [
  { name: "General Towing", slug: "towing", icon: "🚗" },
  { name: "Emergency Towing", slug: "emergency-towing", icon: "🚨" },
  { name: "Flatbed Towing", slug: "flatbed-towing", icon: "🛻" },
  { name: "Accident Towing", slug: "accident-towing", icon: "💥" },
  { name: "Roadside Assistance", slug: "roadside-assistance", icon: "🔧" },
];

const FAQ_DATA = [
  {
    question: "How fast can you get to Pacific Beach?",
    answer:
      "We typically arrive in Pacific Beach within 15-25 minutes. Our drivers know the beach community well, including the busy weekend and nightlife traffic patterns. We can reach you whether you're on Garnet, near Crystal Pier, or by Mission Bay.",
  },
  {
    question: "Do you service the Garnet Avenue bar district?",
    answer:
      "Yes! We frequently help people in the Garnet Avenue area, especially during weekend nights. Whether it's a dead battery after a long night, a lockout, or someone who needs a ride home with their car, we're familiar with the parking lots, side streets, and best routes through the area.",
  },
  {
    question: "Can you tow from beach parking lots?",
    answer:
      "Absolutely. We service all Pacific Beach parking areas including the beach lots, street parking along Mission Boulevard, and the lots near Crystal Pier and Belmont Park. We handle sand lot recoveries and can navigate tight beach community streets.",
  },
  {
    question: "What about Mission Bay area coverage?",
    answer:
      "We cover all of Mission Bay including Crown Point, Sail Bay, and the recreation areas. Whether you're near the boat launches, parks, or residential areas, we can reach you quickly. We're familiar with the winding roads around the bay.",
  },
];

export default function PacificBeachPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-600 via-blue-500 to-sky-600 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-1.5 mb-6">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                </svg>
                <span className="text-white/90 text-sm font-medium">
                  San Diego&apos;s Beach Community
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Pacific Beach
                <span className="block text-cyan-200 mt-2">Towing & Roadside</span>
              </h1>

              <p className="mt-6 text-xl text-blue-100 leading-relaxed max-w-xl">
                Need a tow truck in Pacific Beach? CloseBy Towing provides fast, affordable{" "}
                <span className="text-cyan-200 font-semibold">towing and roadside assistance</span> throughout the 92109
                area. Dead battery, flat tire, lockout, or accident — our tow trucks cover every street
                in PB. We respond in{" "}
                <span className="text-cyan-200 font-semibold">15-25 minutes</span>, 24/7.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-cyan-200">15-25</div>
                  <div className="text-sm text-blue-100">Min Response</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-cyan-200">24/7</div>
                  <div className="text-sm text-blue-100">Available</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-cyan-200">Beach</div>
                  <div className="text-sm text-blue-100">Experts</div>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call: {CONTACT.phone}
                </a>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/30"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/neighborhoods/shared/city-night-road.webp"
                    alt="Tow truck in Pacific Beach"
                    fill
                    className="object-cover"
                    priority
                    sizes="50vw"
                  />
                  {/* ZIP Code Overlay */}
                  <div className="absolute bottom-4 left-4 bg-sky-600/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <span className="text-white font-bold text-lg">ZIP: {PB_ZIP_CODES.join(", ")}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-800/70 to-transparent" />
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
              We Know <span className="text-cyan-600">Pacific Beach</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              From Crystal Pier to Mission Bay, our drivers know every corner of PB.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCAL_LANDMARKS.map((landmark, i) => (
              <div
                key={i}
                className="group bg-slate-50 hover:bg-cyan-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-cyan-200"
              >
                <div className="text-4xl mb-4">{landmark.icon}</div>
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-cyan-600">
                  {landmark.name}
                </h3>
                <p className="mt-2 text-slate-600 text-sm">{landmark.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Pacific Beach Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Pacific Beach&apos;s <span className="text-cyan-600">Beach-Ready Towing</span>
              </h2>
              <div className="mt-6 prose prose-lg text-slate-600">
                <p>
                  Pacific Beach - or &quot;PB&quot; to locals - is San Diego&apos;s quintessential
                  beach community. With its vibrant nightlife on Garnet Avenue, the iconic Crystal
                  Pier, and miles of beautiful coastline, PB attracts residents and visitors alike
                  year-round.
                </p>
                <p>
                  The beach lifestyle means unique towing challenges: sandy parking lots, crowded
                  nightlife areas, and tight residential streets. Our drivers are PB veterans who
                  understand the community&apos;s rhythm, from quiet weekday mornings to packed
                  weekend nights.
                </p>
                <p>
                  Whether you&apos;re a local heading home from the bars, a visitor whose rental car
                  won&apos;t start, or someone who parked a little too close to the sand, we&apos;re
                  here to help 24/7.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Pacific Beach Coverage</h3>
              <div className="space-y-3">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-2">Major Streets:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Garnet Ave",
                      "Grand Ave",
                      "Mission Blvd",
                      "Ingraham St",
                      "Pacific Beach Dr",
                      "Cass St",
                    ].map((street) => (
                      <span
                        key={street}
                        className="bg-white px-3 py-1 rounded-full text-sm text-slate-600 border"
                      >
                        {street}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-2">Areas Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Crystal Pier", "Crown Point", "Mission Bay", "Sail Bay", "Fanuel Park", "Tourmaline"].map(
                      (area) => (
                        <span
                          key={area}
                          className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {area}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
                  <h4 className="font-semibold text-sm mb-2 text-cyan-800">ZIP Codes Served:</h4>
                  <div className="flex flex-wrap gap-2">
                    {PB_ZIP_CODES.map((zip) => (
                      <span
                        key={zip}
                        className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-bold"
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

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Services in <span className="text-cyan-600">Pacific Beach</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={areaHref(service.slug)}
                className="group bg-slate-50 hover:bg-cyan-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-cyan-200 text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-slate-900 group-hover:text-cyan-600">
                  {service.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas Section */}
      <section className="py-16 sm:py-24 bg-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Also Serving <span className="text-cyan-200">Beach Communities</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {NEARBY_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={areaHref(area.slug)}
                className="group bg-white/10 rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all"
              >
                <span className="font-semibold group-hover:text-cyan-200">{area.name}</span>
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
              Pacific Beach <span className="text-cyan-600">FAQ</span>
            </h2>
          </div>
          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50">
                  <h3 className="font-semibold text-slate-900 pr-8">{faq.question}</h3>
                  <svg
                    className="w-5 h-5 text-cyan-500 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-cyan-600 via-blue-500 to-sky-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold">
            Need a Tow in <span className="text-cyan-200">Pacific Beach?</span>
          </h2>
          <p className="mt-6 text-xl text-blue-100">
            Beach community towing experts. Available 24/7.
          </p>
          <div className="mt-10">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call: {CONTACT.phone}
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-blue-100">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Trusted by San Diego Drivers
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-200" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              24/7 Service
            </span>
          </div>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
            {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.closebytowing.com"
            },
            {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "San Diego Towing",
                  "item": "https://www.closebytowing.com/towing"
            },
            {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Pacific Beach",
                  "item": "https://www.closebytowing.com/pacific-beach"
            }
      ]
}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.closebytowing.com/pacific-beach",
            name: "CloseBy Towing - Pacific Beach",
            description:
              "Towing in Pacific Beach 92109. Serving Garnet Ave, Crystal Pier, Mission Bay, Tourmaline & boardwalk 24/7. San Diego's beach community towing experts.",
            url: "https://www.closebytowing.com/pacific-beach",
            telephone: CONTACT.phone,
            areaServed: [
              {
                "@type": "PostalAddress",
                postalCode: "92109",
                addressLocality: "Pacific Beach",
                addressRegion: "CA",
              },
            ],
            geo: {
              "@type": "GeoCoordinates",
              latitude: 32.7997,
              longitude: -117.2356,
            },
            serviceType: ["Towing Service", "Roadside Assistance", "Beach Vehicle Recovery"],
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
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
    </main>
  );
}
