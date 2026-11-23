import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import PageClose from "@/components/PageClose";
import QuickAnswerBlock from "@/components/QuickAnswerBlock";
import LabFramework from "@/components/LabFramework";
import JsonLd from "@/components/JsonLd";
import FaqSection from "@/components/FaqSection";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import FounderByline from "@/components/FounderByline";
import SelectedWork from "@/components/SelectedWork";

export const metadata: Metadata = {
  title: "Custom Web Development: Next.js & WordPress",
  description:
    "Custom web development in Next.js, headless CMS and WordPress for businesses that have outgrown templates. Clean, fast and built to last.",
  alternates: { canonical: "/services/custom-web-development" },
  openGraph: {
    title: "Custom Web Development: Next.js & WordPress | Black Lab Dev",
    description:
      "Custom web development in Next.js, headless CMS and WordPress for businesses that have outgrown templates. Clean, fast and built to last.",
    url: "/services/custom-web-development",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Custom Web Development: Next.js & WordPress | Black Lab Dev",
    description:
      "Custom web development in Next.js, headless CMS and WordPress for businesses that have outgrown templates. Clean, fast and built to last.",
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
        text: "I build primarily in Next.js (React) for performance-critical sites and web apps, WordPress with custom themes for content-heavy sites that need editorial flexibility, and headless CMS setups (Sanity, Contentful) when teams need structured content across multiple channels. The technology choice is driven by your actual requirements, not what I prefer to work in.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a custom web development project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most custom web builds run 6–14 weeks from signed contract to launch, depending on scope, content complexity, and integration requirements. I scope accurately upfront and maintain a clear timeline throughout — no surprise delays discovered mid-project.",
      },
    },
    {
      "@type": "Question",
      name: "Can you rebuild an existing site without starting from scratch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually, yes. Many projects are incremental improvements to existing systems rather than full rebuilds. I audit what's there first, identify what's worth keeping, and only rebuild what's causing problems. Starting from scratch is sometimes right — but it's never the default recommendation.",
      },
    },
    {
      "@type": "Question",
      name: "Will my team be able to maintain the site after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's a design requirement, not an afterthought. Every project includes a content management layer your team can actually use — whether that's a headless CMS, WordPress, or a purpose-built admin interface. I document what I build and hand it off in a state your team can own.",
      },
    },
    {
      "@type": "Question",
      name: "How much does custom web development cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom web development projects at Black Lab Development range from $6,000 for focused rebuilds to $30,000+ for complex platforms with custom integrations, multiple audience types, and extensive content systems. Every engagement starts with a technical review of your current setup — scope and pricing reflect what you actually need, not a standard package.",
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
    body: "I start by understanding the actual requirements — not what sounds good in a kickoff presentation. Data structures, integrations, content model, and performance targets are defined before a line of code is written.",
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
          title="Custom Web Development for Businesses That Outgrew Templates"
          titleHighlight="for Businesses That Outgrew Templates"
          description="Bespoke builds in Next.js, headless CMS, and WordPress — architected for businesses that need more than a theme can deliver."
          backgroundImage="/images/services-custom-web-development-hero-bg.jpg"
          badges={["No page builders", "Clean architecture", "Built to hand off"]}
        />

        <QuickAnswerBlock
          question="What is custom web development?"
          answer="Custom web development means building a website or web application from purpose-written code — without relying on page builders, pre-built themes, or plugin-heavy setups that constrain performance and maintainability. It's the right choice when a project's requirements exceed what an off-the-shelf platform can deliver: custom integrations, specific performance targets, or long-term maintainability by an internal team. Platforms include Next.js, headless CMS (Sanity, Contentful), and custom WordPress themes."
        />

        {/* Hero CTAs */}
        <section className="border-b border-neutral-800 bg-neutral-950/50">
          <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 py-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-volt-500 text-neutral-100 px-7 py-3.5 text-sm font-semibold hover:bg-volt-400 transition-colors duration-200 shadow-lg"
            >
              Start a Project →
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-md border-2 border-neutral-800 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-neutral-500 transition-all duration-200"
            >
              View Work →
            </Link>
          </div>
        </section>

        {/* Why custom */}
        <section className="py-20 border-b border-neutral-800">
          <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="eyebrow inline-block mb-4 text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold">
                  Why Custom
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Templates Stop Working When Your Requirements Don&apos;t Fit the Box
                </h2>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Off-the-shelf themes and page builders work fine until they don&apos;t. The moment you need something outside the template&apos;s design — a custom layout, a clean integration, specific performance targets — you start fighting the tool instead of building with it.
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  Custom development means the code does exactly what your project requires, nothing more. Clean architecture that&apos;s maintainable, handoffable, and built for where you&apos;re going — not just where you are today.
                </p>
              </div>
              <div className="space-y-4">
                {reasons.map((item) => (
                  <div key={item.problem} className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white mb-1">{item.problem}</div>
                        <div className="text-xs text-neutral-400 leading-relaxed">{item.solution}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="bg-charcoal py-20 border-b border-neutral-800">
          <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
            <div className="max-w-2xl mb-14">
              <span className="eyebrow inline-block mb-4 text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold">
                Technology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                The Right Tool for the Right Job
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                I don&apos;t have a stack I&apos;m trying to sell you on. Technology decisions are made to fit your requirements, your team&apos;s capabilities, and your long-term maintenance needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stack.map((item) => (
                <div key={item.name} className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8">
                  <div className="text-sm font-mono font-bold text-white mb-3 tracking-wider">{item.name}</div>
                  <p className="text-sm text-neutral-400 leading-relaxed">{item.use}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="band-navy py-20">
          <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
            <div className="max-w-2xl mb-14">
              <span className="eyebrow inline-block mb-4 text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold">
                Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Architecture First. Build Second.
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                The most expensive way to build a custom system is to figure out the architecture after you&apos;ve started writing code. Every project starts with a clear structure — before a component is built.
              </p>
            </div>
            <div className="space-y-12">
              {process.map((item) => (
                <div key={item.step} className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 items-start">
                  <div aria-hidden="true" className="text-5xl font-black font-mono text-white/10 leading-none">{item.step}</div>
                  <div className="border-b border-neutral-800 pb-12 last:border-0 last:pb-0">
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-neutral-400 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="band-accent py-20 border-b border-neutral-800">
          <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="eyebrow inline-block mb-4 text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold">
                  Is It Right For You?
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  When Custom Development Makes Sense
                </h2>
                <p className="text-neutral-400 leading-relaxed">
                  Custom builds aren&apos;t always the right answer. But if any of these scenarios sound familiar, a template isn&apos;t going to solve your problem — it&apos;s going to add to it.
                </p>
              </div>
              <div className="space-y-3">
                {useCases.map((item) => (
                  <div key={item} className="flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-900/50 px-6 py-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 shadow-[0_0_6px_rgba(34,211,238,0.7)] shrink-0" />
                    <span className="text-sm text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured custom build */}
        <section className="band-navy py-20" aria-labelledby="featured-build-heading">
          <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
              <Link
                href="/work/bishopric-industries-shop-floor-kiosk"
                className="group block overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-[0_24px_60px_-20px_rgba(15,33,56,0.16)] transition-colors duration-300 hover:border-neutral-500"
                aria-label="View the Bishopric Industries shop floor kiosk project"
              >
                <div className="flex h-6 items-center gap-1.5 border-b border-white/5 px-3" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-neutral-600" />
                  <span className="h-2 w-2 rounded-full bg-neutral-600" />
                  <span className="h-2 w-2 rounded-full bg-neutral-600" />
                </div>
                <div className="relative aspect-16/10 w-full overflow-hidden">
                  <Image
                    src="/images/work/projects/bishopric-categories.jpg"
                    alt="Bishopric Industries shop floor kiosk showing a project's eight document categories"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
                  />
                </div>
              </Link>

              <div>
                <span className="eyebrow inline-block mb-4 text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold">
                  Featured Custom Build
                </span>
                <h2 id="featured-build-heading" className="text-3xl md:text-4xl font-bold mb-5 text-white">
                  Bishopric Industries Shop Floor Kiosk
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  A custom Next.js touchscreen app for an industrial fabricator&apos;s Cincinnati and Natchez shop floors.
                  Crews go from job number to the right fabrication drawing, weld procedure or inspection document in five taps,
                  pulled from Egnyte, with newly added documents flagged on every screen.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {[
                    "Touchscreen-first flow: location → project → category → drawing → viewer",
                    "Server-side Egnyte integration, so credentials never reach the device",
                    "Recently added documents flagged, tracked through Egnyte's audit API",
                    "Pinch-to-zoom PDF viewer, inactivity reset and offline handling",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-neutral-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/work/bishopric-industries-shop-floor-kiosk"
                  className="inline-flex items-center gap-2 rounded-md bg-volt-500 px-6 py-3 text-sm font-bold text-neutral-100 hover:bg-volt-400 transition-colors duration-200"
                >
                  See the Project
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SelectedWork slugs={["whole30-laravel-shopify-slicktext-sms", "zoo-printables-ai-seo-aeo-geo", "blum-media-group-nextjs-website"]} />

        <FaqSection
          faqs={faqSchema.mainEntity.map((faq) => ({ question: faq.name, answer: faq.acceptedAnswer.text }))}
        />

        <LabFramework />

        {/* Related */}
        <section className="py-16 border-b border-neutral-800">
          <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
            <h2 className="text-lg font-bold text-white mb-6">Related Services</h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services/small-business-website-design"
                className="rounded-lg border border-neutral-800 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white hover:border-neutral-500 hover:bg-white/20 transition-all duration-200"
              >
                Small Business Website Design →
              </Link>
              <Link
                href="/wordpress-development"
                className="rounded-lg border border-neutral-700 bg-neutral-900 px-6 py-3 text-sm font-semibold text-neutral-300 hover:border-neutral-600 hover:text-white transition-all duration-200"
              >
                WordPress Development →
              </Link>
              <Link
                href="/services/website-performance-optimization"
                className="rounded-lg border border-neutral-700 bg-neutral-900 px-6 py-3 text-sm font-semibold text-neutral-300 hover:border-neutral-600 hover:text-white transition-all duration-200"
              >
                Website Performance →
              </Link>
            </div>
          </div>
        </section>

        <FounderByline />

        <PageClose
          title="Let's Build Something That Works"
          body="Start with a technical review: what's holding you back and what's worth keeping."
          secondaryHref="/work"
          secondaryLabel="View My Work"
        />
      </main>
    </>
  );
}
