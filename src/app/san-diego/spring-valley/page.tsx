
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

// Spring Valley ZIP codes: 91977, 91978
const SV_ZIP_CODES = ["91977", "91978"];

export const metadata: Metadata = {
  title: "Spring Valley Towing | 91977 | 24/7 | CloseBy",
  description: "Towing in Spring Valley 91977 & 91978. From Casa de Oro to Dictionary Hill, Sweetwater Summit Park to the SR-125 toll road. 20-35 min East County response.",
  keywords: "towing Spring Valley, Spring Valley tow truck, 91977 towing, 91978 towing, Casa de Oro towing, Dictionary Hill towing, SR-125 towing",
  openGraph: { title: "Towing in Spring Valley CA | 24/7 | CloseBy Towing", url: "https://www.closebytowing.com/san-diego/spring-valley", type: "website" },
  alternates: { canonical: "https://www.closebytowing.com/san-diego/spring-valley" },
};

const LOCAL_LANDMARKS = [
  { name: "Casa de Oro", description: "Historic community center & surrounding residential areas", icon: "🏡" },
  { name: "Sweetwater Springs", description: "Eastern Spring Valley neighborhoods & canyons", icon: "🌳" },
  { name: "Spring Valley Town Center", description: "Shopping center at Bancroft & Sweetwater", icon: "🛒" },
  { name: "Sweetwater Summit Park", description: "Regional park & recreation area access", icon: "⛰️" },
  { name: "La Presa", description: "Southern neighborhoods near Sweetwater Reservoir", icon: "🏘️" },
  { name: "SR-125/SR-94", description: "Major freeway corridors through Spring Valley", icon: "🛣️" },
];

const NEARBY_AREAS = [
  { name: "La Mesa", slug: "la-mesa" },
  { name: "El Cajon", slug: "el-cajon" },
  { name: "Lemon Grove", slug: "lemon-grove" },
  { name: "National City", slug: "national-city" },
  { name: "Chula Vista", slug: "chula-vista" },
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
  { question: "How fast can you get to Spring Valley?", answer: "We typically arrive in Spring Valley within 20-35 minutes. Our drivers know the hilly terrain and residential streets well, from Casa de Oro to Sweetwater Springs. SR-125 and SR-94 give us fast access to most areas." },
  { question: "Do you service the canyon areas of Spring Valley?", answer: "Yes, we serve all of Spring Valley including the canyon neighborhoods. Our equipment can handle steep driveways, narrow canyon roads, and challenging terrain. We frequently help residents in the Dictionary Hill, Hidden Valley, and canyon areas." },
  { question: "Can you tow from apartment complexes?", answer: "Absolutely. Spring Valley has many apartment communities, and we're experienced with their parking lots, underground garages, and access restrictions. We also work with property managers for authorized towing when needed." },
  { question: "What freeways do you cover through Spring Valley?", answer: "We cover SR-125 (the toll road) and SR-94 (Martin Luther King Jr. Freeway) through Spring Valley. We also respond to Sweetwater Road, Jamacha Road, and all major arterials in the community." },
];

