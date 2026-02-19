"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Map of area names to their slugs (areas with dedicated pages)
const AREA_SLUGS: Record<string, string> = {
  // Downtown & Beaches
  "Pacific Beach": "pacific-beach",
  "La Jolla": "la-jolla",
  "Mission Beach": "mission-beach",
  "Mission Bay": "mission-bay",
  "Ocean Beach": "ocean-beach",
  "Point Loma": "point-loma",
  "Coronado": "coronado",
  "Del Mar": "del-mar",
  "Solana Beach": "solana-beach",
  "Encinitas": "encinitas",
  // Central San Diego
  "Downtown": "downtown",
  "Mission Valley": "mission-valley",
  "Hillcrest": "hillcrest",
  "Bankers Hill": "bankers-hill",
  "Mission Hills": "mission-hills",
  "Kearny Mesa": "kearny-mesa",
  "Clairemont": "clairemont",
  "University City": "university-city",
  "University Heights": "university-heights",
  "North Park": "north-park",
  "Normal Heights": "normal-heights",
  "Linda Vista": "linda-vista",
  "Serra Mesa": "serra-mesa",
  // East County
  "El Cajon": "el-cajon",
  "La Mesa": "la-mesa",
  "Spring Valley": "spring-valley",
  "Santee": "santee",
  "Lakeside": "lakeside",
  "Alpine": "alpine",
  "Lemon Grove": "lemon-grove",
  "San Carlos": "san-carlos",
  "Allied Gardens": "allied-gardens",
  "Del Cerro": "del-cerro",
  "College Area": "college-area",
  "Rancho San Diego": "rancho-san-diego",
  // South Bay
  "Chula Vista": "chula-vista",
  "National City": "national-city",
  "San Ysidro": "san-ysidro",
  "Bonita": "bonita",
  "Imperial Beach": "imperial-beach",
  "Paradise Hills": "paradise-hills",
  "Otay Mesa": "otay-mesa",
  "Lincoln Park": "lincoln-park",
  "Logan Heights": "logan-heights",
  "Skyline": "skyline",
  "Palm City": "palm-city",
  "Nestor": "nestor",
  // North County
  "Mira Mesa": "mira-mesa",
  "Poway": "poway",
  "Scripps Ranch": "scripps-ranch",
  "Tierrasanta": "tierrasanta",
  "Rancho Bernardo": "rancho-bernardo",
  "Carmel Mountain": "carmel-mountain",
  "Carmel Valley": "carmel-valley",
  "Sabre Springs": "sabre-springs",
  "Rancho Peñasquitos": "rancho-penasquitos",
  "4S Ranch": "4s-ranch",
  "Rancho Santa Fe": "rancho-santa-fe",
  "Sorrento Valley": "sorrento-valley",
  "Torrey Hills": "torrey-hills",
};

// Areas with top-level routes (not under /san-diego/)
const TOP_LEVEL_ROUTES: Record<string, string> = {
  "chula-vista": "/chula-vista",
};

/** Resolve the correct href for a neighborhood slug */
function areaHref(slug: string) {
  return TOP_LEVEL_ROUTES[slug] ?? `/san-diego/${slug}`;
}

// Areas with dedicated pages for SEO linking (for the browse section)
const LINKED_AREAS = Object.entries(AREA_SLUGS).map(([name, slug]) => ({ name, slug }));

