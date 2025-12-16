
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

// SEO Metadata
export const metadata: Metadata = {
  title: "Clairemont Towing | 24/7 Service | CloseBy",
  description:
    "Fast towing & roadside assistance in Clairemont Mesa. Serving Clairemont Square, Mesa College area, I-5/I-805 corridors. 20-35 min response, 24/7.",
  keywords:
    "towing Clairemont, Clairemont Mesa tow truck, Clairemont Square towing, Mesa College roadside assistance, Bay Park towing, tow truck near me Clairemont",
  openGraph: {
    title: "Clairemont Towing | 24/7 Service | CloseBy",
    description:
      "Local towing experts serving Clairemont 24/7. From Clairemont Square to Bay Park, we're your neighborhood towing solution.",
    url: "https://www.closebytowing.com/san-diego/clairemont",
    type: "website",
  },
  alternates: {
    canonical: "https://www.closebytowing.com/san-diego/clairemont",
  },
};

// Clairemont specific landmarks
const LOCAL_LANDMARKS = [
  {
    name: "Clairemont Square",
    description: "Shopping center with Target, restaurants & retail parking",
    icon: "🛒",
  },
  {
    name: "Mesa College Area",
    description: "Student & faculty vehicle assistance on campus perimeter",
    icon: "🎓",
  },
  {
    name: "Bay Park",
    description: "Residential & commercial areas near Mission Bay",
    icon: "🏠",
  },
  {
    name: "Clairemont Town Square",
    description: "Vons, CVS & neighborhood shopping center",
    icon: "🏬",
  },
  {
    name: "Clairemont Drive Corridor",
    description: "Main arterial with auto shops, restaurants & businesses",
    icon: "🛣️",
  },
  {
    name: "Tecolote Canyon",
    description: "Surrounding residential areas & trail access points",
    icon: "🌿",
  },
];

// Nearby neighborhoods
const NEARBY_AREAS = [
  { name: "Pacific Beach", slug: "pacific-beach" },
  { name: "Mission Valley", slug: "mission-valley" },
  { name: "University City", slug: "university-city" },
  { name: "Kearny Mesa", slug: "kearny-mesa" },
  { name: "Linda Vista", slug: "linda-vista" },
  { name: "Mission Bay", slug: "mission-bay" },
];

// Services offered
const SERVICES = [
  { name: "General Towing", slug: "towing", icon: "🚗" },
  { name: "Emergency Towing", slug: "emergency-towing", icon: "🚨" },
  { name: "Flatbed Towing", slug: "flatbed-towing", icon: "🛻" },
  { name: "Accident Towing", slug: "accident-towing", icon: "💥" },
  { name: "Roadside Assistance", slug: "roadside-assistance", icon: "🔧" },
];

// FAQ Data specific to Clairemont
const FAQ_DATA = [
  {
    question: "How fast can you get to Clairemont?",
    answer:
      "Our average response time to Clairemont is 20-30 minutes. We're strategically positioned to reach all parts of Clairemont quickly, whether you're near Mesa College, Clairemont Square, or in the residential areas near Bay Park.",
  },
  {
    question: "Do you service the I-5 and I-805 through Clairemont?",
    answer:
      "Yes, we provide rapid freeway response on both I-5 and I-805 through the Clairemont area. We're familiar with all on-ramps, off-ramps, and the merge areas. We can safely remove vehicles from shoulders and coordinate with CHP when needed.",
  },
  {
    question: "Can you help with student vehicles near Mesa College?",
    answer:
      "Absolutely. We frequently assist students, faculty, and visitors near San Diego Mesa College. Whether it's a dead battery before class, a flat tire in the parking lot, or a lockout after a long study session, we're here to help.",
  },
  {
    question: "What areas of Clairemont do you cover?",
    answer:
      "We cover all of Clairemont including North Clairemont, Clairemont Mesa East and West, Bay Park, Bay Ho, and the areas surrounding Tecolote Canyon. Our drivers know the neighborhood streets, cul-de-sacs, and apartment complex access routes.",
  },
  {
    question: "Do you offer towing from apartment complexes in Clairemont?",
    answer:
      "Yes, we serve all Clairemont apartment communities. We can access gated communities, underground parking, and work with property managers on both resident assistance and unauthorized vehicle removal when needed.",
  },
];

