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
  title: "Custom Web Development | Next.js, Headless & WordPress",
  description:
    "Bespoke web development in Next.js, headless CMS, and WordPress. Built for businesses that have outgrown templates — clean architecture, no bloat, built to last.",
  alternates: { canonical: "/services/custom-web-development" },
  openGraph: {
    title: "Custom Web Development | Next.js, Headless & WordPress",
    description:
      "Bespoke web development in Next.js, headless CMS, and WordPress. Built for businesses that have outgrown templates — clean architecture, no bloat, built to last.",
    url: "/services/custom-web-development",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Custom Web Development | Next.js, Headless & WordPress",
    description:
      "Bespoke web development in Next.js, headless CMS, and WordPress — built for businesses that have outgrown templates.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://blacklabdev.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://blacklabdev.com/services" },
    { "@type": "ListItem", position: 3, name: "Custom Web Development", item: "https://blacklabdev.com/services/custom-web-development" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Web Development",
  serviceType: "Web Development",
  description:
    "Bespoke web development in Next.js, headless CMS, and WordPress for businesses that need more than a template.",
  provider: {
    "@type": "Organization",
    "@id": "https://blacklabdev.com/#business",
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
  url: "https://blacklabdev.com/services/custom-web-development",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When do I actually need custom web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom development makes sense when a template or theme is forcing you to compromise on performance, functionality, or maintainability. Specifically: when you need integrations that no plugin handles cleanly, when your site is too slow to fix without a rebuild, when your team can't make updates without breaking something, or when you've outgrown the constraints of a page builder.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies do you use for custom web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build primarily in Next.js (React) for performance-critical sites and web apps, WordPress with custom themes for content-heavy sites that need editorial flexibility, and headless CMS setups (Sanity, Contentful) when teams need structured content across multiple channels. The technology choice is driven by your actual requirements, not what we prefer to work in.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a custom web development project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most custom web builds run 6–14 weeks from signed contract to launch, depending on scope, content complexity, and integration requirements. We scope accurately upfront and maintain a clear timeline throughout — no surprise delays discovered mid-project.",
      },
    },
    {
      "@type": "Question",
      name: "Can you rebuild an existing site without starting from scratch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually, yes. Many projects are incremental improvements to existing systems rather than full rebuilds. We audit what's there first, identify what's worth keeping, and only rebuild what's causing problems. Starting from scratch is sometimes right — but it's never the default recommendation.",
      },
    },
    {
      "@type": "Question",
      name: "Will my team be able to maintain the site after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's a design requirement, not an afterthought. Every project includes a content management layer your team can actually use — whether that's a headless CMS, WordPress, or a purpose-built admin interface. We document what we build and hand it off in a state your team can own.",
      },
    },
    {
      "@type": "Question",
      name: "How much does custom web development cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom web development projects at Black Lab Development range from $12,000 for focused rebuilds to $60,000+ for complex platforms with custom integrations, multiple audience types, and extensive content systems. Every engagement starts with a technical review of your current setup — scope and pricing reflect what you actually need, not a standard package.",
      },
    },
    {
      "@type": "Question",
      name: "Should I choose custom development or WordPress?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WordPress is the right choice when editorial flexibility and content updates are the priority — and when a custom-built theme (not a page builder) handles the presentation layer. Custom Next.js or headless development makes sense when performance, complex integrations, or multi-channel content delivery are requirements. The decision is driven by what your project actually needs, not by a preferred technology stack.",
      },
    },
  ],
};

const reasons = [
  {
    problem: "Templates impose a ceiling",
    solution:
      "Templates and themes are built for the average use case. The moment your requirements go outside that box — custom layouts, complex integrations, performance targets — you're fighting the tool instead of using it.",
  },
  {
    problem: "Page builders compound the debt",
    solution:
      "Every page builder block added is a dependency on a third-party vendor's roadmap. They generate excessive markup, load unnecessary CSS and JavaScript, and become progressively harder to maintain.",
  },
  {
    problem: "Off-the-shelf plugins don't fit cleanly",
    solution:
      "Plugin-heavy setups introduce security surface area, performance costs, and update fragility. Clean custom code does what you need — and nothing else.",
  },
  {
    problem: "Generic architecture doesn't scale",
    solution:
      "A site built without a clear architecture plan becomes a liability when traffic grows, teams change, or requirements evolve. Custom builds are designed for where you're going, not just where you are.",
  },
];

