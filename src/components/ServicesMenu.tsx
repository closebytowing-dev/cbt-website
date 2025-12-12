"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const items = [
  { href: "/services/towing", label: "Towing" },
  { href: "/services/collision-recovery", label: "Collision Recovery" },
  { href: "/services/jump-start", label: "Jump Start" },
  { href: "/services/lockout", label: "Lockout" },
  { href: "/services/tire-change", label: "Tire Change" },
  { href: "/services/gas-delivery", label: "Gas Delivery" },
  { href: "/services/winch-out", label: "Winch Out" },
  { href: "/services", label: "View All Services", isViewAll: true },
] as const;

export default function ServicesMenu() {
  const [open, setOpen] = useState(false);
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

  const handleOpen = () => {
    cancelClose();
    setOpen(true);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={scheduleClose}
    >
      <button
        className="hover:opacity-60 font-semibold text-[1.35rem] leading-none"
        aria-haspopup="true"
        aria-expanded={open}
        onFocus={handleOpen}
      >
        Services
      </button>

      {/* Dropdown - positioned absolutely relative to parent */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 z-50 ${open ? "block" : "hidden"}`}
      >
        <div className="rounded-2xl shadow-2xl border border-black/10 bg-white w-[240px] sm:w-[280px] p-2">
          <nav className="flex flex-col" aria-label="Services">
            {items.map((it) => (
              'isViewAll' in it && it.isViewAll ? (
                <div key={it.label}>
                  <div className="border-t border-black/10 my-2" />
                  <Link
                    href={it.href}
                    className="px-4 py-3 rounded-xl hover:bg-blue-50 text-blue-600 font-semibold flex items-center justify-between"
                    onClick={() => setOpen(false)}
                  >
                    {it.label}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ) : (
                <Link
                  key={it.label}
                  href={it.href}
                  className="px-4 py-3 rounded-xl hover:bg-black/5 text-[#1e1e4a]"
                  onClick={() => setOpen(false)}
                >
                  {it.label}
                </Link>
              )
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
