export const metadata = {
  title: "Logo Concept — CloseBy Towing",
  robots: "noindex, nofollow",
};

function CloseByLogo({
  primaryColor,
  textColor,
  bgColor,
  label,
}: {
  primaryColor: string;
  textColor: string;
  bgColor: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-6">
      <h2
        className="text-sm font-semibold uppercase tracking-widest"
        style={{ color: textColor === "#ffffff" ? "#94a3b8" : "#64748b" }}
      >
        {label}
      </h2>

      <div
        className="rounded-2xl p-12 flex items-center justify-center"
        style={{ backgroundColor: bgColor }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 360 120"
          width="360"
          height="120"
        >
          {/* ── ICON: Location Pin + Tow Truck ── */}
          <g transform="translate(10, 5)">
            {/* Location pin outer shape */}
            <path
              d="M50 4C30.7 4 15 19.2 15 37.8C15 62.5 50 108 50 108S85 62.5 85 37.8C85 19.2 69.3 4 50 4Z"
              fill={primaryColor}
            />

            {/* Tow truck silhouette inside pin (white cutout) */}
            <g transform="translate(26, 22)" fill={bgColor}>
              {/* Truck cab */}
              <rect x="28" y="8" width="18" height="18" rx="3" />
              {/* Cab windshield cut */}
              <rect x="37" y="10" width="7" height="8" rx="1.5" fill={primaryColor} />
              {/* Truck bed / flatbed */}
              <rect x="2" y="14" width="28" height="12" rx="2" />
              {/* Boom arm (tow crane) */}
              <path
                d="M8 14 L2 2 L6 2 L14 14"
                fill={bgColor}
                stroke={bgColor}
                strokeWidth="0.5"
              />
              {/* Hook at end of boom */}
              <path
                d="M3 2 C3 -1 7 -1 7 2 L7 4 C7 6 3 6 3 4Z"
                fill={bgColor}
              />
              {/* Wheels */}
              <circle cx="12" cy="28" r="4.5" fill={primaryColor} />
              <circle cx="12" cy="28" r="2" fill={bgColor} />
              <circle cx="38" cy="28" r="4.5" fill={primaryColor} />
              <circle cx="38" cy="28" r="2" fill={bgColor} />
            </g>
          </g>

          {/* ── TEXT: CloseBy ── */}
          <g transform="translate(105, 0)">
            {/* "C" letter designed as a tow hook */}
            <g transform="translate(0, 18)">
              {/* Main C shape */}
              <path
                d="M38 8C34.5 3.2 28.8 0.5 22.5 0.5C10.1 0.5 0 11 0 24C0 37 10.1 47.5 22.5 47.5C28.8 47.5 34.5 44.8 38 40"
                fill="none"
                stroke={primaryColor}
                strokeWidth="9"
                strokeLinecap="round"
              />
              {/* Hook curl at bottom of C */}
              <path
                d="M38 40C38 40 42 44 42 48C42 52.5 38 55 34.5 55C31 55 28 52.5 28 49"
                fill="none"
                stroke={primaryColor}
                strokeWidth="5"
                strokeLinecap="round"
              />
            </g>

            {/* "loseBy" text */}
            <text
              x="48"
              y="62"
              fontFamily="Arial, Helvetica, sans-serif"
              fontWeight="800"
              fontSize="52"
              fill={textColor}
              letterSpacing="-1"
            >
              loseBy
            </text>

            {/* "TOWING" subtitle */}
            <text
              x="2"
              y="90"
              fontFamily="Arial, Helvetica, sans-serif"
              fontWeight="700"
              fontSize="22"
              fill={primaryColor}
              letterSpacing="8"
            >
              TOWING
            </text>
          </g>
        </svg>
      </div>

      {/* Smaller version */}
      <div
        className="rounded-xl p-6 flex items-center justify-center"
        style={{ backgroundColor: bgColor }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 360 120"
          width="180"
          height="60"
        >
          <g transform="translate(10, 5)">
            <path
              d="M50 4C30.7 4 15 19.2 15 37.8C15 62.5 50 108 50 108S85 62.5 85 37.8C85 19.2 69.3 4 50 4Z"
              fill={primaryColor}
            />
            <g transform="translate(26, 22)" fill={bgColor}>
              <rect x="28" y="8" width="18" height="18" rx="3" />
              <rect x="37" y="10" width="7" height="8" rx="1.5" fill={primaryColor} />
              <rect x="2" y="14" width="28" height="12" rx="2" />
              <path d="M8 14 L2 2 L6 2 L14 14" fill={bgColor} stroke={bgColor} strokeWidth="0.5" />
              <path d="M3 2 C3 -1 7 -1 7 2 L7 4 C7 6 3 6 3 4Z" fill={bgColor} />
              <circle cx="12" cy="28" r="4.5" fill={primaryColor} />
              <circle cx="12" cy="28" r="2" fill={bgColor} />
              <circle cx="38" cy="28" r="4.5" fill={primaryColor} />
              <circle cx="38" cy="28" r="2" fill={bgColor} />
            </g>
          </g>
          <g transform="translate(105, 0)">
            <g transform="translate(0, 18)">
              <path
                d="M38 8C34.5 3.2 28.8 0.5 22.5 0.5C10.1 0.5 0 11 0 24C0 37 10.1 47.5 22.5 47.5C28.8 47.5 34.5 44.8 38 40"
                fill="none" stroke={primaryColor} strokeWidth="9" strokeLinecap="round"
              />
              <path
                d="M38 40C38 40 42 44 42 48C42 52.5 38 55 34.5 55C31 55 28 52.5 28 49"
                fill="none" stroke={primaryColor} strokeWidth="5" strokeLinecap="round"
              />
            </g>
            <text x="48" y="62" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="52" fill={textColor} letterSpacing="-1">loseBy</text>
            <text x="2" y="90" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="22" fill={primaryColor} letterSpacing="8">TOWING</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function LogoPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-black text-slate-900">
            CloseBy Towing — Logo Concept
          </h1>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">
            Location pin + tow truck icon. The &quot;C&quot; in CloseBy forms a
            tow hook. Bold red (#E31E24), flat colors, no gradients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <CloseByLogo
            primaryColor="#E31E24"
            textColor="#1a1a2e"
            bgColor="#ffffff"
            label="Full Color — Red on White"
          />

          <CloseByLogo
            primaryColor="#E31E24"
            textColor="#ffffff"
            bgColor="#0d0f2b"
            label="White on Dark Navy"
          />

          <CloseByLogo
            primaryColor="#1a1a1a"
            textColor="#1a1a1a"
            bgColor="#ffffff"
            label="Single Color — Black on White"
          />
        </div>

        <div className="mt-20 text-center text-sm text-slate-400">
          This page is noindex — not visible to search engines.
        </div>
      </div>
    </main>
  );
}
