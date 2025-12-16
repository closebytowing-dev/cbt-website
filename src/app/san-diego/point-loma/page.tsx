
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

// SEO Metadata
export const metadata: Metadata = {
  title: "Towing in Point Loma San Diego | 24/7 Naval Service | CloseBy Towing",
  description:
    "Professional towing & roadside assistance in Point Loma. Serving Liberty Station, Cabrillo, Naval Base, and Shelter Island. 15-30 min response to peninsula areas.",
  keywords:
    "towing Point Loma, Point Loma tow truck, Liberty Station towing, roadside assistance Point Loma, Shelter Island towing, tow truck near me Point Loma",
  openGraph: {
    title: "Towing in Point Loma San Diego | 24/7 Naval Service | CloseBy Towing",
    description:
      "Point Loma's trusted towing service 24/7. From Liberty Station to Cabrillo Monument, professional maritime community service.",
    url: "https://www.closebytowing.com/san-diego/point-loma",
    type: "website",
  },
  alternates: {
    canonical: "https://www.closebytowing.com/san-diego/point-loma",
  },
};

// Point Loma specific landmarks
const LOCAL_LANDMARKS = [
  {
    name: "Liberty Station",
    description: "Arts district, shopping & dining center service",
    icon: "🎨",
  },
  {
    name: "Cabrillo National Monument",
    description: "Historic park and scenic viewpoint access",
    icon: "🗽",
  },
  {
    name: "Shelter Island",
    description: "Marina, hotels & waterfront restaurant area",
    icon: "⚓",
  },
  {
    name: "Naval Base Point Loma",
    description: "Military community and surrounding areas",
    icon: "⚓",
  },
  {
    name: "Rosecrans Cemetery",
    description: "Fort Rosecrans and memorial area service",
    icon: "🇺🇸",
  },
  {
    name: "Sunset Cliffs (South)",
    description: "Southern coastal cliffs and residential areas",
    icon: "🌊",
  },
];

// Nearby neighborhoods
const NEARBY_AREAS = [
  { name: "Ocean Beach", slug: "ocean-beach" },
  { name: "Mission Beach", slug: "mission-beach" },
  { name: "La Jolla", slug: "la-jolla" },
  { name: "Downtown San Diego", slug: "downtown" },
  { name: "Coronado", slug: "coronado" },
  { name: "Pacific Beach", slug: "pacific-beach" },
];

// Services offered
const SERVICES = [
  { name: "General Towing", slug: "towing", icon: "🚗" },
  { name: "Emergency Towing", slug: "emergency-towing", icon: "🚨" },
  { name: "Flatbed Towing", slug: "flatbed-towing", icon: "🛻" },
  { name: "Accident Towing", slug: "accident-towing", icon: "💥" },
  { name: "Roadside Assistance", slug: "roadside-assistance", icon: "🔧" },
];

// FAQ Data specific to Point Loma
const FAQ_DATA = [
  {
    question: "Can you provide service to Liberty Station?",
    answer:
      "Yes, absolutely! Liberty Station is one of our regular service areas. We're familiar with the entire arts district, including the parking areas near the restaurants, shops, breweries, and event venues. Whether you're at the Marketplace, attending an event at Liberty Public Market, or visiting the Stone Brewing location, we can reach you quickly—typically within 15-25 minutes.",
  },
  {
    question: "Do you serve the Naval Base Point Loma area?",
    answer:
      "We provide service to the areas surrounding the Naval Base and work with military personnel and families in the Point Loma community. While base access requires proper clearance, we can assist with vehicles at the gates or in the surrounding neighborhoods. We're proud to serve our military community with professional, respectful service.",
  },
  {
    question: "How quickly can you reach Shelter Island?",
    answer:
      "Shelter Island is easily accessible for our team, and we typically arrive within 15-25 minutes. We know the marina areas, hotel parking lots, and waterfront restaurants well. Whether you're visiting the bay-side parks, staying at one of the hotels, or dining with a harbor view, we provide fast, reliable service.",
  },
  {
    question: "Can you tow from Cabrillo National Monument?",
    answer:
      "Yes, we regularly service Cabrillo National Monument and the surrounding area. The winding roads up to the monument and the limited parking can be challenging, but our experienced drivers handle these conditions routinely. Whether you need help at the monument itself, the lighthouse, or the tidepools area, we'll reach you safely.",
  },
  {
    question: "Do you handle the steep hills and narrow streets in Point Loma?",
    answer:
      "Definitely. Point Loma is known for its steep terrain and narrow residential streets, especially in the hillside neighborhoods. Our drivers are experienced with these challenging conditions and have the right equipment to safely navigate grades, tight corners, and limited space. We handle Point Loma's unique geography with expertise.",
  },
];