export default function ClairemontPage() {
  return (
    <main className="bg-white">
      {/* Hero Section - Teal/Coastal theme for Clairemont's proximity to bay */}
      <section className="relative bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 text-white overflow-hidden">
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-24 text-white">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,156.63,69.08,321.39,56.44Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-teal-200 text-sm font-medium">Serving Clairemont 24/7</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Clairemont
                <span className="block text-teal-300 mt-2">Towing & Roadside</span>
              </h1>

              <p className="mt-6 text-xl text-teal-100 leading-relaxed max-w-xl">
                Your trusted neighborhood towing service in Clairemont. From <span className="text-teal-300 font-semibold">Mesa College</span> to{" "}
                <span className="text-teal-300 font-semibold">Bay Park</span>, we provide fast, reliable service with{" "}
                <span className="text-teal-300 font-semibold">20-30 minute</span> response times.
              </p>

              {/* Quick stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-teal-300">20-30</div>
                  <div className="text-sm text-teal-100">Min Response</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-teal-300">24/7</div>
                  <div className="text-sm text-teal-100">Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-teal-300">I-5/805</div>
                  <div className="text-sm text-teal-100">Coverage</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-teal-500/30"
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-teal-900/50 relative">
                  <Image
                    src="/hero/home-hero.webp"
                    alt="Tow truck serving Clairemont San Diego"
                    fill
                    className="object-cover"
                    priority
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent" />
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
              We Know <span className="text-teal-600">Clairemont</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              From Mesa College to Bay Park, our drivers know every street and shortcut in Clairemont.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCAL_LANDMARKS.map((landmark, index) => (
              <div
                key={index}
                className="group bg-slate-50 hover:bg-teal-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-teal-200"
              >
                <div className="text-4xl mb-4">{landmark.icon}</div>
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-teal-600 transition-colors">
                  {landmark.name}
                </h3>
                <p className="mt-2 text-slate-600 text-sm">{landmark.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Clairemont Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Clairemont&apos;s <span className="text-teal-600">Local Towing Service</span>
              </h2>

              <div className="mt-6 prose prose-lg text-slate-600">
                <p>
                  Clairemont is one of San Diego&apos;s largest and most diverse neighborhoods, with a mix of post-war residential areas, bustling shopping centers, and educational institutions. Originally developed in the 1950s-60s, it remains a vibrant community home to families, students, and professionals.
                </p>
                <p>
                  With major thoroughfares like Clairemont Drive, Clairemont Mesa Boulevard, and Balboa Avenue, plus access to both I-5 and I-805, Clairemont sees significant vehicle traffic daily. Whether you&apos;re commuting to work, shopping at Clairemont Square, or studying at Mesa College, vehicle troubles can strike anytime.
                </p>
                <p>
                  Our drivers live and work in this community. We know the shortcuts through residential streets, the best routes to avoid traffic, and can navigate the many apartment complexes and shopping center parking lots with ease.
                </p>
              </div>

              <div className="mt-8 bg-teal-100 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">Common Clairemont Service Calls:</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "Shopping center lockouts",
                    "College campus assistance",
                    "Residential towing",
                    "Apartment complex service",
                    "Freeway breakdowns (I-5/I-805)",
                    "Jump starts & tire changes",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-teal-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Clairemont Coverage Area
              </h3>

              <div className="space-y-3">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">Major Roads:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Clairemont Drive", "Balboa Ave", "Clairemont Mesa Blvd", "Genesee Ave", "Morena Blvd"].map((road) => (
                      <span key={road} className="bg-white px-3 py-1 rounded-full text-sm text-slate-600 border border-slate-200">
                        {road}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">Sub-Neighborhoods:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["North Clairemont", "Clairemont Mesa East", "Clairemont Mesa West", "Bay Park", "Bay Ho"].map((area) => (
                      <span key={area} className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                        {area}
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
              Services in <span className="text-teal-600">Clairemont</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/san-diego/${service.slug}`}
                className="group bg-slate-50 hover:bg-teal-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-teal-200 text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                  {service.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 sm:py-24 bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Also Serving <span className="text-teal-300">Nearby Areas</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {NEARBY_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/san-diego/${area.slug}`}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all"
              >
                <span className="font-semibold text-white group-hover:text-teal-300 transition-colors">
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
              Clairemont Towing <span className="text-teal-600">FAQ</span>
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
                  <svg className="w-5 h-5 text-teal-500 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold">
            Need a Tow in <span className="text-teal-300">Clairemont?</span>
          </h2>
          <p className="mt-6 text-xl text-teal-100">
            Fast, reliable towing service from your Clairemont neighbors. Call now.
          </p>
          <div className="mt-10">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: {CONTACT.phone}
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-teal-200">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Trusted by San Diego Drivers</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>24/7 Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org */}
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
                  "item": "https://www.closebytowing.com/san-diego/towing"
            },
            {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Clairemont",
                  "item": "https://www.closebytowing.com/san-diego/clairemont"
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
            "@id": "https://www.closebytowing.com/san-diego/clairemont",
            name: "CloseBy Towing - Clairemont",
            description: "Fast towing and roadside assistance in Clairemont San Diego. Serving Mesa College, Clairemont Square, Bay Park and all Clairemont neighborhoods 24/7.",
            url: "https://www.closebytowing.com/san-diego/clairemont",
            telephone: CONTACT.phone,
            areaServed: {
              "@type": "Neighborhood",
              name: "Clairemont",
              containedInPlace: { "@type": "City", name: "San Diego" },
            },
            serviceType: ["Towing Service", "Roadside Assistance"],
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
