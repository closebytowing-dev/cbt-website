import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GadsConversionTracker from "@/components/GadsConversionTracker";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.closebytowing.com'),
  title: "CloseBy Towing San Diego | 24/7 Emergency Towing & Roadside Assistance",
  description: "Fast, reliable 24/7 towing and roadside assistance in San Diego. Jump starts, tire changes, fuel delivery, lockout service, and collision recovery. Call (858) 999-9293 for immediate help!",
  keywords: "towing San Diego, roadside assistance, emergency towing, jump start, tire change, fuel delivery, lockout service, collision recovery, 24/7 towing, San Diego towing company",
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
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{display: 'none', visibility: 'hidden'}}
            title="Google Tag Manager"
          />
        </noscript>

        <Header />
        {children}
        <Footer />
        <GadsConversionTracker />

        {/* Google Tag Manager - deferred loading */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');`
          }}
        />

        {/* Google Analytics 4 */}
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
gtag('config', 'AW-XXXXXXXXXX');`
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
