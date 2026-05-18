/**
 * Global constants for CloseBy Towing website
 * Centralized configuration for easy maintenance
 */

// Company Information
export const COMPANY = {
  name: "CloseBy Towing",
  tagline: "Fast, Reliable Towing & Roadside Assistance",
  location: "San Diego, CA",
  serviceArea: "San Diego County",
} as const;

// Contact Information
export const CONTACT = {
  phone: "(858) 999-9293",
  phoneRaw: "+18589999293",
  whatsapp: "+18589007211",
  email: "info@closebytowing.com",
  privacyEmail: "privacy@closebytowing.com",
} as const;

// Brand Colors
export const COLORS = {
  primary: "#ffba42",     // Yellow/Gold
  secondary: "#1e1e4a",   // Dark Blue
  accent: "#10b981",      // Green
  error: "#ef4444",       // Red
  warning: "#f59e0b",     // Orange
  success: "#10b981",     // Green
} as const;

// Services
export const SERVICES = {
  towing: {
    name: "Local Towing",
    path: "/towing",
    description: "Professional towing services for all vehicle types",
  },
  jumpStart: {
    name: "Battery Jump Start",
    path: "/jump-start",
    description: "Quick battery jump start service to get you moving",
  },
  lockout: {
    name: "Lockout Service",
    path: "/lockout",
    description: "Fast car lockout assistance without damage",
  },
  tireChange: {
    name: "Tire Change",
    path: "/tire-change",
    description: "On-site tire change and flat tire assistance",
  },
  fuelDelivery: {
    name: "Fuel Delivery",
    path: "/gas-delivery",
    description: "Emergency fuel delivery to your location",
  },
  collisionRecovery: {
    name: "Collision Recovery",
    path: "/collision-recovery",
    description: "Safe collision recovery and accident towing",
  },
  winchOut: {
    name: "Winch-Out / Recovery",
    path: "/winch-out",
    description: "Professional winch-out and recovery services",
  },
  roadsideAssistance: {
    name: "Roadside Assistance",
    path: "/roadside-assistance",
    description: "Complete on-demand roadside assistance — no membership required",
  },
  motorcycleTowing: {
    name: "Motorcycle Towing",
    path: "/motorcycle-towing",
    description: "Specialized motorcycle transport with soft straps and wheel chocks",
  },
  heavyDuty: {
    name: "Heavy-Duty Towing",
    path: "/heavyduty",
    description: "Commercial-grade towing for trucks, RVs, and heavy equipment",
  },
  batteryReplacement: {
    name: "Battery Replacement",
    path: "/battery-replacement",
    description: "Mobile car battery testing and replacement service",
  },
  longDistanceTowing: {
    name: "Long Distance Towing",
    path: "/long-distance-towing",
    description: "Interstate and long-distance vehicle transport",
  },
  evTowing: {
    name: "EV Towing",
    path: "/ev-towing",
    description: "Specialized flatbed towing for electric vehicles",
  },
  rvTowing: {
    name: "RV Towing",
    path: "/rv-towing",
    description: "Motorhome, travel trailer, and RV transport service",
  },
} as const;

// Pricing
export const PRICING = {
  towing: {
    base: 95,
    perMile: 5,
  },
  jumpStart: {
    standard: 65,
    commercial: 85,
  },
  lockout: {
    standard: 65,
    luxury: 95,
  },
  tireChange: {
    base: 75,
  },
  fuelDelivery: {
    light: { min: 45, max: 50 },
    medium: { min: 50, max: 60 },
    heavy: { min: 55, max: 65 },
  },
  collisionRecovery: {
    light: 125,
    medium: 175,
    heavy: 225,
  },
  winchOut: {
    light: 125,
    medium: 175,
    heavy: 250,
  },
} as const;

// Response Times
export const RESPONSE_TIME = {
  average: "15-25 minutes",
  emergency: "15-25 minutes",
  standard: "15-25 minutes",
} as const;

// Social Proof
export const STATS = {
  totalServices: "15,000+",
  rating: "5.0",
  ratingText: "Perfect Rating on Google",
  googleReviewsUrl: "https://www.google.com/maps/place/CloseBy+Towing/@32.787325,-117.1152638,1168m/data=!3m1!1e3!4m8!3m7!1s0xfd432c9a2ac5763:0x627f4c417d76eb75!8m2!3d32.7873205!4d-117.1126835!9m1!1b1!16s%2Fg%2F11yk39t1jz?entry=ttu",
  yearsExperience: "10+",
  truckCount: "6",
} as const;

// SEO
export const SEO = {
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.closebytowing.com",
  defaultImage: "/og-image.jpg",
  twitterHandle: "@CloseByTowing",
} as const;

/**
 * Return the canonical href for an area or service slug.
 * All neighborhood and service pages now live at top-level URLs after the
 * /san-diego/[slug] → /[slug] migration, so this is a thin wrapper kept for
 * a single point of update if URL structure changes again.
 */
export function areaHref(slug: string): string {
  return `/${slug}`;
}

// Business Hours
export const BUSINESS_HOURS = {
  availability: "24/7",
  emergency: "Always Available",
} as const;

// Service Coverage
export const SERVICE_AREAS = [
  "Downtown San Diego",
  "La Jolla",
  "Pacific Beach",
  "Mission Valley",
  "North Park",
  "Hillcrest",
  "Point Loma",
  "Ocean Beach",
  "Chula Vista",
  "National City",
  "El Cajon",
  "Santee",
  "Escondido",
  "Carlsbad",
  "Oceanside",
] as const;

// Feature Flags (for A/B testing or gradual rollouts)
export const FEATURES = {
  enablePaymentLinks: true,
  enableLiveChat: false,
  enableBookingForm: true,
  enableReviews: true,
} as const;

// UI Visibility Control (managed via Admin Panel at /admin/visibility)
export const UI_VISIBILITY = {
  // Master toggle for all booking features
  masterToggles: {
    enableOnlineBooking: true, // Controls popup, banners, and online booking buttons
  },
  header: {
    logo: true,
    phoneButton: true,
    servicesMenu: true,
    reviewsLink: true,
    serviceAreaLink: true,
    aboutLink: true,
    contactLink: true,
    loginLinks: true,
  },
  homePage: {
    hero: true,
    value: true,
    reviews: true,
    services: true,
    serviceArea: true,
    faq: true,
  },
  footer: {
    mainFooter: true,
    backToTop: true,
    partnerLinks: true,
  },
  cta: {
    phoneButtons: true,
    onlineBookingButton: true,
    whatsappButton: true,
  },
  popup: {
    leftPopup: true,
    mobileBottomBar: true,
  },
} as const;
