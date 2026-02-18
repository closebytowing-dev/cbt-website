"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const items = [
  { href: "/services/towing", label: "Towing", icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z", icon2: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0", color: "text-red-500", bg: "bg-red-50" },
  { href: "/services/collision-recovery", label: "Collision Recovery", icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z", color: "text-orange-500", bg: "bg-orange-50" },
  { href: "/services/jump-start", label: "Jump Start", icon: "M13 10V3L4 14h7v7l9-11h-7z", color: "text-yellow-500", bg: "bg-yellow-50" },
  { href: "/services/lockout", label: "Lockout", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", color: "text-blue-500", bg: "bg-blue-50" },
  { href: "/services/tire-change", label: "Tire Change", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z", icon2: "M15 12a3 3 0 11-6 0 3 3 0 016 0z", color: "text-purple-500", bg: "bg-purple-50" },
  { href: "/services/gas-delivery", label: "Gas Delivery", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", color: "text-green-500", bg: "bg-green-50" },
  { href: "/services/winch-out", label: "Winch Out", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", color: "text-cyan-500", bg: "bg-cyan-50" },
  { href: "/services", label: "View All Services", isViewAll: true, color: "text-blue-600", bg: "bg-blue-50" },
] as const;

export default function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 180);
  };

  const handleToggle = () => {
    cancelClose();
    setOpen((prev) => !prev);
  };

  const handleMouseEnter = () => {
    cancelClose();
    setOpen(true);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div
      ref={menuRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        className="hover:opacity-60 font-semibold leading-none inline-flex items-center gap-1"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={handleToggle}
      >
        Services
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-[100]"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          {/* Arrow */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-l border-t border-slate-200 z-10" />

          <div
            className="relative rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-slate-200 bg-white w-[260px] sm:w-[300px] overflow-hidden"
            style={{ animation: 'dropdownIn 200ms ease-out' }}
          >
            {/* Header */}
            <div className="px-5 pt-4 pb-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Our Services</p>
            </div>

            <nav className="flex flex-col px-2 pb-2" aria-label="Services">
              {items.map((it) =>
                "isViewAll" in it && it.isViewAll ? (
                  <div key={it.label}>
                    <div className="border-t border-slate-100 mx-3 my-1" />
                    <Link
                      href={it.href}
                      className="mx-1 px-4 py-3 rounded-xl hover:bg-blue-50 text-blue-600 font-bold flex items-center justify-between transition-colors duration-150"
                      onClick={() => setOpen(false)}
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                          </svg>
                        </span>
                        {it.label}
                      </span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                ) : (
                  <Link
                    key={it.label}
                    href={it.href}
                    className="mx-1 px-4 py-2.5 rounded-xl hover:bg-slate-50 text-[#1e1e4a] flex items-center gap-3 transition-colors duration-150 group"
                    onClick={() => setOpen(false)}
                  >
                    <span className={`w-8 h-8 rounded-lg ${it.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-150`}>
                      <svg className={`w-4 h-4 ${it.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {"icon2" in it ? (
                          <>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={it.icon} />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={it.icon2} />
                          </>
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={it.icon as string} />
                        )}
                      </svg>
                    </span>
                    <span className="font-semibold text-sm">{it.label}</span>
                  </Link>
                )
              )}
            </nav>
          </div>

          <style jsx>{`
            @keyframes dropdownIn {
              from {
                opacity: 0;
                transform: translateY(-8px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
