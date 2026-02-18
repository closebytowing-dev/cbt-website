"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, useRef, Suspense } from "react";
import dynamic from "next/dynamic";
import { CONTACT, STATS, SERVICE_AREAS } from "@/lib/constants";
import TowTruckLandingCTA from "@/components/TowTruckLandingCTA";

const LeftPopup = dynamic(() => import("@/components/LeftPopup"), { ssr: false });

// ─── REVIEWS DATA ────────────────────────────────────────────────
const REVIEWS = [
  { name: "Maria G.", location: "Mission Valley", text: "Car broke down in Mission Valley. They showed up in 17 minutes with a flatbed. Professional, fast, fair price.", rating: 5 },
  { name: "James R.", location: "Pacific Beach", text: "Stuck on the 5 near PB at midnight. They were there before I even finished my coffee. Lifesaver.", rating: 5 },
  { name: "David K.", location: "El Cajon", text: "Flatbed tow from El Cajon to the dealership. Careful with my car, upfront pricing, no surprises.", rating: 5 },
  { name: "Sarah M.", location: "Hillcrest", text: "Locked out in Hillcrest at 2am. Called CloseBy and they had me back in my car in 20 minutes.", rating: 5 },
  { name: "Carlos T.", location: "Chula Vista", text: "Needed a tow after an accident on the 805. They handled everything calmly and quickly. Thank you.", rating: 5 },
  { name: "Lisa W.", location: "La Jolla", text: "Best towing experience I've ever had. They quoted me a price and that's exactly what I paid.", rating: 5 },
];

// ─── SERVICE TYPES DATA ──────────────────────────────────────────
const SERVICE_TYPES = [
  { name: "Emergency Towing", desc: "Broke down? We'll get you and your vehicle to safety fast.", icon: "🚨" },
  { name: "Flatbed Towing", desc: "Safe transport for luxury, AWD, and damaged vehicles.", icon: "🚛" },
  { name: "Accident Recovery", desc: "Post-collision towing with insurance coordination.", icon: "⚠️" },
  { name: "Motorcycle Towing", desc: "Specialized equipment for safe motorcycle transport.", icon: "🏍️" },
  { name: "Long Distance Towing", desc: "Reliable long-distance transport across California.", icon: "🛣️" },
  { name: "Roadside Assistance", desc: "Jump starts, lockouts, tire changes, fuel delivery.", icon: "🔧" },
];

