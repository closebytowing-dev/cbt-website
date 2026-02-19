
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

// La Mesa ZIP codes
const LA_MESA_ZIP_CODES = ["91941", "91942", "91943", "91944"];

export const metadata: Metadata = {
  title: "La Mesa Towing | 91941, 91942 | 24/7 | CloseBy",
  description:
    "Towing in La Mesa 91941 & 91942. Serving Downtown Village, Grossmont Center, Lake Murray & I-8 corridor. 20-35 min response, 24/7.",
  keywords: "towing La Mesa, La Mesa tow truck, Grossmont towing, Downtown La Mesa roadside assistance, I-8 La Mesa",
  openGraph: {
    title: "Towing in La Mesa CA | 24/7 Service | CloseBy Towing",
    description: "Local towing experts serving La Mesa 24/7. The Jewel of the Hills.",
    url: "https://www.closebytowing.com/san-diego/la-mesa",
    type: "website",
  },
  alternates: { canonical: "https://www.closebytowing.com/san-diego/la-mesa" },
};

const LOCAL_LANDMARKS = [
  { name: "Downtown La Mesa Village", description: "Antique shops, restaurants & historic district parking", icon: "🏛️" },
  { name: "Grossmont Center", description: "Major shopping mall with multi-level parking structures", icon: "🛒" },
  { name: "Grossmont Hospital", description: "Hospital campus & medical office emergency response", icon: "🏥" },
  { name: "La Mesa Boulevard", description: "Main street businesses & community events", icon: "🎭" },
  { name: "Lake Murray", description: "Recreation area & surrounding residential neighborhoods", icon: "🌊" },
  { name: "I-8 Corridor", description: "Freeway access from Spring Street to Fletcher Parkway", icon: "🛣️" },
];

const NEARBY_AREAS = [
  { name: "El Cajon", slug: "el-cajon" },
  { name: "Spring Valley", slug: "spring-valley" },
  { name: "San Diego", slug: "towing" },
  { name: "Lemon Grove", slug: "lemon-grove" },
  { name: "Santee", slug: "santee" },
  { name: "College Area", slug: "college-area" },
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
    question: "How fast can you get to Downtown La Mesa?",
    answer: "We typically arrive in Downtown La Mesa Village within 15-25 minutes. Our drivers know the quirky one-way streets, the parking lots behind the antique shops, and the best routes through the village. We're especially busy during La Mesa's popular community events.",
  },
  {
    question: "Do you service Grossmont Center and the hospital?",
    answer: "Yes, we frequently service both Grossmont Center and Grossmont Hospital. The shopping center's parking structures can be tricky with tight turns and low clearances, but our drivers are experienced there. We also provide rapid response to the hospital campus for employee and visitor vehicles.",
  },
  {
    question: "Can you reach Lake Murray area quickly?",
    answer: "Absolutely. We serve the Lake Murray community including the residential areas around the lake and the recreation area parking lots. The hilly terrain doesn't slow us down - our trucks are equipped to handle La Mesa's varied topography.",
  },
  {
    question: "What about I-8 emergencies through La Mesa?",
    answer: "We provide rapid I-8 response from Spring Street through the 70th Street/Lake Murray exit and beyond to Fletcher Parkway. This stretch sees heavy traffic and we're positioned to respond quickly to accidents, breakdowns, and other emergencies.",
  },
];

