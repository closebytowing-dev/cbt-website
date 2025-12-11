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
];

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
              <Link
                key={it.label}
                href={it.href}
                className="px-4 py-3 rounded-xl hover:bg-black/5 text-[#1e1e4a]"
                onClick={() => setOpen(false)}
              >
                {it.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
