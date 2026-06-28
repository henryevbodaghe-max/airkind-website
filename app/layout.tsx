import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { siteUrl } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AirKind Quercetin Plus | Daily Respiratory & Immune Support",
    template: "%s | AirKind"
  },
  description:
    "AirKind Quercetin Plus combines quercetin, zinc, and bromelain to support immune function, healthy histamine response, and digestive enzyme activity.",
  keywords: [
    "AirKind",
    "Quercetin Plus",
    "quercetin supplement",
    "zinc supplement",
    "bromelain supplement",
    "immune support supplement"
  ],
  alternates: {
    canonical: "/"
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  },
  openGraph: {
    title: "AirKind Quercetin Plus",
    description: "Daily Respiratory & Immune Support with quercetin, zinc, and bromelain.",
    url: siteUrl,
    siteName: "AirKind",
    images: [
      {
        url: "/images/optimized/quercetin-plus-bottle-lifestyle-product.webp",
        width: 1122,
        height: 1402,
        alt: "AirKind Quercetin Plus bottle"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AirKind Quercetin Plus",
    description: "Daily Respiratory & Immune Support with quercetin, zinc, and bromelain.",
    images: ["/images/optimized/quercetin-plus-bottle-lifestyle-product.webp"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
        {metaPixelId ? (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        ) : null}
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
