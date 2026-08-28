import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageClose from "@/components/PageClose";
import QuickAnswerBlock from "@/components/QuickAnswerBlock";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import FounderByline from "@/components/FounderByline";

export const metadata: Metadata = {
  title: "SaaS & Technology Web Development",
  description:
    "Web development for SaaS and technology companies — product-led marketing sites, custom integrations, and conversion architecture that turns traffic into signups.",
  alternates: { canonical: "/industries/technology" },
  openGraph: {
    title: "SaaS & Technology Web Development",
    description:
      "Web development for SaaS and technology companies — product-led marketing sites, custom integrations, and conversion architecture that turns traffic into signups.",
    url: "/industries/technology",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "SaaS & Technology Web Development",
    description:
      "Web development for SaaS and technology companies — product-led marketing sites, custom integrations, and conversion architecture that turns traffic into signups.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://blacklabdev.com" },
    { "@type": "ListItem", position: 2, name: "Industries", item: "https://blacklabdev.com/industries" },
    { "@type": "ListItem", position: 3, name: "SaaS & Technology", item: "https://blacklabdev.com/industries/technology" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SaaS & Technology Web Development",
  serviceType: "Web Development",
  description:
    "Web development for SaaS and technology companies — product-led marketing sites, custom integrations, and conversion architecture that turns traffic into signups.",
  areaServed: ["Cincinnati, OH", "United States"],
  provider: {
    "@type": "Organization",
    "@id": "https://blacklabdev.com/#business",
    name: "Black Lab Development",
    url: "https://blacklabdev.com",
  },
  audience: {
    "@type": "Audience",
    audienceType: "SaaS companies, technology startups, software firms, product teams",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes an effective SaaS marketing website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An effective SaaS marketing site converts the right traffic into trial signups or demos — not just visitors. That requires clear positioning (who it's for, what problem it solves, why now), performance (under 2s load time), social proof tied to specific outcomes, and a conversion path that reduces friction at every step. Most SaaS sites fail because they describe features instead of outcomes.",
      },
    },
    {
      "@type": "Question",
      name: "Should a SaaS company use Next.js or WordPress for their marketing site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Next.js is the better choice for most SaaS marketing sites — faster performance, better developer experience, and a modern tech stack that aligns with engineering teams. WordPress can work if marketing needs total content control without developer involvement. The choice depends on who will own the site post-launch and how often content changes. I build both and recommend based on your actual workflow.",
      },
    },
    {
      "@type": "Question",
      name: "What custom integrations do SaaS websites typically need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common integrations for SaaS marketing sites include: CRM (HubSpot, Salesforce), analytics (GA4, Segment, Mixpanel), live chat (Intercom, Drift), product-led signup flows, demo scheduling (Calendly, Chili Piper), and feature flag services for A/B testing. Most of these are API-based and manageable — the key is scoping them correctly before build rather than bolting them on afterward.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle technical debt on an existing SaaS website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Technical debt on marketing sites typically shows up as slow load times, unmaintainable component structures, or inconsistent design patterns that make every content update fragile. I audit what's there, categorize debt by impact, and address it incrementally — stabilizing what's costing performance or developer time first, without requiring a full rebuild.",
      },
    },
    {
      "@type": "Question",
      name: "What should a SaaS website's homepage accomplish?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A SaaS homepage needs to accomplish four things in the first scroll: (1) tell the right person they're in the right place, (2) communicate the primary benefit clearly, (3) establish credibility, and (4) give them a low-friction next step. Everything else is secondary. Most SaaS homepages try to do too much and accomplish none of these well.",
      },
    },
  ],
};

const faqs = faqSchema.mainEntity.map((f) => ({
  question: f.name,
  answer: f.acceptedAnswer.text,
}));

const deliverables = [
  {
    title: "Product-Led Marketing Sites",
    description: "Marketing websites built around your product's value — not generic feature lists. Optimized for trial signups, demos, and qualified pipeline.",
  },
  {
    title: "Performance Architecture",
    description: "Sub-2s load times, optimal Core Web Vitals, and a technical foundation that doesn't become a liability as traffic grows.",
  },
  {
    title: "CRM & Analytics Integration",
    description: "HubSpot, Salesforce, Segment, Mixpanel — connected correctly, so attribution and pipeline data are actually reliable.",
  },
  {
    title: "A/B Testing Infrastructure",
    description: "Feature flags, experimentation tooling, and the technical setup that lets growth teams test without waiting on engineering.",
  },
  {
    title: "Developer Documentation Sites",
    description: "Documentation that developers actually use — well-structured, searchable, and built to support adoption and reduce support load.",
  },
  {
    title: "Headless CMS Architecture",
    description: "Sanity or Contentful setups that give marketing teams editorial control without touching code — and don't become technical debt.",
  },
];

