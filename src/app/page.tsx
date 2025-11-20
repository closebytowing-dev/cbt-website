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
