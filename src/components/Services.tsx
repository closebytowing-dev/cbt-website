"use client";

import { useState } from "react";
import Image from "next/image";

type Service = {
  key: string;
  title: string;
  icon: string;
  img?: string;
  blurb: string;
  link?: string;
  gradient: string;
  glowColor: string;
  stats: { label: string; value: string };
};

const services: Service[] = [
  {
    key: "flatbed",
    title: "Flatbed / Wheel-Lift Towing",
    icon: "🚚",
    img: "/services/flatbed.webp",
    blurb:
      "Need luxury or all-wheel-drive towing? Our flatbeds protect low-clearance vehicles and long-distance transports. Wheel-lift is great for tight spots and quick moves. Damage-free equipment, soft straps, and careful loading.",
    link: "/services/towing",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    glowColor: "amber-500",
    stats: { label: "AVG RESPONSE", value: "25 min" },
  },
  {
    key: "medium-duty",
    title: "Medium Duty Towing",
    icon: "🚛",
    img: "/services/medium-duty-placeholder.webp",
    blurb:
      "Box trucks, RVs, delivery vehicles, and work trucks up to 26,000 lbs GVWR. Our medium duty fleet handles commercial vehicles, equipment transport, and oversized loads with professional care. Fully equipped for business needs.",
    link: "/services/medium-duty",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    glowColor: "blue-500",
    stats: { label: "CAPACITY", value: "26K lbs" },
  },
  {
    key: "heavy-duty",
    title: "Heavy Duty Towing",
    icon: "🚜",
    img: "/services/heavy-duty-placeholder.webp",
    blurb:
      "Semi-trucks, buses, heavy equipment, and commercial vehicles. Our heavy duty wreckers handle the biggest jobs in San Diego County. Professional operators, specialized rigging, and the power to move anything safely.",
    link: "/services/heavy-duty",
    gradient: "from-gray-600 via-zinc-600 to-slate-700",
    glowColor: "gray-500",
    stats: { label: "CAPACITY", value: "50+ tons" },
  },
  {
    key: "collision",
    title: "Collision Recovery",
    icon: "🚨",
    img: "/services/collision-recovery.webp",
    blurb:
      "Accident? We provide fast, professional collision towing and recovery. Safe removal from accident scenes, insurance-friendly documentation, and careful transport to your preferred location. Available 24/7 across San Diego.",
    link: "/services/collision-recovery",
    gradient: "from-red-500 via-rose-500 to-pink-500",
    glowColor: "red-500",
    stats: { label: "PRIORITY", value: "24/7" },
  },
  {
    key: "jump",
    title: "Jump Start Service",
    icon: "⚡",
    img: "/services/jump.webp",
    blurb:
      "Dead battery? We bring the power to you. Surge-protected boosters and safe hookup procedures. Fast arrival across San Diego, day or night. No membership required — just a quick, professional jump to get you rolling again.",
    link: "/services/jump-start",
    gradient: "from-yellow-400 via-amber-500 to-orange-500",
    glowColor: "yellow-400",
    stats: { label: "SUCCESS RATE", value: "99%" },
  },
  {
    key: "lockout",
    title: "Lock-Out Service",
    icon: "🔑",
    img: "/services/lockout.webp",
    blurb:
      "Locked out of your car? Don't break a window. Our techs unlock vehicles quickly and without damage using pro air-wedge and long-reach tools. We service all makes and models. One quick call gets you back in your car.",
    link: "/services/lockout",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    glowColor: "emerald-500",
    stats: { label: "AVG UNLOCK", value: "3 min" },
  },
  {
    key: "fuel",
    title: "Gas/Diesel Delivery",
    icon: "⛽",
    img: "/services/fuel.webp",
    blurb:
      "Out of gas? Stuck on empty? We deliver gasoline or diesel straight to your location anywhere in San Diego. No need to leave your car — we'll bring it to you, get you fueled, and send you safely on your way.",
    link: "/services/gas-delivery",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    glowColor: "cyan-500",
    stats: { label: "DELIVERY", value: "2 gal" },
  },
  {
    key: "tire",
    title: "Flat Tire Service",
    icon: "🛞",
    img: "/services/tire.webp",
    blurb:
      "Flat tire? We can install your spare, reinflate, or assist with a safe swap on the shoulder. Lug nuts torqued to spec and a quick safety check before you roll. Friendly help when changing a tire feels overwhelming.",
    link: "/services/tire-change",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    glowColor: "violet-500",
    stats: { label: "AVG CHANGE", value: "15 min" },
  },
  {
    key: "winch",
    title: "Winching / Winch-Out",
    icon: "🧭",
    img: "/services/winch.webp",
    blurb:
      "Stuck in sand, mud, or a driveway dip? We handle light recoveries from tight areas without vehicle damage. AWD, low-profile, and tricky angles welcome — we assess on arrival and recover carefully to get you moving again.",
    link: "/services/winch-out",
    gradient: "from-slate-500 via-zinc-500 to-neutral-500",
    glowColor: "slate-400",
    stats: { label: "RECOVERY", value: "Safe" },
  },
];

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="services" className="relative w-full overflow-hidden">
      {/* Premium Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] via-[#0d1033] to-[#0a0a1f]" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-40 right-10 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl animate-float-slower" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/5 via-pink-500/3 to-transparent rounded-full blur-3xl" />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">

          {/* Premium Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-red-500/20 border border-amber-500/30 backdrop-blur-sm mb-6 sm:mb-8 animate-pulse-slow">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
              <span className="text-amber-300 font-semibold text-sm tracking-wider uppercase">Full-Service Fleet Ready</span>
            </div>

            {/* Main Title with Shimmer */}
            <h2 className="relative text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Complete Towing &
              </span>
              <br />
              <span className="relative">
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Roadside Services
                </span>
                {/* Shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-clip-text text-transparent animate-shimmer" />
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed">
              From emergency towing to simple jump starts, we&apos;ve got San Diego covered.
              <span className="block mt-2 text-white/80">
                <span className="text-amber-400">Fast response</span>
                <span className="mx-3 text-white/30">•</span>
                <span className="text-orange-400">Professional service</span>
                <span className="mx-3 text-white/30">•</span>
                <span className="text-red-400">Upfront pricing</span>
              </span>
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-10 sm:mt-12">
              {[
                { value: "9", label: "Services" },
                { value: "24/7", label: "Availability" },
                { value: "25min", label: "Avg Response" },
                { value: "5.0★", label: "Google Rating" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/50 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid - Premium Bento Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s, index) => (
              <article
                key={s.key}
                className={`
                  group relative overflow-hidden rounded-3xl
                  bg-gradient-to-br from-white/[0.08] to-white/[0.02]
                  backdrop-blur-xl border border-white/10
                  transition-all duration-500 ease-out
                  ${hoveredCard === s.key ? 'scale-[1.02] shadow-2xl' : 'shadow-xl'}
                  ${activeCard === s.key ? 'ring-2 ring-amber-500/50' : ''}
                  ${index === 0 ? 'xl:col-span-1 xl:row-span-1' : ''}
                `}
                onMouseEnter={() => setHoveredCard(s.key)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveCard(activeCard === s.key ? null : s.key)}
              >
                {/* Glow Effect on Hover */}
                <div
                  className={`
                    absolute -inset-1 bg-gradient-to-r ${s.gradient} rounded-3xl opacity-0 blur-xl
                    transition-opacity duration-500
                    ${hoveredCard === s.key ? 'opacity-20' : ''}
                  `}
                />

                {/* Card Content */}
                <div className="relative h-full flex flex-col">
                  {/* Image Container with Premium Effects */}
                  <div className="relative h-[240px] sm:h-[280px] overflow-hidden">
                    {/* Image or Placeholder */}
                    {s.img && !s.img.includes('placeholder') ? (
                      <Image
                        src={s.img}
                        alt={s.title}
                        fill
                        className={`
                          object-cover transition-all duration-700 ease-out
                          ${hoveredCard === s.key ? 'scale-110' : 'scale-100'}
                        `}
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        loading="lazy"
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-30`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-8xl opacity-50">{s.icon}</span>
                        </div>
                        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay" />
                      </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1f] via-[#0a0a1f]/50 to-transparent" />

                    {/* Top Badge - Service Stats */}
                    <div className={`
                      absolute top-4 right-4 px-3 py-1.5 rounded-full
                      bg-gradient-to-r ${s.gradient}
                      shadow-lg transform transition-all duration-300
                      ${hoveredCard === s.key ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-80'}
                    `}>
                      <div className="flex items-center gap-2">
                        <span className="text-white/80 text-xs font-medium">{s.stats.label}</span>
                        <span className="text-white font-bold text-sm">{s.stats.value}</span>
                      </div>
                    </div>

                    {/* Icon Badge */}
                    <div className={`
                      absolute bottom-4 left-4 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl
                      bg-white/10 backdrop-blur-md border border-white/20
                      flex items-center justify-center
                      transform transition-all duration-500
                      ${hoveredCard === s.key ? 'scale-110 rotate-3' : ''}
                    `}>
                      <span className="text-3xl sm:text-4xl">{s.icon}</span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 p-6 sm:p-8 flex flex-col">
                    {/* Title */}
                    <h3 className={`
                      text-xl sm:text-2xl font-bold mb-3
                      bg-gradient-to-r ${s.gradient} bg-clip-text text-transparent
                      transition-all duration-300
                    `}>
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 text-sm sm:text-base leading-relaxed flex-1 mb-6">
                      {s.blurb}
                    </p>

                    {/* CTA Button */}
                    {s.link && (
                      <a
                        href={s.link}
                        className={`
                          group/btn relative inline-flex items-center justify-center
                          px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base
                          bg-gradient-to-r ${s.gradient}
                          text-white shadow-lg
                          overflow-hidden transition-all duration-300
                          hover:shadow-xl hover:scale-[1.02]
                        `}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Button Shimmer */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                        <span className="relative flex items-center gap-2">
                          Learn More
                          <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </a>
                    )}
                  </div>

                  {/* Animated Border Glow */}
                  <div className={`
                    absolute inset-0 rounded-3xl opacity-0 pointer-events-none
                    transition-opacity duration-500
                    ${hoveredCard === s.key ? 'opacity-100' : ''}
                  `}>
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${s.gradient} opacity-20`}
                      style={{
                        maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
                        maskComposite: 'exclude',
                        padding: '1px',
                      }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
            <div className="relative inline-block">
              {/* Glowing Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-red-500/20 rounded-3xl blur-xl animate-pulse-slow" />

              {/* CTA Card */}
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 lg:p-12">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Need <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Immediate</span> Assistance?
                </h3>
                <p className="text-white/60 text-base sm:text-lg mb-8 max-w-xl mx-auto">
                  Our team is standing by 24/7 to help you get back on the road safely.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="tel:+18589999293"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold text-lg shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl" />
                    <svg className="w-6 h-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="relative">(858) 999-9293</span>
                  </a>

                  <span className="text-white/40 text-sm">or</span>

                  <a
                    href="#booking"
                    className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-white/20 text-white font-bold text-lg hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                  >
                    <span>Get Free Quote</span>
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="#1e1e4a"
            className="animate-wave-slow"
          />
          <path
            d="M0,80 C480,20 960,100 1440,60 L1440,120 L0,120 Z"
            fill="#1e1e4a"
            opacity="0.5"
            className="animate-wave-slower"
          />
        </svg>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-30px) translateX(20px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(25px) translateX(-15px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.5); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes wave-slow {
          0%, 100% { d: path('M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z'); }
          50% { d: path('M0,80 C360,20 1080,100 1440,40 L1440,120 L0,120 Z'); }
        }
        @keyframes wave-slower {
          0%, 100% { d: path('M0,80 C480,20 960,100 1440,60 L1440,120 L0,120 Z'); }
          50% { d: path('M0,60 C480,100 960,20 1440,80 L1440,120 L0,120 Z'); }
        }
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 20s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .animate-wave-slow {
          animation: wave-slow 8s ease-in-out infinite;
        }
        .animate-wave-slower {
          animation: wave-slower 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
