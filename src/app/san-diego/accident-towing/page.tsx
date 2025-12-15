
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONTACT, STATS } from "@/lib/constants";

// SEO Metadata
export const metadata: Metadata = {
  title: "Accident Towing San Diego | Post-Collision Recovery | CloseBy Towing",
  description:
    "Professional accident towing and collision recovery in San Diego. We coordinate with police, insurance companies, and body shops. 24/7 response in 20-35 minutes.",
  keywords:
    "accident towing San Diego, collision towing, car accident tow truck, post-accident recovery, insurance towing, wreck removal, crash towing service",
  openGraph: {
    title: "Accident Towing San Diego | Post-Collision Recovery | CloseBy Towing",
    description:
      "Professional accident and collision towing. We work with police & insurance. 24/7 emergency response throughout San Diego.",
    url: "https://www.closebytowing.com/san-diego/accident-towing",
    type: "website",
  },
  alternates: {
    canonical: "https://www.closebytowing.com/san-diego/accident-towing",
  },
};

// Nearby areas for internal linking
const NEARBY_AREAS = [
  { name: "Mission Valley", slug: "mission-valley" },
  { name: "Kearny Mesa", slug: "kearny-mesa" },
  { name: "La Mesa", slug: "la-mesa" },
  { name: "El Cajon", slug: "el-cajon" },
  { name: "Chula Vista", slug: "chula-vista" },
  { name: "National City", slug: "national-city" },
];

// Related services
const RELATED_SERVICES = [
  { name: "Emergency Towing", slug: "emergency-towing", icon: "🚨" },
  { name: "Flatbed Towing", slug: "flatbed-towing", icon: "🛻" },
  { name: "Local Towing", slug: "towing", icon: "🚗" },
  { name: "Roadside Assistance", slug: "roadside-assistance", icon: "🔧" },
];

