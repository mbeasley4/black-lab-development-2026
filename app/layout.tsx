import type { Metadata, Viewport } from "next";
import "./globals.css";
import { inter, interTight } from "./fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AptabaseClientProvider from "@/providers/AptabaseClientProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
        url: "/images/homepage-hero-bg.png",
        width: 1554,
        height: 867,
        alt: "Black Lab Development — B2B Website Design & Pipeline Generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/homepage-hero-bg.png"],
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
      <body className={`${inter.variable} ${interTight.variable} bg-[#0b0b0c] text-[#e5e7eb] antialiased`}>
        <AptabaseClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </AptabaseClientProvider>
      </body>
    </html>
  );
}