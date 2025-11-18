'use client';

import Hero from "@/components/Hero";
import Value from "@/components/Value";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import ServiceArea from "@/components/ServiceArea";
import LeftPopup from "@/components/LeftPopup";
import FAQ from "@/components/FAQ";
import { useVisibility } from "@/hooks/useVisibility";

export default function Home() {
  const { config } = useVisibility();

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      {config.homePage.hero && <Hero />}
      {config.homePage.value && <Value />}
      {config.homePage.reviews && (
        <div id="reviews">
          <Reviews />
        </div>
      )}
      {config.homePage.services && <Services />}

      {/* Service area section - now visible on all devices */}
      {config.homePage.serviceArea && (
        <div id="area">
          <ServiceArea />
        </div>
      )}

      {/* Left-side popup */}
      {config.homePage.faq && <FAQ />}
      {config.masterToggles?.enableOnlineBooking !== false && config.popup.leftPopup && <LeftPopup />}
    </main>
  );
}
