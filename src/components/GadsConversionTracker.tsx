"use client";

import { useEffect } from "react";
import { trackPhoneConversion, trackWhatsAppConversion } from "@/lib/gads";

/**
 * Global Google Ads Conversion Tracker
 *
 * Sits in the root layout and listens for clicks on:
 * - tel: links → fires phone conversion
 * - wa.me links → fires WhatsApp conversion
 *
 * This eliminates the need to add tracking to every individual
 * phone/WhatsApp link across 30+ files.
 */
export default function GadsConversionTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Phone click conversion
      if (href.startsWith("tel:")) {
        trackPhoneConversion();
      }

      // WhatsApp click conversion
      if (href.includes("wa.me")) {
        trackWhatsAppConversion();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
