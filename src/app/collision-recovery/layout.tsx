import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Collision Recovery San Diego | 24/7 Accident Towing | CloseBy Towing",
  description:
    "Immediate accident towing in San Diego. Professional collision recovery in 15-25 minutes. Insurance direct billing. Licensed & insured. Call (858) 999-9293.",
  alternates: { canonical: "/collision-recovery" },
  openGraph: {
    title: "Emergency Collision Recovery San Diego | 24/7 Accident Towing | CloseBy Towing",
    description:
      "Immediate accident towing in San Diego. Professional collision recovery in 15-25 minutes. Insurance direct billing. Licensed & insured. Call (858) 999-9293.",
    type: "website",
    url: "https://www.closebytowing.com/collision-recovery",
  },
};

export default function CollisionRecoveryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
