import type { Metadata } from "next";
import HomepageHero from "@/components/HomepageHero";
import ProofStats from "@/components/ProofStats";
import RevenueFramework from "@/components/RevenueFramework";
import Differentiation from "@/components/Differentiation";
import CoreServices from "@/components/CoreServices";
import Results from "@/components/Results";
import Process from "@/components/Process";
import PositioningStrike from "@/components/PositioningStrike";
import CallToAction from "@/components/CallToAction";
import JsonLd from "@/components/JsonLd";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "B2B Website Design & Pipeline Generation | Black Lab Dev",
  description:
    "Fast, scalable websites built to convert. Whether you're generating leads, driving sales, or supporting growth — we build websites that actually do their job.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "B2B Website Design & Pipeline Generation | Black Lab Dev",
    description:
      "Fast, scalable websites built to convert. Whether you're generating leads, driving sales, or supporting growth — we build websites that actually do their job.",
    url: "/",
  },
  twitter: {
    title: "B2B Website Design & Pipeline Generation | Black Lab Dev",
    description:
      "Fast, scalable websites built to convert. Whether you're generating leads, driving sales, or supporting growth — we build websites that actually do their job.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Black Lab Development",
  url: "https://blacklabdevelopment.com",
  logo: {
    "@type": "ImageObject",
    url: "https://blacklabdevelopment.com/images/blacklabdevelopment.png",
  },
  image: "https://blacklabdevelopment.com/images/homepage-hero-bg.png",
  description:
    "B2B website design and pipeline generation agency serving Cincinnati, OH and clients nationwide. Specializing in manufacturing websites, B2B design, and conversion optimization.",
  telephone: "+15135204362",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cincinnati",
    addressRegion: "OH",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.1031,
    longitude: -84.512,
  },
  areaServed: [
    { "@type": "City", name: "Cincinnati" },
    { "@type": "AdministrativeArea", name: "Ohio" },
    { "@type": "Country", name: "United States" },
  ],
  priceRange: "$$",
  founder: {
    "@type": "Person",
    name: "Michael Beasley",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+15135204362",
    contactType: "sales",
    availableLanguage: "en",
  },
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Black Lab Development",
  url: "https://blacklabdevelopment.com",
};

export default function Home() {
  return (
    <>
      <JsonLd data={[organizationSchema, websiteSchema]} />
      <div className="w-full mt-0">
        <HomepageHero />
        <ProofStats />
        <RevenueFramework />
        <Differentiation />
        <CoreServices />
        <Results />
        <Process />
        <PositioningStrike />
        <CallToAction />
      </div>
    </>
  );
}
