"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import LeftPopup from "@/components/LeftPopup";

// ============================================
// INTERSECTION OBSERVER HOOK FOR SCROLL ANIMATIONS
// ============================================
function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(element); // Only animate once
      }
    }, { threshold: 0.1, ...options });

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}

// ============================================
// ANIMATED COUNTER HOOK
// ============================================
function useCounter(end: number, duration: number = 2000, startOnView: boolean = false, isInView: boolean = true) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (startOnView && !isInView) return;
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, startOnView, isInView]);

  return count;
}

// ============================================
// TILT CARD COMPONENT
// ============================================
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 0.15 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransform("");
    setGlare({ x: 50, y: 50, opacity: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative transition-transform duration-200 ease-out ${className}`}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {/* Glare effect */}
      <div
        className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 50%)`,
        }}
      />
    </div>
  );
}

// ============================================
// FLOATING PARTICLES COMPONENT
// ============================================
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: Math.random() * 4 + 1 + "px",
            height: Math.random() * 4 + 1 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            animation: `float-particle ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: `-${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}

// ============================================
// ANIMATED TEXT COMPONENT
// ============================================
function AnimatedText({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ============================================
// IMAGE REVEAL COMPONENT
// ============================================
function ImageReveal({ src, alt, className = "", priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  const { ref, isInView } = useInView();
  const [loaded, setLoaded] = useState(false);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Reveal curtain */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#ffba42] to-orange-500 z-10 transition-transform duration-1000 ease-out origin-left"
        style={{
          transform: isInView && loaded ? "scaleX(0)" : "scaleX(1)",
          transformOrigin: "right",
        }}
      />
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-all duration-700 ${isInView && loaded ? "scale-100 blur-0" : "scale-110 blur-sm"}`}
        onLoad={() => setLoaded(true)}
        priority={priority}
      />
    </div>
  );
}

// ============================================
// SERVICE DATA
// ============================================
const services = [
  {
    id: "towing",
    name: "Towing",
    tagline: "Professional Vehicle Transport",
    href: "/services/towing",
    description: "State-of-the-art flatbed and wheel-lift towing for any vehicle. From daily drivers to exotic supercars, we handle them all with precision care.",
    image: "/services/tow-truck-hero.webp",
    features: ["Flatbed & Wheel-lift", "Exotic Car Certified", "Long Distance Available"],
    price: "From $75",
    color: "from-red-500 to-orange-600",
  },
  {
    id: "jump-start",
    name: "Jump Start",
    tagline: "Instant Battery Revival",
    href: "/services/jump-start",
    description: "Dead battery? Our technicians arrive with professional-grade equipment to get your engine running in minutes, including hybrid and EV support.",
    image: "/services/jump-start-hero.webp",
    features: ["All Vehicle Types", "Hybrid & EV Ready", "Battery Testing"],
    price: "From $55",
    color: "from-yellow-400 to-amber-500",
  },
  {
    id: "lockout",
    name: "Lockout Service",
    tagline: "Swift Access Recovery",
    href: "/services/lockout",
    description: "Locked out of your vehicle? Our certified technicians use advanced tools to safely unlock any car without damage, day or night.",
    image: "/services/lockout-hero.webp",
    features: ["Damage-Free Entry", "All Makes & Models", "Smart Key Compatible"],
    price: "From $65",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "tire-change",
    name: "Tire Change",
    tagline: "Rapid Roadside Repair",
    href: "/services/tire-change",
    description: "Flat tire on the highway? We'll swap it for your spare quickly and safely, or tow you to your preferred tire shop if needed.",
    image: "/services/tire-change-hero.webp",
    features: ["Quick Swap Service", "Run-Flat Capable", "Tire Shop Transport"],
    price: "From $65",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "gas-delivery",
    name: "Gas Delivery",
    tagline: "Fuel When You Need It",
    href: "/services/gas-delivery",
    description: "Running on empty? We deliver fuel directly to your location so you can get back on the road without the hassle of finding a gas station.",
    image: "/services/gas-delivery-hero.webp",
    features: ["Regular & Premium", "Diesel Available", "Delivered to You"],
    price: "From $55",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "winch-out",
    name: "Winch-Out",
    tagline: "Expert Vehicle Extraction",
    href: "/services/winch-out",
    description: "Stuck in mud, sand, snow, or a ditch? Our powerful winch equipment safely extracts vehicles from the toughest situations.",
    image: "/services/winch-out-hero.webp",
    features: ["Heavy-Duty Winch", "Off-Road Recovery", "Damage Prevention"],
    price: "From $95",
    color: "from-purple-500 to-violet-600",
  },
  {
    id: "collision-recovery",
    name: "Collision Recovery",
    tagline: "Accident Response Experts",
    href: "/services/collision-recovery",
    description: "After an accident, trust our experienced team for safe vehicle recovery. We work directly with insurance companies and provide full documentation.",
    image: "/services/collision-recovery-hero.webp",
    features: ["Insurance Direct", "Scene Documentation", "24/7 Emergency"],
    price: "From $125",
    color: "from-slate-600 to-slate-800",
    hasNewHeroImage: true,
  },
];

const testimonials = [
  {
    name: "Joe Barajas",
    text: "I had my 1968 MGB towed by CloseBy Towing. Daniel was friendly, professional and the price was reasonable. Highly recommend.",
    rating: 5,
    date: "4 days ago",
  },
  {
    name: "Paul Stevenson",
    text: "Daniel was very professional and helpful. He got my Jeep Compass home after being stranded. I recommend CloseBy Towing in San Diego.",
    rating: 5,
    date: "1 week ago",
  },
  {
    name: "Brenda Valadez",
    text: "Great service! The driver arrived sooner than expected, and made a stressful situation much easier! If you ever need roadside assistance this is the company to call!",
    rating: 5,
    date: "13 hours ago",
  },
  {
    name: "Jacob Perkins",
    text: "Fantastic and professional towing service. Very friendly and very fair, affordable prices. Would recommend to anyone looking for a tow.",
    rating: 5,
    date: "14 hours ago",
  },
  {
    name: "Adam Perse'",
    text: "This company was very fast and helpful. I blew a tire on Olympic Parkway during rush hour traffic and they truly made me feel like a priority.",
    rating: 5,
    date: "17 hours ago",
  },
];

// ============================================
// MAIN COMPONENT
// ============================================
export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Stats section refs for counter animation
  const statsInView = useInView();
  const responseTime = useCounter(25, 2000, true, statsInView.isInView);
  const customers = useCounter(10000, 2500, true, statsInView.isInView);
  const rating = useCounter(49, 2000, true, statsInView.isInView);
  const years = useCounter(15, 2000, true, statsInView.isInView);

  // Parallax and mouse tracking
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Auto-rotate featured service
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Schema markup for SEO
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Roadside Assistance",
    "provider": {
      "@type": "LocalBusiness",
      "name": "CloseBy Towing",
      "telephone": "+1-858-999-9293",
      "url": "https://closebytowing.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Diego",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1247"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "San Diego"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roadside Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description,
          "url": `https://closebytowing.com${service.href}`
        }
      }))
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://closebytowing.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://closebytowing.com/services" }
    ]
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ============================================ */}
      {/* ANIMATED BACKGROUND */}
      {/* ============================================ */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Mouse tracking spotlight */}
        <div
          className="absolute inset-0 opacity-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,186,66,0.15), transparent 40%)`,
          }}
        />
        {/* Top gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        {/* Floating particles */}
        <FloatingParticles />
      </div>

      {/* ============================================ */}
      {/* CINEMATIC HERO SECTION */}
      {/* ============================================ */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        {/* Full-screen background image - static for smooth experience */}
        <div className="absolute inset-0">
          <Image
            src="/services/services-hero.webp"
            alt="CloseBy Towing professional flatbed truck with vehicle on San Diego skyline at sunset"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
          {/* Golden hour color grading overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ffba42]/10 via-transparent to-orange-500/10 mix-blend-overlay" />
        </div>

        {/* Subtle animated light rays - CSS animation only, no scroll dependency */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-0 right-1/4 w-[600px] h-[800px] opacity-20 animate-pulse-slow"
            style={{
              background: 'linear-gradient(180deg, rgba(255,186,66,0.3) 0%, transparent 70%)',
              transform: 'rotate(15deg)',
              filter: 'blur(40px)',
            }}
          />
          <div
            className="absolute top-0 right-1/3 w-[400px] h-[600px] opacity-15 animate-pulse-slow"
            style={{
              background: 'linear-gradient(180deg, rgba(255,186,66,0.4) 0%, transparent 60%)',
              transform: 'rotate(25deg)',
              filter: 'blur(30px)',
              animationDelay: '1s',
            }}
          />
        </div>

        {/* Floating particles over the hero */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 3 + 1 + "px",
                height: Math.random() * 3 + 1 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                background: Math.random() > 0.5 ? 'rgba(255,186,66,0.6)' : 'rgba(255,255,255,0.4)',
                animation: `float-particle ${Math.random() * 15 + 10}s linear infinite`,
                animationDelay: `-${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Hero content - positioned left for cinematic asymmetry */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 py-32 w-full">
            <div className="max-w-2xl">
              <AnimatedText delay={0}>
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-black/30 backdrop-blur-xl border border-white/20 mb-8 shadow-2xl">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-semibold text-white">Available 24/7 Across San Diego</span>
                </div>
              </AnimatedText>

              <AnimatedText delay={100}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6">
                  <span className="block text-white drop-shadow-2xl">Premium</span>
                  <span className="block bg-gradient-to-r from-[#ffba42] via-amber-400 to-orange-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-2xl">
                    Roadside
                  </span>
                  <span className="block text-white/90 drop-shadow-2xl">Services</span>
                </h1>
              </AnimatedText>

              <AnimatedText delay={200}>
                <p className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed drop-shadow-lg">
                  San Diego's most trusted towing company. Fast response, transparent pricing, and
                  <span className="text-[#ffba42] font-semibold"> 7 specialized services</span> for every roadside emergency.
                </p>
              </AnimatedText>

              <AnimatedText delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+18589999293"
                    className="group relative px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden transform hover:scale-105 transition-transform shadow-2xl shadow-[#ffba42]/30"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ffba42] to-orange-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{ background: 'radial-gradient(circle at center, white, transparent 70%)' }} />
                    <span className="relative flex items-center gap-3 text-black">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      (858) 999-9293
                    </span>
                  </a>
                  <button
                    onClick={() => servicesRef.current?.scrollIntoView({ behavior: 'smooth' })}
                    className="group px-8 py-4 rounded-2xl font-bold text-lg bg-white/10 backdrop-blur-xl border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all transform hover:scale-105 shadow-xl"
                  >
                    <span className="flex items-center gap-3 text-white">
                      Explore Services
                      <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </span>
                  </button>
                </div>
              </AnimatedText>

              {/* Compact stats row */}
              <AnimatedText delay={400}>
                <div className="mt-12 flex flex-wrap gap-6 md:gap-10">
                  {[
                    { value: "20-35", suffix: "min", label: "Response" },
                    { value: "15K", suffix: "+", label: "Customers" },
                    { value: "4.9", suffix: "★", label: "Rating" },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl md:text-3xl font-black text-white drop-shadow-lg">
                        {stat.value}<span className="text-[#ffba42]">{stat.suffix}</span>
                      </div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </AnimatedText>
            </div>

            {/* Floating info card - positioned on right over the truck */}
            <AnimatedText delay={500}>
              <div className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2">
                <div className="p-6 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/20 shadow-2xl animate-float max-w-xs">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ffba42] to-orange-500 flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">Licensed & Insured</div>
                      <div className="text-white/60 text-sm">CA DOT Certified</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {["Flatbed", "Wheel-lift", "Heavy Duty"].map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-white/10 text-white/80 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>

        {/* Bottom gradient fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <div className="w-8 h-12 rounded-full border-2 border-white/40 flex items-start justify-center p-2 backdrop-blur-sm bg-black/20">
            <div className="w-1.5 h-3 bg-[#ffba42] rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* STATS SECTION - Separate from hero for better impact */}
      {/* ============================================ */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f18] to-[#0a0a0f]">
        <div className="max-w-6xl mx-auto">
          <div ref={statsInView.ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: responseTime, suffix: "-35 min", label: "Average Response", icon: "clock" },
              { value: customers.toLocaleString(), suffix: "+", label: "Happy Customers", icon: "users" },
              { value: (rating / 10).toFixed(1), suffix: "/5", label: "Star Rating", icon: "star" },
              { value: years, suffix: "+ Years", label: "Experience", icon: "trophy" },
            ].map((stat, idx) => (
              <AnimatedText key={idx} delay={idx * 100}>
                <div className="relative group text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-[#ffba42]/50 transition-all duration-300 overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ffba42]/10 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1">
                      {stat.value}<span className="text-[#ffba42]">{stat.suffix}</span>
                    </div>
                    <div className="text-sm text-white/50 font-medium">{stat.label}</div>
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SERVICES SHOWCASE */}
      {/* ============================================ */}
      <section ref={servicesRef} className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedText className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-[0.3em] text-[#ffba42] uppercase mb-4">Our Services</h2>
            <h3 className="text-5xl md:text-7xl font-black leading-tight">
              Everything You Need,
              <span className="block text-white/40">When You Need It</span>
            </h3>
          </AnimatedText>

          {/* Featured service showcase */}
          <div className="relative mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image side with reveal animation */}
              <TiltCard className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <ImageReveal
                  src={services[activeService].image}
                  alt={services[activeService].name}
                  className="absolute inset-0"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Floating price tag */}
                <div className="absolute top-6 right-6 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 animate-float">
                  <span className="text-2xl font-black text-[#ffba42]">{services[activeService].price}</span>
                </div>

                {/* Service badge */}
                <div className="absolute bottom-6 left-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${services[activeService].color} shadow-lg`}>
                    <span className="text-white font-bold">{services[activeService].name}</span>
                  </div>
                </div>
              </TiltCard>

              {/* Content side */}
              <div className="space-y-8">
                <AnimatedText>
                  <h4 className="text-4xl md:text-5xl font-black mb-2">{services[activeService].name}</h4>
                  <p className="text-xl text-[#ffba42] font-medium">{services[activeService].tagline}</p>
                </AnimatedText>

                <AnimatedText delay={100}>
                  <p className="text-lg text-white/70 leading-relaxed">{services[activeService].description}</p>
                </AnimatedText>

                <AnimatedText delay={200}>
                  <div className="flex flex-wrap gap-3">
                    {services[activeService].features.map((feature, idx) => (
                      <span key={idx} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:border-[#ffba42]/50 transition-colors">
                        {feature}
                      </span>
                    ))}
                  </div>
                </AnimatedText>

                <AnimatedText delay={300}>
                  <Link
                    href={services[activeService].href}
                    className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r ${services[activeService].color} text-white hover:scale-105 transition-transform shadow-lg hover:shadow-xl`}
                  >
                    Learn More
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </AnimatedText>
              </div>
            </div>

            {/* Service selector pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-12">
              {services.map((service, idx) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(idx)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeService === idx
                      ? `bg-gradient-to-r ${service.color} text-white scale-105 shadow-lg`
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BENTO GRID */}
      {/* ============================================ */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto">
          <AnimatedText className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black">
              All Services at a <span className="text-[#ffba42]">Glance</span>
            </h2>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <AnimatedText key={service.id} delay={idx * 100}>
                <Link href={service.href} className={`group block ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                  <TiltCard className={`relative overflow-hidden rounded-3xl ${idx === 0 ? 'aspect-[16/9] md:aspect-[4/3]' : 'aspect-[4/3]'}`}>
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Content overlay */}
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                      <div className="absolute top-6 right-6">
                        <span className={`px-4 py-2 rounded-xl bg-gradient-to-r ${service.color} text-white text-sm font-bold shadow-lg`}>
                          {service.price}
                        </span>
                      </div>

                      <div>
                        <h3 className={`font-black mb-2 ${idx === 0 ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
                          {service.name}
                        </h3>
                        <p className="text-white/70 mb-4 line-clamp-2">{service.tagline}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.features.slice(0, idx === 0 ? 3 : 2).map((feature, fidx) => (
                            <span key={fidx} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80">
                              {feature}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-[#ffba42] font-semibold group-hover:gap-4 transition-all">
                          <span>Learn More</span>
                          <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Hover glow */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-t ${service.color}`} />
                  </TiltCard>
                </Link>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TESTIMONIALS CAROUSEL */}
      {/* ============================================ */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <AnimatedText className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.3em] text-[#ffba42] uppercase mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-black">
              What San Diego <span className="text-[#ffba42]">Drivers Say</span>
            </h3>
          </AnimatedText>

          {/* Testimonial cards */}
          <div className="relative h-[300px]">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-700 ${
                  currentTestimonial === idx
                    ? 'opacity-100 translate-x-0 scale-100'
                    : idx < currentTestimonial
                      ? 'opacity-0 -translate-x-full scale-95'
                      : 'opacity-0 translate-x-full scale-95'
                }`}
              >
                <TiltCard className="h-full p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-[#ffba42]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">"{testimonial.text}"</p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ffba42] to-orange-500 flex items-center justify-center text-black font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-sm text-white/50">{testimonial.date}</div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentTestimonial === idx
                    ? 'bg-[#ffba42] w-8'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHY CHOOSE US */}
      {/* ============================================ */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedText>
                <h2 className="text-sm font-bold tracking-[0.3em] text-[#ffba42] uppercase mb-4">Why CloseBy</h2>
                <h3 className="text-5xl md:text-6xl font-black leading-tight mb-8">
                  The Gold Standard in
                  <span className="block text-white/40">Roadside Assistance</span>
                </h3>
              </AnimatedText>

              <div className="space-y-6">
                {[
                  { icon: "lightning", title: "Fastest Response Times", desc: "Average 20-35 minute arrival across all of San Diego County" },
                  { icon: "shield", title: "Fully Licensed & Insured", desc: "CA DOT certified with $1M+ liability coverage for your peace of mind" },
                  { icon: "dollar", title: "Transparent Pricing", desc: "Upfront quotes with no hidden fees. What we quote is what you pay." },
                  { icon: "star", title: "5-Star Service Guarantee", desc: "4.9 rating from 1,247+ reviews. Satisfaction guaranteed or money back." },
                ].map((item, idx) => (
                  <AnimatedText key={idx} delay={idx * 100}>
                    <div className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#ffba42]/50 transition-all group cursor-pointer">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ffba42] to-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                        {item.icon === "lightning" && <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>}
                        {item.icon === "shield" && <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>}
                        {item.icon === "dollar" && <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" /><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" /></svg>}
                        {item.icon === "star" && <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-1 group-hover:text-[#ffba42] transition-colors">{item.title}</h4>
                        <p className="text-white/60">{item.desc}</p>
                      </div>
                    </div>
                  </AnimatedText>
                ))}
              </div>
            </div>

            {/* Image with floating cards */}
            <AnimatedText delay={200}>
              <div className="relative">
                <TiltCard className="relative aspect-square rounded-3xl overflow-hidden">
                  <Image src="/services/flatbed.webp" alt="Professional CloseBy Towing truck" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
                </TiltCard>

                {/* Floating cards */}
                <div className="absolute -top-6 -right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 animate-float">
                  <div className="text-4xl font-black text-[#ffba42]">24/7</div>
                  <div className="text-sm text-white/70">Always Available</div>
                </div>

                <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#ffba42]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm text-white/70 mt-1">1,247+ Reviews</div>
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PROCESS TIMELINE */}
      {/* ============================================ */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-[#ffba42]/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <AnimatedText className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-[0.3em] text-[#ffba42] uppercase mb-4">How It Works</h2>
            <h3 className="text-5xl md:text-6xl font-black">
              Help in <span className="text-[#ffba42]">4 Simple Steps</span>
            </h3>
          </AnimatedText>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#ffba42] via-[#ffba42]/50 to-transparent hidden md:block" />

            {[
              { step: "01", title: "Call or Book Online", desc: "Reach us 24/7 via phone, text, or our online form. Describe your situation and location.", time: "1 min" },
              { step: "02", title: "Get Instant Quote", desc: "Receive upfront, transparent pricing with no hidden fees. Approve and we dispatch immediately.", time: "2 min" },
              { step: "03", title: "Track Your Driver", desc: "Watch your driver approach in real-time with GPS tracking and ETA updates.", time: "20-35 min" },
              { step: "04", title: "Problem Solved", desc: "Our certified technician resolves your issue professionally. Pay only what was quoted.", time: "Done!" },
            ].map((item, idx) => (
              <AnimatedText key={idx} delay={idx * 150}>
                <div className={`relative flex items-center gap-8 mb-16 last:mb-0 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#ffba42]/50 transition-all hover:bg-white/[0.08] ${idx % 2 === 1 ? 'md:text-right' : ''}`}>
                    <div className="text-6xl font-black text-white/10 mb-4">{item.step}</div>
                    <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                    <p className="text-white/60 mb-4">{item.desc}</p>
                    <span className="inline-block px-4 py-2 rounded-xl bg-[#ffba42]/20 text-[#ffba42] font-bold text-sm">
                      {item.time}
                    </span>
                  </div>

                  <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-[#ffba42] to-orange-500 items-center justify-center flex-shrink-0 z-10 shadow-lg shadow-[#ffba42]/30">
                    <span className="text-2xl font-black text-black">{idx + 1}</span>
                  </div>

                  <div className="hidden md:block flex-1" />
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA */}
      {/* ============================================ */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffba42]/20 via-orange-500/10 to-red-500/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ffba42]/30 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <AnimatedText>
            <h2 className="text-6xl md:text-8xl font-black leading-tight mb-8">
              Ready When
              <span className="block bg-gradient-to-r from-[#ffba42] to-orange-500 bg-clip-text text-transparent animate-gradient-x">
                You Need Us
              </span>
            </h2>
          </AnimatedText>

          <AnimatedText delay={100}>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12">
              Don't let a roadside emergency ruin your day. San Diego's most trusted towing and roadside service is just one call away.
            </p>
          </AnimatedText>

          <AnimatedText delay={200}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+18589999293"
                className="group relative px-12 py-6 rounded-2xl font-black text-2xl overflow-hidden transform hover:scale-105 transition-transform"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffba42] to-orange-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center gap-4 text-black">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call (858) 999-9293
                </span>
              </a>

              <a
                href="sms:+18589999293?&body=I need roadside assistance"
                className="px-12 py-6 rounded-2xl font-bold text-xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all transform hover:scale-105"
              >
                Text Us Instead
              </a>
            </div>
          </AnimatedText>

          <AnimatedText delay={300}>
            <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/40 text-sm">
              {["Licensed & Insured", "No Hidden Fees", "Satisfaction Guaranteed"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* ============================================ */}
      {/* CUSTOM CSS ANIMATIONS */}
      {/* ============================================ */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        @keyframes float-particle {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>

      <LeftPopup />
    </main>
  );
}
