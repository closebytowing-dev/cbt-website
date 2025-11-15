import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://closebytowing.com'),
  title: "CloseBy Towing San Diego | 24/7 Emergency Towing & Roadside Assistance",
  description: "Fast, reliable 24/7 towing and roadside assistance in San Diego. Jump starts, tire changes, fuel delivery, lockout service, and collision recovery. Call (858) 999-9293 for immediate help!",
  keywords: "towing San Diego, roadside assistance, emergency towing, jump start, tire change, fuel delivery, lockout service, collision recovery, 24/7 towing, San Diego towing company",
  authors: [{ name: "CloseBy Towing" }],
  openGraph: {
    title: "CloseBy Towing San Diego | 24/7 Emergency Towing & Roadside Assistance",
    description: "Fast, reliable 24/7 towing and roadside assistance in San Diego. Available now!",
    url: "https://closebytowing.com",
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
    google: 'PLACEHOLDER_ADD_YOUR_GOOGLE_SEARCH_CONSOLE_CODE', // TODO: Replace with actual verification code from Google Search Console
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // LocalBusiness Schema.org markup for SEO
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://closebytowing.com",
    "name": "CloseBy Towing San Diego",
    "image": "https://closebytowing.com/logo.png",
    "description": "Fast, reliable 24/7 towing and roadside assistance in San Diego. Licensed and insured towing company providing emergency towing, jump starts, tire changes, fuel delivery, lockout service, and collision recovery.",
    "telephone": "+1-858-999-9293",
    "email": "info@closebytowing.com",
    "url": "https://closebytowing.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Diego",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7157",
      "longitude": "-117.1611"
    },
    "areaServed": {
      "@type": "City",
      "name": "San Diego"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "serviceType": [
      "Emergency Towing",
      "Roadside Assistance",
      "Jump Start Service",
      "Tire Change",
      "Fuel Delivery",
      "Lockout Service",
      "Collision Recovery",
      "Winch-Out Service"
    ],
    "hasMap": "https://www.google.com/maps/place/San+Diego,+CA"
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');`
          }}
        />

        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z2H3Z3WNJV"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-Z2H3Z3WNJV');`
          }}
        />

        {/* Facebook Pixel */}
        <script
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
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Microsoft Clarity - Free Heatmaps & Session Recordings */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "YOUR_CLARITY_ID");`
          }}
        />

        {/* Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="overflow-x-hidden">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
