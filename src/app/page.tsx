'use client';

import Hero from "@/components/Hero";
import Value from "@/components/Value";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import ServiceArea from "@/components/ServiceArea";
import LeftPopup from "@/components/LeftPopup";
import FAQ from "@/components/FAQ";
import { useVisibility } from "@/hooks/useVisibility";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.closebytowing.com"
    }
  ]
};

// LocalBusiness Schema - only on homepage (not on legal pages like /privacy, /terms)
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.closebytowing.com",
  "name": "CloseBy Towing San Diego",
  "image": "https://www.closebytowing.com/logo.png",
  "description": "Fast, reliable 24/7 towing and roadside assistance in San Diego. Licensed and insured towing company providing emergency towing, jump starts, tire changes, fuel delivery, lockout service, and collision recovery.",
  "telephone": "+1-858-999-9293",
  "email": "info@closebytowing.com",
  "url": "https://www.closebytowing.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Diego",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "32.7157",
    "longitude": "-117.1611"
  },
  "areaServed": {
    "@type": "City",
    "name": "San Diego"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "serviceType": [
    "Emergency Towing",
    "Roadside Assistance",
    "Jump Start Service",
    "Tire Change",
    "Fuel Delivery",
    "Lockout Service",
    "Collision Recovery",
    "Winch-Out Service"
  ],
  "hasMap": "https://www.google.com/maps/place/San+Diego,+CA"
};

export default function Home() {
  const { config } = useVisibility();

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <Hero />
      <Value />
      <div id="reviews">
        <Reviews />
      </div>
      <Services />

      {/* Service area section - now visible on all devices */}
      <div id="area">
        <ServiceArea />
      </div>

      {/* FAQ and Left-side popup */}
      <FAQ />
      {config.customerRequestForm?.leftPopup !== false && <LeftPopup />}
    </main>
  );
}
