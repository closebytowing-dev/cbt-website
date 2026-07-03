"use client";

import { useState, useEffect } from "react";
import { useOnlineDiscount } from "@/hooks/useOnlineDiscount";
import { useVisibility } from "@/hooks/useVisibility";
import "./PopupAnimations.css";

// Source of truth for Q&A content - Note: pricing answer is dynamically rendered with current discount
const getQA = (discountPercentage: number) => [
  {
    q: "How fast can you get to me?",
    a: "Most calls in San Diego see 15-25 minute ETAs depending on traffic and distance. We text or call with updates if anything changes.",
    icon: "⚡",
    category: "speed"
  },
  {
    q: "How much does towing cost?",
    a: `Pricing varies based on distance and service type. Local tows typically start at $75-125. Roadside services like jump starts and lockouts are $75 online (save ${discountPercentage}% from $88 regular price). Call (858) 999-9293 for an instant quote—we provide upfront, transparent pricing before we dispatch.`,
    icon: "💰",
    category: "pricing"
  },
  {
    q: "Do you work with insurance companies?",
    a: "Yes! We're experienced with all major insurance providers and roadside assistance programs. We provide detailed receipts and documentation for reimbursement. Many policies cover towing and roadside services—check your coverage and we'll help with the paperwork.",
    icon: "🛡️",
    category: "insurance"
  },
  {
    q: "Do you tow EVs and AWD/low vehicles?",
    a: "Yes. We use flatbeds and trained operators for EVs, AWD, and low-clearance cars to avoid drivetrain or aero damage.",
    icon: "🚗",
    category: "vehicles"
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. CloseBy Towing is fully licensed, bonded, and insured. Our drivers are professionally trained and background-checked. We carry comprehensive liability and cargo insurance to protect your vehicle during transport.",
    icon: "✅",
    category: "trust"
  },
  {
    q: "How does the online discount work?",
    a: "When you book online, the discount is applied automatically at checkout—no promo code needed.",
    icon: "🎯",
    category: "pricing"
  },
  {
    q: "How can I get faster service?",
    a: "Request online and your job goes straight to the nearest driver, skipping the dispatcher, so you are connected quicker.",
    icon: "🚀",
    category: "speed"
  },
  {
    q: "What areas do you cover?",
    a: "All across San Diego County—from Downtown to La Jolla, Chula Vista to Poway. If you are just outside the county, call us—we can often accommodate.",
    icon: "📍",
    category: "coverage"
  },
  {
    q: "What payment methods do you accept?",
    a: "Most major cards (Visa, Mastercard, Amex, Discover) and contactless payments. Cash is accepted on-site. We provide detailed receipts for insurance and roadside assistance reimbursements.",
    icon: "💳",
    category: "payment"
  },
  {
    q: "What if my car is not drivable after an accident?",
    a: "We specialize in collision recovery and accident towing. Our team safely removes vehicles from accident scenes with proper equipment and provides all necessary documentation for insurance claims. Available 24/7 across San Diego.",
    icon: "🆘",
    category: "emergency"
  },
];

