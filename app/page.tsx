import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import HomepageHero from "@/components/HomepageHero";
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
  title: "Website Design for Small Businesses & Agencies | Black Lab Dev",
  description:
    "No ghosting. No junior handoffs. Just fast, conversion-built websites — direct from a senior engineer, for small businesses and white-label agency partners.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Website Design for Small Businesses & Agencies | Black Lab Dev",
    description:
      "No ghosting. No junior handoffs. Just fast, conversion-built websites — direct from a senior engineer, for small businesses and white-label agency partners.",
    url: "/",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Website Design for Small Businesses & Agencies | Black Lab Dev",
    description:
      "No ghosting. No junior handoffs. Just fast, conversion-built websites — direct from a senior engineer, for small businesses and white-label agency partners.",
    images: [DEFAULT_OG_IMAGE.url],
  },
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
        text: "Most projects launch in 6–10 weeks. Smaller optimization engagements (conversion audits, performance work) can be completed in 2–4 weeks. Timelines depend on scope and content readiness — I'll give you an honest estimate before anything starts.",
      },
    },
    {
      "@type": "Question",
      name: "What's the typical investment for a project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom website builds typically start at $4,000–$9,000. Conversion optimization and performance engagements start at $1,800–$4,000. Every project is scoped based on your goals, not a one-size-fits-all package. I'll provide a clear, fixed quote upfront.",
      },
    },
    {
      "@type": "Question",
      name: "What do you need from us to get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A conversation about your business goals, your current pain points, and access to your existing site (if applicable). I handle discovery, strategy, and technical planning — you don't need a brief, wireframes, or a spec document to get started.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with companies outside of Cincinnati?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. While I'm based in Cincinnati, OH, I work with small businesses and agency partners nationwide. My process is fully remote-friendly, with direct communication between you and me — the person actually doing the work.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I don't disappear after go-live. Every project includes a post-launch support window, performance monitoring, and a handoff your team can actually maintain. Ongoing retainers for optimization, content, and technical support are available if needed.",
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
      <JsonLd data={[websiteSchema, faqSchema]} />
      <div className="w-full mt-0">
        <HomepageHero />
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
