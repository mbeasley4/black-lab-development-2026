import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageClose from "@/components/PageClose";
import QuickAnswerBlock from "@/components/QuickAnswerBlock";
import JsonLd from "@/components/JsonLd";
import FaqSection from "@/components/FaqSection";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import FounderByline from "@/components/FounderByline";

export const metadata: Metadata = {
  title: "Technical SEO Fulfillment for Agencies | Black Lab Dev",
  description:
    "White-label technical SEO execution for agencies and strategy firms — Core Web Vitals, structured data, technical audits, and migrations implemented in the code, not just recommended.",
  alternates: { canonical: "/partners/seo-fulfillment" },
  openGraph: {
    title: "Technical SEO Fulfillment for Agencies | Black Lab Dev",
    description:
      "White-label technical SEO execution for agencies and strategy firms — Core Web Vitals, structured data, technical audits, and migrations implemented in the code, not just recommended.",
    url: "/partners/seo-fulfillment",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Technical SEO Fulfillment for Agencies | Black Lab Dev",
    description:
      "White-label technical SEO execution for agencies — Core Web Vitals, structured data, audits, and migrations actually implemented.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://blacklabdev.com" },
    { "@type": "ListItem", position: 2, name: "Partners", item: "https://blacklabdev.com/partners" },
    { "@type": "ListItem", position: 3, name: "SEO Fulfillment", item: "https://blacklabdev.com/partners/seo-fulfillment" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Technical SEO Fulfillment for Agencies",
  serviceType: "Technical SEO",
  description:
    "White-label technical SEO execution for agencies and strategy firms — Core Web Vitals remediation, structured data, technical audits, and site migrations implemented in the client's codebase.",
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
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Marketing agencies, SEO strategists, and consulting firms",
  },
  areaServed: { "@type": "Country", name: "United States" },
  isPartOf: {
    "@type": "Service",
    name: "White-Label Web Development & SEO for Agencies",
    url: "https://blacklabdev.com/partners",
  },
  url: "https://blacklabdev.com/partners/seo-fulfillment",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is technical SEO fulfillment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Technical SEO fulfillment is the implementation half of SEO, done by an engineer on behalf of the firm that sold the strategy. The agency keeps research, content, and reporting; the fulfillment partner writes the code — Core Web Vitals remediation, structured data, crawlability and indexation fixes, internal linking at the template level, and migrations with redirect mapping. It exists because most SEO audits die at the handoff: the recommendations are correct, and nobody with repository access has the time or the experience to ship them.",
      },
    },
    {
      "@type": "Question",
      name: "Do you do keyword research and content strategy too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — deliberately. Research, content, and client reporting are your service line, and staying out of them is what makes me safe to put in front of your client's site. I take your audit, your keyword map, or your strategist's recommendations and implement them. If I disagree with a recommendation on technical grounds, you hear it from me privately before anything ships, not from your client afterward.",
      },
    },
    {
      "@type": "Question",
      name: "What technical SEO work do you actually implement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Core Web Vitals remediation (LCP, CLS, INP — image pipelines, render-blocking resources, font loading, third-party script budgets), JSON-LD structured data across page templates, crawlability and indexation fixes (robots, sitemaps, canonicals, pagination, faceted URL handling), internal linking and heading hierarchy at the template level, international and hreflang setups, JavaScript rendering and hydration issues, and full migrations with redirect mapping and post-launch monitoring.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work inside our client's existing site and CMS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — that's the majority of fulfillment work. WordPress, Shopify, Drupal, Next.js, Sanity, or a codebase nobody has documented in four years. I take repository or CMS access under your subcontractor agreement, work on a branch or a staging environment, and submit changes for your review before anything touches production. If the client's IT team requires their own review process, I work inside it.",
      },
    },
    {
      "@type": "Question",
      name: "How is SEO fulfillment priced and scheduled?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Two shapes. Project work — a technical audit with a prioritized remediation plan, a Core Web Vitals sprint, or a migration — is quoted as a fixed partner-rate fee you mark up. Ongoing implementation runs as a monthly retainer, typically starting around $1,500/month for a defined block of engineering hours against your roadmap. Audits usually turn around in about a week; remediation sprints run 2–4 weeks depending on the codebase.",
      },
    },
    {
      "@type": "Question",
      name: "Will your work be visible to our client?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Deliverables come to you unbranded, ready to drop into your agency's report template — audits, remediation logs, before/after Core Web Vitals numbers, and migration documentation. Communication routes through you by default, and I'll join a technical call under your agency's name and email if you'd rather have the engineer explain something directly. I never contact your client independently and never publish the engagement.",
      },
    },
  ],
};

const gaps = [
  {
    title: "The audit shipped and nothing happened",
    description:
      "Your strategist delivered 40 correct findings. Six months later, four are fixed. The client's developer is busy, the recommendations were written for someone who doesn't exist, and your retainer is being judged on results that were never implemented.",
  },
  {
    title: "Core Web Vitals aren't a content problem",
    description:
      "LCP, CLS, and INP are fixed in the image pipeline, the font loading strategy, the third-party script budget, and the render path. No amount of keyword work moves them, and 'ask the client's dev to look at it' is not a plan.",
  },
  {
    title: "Structured data written by hand, once",
    description:
      "Schema pasted into a page as static JSON goes stale the first time content changes. It belongs in the template, generated from the CMS, and validated on every build — which is engineering, not marketing.",
  },
  {
    title: "Migrations are where rankings go to die",
    description:
      "A replatform without a real redirect map, canonical strategy, and post-launch monitoring can undo years of your work in a week. That risk lands on your agency, whoever actually pushed the button.",
  },
];

