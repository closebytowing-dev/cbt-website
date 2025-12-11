"use client";
import Image from "next/image";
import { useState } from "react";

export default function ServiceArea() {
  const [showAll, setShowAll] = useState(false);

  // Primary areas - most popular/important
  const primaryAreas = [
    "San Diego",
    "La Jolla",
    "Chula Vista",
    "El Cajon",
    "Coronado",
    "Point Loma",
    "Pacific Beach",
    "Mission Valley",
    "La Mesa",
    "National City",
    "Poway",
    "Del Mar",
  ];

  // Secondary areas - grouped by region
  const secondaryAreas = {
    "Central San Diego": [
      "North Park",
      "Mission Beach",
      "Ocean Beach",
      "Kearny Mesa",
      "Linda Vista",
      "Clairemont",
      "Serra Mesa",
    ],
    "East County": [
      "Santee",
      "Lakeside",
      "Spring Valley",
      "Lemon Grove",
      "San Carlos",
      "Grantville",
      "Allied Gardens",
      "Del Cerro",
      "College Area",
      "Bostonia",
      "Hillsdale",
      "Winter Gardens",
    ],
    "South Bay": [
      "San Ysidro",
      "Bonita",
      "Imperial Beach",
      "La Presa",
    ],
    "North County": [
      "Miramar",
      "Scripps Ranch",
      "Tierrasanta",
      "Rolando Village",
    ],
  };

  return (
    <section className="w-full bg-white dark:bg-black pt-6 pb-6 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Responsive width - full width on mobile and tablets, slightly wider on large desktop */}
        <div className="relative w-full max-w-full lg:w-[110%] lg:left-1/2 lg:-translate-x-1/2 lg:max-w-none">
          {/* Gradient overlay on map for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/40 rounded-3xl z-[1] pointer-events-none" />

          {/* Content overlay container - with semi-transparent background */}
          <div className="absolute left-4 sm:left-[2%] top-4 sm:top-8 z-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border-2 border-white/60 max-w-[90%] sm:max-w-xl lg:max-w-2xl">

            <h2 className="font-black text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 text-[#1e1e4a]">
              🗺️ Service Area
            </h2>
            <p className="text-sm sm:text-base lg:text-lg font-semibold mb-4 sm:mb-6 text-[#1e1e4a]/80">
              We serve all of San Diego County • <span className="text-[#42b3ffff]">20-35 min response time</span>
            </p>

            {/* Primary Areas - Always visible */}
            <div className="mb-4">
              <h3 className="text-xs sm:text-sm font-bold text-[#1e1e4a]/60 uppercase tracking-wider mb-2">
                Primary Service Areas
              </h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 sm:gap-x-4 gap-y-1.5 sm:gap-y-2 text-sm sm:text-base lg:text-lg font-bold text-[#1e1e4a]">
                {primaryAreas.map((city) => (
                  <li key={city} className="flex items-center">
                    <span className="text-green-600 mr-1.5 sm:mr-2">✓</span> {city}
                  </li>
                ))}
              </ul>
            </div>

            {/* Expandable Secondary Areas */}
            {showAll && (
              <div className="mb-4 animate-fadeIn">
                {Object.entries(secondaryAreas).map(([region, cities]) => (
                  <div key={region} className="mb-4">
                    <h4 className="text-xs sm:text-sm font-bold text-[#1e1e4a]/70 mb-2">
                      {region}
                    </h4>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-1 text-xs sm:text-sm font-semibold text-[#1e1e4a]/90">
                      {cities.map((city) => (
                        <li key={city} className="flex items-center">
                          <span className="text-green-500 mr-1.5 text-xs">✓</span> {city}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Show More/Less Button */}
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm sm:text-base font-bold text-[#42b3ffff] hover:text-[#1e1e4a] transition-colors duration-200 mb-4 flex items-center gap-2"
            >
              {showAll ? "− Show Less" : "+ View All 44+ Areas"}
            </button>

            {/* CTA Button */}
            <button
              onClick={() => {
                const popup = document.querySelector('[aria-label*="Get instant price"]') as HTMLButtonElement;
                if (popup) popup.click();
              }}
              className="w-full bg-[#42b3ffff] text-black px-6 py-3 sm:py-4 rounded-xl font-extrabold text-base sm:text-lg hover:brightness-110 transition-all hover:scale-105 shadow-lg"
            >
              📍 Check If We Serve Your Area
            </button>
          </div>

          {/* Map Image - lazy loaded since below the fold */}
          <Image
            src="/service-area/san-diego-service-area.webp"
            alt="San Diego service area map"
            width={1920}
            height={614}
            className="w-full h-auto rounded-3xl shadow-2xl shadow-black/50"
            loading="lazy"
          />
        </div>
      </div>

      {/* Add fadeIn animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
