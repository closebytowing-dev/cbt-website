import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Winch-Out Recovery Service San Diego | Stuck Vehicle Extraction 24/7 | CloseBy Towing",
  description:
    "Stuck in mud, sand, or a ditch? Professional winch-out service in San Diego. 15-25 min response. Licensed & insured. Call (858) 999-9293 for immediate help.",
  alternates: { canonical: "/winch-out" },
  openGraph: {
    title: "Winch-Out Recovery Service San Diego | Stuck Vehicle Extraction 24/7 | CloseBy Towing",
    description:
      "Stuck in mud, sand, or a ditch? Professional winch-out service in San Diego. 15-25 min response. Licensed & insured. Call (858) 999-9293 for immediate help.",
    type: "website",
    url: "https://www.closebytowing.com/winch-out",
  },
};

export default function WinchOutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
