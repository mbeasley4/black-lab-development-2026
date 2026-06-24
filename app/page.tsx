import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import HomepageHero from "@/components/HomepageHero";
import ProofStats from "@/components/ProofStats";
import RevenueFramework from "@/components/RevenueFramework";
import Differentiation from "@/components/Differentiation";
import CoreServices from "@/components/CoreServices";
import Results from "@/components/Results";
import Process from "@/components/Process";
import LabFramework from "@/components/LabFramework";
import PositioningStrike from "@/components/PositioningStrike";
import CallToAction from "@/components/CallToAction";
import FounderStrip from "@/components/FounderStrip";
import Testimonial from "@/components/Testimonial";
import FaqSection from "@/components/FaqSection";
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
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "B2B Website Design & Pipeline Generation | Black Lab Dev",
    description:
      "Fast, scalable websites built to convert. Whether you're generating leads, driving sales, or supporting growth — we build websites that actually do their job.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://blacklabdev.com/#business",
  name: "Black Lab Development",
  url: "https://blacklabdev.com",
  logo: {
    "@type": "ImageObject",
    url: "https://blacklabdev.com/images/blacklabdevelopment.png",
  },
  image: "https://blacklabdev.com/images/homepage-hero-bg.png",
  description:
    "B2B website design and pipeline generation agency serving Cincinnati, OH and clients nationwide. Specializing in manufacturing websites, B2B design, and conversion optimization.",
  telephone: "+15135204362",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cincinnati",
    addressRegion: "OH",
    postalCode: "45202",
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
    "@id": "https://blacklabdev.com/about#michael-beasley",
    name: "Michael Beasley",
  },
  employee: {
    "@type": "Person",
    "@id": "https://blacklabdev.com/about#michael-beasley",
    name: "Michael Beasley",
    jobTitle: "Senior Web Developer & Founder",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+15135204362",
    contactType: "sales",
    availableLanguage: "en",
    contactOption: "TollFree",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "B2B Web Design & Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "B2B Website Design",
          url: "https://blacklabdev.com/services/b2b-website-design",
          description:
            "Custom B2B website design built for technical buyers, complex buying decisions, and higher-quality lead generation.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Conversion Optimization",
          url: "https://blacklabdev.com/services/conversion-optimization",
          description:
            "Audit, diagnose, and fix why your site isn't generating qualified leads — measured before and after with real data.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Manufacturing Website Design",
          url: "https://blacklabdev.com/services/manufacturing-website-design",
          description:
            "Industry-specific website design for manufacturers — built to generate RFQs from engineers and procurement teams.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Web Development",
          url: "https://blacklabdev.com/services",
          description:
            "Custom website and web application development — WordPress, headless CMS, Next.js, or fully custom.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Technical SEO & Performance",
          url: "https://blacklabdev.com/services",
          description:
            "Core Web Vitals, technical SEO remediation, and performance optimization with measurable results.",
        },
      },
    ],
  },
  sameAs: ["https://www.linkedin.com/company/blacklabdevelopment/"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://blacklabdev.com/#website",
  name: "Black Lab Development",
  url: "https://blacklabdev.com",
  publisher: { "@type": "Organization", "@id": "https://blacklabdev.com/#business" },
  inLanguage: "en-US",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a typical project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects launch in 6–10 weeks. Smaller optimization engagements (conversion audits, performance work) can be completed in 2–4 weeks. Timelines depend on scope and content readiness — we'll give you an honest estimate before anything starts.",
      },
    },
    {
      "@type": "Question",
      name: "What's the typical investment for a project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom website builds typically start at $8,000–$15,000. Conversion optimization and performance engagements start at $3,000–$6,000. Every project is scoped based on your goals, not a one-size-fits-all package. We'll provide a clear, fixed quote upfront.",
      },
    },
    {
      "@type": "Question",
      name: "What do you need from me to get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A conversation about your business goals, your current pain points, and access to your existing site (if applicable). We handle discovery, strategy, and technical planning — you don't need a brief, wireframes, or a spec document to get started.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with companies outside of Cincinnati?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. While we're based in Cincinnati, OH, we work with B2B and manufacturing companies across the United States. Our process is fully remote-friendly, with direct communication between you and the engineer doing the work.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We don't disappear after go-live. Every project includes a post-launch support window, performance monitoring, and a handoff your team can actually maintain. Ongoing retainers for optimization, content, and technical support are available if needed.",
      },
    },
    {
      "@type": "Question",
      name: "How is working with you different from a typical agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You work directly with a senior engineer — not a project manager relaying messages or a junior developer assigned after the sale. Fewer handoffs means faster decisions, fewer gaps, and better outcomes. Every engagement involves direct communication and full accountability.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={[organizationSchema, websiteSchema, faqSchema]} />
      <div className="w-full mt-0">
        <HomepageHero />
        <ProofStats />
        <RevenueFramework />
        <Differentiation />
        <CoreServices />
        <Results />
        <Testimonial />
        <Process />
        <FounderStrip />
        <LabFramework />

        <FaqSection
          faqs={faqSchema.mainEntity.map((faq) => ({ question: faq.name, answer: faq.acceptedAnswer.text }))}
        />

        <PositioningStrike />
        <CallToAction />
      </div>
    </>
  );
}
