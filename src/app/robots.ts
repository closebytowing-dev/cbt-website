export const dynamic = "force-static";
import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.closebytowing.com"
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/_next/",
          "/api/",
          "/admin/",
          "/partners/dashboard/",
          "/partners/signin",
          "/partners/signup",
          "/partners/login",
          "/*.json$",
          "/*.js$",
          "/*.css$",
        ],
      },
    ],
    sitemap: [`${base}/sitemap.xml`],
  }
}
