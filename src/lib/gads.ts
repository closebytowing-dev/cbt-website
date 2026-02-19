/**
 * Google Ads Conversion Tracking
 *
 * SETUP REQUIRED: Replace the placeholder IDs below with actual values
 * from your Google Ads account:
 *
 * 1. Go to Google Ads → Tools → Conversions → Summary
 * 2. Click each conversion action → Tag setup → "Use Google Tag Manager"
 * 3. Copy the Conversion ID (AW-992120764) and Conversion Label
 *
 * Once you have the real IDs, replace the values below.
 */

// ──────────────────────────────────────────────
// REPLACE THESE WITH YOUR ACTUAL GOOGLE ADS IDs
// ──────────────────────────────────────────────
export const GADS_CONVERSION_ID = "AW-992120764";
export const GADS_PHONE_LABEL = "AW-992120764/YYYYYYYYYY";
export const GADS_BOOKING_LABEL = "AW-992120764/ZZZZZZZZZZ";
export const GADS_WHATSAPP_LABEL = "AW-992120764/WWWWWWWWWW";
// ──────────────────────────────────────────────

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fire a Google Ads conversion event */
function fireConversion(sendTo: string, value = 1.0) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: sendTo,
      value,
      currency: "USD",
    });
  }
}

/** Track phone number click conversion */
export function trackPhoneConversion() {
  fireConversion(GADS_PHONE_LABEL);
}

/** Track online booking/quote form submission conversion */
export function trackBookingConversion() {
  fireConversion(GADS_BOOKING_LABEL);
}

/** Track WhatsApp button click conversion */
export function trackWhatsAppConversion() {
  fireConversion(GADS_WHATSAPP_LABEL);
}
