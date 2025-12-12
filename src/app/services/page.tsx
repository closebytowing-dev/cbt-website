import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import LeftPopup from "@/components/LeftPopup";

export const metadata: Metadata = {
  title: "24/7 Roadside Services San Diego | Towing, Jump Start, Lockout & More | CloseBy Towing",
  description: "Complete roadside assistance in San Diego. Professional towing, jump start, lockout service, tire change, gas delivery, winch-out & collision recovery. 20-35 min response. Call (858) 999-9293.",
  keywords: "roadside assistance San Diego, towing services, jump start, lockout service, tire change, gas delivery, winch out, collision recovery, 24/7 emergency roadside",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "24/7 Roadside Services San Diego | CloseBy Towing",
    description: "Complete roadside assistance: towing, jump start, lockout, tire change & more. Fast 20-35 min response.",
    type: "website",
  },
};

const services = [
  {
    name: "Towing",
    href: "/services/towing",
    description: "Professional flatbed and wheel-lift towing for all vehicle types. Emergency and scheduled service available.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    color: "from-red-500 to-red-600",
    popular: true,
  },
  {
    name: "Jump Start",
    href: "/services/jump-start",
    description: "Dead battery? We'll get you running in minutes with professional jump start service.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "from-yellow-500 to-yellow-600",
  },
  {
    name: "Lockout Service",
    href: "/services/lockout",
    description: "Locked out of your car? Our technicians can safely unlock your vehicle without damage.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Tire Change",
    href: "/services/tire-change",
    description: "Flat tire? We'll swap it for your spare quickly and safely, getting you back on the road.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "from-green-500 to-green-600",
  },
  {
    name: "Gas Delivery",
    href: "/services/gas-delivery",
    description: "Ran out of gas? We'll bring fuel to your location so you can get to the nearest station.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Winch-Out",
    href: "/services/winch-out",
    description: "Stuck in mud, sand, or a ditch? Our winch-out service will safely extract your vehicle.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Collision Recovery",
    href: "/services/collision-recovery",
    description: "After an accident, we provide safe vehicle recovery and work directly with insurance companies.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    color: "from-slate-600 to-slate-700",
  },
];

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Roadside Assistance",
    "provider": {
      "@type": "LocalBusiness",
      "name": "CloseBy Towing",
      "telephone": "+1-858-999-9293",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Diego",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "San Diego"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roadside Services",
      "itemListElement": services.map((service) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        }
      }))
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Trust Bar */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 px-6">
        <div className="mx-auto max-w-[1600px] flex flex-wrap justify-center items-center gap-6 text-sm font-semibold">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span>20-35 Min Response</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>4.9/5 Stars (1,247 Reviews)</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>10,000+ Customers Served</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}></div>
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-blue-700 font-bold text-sm">24/7 ROADSIDE ASSISTANCE</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900 mb-6">
              Complete Roadside
              <span className="block mt-2 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Services in San Diego
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed">
              From towing to tire changes, we've got you covered. Fast response times, upfront pricing, and professional service you can trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18589999293"
                className="group relative px-10 py-5 rounded-2xl font-black text-xl bg-gradient-to-r from-red-600 to-red-700 text-white shadow-[0_20px_60px_rgba(220,38,38,0.4)] hover:shadow-[0_20px_80px_rgba(220,38,38,0.6)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                CALL: (858) 999-9293
              </a>
              <Link
                href="/contact"
                className="px-10 py-5 rounded-2xl font-black text-xl bg-white text-slate-900 border-2 border-slate-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 px-6 bg-white">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Whatever roadside emergency you're facing, we have the expertise and equipment to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="group relative block"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-500`}></div>
                <div className="relative h-full p-8 bg-white rounded-3xl border-2 border-slate-200 hover:border-transparent transition-all duration-500 shadow-lg hover:shadow-2xl">
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-white`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-4 transition-all">
                    <span>Learn More</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="mx-auto max-w-[1600px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Why San Diego Chooses <span className="text-[#ffba42]">CloseBy Towing</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              We've built our reputation on fast response, fair pricing, and exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "20-35", label: "Min Response", desc: "Average arrival time" },
              { icon: "24/7", label: "Availability", desc: "Every day, all year" },
              { icon: "4.9", label: "Star Rating", desc: "From 1,247 reviews" },
              { icon: "10K+", label: "Customers", desc: "Served & satisfied" },
            ].map((stat, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 text-center hover:bg-white/20 transition-all">
                <div className="text-5xl font-black text-[#ffba42] mb-2">{stat.icon}</div>
                <div className="text-xl font-bold mb-1">{stat.label}</div>
                <div className="text-white/60">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#ffba42]">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
            Need Roadside Assistance?
          </h2>
          <p className="text-xl text-slate-800 mb-8 max-w-2xl mx-auto">
            Don't wait on the side of the road. Call now and we'll be there in 20-35 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18589999293"
              className="px-12 py-6 rounded-2xl font-black text-2xl bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (858) 999-9293
            </a>
            <a
              href="sms:+18589999293?&body=I need roadside assistance"
              className="px-12 py-6 rounded-2xl font-black text-2xl bg-white text-slate-900 border-2 border-slate-900 hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Text Us
            </a>
          </div>
        </div>
      </section>

      <LeftPopup />
    </main>
  );
}
