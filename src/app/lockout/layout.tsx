import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Lockout Service San Diego | Fast Unlock in <25 Min | CloseBy Towing",
  description:
    "Locked out? Professional car unlock service in San Diego. Fast response, no damage guaranteed. Available 24/7. Call (858) 999-9293 for immediate help.",
  alternates: { canonical: "/lockout" },
  openGraph: {
    title: "Car Lockout Service San Diego | Fast Unlock in <25 Min | CloseBy Towing",
    description:
      "Locked out? Professional car unlock service in San Diego. Fast response, no damage guaranteed. Available 24/7. Call (858) 999-9293 for immediate help.",
    type: "website",
    url: "https://www.closebytowing.com/lockout",
  },
};

export default function LockoutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
