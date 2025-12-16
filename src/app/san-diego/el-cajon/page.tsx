
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT, STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Towing in El Cajon CA | 24/7 Service | CloseBy Towing",
  description:
    "Fast towing & roadside assistance in El Cajon. Serving Downtown, Parkway Plaza, Fletcher Hills, I-8 corridor. 20-35 min response, 24/7 availability.",
  keywords: "towing El Cajon, El Cajon tow truck, Parkway Plaza towing, Fletcher Hills roadside assistance, I-8 El Cajon",
  openGraph: {
    title: "Towing in El Cajon CA | 24/7 Service | CloseBy Towing",
    description: "Local towing experts serving El Cajon 24/7. The Big Box.",
    url: "https://www.closebytowing.com/san-diego/el-cajon",
    type: "website",
  },
  alternates: { canonical: "https://www.closebytowing.com/san-diego/el-cajon" },
};

const LOCAL_LANDMARKS = [
  { name: "Downtown El Cajon", description: "Main Street businesses, restaurants & civic center", icon: "🏛️" },
  { name: "Parkway Plaza", description: "East County's largest mall with extensive parking", icon: "🛒" },
  { name: "Fletcher Hills", description: "Residential hillside community & Valhalla HS area", icon: "🏠" },
  { name: "Gillespie Field", description: "Airport area with aviation businesses & hangars", icon: "✈️" },
  { name: "El Cajon Boulevard", description: "Commercial corridor with diverse businesses", icon: "🏪" },
  { name: "I-8/SR-67 Junction", description: "Major freeway interchange & Magnolia Avenue area", icon: "🛣️" },
];

const NEARBY_AREAS = [
  { name: "La Mesa", slug: "la-mesa" },
  { name: "Santee", slug: "santee" },
  { name: "Spring Valley", slug: "spring-valley" },
  { name: "Alpine", slug: "alpine" },
  { name: "Lakeside", slug: "lakeside" },
  { name: "Rancho San Diego", slug: "rancho-san-diego" },
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
    question: "How fast can you get to El Cajon?",
    answer: "Our average response time to El Cajon is 20-35 minutes. We have excellent access via I-8 and can quickly reach all areas including Downtown, Parkway Plaza, Fletcher Hills, and the Gillespie Field vicinity. Our drivers know the local streets well.",
  },
  {
    question: "Do you service Parkway Plaza Mall?",
    answer: "Yes, we frequently service Parkway Plaza. As East County's largest shopping center, parking lot issues are common - dead batteries from long shopping trips, lockouts, and minor fender benders. Our trucks can navigate the large parking areas and covered structures easily.",
  },
  {
    question: "Can you tow from the I-8/SR-67 interchange area?",
    answer: "Absolutely. This is one of East County's busiest interchanges, and we provide rapid response to breakdowns and accidents in this area. We coordinate with CHP and can safely remove vehicles from the freeway shoulders and ramps.",
  },
  {
    question: "Do you serve Fletcher Hills and Granite Hills?",
    answer: "Yes, we serve all El Cajon residential areas including Fletcher Hills, Granite Hills, Bostonia, and the neighborhoods around Valhalla High School. The hillside terrain is no problem for our equipment - we can reach you wherever you are.",
  },
];