// What to do after accident steps
const ACCIDENT_STEPS = [
  {
    number: "01",
    title: "Ensure Safety First",
    description: "Move to a safe location if possible. Turn on hazard lights. Check yourself and passengers for injuries.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Call 911 if Needed",
    description: "Report injuries immediately. For non-injury accidents, call local police for an accident report.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Document Everything",
    description: "Take photos of all vehicles, damage, license plates, and the scene. Exchange information with other drivers.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Call CloseBy Towing",
    description: "We'll arrive in 20-35 minutes to safely remove your vehicle and take it wherever you need.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Contact Your Insurance",
    description: "Report the accident to your insurance company. We can provide documentation and work directly with adjusters.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

// Why choose us for accident towing
const WHY_CHOOSE_US = [
  {
    title: "Police & First Responder Coordination",
    description: "We work seamlessly with SDPD, CHP, and emergency services. Our team knows the protocols and can assist in clearing accident scenes quickly and safely.",
    icon: "🚔",
  },
  {
    title: "Insurance Company Experience",
    description: "We work with all major insurance companies including State Farm, GEICO, Progressive, Allstate, and more. We can provide the documentation your claim needs.",
    icon: "📋",
  },
  {
    title: "Body Shop & Repair Facility Network",
    description: "We can transport your vehicle to any body shop or repair facility in San Diego. Need a recommendation? We know the best shops in town.",
    icon: "🔧",
  },
  {
    title: "Damage-Free Recovery",
    description: "Post-accident vehicles require special care. Our flatbed trucks and trained operators ensure no additional damage during recovery and transport.",
    icon: "🛡️",
  },
  {
    title: "24/7 Immediate Response",
    description: "Accidents don't wait for business hours. We're available around the clock, every day of the year, with 20-35 minute response times.",
    icon: "⏰",
  },
  {
    title: "Secure Vehicle Storage",
    description: "Need temporary storage while you sort things out with insurance? We offer secure, monitored storage facilities for accident-damaged vehicles.",
    icon: "🔒",
  },
];

// FAQ Data
const FAQ_DATA = [
  {
    question: "Who pays for accident towing - me or insurance?",
    answer:
      "In most cases, your auto insurance policy covers towing after an accident under collision or comprehensive coverage. If another driver was at fault, their insurance typically pays. We can work directly with insurance companies and provide all necessary documentation. If you're paying out of pocket, we offer competitive rates starting at $95 for local towing.",
  },
  {
    question: "Can you tow my car if it won't roll or steer?",
    answer:
      "Absolutely. Our flatbed trucks can handle severely damaged vehicles that can't roll or steer. We have winches and specialized equipment to safely load vehicles with locked wheels, flat tires, or frame damage. We'll carefully secure your vehicle without causing additional damage.",
  },
  {
    question: "Should I wait for police before calling a tow truck?",
    answer:
      "For accidents involving injuries, significant damage, or disputes, wait for police to file an accident report. However, you can call us while waiting - we'll coordinate our arrival with law enforcement. For minor fender-benders where you've exchanged information, you can call us immediately to clear the roadway.",
  },
  {
    question: "Can you take my car to a specific body shop?",
    answer:
      "Yes! You have the right to choose where your vehicle goes. We'll transport it to any body shop, dealership service center, or repair facility you specify anywhere in San Diego County. If you need recommendations, we can suggest reputable collision repair shops we trust.",
  },
  {
    question: "What if the accident happens on the freeway?",
    answer:
      "Freeway accidents require rapid response to ensure safety and clear traffic. We have the experience and equipment to work on I-5, I-8, I-15, SR-163, and all San Diego freeways. We coordinate with CHP and work quickly to remove vehicles from the roadway while prioritizing safety.",
  },
  {
    question: "Do you provide vehicle storage after an accident?",
    answer:
      "Yes, we offer secure, monitored vehicle storage at our facility. This is helpful when you need time to coordinate with insurance, find a body shop, or arrange for a total loss vehicle to be picked up. Storage rates are competitive, and we can release vehicles to insurance adjusters or authorized parties.",
  },
];

export default function AccidentTowingPage() {
  return (
    <main className="bg-white">
      {/* Hero Section - Supportive/Calming Theme with Blue */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
        {/* Subtle wave pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="currentColor"
              fillOpacity="0.3"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Support badge */}
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-blue-200 text-sm font-medium">We&apos;re Here to Help</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Accident Towing
                <span className="block text-blue-400 mt-2">San Diego</span>
              </h1>

              <p className="mt-6 text-xl text-blue-100 leading-relaxed max-w-xl">
                Been in an accident? Take a breath - we&apos;ve got you covered. Our professional team arrives in{" "}
                <span className="text-blue-300 font-semibold">20-35 minutes</span>, coordinates with police and
                insurance, and safely transports your vehicle anywhere you need.
              </p>

              {/* Quick action items */}
              <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  After an accident, we help with:
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {[
                    "Safe vehicle recovery",
                    "Insurance coordination",
                    "Police scene clearance",
                    "Body shop transport",
                    "Secure storage",
                    "Documentation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-blue-100">
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/30"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now: {CONTACT.phone}
                </a>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/30"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Text Us on WhatsApp
                </a>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-blue-900/50 relative">
                  <Image
                    src="/hero/home-hero.webp"
                    alt="Professional accident towing and collision recovery in San Diego"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />
                </div>

                {/* Reassurance badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white rounded-xl p-4 shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-slate-900 font-bold">Insurance Approved</p>
                        <p className="text-slate-500 text-sm">We work with all major insurance providers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What To Do After Accident Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              What to Do <span className="text-blue-600">After an Accident</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Stay calm and follow these steps. We&apos;re here to help you through the process.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {ACCIDENT_STEPS.map((step, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:border-blue-200 transition-colors group"
              >
                {/* Step number badge */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-lg">
                  {step.number}
                </div>

                {/* Connector line (hidden on mobile and last item) */}
                {index < ACCIDENT_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-blue-200" />
                )}

                <div className="mt-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-100 transition-colors">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Why Choose CloseBy for <span className="text-blue-600">Accident Towing</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We understand how stressful accidents can be. Our experienced team makes the towing and recovery process as smooth as possible.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 hover:bg-blue-50 transition-colors border border-slate-100 hover:border-blue-200"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Partners Section */}
      <section className="py-16 sm:py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              We Work With <span className="text-blue-300">All Insurance Companies</span>
            </h2>
            <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
              Dealing with insurance after an accident is stressful enough. We handle the towing paperwork and coordinate directly with your insurance company.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "State Farm",
              "GEICO",
              "Progressive",
              "Allstate",
              "USAA",
              "Liberty Mutual",
              "Farmers",
              "Nationwide",
              "AAA",
              "Mercury",
              "Wawanesa",
              "All Others",
            ].map((insurance, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-colors"
              >
                <span className="font-semibold text-sm">{insurance}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-blue-200">
            Don&apos;t see your insurance listed? We work with{" "}
            <span className="text-white font-semibold">every insurance company</span>. Call us and we&apos;ll handle it.
          </p>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Accident Towing Throughout <span className="text-blue-600">San Diego</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              From I-5 to I-15, we respond to accidents across all San Diego neighborhoods and freeways.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {NEARBY_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/san-diego/${area.slug}`}
                className="group bg-white rounded-xl p-4 text-center shadow hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                  {area.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Major freeways */}
          <div className="mt-12 text-center">
            <h3 className="font-bold text-slate-900 mb-4">Major Freeways We Service</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["I-5", "I-8", "I-15", "I-805", "SR-163", "SR-94", "SR-52", "SR-56", "SR-125"].map((freeway) => (
                <span
                  key={freeway}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm"
                >
                  {freeway}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Related <span className="text-blue-600">Services</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Beyond accident towing, we offer comprehensive towing and roadside assistance throughout San Diego.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RELATED_SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/san-diego/${service.slug}`}
                className="group bg-slate-50 hover:bg-blue-50 rounded-xl p-6 transition-all hover:shadow-lg border border-slate-100 hover:border-blue-200"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-slate-500 mt-1">San Diego County</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Accident Towing <span className="text-blue-600">FAQ</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Common questions about towing after a car accident in San Diego.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                  <h3 className="font-semibold text-slate-900 pr-8">{faq.question}</h3>
                  <svg
                    className="w-5 h-5 text-blue-500 flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="currentColor"
              fillOpacity="0.5"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,128C960,107,1056,117,1152,144C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6">
            <svg className="w-4 h-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-blue-200 text-sm font-medium">Here When You Need Us Most</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold">
            Been in an <span className="text-blue-300">Accident?</span>
          </h2>

          <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto">
            We know it&apos;s stressful. Let us take care of the towing while you focus on what matters. Professional, compassionate service - 24/7.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: {CONTACT.phone}
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all border border-white/30"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-blue-200">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{STATS.rating} ({STATS.reviewCount}+ Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>24/7 Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.closebytowing.com/san-diego/accident-towing",
            name: "CloseBy Towing - Accident Towing San Diego",
            description:
              "Professional accident towing and collision recovery in San Diego. We coordinate with police, insurance companies, and body shops. 24/7 response.",
            url: "https://www.closebytowing.com/san-diego/accident-towing",
            telephone: CONTACT.phone,
            areaServed: {
              "@type": "City",
              name: "San Diego",
              "@id": "https://www.wikidata.org/wiki/Q16552",
            },
            serviceType: "Accident Towing",
            priceRange: "$$",
            openingHoursSpecification: {
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
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_DATA.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
