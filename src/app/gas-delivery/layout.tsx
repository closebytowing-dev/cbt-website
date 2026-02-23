import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Gas Delivery San Diego | Fuel Delivery 24/7 | CloseBy Towing",
  description:
    "Ran out of gas? Emergency fuel delivery in San Diego. Fast 15-25 min response. Order online and save 15%. Call (858) 999-9293 for immediate help.",
  alternates: { canonical: "/gas-delivery" },
  openGraph: {
    title: "Emergency Gas Delivery San Diego | Fuel Delivery 24/7 | CloseBy Towing",
    description:
      "Ran out of gas? Emergency fuel delivery in San Diego. Fast 15-25 min response. Order online and save 15%. Call (858) 999-9293 for immediate help.",
    type: "website",
    url: "https://www.closebytowing.com/gas-delivery",
  },
};

export default function GasDeliveryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