export default function ElCajonPage() {
  return (
    <main className="bg-white">
      {/* Hero - Warm red-brown desert theme for East County */}
      <section className="relative bg-gradient-to-br from-red-900 via-orange-800 to-amber-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span className="text-red-200 text-sm font-medium">East County&apos;s Largest City</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                El Cajon
                <span className="block text-orange-300 mt-2">Towing & Roadside</span>
              </h1>

              <p className="mt-6 text-xl text-orange-100 leading-relaxed max-w-xl">
                Fast, reliable towing throughout <span className="text-orange-300 font-semibold">El Cajon</span> and East County.
                From <span className="text-orange-300 font-semibold">Downtown</span> to{" "}
                <span className="text-orange-300 font-semibold">Parkway Plaza</span>,{" "}
                <span className="text-orange-300 font-semibold">20-35 minute</span> response.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-orange-300">20-35</div>
                  <div className="text-sm text-orange-100">Min Response</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-orange-300">24/7</div>
                  <div className="text-sm text-orange-100">Available</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-orange-300">I-8</div>
                  <div className="text-sm text-orange-100">& SR-67</div>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href={`tel:${CONTACT.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call: {CONTACT.phone}
                </a>
                <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/30">
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image src="/hero/home-hero.webp" alt="Tow truck in El Cajon" fill className="object-cover" priority sizes="50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landmarks */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">We Know <span className="text-orange-600">El Cajon</span></h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">From Downtown to Fletcher Hills, our drivers know every corner of &quot;The Big Box.&quot;</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCAL_LANDMARKS.map((l, i) => (
              <div key={i} className="group bg-slate-50 hover:bg-orange-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-orange-200">
                <div className="text-4xl mb-4">{l.icon}</div>
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-orange-600">{l.name}</h3>
                <p className="mt-2 text-slate-600 text-sm">{l.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">El Cajon&apos;s <span className="text-orange-600">Reliable Towing Service</span></h2>
              <div className="mt-6 prose prose-lg text-slate-600">
                <p>El Cajon, nicknamed &quot;The Big Box&quot; for its valley location surrounded by mountains, is East County&apos;s largest city and a regional hub for shopping, dining, and services. With Parkway Plaza drawing shoppers from throughout the region, there&apos;s always vehicle activity.</p>
                <p>The city&apos;s location at the junction of I-8 and SR-67 means heavy traffic and the inevitable breakdowns that come with it. Our drivers are strategically positioned to respond quickly to calls throughout El Cajon.</p>
                <p>From the car dealerships along El Cajon Boulevard to the quiet streets of Fletcher Hills, from Gillespie Field aviation businesses to Downtown&apos;s revitalized Main Street, we provide professional towing service wherever you need it.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">El Cajon Coverage</h3>
              <div className="space-y-3">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-2">Major Roads:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Main St", "El Cajon Blvd", "Magnolia Ave", "Fletcher Parkway", "Broadway"].map((r) => (
                      <span key={r} className="bg-white px-3 py-1 rounded-full text-sm text-slate-600 border">{r}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-2">Freeway Access:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["I-8", "SR-67", "SR-125", "SR-52"].map((f) => (
                      <span key={f} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Services in <span className="text-orange-600">El Cajon</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/san-diego/${s.slug}`} className="group bg-slate-50 hover:bg-orange-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-orange-200 text-center">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-slate-900 group-hover:text-orange-600">{s.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby */}
      <section className="py-16 sm:py-24 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Also Serving <span className="text-orange-300">East County</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {NEARBY_AREAS.map((a) => (
              <Link key={a.slug} href={`/san-diego/${a.slug}`} className="group bg-white/10 rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all">
                <span className="font-semibold group-hover:text-orange-300">{a.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">El Cajon <span className="text-orange-600">FAQ</span></h2>
          </div>
          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50">
                  <h3 className="font-semibold text-slate-900 pr-8">{faq.question}</h3>
                  <svg className="w-5 h-5 text-orange-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6"><p className="text-slate-600">{faq.answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-red-900 via-orange-800 to-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold">Need a Tow in <span className="text-orange-300">El Cajon?</span></h2>
          <p className="mt-6 text-xl text-orange-100">East County&apos;s trusted towing service. Available 24/7.</p>
          <div className="mt-10">
            <a href={`tel:${CONTACT.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call: {CONTACT.phone}
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-orange-200">
            <span className="flex items-center gap-2"><svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>Trusted by San Diego Drivers</span>
            <span className="flex items-center gap-2"><svg className="w-5 h-5 text-orange-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>24/7 Service</span>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://www.closebytowing.com/san-diego/el-cajon", name: "CloseBy Towing - El Cajon", description: "Fast towing and roadside assistance in El Cajon CA. Serving Downtown, Parkway Plaza, Fletcher Hills 24/7.", url: "https://www.closebytowing.com/san-diego/el-cajon", telephone: CONTACT.phone, areaServed: { "@type": "City", name: "El Cajon", containedInPlace: { "@type": "County", name: "San Diego County" } }, serviceType: ["Towing Service", "Roadside Assistance"], priceRange: "$$" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ_DATA.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
    </main>
  );
}
