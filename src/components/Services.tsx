"use client";

import Image from "next/image";

type Service = {
  key: string;
  title: string;
  icon: string;
  img?: string;
  blurb: string;
  link?: string;
};

const services: Service[] = [
  {
    key: "flatbed",
    title: "Flatbed / Wheel-Lift Towing",
    icon: "🚚",
    img: "/services/flatbed.jpg",
    blurb:
      "Need luxury or all-wheel-drive towing? Our flatbeds protect low-clearance vehicles and long-distance transports. Wheel-lift is great for tight spots and quick moves. Damage-free equipment, soft straps, and careful loading.",
    link: "/services/towing",
  },
  {
    key: "collision",
    title: "Collision Recovery",
    icon: "🚨",
    img: "/services/collision-recovery.webp",
    blurb:
      "Accident? We provide fast, professional collision towing and recovery. Safe removal from accident scenes, insurance-friendly documentation, and careful transport to your preferred location. Available 24/7 across San Diego.",
    link: "/services/collision-recovery",
  },
  {
    key: "jump",
    title: "Jump Start Service",
    icon: "⚡",
    img: "/services/jump.jpg",
    blurb:
      "Dead battery? We bring the power to you. Surge-protected boosters and safe hookup procedures. Fast arrival across San Diego, day or night. No membership required — just a quick, professional jump to get you rolling again.",
    link: "/services/jump-start",
  },
  {
    key: "lockout",
    title: "Lock-Out Service",
    icon: "🔑",
    img: "/services/lockout.jpg",
    blurb:
      "Locked out of your car? Don't break a window. Our techs unlock vehicles quickly and without damage using pro air-wedge and long-reach tools. We service all makes and models. One quick call gets you back in your car.",
    link: "/services/lockout",
  },
  {
    key: "fuel",
    title: "Gas/Diesel Delivery",
    icon: "⛽",
    img: "/services/fuel.jpg",
    blurb:
      "Out of gas? Stuck on empty? We deliver gasoline or diesel straight to your location anywhere in San Diego. No need to leave your car — we'll bring it to you, get you fueled, and send you safely on your way.",
    link: "/services/gas-delivery",
  },
  {
    key: "tire",
    title: "Flat Tire Service",
    icon: "🛞",
    img: "/services/tire.jpg",
    blurb:
      "Flat tire? We can install your spare, reinflate, or assist with a safe swap on the shoulder. Lug nuts torqued to spec and a quick safety check before you roll. Friendly help when changing a tire feels overwhelming.",
    link: "/services/tire-change",
  },
  {
    key: "winch",
    title: "Winching / Winch-Out",
    icon: "🧭",
    img: "/services/winch.jpg",
    blurb:
      "Stuck in sand, mud, or a driveway dip? We handle light recoveries from tight areas without vehicle damage. AWD, low-profile, and tricky angles welcome — we assess on arrival and recover carefully to get you moving again.",
    link: "/services/winch-out",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full overflow-hidden bg-[#1e1e4a] py-12 sm:py-16">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#FFFFFF]">
            Complete Towing & Roadside Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-white/80 max-w-3xl mx-auto px-4">
            From emergency towing to simple jump starts, we've got San Diego covered.
            <span className="text-[#ffba42] font-semibold"> Fast response • Professional service • Upfront pricing</span>
          </p>
        </div>

        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((s) => (
            <article
              key={s.key}
              className="
                overflow-hidden rounded-2xl bg-white ring-1 ring-black/10
                shadow-[0_10px_28px_rgba(0,0,0,.10)]
                flex flex-col h-[620px]
                transition-all hover:shadow-[0_15px_40px_rgba(0,0,0,.15)] hover:scale-[1.02]
              "
            >
              <div className="relative h-[42%] min-h-[210px] bg-[radial-gradient(circle_at_30%_20%,#eef3fb,transparent_55%),linear-gradient(180deg,#e6eef9,#f7f9fc)]">
                {s.img ? (
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    loading="lazy"
                  />
                ) : null}
              </div>

              <div className="flex-1 p-6 sm:p-7 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0d0d36] flex items-center gap-2">
                  {s.icon && <span className="text-xl sm:text-2xl">{s.icon}</span>}
                  <span>{s.title}</span>
                </h3>
                <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#0d0d36]/85 flex-1">
                  {s.blurb}
                </p>
                {s.link && (
                  <a
                    href={s.link}
                    className="mt-4 inline-block text-center rounded-lg bg-[#ffba42] text-[#1e1e4a] px-6 py-3 font-bold hover:bg-[#ffc857] transition-all hover:scale-105 shadow-md"
                  >
                    Learn More →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
