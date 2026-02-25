import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electric Vehicle Towing San Diego | Tesla & EV Specialist | CloseBy Towing",
  description:
    "Specialized EV towing in San Diego. Flatbed-only transport for Tesla, Rivian, BMW i & all electric vehicles. Trained technicians. Call (858) 999-9293.",
  keywords:
    "EV towing San Diego, Tesla towing, electric car towing, Rivian towing, flatbed EV transport, electric vehicle roadside assistance",
  alternates: { canonical: "/ev-towing" },
  openGraph: {
    title: "Electric Vehicle Towing San Diego | Tesla & EV Specialist | CloseBy Towing",
    description:
      "Specialized EV towing in San Diego. Flatbed-only transport for all electric vehicles.",
    type: "website",
    url: "https://www.closebytowing.com/ev-towing",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
