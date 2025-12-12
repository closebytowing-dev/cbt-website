export const dynamic = "force-static";
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.closebytowing.com"

  // Homepage - highest priority
  const homepage = {
    url: `${base}/`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 1.0,
  };

  // Services landing page
  const servicesLanding = {
    url: `${base}/services`,
    lastModified: new Date(),
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
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: service.priority,
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
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: page.priority,
  }));

  return [homepage, servicesLanding, ...servicePages, ...infoPages];
}
