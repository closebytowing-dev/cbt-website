"use client";
import Image from "next/image";
import "./PopupAnimations.css";
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1e1e4a] text-white">
      <div className="mx-auto max-w-[1800px] px-6 min-h-[50vh] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: high-conversion copy */}
        <div className="py-4 lg:py-0">
          <p className="uppercase tracking-[0.18em] text-base sm:text-2xl opacity-90">
            San Diego Towing & Roadside Assistance
          </p>

          <h1 className="mt-3 text-2xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Fast, Professional Towing — <span className="text-white/90">ETA 25–35 Minutes</span>
          </h1>

          {/* moved up slightly to increase gap above the buttons */}
          <p className="mt-0 sm:mt-1 text-lg leading-relaxed text-white/90 max-w-2xl">
            <span className="text-[#E8B923] font-semibold">Affordable</span> and{" "}
            <span className="text-[#E8B923] font-semibold">upfront pricing</span>. Open{" "}
            <span className="text-[#E8B923] font-semibold">24 hours</span>,{" "}
            <span className="text-[#E8B923] font-semibold">7 days</span>. <span className="hidden sm:inline">Fast, courteous
            operators.</span>
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            {/* Phone CTA */}
            <a
              href="tel:+18589999293"
              className="inline-block rounded-lg bg-[#ffba42] text-[#1e1e4a] px-8 py-4 font-bold hover:brightness-110 text-xl sm:text-2xl shadow-lg transition-all hover:scale-105 text-center"
            >
              📞 Call Now: (858) 999-9293
            </a>
            {/* Online Order CTA - opens the popup - shiny with moving light effect */}
            <button
              onClick={() => {
                const popup = document.querySelector('[aria-label*="Get instant price"]') as HTMLButtonElement;
                if (popup) popup.click();
              }}
              className="relative inline-block rounded-lg bg-[#42b3ffff] text-black px-8 py-4 font-extrabold hover:brightness-110 text-lg shadow-lg transition-all hover:scale-105 text-center overflow-hidden"
              style={{
                boxShadow: '0 0 20px rgba(66, 179, 255, 0.5), 0 0 40px rgba(66, 179, 255, 0.3)',
              }}
            >
              {/* Animated shimmer effect - flashlight sweep */}
              <span
                className="absolute inset-0 shimmer-effect"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, transparent 30%, rgba(255,255,255,0.9) 50%, transparent 70%, transparent 100%)',
                  transform: 'translateX(-100%)',
                }}
              />
              <span className="relative z-10">💰 Order Online & Save 15%</span>
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-white/90 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#ffba42]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="font-semibold">4.9★ (1,247+ Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#ffba42]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              <span className="font-semibold">24/7 Available</span>
            </div>
          </div>
        </div>

        {/* Right: image shown fully */}
        <div className="relative w-full h-[35vh] lg:h-[40vh] bg-white/5 rounded-xl shadow-soft overflow-hidden">
          <Image
            src="/hero/home-hero.webp"
            alt="Professional CloseBy Towing truck ready for 24/7 emergency towing and roadside assistance in San Diego"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
