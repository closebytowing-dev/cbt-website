"use client";

import "./PopupAnimations.css";

// Source of truth for Q&A content
const QA = [
  { q: "How fast can you get to me?", a: "Most calls in San Diego see 20-35 minute ETAs depending on traffic and distance. We text or call with updates if anything changes." },
  { q: "How much does towing cost?", a: "Pricing varies based on distance and service type. Local tows typically start at $75-125. Roadside services like jump starts and lockouts are $75 online (save 15% from $88 regular price). Call (858) 999-9293 for an instant quote—we provide upfront, transparent pricing before we dispatch." },
  { q: "Do you work with insurance companies?", a: "Yes! We're experienced with all major insurance providers and roadside assistance programs. We provide detailed receipts and documentation for reimbursement. Many policies cover towing and roadside services—check your coverage and we'll help with the paperwork." },
  { q: "Do you tow EVs and AWD/low vehicles?", a: "Yes. We use flatbeds and trained operators for EVs, AWD, and low-clearance cars to avoid drivetrain or aero damage." },
  { q: "Are you licensed and insured?", a: "Absolutely. CloseBy Towing is fully licensed, bonded, and insured. Our drivers are professionally trained and background-checked. We carry comprehensive liability and cargo insurance to protect your vehicle during transport." },
  { q: "How does the online discount work?", a: "When you book online, the discount is applied automatically at checkout—no promo code needed." },
  { q: "How can I get faster service?", a: "Request online and your job goes straight to the nearest driver, skipping the dispatcher, so you are connected quicker." },
  { q: "What areas do you cover?", a: "All across San Diego County—from Downtown to La Jolla, Chula Vista to Poway. If you are just outside the county, call us—we can often accommodate." },
  { q: "What payment methods do you accept?", a: "Most major cards (Visa, Mastercard, Amex, Discover) and contactless payments. Cash is accepted on-site. We provide detailed receipts for insurance and roadside assistance reimbursements." },
  { q: "What if my car is not drivable after an accident?", a: "We specialize in collision recovery and accident towing. Our team safely removes vehicles from accident scenes with proper equipment and provides all necessary documentation for insurance claims. Available 24/7 across San Diego." },
];// Utility to create stable, URL-friendly IDs for deep-linking
function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: QA.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  // Pre-stringify to avoid re-serializing on every render
  const structuredData = JSON.stringify(jsonLd);

  return (
    <section className="w-full overflow-hidden bg-white dark:bg-black py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-center mb-4 sm:mb-6">
          FAQ
        </h2>

        <ul className="divide-y divide-zinc-200 dark:divide-zinc-800 rounded-xl sm:rounded-2xl border border-[#ffba42] overflow-hidden bg-[#ffba42] backdrop-blur">
          {QA.map(({ q, a }) => {
            const id = slugify(q);
            const panelId = `${id}-panel`;
            return (
              <li key={q} id={id} className="group/qa scroll-mt-28">
                <details className="peer">
                  <summary
                    className="list-none cursor-pointer px-5 py-4 flex items-center justify-between gap-4 hover:bg-[#ffba42] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 rounded-none"
                    aria-controls={panelId}
                  >
                    <span className="text-base sm:text-lg font-medium text-black">
                      {q}
                    </span>

                    {/* right-side toggle button */}
                    <span
                      className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 text-black/80 transition peer-open:bg-[#ffba42]"
                      aria-hidden="true"
                    >
                      <span className="absolute block h-0.5 w-4 bg-current transition-transform peer-open:rotate-90" />
                      <span className="absolute block h-4 w-0.5 bg-current" />
                    </span>
                  </summary>

                  <div id={panelId} className="px-5 pb-5 pt-0 text-sm sm:text-base text-black/80 leading-relaxed">
                    {a}
                    <div className="mt-3">
                      <a
                        href={`#${id}`}
                        className="text-xs text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 underline"
                        aria-label={`Link to ${q}`}
                      >
                        Copy link
                      </a>
                    </div>
                  </div>
                </details>
              </li>
            );
          })}
        </ul>

        {/* Final CTA after FAQ */}
        <div className="mt-8 sm:mt-12 text-center bg-gradient-to-br from-[#1e1e4a] to-[#2a2a5a] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-2 sm:mb-3">
            Need Help Right Now?
          </h3>
          <p className="text-base sm:text-lg text-white/90 mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
            Our team is standing by 24/7 to get you back on the road. Fast response, professional service, upfront pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="tel:+18589999293"
              className="w-full sm:w-auto rounded-lg bg-[#ffba42] text-[#1e1e4a] px-8 sm:px-10 py-3 sm:py-4 font-bold hover:bg-[#ffc857] text-lg sm:text-xl shadow-lg transition-all hover:scale-105 text-center"
            >
              📞 Call Now: (858) 999-9293
            </a>
            <button
              onClick={() => {
                const popup = document.querySelector('[aria-label*="Get instant price"]') as HTMLButtonElement;
                if (popup) popup.click();
              }}
              className="w-full sm:w-auto relative rounded-lg bg-[#42b3ffff] text-black px-8 sm:px-10 py-3 sm:py-4 font-extrabold hover:brightness-110 text-base sm:text-lg shadow-lg transition-all hover:scale-105 text-center overflow-hidden"
              style={{
                boxShadow: '0 0 20px rgba(66, 179, 255, 0.5), 0 0 40px rgba(66, 179, 255, 0.3)',
              }}
            >
              {/* Animated shimmer effect - flashlight sweep */}
              <span
                className="absolute inset-0 shimmer-effect"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, transparent 30%, rgba(255,255,255,0.9) 50%, transparent 70%, transparent 100%)',
                  transform: 'translateX(-100%)',
                }}
              />
              <span className="relative z-10">💰 Order Online & Save 15%</span>
            </button>
          </div>
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-white/70 px-2">
            Average response time: 20-35 minutes • Licensed & Insured • 4.9★ Rating
          </p>
        </div>
      </div>

      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
    </section>
  );
}
