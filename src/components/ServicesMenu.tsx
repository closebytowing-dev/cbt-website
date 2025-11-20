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
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const getDropdownPosition = () => {
    if (typeof window === 'undefined' || !buttonRef.current || !dropdownRef.current) return {};

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const dropdownWidth = dropdownRef.current.offsetWidth || 280;
    const viewportWidth = window.innerWidth;

    // Try to center under button
    let leftPosition = buttonRect.left + (buttonRect.width / 2) - (dropdownWidth / 2);

    // Ensure it doesn't overflow left
    const minLeft = 16; // 1rem
    if (leftPosition < minLeft) {
      leftPosition = minLeft;
    }

    // Ensure it doesn't overflow right
    const maxLeft = viewportWidth - dropdownWidth - 16; // 1rem margin
    if (leftPosition > maxLeft) {
      leftPosition = maxLeft;
    }

    return {
      left: `${leftPosition}px`,
      top: `${buttonRect.bottom + 12}px` // 12px = 0.75rem (mt-3)
    };
  };

  const handleOpen = () => {
    cancelClose();
    setOpen(true);
    // Update position after state change
    requestAnimationFrame(() => {
      setDropdownStyle(getDropdownPosition());
    });
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        className="hover:opacity-60 font-semibold text-[1.1rem] leading-none"
        aria-haspopup="true"
        aria-expanded={open}
        onMouseEnter={handleOpen}
        onMouseLeave={scheduleClose}
        onFocus={handleOpen}
      >
        Services
      </button>

      <div
        ref={dropdownRef}
        className={`fixed ${open ? "block" : "hidden"} z-50`}
        style={dropdownStyle}
        onMouseEnter={handleOpen}
        onMouseLeave={scheduleClose}
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
