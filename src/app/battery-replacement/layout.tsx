import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Battery Replacement San Diego | Mobile Service 24/7 | CloseBy Towing",
  description:
    "Mobile car battery replacement in San Diego. We test, diagnose, and replace your battery on-site. All makes and models. 15-25 min response. Call (858) 999-9293.",
  keywords:
    "car battery replacement San Diego, mobile battery service, dead battery replacement, battery testing, 24/7 battery service",
  alternates: { canonical: "/battery-replacement" },
  openGraph: {
    title: "Car Battery Replacement San Diego | Mobile Service 24/7 | CloseBy Towing",
    description:
      "Mobile car battery replacement in San Diego. We test, diagnose, and replace on-site. 15-25 min response.",
    type: "website",
    url: "https://www.closebytowing.com/battery-replacement",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
