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
    { path: "services/towing", priority: 0.9 },
    { path: "services/jump-start", priority: 0.9 },
    { path: "services/lockout", priority: 0.9 },
    { path: "services/tire-change", priority: 0.9 },
    { path: "services/gas-delivery", priority: 0.9 },
    { path: "services/winch-out", priority: 0.85 },
    { path: "services/collision-recovery", priority: 0.85 },
  ].map((service) => ({
    url: `${base}/${service.path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: service.priority,
  }));

  // San Diego hub page - high priority
  const sanDiegoHub = {
    url: `${base}/san-diego/towing`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  };

  // San Diego service variation pages
  const sanDiegoServicePages = [
    "emergency-towing",
    "flatbed-towing",
    "accident-towing",
    "roadside-assistance",
  ].map((slug) => ({
    url: `${base}/san-diego/${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  // All San Diego area/neighborhood pages
  const sanDiegoAreaSlugs = [
    "4s-ranch",
    "allied-gardens",
    "alpine",
    "bankers-hill",
    "bonita",
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
  ];

  const sanDiegoAreaPages = sanDiegoAreaSlugs.map((slug) => ({
    url: `${base}/san-diego/${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Information pages - medium priority
  const infoPages = [
    { path: "about", priority: 0.7 },
    { path: "contact", priority: 0.8 },
    { path: "privacy", priority: 0.4 },
    { path: "terms", priority: 0.4 },
    { path: "payment-success", priority: 0.3 },
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
    ...sanDiegoServicePages,
    ...sanDiegoAreaPages,
    ...infoPages,
  ];
}