export default function LaMesaPage() {
  return (
    <main className="bg-white">
      {/* Hero - Warm gold/brown theme for "Jewel of the Hills" historic charm */}
      <section className="relative bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span className="text-amber-200 text-sm font-medium">The Jewel of the Hills</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                La Mesa
                <span className="block text-amber-300 mt-2">Towing & Roadside</span>
              </h1>

              <p className="mt-6 text-xl text-amber-100 leading-relaxed max-w-xl">
                Serving La Mesa&apos;s charming <span className="text-amber-300 font-semibold">Downtown Village</span>,{" "}
                <span className="text-amber-300 font-semibold">Grossmont area</span>, and surrounding communities with{" "}
                <span className="text-amber-300 font-semibold">20-35 minute</span> response times.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-amber-300">20-35</div>
                  <div className="text-sm text-amber-100">Min Response</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-amber-300">24/7</div>
                  <div className="text-sm text-amber-100">Available</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-amber-300">I-8</div>
                  <div className="text-sm text-amber-100">Coverage</div>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href={`tel:${CONTACT.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg">
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
                  <Image src="/neighborhoods/shared/suburban-street.webp" alt="Tow truck in La Mesa" fill className="object-cover" priority sizes="50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-amber-600/90 backdrop-blur-sm px-4 py-2 rounded-lg"><span className="text-white font-bold text-lg">ZIP: {LA_MESA_ZIP_CODES[0]}</span></div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">We Know <span className="text-amber-600">La Mesa</span></h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">From the historic village to Lake Murray, our drivers know every corner.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCAL_LANDMARKS.map((l, i) => (
              <div key={i} className="group bg-slate-50 hover:bg-amber-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-amber-200">
                <div className="text-4xl mb-4">{l.icon}</div>
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-amber-600">{l.name}</h3>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">La Mesa&apos;s <span className="text-amber-600">Trusted Towing Partner</span></h2>
              <div className="mt-6 prose prose-lg text-slate-600">
                <p>Known as &quot;The Jewel of the Hills,&quot; La Mesa is an East County gem with a charming downtown village, excellent shopping at Grossmont Center, and beautiful residential neighborhoods surrounding Lake Murray.</p>
                <p>The city&apos;s hilly terrain and historic streets require a towing company that knows the area. Our drivers navigate the one-way streets of Downtown La Mesa, the busy parking structures at Grossmont, and the winding roads near Lake Murray with ease.</p>
                <p>Whether you&apos;re attending a car show on La Mesa Boulevard, shopping at the antique stores, or visiting patients at Grossmont Hospital, we&apos;re here when you need us.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">La Mesa Coverage</h3>
              <div className="space-y-3">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-2">Major Roads:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["La Mesa Blvd", "University Ave", "Jackson Dr", "Lake Murray Blvd", "Fletcher Parkway"].map((r) => (
                      <span key={r} className="bg-white px-3 py-1 rounded-full text-sm text-slate-600 border">{r}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-2">Freeway Access:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["I-8", "SR-94", "SR-125"].map((f) => (
                      <span key={f} className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">{f}</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Services in <span className="text-amber-600">La Mesa</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/san-diego/${s.slug}`} className="group bg-slate-50 hover:bg-amber-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-amber-200 text-center">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-slate-900 group-hover:text-amber-600">{s.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby */}
      <section className="py-16 sm:py-24 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Also Serving <span className="text-amber-300">Nearby Areas</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {NEARBY_AREAS.map((a) => (
              <Link key={a.slug} href={a.slug === "el-cajon" ? "/el-cajon" : a.slug === "spring-valley" ? "/spring-valley" : `/san-diego/${a.slug}`} className="group bg-white/10 rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all">
                <span className="font-semibold group-hover:text-amber-300">{a.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">La Mesa <span className="text-amber-600">FAQ</span></h2>
          </div>
          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50">
                  <h3 className="font-semibold text-slate-900 pr-8">{faq.question}</h3>
                  <svg className="w-5 h-5 text-amber-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6"><p className="text-slate-600">{faq.answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold">Need a Tow in <span className="text-amber-300">La Mesa?</span></h2>
          <p className="mt-6 text-xl text-amber-100">The Jewel of the Hills deserves premier towing service. Call now.</p>
          <div className="mt-10">
            <a href={`tel:${CONTACT.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call: {CONTACT.phone}
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-amber-200">
            <span className="flex items-center gap-2"><svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>Trusted by San Diego Drivers</span>
            <span className="flex items-center gap-2"><svg className="w-5 h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>24/7 Service</span>
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
                  "name": "La Mesa",
                  "item": "https://www.closebytowing.com/san-diego/la-mesa"
            }
      ]
}) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://www.closebytowing.com/san-diego/la-mesa", name: "CloseBy Towing - La Mesa", description: "Fast towing and roadside assistance in La Mesa CA. Serving Downtown Village, Grossmont Center, and Lake Murray area 24/7.", url: "https://www.closebytowing.com/san-diego/la-mesa", telephone: CONTACT.phone, areaServed: { "@type": "City", name: "La Mesa", containedInPlace: { "@type": "County", name: "San Diego County" } }, serviceType: ["Towing Service", "Roadside Assistance"], priceRange: "$$" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ_DATA.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
    </main>
  );
}
