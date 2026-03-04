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

        {/* ── Global Sticky Call Button (bottom-right) ── */}
        <a
          href="tel:+18589999293"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-black text-lg sm:text-xl py-3.5 sm:py-4 px-6 sm:px-8 rounded-full shadow-[0_8px_30px_rgba(220,38,38,0.5)] hover:shadow-[0_8px_40px_rgba(220,38,38,0.7)] hover:scale-105 transition-all duration-200"
          style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span>(858) 999-9293</span>
        </a>

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
