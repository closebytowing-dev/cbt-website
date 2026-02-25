import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RV Towing San Diego | Motorhome & Travel Trailer Transport | CloseBy Towing",
  description: "Professional RV towing in San Diego. Class A, B, C motorhomes, travel trailers, fifth wheels & toy haulers. Heavy-duty equipment, insured transport. Call (858) 999-9293.",
  keywords: "RV towing San Diego, motorhome towing, travel trailer towing, fifth wheel towing, RV roadside assistance, heavy duty RV tow",
  alternates: { canonical: "/rv-towing" },
  openGraph: {
    title: "RV Towing San Diego | Motorhome & Travel Trailer Transport | CloseBy Towing",
    description: "Professional RV towing in San Diego. All RV types, heavy-duty equipment, fully insured.",
    type: "website",
    url: "https://www.closebytowing.com/rv-towing",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