const clients = [
  {
    name: "Whole30",
    detail: "Large-scale Next.js + Sanity platform rebuild handling high-traffic consumer health content with measurable performance improvements.",
  },
  {
    name: "Enduir Cybersecurity",
    detail: "Technical credibility-first website for a cybersecurity company serving enterprise and government buyers.",
  },
  {
    name: "Luma Financial Technologies",
    detail: "Complex platform web presence for a fintech company with demanding performance and high-trust requirements.",
  },
];

export default function TechnologyIndustryPage() {
  return (
    <main className="w-full bg-[#0b0b0c] text-white">
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />

      <PageHero
        label="SaaS & Technology"
        title="Websites Built for Signups, Not Just Sessions"
        titleHighlight="Signups, Not Just Sessions"
        description="SaaS websites have one job: convert the right traffic into trials, demos, and qualified pipeline. Every design decision, every integration, every performance trade-off should serve that goal."
        backgroundImage="/images/background-bld.png"
        badges={["Product-led growth", "Sub-2s load times", "CRM & analytics integration"]}
      />

      <QuickAnswerBlock
        question="What makes an effective SaaS marketing website?"
        answer="An effective SaaS marketing site converts the right traffic into trial signups or demos — not just visitors. That requires clear positioning, fast performance (under 2s), social proof tied to specific outcomes, and a conversion path with minimal friction. Most SaaS sites fail because they describe features instead of outcomes. Black Lab Development builds SaaS and technology websites with the architecture and conversion focus that actually drives growth."
      />

      {/* What We Deliver */}
      <section className="py-20 border-b border-slate-800/50">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="mb-12">
            <span className="inline-block mb-3 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">What I Build</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Built for Product-Led Growth</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverables.map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-slate-800/60 bg-slate-900/40 hover:border-volt-500/30 hover:bg-volt-500/5 transition-all duration-300">
                <div className="w-6 h-px bg-volt-500 mb-4" />
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Proof */}
      <section className="py-20 border-b border-slate-800/50 bg-slate-950/50">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="mb-12">
            <span className="inline-block mb-3 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">Client Proof</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Technology Companies Worked With</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {clients.map((c) => (
              <div key={c.name} className="p-6 rounded-xl border border-slate-800/60 bg-slate-900/30">
                <p className="text-sm font-semibold text-volt-500 mb-2">{c.name}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-16 border-b border-slate-800/50">
        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col justify-between gap-4 p-8 rounded-xl border border-volt-500/20 bg-volt-500/5">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold mb-1">Related Service</p>
                <h3 className="text-base font-bold text-white">Custom Web Development</h3>
                <p className="text-sm text-slate-400 mt-1">Full-stack builds, API integrations, and custom tooling for technical teams.</p>
              </div>
              <Link
                href="/services/custom-web-development"
                className="inline-flex items-center gap-2 text-sm font-bold text-volt-500 hover:text-volt-400 transition-colors"
              >
                View Service
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="flex flex-col justify-between gap-4 p-8 rounded-xl border border-slate-800/60 bg-slate-900/30">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-slate-500 font-semibold mb-1">Related Service</p>
                <h3 className="text-base font-bold text-white">Website Performance Optimization</h3>
                <p className="text-sm text-slate-400 mt-1">Core Web Vitals, load time, and performance audits for existing platforms.</p>
              </div>
              <Link
                href="/services/website-performance-optimization"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors"
              >
                View Service
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} headingId="technology-faq" />

      <FounderByline />

      <PageClose
        title="Ready to Build a SaaS Website That Actually Converts?"
        bodyPrimary="Most SaaS marketing sites describe the product well enough. The problem is they don't convert visitors into users efficiently — and they accumulate technical debt that makes every update slower."
        bodySecondary="Schedule a discovery call. I'll talk through the conversion and performance gaps costing you signups."
        secondaryHref="/services/custom-web-development"
        secondaryLabel="View Custom Development"
      />
    </main>
  );
}
