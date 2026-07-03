"use client";

import Image from "next/image";
import Link from "next/link";
import LeftPopup from "@/components/LeftPopup";
import { useVisibility } from "@/hooks/useVisibility";
import { useOnlineDiscount } from "@/hooks/useOnlineDiscount";
import { useEffect } from "react";

export default function AboutPage() {
  const { config } = useVisibility();
  const { discountText } = useOnlineDiscount();
  const showBanners = config.customerRequestForm?.saveBanners !== false;

  useEffect(() => {
    document.title = "About CloseBy Towing | San Diego's Trusted Roadside Assistance Since 2020";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', "Learn about CloseBy Towing - San Diego's premier 24/7 towing and roadside assistance company. Licensed, insured, and trusted by 15,000+ customers. Discover our story, values, and why San Diego trusts us.");
  }, []);

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "CloseBy Towing San Diego",
      "foundingDate": "2020",
      "description": "San Diego's premier 24/7 towing and roadside assistance company",
      "telephone": "+1-858-999-9293",
      "email": "info@closebytowing.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Diego",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.closebytowing.com" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.closebytowing.com/about" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When was CloseBy Towing founded?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CloseBy Towing was founded in 2020 in San Diego, California. We started with a single tow truck and a commitment to providing fast, honest, and affordable towing and roadside assistance to the San Diego community."
        }
      },
      {
        "@type": "Question",
        "name": "Is CloseBy Towing licensed and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, CloseBy Towing is fully licensed and insured in the state of California. All of our drivers are background-checked, professionally trained, and carry the required certifications to operate tow trucks and provide roadside assistance services throughout San Diego County."
        }
      },
      {
        "@type": "Question",
        "name": "What areas does CloseBy Towing serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve all of San Diego County including Downtown San Diego, La Jolla, Pacific Beach, Mission Valley, Hillcrest, North Park, Point Loma, Ocean Beach, Chula Vista, National City, El Cajon, Santee, La Mesa, Coronado, Encinitas, Del Mar, Poway, Rancho Bernardo, and many more neighborhoods and cities."
        }
      },
      {
        "@type": "Question",
        "name": "What services does CloseBy Towing offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a full range of towing and roadside assistance services including local and long-distance towing, flatbed towing, emergency towing, battery jump starts, car lockout service, flat tire changes, fuel delivery, winch-out recovery, collision recovery, motorcycle towing, and heavy-duty towing. All services are available 24/7/365."
        }
      },
      {
        "@type": "Question",
        "name": "How fast can CloseBy Towing arrive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our average response time is 15-25 minutes throughout San Diego County. We strategically position our fleet across the region to ensure the fastest possible arrival times, and we provide real-time ETA updates so you always know when help is on the way."
        }
      },
      {
        "@type": "Question",
        "name": "Does CloseBy Towing offer upfront pricing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are committed to transparent, upfront pricing with no hidden fees. When you call or book online, we provide a clear quote before dispatching a truck. You will know exactly what you are paying before we arrive. We also offer a 15% online booking discount."
        }
      },
      {
        "@type": "Question",
        "name": "Does CloseBy Towing work with insurance companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we work with all major insurance companies including AAA, Geico, State Farm, Progressive, Allstate, and more. We can bill your insurer directly for covered services and provide the documentation you need for your claim."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-gradient-to-b from-[#1e1e4a] to-[#2a2a5a]">
        {/* Hero Section */}
        <section className="relative bg-[#1e1e4a] text-white py-12 sm:py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight">
                About <span className="text-[#ffba42]">CloseBy Towing</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto px-4">
                San Diego's Most Trusted 24/7 Towing & Roadside Assistance Company
              </p>
              <p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
                Founded in 2020, CloseBy Towing has grown from a single truck into San Diego County's highest-rated{" "}
                <Link href="/towing" className="text-[#ffba42] underline underline-offset-2 hover:text-[#ffd080] transition-colors">towing</Link> and{" "}
                <Link href="/roadside-assistance" className="text-[#ffba42] underline underline-offset-2 hover:text-[#ffd080] transition-colors">roadside assistance</Link> provider.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e4a] mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    CloseBy Towing was founded in 2020 with a simple mission: to provide San Diego with the most reliable, professional, and affordable towing and roadside assistance services available 24/7.
                  </p>
                  <p>
                    We saw too many people stranded on the side of the road, waiting hours for help, dealing with hidden fees, and receiving poor customer service. We knew there had to be a better way.
                  </p>
                  <p>
                    Our founder grew up in San Diego and experienced the frustration firsthand. Whether it was a dead battery on Garnet Avenue in Pacific Beach, a flat tire on the I-5 near Mission Valley, or a lockout in the Gaslamp Quarter after a night out, one thing was always the same: towing companies took too long, charged too much, and treated customers like an afterthought.
                  </p>
                  <p>
                    That experience became the spark behind CloseBy Towing. The idea was straightforward: build a company that answers the phone on the first ring, arrives in minutes instead of hours, gives you an honest price before the truck rolls, and treats every driver like a neighbor -- because in San Diego, we are neighbors.
                  </p>
                  <p>
                    Since our founding, we've helped over <strong className="text-[#ffba42]">15,000 customers</strong> get back on the road safely. Our fleet has grown, our team has expanded, but our commitment to <strong>fast response times</strong>, <strong>upfront pricing</strong>, and <strong>exceptional service</strong> remains unchanged.
                  </p>
                  <p>
                    Today, CloseBy Towing is proud to be San Diego's highest-rated towing company with a <strong className="text-green-600">perfect 5.0 rating</strong> on Google. From the coastal cliffs of La Jolla to the family neighborhoods of Chula Vista, from the busy freeways of Kearny Mesa to the winding roads of Alpine, we are always close by.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero/home-hero.webp"
                  alt="CloseBy Towing professional tow truck and team in San Diego"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* San Diego Roots */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e4a] mb-4 text-center">
              Built for San Diego, by San Diegans
            </h2>
            <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-10">
              We know this city because we live here. Every freeway merge, every beach-town side street, every canyon road -- our drivers navigate them daily.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-lg leading-relaxed">
              <div className="space-y-4">
                <p>
                  San Diego is unlike any other city. Spanning more than 4,200 square miles of diverse terrain, the county stretches from the Pacific Ocean shoreline to the mountain communities east of the coastal range. That geographic variety means breakdowns happen everywhere: on the steep grades of Torrey Pines, in the dense traffic of the I-8 and I-15 interchange, along the remote stretches of Highway 94 near Jamul, and in the bustling parking structures of Downtown.
                </p>
                <p>
                  Our dispatch team knows San Diego's geography inside and out. When you call us from Coronado, we know exactly how to route a truck across the bridge. When you are stuck on Friars Road during rush hour, we know the fastest alternate route through Linda Vista. That local knowledge translates directly into faster arrival times and better service.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  We are also deeply connected to the San Diego community. We provide{" "}
                  <Link href="/towing" className="text-[#1e1e4a] font-semibold underline underline-offset-2 hover:text-[#ffba42] transition-colors">towing services</Link> for local auto shops, dealerships, and property managers. Our drivers volunteer at community events and we sponsor youth sports teams in neighborhoods from North Park to National City.
                </p>
                <p>
                  San Diego's year-round tourism means our roads are always busy. During Comic-Con, Fleet Week, and the Del Mar Races, call volumes surge, but our team scales to meet demand. We have helped visitors from around the world navigate breakdowns far from home, always with patience and professionalism. Whether you are a lifelong San Diegan or visiting for the first time, you deserve a towing company that treats you with respect.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Core Values */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#1e1e4a] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: "⚡",
                  title: "Speed & Reliability",
                  description: "15-25 minute average response time. We arrive fast and get you moving faster."
                },
                {
                  icon: "💰",
                  title: "Transparent Pricing",
                  description: "No hidden fees. Upfront quotes. You know exactly what you'll pay before we arrive."
                },
                {
                  icon: "🛡️",
                  title: "Professionalism",
                  description: "Licensed, insured, background-checked drivers. Your safety is our priority."
                },
              ].map((value, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-[#ffba42] transition-all">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-[#ffba42]">{value.title}</h3>
                  <p className="text-white/80 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* By the Numbers */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1e1e4a] mb-12">
              CloseBy Towing By the Numbers
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "15,000+", label: "Services Completed" },
                { number: "5.0★", label: "Google Rating" },
                { number: "15-25", label: "Min Response Time" },
                { number: "24/7/365", label: "Always Available" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#ffba42] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why San Diego Trusts CloseBy */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1e1e4a] mb-4">
              Why San Diego Trusts CloseBy
            </h2>
            <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
              Trust is earned one service call at a time. Here is what sets us apart from every other towing company in the county.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-[#1e1e4a] mb-3">Honest, Upfront Pricing</h3>
                <p className="text-gray-700 leading-relaxed">
                  The towing industry has a reputation for surprise charges. We reject that entirely. When you call CloseBy Towing, we quote a price based on your location, destination, and vehicle type before we dispatch a truck. The price we quote is the price you pay. If we arrive and discover the job requires additional equipment, we explain the cost and get your approval first. No one should face a financial surprise during an already stressful breakdown.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-[#1e1e4a] mb-3">Fastest Response in San Diego</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our strategically positioned fleet covers every corner of San Diego County. Whether you need a{" "}
                  <Link href="/jump-start" className="text-[#1e1e4a] font-semibold underline underline-offset-2 hover:text-[#ffba42] transition-colors">jump start</Link> in Scripps Ranch or a{" "}
                  <Link href="/lockout" className="text-[#1e1e4a] font-semibold underline underline-offset-2 hover:text-[#ffba42] transition-colors">lockout service</Link> in Ocean Beach, our average arrival time is 15-25 minutes. We track every driver via GPS and dispatch the closest available truck, so you spend less time waiting on the shoulder and more time getting where you need to go.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-[#1e1e4a] mb-3">Professional, Vetted Drivers</h3>
                <p className="text-gray-700 leading-relaxed">
                  Every CloseBy Towing driver passes a thorough background check, holds a valid California commercial driver's license, and completes ongoing safety training. Our drivers are courteous, uniformed, and equipped to handle any situation, from a simple{" "}
                  <Link href="/roadside-assistance" className="text-[#1e1e4a] font-semibold underline underline-offset-2 hover:text-[#ffba42] transition-colors">roadside assistance</Link> call to a complex freeway recovery. We treat your vehicle as if it were our own, and we treat you like family.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-[#1e1e4a] mb-3">Full-Service Capabilities</h3>
                <p className="text-gray-700 leading-relaxed">
                  CloseBy Towing is not just a towing company. We are a complete roadside solution. Our services include{" "}
                  <Link href="/towing" className="text-[#1e1e4a] font-semibold underline underline-offset-2 hover:text-[#ffba42] transition-colors">local and long-distance towing</Link>,{" "}
                  <Link href="/jump-start" className="text-[#1e1e4a] font-semibold underline underline-offset-2 hover:text-[#ffba42] transition-colors">battery jump starts</Link>,{" "}
                  <Link href="/lockout" className="text-[#1e1e4a] font-semibold underline underline-offset-2 hover:text-[#ffba42] transition-colors">car lockout assistance</Link>,{" "}
                  flat tire changes, fuel delivery, winch-out recovery, and more. One call handles everything, no matter what kind of trouble you are in.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-[#1e1e4a] mb-3">Real 5-Star Reviews</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our perfect 5.0 Google rating is not a marketing gimmick -- it is the result of thousands of real customers sharing their genuine experiences. We encourage every customer to leave honest feedback, and we respond to every review. That level of accountability keeps our standards high and gives you confidence that you are choosing the right company.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-[#1e1e4a] mb-3">Available Every Hour of Every Day</h3>
                <p className="text-gray-700 leading-relaxed">
                  Breakdowns do not wait for business hours, and neither do we. CloseBy Towing operates 24 hours a day, 7 days a week, 365 days a year. Christmas morning, Fourth of July, 3 a.m. on a Tuesday -- it does not matter. When you call, a real person answers and help is dispatched immediately. San Diego never sleeps, and neither does CloseBy Towing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Overview */}
        <section className="py-16 sm:py-20 bg-[#2a2a5a] text-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Our Complete Range of Services
            </h2>
            <p className="text-center text-white/70 text-lg max-w-3xl mx-auto mb-12">
              Whatever roadside emergency you face, CloseBy Towing has the equipment, expertise, and availability to help.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Towing",
                  href: "/towing",
                  desc: "Local, long-distance, and flatbed towing for all vehicle types. From compact cars to heavy-duty trucks.",
                },
                {
                  title: "Roadside Assistance",
                  href: "/roadside-assistance",
                  desc: "Complete roadside support including tire changes, fuel delivery, and winch-out recovery services.",
                },
                {
                  title: "Jump Start",
                  href: "/jump-start",
                  desc: "Dead battery? Our technicians will diagnose and jump start your vehicle in minutes, any make or model.",
                },
                {
                  title: "Lockout Service",
                  href: "/lockout",
                  desc: "Locked out of your car? We unlock all makes and models with zero damage, guaranteed.",
                },
              ].map((service, idx) => (
                <Link
                  key={idx}
                  href={service.href}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-[#ffba42] transition-all hover:bg-white/15"
                >
                  <h3 className="text-xl font-bold text-[#ffba42] mb-3 group-hover:underline">{service.title}</h3>
                  <p className="text-white/80 leading-relaxed text-sm">{service.desc}</p>
                  <span className="inline-block mt-4 text-[#ffba42] font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Learn More &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Checklist */}
        <section className="py-16 sm:py-20 bg-[#1e1e4a] text-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Why San Diego Chooses CloseBy Towing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Licensed & Insured - Full coverage for your protection",
                "15-25 Minute ETA - Fastest response in San Diego",
                "Upfront Pricing - No surprises, no hidden fees",
                "24/7 Availability - We never close, even on holidays",
                "Professional Drivers - Background checked and trained",
                "Modern Fleet - Well-maintained tow trucks and equipment",
                "All Services - Towing, jump starts, lockouts, tire changes, fuel delivery",
                "15% Online Discount - Save money by booking online",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <span className="text-xl flex-shrink-0 text-green-400">&#10003;</span>
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e4a] mb-6">
              Serving All of San Diego County
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              From Downtown to La Jolla, Pacific Beach to Chula Vista, we cover the entire San Diego area with fast, professional{" "}
              <Link href="/towing" className="text-[#1e1e4a] font-semibold underline underline-offset-2 hover:text-[#ffba42] transition-colors">towing</Link> and{" "}
              <Link href="/roadside-assistance" className="text-[#1e1e4a] font-semibold underline underline-offset-2 hover:text-[#ffba42] transition-colors">roadside assistance</Link>.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-700">
              {[
                "Downtown San Diego",
                "La Jolla",
                "Pacific Beach",
                "Mission Valley",
                "Hillcrest",
                "North Park",
                "Gaslamp Quarter",
                "Point Loma",
                "Ocean Beach",
                "Chula Vista",
                "National City",
                "El Cajon",
                "Santee",
                "La Mesa",
                "Coronado",
              ].map((area, idx) => (
                <span key={idx} className="bg-[#1e1e4a] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e4a] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">Everything you need to know about CloseBy Towing</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "When was CloseBy Towing founded?",
                  a: "CloseBy Towing was founded in 2020 in San Diego, California. We started with a single tow truck and a commitment to providing fast, honest, and affordable towing and roadside assistance to the San Diego community. Since then, we have grown into a full-fleet operation serving all of San Diego County with over 15,000 completed service calls."
                },
                {
                  q: "Is CloseBy Towing licensed and insured?",
                  a: "Yes, CloseBy Towing is fully licensed and insured in the state of California. All of our drivers are background-checked, professionally trained, and carry the required certifications to operate tow trucks and provide roadside assistance services. We maintain comprehensive liability and cargo insurance so your vehicle is always protected while in our care."
                },
                {
                  q: "What areas does CloseBy Towing serve?",
                  a: "We serve all of San Diego County including Downtown San Diego, La Jolla, Pacific Beach, Mission Valley, Hillcrest, North Park, Point Loma, Ocean Beach, Chula Vista, National City, El Cajon, Santee, La Mesa, Coronado, Encinitas, Del Mar, Poway, Rancho Bernardo, Scripps Ranch, Mira Mesa, Kearny Mesa, and dozens more neighborhoods and communities throughout the region."
                },
                {
                  q: "What services does CloseBy Towing offer?",
                  a: "We offer a comprehensive range of towing and roadside assistance services. This includes local and long-distance towing, flatbed towing, emergency towing, battery jump starts, car lockout service, flat tire changes, fuel delivery, winch-out recovery, collision recovery, motorcycle towing, and heavy-duty towing. Every service is available 24 hours a day, 7 days a week, 365 days a year."
                },
                {
                  q: "How fast can CloseBy Towing arrive?",
                  a: "Our average response time is 15-25 minutes throughout San Diego County. We strategically position our fleet across the region and use GPS-based dispatching to send the closest available truck to your location. You will receive real-time ETA updates via text message so you always know exactly when help will arrive."
                },
                {
                  q: "Does CloseBy Towing offer upfront pricing?",
                  a: "Absolutely. We are committed to transparent, upfront pricing with no hidden fees or surprise charges. When you call or book online, we provide a clear, itemized quote before dispatching a truck. The price we quote is the price you pay. We also offer a 15% discount when you book your service online through our website."
                },
                {
                  q: "Does CloseBy Towing work with insurance companies?",
                  a: "Yes, we work with all major insurance companies including AAA, Geico, State Farm, Progressive, Allstate, USAA, and many more. We can bill your insurer directly for covered services and provide all the documentation you need for your claim. Even if your insurance does not cover towing, our rates are competitive and fully transparent."
                }
              ].map((faq, idx) => (
                <details key={idx} itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="group relative overflow-hidden rounded-xl border-2 border-gray-200 bg-white hover:border-[#1e1e4a] transition-all duration-300 hover:shadow-lg">
                  <summary itemProp="name" className="cursor-pointer select-none p-6 font-bold text-lg flex items-center justify-between text-[#1e1e4a] list-none min-h-[56px]">
                    <span className="flex-1 pr-4">{faq.q}</span>
                    <svg
                      className="w-6 h-6 text-[#ffba42] group-open:rotate-180 transition-transform duration-500 flex-shrink-0 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="px-6 pb-6 border-t border-gray-100 pt-4">
                    <p itemProp="text" className="text-gray-600 text-base leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 sm:py-20 bg-[#ffba42]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1e1e4a] mb-6">
              Need Help Right Now?
            </h2>
            <p className="text-xl text-[#1e1e4a]/80 mb-8">
              Our team is standing by 24/7 to get you back on the road fast. Call us or book online to save {discountText}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18589999293"
                className="inline-block rounded-lg bg-[#1e1e4a] text-white px-8 py-4 font-bold hover:brightness-110 text-lg shadow-lg transition-all hover:scale-105 text-center"
              >
                Call Now: (858) 999-9293
              </a>
              {showBanners && (
                <button
                  onClick={() => {
                    const popup = document.querySelector('[aria-label*="Get instant price"]') as HTMLButtonElement;
                    if (popup) popup.click();
                  }}
                  className="inline-block rounded-lg bg-white text-[#1e1e4a] px-8 py-4 font-bold hover:brightness-95 text-lg shadow-lg transition-all hover:scale-105 text-center"
                >
                  Order Online & Save {discountText}
                </button>
              )}
            </div>
            <p className="mt-6 text-[#1e1e4a]/60 text-sm">
              Or explore our services:{" "}
              <Link href="/towing" className="underline hover:text-[#1e1e4a] transition-colors">Towing</Link>{" | "}
              <Link href="/roadside-assistance" className="underline hover:text-[#1e1e4a] transition-colors">Roadside Assistance</Link>{" | "}
              <Link href="/jump-start" className="underline hover:text-[#1e1e4a] transition-colors">Jump Start</Link>{" | "}
              <Link href="/lockout" className="underline hover:text-[#1e1e4a] transition-colors">Lockout Service</Link>
            </p>
          </div>
        </section>

        <LeftPopup />
      </main>
    </>
  );
}
