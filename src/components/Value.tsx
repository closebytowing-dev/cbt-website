"use client";

import "./PopupAnimations.css";

type Perk = { title: string; desc: string; icon: string };

const perks: Perk[] = [
  { icon: "🕑", title: "24/7 San Diego Dispatch", desc: "Call anytime — we’re ready day or night." },
  { icon: "✅", title: "Licensed & Insured", desc: "Professional drivers and covered operations." },
  { icon: "💵", title: "Upfront, Fair Pricing", desc: "Clear quotes before we roll." },
  { icon: "⚡", title: "Fast ETAs", desc: "Local routes for quicker arrivals." },
  { icon: "🛡️", title: "Damage-Free Equipment", desc: "Soft straps, dollies, and careful loading." },
  { icon: "🚚", title: "Flatbed & Wheel-Lift", desc: "Right truck for your vehicle and situation." },
  { icon: "💳", title: "Card or Cash Accepted", desc: "Pay the way that’s easiest for you." },
  { icon: "⭐", title: "5-Star Rated Locally", desc: "Customers trust CloseBy Towing." },
];

export default function Value() {
  return (
    <section
      id="value"
      className="
        relative
        overflow-hidden
        bg-[#ffba42]                 /* << added: match Reviews background */
        -mt-8 sm:-mt-10 lg:-mt-12
        pt-2 sm:pt-3 lg:pt-4
        pb-10 sm:pb-14 lg:pb-16
        scroll-mt-28
      "
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
        <div
          className="
            relative
            mt-0
            rounded-3xl sm:rounded-[4rem] bg-white
            ring-1 ring-black/10
            shadow-[0_18px_200px_rgba(0,0,0,.22),0_8px_200px_rgba(0,0,0,.12)]
            p-6 sm:p-10 lg:p-12
            before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:pointer-events-none
            before:shadow-[inset_0_1px_0_rgba(255,255,255,.9),inset_0_-1px_0_rgba(0,0,0,.06)]
            after:content-[''] after:absolute after:-z-10 after:rounded-[inherit]
            after:-inset-x-8 after:-inset-y-10 after:blur-2xl
            after:bg-[radial-gradient(80%_60%_at_50%_0%,rgba(0,0,0,.25),transparent)]
          "
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1e1e4a]">
            Why CloseBy Towing?
          </h2>
          <p className="mt-2 text-base sm:text-lg text-[#0d0d36]/80">
            Trustworthy, fast, and upfront — exactly when you need it most.
          </p>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-5">
            {perks.map((p) => (
              <div key={p.title} className="flex items-start gap-4">
                <div className="flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#ffba42] text-xl sm:text-2xl shrink-0 shadow-[0_6px_16px_rgba(0,0,0,.12)]">
                  <span aria-hidden>{p.icon}</span>
                </div>
                <div>
                  <div className="text-sm sm:text-lg font-semibold text-[#1e1e4a] leading-tight">
                    {p.title}
                  </div>
                  <div className="mt-1 text-sm sm:text-base text-[#0d0d36]/80">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
