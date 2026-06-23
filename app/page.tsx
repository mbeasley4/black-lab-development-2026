import type { Metadata } from "next";
import Link from "next/link";
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
        <section className="w-full py-28 border-t border-cyan-500/20 relative overflow-hidden" aria-labelledby="faq-heading">
          {/* Hexagonal grid background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hex-grid" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
                  <path d="M28 2 L50 18 L50 50 L28 66 L6 50 L6 18 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400" />
                  <path d="M28 34 L50 50 L50 82 L28 98 L6 82 L6 50 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hex-grid)" />
            </svg>
          </div>

          {/* Ambient glows */}
          <div className="absolute top-0 left-1/4 w-125 h-125 bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-blue-500/6 rounded-full blur-[100px] pointer-events-none" />

          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" />

          <div className="mx-auto max-w-375 px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
                Common Questions
              </span>
              <h2 id="faq-heading" className="text-3xl md:text-5xl font-bold text-white mb-4">
                Frequently Asked{" "}
                <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]">
                  Questions
                </span>
              </h2>
              <div className="mt-4 mx-auto w-20 h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-800/40">
              {faqSchema.mainEntity.map((faq, i) => (
                <div
                  key={faq.name}
                  className="group relative bg-slate-950/80 hover:bg-cyan-500/5 p-8 md:p-10 transition-colors duration-300 overflow-hidden"
                >
                  {/* Background number */}
                  <div className="absolute top-3 right-5 text-[5rem] font-black font-mono text-cyan-500/3 group-hover:text-cyan-500/8 transition-colors duration-500 leading-none select-none pointer-events-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="shrink-0 mt-0.5 flex h-7 w-7 items-center justify-center rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold">
                        Q
                      </span>
                      <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300 leading-snug">
                        {faq.name}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed pl-11">{faq.acceptedAnswer.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-cyan-500 text-black px-8 py-4 text-sm font-semibold hover:bg-cyan-400 transition-colors duration-200 shadow-lg shadow-cyan-500/25"
              >
                Start with a Free Audit →
              </Link>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" />
        </section>

        <PositioningStrike />
        <CallToAction />
      </div>
    </>
  );
}