export default function PointLomaPage() {
  return (
    <main className="bg-white">
      {/* Hero Section - Navy/Silver nautical theme for Point Loma's maritime heritage */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        {/* Nautical wave decoration */}
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
              <div className="inline-flex items-center gap-2 bg-slate-500/20 border border-slate-400/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-slate-200 text-sm font-medium">Serving Point Loma 24/7</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Point Loma
                <span className="block text-slate-300 mt-2">Maritime Towing</span>
              </h1>

              <p className="mt-6 text-xl text-slate-100 leading-relaxed max-w-xl">
                Your peninsula towing specialists. From <span className="text-slate-300 font-semibold">Liberty Station</span> to{" "}
                <span className="text-slate-300 font-semibold">Cabrillo Monument</span>, professional service with{" "}
                <span className="text-slate-300 font-semibold">15-30 minute</span> response times.
              </p>

              {/* Quick stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-slate-300">15-30</div>
                  <div className="text-sm text-slate-100">Min Response</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-slate-300">24/7</div>
                  <div className="text-sm text-slate-100">Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-slate-300">Naval</div>
                  <div className="text-sm text-slate-100">Community</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-slate-400 hover:bg-slate-300 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-slate-500/30"
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-400/30">
                <div className="aspect-[4/3] bg-slate-900/50 relative">
                  <Image
                    src="/hero/home-hero.webp"
                    alt="Professional tow truck serving Point Loma San Diego near Liberty Station"
                    fill
                    className="object-cover"
                    priority
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
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
              We Know <span className="text-slate-700">Point Loma</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              From historic maritime sites to modern arts districts, our drivers navigate the entire peninsula with precision.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCAL_LANDMARKS.map((landmark, index) => (
              <div
                key={index}
                className="group bg-slate-50 hover:bg-slate-100 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-slate-300"
              >
                <div className="text-4xl mb-4">{landmark.icon}</div>
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-slate-700 transition-colors">
                  {landmark.name}
                </h3>
                <p className="mt-2 text-slate-600 text-sm">{landmark.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Point Loma Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Point Loma&apos;s <span className="text-slate-700">Trusted Peninsula Service</span>
              </h2>

              <div className="mt-6 prose prose-lg text-slate-600">
                <p>
                  Point Loma is San Diego&apos;s historic maritime peninsula, home to naval installations, scenic coastlines, and vibrant communities. This unique geography—surrounded by water on three sides—requires towing services that understand both the terrain and the community.
                </p>
                <p>
                  Whether you&apos;re at Liberty Station&apos;s arts district, visiting Cabrillo National Monument, dining on Shelter Island, serving at Naval Base Point Loma, or living in the hillside neighborhoods, CloseBy Towing provides professional, reliable service to the entire peninsula.
                </p>
                <p>
                  Our drivers know Point Loma&apos;s challenges: steep hills, narrow streets, winding coastal roads, and limited access points. We&apos;re proud to serve both our military community and local residents with respect, efficiency, and expertise. Fast 15-30 minute response times throughout the peninsula.
                </p>
              </div>

              {/* Common services callout */}
              <div className="mt-8 bg-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">Common Point Loma Services:</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "Liberty Station assistance",
                    "Shelter Island marina service",
                    "Hillside neighborhood towing",
                    "Naval community support",
                    "Cabrillo Monument access",
                    "Coastal road recovery",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Point Loma Coverage
              </h3>

              <div className="space-y-3">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">Peninsula Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Liberty Station", "Shelter Island", "Roseville", "Fleetridge", "Wooded Area", "La Playa"].map((area) => (
                      <span key={area} className="bg-white px-3 py-1 rounded-full text-sm text-slate-600 border border-slate-200">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">Major Routes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Rosecrans Street", "Catalina Blvd", "Shelter Island Dr", "Harbor Drive"].map((route) => (
                      <span key={route} className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                        {route}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">Key Destinations:</h4>
                  <div className="grid grid-cols-2 gap-1 text-sm text-slate-600">
                    <span>• Liberty Public Market</span>
                    <span>• Stone Brewing</span>
                    <span>• Shelter Island Yacht Basin</span>
                    <span>• Fort Rosecrans</span>
                    <span>• Point Loma Nazarene</span>
                    <span>• Tidepools</span>
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
              Services in <span className="text-slate-700">Point Loma</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Full range of professional towing and roadside services available 24/7 throughout Point Loma.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/san-diego/${service.slug}`}
                className="group bg-slate-50 hover:bg-slate-100 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-slate-300 text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-slate-500 mt-2">Available in Point Loma</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Also Serving <span className="text-slate-300">Nearby Areas</span>
            </h2>
            <p className="mt-4 text-lg text-slate-200 max-w-2xl mx-auto">
              Point Loma connects to San Diego&apos;s coastal and downtown communities. We serve them all.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {NEARBY_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/san-diego/${area.slug}`}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1"
              >
                <span className="font-semibold text-white group-hover:text-slate-300 transition-colors">
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
              Point Loma Towing <span className="text-slate-700">FAQ</span>
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
                    className="w-5 h-5 text-slate-700 flex-shrink-0 transition-transform group-open:rotate-180"
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
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold">
            Need a Tow in <span className="text-slate-300">Point Loma?</span>
          </h2>

          <p className="mt-6 text-xl text-slate-100 max-w-2xl mx-auto">
            Professional peninsula service. Our experienced drivers are ready to help 24/7 with maritime-grade reliability and respect.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-slate-400 hover:bg-slate-300 text-slate-900 px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: {CONTACT.phone}
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-200">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
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
              <svg className="w-5 h-5 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>24/7 Peninsula Service</span>
            </div>
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
                  "item": "https://www.closebytowing.com/san-diego/towing"
            },
            {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Point Loma",
                  "item": "https://www.closebytowing.com/san-diego/point-loma"
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
            "@id": "https://www.closebytowing.com/san-diego/point-loma",
            name: "CloseBy Towing - Point Loma",
            description:
              "Professional towing and roadside assistance in Point Loma San Diego. Serving Liberty Station, Cabrillo Monument, Shelter Island, and Naval Base areas 24/7. Peninsula specialists.",
            url: "https://www.closebytowing.com/san-diego/point-loma",
            telephone: CONTACT.phone,
            areaServed: {
              "@type": "Neighborhood",
              name: "Point Loma",
              containedInPlace: {
                "@type": "City",
                name: "San Diego",
              },
            },
            serviceType: ["Towing Service", "Roadside Assistance", "Military Community Service"],
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