// Utility to create stable, URL-friendly IDs for deep-linking
function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function FAQ() {
  const { discountText, discountPercentage } = useOnlineDiscount();
  const { config } = useVisibility();
  const showBanners = config.customerRequestForm?.saveBanners !== false;
  const QA = getQA(discountPercentage);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: QA.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  // Pre-stringify to avoid re-serializing on every render
  const structuredData = JSON.stringify(jsonLd);

  return (
    <section className="relative w-full overflow-hidden">
      {/* ═══ FAQ SECTION ═══ */}
      <div className="relative bg-gradient-to-b from-white via-gray-50 to-white py-16 sm:py-20 lg:py-24">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-2 mb-4">
              <span className="text-amber-600 text-sm font-semibold uppercase tracking-wider">Got Questions?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Frequently Asked{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Questions
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-400/40" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0,6 Q50,12 100,6 T200,6" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our towing and roadside services
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {QA.map(({ q, a, icon }, index) => {
              const id = slugify(q);
              const isOpen = openIndex === index;

              return (
                <div
                  key={q}
                  id={id}
                  className={`group transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div
                    className={`relative rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-300 shadow-xl shadow-amber-500/10"
                        : "bg-white border-gray-200 hover:border-amber-200 hover:shadow-lg"
                    }`}
                  >
                    {/* Decorative corner accent */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-400/10 to-transparent rounded-bl-full transition-opacity ${isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`} />

                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full text-left py-3 px-4 sm:p-6 focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Icon — hidden on mobile so the question gets full width */}
                        <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl hidden sm:flex items-center justify-center text-xl sm:text-2xl transition-all duration-300 ${
                          isOpen
                            ? "bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/30 scale-110"
                            : "bg-gray-100 group-hover:bg-amber-100"
                        }`}>
                          {icon}
                        </div>

                        {/* Question */}
                        <div className="flex-1 min-w-0">
                          <h3 className={`font-bold text-base sm:text-lg pr-2 transition-colors ${
                            isOpen ? "text-amber-900" : "text-gray-900"
                          }`}>
                            {q}
                          </h3>
                        </div>

                        {/* Toggle icon */}
                        <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-amber-500 text-white rotate-180"
                            : "bg-gray-100 text-gray-500 group-hover:bg-amber-100 group-hover:text-amber-600"
                        }`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      {/* Answer */}
                      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 mt-4" : "max-h-0"}`}>
                        <div className="pl-0 sm:pl-16 pr-4">
                          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            {a}
                          </p>
                          <div className="mt-3 pt-3 border-t border-amber-200/50">
                            <a
                              href={`#${id}`}
                              className="inline-flex items-center gap-1 text-xs text-amber-600 hover:text-amber-700 font-medium"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                              </svg>
                              Copy link
                            </a>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick stats under FAQ */}
          <div className={`mt-12 lg:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {[
              { value: "10+", label: "Questions Answered", icon: "❓" },
              { value: "24/7", label: "Support Available", icon: "📞" },
              { value: "5.0★", label: "Google Rating", icon: "⭐" },
              { value: "1000+", label: "Happy Customers", icon: "😊" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-white border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 group">
                <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">{stat.icon}</span>
                <div className="text-xl sm:text-2xl font-black text-gray-900">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ NEED HELP RIGHT NOW - PREMIUM CTA SECTION ═══ */}
      <div className="relative overflow-hidden">
        {/* Dramatic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#1e1e4a] to-[#2d1f47]" />

        {/* Animated orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[150px]" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }} />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Main content */}
            <div className="text-center">
              {/* Emergency badge */}
              <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-full px-5 py-2 mb-6 animate-pulse">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="text-red-300 text-sm font-semibold uppercase tracking-wider">24/7 Emergency Service</span>
              </div>

              {/* Main headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight">
                Need Help{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                    Right Now?
                  </span>
                  {/* Underline effect */}
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                </span>
              </h2>

              {/* Subheadline */}
              <p className="text-xl sm:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                Our team is standing by to get you back on the road.{" "}
                <span className="text-amber-400 font-semibold">Fast response</span>,{" "}
                <span className="text-cyan-400 font-semibold">professional service</span>,{" "}
                <span className="text-green-400 font-semibold">upfront pricing</span>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12">
                {/* Primary CTA - Call Now */}
                <a
                  href="tel:+18589999293"
                  className="group relative w-full sm:w-auto"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity" />

                  <div className="relative bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black px-10 sm:px-12 py-5 sm:py-6 rounded-2xl font-black text-xl sm:text-2xl shadow-2xl transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-3 overflow-hidden">
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                    <span className="relative flex items-center gap-3">
                      <svg className="w-7 h-7 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>(858) 999-9293</span>
                    </span>
                  </div>
                </a>

                {/* Secondary CTA - Order Online */}
                {showBanners && (
                  <button
                    onClick={() => {
                      const popup = document.querySelector('[aria-label*="Get instant price"]') as HTMLButtonElement;
                      if (popup) popup.click();
                    }}
                    className="group relative w-full sm:w-auto"
                  >
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />

                    <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 sm:px-12 py-5 sm:py-6 rounded-2xl font-bold text-lg sm:text-xl shadow-2xl transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-3 overflow-hidden border border-white/20">
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                      <span className="relative flex items-center gap-3">
                        <span className="text-2xl">💰</span>
                        <span>Order Online & Save {discountText}</span>
                      </span>
                    </div>
                  </button>
                )}
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-12">
                {[
                  { icon: "⚡", text: "15-25 min Response" },
                  { icon: "🛡️", text: "Licensed & Insured" },
                  { icon: "⭐", text: "5.0★ Google Rating" },
                  { icon: "💳", text: "All Cards Accepted" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-white/70">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm sm:text-base font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Bottom cards - What We Offer */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                {[
                  {
                    icon: "🚛",
                    title: "Towing Service",
                    desc: "Local & long distance",
                    color: "from-blue-500/20 to-cyan-500/20",
                    borderColor: "border-blue-500/30",
                  },
                  {
                    icon: "🔋",
                    title: "Jump Start",
                    desc: "Dead battery? No problem",
                    color: "from-amber-500/20 to-yellow-500/20",
                    borderColor: "border-amber-500/30",
                  },
                  {
                    icon: "🔐",
                    title: "Lockout Service",
                    desc: "Locked out? We're here",
                    color: "from-purple-500/20 to-pink-500/20",
                    borderColor: "border-purple-500/30",
                  },
                ].map((service) => (
                  <div
                    key={service.title}
                    className={`group relative bg-gradient-to-br ${service.color} backdrop-blur-sm rounded-2xl p-6 border ${service.borderColor} hover:scale-105 transition-all duration-300`}
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{service.icon}</div>
                    <h3 className="text-white font-bold text-lg mb-1">{service.title}</h3>
                    <p className="text-white/60 text-sm">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 sm:h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path
              d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,25 1440,50 L1440,100 L0,100 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* ═══ CUSTOM ANIMATIONS ═══ */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
    </section>
  );
}
