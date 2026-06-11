/** @type {import('next').NextConfig} */
const nextConfig = {
  // Skip ESLint during `next build`
  eslint: { ignoreDuringBuilds: true },

  // Skip TypeScript type-checking during `next build`
  typescript: { ignoreBuildErrors: true },

  // Enable compression
  compress: true,

  // 301 Redirects for old/dead URLs indexed by Google
  async redirects() {
    // Legacy redirects
    const legacy = [
      {
        source: '/tow-truck/near-me',
        destination: '/towing-near-me',
        permanent: true,
      },
      {
        source: '/san-diego/poway',
        destination: '/poway',
        permanent: true,
      },
      {
        source: '/san-diego/spring-valley',
        destination: '/spring-valley',
        permanent: true,
      },
      {
        source: '/san-diego/national-city',
        destination: '/national-city',
        permanent: true,
      },
      {
        source: '/services/heavy-duty',
        destination: '/heavyduty',
        permanent: true,
      },
      {
        source: '/towing-in-del-cerro',
        destination: '/del-cerro',
        permanent: true,
      },
      {
        source: '/winching',
        destination: '/winch-out',
        permanent: true,
      },
      {
        source: '/24-hour-roadside-assistance',
        destination: '/roadside-assistance',
        permanent: true,
      },
      {
        source: '/towing-in-san-ysidro',
        destination: '/san-ysidro',
        permanent: true,
      },
      {
        source: '/towing-in-san-ysidro/',
        destination: '/san-ysidro',
        permanent: true,
      },
      {
        source: '/cheap-towing',
        destination: '/towing',
        permanent: true,
      },
      {
        source: '/cheap-towing/',
        destination: '/towing',
        permanent: true,
      },
    ];

    // Neighborhood migration: /san-diego/[slug] → /[slug]
    const neighborhoodSlugs = [
      '4s-ranch',
      'allied-gardens',
      'alpine',
      'bankers-hill',
      'bonita',
      'carmel-mountain',
      'carmel-valley',
      'clairemont',
      'college-area',
      'coronado',
      'del-cerro',
      'del-mar',
      'downtown',
      'encinitas',
      'hillcrest',
      'imperial-beach',
      'kearny-mesa',
      'la-jolla',
      'lakeside',
      'lemon-grove',
      'lincoln-park',
      'linda-vista',
      'logan-heights',
      'mira-mesa',
      'mission-bay',
      'mission-beach',
      'mission-hills',
      'mission-valley',
      'nestor',
      'normal-heights',
      'north-park',
      'ocean-beach',
      'otay-mesa',
      'pacific-beach',
      'palm-city',
      'paradise-hills',
      'point-loma',
      'rancho-bernardo',
      'rancho-penasquitos',
      'rancho-san-diego',
      'rancho-santa-fe',
      'sabre-springs',
      'san-carlos',
      'san-ysidro',
      'santee',
      'scripps-ranch',
      'serra-mesa',
      'skyline',
      'solana-beach',
      'sorrento-valley',
      'tierrasanta',
      'torrey-hills',
      'university-city',
      'university-heights',
    ];

    const neighborhoodRedirects = neighborhoodSlugs.map((slug) => ({
      source: `/san-diego/${slug}`,
      destination: `/${slug}`,
      permanent: true,
    }));

    // Service URL migration: /services/[slug] → /[slug]
    const serviceRedirects = [
      { source: "/services/towing", destination: "/towing", permanent: true },
      { source: "/services/jump-start", destination: "/jump-start", permanent: true },
      { source: "/services/lockout", destination: "/lockout", permanent: true },
      { source: "/services/tire-change", destination: "/tire-change", permanent: true },
      { source: "/services/gas-delivery", destination: "/gas-delivery", permanent: true },
      { source: "/services/winch-out", destination: "/winch-out", permanent: true },
      { source: "/services/collision-recovery", destination: "/collision-recovery", permanent: true },
    ];

    // Heavy duty alias redirect
    const miscRedirects = [
      { source: "/heavy-duty", destination: "/heavyduty", permanent: true },
      { source: "/services/heavy-duty", destination: "/heavyduty", permanent: true },
      { source: "/san-diego/roadside-assistance", destination: "/roadside-assistance", permanent: true },
      { source: "/san-diego/towing", destination: "/towing", permanent: true },
      { source: "/san-diego/accident-towing", destination: "/accident-towing", permanent: true },
      { source: "/san-diego/emergency-towing", destination: "/emergency-towing", permanent: true },
      { source: "/san-diego/flatbed-towing", destination: "/flatbed-towing", permanent: true },
    ];

    return [...legacy, ...neighborhoodRedirects, ...serviceRedirects, ...miscRedirects];
  },

  // Security headers and caching
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/:path*",
        headers: [
          // Security headers
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-origin",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
          {
            key: "X-XSS-Protection",
            value: "0",
          },
        ],
      },
      {
        // Cache static assets aggressively
        source: "/(.*)\\.(ico|png|jpg|jpeg|gif|webp|avif|svg|woff|woff2|ttf|eot)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache JS and CSS files
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
