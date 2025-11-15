import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import LeftPopup from "@/components/LeftPopup";

export const metadata: Metadata = {
  title: "About CloseBy Towing | San Diego's Trusted Roadside Assistance Since 2020",
  description: "Learn about CloseBy Towing - San Diego's premier 24/7 towing and roadside assistance company. Licensed, insured, and trusted by 10,000+ customers. Meet our team and discover our story.",
  keywords: "about CloseBy Towing, San Diego towing company, licensed towing service, professional roadside assistance",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About CloseBy Towing | San Diego's Trusted Roadside Assistance",
    description: "Learn about San Diego's premier 24/7 towing and roadside assistance company. Licensed, insured, and trusted by 10,000+ customers.",
    url: "https://closebytowing.com/about",
    type: "website",
    images: ["/hero/home-hero.webp"],
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "CloseBy Towing San Diego",
      "foundingDate": "2020",
      "description": "San Diego's premier 24/7 towing and roadside assistance company",
      "telephone": "+1-858-999-9293",
      "email": "info@closebytowing.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Diego",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <main className="min-h-screen bg-gradient-to-b from-[#1e1e4a] to-[#2a2a5a]">
        {/* Hero Section */}
        <section className="relative bg-[#1e1e4a] text-white py-12 sm:py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
                About <span className="text-[#ffba42]">CloseBy Towing</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto px-4">
                San Diego's Most Trusted 24/7 Towing & Roadside Assistance Company
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e4a] mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    CloseBy Towing was founded in 2020 with a simple mission: to provide San Diego with the most reliable, professional, and affordable towing and roadside assistance services available 24/7.
                  </p>
                  <p>
                    We saw too many people stranded on the side of the road, waiting hours for help, dealing with hidden fees, and receiving poor customer service. We knew there had to be a better way.
                  </p>
                  <p>
                    Since our founding, we've helped over <strong className="text-[#ffba42]">15,000 customers</strong> get back on the road safely. Our fleet has grown, our team has expanded, but our commitment to <strong>fast response times</strong>, <strong>upfront pricing</strong>, and <strong>exceptional service</strong> remains unchanged.
                  </p>
                  <p>
                    Today, CloseBy Towing is proud to be San Diego's highest-rated towing company with a <strong className="text-green-600">4.9★ rating</strong> and over 1,247 five-star reviews.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero/home-hero.webp"
                  alt="CloseBy Towing professional tow truck and team in San Diego"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#1e1e4a] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: "⚡",
                  title: "Speed & Reliability",
                  description: "20-35 minute average response time. We arrive fast and get you moving faster."
                },
                {
                  icon: "💰",
                  title: "Transparent Pricing",
                  description: "No hidden fees. Upfront quotes. You know exactly what you'll pay before we arrive."
                },
                {
                  icon: "🛡️",
                  title: "Professionalism",
                  description: "Licensed, insured, background-checked drivers. Your safety is our priority."
                },
              ].map((value, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-[#ffba42] transition-all">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-[#ffba42]">{value.title}</h3>
                  <p className="text-white/80 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* By the Numbers */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1e1e4a] mb-12">
              CloseBy Towing By the Numbers
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "15,000+", label: "Services Completed" },
                { number: "4.9★", label: "Average Rating" },
                { number: "20-35", label: "Min Response Time" },
                { number: "24/7/365", label: "Always Available" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#ffba42] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 sm:py-20 bg-[#2a2a5a] text-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Why San Diego Chooses CloseBy Towing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "✅ Licensed & Insured - Full coverage for your protection",
                "✅ 20-35 Minute ETA - Fastest response in San Diego",
                "✅ Upfront Pricing - No surprises, no hidden fees",
                "✅ 24/7 Availability - We never close, even on holidays",
                "✅ Professional Drivers - Background checked and trained",
                "✅ Modern Fleet - Well-maintained tow trucks and equipment",
                "✅ All Services - Towing, jump starts, lockouts, tire changes, fuel delivery",
                "✅ 15% Online Discount - Save money by booking online",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <span className="text-xl">{item.split(" ")[0]}</span>
                  <span className="text-white/90">{item.substring(item.indexOf(" ") + 1)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e4a] mb-6">
              Serving All of San Diego County
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              From Downtown to La Jolla, Pacific Beach to Chula Vista, we cover the entire San Diego area with fast, professional towing and roadside assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-700">
              {[
                "Downtown San Diego",
                "La Jolla",
                "Pacific Beach",
                "Mission Valley",
                "Hillcrest",
                "North Park",
                "Gaslamp Quarter",
                "Point Loma",
                "Ocean Beach",
                "Chula Vista",
                "National City",
                "El Cajon",
                "Santee",
                "La Mesa",
                "Coronado",
              ].map((area, idx) => (
                <span key={idx} className="bg-[#1e1e4a] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 sm:py-20 bg-[#ffba42]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1e1e4a] mb-6">
              Need Help Right Now?
            </h2>
            <p className="text-xl text-[#1e1e4a]/80 mb-8">
              Our team is standing by 24/7 to get you back on the road fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18589999293"
                className="inline-block rounded-lg bg-[#1e1e4a] text-white px-8 py-4 font-bold hover:brightness-110 text-lg shadow-lg transition-all hover:scale-105 text-center"
              >
                📞 Call Now: (858) 999-9293
              </a>
              <Link
                href="/"
                className="inline-block rounded-lg bg-white text-[#1e1e4a] px-8 py-4 font-bold hover:brightness-95 text-lg shadow-lg transition-all hover:scale-105 text-center"
              >
                💰 Order Online & Save 15%
              </Link>
            </div>
          </div>
        </section>

        <LeftPopup />
      </main>
    </>
  );
}
