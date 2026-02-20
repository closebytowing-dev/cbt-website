
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT, areaHref } from "@/lib/constants";

// Mira Mesa ZIP codes
const MIRA_MESA_ZIP_CODES = ["92126", "92121"];

export const metadata: Metadata = {
  title: "Mira Mesa Towing | 92126, 92121 | 24/7 | CloseBy",
  description:
    "Towing in Mira Mesa 92126 & Sorrento Valley 92121. Serving Miramar, tech corridor, I-15 & Mira Mesa Blvd. 20-35 min response, 24/7.",
  keywords:
    "towing Mira Mesa, Mira Mesa tow truck, Sorrento Valley towing, Miramar roadside assistance, I-15 towing",
  openGraph: {
    title: "Mira Mesa Towing | 24/7 | CloseBy",
    description: "Local towing experts serving Mira Mesa, Miramar & Sorrento Valley 24/7.",
    url: "https://www.closebytowing.com/mira-mesa",
    type: "website",
  },
  alternates: { canonical: "https://www.closebytowing.com/mira-mesa" },
};

const LOCAL_LANDMARKS = [
  { name: "Mira Mesa Mall Area", description: "Target, Best Buy & major retail center parking assistance", icon: "🛒" },
  { name: "Sorrento Valley", description: "Tech campus & biotech corridor employee assistance", icon: "💻" },
  { name: "MCAS Miramar", description: "Base-adjacent residential & commercial areas", icon: "✈️" },
  { name: "I-15 Corridor", description: "Rapid freeway response from Mira Mesa Blvd to SR-56", icon: "🛣️" },
  { name: "Carroll Canyon", description: "Industrial park & business district coverage", icon: "🏭" },
  { name: "Mira Mesa Blvd", description: "Main arterial from I-15 to I-805", icon: "🏘️" },
];

const NEARBY_AREAS = [
  { name: "Scripps Ranch", slug: "scripps-ranch" },
  { name: "Rancho Penasquitos", slug: "rancho-penasquitos" },
  { name: "University City", slug: "university-city" },
  { name: "Kearny Mesa", slug: "kearny-mesa" },
  { name: "Carmel Valley", slug: "carmel-valley" },
  { name: "Poway", slug: "poway" },
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
    question: "How fast can you get to Mira Mesa?",
    answer: "Our typical response time to Mira Mesa is 20-35 minutes. We're well-positioned to serve all of Mira Mesa, from the residential areas near Miramar to the tech campuses in Sorrento Valley. I-15 access makes reaching most locations quick.",
  },
  {
    question: "Do you service the Sorrento Valley tech campuses?",
    answer: "Yes! We frequently help commuters and employees in Sorrento Valley. Whether you're at Qualcomm, one of the biotech companies, or in the business parks along Carroll Canyon, we can reach you quickly. We handle everything from dead batteries after long work days to full towing service.",
  },
  {
    question: "Can you respond to I-15 emergencies through Mira Mesa?",
    answer: "Absolutely. We provide rapid response to I-15 from Mira Mesa Blvd north to SR-56 and beyond. This stretch sees heavy commuter traffic, and we're experienced with the merge areas, carpool lane breakdowns, and shoulder recoveries.",
  },
  {
    question: "What about military families near Miramar?",
    answer: "We proudly serve military families living near MCAS Miramar. We understand the needs of service members and provide reliable, fairly-priced service. We can tow to on-base auto shops or any location you specify.",
  },
];

