import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heavy Duty Towing San Diego | Semi-Truck & Commercial Towing 24/7 | CloseBy Towing",
  description:
    "Heavy duty towing in San Diego. Semi-trucks, buses, heavy equipment & commercial vehicles. 50+ ton capacity, 15-25 min response. Call (858) 999-9293.",
  alternates: { canonical: "/heavyduty" },
  openGraph: {
    title: "Heavy Duty Towing San Diego | Semi-Truck & Commercial Towing 24/7 | CloseBy Towing",
    description:
      "Heavy duty towing in San Diego. Semi-trucks, buses, heavy equipment & commercial vehicles. 50+ ton capacity, 15-25 min response. Call (858) 999-9293.",
    type: "website",
    url: "https://www.closebytowing.com/heavyduty",
  },
};

export default function HeavyDutyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
