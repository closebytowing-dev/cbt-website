export const dynamic = "force-static";
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.closebytowing.com"
  const lastModified = new Date();

  // Homepage - highest priority
  const homepage = {
    url: `${base}/`,
    lastModified,
    changeFrequency: "daily" as const,
    priority: 1.0,
  };

  // Services landing page
  const servicesLanding = {
    url: `${base}/services`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  };

  // Main service pages - high priority
  const servicePages = [
    { path: "towing", priority: 0.9 },
    { path: "emergency-towing", priority: 0.9 },
    { path: "accident-towing", priority: 0.85 },
    { path: "flatbed-towing", priority: 0.85 },
    { path: "jump-start", priority: 0.9 },
    { path: "lockout", priority: 0.9 },
    { path: "tire-change", priority: 0.9 },
    { path: "gas-delivery", priority: 0.9 },
    { path: "winch-out", priority: 0.85 },
    { path: "collision-recovery", priority: 0.85 },
    { path: "roadside-assistance", priority: 0.9 },
    { path: "motorcycle-towing", priority: 0.85 },
    { path: "heavyduty", priority: 0.85 },
    { path: "towtruck", priority: 0.8 },
    { path: "battery-replacement", priority: 0.85 },
    { path: "long-distance-towing", priority: 0.85 },
    { path: "ev-towing", priority: 0.85 },
    { path: "rv-towing", priority: 0.85 },
    { path: "towing-near-me", priority: 0.95 },
  ].map((service) => ({
    url: `${base}/${service.path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: service.priority,
  }));

  // San Diego hub page - high priority
  const sanDiegoHub = {
    url: `${base}/san-diego`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  };

  // All neighborhood/area pages (top-level)
  const areaPages = [
    "4s-ranch",
    "allied-gardens",
    "alpine",
    "bankers-hill",
    "bonita",
    "carlsbad",
    "carmel-mountain",
    "carmel-valley",
    "chula-vista",
    "clairemont",
    "college-area",
    "coronado",
    "del-cerro",
    "del-mar",
    "downtown",
    "el-cajon",
    "encinitas",
    "escondido",
    "hillcrest",
    "imperial-beach",
    "kearny-mesa",
    "la-jolla",
    "la-mesa",
    "lakeside",
    "lemon-grove",
    "lincoln-park",
    "linda-vista",
    "logan-heights",
    "mira-mesa",
    "mission-bay",
    "mission-beach",
    "mission-hills",
    "mission-valley",
    "national-city",
    "nestor",
    "normal-heights",
    "north-park",
    "ocean-beach",
    "oceanside",
    "otay-mesa",
    "pacific-beach",
    "palm-city",
    "paradise-hills",
    "point-loma",
    "poway",
    "rancho-bernardo",
    "rancho-penasquitos",
    "rancho-san-diego",
    "rancho-santa-fe",
    "sabre-springs",
    "san-carlos",
    "san-marcos",
    "san-ysidro",
    "santee",
    "scripps-ranch",
    "serra-mesa",
    "skyline",
    "solana-beach",
    "sorrento-valley",
    "spring-valley",
    "tierrasanta",
    "torrey-hills",
    "university-city",
    "university-heights",
    "vista",
  ].map((slug) => ({
    url: `${base}/${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Spanish landing pages
  const spanishPages = [
    { path: "gruas", priority: 0.85 },
    { path: "servicios", priority: 0.85 },
  ].map((page) => ({
    url: `${base}/${page.path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }));

  // Information pages - medium priority
  const infoPages = [
    { path: "about", priority: 0.7 },
    { path: "contact", priority: 0.8 },
    { path: "privacy", priority: 0.4 },
    { path: "terms", priority: 0.4 },
  ].map((page) => ({
    url: `${base}/${page.path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: page.priority,
  }));

  return [
    homepage,
    servicesLanding,
    ...servicePages,
    sanDiegoHub,
    ...areaPages,
    ...spanishPages,
    ...infoPages,
  ];
}