export default function SpringValleyPage() {
  return (
    <main className="bg-white">
      <section className="relative bg-gradient-to-br from-lime-900 via-green-800 to-emerald-900 text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-lime-500/20 border border-lime-400/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-lime-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                <span className="text-lime-200 text-sm font-medium">East County Community</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Spring Valley<span className="block text-lime-300 mt-2">Towing & Roadside</span></h1>
              <p className="mt-6 text-xl text-lime-100 leading-relaxed max-w-xl">Spring Valley is East County&apos;s hillside community—where Dictionary Hill offers canyon views, Casa de Oro anchors the community, and the SR-125 toll road connects to greater San Diego. Whether stuck on a steep driveway or broken down near{" "}<span className="text-lime-300 font-semibold">Sweetwater Summit Park</span>, we respond in <span className="text-lime-300 font-semibold">20-35 minutes</span>.</p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20"><div className="text-2xl font-bold text-lime-300">20-35</div><div className="text-sm text-lime-100">Min Response</div></div>
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20"><div className="text-2xl font-bold text-lime-300">24/7</div><div className="text-sm text-lime-100">Available</div></div>
                <div className="bg-white/10 rounded-xl p-4 text-center border border-white/20"><div className="text-2xl font-bold text-lime-300">SR-125</div><div className="text-sm text-lime-100">& SR-94</div></div>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href={`tel:${CONTACT.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-lime-600 hover:bg-lime-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>Call: {CONTACT.phone}</a>
                <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/30">WhatsApp</a>
              </div>
            </div>
            <div className="relative hidden lg:block"><div className="relative rounded-2xl overflow-hidden shadow-2xl"><div className="aspect-[4/3] relative"><Image src="/neighborhoods/shared/suburban-street.webp" alt="Tow truck in Spring Valley" fill className="object-cover" priority sizes="50vw" /><div className="absolute inset-0 bg-gradient-to-t from-lime-900/70 to-transparent" /><div className="absolute bottom-4 left-4 bg-lime-600/90 backdrop-blur-sm px-4 py-2 rounded-lg"><span className="text-white font-bold text-lg">ZIP: {SV_ZIP_CODES[0]}</span></div></div></div></div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white"><div className="max-w-7xl mx-auto px-4"><div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900">We Know <span className="text-lime-600">Spring Valley</span></h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{LOCAL_LANDMARKS.map((l, i) => (<div key={i} className="group bg-slate-50 hover:bg-lime-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-lime-200"><div className="text-4xl mb-4">{l.icon}</div><h3 className="font-bold text-lg text-slate-900 group-hover:text-lime-600">{l.name}</h3><p className="mt-2 text-slate-600 text-sm">{l.description}</p></div>))}</div></div></section>

      <section className="py-16 sm:py-24 bg-slate-50"><div className="max-w-7xl mx-auto px-4"><div className="grid lg:grid-cols-2 gap-12 items-center"><div><h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Spring Valley&apos;s <span className="text-lime-600">Reliable Towing</span></h2><div className="mt-6 prose prose-lg text-slate-600"><p>Spring Valley is a diverse East County community nestled in the hills between La Mesa, El Cajon, and Chula Vista. Known for its canyons, suburban neighborhoods, and strong community identity, Spring Valley is home to over 60,000 residents.</p><p>The hilly terrain can make vehicle breakdowns challenging, but our drivers are experienced with Spring Valley&apos;s unique geography. We can navigate steep driveways, canyon roads, and the winding streets of areas like Dictionary Hill.</p></div></div><div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"><h3 className="font-bold text-slate-900 mb-4">Spring Valley Coverage</h3><div className="space-y-3"><div className="bg-slate-50 rounded-lg p-4"><h4 className="font-semibold text-sm mb-2">Major Roads:</h4><div className="flex flex-wrap gap-2">{["Sweetwater Rd", "Jamacha Rd", "Bancroft Dr", "Campo Rd", "Kenwood Dr"].map((r) => (<span key={r} className="bg-white px-3 py-1 rounded-full text-sm text-slate-600 border">{r}</span>))}</div></div><div className="bg-slate-50 rounded-lg p-4"><h4 className="font-semibold text-sm mb-2">Freeway Access:</h4><div className="flex flex-wrap gap-2">{["SR-125", "SR-94", "SR-54"].map((f) => (<span key={f} className="bg-lime-100 text-lime-700 px-3 py-1 rounded-full text-sm font-medium">{f}</span>))}</div></div><div className="bg-lime-50 rounded-lg p-4 border border-lime-200"><h4 className="font-semibold text-sm mb-2 text-lime-800">ZIP Codes Served:</h4><div className="flex flex-wrap gap-2">{SV_ZIP_CODES.map((zip) => (<span key={zip} className="bg-lime-600 text-white px-3 py-1 rounded-full text-sm font-bold">{zip}</span>))}</div></div></div></div></div></div></section>

      <section className="py-16 sm:py-24 bg-white"><div className="max-w-7xl mx-auto px-4"><div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Services in <span className="text-lime-600">Spring Valley</span></h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{SERVICES.map((s) => (<Link key={s.slug} href={`/san-diego/${s.slug}`} className="group bg-slate-50 hover:bg-lime-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-lime-200 text-center"><div className="text-4xl mb-4">{s.icon}</div><h3 className="font-bold text-slate-900 group-hover:text-lime-600">{s.name}</h3></Link>))}</div></div></section>

      <section className="py-16 sm:py-24 bg-lime-900 text-white"><div className="max-w-7xl mx-auto px-4"><div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold">Also Serving <span className="text-lime-300">Nearby Areas</span></h2></div><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">{NEARBY_AREAS.map((a) => (<Link key={a.slug} href={a.slug === "chula-vista" ? "/chula-vista" : a.slug === "el-cajon" ? "/el-cajon" : a.slug === "national-city" ? "/national-city" : `/san-diego/${a.slug}`} className="group bg-white/10 rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all"><span className="font-semibold group-hover:text-lime-300">{a.name}</span></Link>))}</div></div></section>

      <section className="py-16 sm:py-24 bg-slate-50"><div className="max-w-4xl mx-auto px-4"><div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Spring Valley <span className="text-lime-600">FAQ</span></h2></div><div className="space-y-4">{FAQ_DATA.map((faq, i) => (<details key={i} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"><summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50"><h3 className="font-semibold text-slate-900 pr-8">{faq.question}</h3><svg className="w-5 h-5 text-lime-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary><div className="px-6 pb-6"><p className="text-slate-600">{faq.answer}</p></div></details>))}</div></div></section>

      <section className="py-16 sm:py-24 bg-gradient-to-br from-lime-900 via-green-800 to-emerald-900 text-white"><div className="max-w-4xl mx-auto px-4 text-center"><h2 className="text-3xl sm:text-5xl font-bold">Need a Tow in <span className="text-lime-300">Spring Valley?</span></h2><p className="mt-6 text-xl text-lime-100">Your East County neighbors. Available 24/7.</p><div className="mt-10"><a href={`tel:${CONTACT.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-lime-600 hover:bg-lime-500 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>Call: {CONTACT.phone}</a></div><div className="mt-12 flex flex-wrap justify-center gap-8 text-lime-200"><span className="flex items-center gap-2"><svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>Trusted by San Diego Drivers</span><span className="flex items-center gap-2"><svg className="w-5 h-5 text-lime-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>24/7 Service</span></div></div></section>

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
                  "name": "Spring Valley",
                  "item": "https://www.closebytowing.com/san-diego/spring-valley"
            }
      ]
}) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", "@id": "https://www.closebytowing.com/san-diego/spring-valley", name: "CloseBy Towing - Spring Valley", description: "Towing in Spring Valley 91977 & 91978. Serving Casa de Oro, Dictionary Hill, Sweetwater Summit Park & SR-125 corridor 24/7.", url: "https://www.closebytowing.com/san-diego/spring-valley", telephone: CONTACT.phone, areaServed: [{ "@type": "PostalAddress", postalCode: "91977", addressLocality: "Spring Valley", addressRegion: "CA" }, { "@type": "PostalAddress", postalCode: "91978", addressLocality: "Spring Valley", addressRegion: "CA" }], geo: { "@type": "GeoCoordinates", latitude: 32.7448, longitude: -116.9989 }, serviceType: ["Towing Service", "Roadside Assistance", "Hill Terrain Recovery"], priceRange: "$$", openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ_DATA.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) }) }} />
    </main>
  );
}
