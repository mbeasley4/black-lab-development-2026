import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageClose from "@/components/PageClose";
import QuickAnswerBlock from "@/components/QuickAnswerBlock";
import LabFramework from "@/components/LabFramework";
import JsonLd from "@/components/JsonLd";
import FaqSection from "@/components/FaqSection";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";

export const metadata: Metadata = {
  title: "B2B Website Design | Built for Complex Buyers & Long Sales Cycles",
  description:
    "Custom B2B website design built for technical buyers, complex buying decisions, and higher-quality lead generation — no bloated builders, no shortcuts.",
  alternates: { canonical: "/services/b2b-website-design" },
  openGraph: {
    title: "B2B Website Design | Built for Complex Buyers & Long Sales Cycles",
    description:
      "Custom B2B website design built for technical buyers, complex buying decisions, and higher-quality lead generation — no bloated builders, no shortcuts.",
    url: "/services/b2b-website-design",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "B2B Website Design | Built for Complex Buyers & Long Sales Cycles",
    description:
      "Custom B2B website design built for technical buyers, complex buying decisions, and higher-quality lead generation.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://blacklabdev.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://blacklabdev.com/services" },
    { "@type": "ListItem", position: 3, name: "B2B Website Design", item: "https://blacklabdev.com/services/b2b-website-design" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why don't most B2B websites generate pipeline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most B2B sites are designed to impress, not convert. They lack clear next steps for buyers, speak with one voice to multiple stakeholders, and use generic positioning that doesn't differentiate from competitors. B2B buyers visit a site 5–8 times before reaching out — and most sites aren't built to answer the different questions each visit brings.",
      },
    },
    {
      "@type": "Question",
      name: "How is B2B website design different from consumer website design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "B2B websites must earn trust over weeks or months, across 3–7 people who all have veto power. Consumer websites optimize for impulse decisions. B2B websites need to address technical evaluators, economic buyers, and internal champions simultaneously — with content that holds up across a 3–9 month sales cycle.",
      },
    },
    {
      "@type": "Question",
      name: "What does a B2B website redesign process look like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It starts with buyer research and positioning to understand who actually buys from you. Then multi-stakeholder architecture maps each persona's path through the site. From there: conversion-first design, a clean build in Next.js or Astro, and measurement setup before launch so results can be tracked and improved.",
      },
    },
    {
      "@type": "Question",
      name: "What results can I expect from a B2B website redesign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Across B2B redesign engagements, average results include a 180% conversion rate lift, a 43% drop in bounce rate, and significant increases in qualified lead volume. One manufacturing client went from 3 to 27 qualified leads per month within 90 days of launch. Individual results vary based on current site performance and market.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with B2B companies outside of Cincinnati?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Black Lab Development is based in Cincinnati, OH, but works with B2B companies across the United States. The engagement is fully remote-friendly — you work directly with the engineer, not a project manager relay.",
      },
    },
    {
      "@type": "Question",
      name: "How much does B2B website design cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "B2B website design engagements at Black Lab Development typically range from $8,000 to $35,000 depending on scope, content complexity, and integration requirements. The investment starts with a free website audit so you know exactly what you're getting and why before committing to anything.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a B2B website redesign take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most B2B website redesigns run 8–14 weeks from signed contract to launch. Timeline depends on content readiness, stakeholder review cycles, and integration complexity. Every project starts with a clear timeline scoped before work begins — no surprises discovered mid-build.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "B2B Website Design",
  serviceType: "Web Design",
  description:
    "Custom B2B website design built for technical buyers, complex buying decisions, and higher-quality lead generation — no bloated builders, no shortcuts.",
  provider: {
    "@type": "Organization",
    name: "Black Lab Development",
    url: "https://blacklabdev.com",
    telephone: "+15135204362",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cincinnati",
      addressRegion: "OH",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "Country", name: "United States" },
  url: "https://blacklabdev.com/services/b2b-website-design",
};

const failures = [
  {
    title: "Built for visitors, not buyers",
    description:
      "Most B2B sites are designed to impress, not convert. They look great in a demo and fall flat in a sales cycle — because no one mapped the content to how buyers actually evaluate vendors.",
  },
  {
    title: "No clear next step",
    description:
      "When a VP of Engineering lands on your page at 10pm doing vendor research, what happens? If the answer is 'they bounce,' your CTA architecture isn't built for B2B buying behavior.",
  },
  {
    title: "One voice for many stakeholders",
    description:
      "B2B purchases involve 3–7 people. Your site needs to speak to the technical evaluator, the economic buyer, and the champion who has to sell it internally — simultaneously.",
  },
  {
    title: "Generic positioning",
    description:
      "If your homepage could belong to any of your 10 competitors, you don't have positioning — you have a placeholder. Buyers can't choose what they can't differentiate.",
  },
];

