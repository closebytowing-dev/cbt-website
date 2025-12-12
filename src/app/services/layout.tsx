import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 Roadside Services San Diego | Towing, Jump Start, Lockout & More | CloseBy Towing",
  description: "Premium roadside assistance in San Diego. Professional towing, jump start, lockout service, tire change, gas delivery, winch-out & collision recovery. 20-35 min response. Call (858) 999-9293.",
  keywords: "roadside assistance San Diego, towing services, jump start, lockout service, tire change, gas delivery, winch out, collision recovery, 24/7 emergency roadside, San Diego towing",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "24/7 Roadside Services San Diego | CloseBy Towing",
    description: "Premium roadside assistance: towing, jump start, lockout, tire change & more. Fast 20-35 min response across San Diego.",
    url: "https://closebytowing.com/services",
    type: "website",
    images: [
      {
        url: "/services/tow-truck-hero.webp",
        width: 1200,
        height: 630,
        alt: "CloseBy Towing - Professional Roadside Services in San Diego",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Roadside Services San Diego | CloseBy Towing",
    description: "Premium roadside assistance: towing, jump start, lockout, tire change & more.",
    images: ["/services/tow-truck-hero.webp"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
