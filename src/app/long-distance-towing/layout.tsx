import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Long Distance Towing San Diego | Interstate Transport | CloseBy Towing",
  description:
    "Long distance towing from San Diego to anywhere. Flatbed transport to LA, Phoenix, Las Vegas & beyond. GPS tracked, fully insured. Call (858) 999-9293.",
  keywords:
    "long distance towing San Diego, interstate towing, San Diego to LA towing, car transport, vehicle shipping",
  alternates: { canonical: "/long-distance-towing" },
  openGraph: {
    title: "Long Distance Towing San Diego | Interstate Transport | CloseBy Towing",
    description:
      "Long distance towing from San Diego to anywhere. Flatbed transport, GPS tracked, fully insured.",
    type: "website",
    url: "https://www.closebytowing.com/long-distance-towing",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
