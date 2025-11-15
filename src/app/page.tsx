import Hero from "@/components/Hero";
import Value from "@/components/Value";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import ServiceArea from "@/components/ServiceArea";
import LeftPopup from "@/components/LeftPopup";
import FAQ from "@/components/FAQ";

export default function Home() {
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

      {/* Left-side popup */}
      <FAQ />
      <LeftPopup />
    </main>
  );
}
