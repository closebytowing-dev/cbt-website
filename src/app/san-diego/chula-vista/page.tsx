
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT, STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Towing in Chula Vista CA | 24/7 Service | CloseBy Towing",
  description: "Fast towing & roadside assistance in Chula Vista. Serving Eastlake, Otay Ranch, Bayfront, I-805 & SR-125 corridors. 20-35 min response.",
  keywords: "towing Chula Vista, Chula Vista tow truck, Eastlake towing, Otay Ranch roadside assistance, South Bay towing",
  openGraph: { title: "Towing in Chula Vista CA | 24/7 Service | CloseBy Towing", description: "Local towing experts serving Chula Vista 24/7.", url: "https://www.closebytowing.com/san-diego/chula-vista", type: "website" },
  alternates: { canonical: "https://www.closebytowing.com/san-diego/chula-vista" },
};

const LOCAL_LANDMARKS = [
  { name: "Eastlake", description: "Master-planned community with shopping centers & parks", icon: "🏘️" },
  { name: "Otay Ranch Town Center", description: "Major retail hub with extensive parking facilities", icon: "🛒" },
  { name: "Chula Vista Bayfront", description: "Waterfront development, marina & hotels", icon: "⛵" },
  { name: "Olympic Training Center", description: "Elite sports facilities & surrounding area", icon: "🏅" },
  { name: "Third Avenue Village", description: "Historic downtown with shops & restaurants", icon: "🏛️" },
  { name: "I-805/SR-125 Corridors", description: "Major freeway coverage throughout South Bay", icon: "🛣️" },
];

const NEARBY_AREAS = [
  { name: "National City", slug: "national-city" },
  { name: "San Ysidro", slug: "san-ysidro" },
  { name: "Bonita", slug: "bonita" },
  { name: "Otay Mesa", slug: "otay-mesa" },
  { name: "Spring Valley", slug: "spring-valley" },
  { name: "Imperial Beach", slug: "imperial-beach" },
];

const SERVICES = [
  { name: "Emergency Towing", slug: "emergency-towing", icon: "🚨" },
  { name: "Flatbed Towing", slug: "flatbed-towing", icon: "🛻" },
  { name: "Accident Towing", slug: "accident-towing", icon: "💥" },
  { name: "Roadside Assistance", slug: "roadside-assistance", icon: "🔧" },
];

const FAQ_DATA = [
  { question: "How fast can you get to Chula Vista?", answer: "Our average response time to Chula Vista is 20-35 minutes. We're positioned to quickly serve all areas from the Bayfront to Eastlake and Otay Ranch. I-805 and SR-125 give us fast access to most locations in the city." },
  { question: "Do you service Eastlake and Otay Ranch?", answer: "Yes! These master-planned communities are among our busiest service areas. We know the shopping centers, the winding residential streets, and the quick routes through these growing neighborhoods. From Otay Ranch Town Center to Eastlake's many parks, we've got you covered." },
  { question: "Can you respond to the I-805 through Chula Vista?", answer: "Absolutely. I-805 is a major corridor through Chula Vista, and we provide rapid freeway response from E Street south to Otay Valley Road. We also cover the SR-125 toll road and the I-5 interchanges in western Chula Vista." },
  { question: "What about the Bayfront and marina area?", answer: "We serve the Chula Vista Bayfront including the marina, waterfront hotels, and the developing bayfront district. Whether you're visiting the Living Coast Discovery Center or staying at one of the hotels, we can reach you quickly." },
];

