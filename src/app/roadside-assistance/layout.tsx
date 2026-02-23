import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadside Assistance San Diego | 24/7 No Membership | CloseBy Towing",
  description:
    "On-demand roadside assistance in San Diego. Jump starts, tire changes, fuel delivery, lockouts & winch-outs. 15-25 min response. No membership required. Call (858) 999-9293.",
  keywords:
    "roadside assistance San Diego, jump start service, car lockout help, flat tire change, fuel delivery, battery service, 24/7 roadside help, no membership roadside assistance",
  alternates: { canonical: "/roadside-assistance" },
  openGraph: {
    title: "Roadside Assistance San Diego | 24/7 No Membership | CloseBy Towing",
    description:
      "On-demand roadside assistance in San Diego. Jump starts, tire changes, fuel delivery, lockouts & winch-outs. 15-25 min response. No membership required.",
    type: "website",
    url: "https://www.closebytowing.com/roadside-assistance",
  },
};

export default function RoadsideAssistanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
