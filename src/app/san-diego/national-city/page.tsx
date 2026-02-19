
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

// National City ZIP codes: 91950, 91951
const NC_ZIP_CODES = ["91950", "91951"];

export const metadata: Metadata = {
  title: "National City Towing | 91950 | 24/7 | CloseBy",
  description: "Towing in National City 91950. From the Mile of Cars auto dealerships to Westfield Plaza Bonita, the Marina to the I-5/I-805 junction. 20-30 min South Bay response.",
  keywords: "towing National City, National City tow truck, 91950 towing, Mile of Cars towing, Plaza Bonita towing, I-5 I-805 towing",
  openGraph: { title: "Towing in National City CA | 24/7 | CloseBy Towing", description: "Local towing in National City 24/7.", url: "https://www.closebytowing.com/san-diego/national-city", type: "website" },
  alternates: { canonical: "https://www.closebytowing.com/san-diego/national-city" },
};

const LOCAL_LANDMARKS = [
  { name: "Mile of Cars", description: "Famous auto dealership row - new car transport & dealer towing", icon: "🚗" },
  { name: "Westfield Plaza Bonita", description: "Major shopping mall serving the South Bay", icon: "🛒" },
  { name: "National City Marina", description: "Waterfront & Pepper Park area coverage", icon: "⚓" },
  { name: "Sweetwater Town & Country", description: "Shopping center at Sweetwater Road", icon: "🏬" },
  { name: "24th Street Transit Center", description: "Trolley station area & surrounding businesses", icon: "🚊" },
  { name: "I-5/I-805 Merge", description: "Major freeway junction coverage", icon: "🛣️" },
];

const NEARBY_AREAS = [
  { name: "Chula Vista", slug: "chula-vista" },
  { name: "San Diego", slug: "towing" },
  { name: "Paradise Hills", slug: "paradise-hills" },
  { name: "Logan Heights", slug: "logan-heights" },
  { name: "Lincoln Park", slug: "lincoln-park" },
  { name: "Bonita", slug: "bonita" },
];

const SERVICES = [
  { name: "General Towing", slug: "towing", icon: "🚗" },
  { name: "Emergency Towing", slug: "emergency-towing", icon: "🚨" },
  { name: "Flatbed Towing", slug: "flatbed-towing", icon: "🛻" },
  { name: "Accident Towing", slug: "accident-towing", icon: "💥" },
  { name: "Roadside Assistance", slug: "roadside-assistance", icon: "🔧" },
];

const FAQ_DATA = [
  { question: "Do you provide towing for dealerships on the Mile of Cars?", answer: "Yes! We work with many dealerships along National City's famous Mile of Cars. We provide flatbed transport for new inventory, customer vehicle towing, and lot management services. Our drivers are familiar with all the dealerships along National City Boulevard." },
  { question: "How fast can you get to National City?", answer: "We typically arrive in National City within 15-25 minutes. Our strategic positioning near the I-5/I-805 junction means fast access to all areas of National City, from the Mile of Cars to Plaza Bonita and the marina." },
  { question: "Can you service vehicles at Plaza Bonita?", answer: "Absolutely. Westfield Plaza Bonita is one of our frequent service locations. We handle dead batteries, lockouts, and towing from the mall's parking lots. Our drivers know the access routes and can navigate the busy parking areas efficiently." },
  { question: "Do you cover the freeway merge areas?", answer: "Yes, we provide rapid response to the I-5/I-805 merge through National City, one of the region's busiest freeway junctions. We coordinate with CHP and can safely recover vehicles from shoulders, ramps, and travel lanes." },
];

