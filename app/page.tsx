import type { Metadata } from "next";
import Link from "next/link";
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
      name: "What does Black Lab Development do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Black Lab Development is a B2B website design and pipeline generation agency based in Cincinnati, OH. We build custom websites, optimize conversions, and design digital experiences for B2B companies — with a focus on manufacturing, industrial, and technical buyers.",
      },
    },
    {
      "@type": "Question",
      name: "Who is Black Lab Development best for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in B2B companies — particularly manufacturers, industrial service providers, and technical organizations — that need websites built for complex buying decisions, multiple stakeholders, and longer sales cycles.",
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
      name: "What makes Black Lab Development different from a typical web agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You work directly with a senior engineer — not a project manager relaying messages or a junior developer assigned after the sale. Every engagement involves direct communication, hands-on technical leadership, and full accountability for the outcome.",
      },
    },
    {
      "@type": "Question",
      name: "What platforms do you build on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build primarily on Next.js, WordPress, and Astro — chosen based on the project's requirements, not a preferred stack. We also work with headless CMS platforms, Shopify, and custom architectures when the problem calls for it.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with Black Lab Development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with a free website audit. Share a bit about your project through our contact form at blacklabdev.com/contact and you'll hear back directly to discuss fit, goals, and next steps.",
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
        <Process />
        <LabFramework />

        {/* FAQ section — AI-extractable, structured for answer engines */}
        <section className="w-full py-24 border-t border-slate-800/60 bg-black" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-375 px-6">
            <div className="max-w-2xl mb-14">
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
                Common Questions
              </span>
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-white">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-3xl space-y-4">
              {faqSchema.mainEntity.map((faq) => (
                <div key={faq.name} className="rounded-xl border border-slate-800 bg-slate-900/50 p-7">
                  <h3 className="text-base font-semibold text-white mb-3">{faq.name}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-cyan-500 text-black px-7 py-3.5 text-sm font-semibold hover:bg-cyan-400 transition-colors duration-200 shadow-lg shadow-cyan-500/25"
              >
                Start with a Free Audit →
              </Link>
            </div>
          </div>
        </section>

        <PositioningStrike />
        <CallToAction />
      </div>
    </>
  );
}