// ─── FAQ DATA ────────────────────────────────────────────────────
const FAQS = [
  { q: "How much does a tow cost in San Diego?", a: "Local towing typically starts at $95. You'll know your exact price before we dispatch — no hidden fees, no surprises at the curb. Get your quote in 60 seconds through our online form." },
  { q: "How fast can you get to me?", a: "Our average response time is 20–35 minutes across San Diego County. We dispatch the nearest available truck and give you real-time ETA updates." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, debit cards, Apple Pay, Google Pay, and cash. Payment is collected after the job is complete." },
  { q: "Will my car be damaged during towing?", a: "No. We use modern flatbed and wheel-lift equipment designed to prevent any damage. All vehicles are secured with professional-grade straps. We're fully insured for your peace of mind." },
  { q: "Do you work with insurance companies?", a: "Yes. We work with all major insurance providers and can coordinate directly with your insurer for accident towing and roadside claims." },
  { q: "Are you available on holidays and weekends?", a: "Yes — we're available 24/7, 365 days a year including all holidays. Emergencies don't wait, and neither do we." },
];

// ─── HERO COMPONENT WITH A/B TESTING ────────────────────────────
function HeroContent() {
  const searchParams = useSearchParams();
  const variant = searchParams.get("v") || "a";

  const headline = variant === "b"
    ? "Stuck on the Road? Help Is 20 Minutes Away."
    : "Car Broke Down? We're Already Close.";

  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden" style={{ background: '#1e1e4a' }}>
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/services/tow-truck-hero.webp"
          alt="CloseBy Towing truck in San Diego"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e1e4a]/95 via-[#1e1e4a]/80 to-[#1e1e4a]/60" />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url(/images/noise.png)', backgroundRepeat: 'repeat' }} />
        {/* Amber glow behind CTA zone */}
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #ffba42 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-16 sm:py-20 lg:py-24">
        {/* Hero content */}
        <div className="max-w-2xl">
          {/* Emergency badge */}
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 text-red-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-400"></span>
            </span>
            24/7 Emergency Towing
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
            {headline}
          </h1>

          {/* Trust line */}
          <p className="text-white/70 text-sm sm:text-base font-medium mb-2">
            {STATS.rating} Stars &bull; Licensed &amp; Insured &bull; 24/7 &bull; No Hidden Fees
          </p>
          <p className="text-white/50 text-sm font-medium mb-8">
            Covering I-5, I-8, 163 &amp; 805 — and all San Diego neighborhoods.
          </p>

          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* Primary: Call Now */}
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 sm:px-12 sm:py-6 rounded-2xl font-black text-xl sm:text-2xl text-white transition-all active:scale-[.98]"
              style={{ background: '#ffba42', color: '#1e1e4a' }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="shimmer-sweep" />
              </div>
              <svg className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 animate-pulse" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              <span className="relative z-10">Call Now</span>
            </a>

            {/* Secondary: Get Exact Price */}
            <TowTruckLandingCTA />
          </div>

          <p className="text-white/40 text-xs">Average response: 20–35 minutes &bull; San Diego County</p>
        </div>
      </div>
    </section>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────
export default function TowTruckLandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Scroll listener for sticky CTA text change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for fade-up animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = (index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el;
  };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Inline styles for animations */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmerSweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .shimmer-sweep {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
          animation: shimmerSweep 3s ease-in-out infinite;
        }
        .animate-fade-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-fade-up-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: HERO
      ═══════════════════════════════════════════════════════════ */}
      <Suspense fallback={
        <section className="min-h-[50vh] flex items-center" style={{ background: '#1e1e4a' }}>
          <div className="max-w-[1400px] mx-auto px-6 py-20">
            <div className="h-12 w-96 bg-white/10 rounded animate-pulse mb-6" />
            <div className="h-8 w-64 bg-white/10 rounded animate-pulse" />
          </div>
        </section>
      }>
        <HeroContent />
      </Suspense>


      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: SOCIAL PROOF
      ═══════════════════════════════════════════════════════════ */}
      <section ref={setSectionRef(0)} className="animate-fade-up py-14 sm:py-20 px-6" style={{ background: '#fafafa' }}>
        <div className="max-w-[1400px] mx-auto">
          {/* Google badge + rating */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-slate-100">
              {/* Google G icon */}
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex items-center gap-1">
                <span className="text-amber-500 text-lg">★★★★★</span>
                <span className="font-bold text-slate-800">{STATS.rating}</span>
              </div>
              <span className="text-slate-500 text-sm font-medium">from 50+ Google Reviews</span>
            </div>
          </div>

          {/* Featured quote */}
          <div className="text-center mb-10">
            <blockquote className="text-xl sm:text-2xl font-bold text-slate-800 max-w-2xl mx-auto leading-relaxed">
              &ldquo;{REVIEWS[0].text}&rdquo;
            </blockquote>
            <p className="text-slate-500 mt-3 font-medium">{REVIEWS[0].name} — {REVIEWS[0].location}</p>
          </div>

          {/* Scrolling reviews */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6" style={{ animation: 'marquee 30s linear infinite', width: 'max-content' }}>
              {[...REVIEWS, ...REVIEWS].map((review, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[320px] sm:w-[380px] rounded-2xl p-6 border border-amber-200/50"
                  style={{ background: '#ffba42' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#1e1e4a] flex items-center justify-center text-white font-bold text-sm">
                      {review.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-bold text-[#1e1e4a] text-sm">{review.name}</p>
                      <p className="text-[#1e1e4a]/60 text-xs">{review.location}</p>
                    </div>
                    <span className="ml-auto text-amber-700 text-xs font-semibold">★★★★★</span>
                  </div>
                  <p className="text-[#1e1e4a]/80 text-sm leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
          SECTION 3: PRICING + PROCESS (Merged)
      ═══════════════════════════════════════════════════════════ */}
      <section ref={setSectionRef(1)} className="animate-fade-up py-16 sm:py-24 px-6" style={{ background: '#1e1e4a' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Message */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                No Surprise<br />Towing Bills.
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-lg">
                You&apos;ll know your exact price before we dispatch. No hidden fees. No bait-and-switch. The price we quote is the price you pay.
              </p>

              {/* 3-step process inline */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10">
                {[
                  { step: "1", label: "Get Your Price", sub: "60 seconds" },
                  { step: "2", label: "We Dispatch", sub: "Nearest truck" },
                  { step: "3", label: "Back on the Road", sub: "Done" },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#ffba42] flex items-center justify-center font-black text-[#1e1e4a] text-lg flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{item.label}</p>
                      <p className="text-white/40 text-xs">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Starting price */}
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-white/40 text-sm font-medium">Towing starts at</span>
                <span className="text-[#ffba42] text-4xl font-black">$95</span>
                <span className="text-white/40 text-sm font-medium">local</span>
              </div>
            </div>

            {/* Right: CTA card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                Get Your Exact Price
              </h3>
              <p className="text-white/60 mb-8">
                Takes 60 seconds. No obligation. No pressure.
              </p>
              <TowTruckLandingCTA large />
              <div className="mt-6 flex items-center justify-center gap-4 text-white/30 text-xs">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                  Secure
                </span>
                <span>&bull;</span>
                <span>No spam</span>
                <span>&bull;</span>
                <span>Instant quote</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
          SECTION 4: SERVICE TYPES
      ═══════════════════════════════════════════════════════════ */}
      <section ref={setSectionRef(2)} className="animate-fade-up py-16 sm:py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center mb-4">
            What We Tow
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-lg mx-auto">
            From sedans to motorcycles to exotic cars — we have the right equipment for every vehicle.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_TYPES.map((service) => (
              <div
                key={service.name}
                className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:border-amber-200 transition-all"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{service.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
          SECTION 5: COVERAGE AREA
      ═══════════════════════════════════════════════════════════ */}
      <section ref={setSectionRef(3)} className="animate-fade-up py-16 sm:py-24 px-6" style={{ background: '#fafafa' }}>
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center mb-4">
            All Across San Diego
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-lg mx-auto">
            Covering I-5, I-8, 163 &amp; 805 — and every neighborhood in between.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[...SERVICE_AREAS, "San Ysidro"].map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:border-amber-300 hover:text-slate-800 transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
          SECTION 6: WHY CLOSEBY
      ═══════════════════════════════════════════════════════════ */}
      <section ref={setSectionRef(4)} className="animate-fade-up py-16 sm:py-24 px-6" style={{ background: '#1e1e4a' }}>
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-12">
            Why San Diego Chooses CloseBy
          </h2>

          {/* Trust badges grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "🛡️", title: "Licensed & Insured", desc: "CA DOT licensed. Fully insured for your vehicle's protection." },
              { icon: "✅", title: "No Damage Guarantee", desc: "Your vehicle arrives exactly as we picked it up. Guaranteed." },
              { icon: "📍", title: "Local San Diego Dispatch", desc: "Real dispatchers. Real trucks. Right here in San Diego." },
              { icon: "🕐", title: "24/7 Availability", desc: "Day, night, weekends, holidays. We never close." },
              { icon: "🇪🇸", title: "Se Habla Español", desc: "Bilingual team ready to help you in English or Spanish." },
              { icon: "🎖️", title: "Military & First Responder Discount", desc: "Proud to serve those who serve us. Ask about our discount." },
            ].map((badge) => (
              <div
                key={badge.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="text-2xl mb-3">{badge.icon}</div>
                <h3 className="font-bold text-white text-lg mb-2">{badge.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{badge.desc}</p>
              </div>
            ))}
          </div>

          {/* Inline comparison strip */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 py-6 border-t border-white/10">
            {[
              { check: "Upfront Pricing" },
              { check: "20 Min Avg ETA" },
              { check: "Licensed & Insured" },
              { check: "Local Dispatch" },
            ].map((item) => (
              <div key={item.check} className="flex items-center gap-2 text-white/70 text-sm font-medium">
                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item.check}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
          SECTION 7: FAQ
      ═══════════════════════════════════════════════════════════ */}
      <section ref={setSectionRef(5)} className="animate-fade-up py-16 sm:py-24 px-6 bg-white">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 text-center mb-12">
            Common Questions
          </h2>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-800 pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${faqOpen === i ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {faqOpen === i && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
          SECTION 8: FINAL CTA
      ═══════════════════════════════════════════════════════════ */}
      <section ref={setSectionRef(6)} className="animate-fade-up py-16 sm:py-24 px-6" style={{ background: 'linear-gradient(135deg, #1e1e4a 0%, #0d0d36 100%)' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
            Still on the Side<br />of the Road?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            We&apos;re ready. One call and we&apos;re on our way.
          </p>

          {/* Triple CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            {/* Call Now */}
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-black text-xl transition-all active:scale-[.98]"
              style={{ background: '#ffba42', color: '#1e1e4a' }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              Call Now
            </a>

            {/* Get Price */}
            <TowTruckLandingCTA />

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold text-lg text-white bg-emerald-600 hover:bg-emerald-700 transition-colors active:scale-[.98]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 text-white/40 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Licensed &amp; Insured
            </span>
            <span>San Diego Local</span>
            <span>5.0 Perfect Rating</span>
            <span>24/7 Available</span>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════
          STICKY MOBILE CTA BAR
      ═══════════════════════════════════════════════════════════ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          className="flex items-center justify-center gap-3 w-full py-4 font-black text-lg transition-all"
          style={{ background: '#ffba42', color: '#1e1e4a' }}
        >
          <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
          {scrolled ? "Still Need Help? Call Now" : "Call Now — (858) 999-9293"}
        </a>
      </div>

      {/* Bottom padding for sticky bar on mobile */}
      <div className="h-14 lg:hidden" />

      {/* LeftPopup booking system */}
      <LeftPopup />
    </main>
  );
}
