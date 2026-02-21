"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function WinchOutHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: "/services/winch-out-hero.webp",
      alt: "Professional winch-out and vehicle recovery service in San Diego"
    },
    {
      src: "/services/winch-out-hero-2.webp",
      alt: "Expert winch-out recovery equipment and service"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative lg:h-[600px]">
      <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-500/30">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover rounded-3xl"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"></div>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-emerald-400 w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Stats Badge - Half on photo, half off */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded-2xl shadow-2xl p-6 border border-emerald-100 max-w-sm w-full mx-4 z-10">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-3xl font-black text-slate-900 mb-2">15,000 lbs</h3>
          <p className="text-slate-600">Max Winch Capacity</p>
        </div>
      </div>
    </div>
  );
}