export default function ServiceArea() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // All service areas organized by region with icons
  const serviceRegions = {
    "Downtown & Beaches": {
      icon: "🏖️",
      color: "from-cyan-400 to-blue-500",
      glowColor: "cyan-400",
      areas: ["Downtown", "Pacific Beach", "La Jolla", "Mission Beach", "Mission Bay", "Ocean Beach", "Point Loma", "Coronado", "Del Mar", "Solana Beach", "Encinitas"],
    },
    "Central San Diego": {
      icon: "🏙️",
      color: "from-purple-400 to-indigo-500",
      glowColor: "purple-400",
      areas: ["Mission Valley", "Hillcrest", "Bankers Hill", "Mission Hills", "Kearny Mesa", "Clairemont", "University City", "University Heights", "North Park", "Normal Heights", "Linda Vista", "Serra Mesa"],
    },
    "East County": {
      icon: "🌄",
      color: "from-amber-400 to-orange-500",
      glowColor: "amber-400",
      areas: ["El Cajon", "La Mesa", "Spring Valley", "Santee", "Lakeside", "Alpine", "Lemon Grove", "San Carlos", "Allied Gardens", "Del Cerro", "College Area", "Rancho San Diego"],
    },
    "South Bay": {
      icon: "🌴",
      color: "from-emerald-400 to-teal-500",
      glowColor: "emerald-400",
      areas: ["Chula Vista", "National City", "San Ysidro", "Bonita", "Imperial Beach", "Paradise Hills", "Otay Mesa", "Lincoln Park", "Logan Heights", "Skyline", "Palm City", "Nestor"],
    },
    "North County": {
      icon: "🏔️",
      color: "from-rose-400 to-pink-500",
      glowColor: "rose-400",
      areas: ["Mira Mesa", "Poway", "Scripps Ranch", "Tierrasanta", "Rancho Bernardo", "Carmel Mountain", "Carmel Valley", "Sabre Springs", "Rancho Peñasquitos", "4S Ranch", "Rancho Santa Fe", "Sorrento Valley", "Torrey Hills"],
    },
  };

  const totalAreas = Object.values(serviceRegions).reduce((acc, region) => acc + region.areas.length, 0);

  return (
    <section id="area" className="relative w-full min-h-[90vh] overflow-hidden">
      {/* ═══ DRAMATIC BACKGROUND ═══ */}
      <div className="absolute inset-0">
        {/* Base gradient - deep ocean blue to lighter */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#1a4a7a]" />

        {/* Animated wave patterns */}
        <div className="absolute inset-0 opacity-30">
          <svg className="absolute bottom-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path fill="url(#waveGradient1)">
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                       M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,176C672,160,768,160,864,176C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                       M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </path>
          </svg>
        </div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-[10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-40 left-[20%] w-64 h-64 bg-blue-500/15 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-[40%] w-80 h-80 bg-purple-500/10 rounded-full blur-[90px] animate-pulse" style={{ animationDelay: "2s" }} />

        {/* Stars/particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 50}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: 0.3 + Math.random() * 0.4,
              }}
            />
          ))}
        </div>
      </div>

      {/* ═══ MAIN CONTENT ═══ */}
      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">

          {/* ═══ LEFT SIDE - Service Areas Display ═══ */}
          <div className={`space-y-6 lg:space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>

            {/* Header */}
            <div className="relative">
              {/* Glowing backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-transparent rounded-3xl blur-2xl" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.2em]">Service Coverage</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-4">
                  All of{" "}
                  <span className="relative">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                      San Diego
                    </span>
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-cyan-500/50" viewBox="0 0 200 12" preserveAspectRatio="none">
                      <path d="M0,6 Q50,0 100,6 T200,6" stroke="currentColor" strokeWidth="3" fill="none" />
                    </svg>
                  </span>
                  <br />
                  <span className="text-white/90">County Covered</span>
                </h2>

                <p className="text-lg sm:text-xl text-white/70 max-w-xl">
                  From the beaches to the mountains, we&apos;re there when you need us.
                  <span className="block mt-2 text-cyan-400 font-semibold">
                    ⚡ 20-35 minute average response time
                  </span>
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { value: `${totalAreas}+`, label: "Areas Served", icon: "📍" },
                { value: "24/7", label: "Always Available", icon: "⏰" },
                { value: "20min", label: "Avg Response", icon: "🚀" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:bg-white/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative text-center">
                    <span className="text-2xl mb-1 block">{stat.icon}</span>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Region Cards - Scrollable on mobile */}
            <div className="space-y-3">
              <h3 className="text-white/80 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                <span className="w-8 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
                Select a Region
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(serviceRegions).map(([region, data], index) => (
                  <button
                    key={region}
                    onClick={() => setActiveRegion(activeRegion === region ? null : region)}
                    className={`group relative text-left p-4 rounded-xl border transition-all duration-300 overflow-hidden ${
                      activeRegion === region
                        ? "bg-white/15 border-white/30 scale-[1.02]"
                        : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Gradient glow on hover/active */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${data.color} opacity-0 ${activeRegion === region ? "opacity-20" : "group-hover:opacity-10"} transition-opacity`} />

                    <div className="relative flex items-center gap-3">
                      <span className="text-2xl">{data.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-white text-sm sm:text-base truncate">{region}</div>
                        <div className="text-xs text-white/50">{data.areas.length} areas</div>
                      </div>
                      <svg
                        className={`w-5 h-5 text-white/40 transition-transform ${activeRegion === region ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    {/* Expanded areas list */}
                    {activeRegion === region && (
                      <div className="mt-3 pt-3 border-t border-white/10 animate-fadeIn">
                        <div className="grid grid-cols-2 gap-1.5">
                          {data.areas.map((area) => {
                            const slug = AREA_SLUGS[area];
                            const hasPage = !!slug;

                            return hasPage ? (
                              <Link
                                key={area}
                                href={areaHref(slug)}
                                className="flex items-center gap-1.5 text-sm text-white/80 hover:text-cyan-400 transition-colors"
                              >
                                <svg className={`w-3 h-3 text-${data.glowColor}`} fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="truncate">{area}</span>
                              </Link>
                            ) : (
                              <div key={area} className="flex items-center gap-1.5 text-sm text-white/80">
                                <svg className={`w-3 h-3 text-${data.glowColor}`} fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="truncate">{area}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={() => {
                  const popup = document.querySelector('[aria-label*="Get instant price"]') as HTMLButtonElement;
                  if (popup) popup.click();
                }}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                <svg className="w-6 h-6 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="relative">Get a Quote for Your Location</span>
                <svg className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Direct Area Links for SEO */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center justify-between">
                <h3 className="text-white/80 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                  <span className="w-8 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
                  Browse by Area
                </h3>
                <Link
                  href="/san-diego"
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors flex items-center gap-1"
                >
                  View All San Diego
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {LINKED_AREAS.map((area) => (
                  <Link
                    key={area.slug}
                    href={areaHref(area.slug)}
                    className="text-sm text-white/70 hover:text-cyan-400 transition-colors py-1.5 px-2 rounded-lg hover:bg-white/5"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ═══ RIGHT SIDE - Interactive Map ═══ */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            {/* Glowing frame behind map */}
            <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 rounded-[2rem] blur-2xl" />

            {/* Map container with premium frame */}
            <div className="relative group">
              {/* Animated border */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity blur-sm" />

              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl" />

              {/* Map image */}
              <div className="relative bg-[#0f2847]/80 backdrop-blur-sm rounded-3xl p-2 sm:p-3 border border-white/20">
                <div className="relative overflow-hidden rounded-2xl">
                  {/* Pulsing location markers overlay */}
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    {/* San Diego marker */}
                    <div className="absolute top-[45%] left-[35%] w-4 h-4">
                      <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-75" />
                      <div className="absolute inset-0 bg-cyan-400 rounded-full" />
                    </div>
                    {/* La Jolla marker */}
                    <div className="absolute top-[35%] left-[25%] w-3 h-3">
                      <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75" style={{ animationDelay: "0.5s" }} />
                      <div className="absolute inset-0 bg-blue-400 rounded-full" />
                    </div>
                    {/* El Cajon marker */}
                    <div className="absolute top-[40%] left-[55%] w-3 h-3">
                      <div className="absolute inset-0 bg-amber-400 rounded-full animate-ping opacity-75" style={{ animationDelay: "1s" }} />
                      <div className="absolute inset-0 bg-amber-400 rounded-full" />
                    </div>
                    {/* Chula Vista marker */}
                    <div className="absolute top-[65%] left-[40%] w-3 h-3">
                      <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75" style={{ animationDelay: "1.5s" }} />
                      <div className="absolute inset-0 bg-emerald-400 rounded-full" />
                    </div>
                  </div>

                  {/* Map image with hover effect */}
                  <Image
                    src="/service-area/san-diego-service-area.webp"
                    alt="San Diego County service area coverage map showing all areas served by CloseBy Towing"
                    width={1920}
                    height={1080}
                    className="w-full h-auto rounded-2xl transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient overlays for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2847]/60 via-transparent to-transparent rounded-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0f2847]/40 via-transparent to-transparent rounded-2xl" />
                </div>

                {/* Map legend/badge */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-black/60 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white text-sm font-semibold">Live Coverage</span>
                  </div>
                </div>
              </div>

              {/* Floating badge - top left */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl px-4 py-2 shadow-xl shadow-cyan-500/30 z-20">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🗺️</span>
                  <div>
                    <div className="text-white font-bold text-sm">San Diego County</div>
                    <div className="text-white/80 text-xs">Full Coverage</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick stats under map */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6">
              {[
                { icon: "🚛", text: "Fleet Ready 24/7" },
                { icon: "📱", text: "GPS Tracked" },
                { icon: "⭐", text: "5.0 Google Rated" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-white/70 text-sm">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ BOTTOM WAVE TRANSITION ═══ */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 sm:h-32" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* ═══ CUSTOM ANIMATIONS ═══ */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
