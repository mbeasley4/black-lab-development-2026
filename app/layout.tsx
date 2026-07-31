import type { Metadata, Viewport } from "next";
import "./globals.css";
import { inter, spaceGrotesk } from "./fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavigationProgress from "@/components/NavigationProgress";
import CookieConsent from "@/components/CookieConsent";
import RouteChangeTracker from "@/components/RouteChangeTracker";
import {
  ConsentModeBootstrap,
  GoogleTagManager,
} from "@/components/GoogleTagManager";
import AptabaseClientProvider from "@/providers/AptabaseClientProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { localBusinessSchema } from "@/app/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://blacklabdev.com"),
  title: {
    default: "Black Lab Development | B2B Website Design & Pipeline Generation",
    template: "%s | Black Lab Dev",
  },
  description:
    "B2B website design, conversion optimization, and manufacturing website development in Cincinnati, OH — built to generate pipeline, not just traffic.",
  openGraph: {
    type: "website",
    siteName: "Black Lab Development",
    locale: "en_US",
    images: [
      {
        url: "/images/blacklabdev-og.png",
        width: 1200,
        height: 630,
        alt: "Black Lab Development — B2B Website Design & Pipeline Generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/blacklabdev-og.png"],
  },
};

// Drives the <meta name="theme-color"> tag — controls mobile browser chrome
// color to match the site's near-black background for a cohesive brand feel.
export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Consent Mode v2 defaults must be inline before GTM loads. */}
        <ConsentModeBootstrap />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-[#0b0b0c] text-[#e5e7eb] antialiased`}>
        {/* GTM container + noscript fallback */}
        <GoogleTagManager />
        <AptabaseClientProvider>
          <NavigationProgress />
          <Header />
          <main>{children}</main>
          <Footer />
          <RouteChangeTracker />
          <CookieConsent />
          <Analytics />
          <SpeedInsights />
        </AptabaseClientProvider>
      </body>
    </html>
  );
}