const scope = [
  {
    title: "Core Web Vitals remediation",
    points: ["LCP, CLS, and INP diagnosis in the real render path", "Image pipeline, font loading, script budget", "Before/after field and lab data you can report"],
  },
  {
    title: "Structured data, in the template",
    points: ["JSON-LD generated from CMS content", "Organization, Service, FAQ, Article, Breadcrumb, Product", "Validated on build so it can't quietly rot"],
  },
  {
    title: "Crawlability & indexation",
    points: ["Robots, sitemaps, canonicals, pagination", "Faceted and parameter URL handling", "JavaScript rendering and hydration issues"],
  },
  {
    title: "Technical audits",
    points: ["Prioritized by impact and effort, not severity theater", "Written for an engineer to execute, not to fill pages", "Delivered unbranded for your report template"],
  },
  {
    title: "Migrations & replatforms",
    points: ["Full redirect mapping and canonical strategy", "Staged cutover with rollback plan", "Post-launch crawl and ranking monitoring"],
  },
  {
    title: "Ongoing implementation",
    points: ["Monthly engineering block against your roadmap", "Template-level internal linking and hierarchy", "Regression checks so fixes stay fixed"],
  },
];

const process = [
  {
    step: "01",
    title: "NDA & Access",
    body: "Signed first. You grant repository, hosting, analytics, and Search Console access under your subcontractor agreement — or your client's IT team does, through you. Nothing starts before the paperwork does.",
  },
  {
    step: "02",
    title: "Technical Audit",
    body: "I crawl and profile the real site, not a checklist. You get findings prioritized by impact against effort, each one written as something an engineer can actually execute, with the ones I'd do first called out plainly.",
  },
  {
    step: "03",
    title: "Scope Against Your Strategy",
    body: "Your strategist owns the roadmap. I map my implementation plan onto it and tell you where the technical order of operations should differ — for instance, fixing indexation before anyone spends budget on content that can't be crawled.",
  },
  {
    step: "04",
    title: "Implement on a Branch",
    body: "Work happens on a branch or staging environment, reviewed by you before it reaches production. Changes ship in reviewable batches with a written log, so you always know what changed and when — which matters when rankings move.",
  },
  {
    step: "05",
    title: "Measure & Report to You",
    body: "Before/after Core Web Vitals, crawl and index status, and a plain-language summary of what was implemented — unbranded, ready to paste into your client report. Then the next block of the roadmap.",
  },
];

export default function SeoFulfillmentPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <main className="w-full bg-black text-white">
      <PageHero
        label="Partners / SEO Fulfillment"
        title="Technical SEO That Actually Gets Implemented"
        titleHighlight="Actually Gets Implemented"
        description="You sell the strategy. I write the code that makes it real — Core Web Vitals, structured data, crawlability, and migrations, implemented in your client's codebase under your brand."
        backgroundImage="/images/services-hero-bg.png"
        badges={["Implementation only", "White-label reporting", "Works in any stack"]}
      />

      <QuickAnswerBlock
        question="What is technical SEO fulfillment for agencies?"
        answer="Technical SEO fulfillment is the execution half of an SEO engagement, performed by an engineer on behalf of the agency that sold the strategy. The agency keeps keyword research, content, and client reporting; the fulfillment partner implements the technical work in the client's codebase — Core Web Vitals remediation, JSON-LD structured data at the template level, crawlability and indexation fixes, and migrations with redirect mapping. It solves the most common failure in agency SEO: an audit full of correct recommendations that no one with repository access has the time or experience to ship."
      />

      {/* The gap */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
              The Gap
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Where Agency SEO Stalls
            </h2>
            <p className="text-slate-400 leading-relaxed">
              It&apos;s almost never the strategy. It&apos;s that the strategy needs an engineer and there isn&apos;t one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gaps.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="py-20 bg-slate-950/50 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
              What I Implement
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              The Work Your Roadmap Hands Off
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Research, content, and reporting stay yours. Everything below is code.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {scope.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-volt-500/20 bg-slate-900/50 p-8 transition-colors duration-200 hover:border-volt-400"
              >
                <h3 className="text-lg font-bold text-volt-400 mb-5">{item.title}</h3>
                <ul className="space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-slate-400">
                      <svg className="w-4 h-4 shrink-0 mt-0.5 text-volt-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              From Access to Report
            </h2>
          </div>
          <div className="space-y-12">
            {process.map((item) => (
              <div key={item.step} className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 items-start">
                <div className="text-5xl font-black font-mono text-volt-400/20 leading-none">{item.step}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        headingId="seo-fulfillment-faq-heading"
        faqs={faqSchema.mainEntity.map((faq) => ({ question: faq.name, answer: faq.acceptedAnswer.text }))}
      />

      {/* Related */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <h2 className="text-2xl font-bold text-white mb-8">Related</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/partners" className="rounded-lg border border-volt-500/30 bg-volt-500/10 px-6 py-3 text-sm font-semibold text-volt-400 hover:border-volt-400 hover:bg-volt-500/20 transition-all duration-200">
              Agency &amp; Partner Services →
            </Link>
            <Link href="/partners/white-label-web-development" className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200">
              White-Label Web Development →
            </Link>
            <Link href="/services/website-performance-optimization" className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200">
              Website Performance Optimization →
            </Link>
          </div>
        </div>
      </section>

      <FounderByline />

      <PageClose
        title="Send Me the Audit Nobody Has Implemented"
        bodyPrimary="Your findings, your roadmap, your client's stack — I'll tell you what it takes to actually ship it, at a partner rate you can mark up and report as your own service line."
        bodySecondary="NDA first if you need one. Strategy stays yours; I only write the code."
        secondaryHref="/partners"
        secondaryLabel="Back to Partner Services"
      />
      </main>
    </>
  );
}
