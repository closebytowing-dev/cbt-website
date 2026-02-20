
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { areaHref, CONTACT } from "@/lib/constants";

// University City ZIP codes
const UNIVERSITY_CITY_ZIP_CODES = ["92122", "92093"];

export const metadata: Metadata = {
  title: "University City Towing | 92122 | 24/7 | CloseBy",
  description: "Towing in University City 92122. Serving UCSD, UTC, Westfield UTC, I-5 & I-805 corridors. 20-30 min response.",
  keywords: "towing University City, UTC tow truck, UCSD towing, Westfield UTC roadside assistance, La Jolla towing",
  openGraph: { title: "Towing in University City San Diego | 24/7 | CloseBy Towing", url: "https://www.closebytowing.com/university-city", type: "website" },
  alternates: { canonical: "https://www.closebytowing.com/university-city" },
};

const LOCAL_LANDMARKS = [
  { name: "UC San Diego", description: "University campus & surrounding student housing areas", icon: "🎓" },
  { name: "Westfield UTC", description: "Premier outdoor mall with parking structures", icon: "🛒" },
  { name: "UC San Diego Health", description: "Jacobs Medical Center & Thornton Hospital campus", icon: "🏥" },
  { name: "La Jolla Colony", description: "High-density residential near UTC & trolley", icon: "🏢" },
  { name: "Nobel Drive Corridor", description: "Business parks, restaurants & retail", icon: "🏬" },
  { name: "Governor Drive", description: "Residential neighborhoods & elementary schools", icon: "🏡" },
];

const NEARBY_AREAS = [
  { name: "La Jolla", slug: "la-jolla" },
  { name: "Clairemont", slug: "clairemont" },
  { name: "Mira Mesa", slug: "mira-mesa" },
  { name: "Pacific Beach", slug: "pacific-beach" },
  { name: "Carmel Valley", slug: "carmel-valley" },
  { name: "Sorrento Valley", slug: "sorrento-valley" },
];

const SERVICES = [
  { name: "General Towing", slug: "towing", icon: "🚗" },
  { name: "Emergency Towing", slug: "emergency-towing", icon: "🚨" },
  { name: "Flatbed Towing", slug: "flatbed-towing", icon: "🛻" },
  { name: "Accident Towing", slug: "accident-towing", icon: "💥" },
  { name: "Roadside Assistance", slug: "roadside-assistance", icon: "🔧" },
];

const FAQ_DATA = [
  { question: "How fast can you get to University City?", answer: "We typically arrive in University City within 15-25 minutes. Our proximity to the I-5/I-805 merge and familiarity with the area means fast access to UCSD, UTC, and all residential areas. We're well-positioned to serve this busy academic and commercial hub." },
  { question: "Do you service UCSD campus?", answer: "Yes, we frequently help students, faculty, and visitors at UC San Diego. We know the campus layout, parking structures, and surrounding student housing areas. From the Price Center to Scripps Institution of Oceanography, we can reach you on or near campus." },
  { question: "Can you help at Westfield UTC?", answer: "Absolutely. Westfield UTC is one of our most common service locations. The mall's parking structures see plenty of dead batteries and lockouts, especially after long shopping sessions. We know the structure levels and access points well." },
  { question: "What about the hospitals in University City?", answer: "We serve UC San Diego Health facilities including Jacobs Medical Center, Thornton Hospital, and Moores Cancer Center. We understand the urgency when someone is stranded at a medical facility and prioritize quick response to hospital locations." },
];

