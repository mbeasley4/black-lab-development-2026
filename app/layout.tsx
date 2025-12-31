import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AptabaseClientProvider from "@/providers/AptabaseClientProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">
        <AptabaseClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AptabaseClientProvider>
      </body>
    </html>
  );
}