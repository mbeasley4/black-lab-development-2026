import "./globals.css";
import { inter, interTight } from "./fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AptabaseClientProvider from "@/providers/AptabaseClientProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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