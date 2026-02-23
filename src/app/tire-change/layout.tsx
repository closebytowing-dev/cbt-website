import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Tire Change Service San Diego | <25 Min Response | CloseBy Towing",
  description:
    "Flat tire? Professional tire change service in San Diego. Fast 15-25 min response, all vehicles. Available 24/7. Call (858) 999-9293 for immediate help.",
  alternates: { canonical: "/tire-change" },
  openGraph: {
    title: "Emergency Tire Change Service San Diego | <25 Min Response | CloseBy Towing",
    description:
      "Flat tire? Professional tire change service in San Diego. Fast 15-25 min response, all vehicles. Available 24/7. Call (858) 999-9293 for immediate help.",
    type: "website",
    url: "https://www.closebytowing.com/tire-change",
  },
};

export default function TireChangeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
