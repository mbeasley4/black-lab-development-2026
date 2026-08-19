import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageClose from "@/components/PageClose";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import JsonLd from "@/components/JsonLd";
import FaqSection from "@/components/FaqSection";
import FounderByline from "@/components/FounderByline";

export const metadata: Metadata = {
  title: "Custom WordPress Development | Fast, Clean, No Bloat",
  description:
    "Custom WordPress development with clean code, no page builders, and performance-first architecture — built to scale and stay fast long-term.",
  alternates: { canonical: "/wordpress-development" },
  openGraph: {
    title: "Custom WordPress Development | Fast, Clean, No Bloat | Black Lab Dev",
    description:
      "Custom WordPress development with clean code, no page builders, and performance-first architecture — built to scale and stay fast long-term.",
    url: "/wordpress-development",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Custom WordPress Development | Fast, Clean, No Bloat | Black Lab Dev",
    description:
      "Custom WordPress development with clean code, no page builders, and performance-first architecture — built to scale and stay fast long-term.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const services = [
  {
    title: "Custom WordPress Development",
    body: "I build fully custom themes tailored to your design, functionality, and performance requirements — without relying on prebuilt templates.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Gutenberg Block Development",
    body: "Custom blocks that give your team editorial flexibility without sacrificing performance or code quality.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    ),
  },
  {
    title: "API & System Integrations",
    body: "I connect WordPress with CRMs, third-party platforms, and internal systems using clean, scalable integrations.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Headless WordPress Development",
    body: "For advanced use cases, I decouple the frontend using modern frameworks while keeping WordPress as a powerful backend CMS.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    title: "Website Performance Optimization",
    body: "I optimize Core Web Vitals, reduce load times, and improve overall site performance — whether I built the site or not.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const processSteps = [
  { step: "01", title: "Discovery & Requirements", body: "I start by understanding your goals, audience, and technical constraints — before writing a single line of code." },
  { step: "02", title: "Architecture Planning", body: "Data structures, content models, and integration points are mapped out upfront. No retrofitting later." },
  { step: "03", title: "Performance Considerations", body: "Every architectural decision is evaluated against its impact on load time, Core Web Vitals, and long-term maintainability." },
  { step: "04", title: "Custom Development", body: "Clean, documented code with no bloated dependencies. Themes and plugins built specifically for your requirements." },
  { step: "05", title: "Performance Optimization", body: "Asset loading, image optimization, caching strategy, and Core Web Vitals tuning before launch — not as an afterthought." },
  { step: "06", title: "Launch & Iteration", body: "I don't disappear after go-live. I monitor, measure, and iterate based on real traffic data." },
];

const faqs = [
  {
    q: "Why not use a WordPress theme?",
    a: "Themes often introduce unnecessary code, CSS bloat, and JavaScript dependencies that slow down every page on your site — even pages that don't use those features. Custom builds give you exactly what you need, nothing more.",
  },
  {
    q: "How long does a WordPress project take?",
    a: "Most projects range from 4–10 weeks depending on complexity, integrations, and content requirements. I scope accurately upfront so there are no surprises.",
  },
  {
    q: "Can you improve an existing WordPress site?",
    a: "Yes. I regularly audit and optimize underperforming sites — improving speed, code quality, and maintainability without necessarily starting from scratch.",
  },
  {
    q: "Do you use page builders like Elementor?",
    a: "No. Page builders generate excessive markup, load large CSS/JS payloads, and make sites difficult to maintain at scale. I build with clean code that performs and lasts.",
  },
];

const useCases = [
  "Marketing websites that need speed and long-term flexibility",
  "Content-heavy platforms where editorial control matters",
  "SEO-driven websites competing in established categories",
  "Businesses outgrowing template-based builds",
  "Companies needing custom integrations with internal systems",
];

const performancePoints = [
  { label: "Core Web Vitals optimization", detail: "LCP, CLS, and INP tuned to pass — not just pass, but score well." },
  { label: "Minimal JavaScript overhead", detail: "I load only what's needed. No kitchen-sink plugin bundles." },
  { label: "Efficient asset loading", detail: "Critical CSS inlined, images lazy-loaded, fonts optimized." },
  { label: "Clean HTML structure", detail: "Semantic markup that search engines and assistive technologies can parse." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://blacklabdev.com/wordpress-development#service",
  name: "Custom WordPress Development",
  url: "https://blacklabdev.com/wordpress-development",
  description:
    "Custom WordPress development with clean code, no page builders, and performance-first architecture — built to scale and stay fast long-term.",
  provider: { "@type": "Organization", "@id": "https://blacklabdev.com/#business" },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "WordPress Development",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function WordPressDevelopmentPage() {
  return (
    <main className="w-full bg-[#0b0b0c] text-white">
      <JsonLd data={[serviceSchema, faqSchema]} />
      <PageHero
        label="WordPress Development"
        title="Custom WordPress Development for High-Performance Websites"
        titleHighlight="Custom, High-Performance Websites"
        description="I design and build fast, scalable websites using WordPress — without bloated themes, page builders, or unnecessary plugins."
        backgroundImage="/images/services-hero-bg.png"
        badges={["No page builders", "Performance-first architecture", "Clean, maintainable code"]}
      />

      {/* Hero CTAs */}
      <section className="border-b border-slate-800 bg-[#111214]">
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
            View Case Studies →
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                The Problem
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Custom WordPress Development Built to Perform
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Most WordPress websites are slow, difficult to maintain, and overloaded with plugins. That&apos;s not a platform problem — it&apos;s a build problem.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                At Black Lab Dev, I approach WordPress from an engineering perspective. Every site is custom-built for performance, scalability, and long-term maintainability.
              </p>
              <p className="text-slate-400 leading-relaxed font-medium">
                No shortcuts. No templates. No technical debt.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { problem: "Bloated themes", impact: "Third-party themes ship with code for features you'll never use, loaded on every page request." },
                { problem: "Page builder dependency", impact: "Elementor and Divi create vendor lock-in, add significant JS/CSS weight, and degrade Core Web Vitals." },
                { problem: "Plugin-heavy setups", impact: "Every plugin is a potential conflict, security risk, and performance hit — most solve problems that custom code handles cleanly." },
                { problem: "No clear maintainability plan", impact: "Sites built without architecture discipline become hard to update and impossible to hand off." },
              ].map((item) => (
                <div key={item.problem} className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white mb-1">{item.problem}</div>
                      <div className="text-xs text-slate-400 leading-relaxed">{item.impact}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#111214] border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
              What I Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              WordPress Development Services
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Full-service WordPress development for businesses that need more than an off-the-shelf solution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-neutral-800 bg-neutral-950 p-8 transition-all duration-300 hover:border-volt-500/40 hover:shadow-[0_0_40px_rgba(227,245,68,0.06)]"
              >
                <div className="h-px bg-linear-to-r from-volt-500/0 via-volt-500/0 to-volt-500/0 group-hover:from-volt-500/40 group-hover:via-volt-500/60 group-hover:to-volt-500/0 transition-all duration-500 -mx-8 -mt-8 mb-8" />
                <div className="w-10 h-10 rounded-lg bg-volt-500/10 border border-volt-500/20 flex items-center justify-center text-volt-500 mb-5">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-volt-400 transition-colors duration-300">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built without the bloat */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                Why I&apos;m Different
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Built Without the Bloat
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Most agencies rely on prebuilt themes, page builders, and plugin-heavy setups. I don&apos;t. Instead, I build lean, efficient WordPress sites from the ground up.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Your website becomes an asset — not a liability.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Faster load times", detail: "No unnecessary CSS or JavaScript shipped to every visitor on every page." },
                { label: "Better SEO performance", detail: "Speed, structure, and clean markup — the technical foundation search engines reward." },
                { label: "Cleaner, more maintainable code", detail: "Code that a developer can understand, modify, and extend without reverse-engineering a theme." },
                { label: "Fewer plugin conflicts", detail: "Less surface area for security vulnerabilities and update-related breakage." },
                { label: "Greater flexibility for future updates", detail: "A custom build adapts to your needs. A theme fights back." },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 rounded-xl border border-neutral-800 bg-neutral-950 p-5">
                  <div className="w-6 h-6 rounded-full bg-volt-500/15 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-volt-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-0.5">{item.label}</div>
                    <div className="text-xs text-slate-400 leading-relaxed">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#111214] border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
              My Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              A Developer-First Approach
            </h2>
            <p className="text-slate-400 leading-relaxed">
              I don&apos;t design something first and try to make it work later. Every project starts with architecture planning, data structure decisions, and performance considerations — then I build.
            </p>
          </div>
          <div className="space-y-10">
            {processSteps.map((item) => (
              <div key={item.step} className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 items-start">
                <div className="text-5xl font-black font-mono text-volt-500/20 leading-none">{item.step}</div>
                <div className="border-b border-slate-800 pb-10 last:border-0 last:pb-0">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                Performance
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Optimized for Speed and SEO
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Site speed isn&apos;t just a nice-to-have — it directly impacts rankings, conversions, and user experience. My builds focus on Core Web Vitals from day one, not as a post-launch cleanup.
              </p>
              <p className="text-slate-400 leading-relaxed">
                The result: faster sites that perform better in search and convert more users.
              </p>
              <div className="mt-8">
                <Link
                  href="/services/website-performance-optimization"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-volt-500 hover:text-volt-400 transition-colors duration-200"
                >
                  Learn more about performance optimization →
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              {performancePoints.map((item) => (
                <div key={item.label} className="rounded-xl border border-neutral-800 bg-neutral-950 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-volt-500 shadow-[0_0_8px_rgba(227,245,68,0.7)] shrink-0 mt-2" />
                    <div>
                      <div className="text-sm font-semibold text-white mb-1">{item.label}</div>
                      <div className="text-xs text-slate-400 leading-relaxed">{item.detail}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-[#111214] border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                Use Cases
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                When Custom WordPress Development Makes Sense
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Not every project needs a custom build — but if any of these sound familiar, a template or page builder isn&apos;t going to cut it.
              </p>
            </div>
            <div className="space-y-3">
              {useCases.map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-950 px-6 py-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-volt-500 shadow-[0_0_6px_rgba(227,245,68,0.7)] shrink-0" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-volt-500/35 bg-volt-500/8 text-volt-500 text-xs font-bold tracking-[0.2em] uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-volt-500 shadow-[0_0_8px_rgba(227,245,68,0.9)]" />
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Recent WordPress Projects
            </h2>
            <div className="mt-4 h-px w-32 bg-linear-to-r from-volt-500/60 via-volt-500/25 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "4.3s → 1.2s", label: "Load time reduction", detail: "Custom build replacing a bloated Elementor theme" },
              { stat: "100/100", label: "Lighthouse score", detail: "Core Web Vitals passing across all pages after rebuild" },
              { stat: "Zero", label: "Plugin conflicts", detail: "Complex data integration built with clean custom code" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-neutral-800 bg-neutral-950 px-8 py-8 text-center transition-all duration-300 hover:border-volt-500/30 hover:shadow-[0_0_40px_rgba(227,245,68,0.05)]">
                <div className="text-3xl font-black text-volt-500 drop-shadow-[0_0_10px_rgba(227,245,68,0.4)] mb-2">{item.stat}</div>
                <div className="text-sm font-semibold text-white mb-2">{item.label}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{item.detail}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-md border-2 border-volt-500/40 bg-volt-500/8 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-volt-400 transition-all duration-300 hover:border-volt-400 hover:bg-volt-500/15 hover:text-white hover:shadow-lg hover:shadow-volt-500/20"
            >
              View Full Portfolio
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <FaqSection
       
        faqs={faqs.map((faq) => ({ question: faq.q, answer: faq.a }))}
      />

      {/* Internal links */}
      <section className="py-16 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <h2 className="text-lg font-bold text-white mb-6">Related Services</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="rounded-lg border border-volt-500/30 bg-volt-500/8 px-6 py-3 text-sm font-semibold text-volt-400 hover:border-volt-400 hover:bg-volt-500/15 transition-all duration-200"
            >
              All Services →
            </Link>
            <Link
              href="/services/b2b-website-design"
              className="rounded-lg border border-neutral-800 bg-neutral-950 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200"
            >
              B2B Website Design →
            </Link>
            <Link
              href="/services/website-performance-optimization"
              className="rounded-lg border border-neutral-800 bg-neutral-950 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200"
            >
              Website Performance →
            </Link>
            <Link
              href="/drupal-development"
              className="rounded-lg border border-neutral-800 bg-neutral-950 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200"
            >
              Drupal Development →
            </Link>
            <Link
              href="/shopify-development"
              className="rounded-lg border border-neutral-800 bg-neutral-950 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200"
            >
              Shopify Development →
            </Link>
          </div>
        </div>
      </section>

      <FounderByline />

      <PageClose
        title="Work With a WordPress Development Partner That Builds It Right"
        bodyPrimary="If your current site is slow, hard to manage, or limiting your growth — it's time for a better foundation. I build WordPress sites that perform, scale, and stay maintainable for years."
        bodySecondary="No bloated themes. No page builders. Just clean, performant WordPress built the right way."
        secondaryHref="/case-studies"
        secondaryLabel="View Case Studies"
      />
    </main>
  );
}