const stack = [
  {
    name: "Next.js / React",
    use: "Performance-critical marketing sites, web apps, and platforms where load time and SEO are business requirements — not nice-to-haves.",
  },
  {
    name: "WordPress (Custom)",
    use: "Content-heavy sites where editorial teams need flexibility. No page builders, no prebuilt themes — custom blocks and custom themes built for your specific requirements.",
  },
  {
    name: "Headless CMS",
    use: "Structured content that needs to live in multiple surfaces. Sanity and Contentful as the content layer, with a frontend decoupled from the CMS's presentation constraints.",
  },
  {
    name: "Custom Integrations",
    use: "CRM connections (HubSpot, Salesforce), ERP data pipelines, third-party APIs, and internal systems — built with clean, documented code you can hand off.",
  },
];

const process = [
  {
    step: "01",
    title: "Scope & Architecture",
    body: "We start by understanding the actual requirements — not what sounds good in a kickoff presentation. Data structures, integrations, content model, and performance targets are defined before a line of code is written.",
  },
  {
    step: "02",
    title: "Technology Decision",
    body: "The stack is chosen to fit the project, not the other way around. Next.js when performance and SEO are critical. WordPress when editorial control is the priority. Headless when content needs to live in multiple surfaces.",
  },
  {
    step: "03",
    title: "Component Architecture",
    body: "A clean component system before any page work. Reusable, documented, and built for the team that will eventually maintain this — not for the developer who built it.",
  },
  {
    step: "04",
    title: "Build & Integrate",
    body: "Clean code, no shortcuts. Every integration is scoped against real API documentation, not assumed to work. CMS setup, forms, analytics, and third-party connections are tested under real conditions.",
  },
  {
    step: "05",
    title: "Performance & Launch",
    body: "Core Web Vitals, image optimization, caching strategy, and load testing before launch. Monitoring in place. Documentation handed off. A real go-live plan, not a fingers-crossed deploy.",
  },
];

const useCases = [
  "B2B companies whose current site can't be optimized without a rebuild",
  "Businesses with custom integration requirements no plugin handles cleanly",
  "Teams who've inherited a plugin-heavy WordPress build that's become unmaintainable",
  "Companies scaling past what a shared-template CMS can support",
  "Organizations that need content in multiple channels from one source of truth",
  "SaaS and software companies who need a marketing site that matches product quality",
];

