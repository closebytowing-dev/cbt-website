"use client";

import Link from "next/link";
import LeftPopup from "@/components/LeftPopup";
import { useEffect } from "react";
import { useVisibility } from "@/hooks/useVisibility";
import { useOnlineDiscount } from "@/hooks/useOnlineDiscount";
import { CONTACT } from "@/lib/constants";
import "@/components/PopupAnimations.css";

export default function RVTowingPage() {
  const { config } = useVisibility();
  const { discountText } = useOnlineDiscount();
  const showBanners = config.customerRequestForm?.saveBanners !== false;

  useEffect(() => {
    document.title =
      "RV Towing San Diego | Motorhome & Travel Trailer Transport | CloseBy Towing";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Professional RV towing in San Diego. Class A, B, C motorhomes, travel trailers, fifth wheels & toy haulers. Heavy-duty equipment, insured transport. Call (858) 999-9293."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.closebytowing.com/rv-towing");
  }, []);

  /* ── Schema.org structured data ── */
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.closebytowing.com/rv-towing#service",
        name: "CloseBy Towing - RV Towing",
        description:
          "24/7 professional RV towing service in San Diego County for Class A, B, and C motorhomes, travel trailers, fifth wheels, toy haulers, and campervans with 15-25 minute response time.",
        serviceType: [
          "RV Towing",
          "Motorhome Towing",
          "Travel Trailer Towing",
          "Fifth Wheel Towing",
          "Campervan Towing",
        ],
        provider: {
          "@type": "LocalBusiness",
          name: "CloseBy Towing",
          "@id": "https://www.closebytowing.com#organization",
          telephone: "+1-858-999-9293",
          address: {
            "@type": "PostalAddress",
            addressLocality: "San Diego",
            addressRegion: "CA",
            postalCode: "92101",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "32.7157",
            longitude: "-117.1611",
          },
          priceRange: "$$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "22",
          },
        },
        areaServed: {
          "@type": "City",
          name: "San Diego",
          containedInPlace: {
            "@type": "State",
            name: "California",
          },
        },
        availableChannel: {
          "@type": "ServiceChannel",
          servicePhone: {
            "@type": "ContactPoint",
            telephone: "+1-858-999-9293",
            contactType: "Emergency Service",
            areaServed: "San Diego County",
            availableLanguage: ["English", "Spanish"],
          },
        },
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "175",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            price: "175",
            description:
              "RV towing starting price. Final cost depends on RV size, weight, distance, and towing complexity.",
          },
          availability: "https://schema.org/InStock",
          validFrom: "2024-01-01",
          areaServed: {
            "@type": "City",
            name: "San Diego",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.closebytowing.com/rv-towing#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.closebytowing.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://www.closebytowing.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "RV Towing",
            item: "https://www.closebytowing.com/rv-towing",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What types of RVs can CloseBy Towing handle?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We tow all RV types including Class A motorhomes (up to 45 feet), Class B campervans, Class C motorhomes, travel trailers, fifth wheels, toy haulers, pop-up campers, and truck campers. Our heavy-duty flatbed and wheel-lift equipment is rated for vehicles up to 30,000+ lbs.",
            },
          },
          {
            "@type": "Question",
            name: "How much does RV towing cost in San Diego?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "RV towing in San Diego starts at approximately $175 for local tows, with pricing based on RV size, weight, towing distance, and any special requirements like off-road recovery. We provide upfront quotes before dispatch so there are no surprises.",
            },
          },
          {
            "@type": "Question",
            name: "Can you tow a large Class A motorhome?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Our fleet includes heavy-duty flatbed trucks and wreckers capable of towing Class A motorhomes up to 45 feet in length and 30,000+ lbs. We use specialized equipment to ensure safe, damage-free transport of diesel pushers, gas motorhomes, and luxury coaches.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer RV roadside assistance near San Diego campgrounds?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. We serve all major San Diego campgrounds and RV parks including Campland on the Bay, San Elijo State Beach, South Carlsbad State Beach, and Anza-Borrego Desert State Park. We can assist with tire changes, battery jumps, lockouts, and fuel delivery for RVs in addition to towing.",
            },
          },
          {
            "@type": "Question",
            name: "How fast can you get to my RV in San Diego?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our average response time is 15-25 minutes across San Diego County. We dispatch from multiple locations to cover the I-5, I-15, and I-8 freeway corridors as well as campground areas and beach communities.",
            },
          },
          {
            "@type": "Question",
            name: "Is my RV insured during transport?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. CloseBy Towing carries comprehensive commercial insurance that covers your RV during the entire towing process. We are fully licensed and bonded. We also work with most RV insurance providers for direct billing when applicable.",
            },
          },
          {
            "@type": "Question",
            name: "Can you tow my fifth wheel or travel trailer if it's still hitched?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We can tow fifth wheels and travel trailers whether hitched or unhitched. If your tow vehicle has broken down, we can disconnect the trailer safely and tow each separately, or transport the entire rig depending on the situation. Our operators are experienced with all hitch types including fifth wheel, gooseneck, and bumper-pull configurations.",
            },
          },
        ],
      },
    ],
  };

  /* ── RV type data ── */
  const rvTypes = [
    {
      icon: "\u{1F68C}",
      title: "Class A Motorhomes",
      desc: "The largest motorhomes on the road, Class A coaches range from 26 to 45 feet and can weigh upward of 30,000 pounds. Whether you drive a diesel pusher or a gas Class A, our heavy-duty flatbed and wrecker units are built to transport these rigs safely. We handle everything from luxury coaches to entry-level Class A units with the same care and professionalism.",
    },
    {
      icon: "\u{1F690}",
      title: "Class B Campervans",
      desc: "Class B vans and campervans are built on standard van chassis (Mercedes Sprinter, Ford Transit, Ram ProMaster) and typically weigh between 6,000 and 11,000 pounds. Despite being the smallest motorized RV class, they still require specialized flatbed towing to protect their conversion components, solar panels, and roof-mounted accessories.",
    },
    {
      icon: "\u{1F699}",
      title: "Class C Motorhomes",
      desc: "Class C motorhomes feature the distinctive cab-over bunk and range from 20 to 33 feet in length. Weighing between 10,000 and 16,000 pounds, these units need properly rated equipment for safe transport. Our operators are experienced with all major Class C brands and know exactly how to secure them for towing without damaging slideouts or exterior components.",
    },
    {
      icon: "\u{1F6FB}",
      title: "Travel Trailers",
      desc: "Travel trailers are the most popular RV type in America, ranging from compact 16-foot units to large 35-foot models. Whether your trailer is still hitched to a disabled tow vehicle or sitting solo with a flat tire, we can disconnect, secure, and transport it. Our team handles bumper-pull and weight-distribution hitch setups with precision.",
    },
    {
      icon: "\u{2699}\u{FE0F}",
      title: "Fifth Wheels",
      desc: "Fifth wheel trailers connect via a kingpin in the truck bed and can weigh 12,000 to 20,000 pounds or more. Towing a fifth wheel requires specific equipment and expertise to safely disconnect the kingpin coupler and transport the trailer without damage to the pin box, landing gear, or slideouts. Our crew does this daily.",
    },
    {
      icon: "\u{1F3CE}\u{FE0F}",
      title: "Toy Haulers",
      desc: "Toy haulers combine living space with a rear garage for ATVs, motorcycles, and other recreational gear. These units are often heavier than standard trailers due to the reinforced ramp door and extra cargo. We secure both the toy hauler and any vehicles inside, ensuring nothing shifts during transport across San Diego.",
    },
  ];

  /* ── FAQ data ── */
  const faqs = [
    {
      q: "What types of RVs can CloseBy Towing handle?",
      a: "We tow all RV types including Class A motorhomes (up to 45 feet), Class B campervans, Class C motorhomes, travel trailers, fifth wheels, toy haulers, pop-up campers, and truck campers. Our heavy-duty flatbed and wheel-lift equipment is rated for vehicles up to 30,000+ lbs GVWR.",
    },
    {
      q: "How much does RV towing cost in San Diego?",
      a: "RV towing in San Diego starts at approximately $175 for local tows. Pricing depends on RV size, weight, distance, and complexity (e.g., off-road recovery costs more than a flat highway tow). We always provide an upfront quote before dispatch so there are no surprise charges.",
    },
    {
      q: "Can you tow a large Class A diesel pusher motorhome?",
      a: "Absolutely. Our fleet includes heavy-duty wreckers and flatbed trucks rated for 30,000+ lbs. We regularly tow Class A diesel pushers, luxury coaches, and full-size motorhomes up to 45 feet long throughout San Diego County.",
    },
    {
      q: "Do you provide RV roadside assistance near campgrounds?",
      a: "Yes. We serve every major San Diego campground and RV park, including Campland on the Bay, San Elijo State Beach, South Carlsbad State Beach, and parks near Anza-Borrego. In addition to towing, we offer battery jumps, tire changes, lockout help, and fuel delivery for RVs.",
    },
    {
      q: "How fast can you reach my RV in San Diego?",
      a: "Our average response time is 15-25 minutes across San Diego County. We dispatch from multiple strategic locations to cover the I-5 coastal corridor, I-15 inland route, I-8 east-west corridor, and all major campground areas.",
    },
    {
      q: "Is my RV insured while being towed?",
      a: "Yes. CloseBy Towing carries comprehensive commercial insurance that protects your RV throughout the entire towing process. We are fully licensed, insured, and bonded. We also coordinate with most RV insurance providers for direct billing when applicable.",
    },
    {
      q: "Can you tow my fifth wheel or travel trailer if it is still hitched to my truck?",
      a: "We can tow fifth wheels and travel trailers whether hitched or unhitched. If your tow vehicle has broken down, we safely disconnect the trailer and can tow both the truck and trailer. Our operators handle all hitch types: fifth wheel kingpin, gooseneck, bumper-pull, and weight-distribution setups.",
    },
    {
      q: "Do you tow RVs long distance outside San Diego?",
      a: "Yes. While most of our RV tows are local, we also offer long-distance RV transport to destinations across Southern California and beyond. For long-haul quotes, call us directly and we will provide a per-mile rate based on your RV size and destination.",
    },
  ];

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <LeftPopup />

      {/* Sticky Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-950 to-yellow-950 p-4 shadow-2xl lg:hidden">
        <div className="flex gap-3">
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="flex-1 bg-[#ffba42] text-black py-4 rounded-xl font-black text-center text-lg"
          >
            Call Now: {CONTACT.phone}
          </a>
        </div>
      </div>

      {/* ============================================ */}
      {/* HERO SECTION                                */}
      {/* ============================================ */}
      <section className="relative flex items-center justify-center overflow-hidden pt-4 pb-16 md:pt-6 md:pb-20">
        {/* Dark warm gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/90 via-stone-950 to-yellow-950/80" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Warm glow effects */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-amber-700/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-yellow-800/10 rounded-full blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1800px] w-full px-6 lg:px-16 py-4 md:py-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left: Copy */}
            <div className="space-y-10">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="text-sm text-white/50">
                <ol className="flex items-center gap-2">
                  <li>
                    <Link href="/" className="hover:text-amber-400 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>/</li>
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-amber-400 transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="text-amber-400">RV Towing</li>
                </ol>
              </nav>

              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter">
                  RV
                  <span className="block mt-3 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                    Towing
                  </span>
                  <span className="block mt-3 text-3xl sm:text-4xl lg:text-5xl text-white/80 font-bold tracking-tight">
                    San Diego
                  </span>
                </h1>

                <p className="text-xl lg:text-2xl text-white/70 font-light leading-relaxed max-w-xl">
                  Professional towing for motorhomes, travel trailers, fifth
                  wheels, toy haulers, and campervans. Heavy-duty flatbed
                  equipment, fully insured transport, and operators who know how
                  to handle every RV class on the road.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Response", value: "15-25 min", icon: "\u26A1" },
                  { label: "RV Rated", value: "30,000+ lbs", icon: "\u{1F69B}" },
                  { label: "Available", value: "24/7", icon: "\u{1F552}" },
                ].map((stat, idx) => (
                  <div key={idx} className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-700 to-yellow-700 rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-500" />
                    <div className="relative p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-amber-800/30 text-center">
                      <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className="text-xl sm:text-2xl font-black text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="group relative px-10 py-6 rounded-2xl font-black text-xl md:text-2xl overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_20px_60px_rgba(255,186,66,0.3)] hover:shadow-[0_20px_80px_rgba(255,186,66,0.5)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600" />
                  <span className="relative z-10 text-black flex items-center justify-center gap-3">
                    <svg
                      className="w-6 h-6 md:w-7 md:h-7"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {CONTACT.phone}
                  </span>
                </a>

                {showBanners && (
                  <button
                    onClick={() => {
                      const launcherButton = document.querySelector(
                        'button[aria-label*="Get instant price"]'
                      ) as HTMLButtonElement;
                      if (launcherButton) launcherButton.click();
                    }}
                    className="relative px-10 py-6 rounded-2xl font-extrabold text-xl md:text-2xl bg-[#42b3ffff] text-black hover:brightness-110 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
                    style={{
                      boxShadow:
                        "0 0 20px rgba(66, 179, 255, 0.5), 0 0 40px rgba(66, 179, 255, 0.3)",
                    }}
                  >
                    <span
                      className="absolute inset-0 shimmer-effect"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent 0%, transparent 30%, rgba(255,255,255,0.9) 50%, transparent 70%, transparent 100%)",
                        transform: "translateX(-100%)",
                      }}
                    />
                    <span className="relative z-10">
                      Get Quote & Save {discountText}
                    </span>
                  </button>
                )}

                <a
                  href={`https://wa.me/${CONTACT.whatsapp.replace("+", "")}?text=I%20need%20RV%20towing%20in%20San%20Diego`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-6 bg-[#25D366] hover:brightness-110 rounded-2xl text-white font-bold text-xl transition-all hover:scale-105"
                  style={{ boxShadow: "0 0 15px rgba(37, 211, 102, 0.3)" }}
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right: Hero Visual */}
            <div className="relative">
              <div className="absolute -inset-10 bg-gradient-to-r from-amber-700/20 via-yellow-600/20 to-amber-700/20 rounded-[4rem] blur-3xl" />
              <div className="relative rounded-[4rem] overflow-hidden border-2 border-amber-800/30 shadow-[0_0_80px_rgba(180,140,50,0.15)]">
                <div className="aspect-[4/5] bg-gradient-to-br from-amber-950 via-stone-900 to-yellow-950 flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="text-9xl mb-6">{"\u{1F699}"}</div>
                    <p className="text-3xl font-black text-white/90 mb-2">
                      RV Towing Experts
                    </p>
                    <p className="text-lg text-amber-400/80 font-medium">
                      All Classes &bull; All Sizes &bull; 24/7
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Floating Info Cards */}
                <div className="absolute top-8 left-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl p-4 border border-white/20 shadow-2xl">
                  <div className="text-white/60 text-xs uppercase tracking-wider mb-1">
                    Capacity
                  </div>
                  <div className="text-white font-black text-lg">
                    30,000+ lbs
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 bg-gradient-to-br from-amber-600/30 to-yellow-600/30 backdrop-blur-2xl rounded-2xl p-4 border border-amber-500/30 shadow-2xl">
                  <div className="text-white/80 text-xs uppercase tracking-wider mb-1">
                    Response Time
                  </div>
                  <div className="text-white font-black text-2xl">
                    15-25 Min
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TRUST BAR                                   */}
      {/* ============================================ */}
      <div className="bg-gradient-to-b from-stone-950 to-black py-12 border-y border-amber-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: "\u{1F3C6}",
                title: "RV Specialists",
                sub: "All Classes & Sizes",
              },
              {
                icon: "\u2705",
                title: "Fully Insured",
                sub: "Commercial Coverage",
              },
              {
                icon: "\u{1F6E1}\u{FE0F}",
                title: "Heavy-Duty Rated",
                sub: "30,000+ lbs Capacity",
              },
              {
                icon: "\u2B50",
                title: "5.0 Google Rating",
                sub: "Top Rated in San Diego",
              },
            ].map((badge, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl mb-2">{badge.icon}</div>
                <p className="text-white font-bold text-sm md:text-base">
                  {badge.title}
                </p>
                <p className="text-white/50 text-xs">{badge.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* SERVICE DESCRIPTION                         */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-black via-stone-950 to-black">
        <div className="mx-auto max-w-[1000px]">
          <div className="text-center mb-14">
            <div className="inline-block px-6 py-2 rounded-full bg-amber-600/10 border border-amber-500/20 text-amber-400 text-sm font-bold mb-6">
              PROFESSIONAL RV TRANSPORT
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              San Diego&apos;s Trusted{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                RV Towing
              </span>{" "}
              Service
            </h2>
          </div>

          <div className="space-y-8 text-white/70 text-lg leading-relaxed">
            <p>
              Recreational vehicles are an investment. Whether you own a
              40-foot Class A diesel pusher, a compact Class B campervan, or a
              towable fifth wheel trailer, a breakdown or flat tire on the side
              of the road is stressful enough without worrying whether the tow
              company knows how to handle your rig. At CloseBy Towing, RV
              towing is not a side service we offer occasionally -- it is a
              core part of what we do every day across San Diego County.
            </p>
            <p>
              Our fleet includes heavy-duty flatbed trucks, wheel-lift
              wreckers, and specialized towing equipment rated for the size and
              weight of today&apos;s largest motorhomes. Every operator on our
              team is trained in the specific requirements of RV transport:
              securing slideouts, protecting awnings, handling propane tanks,
              disconnecting tow bars and hitches, and managing the unique
              weight distribution of different RV classes. We treat your
              motorhome or trailer with the same care you would.
            </p>
            <p>
              From a dead battery at Campland on the Bay to a blown tire on
              I-15 near Escondido, from a transmission failure on the I-8
              grade east of Alpine to a flat in the parking lot at Mission Bay
              RV Resort, our dispatch team sends the right truck with the right
              equipment for your specific RV type. We do not send a standard
              light-duty wrecker for a 30,000-pound motorhome. We send the
              truck that can actually do the job safely.
            </p>
            <p>
              CloseBy Towing is fully licensed, insured, and bonded. Our
              commercial insurance covers your RV from the moment we hook up
              until we deliver it to your chosen destination -- whether that is
              a repair shop, a dealership, a storage facility, or your
              driveway. We also coordinate directly with most major RV
              insurance providers for hassle-free billing whenever possible.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* RV TYPES WE TOW                             */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-black via-amber-950/20 to-black">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-14">
            <div className="inline-block px-6 py-2 rounded-full bg-amber-600/10 border border-amber-500/20 text-amber-400 text-sm font-bold mb-6">
              COMPLETE RV COVERAGE
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              RV Types We{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Tow
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              From compact campervans to full-size Class A coaches, our
              equipment and operators are ready for every RV category on the
              road today.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rvTypes.map((item, idx) => (
              <div
                key={idx}
                className="group relative p-6 bg-white/[0.04] backdrop-blur-sm rounded-2xl border border-amber-800/20 hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-700 to-yellow-700 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500" />
                <div className="relative">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* MID-PAGE CTA                                */}
      {/* ============================================ */}
      <section className="relative py-16 px-6 bg-gradient-to-r from-amber-900/30 via-yellow-900/20 to-amber-900/30 border-y border-amber-800/20">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Need Your RV Towed Right Now?
          </h2>
          <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
            Our RV-rated trucks are dispatched across San Diego County 24 hours
            a day. Call for an upfront quote and fast response.
          </p>
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-xl bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-black hover:scale-105 transition-all duration-300 shadow-[0_15px_50px_rgba(255,186,66,0.3)]"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call {CONTACT.phone}
          </a>
        </div>
      </section>

      {/* ============================================ */}
      {/* SAN DIEGO RV TOWING                         */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-black via-stone-950 to-black">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <div className="inline-block px-6 py-2 rounded-full bg-amber-600/10 border border-amber-500/20 text-amber-400 text-sm font-bold mb-6">
              LOCAL COVERAGE
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              San Diego{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                RV Towing
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                San Diego is one of the top RV destinations in the country, and
                for good reason. With year-round sunshine, coastal campgrounds,
                mountain getaways, and desert adventures all within a short
                drive, hundreds of thousands of RVs travel through the region
                each year. That also means breakdowns, flat tires, overheating
                engines, and roadside emergencies happen daily along our
                highways and at our campgrounds.
              </p>
              <p>
                CloseBy Towing provides RV towing coverage across the entire
                San Diego metropolitan area and surrounding communities. Our
                trucks are strategically positioned to reach the{" "}
                <strong className="text-white">I-5 corridor</strong> from
                Oceanside down through La Jolla, Mission Bay, Downtown, and
                Chula Vista; the{" "}
                <strong className="text-white">I-15 corridor</strong> from
                Escondido through Rancho Bernardo, Mira Mesa, and into the city
                center; and the{" "}
                <strong className="text-white">I-8 corridor</strong> from Ocean
                Beach east through Mission Valley, La Mesa, El Cajon, Alpine,
                and all the way out toward the Anza-Borrego desert.
              </p>
              <p>
                We also respond to calls at popular RV destinations including
                Campland on the Bay, Mission Bay RV Resort, San Elijo State
                Beach Campground, South Carlsbad State Beach, Santee Lakes
                Recreation Preserve, Lake Jennings Campground, and Palomar
                Mountain State Park. Whether you are parked at a beachside
                campground or pulled over on a steep mountain grade, our
                dispatchers know the fastest route to your location.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Key RV Towing Areas
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Mission Bay",
                  "La Jolla",
                  "Oceanside",
                  "Escondido",
                  "El Cajon",
                  "Alpine",
                  "Chula Vista",
                  "Carlsbad",
                  "Poway",
                  "Santee",
                  "Rancho Bernardo",
                  "Del Mar",
                  "Point Loma",
                  "Pacific Beach",
                  "Coronado",
                  "La Mesa",
                ].map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-3 bg-white/[0.04] rounded-xl border border-amber-800/20"
                  >
                    <span className="text-amber-400 text-sm">{"\u25CF"}</span>
                    <span className="text-white/80 text-sm font-medium">
                      {area}
                    </span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                Freeway Corridors
              </h3>
              <div className="space-y-3">
                {[
                  {
                    route: "I-5 (Coastal)",
                    desc: "Oceanside to San Ysidro -- the main coastal artery",
                  },
                  {
                    route: "I-15 (Inland)",
                    desc: "Escondido to Downtown San Diego via Rancho Bernardo",
                  },
                  {
                    route: "I-8 (East-West)",
                    desc: "Ocean Beach to Alpine and Anza-Borrego Desert",
                  },
                  {
                    route: "SR-78",
                    desc: "Oceanside to Escondido and San Pasqual Valley",
                  },
                  {
                    route: "SR-163 / SR-52",
                    desc: "Connecting routes through Kearny Mesa and Santee",
                  },
                ].map((corridor, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white/[0.04] rounded-xl border border-amber-800/20"
                  >
                    <span className="text-amber-400 font-bold">
                      {corridor.route}
                    </span>
                    <span className="text-white/60 ml-2 text-sm">
                      {corridor.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* HOW IT WORKS                                */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-black to-stone-950">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <div className="inline-block px-6 py-2 rounded-full bg-amber-600/10 border border-amber-500/20 text-amber-400 text-sm font-bold mb-6">
              THE PROCESS
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              How RV Towing{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Call Us Any Time",
                desc: "Tell us your RV type, size, location, and what happened. We give you an upfront quote and dispatch the right heavy-duty truck immediately. Available 24 hours a day, 7 days a week.",
                color: "from-amber-500 to-yellow-500",
              },
              {
                step: "02",
                title: "We Arrive in 15-25 Minutes",
                desc: "A certified RV towing operator arrives with the correct equipment for your specific vehicle. Flatbed for motorhomes, wheel-lift for towables, and all necessary securing gear for slideouts, awnings, and hitches.",
                color: "from-yellow-500 to-amber-600",
              },
              {
                step: "03",
                title: "Safe Hookup & Inspection",
                desc: "We inspect your RV, retract slideouts if needed, secure loose items, disconnect shore power or tow bars, and properly load or hook your vehicle. No rushing -- we protect your investment at every step.",
                color: "from-amber-600 to-orange-600",
              },
              {
                step: "04",
                title: "Transport & Delivery",
                desc: "Your RV is transported safely to the repair facility, storage yard, campground, or destination of your choice. We provide full documentation for your insurance records.",
                color: "from-orange-500 to-amber-500",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
                >
                  <span className="text-black font-black text-xl">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHY CHOOSE US FOR RV TOWING                 */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-stone-950 to-black">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Why{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                CloseBy
              </span>{" "}
              for RV Towing?
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Not every tow company can handle an RV. Here is why San Diego RV
              owners trust CloseBy Towing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "\u{1F4AA}",
                title: "Heavy-Duty Equipment",
                desc: "Our flatbed trucks and wreckers are rated for 30,000+ lbs, handling the largest Class A motorhomes and fully loaded fifth wheels without issue.",
              },
              {
                icon: "\u26A1",
                title: "15-25 Min Response",
                desc: "Strategically positioned trucks across San Diego County mean fast arrival times at campgrounds, freeways, and neighborhoods alike.",
              },
              {
                icon: "\u{1F527}",
                title: "RV-Specific Training",
                desc: "Our operators know how to handle slideouts, awnings, leveling jacks, propane systems, and every hitch type from bumper-pull to fifth wheel kingpin.",
              },
              {
                icon: "\u{1F4CB}",
                title: "Insurance Coordination",
                desc: "We work with Good Sam, Progressive, National General, and other RV insurance providers. Direct billing available to minimize your out-of-pocket hassle.",
              },
              {
                icon: "\u{1F6E1}\u{FE0F}",
                title: "Fully Licensed & Insured",
                desc: "Commercial insurance protects your RV from hookup to delivery. Licensed and bonded for your complete peace of mind throughout the towing process.",
              },
              {
                icon: "\u{1F552}",
                title: "24/7 Availability",
                desc: "Breakdowns do not wait for business hours. Our RV towing fleet operates around the clock, every day of the year, including holidays and weekends.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/[0.04] rounded-2xl border border-amber-800/20"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ SECTION                                 */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-black to-stone-950">
        <div className="mx-auto max-w-[900px]">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              RV Towing{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                FAQ
              </span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Common questions about RV towing in San Diego. Can&apos;t find
              your answer? Call us at{" "}
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="text-amber-400 underline hover:text-amber-300"
              >
                {CONTACT.phone}
              </a>{" "}
              and we will help.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/[0.04] rounded-2xl border border-amber-800/20"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-white/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CROSS-SERVICE LINKS                         */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-stone-950 to-black">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Related{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              CloseBy Towing offers a full range of towing and roadside
              assistance services across San Diego County.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Local Towing",
                desc: "Standard vehicle towing for cars, trucks, SUVs, and motorcycles throughout San Diego.",
                href: "/towing",
                icon: "\u{1F69A}",
              },
              {
                title: "Heavy Duty Towing",
                desc: "Semi-trucks, buses, construction equipment, and commercial vehicles. 50+ ton capacity.",
                href: "/heavyduty",
                icon: "\u{1F69B}",
              },
              {
                title: "Long Distance Towing",
                desc: "Interstate and cross-state vehicle transport with GPS tracking and insured carriers.",
                href: "/long-distance-towing",
                icon: "\u{1F6E3}\u{FE0F}",
              },
              {
                title: "Roadside Assistance",
                desc: "Jump starts, tire changes, lockout service, fuel delivery, and on-site repairs.",
                href: "/roadside-assistance",
                icon: "\u{1F6E0}\u{FE0F}",
              },
            ].map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="group p-6 bg-white/[0.04] rounded-2xl border border-amber-800/20 hover:border-amber-500/40 transition-all duration-300 hover:bg-white/[0.06]"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <span className="text-amber-400 text-sm font-bold group-hover:underline">
                  Learn More &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA                                   */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-black via-amber-950/20 to-black">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Need{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              RV Towing
            </span>{" "}
            in San Diego?
          </h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Our heavy-duty fleet is standing by 24/7 for motorhomes, travel
            trailers, fifth wheels, and every other RV type. Fast dispatch,
            professional operators, upfront pricing, fully insured transport.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="group relative px-12 py-7 rounded-2xl font-black text-xl md:text-2xl overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_20px_60px_rgba(255,186,66,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600" />
              <span className="relative z-10 text-black flex items-center justify-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {CONTACT.phone}
              </span>
            </a>

            <Link
              href="/services"
              className="px-10 py-6 rounded-2xl border-2 border-white/20 text-white font-bold text-lg hover:border-amber-500/40 hover:bg-white/5 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom padding for mobile CTA bar */}
      <div className="h-24 lg:hidden" />
    </main>
  );
}
