"use client";

import { usePathname } from "next/navigation";

export default function StickyCallButton() {
  const pathname = usePathname();
  if (pathname.startsWith("/partners/signup")) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-2xl p-[6px] sm:p-[7px] overflow-hidden"
      style={{
        marginBottom: "env(safe-area-inset-bottom, 0px)",
        background: "linear-gradient(160deg, #ffffff 0%, #e8e8e8 12%, #c0c0c0 25%, #f5f5f5 38%, #d0d0d0 50%, #fafafa 62%, #b8b8b8 75%, #e0e0e0 88%, #cfcfcf 100%)",
        boxShadow: "0 10px 50px rgba(0,0,0,0.4), 0 0 20px rgba(255,255,255,0.15), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(0,0,0,0.3)",
      }}
    >
      {/* Animated light sweep over the chrome border */}
      <div
        className="absolute top-0 h-full w-[40%] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(0,255,100,0) 5%, rgba(0,255,100,0.5) 15%, rgba(0,220,255,0.7) 30%, rgba(255,255,255,0.9) 50%, rgba(255,200,0,0.7) 70%, rgba(255,50,50,0.5) 85%, rgba(255,0,100,0) 95%, transparent 100%)",
          animation: "chromeSweep 3s ease-in-out infinite",
        }}
      />
      <a
        href="tel:+18589999293"
        className="relative group flex items-center gap-3 font-black text-xl sm:text-2xl text-white py-4 sm:py-5 px-8 sm:px-12 rounded-xl border-b-[5px] border-red-900 bg-gradient-to-b from-red-500 via-red-600 to-red-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:from-emerald-400 hover:via-emerald-500 hover:to-emerald-600 hover:border-emerald-800 hover:translate-y-[2px] hover:border-b-[3px] active:translate-y-[4px] active:border-b-[1px] transition-all duration-150"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        <span className="drop-shadow-md">(858) 999-9293</span>
      </a>
    </div>
  );
}