const approach = [
  {
    step: "01",
    title: "Buyer Research & Positioning",
    body: "I start by understanding who actually buys from you — their role, their fears, their evaluation criteria. Then I build messaging that speaks directly to that person, not everyone.",
  },
  {
    step: "02",
    title: "Multi-Stakeholder Architecture",
    body: "I map your site to the buying committee. Each persona gets a clear path: the technical evaluator sees specs and integrations, the executive sees ROI and risk mitigation, the champion sees talking points.",
  },
  {
    step: "03",
    title: "Conversion-First Design",
    body: "Every page has a conversion goal. CTAs are placed based on buyer intent signals, not visual aesthetics. Forms are designed to reduce friction, not collect every field your CRM wants.",
  },
  {
    step: "04",
    title: "Clean, Fast Build",
    body: "I build in Next.js or Astro — no page builders, no bloated themes. Core Web Vitals scores that hold under real traffic. Code you can hand off to an internal team without needing a decoder ring.",
  },
  {
    step: "05",
    title: "Measurement & Optimization",
    body: "I set up conversion tracking before launch, not after. Heatmaps, session recordings, and funnel analytics so I can measure what changed — and keep improving it.",
  },
];

const results = [
  { metric: "+180%", label: "Conversion Rate", detail: "Average lift across B2B website redesigns" },
  { metric: "9x", label: "Qualified Leads", detail: "3 → 27 qualified leads/month, manufacturing client" },
  { metric: "43%", label: "Bounce Rate Drop", detail: "After messaging and UX realignment" },
];

export default function B2BWebsiteDesignPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <main className="w-full bg-black text-white">
      <PageHero
        label="B2B Website Design Agency"
        title="Websites Designed for How B2B Buyers Actually Buy"
        titleHighlight="B2B Buyers Actually Buy"
        description="B2B buyers are skeptical, slow, and involve multiple people. I build websites that work for all of them — with conversion architecture engineered for long sales cycles and complex decisions."
        backgroundImage="/images/services-hero-bg.png"
        badges={["Long sales cycles", "Multi-stakeholder design", "Pipeline-focused"]}
      />

      <QuickAnswerBlock
        question="What is B2B website design?"
        answer="B2B website design is the process of building websites optimized for long sales cycles, multiple stakeholders, and complex buying decisions. Unlike consumer websites, B2B sites must earn trust over 3–9 months across 6–8 decision-makers with different roles, questions, and objections. An effective B2B website converts technical evaluators, economic buyers, and internal champions simultaneously — with conversion architecture engineered for how B2B buyers actually evaluate vendors."
      />

      {/* What makes B2B different */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
                B2B is Different
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Designed for Long Sales Cycles and Multiple Stakeholders
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Consumer websites optimize for impulse. B2B websites have to earn trust over weeks or months, across multiple people who all have veto power. That requires a completely different design philosophy.
              </p>
              <p className="text-slate-400 leading-relaxed">
                A B2B buyer visits your site 5–8 times before reaching out. Each visit is a different person, a different question, a different stage. Your site needs to answer all of them — without overwhelming the one who just landed for the first time.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { label: "Avg. B2B buying committee size", value: "6.8 people" },
                { label: "Vendor sites reviewed per purchase", value: "4–7" },
                { label: "Avg. B2B sales cycle", value: "3–9 months" },
                { label: "Decision influenced by website content", value: "67%" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="text-slate-400 text-sm">{stat.label}</span>
                  <span className="text-cyan-400 font-bold text-lg">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common failures */}
      <section className="py-20 bg-slate-950/50 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
              Common Failures
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Most B2B Websites Don&apos;t Generate Pipeline
            </h2>
            <p className="text-slate-400 leading-relaxed">
              These aren&apos;t hypothetical problems. They&apos;re what I find on almost every B2B site I audit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {failures.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              The Revenue-Driven B2B Website Process
            </h2>
          </div>
          <div className="space-y-12">
            {approach.map((item) => (
              <div key={item.step} className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 items-start">
                <div className="text-5xl font-black font-mono text-cyan-400/20 leading-none">{item.step}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-slate-950/50 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
              Results
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What Changes After a Revenue-Driven Redesign
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-800/40 rounded-2xl overflow-hidden border border-slate-700/40">
            {results.map((r) => (
              <div key={r.label} className="bg-slate-900 px-10 py-10 text-center">
                <div className="text-5xl font-black bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">{r.metric}</div>
                <div className="text-lg font-semibold text-white mb-2">{r.label}</div>
                <div className="text-sm text-slate-400">{r.detail}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-600 mt-4 text-center">
            Metrics represent client results across B2B redesign engagements. Individual results vary.
          </p>
        </div>
      </section>

      <LabFramework />

      <FaqSection
        headingId="b2b-faq-heading"
        faqs={faqSchema.mainEntity.map((faq) => ({ question: faq.name, answer: faq.acceptedAnswer.text }))}
      />

      {/* Related services */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <h2 className="text-2xl font-bold text-white mb-8">Related Services</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/services/conversion-optimization" className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-200">
              Website Conversion Optimization →
            </Link>
            <Link href="/services/manufacturing-website-design" className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200">
              Manufacturing Website Design →
            </Link>
          </div>
        </div>
      </section>

      <PageClose
        title="Ready to Build a Website That Generates Pipeline?"
        bodyPrimary="Start with a website audit. I'll review your current site against the B2B buyer journey and show you exactly where pipeline is leaking — and how to fix it."
        bodySecondary="No proposals to review. No 40-slide decks. Just a direct assessment of what's working, what isn't, and what I'd do about it."
        secondaryHref="/case-studies"
        secondaryLabel="View Case Studies"
      />
      </main>
    </>
  );
}
