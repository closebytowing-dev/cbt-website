"use client";

type Review = { name: string; text: string; when?: string; rating?: number };

const base: Review[] = [
  {
    name: "Joe Barajas",
    when: "4 days ago",
    rating: 5,
    text:
      "I had my 1968 MGB towed by Closeby Towing. Daniel was friendly, professional and the price was reasonable. Highly recommend.",
  },
  {
    name: "Paul Stevenson",
    when: "1 week ago",
    rating: 5,
    text:
      "Daniel was very professional and helpful. He got my Jeep Compass home after being stranded. I recommend CloseBy Towing in San Diego.",
  },
  {
    name: "Brenda Valadez",
    when: "13 hours ago",
    rating: 5,
    text:
      "Great service! The driver arrived sooner than expected, and made a stressful situation much easier! If you ever need roadside assistance this is the company to call!",
  },
  {
    name: "Jacob Perkins",
    when: "14 hours ago",
    rating: 5,
    text:
      "Fantastic and professional towing service. Very friendly and very fair, affordable prices. Would recommend to anyone looking for a tow.",
  },
  {
    name: "Adam Perse'",
    when: "17 hours ago",
    rating: 5,
    text:
      "This company was very fast and helpful. I blew a tire on Olympic Parkway during rush hour traffic and they truly made me feel like a priority.",
  },
];

// Use just the base set; duplicate once for a seamless loop
const reviews: Review[] = base;

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-1" aria-label={`${n ?? 5} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < (n ?? 5) ? "text-yellow-400" : "text-white/40"}>★</span>
      ))}
    </div>
  );
}

function Card({ r }: { r: Review }) {
  return (
    <article className="w-[280px] sm:w-[400px] min-h-[220px] shrink-0 rounded-2xl bg-white text-[#0d0d36] ring-1 ring-black/10 shadow-[0_6px_20px_rgba(0,0,0,.08)] p-4 sm:p-5 overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="font-semibold">{r.name}</div>
        <Stars n={r.rating ?? 5} />
      </div>
      {r.when ? <p className="mt-1 text-sm text-[#0d0d36]/70">{r.when}</p> : null}
      <p className="mt-3 text-[1.05rem] leading-snug">{r.text}</p>
    </article>
  );
}

export default function Reviews() {
  // Exactly two copies for a perfect 50% translate loop
  const row = [...reviews, ...reviews];

  return (
    <section
      id="reviews"
      className="relative z-20 w-full overflow-x-hidden bg-[#ffba42] pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-12 lg:pb-14"  /* reduced top padding */
    >
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1e1e4a]">
            What Customers Say
          </h2>

          {/* Aggregate rating display */}
          <div className="flex items-center gap-3 sm:gap-4 bg-white/90 backdrop-blur-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-[#1e1e4a]">4.9</div>
              <div className="flex gap-0.5 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">★</span>
                ))}
              </div>
            </div>
            <div className="border-l-2 border-[#1e1e4a]/20 pl-3 sm:pl-4">
              <div className="text-xs sm:text-sm font-semibold text-[#1e1e4a]/70">Based on</div>
              <div className="text-lg sm:text-xl font-bold text-[#1e1e4a]">1,247+ Reviews</div>
              <div className="flex gap-1.5 sm:gap-2 mt-1">
                <span className="text-xs font-semibold text-[#1e1e4a]/60">Google</span>
                <span className="text-xs font-semibold text-[#1e1e4a]/60">Yelp</span>
                <span className="text-xs font-semibold text-[#1e1e4a]/60">Facebook</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-6 overflow-hidden">
          {/* Edge masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#ffba42] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#ffba42] to-transparent" />

          {/* Marquee track */}
          <div className="track flex gap-6 will-change-transform">
            {row.map((r, i) => (
              <Card key={r.name + i} r={r} />
            ))}
          </div>

          <style jsx>{`
            .track { width: max-content; animation: reviews-marquee 45s linear infinite; }
            .track:hover { animation-play-state: paused; }
            @keyframes reviews-marquee {
              from { transform: translateX(0); }
              to   { transform: translateX(-50%); }
            }
            @media (prefers-reduced-motion: reduce) {
              .track { animation: none; }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
