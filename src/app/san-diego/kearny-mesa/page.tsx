
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT, STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Towing in Kearny Mesa San Diego | 24/7 Service | CloseBy Towing",
  description:
    "Fast towing & roadside assistance in Kearny Mesa. Serving auto dealers, Convoy District, business parks & SR-163/I-805 corridors. 20-35 min response.",
  keywords:
    "towing Kearny Mesa, Kearny Mesa tow truck, Convoy Street towing, auto dealer towing, business park roadside assistance",
  openGraph: {
    title: "Towing in Kearny Mesa San Diego | 24/7 Service | CloseBy Towing",
    description: "Local towing experts serving Kearny Mesa 24/7. Auto Row, Convoy District & business parks.",
    url: "https://www.closebytowing.com/san-diego/kearny-mesa",
    type: "website",
  },
  alternates: { canonical: "https://www.closebytowing.com/san-diego/kearny-mesa" },
};

const LOCAL_LANDMARKS = [
  { name: "Auto Row / Kearny Mesa Mile", description: "Serving all dealerships - new car transport & customer vehicles", icon: "🚗" },
  { name: "Convoy District", description: "Asian restaurants, markets & busy retail parking", icon: "🍜" },
  { name: "Montgomery Field", description: "Airport vicinity & aviation business support", icon: "✈️" },
  { name: "Spectrum Business Parks", description: "Corporate offices & tech company campuses", icon: "🏢" },
  { name: "SR-163 / I-805 Access", description: "Quick freeway response & interchange coverage", icon: "🛣️" },
  { name: "Industrial Areas", description: "Warehouses, distribution centers & commercial fleets", icon: "🏭" },
];

const NEARBY_AREAS = [
  { name: "Clairemont", slug: "clairemont" },
  { name: "Mission Valley", slug: "mission-valley" },
  { name: "University City", slug: "university-city" },
  { name: "Mira Mesa", slug: "mira-mesa" },
  { name: "Serra Mesa", slug: "serra-mesa" },
  { name: "Linda Vista", slug: "linda-vista" },
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
    question: "Do you provide towing for auto dealerships on Kearny Mesa Mile?",
    answer: "Yes, we work with many dealerships along Kearny Mesa's Auto Row. We provide new vehicle transport, customer vehicle towing, and lot management services. Our flatbed trucks are perfect for moving new inventory without adding miles.",
  },
  {
    question: "How fast can you respond to the Convoy District?",
    answer: "We typically reach the Convoy District in 15-25 minutes. We know the busy restaurant parking lots, the markets, and the side streets well. Whether you're stuck at a packed dim sum spot or need help behind one of the Asian supermarkets, we can navigate the area quickly.",
  },
  {
    question: "Do you service commercial vehicles in Kearny Mesa?",
    answer: "Absolutely. Kearny Mesa has many business parks, warehouses, and industrial areas. We handle commercial vehicles, fleet vehicles, and work trucks. Our equipment can handle medium-duty commercial vehicles in addition to standard passenger cars.",
  },
  {
    question: "Can you tow from Montgomery Field area?",
    answer: "Yes, we serve the Montgomery Field area including the surrounding aviation businesses, flight schools, and industrial complexes. We're familiar with the access roads and security protocols in the area.",
  },
];