export default function UniversityCityPage() {
  return (
    <main className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-violet-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 70% 30%, rgba(255,255,255,0.15) 0%, transparent 50%)` }} />
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                <span className="text-blue-200 text-sm font-medium">Serving University City 24/7 • ZIP: {UNIVERSITY_CITY_ZIP_CODES.join(", ")}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">University City<span className="block text-blue-300 mt-2">Towing & Roadside</span></h1>
              <p className="mt-6 text-xl text-blue-100 leading-relaxed max-w-xl">Academic district towing experts. Serving <span className="text-blue-300 font-semibold">UCSD</span>, <span className="text-blue-300 font-semibold">Westfield UTC</span>, and surrounding communities with <span className="text-blue-300 font-semibold">20-30 minute</span> response.</p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20"><div className="text-2xl font-bold text-blue-300">20-30</div><div className="text-sm text-blue-100">Min Response</div></div>
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20"><div className="text-2xl font-bold text-blue-300">24/7</div><div className="text-sm text-blue-100">Available</div></div>
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20"><div className="text-2xl font-bold text-blue-300">UCSD</div><div className="text-sm text-blue-100">& UTC</div></div>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href={`tel:${CONTACT.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>Call: {CONTACT.phone}</a>
                <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/30">WhatsApp</a>
              </div>
            </div>
            <div className="relative hidden lg:block"><div className="relative rounded-2xl overflow-hidden shadow-2xl"><div className="aspect-[4/3] relative"><Image src="/neighborhoods/shared/highway-aerial.webp" alt="Tow truck in University City" fill className="object-cover" priority sizes="50vw" /><div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" /><div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5"><span className="text-white text-sm font-bold">ZIP: {UNIVERSITY_CITY_ZIP_CODES.join(", ")}</span></div></div></div></div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white"><div className="max-w-7xl mx-auto px-4"><div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900">We Know <span className="text-blue-600">University City</span></h2><p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">From UCSD to UTC, our drivers know every corner of this academic hub.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{LOCAL_LANDMARKS.map((l, i) => (<div key={i} className="group bg-slate-50 hover:bg-blue-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-blue-200"><div className="text-4xl mb-4">{l.icon}</div><h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600">{l.name}</h3><p className="mt-2 text-slate-600 text-sm">{l.description}</p></div>))}</div></div></section>

      <section className="py-16 sm:py-24 bg-slate-50"><div className="max-w-7xl mx-auto px-4"><div className="grid lg:grid-cols-2 gap-12 items-center"><div><h2 className="text-3xl sm:text-4xl font-bold text-slate-900">University City&apos;s <span className="text-blue-600">Trusted Towing</span></h2><div className="mt-6 prose prose-lg text-slate-600"><p>University City - known locally as &quot;UTC&quot; for the University Towne Centre - is one of San Diego&apos;s most dynamic communities. Home to UC San Diego, world-class hospitals, the premier Westfield UTC shopping center, and vibrant residential neighborhoods, it&apos;s a 24/7 hub of activity.</p><p>Students rushing to class, researchers working late at the labs, shoppers at the mall, and families in the residential areas all have one thing in common: they need reliable help when car trouble strikes.</p><p>Our drivers know the UCSD campus layout, the UTC parking structures, the hospital complexes, and the residential streets throughout University City. We&apos;re here for students, professors, medical staff, shoppers, and residents alike.</p></div></div><div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"><h3 className="font-bold text-slate-900 mb-4">University City Coverage</h3><div className="space-y-3"><div className="bg-slate-50 rounded-lg p-4"><h4 className="font-semibold text-sm mb-2">Major Roads:</h4><div className="flex flex-wrap gap-2">{["La Jolla Village Dr", "Nobel Dr", "Genesee Ave", "Governor Dr", "Regents Rd", "Eastgate Mall"].map((r) => (<span key={r} className="bg-white px-3 py-1 rounded-full text-sm text-slate-600 border">{r}</span>))}</div></div><div className="bg-slate-50 rounded-lg p-4"><h4 className="font-semibold text-sm mb-2">Freeway Access:</h4><div className="flex flex-wrap gap-2">{["I-5", "I-805", "SR-52"].map((f) => (<span key={f} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{f}</span>))}</div></div></div></div></div></div></section>

      <section className="py-16 sm:py-24 bg-white"><div className="max-w-7xl mx-auto px-4"><div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Services in <span className="text-blue-600">University City</span></h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{SERVICES.map((s) => (<Link key={s.slug} href={`/san-diego/${s.slug}`} className="group bg-slate-50 hover:bg-blue-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-blue-200 text-center"><div className="text-4xl mb-4">{s.icon}</div><h3 className="font-bold text-slate-900 group-hover:text-blue-600">{s.name}</h3></Link>))}</div></div></section>

      <section className="py-16 sm:py-24 bg-blue-900 text-white"><div className="max-w-7xl mx-auto px-4"><div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold">Also Serving <span className="text-blue-300">Nearby Areas</span></h2></div><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">{NEARBY_AREAS.map((a) => (<Link key={a.slug} href={areaHref(a.slug)} className="group bg-white/10 rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all"><span className="font-semibold group-hover:text-blue-300">{a.name}</span></Link>))}</div></div></section>

      <section className="py-16 sm:py-24 bg-slate-50"><div className="max-w-4xl mx-auto px-4"><div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900">University City <span className="text-blue-600">FAQ</span></h2></div><div className="space-y-4">{FAQ_DATA.map((faq, i) => (<details key={i} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50"><h3 className="font-semibold text-slate-900 pr-8">{faq.question}</h3><svg className="w-5 h-5 text-blue-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-slate-600">{faq.answer}</p></div></details>))}</div></div></section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-900 via-indigo-800 to-violet-900 text-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl sm:text-5xl font-bold">Need a Tow in <span className="text-blue-300">University City?</span></h2><p className="mt-6 text-xl text-blue-100">Serving UCSD, UTC & all of University City 24/7.</p><div className="mt-10"><a href={`tel:${CONTACT.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>Call: {CONTACT.phone}</a></div><div className="mt-12 flex flex-wrap justify-center gap-8 text-blue-200"><span className="flex items-center gap-2"><svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>Trusted by San Diego Drivers</span><span className="flex items-center gap-2"><svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>24/7 Service</span></div></div></section>

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
                  "name": "University City",
                  "item": "https://www.closebytowing.com/university-city"
            }
      ]
}) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://www.closebytowing.com/university-city", name: "CloseBy Towing - University City", description: "Fast towing in University City San Diego. UCSD, Westfield UTC, hospitals 24/7.", url: "https://www.closebytowing.com/university-city", telephone: CONTACT.phone, address: { "@type": "PostalAddress", addressLocality: "San Diego", addressRegion: "CA", postalCode: UNIVERSITY_CITY_ZIP_CODES[0], addressCountry: "US" }, geo: { "@type": "GeoCoordinates", latitude: 32.8653, longitude: -117.2119 }, areaServed: { "@type": "Neighborhood", name: "University City", containedInPlace: { "@type": "City", name: "San Diego" } }, serviceType: ["Towing Service", "Roadside Assistance"], priceRange: "$$", openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ_DATA.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
    </main>
  );
}