export default function NationalCityPage() {
  return (
    <main className="bg-white">
      <section className="relative bg-gradient-to-br from-rose-900 via-pink-800 to-red-900 text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-rose-500/20 border border-rose-400/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-rose-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                <span className="text-rose-200 text-sm font-medium">Serving National City 24/7 • ZIP: {NC_ZIP_CODES[0]}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">National City<span className="block text-rose-300 mt-2">Towing & Roadside</span></h1>
              <p className="mt-6 text-xl text-rose-100 leading-relaxed max-w-xl">National City is the South Bay&apos;s historic heart—home to the legendary Mile of Cars (one of California&apos;s largest auto dealer concentrations), Westfield Plaza Bonita, and the National City Marina on San Diego Bay. Whether you&apos;re buying a car on{" "}<span className="text-rose-300 font-semibold">National City Boulevard</span> or stuck at the{" "}<span className="text-rose-300 font-semibold">I-5/I-805 merge</span>, we respond in <span className="text-rose-300 font-semibold">20-30 min</span>.</p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20"><div className="text-2xl font-bold text-rose-300">20-30</div><div className="text-sm text-rose-100">Min Response</div></div>
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20"><div className="text-2xl font-bold text-rose-300">24/7</div><div className="text-sm text-rose-100">Available</div></div>
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20"><div className="text-2xl font-bold text-rose-300">I-5</div><div className="text-sm text-rose-100">& I-805</div></div>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href={`tel:${CONTACT.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>Call: {CONTACT.phone}</a>
                <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/30">WhatsApp</a>
              </div>
            </div>
            <div className="relative hidden lg:block"><div className="relative rounded-2xl overflow-hidden shadow-2xl"><div className="aspect-[4/3] relative"><Image src="/neighborhoods/shared/highway-aerial.webp" alt="Tow truck in National City" fill className="object-cover" priority sizes="50vw" /><div className="absolute inset-0 bg-gradient-to-t from-rose-900/70 to-transparent" /><div className="absolute bottom-4 left-4 bg-rose-600/90 backdrop-blur-sm px-4 py-2 rounded-lg"><span className="text-white font-bold text-lg">ZIP: {NC_ZIP_CODES[0]}</span></div></div></div></div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white"><div className="max-w-7xl mx-auto px-4"><div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900">We Know <span className="text-rose-600">National City</span></h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{LOCAL_LANDMARKS.map((l, i) => (<div key={i} className="group bg-slate-50 hover:bg-rose-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-rose-200"><div className="text-4xl mb-4">{l.icon}</div><h3 className="font-bold text-lg text-slate-900 group-hover:text-rose-600">{l.name}</h3><p className="mt-2 text-slate-600 text-sm">{l.description}</p></div>))}</div></div></section>

      <section className="py-16 sm:py-24 bg-slate-50"><div className="max-w-7xl mx-auto px-4"><div className="grid lg:grid-cols-2 gap-12 items-center"><div><h2 className="text-3xl sm:text-4xl font-bold text-slate-900">National City&apos;s <span className="text-rose-600">Local Towing Partner</span></h2><div className="mt-6 prose prose-lg text-slate-600"><p>National City is the South Bay&apos;s historic heart, famous for the Mile of Cars - one of California&apos;s largest auto dealership concentrations. But National City is much more: a vibrant community with Westfield Plaza Bonita, a beautiful waterfront, and diverse neighborhoods.</p><p>Whether you&apos;re buying a car on the Mile, shopping at Plaza Bonita, or just passing through on I-5 or I-805, we&apos;re here when you need towing or roadside help.</p></div></div><div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"><h3 className="font-bold text-slate-900 mb-4">National City Coverage</h3><div className="space-y-3"><div className="bg-slate-50 rounded-lg p-4"><h4 className="font-semibold text-sm mb-2">Major Roads:</h4><div className="flex flex-wrap gap-2">{["National City Blvd", "8th Street", "Plaza Blvd", "Sweetwater Rd", "Highland Ave"].map((r) => (<span key={r} className="bg-white px-3 py-1 rounded-full text-sm text-slate-600 border">{r}</span>))}</div></div><div className="bg-slate-50 rounded-lg p-4"><h4 className="font-semibold text-sm mb-2">Freeway Access:</h4><div className="flex flex-wrap gap-2">{["I-5", "I-805", "SR-54"].map((f) => (<span key={f} className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium">{f}</span>))}</div></div><div className="bg-rose-50 rounded-lg p-4 border border-rose-200"><h4 className="font-semibold text-sm mb-2 text-rose-800">ZIP Codes Served:</h4><div className="flex flex-wrap gap-2">{NC_ZIP_CODES.map((zip) => (<span key={zip} className="bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-bold">{zip}</span>))}</div></div></div></div></div></div></section>

      <section className="py-16 sm:py-24 bg-white"><div className="max-w-7xl mx-auto px-4"><div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Services in <span className="text-rose-600">National City</span></h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{SERVICES.map((s) => (<Link key={s.slug} href={`/san-diego/${s.slug}`} className="group bg-slate-50 hover:bg-rose-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-rose-200 text-center"><div className="text-4xl mb-4">{s.icon}</div><h3 className="font-bold text-slate-900 group-hover:text-rose-600">{s.name}</h3></Link>))}</div></div></section>

      <section className="py-16 sm:py-24 bg-rose-900 text-white"><div className="max-w-7xl mx-auto px-4"><div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold">Also Serving <span className="text-rose-300">Nearby Areas</span></h2></div><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">{NEARBY_AREAS.map((a) => (<Link key={a.slug} href={a.slug === "chula-vista" ? "/chula-vista" : `/san-diego/${a.slug}`} className="group bg-white/10 rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all"><span className="font-semibold group-hover:text-rose-300">{a.name}</span></Link>))}</div></div></section>

      <section className="py-16 sm:py-24 bg-slate-50"><div className="max-w-4xl mx-auto px-4"><div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900">National City <span className="text-rose-600">FAQ</span></h2></div><div className="space-y-4">{FAQ_DATA.map((faq, i) => (<details key={i} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50"><h3 className="font-semibold text-slate-900 pr-8">{faq.question}</h3><svg className="w-5 h-5 text-rose-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-slate-600">{faq.answer}</p></div></details>))}</div></div></section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-rose-900 via-pink-800 to-red-900 text-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl sm:text-5xl font-bold">Need a Tow in <span className="text-rose-300">National City?</span></h2><p className="mt-6 text-xl text-rose-100">From the Mile of Cars to Plaza Bonita. Call now.</p><div className="mt-10"><a href={`tel:${CONTACT.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-500 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>Call: {CONTACT.phone}</a></div><div className="mt-12 flex flex-wrap justify-center gap-8 text-rose-200"><span className="flex items-center gap-2"><svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>Trusted by San Diego Drivers</span><span className="flex items-center gap-2"><svg className="w-5 h-5 text-rose-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>24/7 Service</span></div></div></section>

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
                  "name": "National City",
                  "item": "https://www.closebytowing.com/san-diego/national-city"
            }
      ]
}) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://www.closebytowing.com/san-diego/national-city", name: "CloseBy Towing - National City", description: "Towing in National City 91950. Serving Mile of Cars dealerships, Westfield Plaza Bonita, National City Marina & I-5/I-805 junction 24/7.", url: "https://www.closebytowing.com/san-diego/national-city", telephone: CONTACT.phone, areaServed: [{ "@type": "PostalAddress", postalCode: "91950", addressLocality: "National City", addressRegion: "CA" }, { "@type": "PostalAddress", postalCode: "91951", addressLocality: "National City", addressRegion: "CA" }], geo: { "@type": "GeoCoordinates", latitude: 32.6781, longitude: -117.0992 }, serviceType: ["Towing Service", "Roadside Assistance", "Dealer Transport"], priceRange: "$$", openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ_DATA.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
    </main>
  );
}
