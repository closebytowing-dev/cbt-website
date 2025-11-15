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
    path: "/services/towing",
    description: "Professional towing services for all vehicle types",
  },
  jumpStart: {
    name: "Battery Jump Start",
    path: "/services/jump-start",
    description: "Quick battery jump start service to get you moving",
  },
  lockout: {
    name: "Lockout Service",
    path: "/services/lockout",
    description: "Fast car lockout assistance without damage",
  },
  tireChange: {
    name: "Tire Change",
    path: "/services/tire-change",
    description: "On-site tire change and flat tire assistance",
  },
  fuelDelivery: {
    name: "Fuel Delivery",
    path: "/services/gas-delivery",
    description: "Emergency fuel delivery to your location",
  },
  collisionRecovery: {
    name: "Collision Recovery",
    path: "/services/collision-recovery",
    description: "Safe collision recovery and accident towing",
  },
  winchOut: {
    name: "Winch-Out / Recovery",
    path: "/services/winch-out",
    description: "Professional winch-out and recovery services",
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
  average: "less than 25 minutes",
  emergency: "less than 25 minutes",
  standard: "30-45 minutes",
} as const;

// Social Proof
export const STATS = {
  totalServices: "15,000+",
  rating: "4.9/5",
  reviewCount: "1,247",
  yearsExperience: "10+",
  truckCount: "6",
} as const;

// SEO
export const SEO = {
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.closebytowing.com",
  defaultImage: "/og-image.jpg",
  twitterHandle: "@CloseByTowing",
} as const;

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
