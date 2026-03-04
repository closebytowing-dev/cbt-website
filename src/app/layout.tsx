import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GadsConversionTracker from "@/components/GadsConversionTracker";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.closebytowing.com'),
  title: "CloseBy Towing San Diego | 24/7 Emergency Towing & Roadside Assistance",
  description: "Fast, reliable 24/7 towing and roadside assistance in San Diego. Serving La Jolla, Coronado, Downtown San Diego and all neighborhoods. Jump starts, tire changes, fuel delivery, lockout service, and collision recovery. Call (858) 999-9293 for immediate help!",
  keywords: "towing San Diego, roadside assistance, emergency towing, jump start, tire change, fuel delivery, lockout service, collision recovery, 24/7 towing, San Diego towing company, towing La Jolla, towing Coronado, towing Downtown San Diego",
  authors: [{ name: "CloseBy Towing" }],
  openGraph: {
    title: "CloseBy Towing San Diego | 24/7 Emergency Towing & Roadside Assistance",
    description: "Fast, reliable 24/7 towing and roadside assistance in San Diego. Available now!",
    url: "https://www.closebytowing.com",
    siteName: "CloseBy Towing",
    images: [
      {
        url: "/hero/home-hero.webp",
        width: 1200,
        height: 630,
        alt: "CloseBy Towing - Professional 24/7 Emergency Towing Service in San Diego",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloseBy Towing San Diego | 24/7 Emergency Towing",
    description: "Fast, reliable 24/7 towing and roadside assistance in San Diego.",
    images: ["/hero/home-hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'NuvmaUv1oZ7lJ-IVnLmHPKX3S99iZ7ueWG2iaFQXITM',
  },
  alternates: {
    canonical: '/',
    languages: {
      'en': 'https://www.closebytowing.com',
      'es': 'https://www.closebytowing.com/gruas',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* DNS prefetch for analytics (scripts loaded lazily after page load) */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />

        {/* Preload critical hero image for LCP optimization */}
        <link
          rel="preload"
          as="image"
          href="/hero/home-hero.webp"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body className="overflow-x-hidden">
        <Header />
        {children}
        <Footer />

        {/* ── Global Sticky Call Button (bottom-center, 3D + metallic border) ── */}
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-2xl p-[4px] sm:p-[5px]"
          style={{
            marginBottom: "env(safe-area-inset-bottom, 0px)",
            background: "linear-gradient(180deg, #f0f0f0 0%, #d4d4d4 20%, #a8a8a8 40%, #e8e8e8 55%, #b0b0b0 70%, #c8c8c8 85%, #9a9a9a 100%)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.2)",
          }}
        >
          <a
            href="tel:+18589999293"
            className="group flex items-center gap-3 font-black text-xl sm:text-2xl text-white py-4 sm:py-5 px-8 sm:px-12 rounded-xl border-b-[5px] border-red-900 bg-gradient-to-b from-red-500 via-red-600 to-red-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:from-emerald-400 hover:via-emerald-500 hover:to-emerald-600 hover:border-emerald-800 hover:translate-y-[2px] hover:border-b-[3px] active:translate-y-[4px] active:border-b-[1px] transition-all duration-150"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="drop-shadow-md">(858) 999-9293</span>
          </a>
        </div>

        <GadsConversionTracker />

        {/* Google Analytics 4 + Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J8CVPHT7TG"
          strategy="afterInteractive"
        />
        <Script
          id="ga4-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-J8CVPHT7TG');
gtag('config', 'AW-992120764');`
          }}
        />

        {/* Facebook Pixel - deferred loading */}
        <Script
          id="fb-pixel"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');`
          }}
        />

        {/* Microsoft Clarity - deferred loading */}
        <Script
          id="clarity-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "YOUR_CLARITY_ID");`
          }}
        />
      </body>
    </html>
  );
}