export default function ChulaVistaPage() {
  return (
    <main className="bg-white">
      <section className="relative bg-gradient-to-br from-sky-900 via-blue-800 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 40%)` }} />
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-sky-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                <span className="text-sky-200 text-sm font-medium">San Diego&apos;s Second Largest City</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Chula Vista<span className="block text-sky-300 mt-2">Towing & Roadside</span></h1>
              <p className="mt-6 text-xl text-sky-100 leading-relaxed max-w-xl">Fast, reliable towing across <span className="text-sky-300 font-semibold">South Bay&apos;s largest city</span>. From <span className="text-sky-300 font-semibold">Eastlake</span> to the <span className="text-sky-300 font-semibold">Bayfront</span>, <span className="text-sky-300 font-semibold">20-35 minute</span> response.</p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20"><div className="text-2xl font-bold text-sky-300">20-35</div><div className="text-sm text-sky-100">Min Response</div></div>
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20"><div className="text-2xl font-bold text-sky-300">24/7</div><div className="text-sm text-sky-100">Available</div></div>
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20"><div className="text-2xl font-bold text-sky-300">I-805</div><div className="text-sm text-sky-100">& SR-125</div></div>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href={`tel:${CONTACT.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>Call: {CONTACT.phone}</a>
                <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/30">WhatsApp</a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl"><div className="aspect-[4/3] relative"><Image src="/hero/home-hero.webp" alt="Tow truck in Chula Vista" fill className="object-cover" priority sizes="50vw" /><div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 to-transparent" /></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900">We Know <span className="text-sky-600">Chula Vista</span></h2><p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">From the Bayfront to Eastlake, our drivers know every neighborhood.</p></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCAL_LANDMARKS.map((l, i) => (<div key={i} className="group bg-slate-50 hover:bg-sky-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-sky-200"><div className="text-4xl mb-4">{l.icon}</div><h3 className="font-bold text-lg text-slate-900 group-hover:text-sky-600">{l.name}</h3><p className="mt-2 text-slate-600 text-sm">{l.description}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Chula Vista&apos;s <span className="text-sky-600">Trusted Towing Service</span></h2>
              <div className="mt-6 prose prose-lg text-slate-600">
                <p>Chula Vista is San Diego County&apos;s second-largest city and the South Bay&apos;s heart. From the historic Third Avenue Village to the master-planned communities of Eastlake and Otay Ranch, the city spans from the bay to the foothills.</p>
                <p>With the Olympic Training Center drawing athletes from around the world, major retail at Otay Ranch Town Center, and the expanding Bayfront, Chula Vista is always buzzing with activity - and vehicles that sometimes need help.</p>
                <p>Our drivers are stationed throughout the South Bay for rapid response whether you&apos;re on the freeways, in a shopping center parking lot, or on a residential street in one of Chula Vista&apos;s many neighborhoods.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Chula Vista Coverage</h3>
              <div className="space-y-3">
                <div className="bg-slate-50 rounded-lg p-4"><h4 className="font-semibold text-sm mb-2">Major Roads:</h4><div className="flex flex-wrap gap-2">{["E Street", "H Street", "Broadway", "Third Ave", "Olympic Pkwy", "Eastlake Pkwy"].map((r) => (<span key={r} className="bg-white px-3 py-1 rounded-full text-sm text-slate-600 border">{r}</span>))}</div></div>
                <div className="bg-slate-50 rounded-lg p-4"><h4 className="font-semibold text-sm mb-2">Freeway Access:</h4><div className="flex flex-wrap gap-2">{["I-805", "I-5", "SR-125", "SR-54"].map((f) => (<span key={f} className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium">{f}</span>))}</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white"><div className="max-w-7xl mx-auto px-4"><div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Services in <span className="text-sky-600">Chula Vista</span></h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{SERVICES.map((s) => (<Link key={s.slug} href={`/san-diego/${s.slug}`} className="group bg-slate-50 hover:bg-sky-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-sky-200 text-center"><div className="text-4xl mb-4">{s.icon}</div><h3 className="font-bold text-slate-900 group-hover:text-sky-600">{s.name}</h3></Link>))}</div></div></section>

      <section className="py-16 sm:py-24 bg-sky-900 text-white"><div className="max-w-7xl mx-auto px-4"><div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold">Also Serving <span className="text-sky-300">South Bay</span></h2></div><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">{NEARBY_AREAS.map((a) => (<Link key={a.slug} href={`/san-diego/${a.slug}`} className="group bg-white/10 rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all"><span className="font-semibold group-hover:text-sky-300">{a.name}</span></Link>))}</div></div></section>

      <section className="py-16 sm:py-24 bg-slate-50"><div className="max-w-4xl mx-auto px-4"><div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Chula Vista <span className="text-sky-600">FAQ</span></h2></div><div className="space-y-4">{FAQ_DATA.map((faq, i) => (<details key={i} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50"><h3 className="font-semibold text-slate-900 pr-8">{faq.question}</h3><svg className="w-5 h-5 text-sky-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-slate-600">{faq.answer}</p></div></details>))}</div></div></section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-sky-900 via-blue-800 to-cyan-900 text-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl sm:text-5xl font-bold">Need a Tow in <span className="text-sky-300">Chula Vista?</span></h2><p className="mt-6 text-xl text-sky-100">South Bay&apos;s trusted towing service. Available 24/7.</p><div className="mt-10"><a href={`tel:${CONTACT.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>Call: {CONTACT.phone}</a></div><div className="mt-12 flex flex-wrap justify-center gap-8 text-sky-200"><span className="flex items-center gap-2"><svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>{STATS.rating} ({STATS.reviewCount}+ Reviews)</span><span className="flex items-center gap-2"><svg className="w-5 h-5 text-sky-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>24/7 Service</span></div></div></section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://www.closebytowing.com/san-diego/chula-vista", name: "CloseBy Towing - Chula Vista", description: "Fast towing and roadside assistance in Chula Vista CA. Serving Eastlake, Otay Ranch, Bayfront 24/7.", url: "https://www.closebytowing.com/san-diego/chula-vista", telephone: CONTACT.phone, areaServed: { "@type": "City", name: "Chula Vista" }, serviceType: ["Towing Service", "Roadside Assistance"], priceRange: "$$" }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ_DATA.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
    </main>
  );
}