export default function KearnyMesaPage() {
  return (
    <main className="bg-white">
      {/* Hero - Industrial/Corporate Blue-Gray theme */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span className="text-blue-200 text-sm font-medium">San Diego&apos;s Auto Hub</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Kearny Mesa
                <span className="block text-blue-400 mt-2">Towing & Roadside</span>
              </h1>

              <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-xl">
                San Diego&apos;s auto and business hub deserves fast, professional towing. From <span className="text-blue-400 font-semibold">Auto Row</span> to the{" "}
                <span className="text-blue-400 font-semibold">Convoy District</span>, we respond in <span className="text-blue-400 font-semibold">20-30 minutes</span>.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-blue-400">20-30</div>
                  <div className="text-sm text-slate-300">Min Response</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-blue-400">24/7</div>
                  <div className="text-sm text-slate-300">Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-blue-400">Fleet</div>
                  <div className="text-sm text-slate-300">Ready</div>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href={`tel:${CONTACT.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg">
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
                  <Image src="/hero/home-hero.webp" alt="Tow truck in Kearny Mesa" fill className="object-cover" priority sizes="50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">We Know <span className="text-blue-600">Kearny Mesa</span></h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">From auto dealers to tech parks, our drivers know every corner of Kearny Mesa.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCAL_LANDMARKS.map((landmark, i) => (
              <div key={i} className="group bg-slate-50 hover:bg-blue-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-blue-200">
                <div className="text-4xl mb-4">{landmark.icon}</div>
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">{landmark.name}</h3>
                <p className="mt-2 text-slate-600 text-sm">{landmark.description}</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Kearny Mesa&apos;s <span className="text-blue-600">Towing Partner</span></h2>
              <div className="mt-6 prose prose-lg text-slate-600">
                <p>Kearny Mesa is the commercial heart of San Diego - home to Auto Row with dozens of dealerships, the vibrant Convoy District packed with Asian restaurants and markets, Montgomery Field airport, and countless business parks and industrial centers.</p>
                <p>This unique mix of automotive, retail, and commercial businesses requires a towing company that understands the area. We work with dealerships on inventory transport, help restaurant-goers with parking lot mishaps, and support businesses with fleet vehicle assistance.</p>
                <p>With SR-163 and I-805 running through the area, we&apos;re positioned for quick response to both freeway emergencies and local calls.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Kearny Mesa Coverage</h3>
              <div className="space-y-3">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-2">Major Roads:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Convoy St", "Kearny Mesa Rd", "Balboa Ave", "Clairemont Mesa Blvd", "Aero Drive"].map((road) => (
                      <span key={road} className="bg-white px-3 py-1 rounded-full text-sm text-slate-600 border">{road}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-2">Freeway Access:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["SR-163", "I-805", "SR-52"].map((f) => (
                      <span key={f} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{f}</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Services in <span className="text-blue-600">Kearny Mesa</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/san-diego/${s.slug}`} className="group bg-slate-50 hover:bg-blue-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-blue-200 text-center">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-slate-900 group-hover:text-blue-600">{s.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby */}
      <section className="py-16 sm:py-24 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Also Serving <span className="text-blue-400">Nearby Areas</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {NEARBY_AREAS.map((a) => (
              <Link key={a.slug} href={`/san-diego/${a.slug}`} className="group bg-white/10 rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all">
                <span className="font-semibold group-hover:text-blue-400">{a.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Kearny Mesa <span className="text-blue-600">FAQ</span></h2>
          </div>
          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50">
                  <h3 className="font-semibold text-slate-900 pr-8">{faq.question}</h3>
                  <svg className="w-5 h-5 text-blue-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6"><p className="text-slate-600">{faq.answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-800 via-slate-700 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold">Need a Tow in <span className="text-blue-400">Kearny Mesa?</span></h2>
          <p className="mt-6 text-xl text-slate-300">Auto Row, Convoy, business parks - we cover it all. Call now.</p>
          <div className="mt-10">
            <a href={`tel:${CONTACT.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call: {CONTACT.phone}
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-300">
            <span className="flex items-center gap-2"><svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>{STATS.rating} ({STATS.reviewCount}+ Reviews)</span>
            <span className="flex items-center gap-2"><svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>24/7 Service</span>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://www.closebytowing.com/san-diego/kearny-mesa", name: "CloseBy Towing - Kearny Mesa", description: "Fast towing and roadside assistance in Kearny Mesa San Diego. Serving Auto Row, Convoy District, and business parks 24/7.", url: "https://www.closebytowing.com/san-diego/kearny-mesa", telephone: CONTACT.phone, areaServed: { "@type": "Neighborhood", name: "Kearny Mesa", containedInPlace: { "@type": "City", name: "San Diego" } }, serviceType: ["Towing Service", "Roadside Assistance"], priceRange: "$$" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ_DATA.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
    </main>
  );
}
