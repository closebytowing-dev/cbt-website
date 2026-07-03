import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P6FZK95W"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Header />
        {children}
        <Footer />

        <StickyCallButton />

        <GadsConversionTracker />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P6FZK95W');`
          }}
        />

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

        {/* Facebook Pixel and Microsoft Clarity were removed: they were still
            configured with placeholder IDs (YOUR_PIXEL_ID / YOUR_CLARITY_ID),
            so they added main-thread work and network requests with no working
            tracking. Re-add them here (with real IDs) if/when they're needed. */}
      </body>
    </html>
  );
}
