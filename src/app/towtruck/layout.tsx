import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tow Truck San Diego | Flatbed & Wheel-Lift Service 24/7 | CloseBy Towing",
  description:
    "Professional tow truck service in San Diego. Flatbed and wheel-lift trucks, 15-25 min response, upfront pricing, fully insured. Call (858) 999-9293 for immediate help.",
  alternates: { canonical: "/towtruck" },
  openGraph: {
    title: "Tow Truck San Diego | Flatbed & Wheel-Lift Service 24/7 | CloseBy Towing",
    description:
      "Professional tow truck service in San Diego. Flatbed and wheel-lift trucks, 15-25 min response, upfront pricing, fully insured. Call (858) 999-9293 for immediate help.",
    type: "website",
    url: "https://www.closebytowing.com/towtruck",
    images: [
      {
        url: "/services/tow-truck-hero.webp",
        width: 1200,
        height: 630,
        alt: "CloseBy Towing tow truck in San Diego",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tow Truck San Diego | Flatbed & Wheel-Lift Service 24/7 | CloseBy Towing",
    description:
      "Professional tow truck service in San Diego. Flatbed and wheel-lift trucks, 15-25 min response, upfront pricing, fully insured.",
    images: ["/services/tow-truck-hero.webp"],
  },
};

export default function TowTruckLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