export default function MiraMesaPage() {
  return (
    <main className="bg-white">
      {/* Hero - Purple/Tech theme for Sorrento Valley tech influence */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-violet-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%)` }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Location badge with ZIP */}
              <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span className="text-purple-200 text-sm font-medium">Serving Mira Mesa 92126 & Sorrento Valley 92121</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Mira Mesa
                <span className="block text-purple-300 mt-2">Towing & Roadside</span>
              </h1>

              <p className="mt-6 text-xl text-purple-100 leading-relaxed max-w-xl">
                From <span className="text-purple-300 font-semibold">Sorrento Valley tech parks</span> to{" "}
                <span className="text-purple-300 font-semibold">Miramar communities</span>, we provide fast, reliable towing with{" "}
                <span className="text-purple-300 font-semibold">20-35 minute</span> response.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-purple-300">20-35</div>
                  <div className="text-sm text-purple-100">Min Response</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-purple-300">24/7</div>
                  <div className="text-sm text-purple-100">Available</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-purple-300">I-15</div>
                  <div className="text-sm text-purple-100">Coverage</div>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href={`tel:${CONTACT.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg">
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
                  <Image src="/neighborhoods/shared/highway-aerial.webp" alt="Professional tow truck serving Mira Mesa San Diego 92126 92121" fill className="object-cover" priority sizes="50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent" />
                </div>
                {/* ZIP Code overlay */}
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
                  92126 • 92121
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">We Know <span className="text-purple-600">Mira Mesa</span></h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">From tech campuses to military housing, our drivers know every corner.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCAL_LANDMARKS.map((l, i) => (
              <div key={i} className="group bg-slate-50 hover:bg-purple-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-purple-200">
                <div className="text-4xl mb-4">{l.icon}</div>
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-purple-600">{l.name}</h3>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Mira Mesa&apos;s <span className="text-purple-600">Trusted Towing Service</span></h2>
              <div className="mt-6 prose prose-lg text-slate-600">
                <p>Mira Mesa is one of San Diego&apos;s largest planned communities, home to diverse neighborhoods, major tech employers in adjacent Sorrento Valley, and families connected to MCAS Miramar. The area&apos;s growth has made reliable towing service essential.</p>
                <p>Whether you&apos;re commuting on I-15, working late at a Sorrento Valley tech company, shopping at the Mira Mesa Mall complex, or living in one of the many residential communities, vehicle problems can happen anytime.</p>
                <p>Our drivers are familiar with the busy intersections along Mira Mesa Boulevard, the tech park access roads in Carroll Canyon, and the residential streets throughout the community. We provide fast, professional service day or night.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Mira Mesa Coverage</h3>
              <div className="space-y-3">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-2">Major Roads:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Mira Mesa Blvd", "Camino Ruiz", "Black Mountain Rd", "Carroll Canyon Rd", "Sorrento Valley Blvd"].map((r) => (
                      <span key={r} className="bg-white px-3 py-1 rounded-full text-sm text-slate-600 border">{r}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-2">Freeway Access:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["I-15", "I-805", "SR-56"].map((f) => (
                      <span key={f} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">{f}</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Services in <span className="text-purple-600">Mira Mesa</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/san-diego/${s.slug}`} className="group bg-slate-50 hover:bg-purple-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-purple-200 text-center">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-slate-900 group-hover:text-purple-600">{s.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby */}
      <section className="py-16 sm:py-24 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Also Serving <span className="text-purple-300">Nearby Areas</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {NEARBY_AREAS.map((a) => (
              <Link key={a.slug} href={areaHref(a.slug)} className="group bg-white/10 rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all">
                <span className="font-semibold group-hover:text-purple-300">{a.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Mira Mesa <span className="text-purple-600">FAQ</span></h2>
          </div>
          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50">
                  <h3 className="font-semibold text-slate-900 pr-8">{faq.question}</h3>
                  <svg className="w-5 h-5 text-purple-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6"><p className="text-slate-600">{faq.answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-purple-900 via-indigo-800 to-violet-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold">Need a Tow in <span className="text-purple-300">Mira Mesa?</span></h2>
          <p className="mt-6 text-xl text-purple-100">Sorrento Valley, Miramar, I-15 - we&apos;ve got you covered. Call now.</p>
          <div className="mt-10">
            <a href={`tel:${CONTACT.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call: {CONTACT.phone}
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-purple-200">
            <span className="flex items-center gap-2"><svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>Trusted by San Diego Drivers</span>
            <span className="flex items-center gap-2"><svg className="w-5 h-5 text-purple-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>24/7 Service</span>
          </div>
        </div>
      </section>

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
                  "name": "Mira Mesa",
                  "item": "https://www.closebytowing.com/mira-mesa"
            }
      ]
}) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://www.closebytowing.com/mira-mesa", name: "CloseBy Towing - Mira Mesa", description: "Towing in Mira Mesa 92126 & Sorrento Valley 92121. Serving tech corridor, Miramar & I-15 24/7.", url: "https://www.closebytowing.com/mira-mesa", telephone: CONTACT.phone, areaServed: [{ "@type": "PostalAddress", postalCode: "92126", addressLocality: "Mira Mesa", addressRegion: "CA" }, { "@type": "PostalAddress", postalCode: "92121", addressLocality: "Sorrento Valley", addressRegion: "CA" }], geo: { "@type": "GeoCoordinates", latitude: 32.9118, longitude: -117.1460 }, serviceType: ["Towing Service", "Roadside Assistance"], priceRange: "$$", openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ_DATA.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
    </main>
  );
}
