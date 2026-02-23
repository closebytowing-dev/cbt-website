import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jump Start Service San Diego | Dead Battery Help 24/7 | CloseBy Towing",
  description:
    "Dead battery? Professional jump start service in San Diego. Fast 15-25 min response, all vehicles. Order online and save 15%. Call (858) 999-9293.",
  alternates: { canonical: "/jump-start" },
  openGraph: {
    title: "Jump Start Service San Diego | Dead Battery Help 24/7 | CloseBy Towing",
    description:
      "Dead battery? Professional jump start service in San Diego. Fast 15-25 min response, all vehicles. Order online and save 15%. Call (858) 999-9293.",
    type: "website",
    url: "https://www.closebytowing.com/jump-start",
  },
};

export default function JumpStartLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