export default function CustomWebDevelopmentPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <main className="w-full bg-black text-white">
        <PageHero
          label="Custom Web Development"
          title="Custom Web Development When Templates Won&apos;t Cut It"
          titleHighlight="Templates Won&apos;t Cut It"
          description="Bespoke builds in Next.js, headless CMS, and WordPress — for businesses that have outgrown the ceiling of themes, page builders, and plugin-heavy setups."
          backgroundImage="/images/services-hero-bg.png"
          badges={["No page builders", "Clean architecture", "Built to hand off"]}
        />

        <QuickAnswerBlock
          question="What is custom web development?"
          answer="Custom web development means building a website or web application from purpose-written code — without relying on page builders, pre-built themes, or plugin-heavy setups that constrain performance and maintainability. It's the right choice when a project's requirements exceed what an off-the-shelf platform can deliver: custom integrations, specific performance targets, or long-term maintainability by an internal team. Platforms include Next.js, headless CMS (Sanity, Contentful), and custom WordPress themes."
        />

        {/* Hero CTAs */}
        <section className="border-b border-slate-800 bg-slate-950/50">
          <div className="mx-auto max-w-375 px-6 py-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-volt-500 text-black px-7 py-3.5 text-sm font-semibold hover:bg-volt-400 transition-colors duration-200 shadow-lg shadow-volt-500/25"
            >
              Start a Project →
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-md border-2 border-volt-500/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-volt-500/10 hover:border-volt-400 transition-all duration-200"
            >
              View Work →
            </Link>
          </div>
        </section>

        {/* Why custom */}
        <section className="py-20 border-b border-slate-800">
          <div className="mx-auto max-w-375 px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
                  Why Custom
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Templates Stop Working When Your Requirements Don&apos;t Fit the Box
                </h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Off-the-shelf themes and page builders work fine until they don&apos;t. The moment you need something outside the template&apos;s design — a custom layout, a clean integration, specific performance targets — you start fighting the tool instead of building with it.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Custom development means the code does exactly what your project requires, nothing more. Clean architecture that&apos;s maintainable, handoffable, and built for where you&apos;re going — not just where you are today.
                </p>
              </div>
              <div className="space-y-4">
                {reasons.map((item) => (
                  <div key={item.problem} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white mb-1">{item.problem}</div>
                        <div className="text-xs text-slate-400 leading-relaxed">{item.solution}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="py-20 bg-slate-950/50 border-b border-slate-800">
          <div className="mx-auto max-w-375 px-6">
            <div className="max-w-2xl mb-14">
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
                Technology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                The Right Tool for the Right Job
              </h2>
              <p className="text-slate-400 leading-relaxed">
                We don&apos;t have a stack we&apos;re trying to sell you on. Technology decisions are made to fit your requirements, your team&apos;s capabilities, and your long-term maintenance needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stack.map((item) => (
                <div key={item.name} className="rounded-xl border border-slate-800 bg-slate-900/50 p-8">
                  <div className="text-sm font-mono font-bold text-volt-400 mb-3 tracking-wider">{item.name}</div>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.use}</p>
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
                Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Architecture First. Build Second.
              </h2>
              <p className="text-slate-400 leading-relaxed">
                The most expensive way to build a custom system is to figure out the architecture after you&apos;ve started writing code. Every project starts with a clear structure — before a component is built.
              </p>
            </div>
            <div className="space-y-12">
              {process.map((item) => (
                <div key={item.step} className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 items-start">
                  <div className="text-5xl font-black font-mono text-volt-400/20 leading-none">{item.step}</div>
                  <div className="border-b border-slate-800 pb-12 last:border-0 last:pb-0">
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-20 bg-slate-950/50 border-b border-slate-800">
          <div className="mx-auto max-w-375 px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
                  Is It Right For You?
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  When Custom Development Makes Sense
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Custom builds aren&apos;t always the right answer. But if any of these scenarios sound familiar, a template isn&apos;t going to solve your problem — it&apos;s going to add to it.
                </p>
              </div>
              <div className="space-y-3">
                {useCases.map((item) => (
                  <div key={item} className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/50 px-6 py-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-volt-500 shadow-[0_0_6px_rgba(34,211,238,0.7)] shrink-0" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FaqSection
          faqs={faqSchema.mainEntity.map((faq) => ({ question: faq.name, answer: faq.acceptedAnswer.text }))}
        />

        <LabFramework />

        {/* Related */}
        <section className="py-16 border-b border-slate-800">
          <div className="mx-auto max-w-375 px-6">
            <h2 className="text-lg font-bold text-white mb-6">Related Services</h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services/b2b-website-design"
                className="rounded-lg border border-volt-500/30 bg-volt-500/10 px-6 py-3 text-sm font-semibold text-volt-400 hover:border-volt-400 hover:bg-volt-500/20 transition-all duration-200"
              >
                B2B Website Design →
              </Link>
              <Link
                href="/wordpress-development"
                className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200"
              >
                WordPress Development →
              </Link>
              <Link
                href="/services/website-performance-optimization"
                className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200"
              >
                Website Performance →
              </Link>
            </div>
          </div>
        </section>

        <PageClose
          title="Let&apos;s Build Something That Actually Works"
          bodyPrimary="Start with a technical review of your current setup. We'll identify what's constraining you, what's worth keeping, and what it would take to build the right thing."
          bodySecondary="No proposals first. No discovery calls that turn into sales decks. Just a direct assessment of where you are and what we&apos;d do about it."
          secondaryHref="/case-studies"
          secondaryLabel="View Case Studies"
        />
      </main>
    </>
  );
}
