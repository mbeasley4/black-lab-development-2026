import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageClose from "@/components/PageClose";
import QuickAnswerBlock from "@/components/QuickAnswerBlock";
import LabFramework from "@/components/LabFramework";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Website Performance Optimization & Core Web Vitals | Black Lab Dev",
  description:
    "Fix slow load times, failing Core Web Vitals, and technical SEO issues that cost you rankings and revenue. Measurable speed improvements — not Lighthouse theater.",
  alternates: { canonical: "/services/website-performance-optimization" },
  openGraph: {
    title: "Website Performance Optimization & Core Web Vitals | Black Lab Dev",
    description:
      "Fix slow load times, failing Core Web Vitals, and technical SEO issues that cost you rankings and revenue. Measurable speed improvements — not Lighthouse theater.",
    url: "/services/website-performance-optimization",
  },
  twitter: {
    title: "Website Performance Optimization & Core Web Vitals | Black Lab Dev",
    description:
      "Fix slow load times, failing Core Web Vitals, and technical SEO issues — measurable improvements, not Lighthouse theater.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://blacklabdev.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://blacklabdev.com/services" },
    { "@type": "ListItem", position: 3, name: "Website Performance Optimization", item: "https://blacklabdev.com/services/website-performance-optimization" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Performance Optimization",
  serviceType: "Technical SEO & Performance Optimization",
  description:
    "Fix slow load times, failing Core Web Vitals, and technical SEO issues that cost you rankings and revenue.",
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
  url: "https://blacklabdev.com/services/website-performance-optimization",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are Core Web Vitals and why do they matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Core Web Vitals are Google's official user experience metrics: LCP (Largest Contentful Paint, how fast the main content loads), INP (Interaction to Next Paint, how responsive the page is to user input), and CLS (Cumulative Layout Shift, how stable the layout is as it loads). Pages that fail Core Web Vitals are demoted in search rankings. Pages that pass them rank higher — and convert better, because fast pages lose fewer visitors before they engage.",
      },
    },
    {
      "@type": "Question",
      name: "My Lighthouse score is already 90+. Why is my site still slow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lighthouse runs in a controlled lab environment with throttled conditions. Real-user performance — what Google actually measures through Chrome User Experience Report (CrUX) data — often diverges significantly from lab scores, especially on mobile. A 90+ Lighthouse score on desktop can coexist with failing Core Web Vitals in the field. I diagnose real-user performance, not lab theater.",
      },
    },
    {
      "@type": "Question",
      name: "Can you improve an existing site without rebuilding it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in most cases. Performance problems are usually concentrated in a small set of root causes: unoptimized images, render-blocking scripts, missing caching headers, bloated third-party tags, and inefficient fonts. Many of these can be fixed without touching the underlying architecture. A full rebuild is only recommended when the platform itself is the bottleneck — which happens with some page builders and legacy CMSs.",
      },
    },
    {
      "@type": "Question",
      name: "How much does website performance optimization cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on what's causing the problems. A focused performance audit and implementation engagement typically runs $2,500–$8,000 for an existing site. Complex rebuilds required when the platform is the bottleneck are scoped separately. The conversation starts with a free performance audit to understand what's actually wrong.",
      },
    },
    {
      "@type": "Question",
      name: "Does page speed actually affect conversions and revenue?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, directly. Google's own research shows that a 1-second improvement in mobile load time increases conversion rates by up to 27%. For B2B sites, where buyers are evaluating multiple vendors, a slow site is a signal of broader organizational competence. Across performance engagements, the clients who see the biggest conversion lifts are the ones where speed was the primary friction — buyers were leaving before the page finished loading.",
      },
    },
    {
      "@type": "Question",
      name: "How long does website performance optimization take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A focused performance audit takes 3–5 business days and produces a prioritized list of root causes and recommended fixes. Implementation of identified issues typically runs 2–6 weeks depending on the number of root causes and whether platform changes are required. Results in Core Web Vitals data are measurable within 28 days of changes going live, which is how long Google's CrUX data takes to reflect field improvements.",
      },
    },
    {
      "@type": "Question",
      name: "What businesses need website performance optimization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any business where website speed directly affects revenue — eCommerce stores losing sales to abandoned carts, B2B companies where a slow site signals incompetence to technical buyers, or any site seeing declining organic rankings due to poor Core Web Vitals. Sites built on Elementor, Divi, WPBakery, or other page builders are the most common candidates, as those platforms generate excessive markup and JavaScript that's hard to optimize without a rebuild.",
      },
    },
  ],
};

const vitals = [
  {
    metric: "LCP",
    full: "Largest Contentful Paint",
    target: "< 2.5s",
    what: "How fast the main content visible in the viewport loads. Usually a hero image, heading, or above-fold block.",
    causes: "Unoptimized hero images, render-blocking resources, slow server response times, no CDN.",
  },
  {
    metric: "INP",
    full: "Interaction to Next Paint",
    what: "How quickly the page responds to user input — clicks, taps, keyboard events.",
    target: "< 200ms",
    causes: "Heavy JavaScript execution, long tasks blocking the main thread, unoptimized event handlers.",
  },
  {
    metric: "CLS",
    full: "Cumulative Layout Shift",
    target: "< 0.1",
    what: "How much the layout shifts while the page loads — content jumping as images, fonts, or ads load in.",
    causes: "Missing image dimensions, late-loading fonts, dynamically injected content above existing content.",
  },
];

const fixes = [
  { label: "Image optimization", detail: "WebP/AVIF conversion, correct dimensions, lazy loading for off-screen images, explicit width/height to prevent CLS." },
  { label: "Critical path optimization", detail: "Inline critical CSS, defer non-critical JavaScript, eliminate render-blocking resources that delay first paint." },
  { label: "Font loading strategy", detail: "font-display: swap, preload of critical fonts, subsetting to reduce file size, system font fallbacks that match metrics." },
  { label: "Third-party tag audit", detail: "Identify and defer or remove analytics, chat, and ad scripts that fire on every page load and block the main thread." },
  { label: "Caching & CDN", detail: "Proper cache-control headers, CDN configuration, stale-while-revalidate strategy for dynamic content." },
  { label: "JavaScript bundle reduction", detail: "Tree-shaking, code-splitting, removing unused dependencies — loading only what each page actually needs." },
  { label: "Server response time (TTFB)", detail: "Server-side caching, edge rendering, database query optimization, and ISR configuration for static-able content." },
  { label: "Technical SEO audit", detail: "Canonical tags, structured data, crawl budget, sitemap integrity, and indexability issues that suppress rankings." },
];

const results = [
  { metric: "4.3s → 1.2s", label: "Load time", detail: "Custom rebuild replacing a bloated Elementor theme" },
  { metric: "100/100", label: "Lighthouse score", detail: "Core Web Vitals passing across all pages post-rebuild" },
  { metric: "90%+", label: "SEO health lift", detail: "Technical SEO audit and implementation engagement" },
];

export default function WebsitePerformanceOptimizationPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <main className="w-full bg-black text-white">
        <PageHero
          label="Website Performance Optimization"
          title="A Slow Website Is a Business Problem, Not a Technical One"
          titleHighlight="Business Problem, Not a Technical One"
          description="I fix the root causes of slow load times, failing Core Web Vitals, and technical SEO issues that cost you rankings and revenue — measured before and after, not guessed at."
          backgroundImage="/images/services-hero-bg.png"
          badges={["Core Web Vitals", "Real-user performance", "Not Lighthouse theater"]}
        />

        <QuickAnswerBlock
          question="What is website performance optimization?"
          answer="Website performance optimization is the process of diagnosing and fixing technical issues that slow page load times, harm Core Web Vitals scores, and reduce search rankings. It targets root causes — unoptimized images, render-blocking scripts, excessive JavaScript bundles, missing caching headers, and slow server response times — measured against real-user data from Google's Chrome User Experience Report (CrUX), not lab simulations. A 1-second improvement in mobile load time increases conversion rates by up to 27%."
        />

        {/* Hero CTAs */}
        <section className="border-b border-slate-800 bg-slate-950/50">
          <div className="mx-auto max-w-375 px-6 py-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-cyan-500 text-black px-7 py-3.5 text-sm font-semibold hover:bg-cyan-400 transition-colors duration-200 shadow-lg shadow-cyan-500/25"
            >
              Get a Performance Audit →
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-md border-2 border-cyan-500/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
            >
              View Results →
            </Link>
          </div>
        </section>

        {/* Why speed matters */}
        <section className="py-20 border-b border-slate-800">
          <div className="mx-auto max-w-375 px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
                  The Business Case
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Speed Affects Rankings, Conversions, and Revenue
                </h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Google uses Core Web Vitals as a direct ranking signal. Sites that fail them rank lower — not hypothetically, but measurably, against competitors with equivalent content and backlink profiles. Improving performance isn&apos;t a nice-to-have; it&apos;s a competitive requirement.
                </p>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Beyond rankings, every second of load time costs you visitors before they see your offer. For B2B sites with multi-step buying processes, losing a visitor on page load is losing a deal that never entered the pipeline.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  The fix isn&apos;t more infrastructure. It&apos;s diagnosing what&apos;s actually slowing you down and removing it — systematically.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { stat: "27%", label: "Conversion rate increase per 1s mobile speed improvement (Google)" },
                  { stat: "53%", label: "Mobile users who leave if a page takes more than 3 seconds to load" },
                  { stat: "1s", label: "Delay in page response that reduces conversions by 7%" },
                  { stat: "Top 3", label: "Ranking positions most impacted by Core Web Vitals changes" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-6 border-b border-slate-800 pb-4">
                    <span className="text-2xl font-black text-cyan-400 shrink-0 leading-none">{item.stat}</span>
                    <span className="text-slate-400 text-sm leading-relaxed">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Web Vitals breakdown */}
        <section className="py-20 bg-slate-950/50 border-b border-slate-800">
          <div className="mx-auto max-w-375 px-6">
            <div className="max-w-2xl mb-14">
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
                Core Web Vitals
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                The Three Metrics Google Actually Measures
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Core Web Vitals are Google&apos;s field-measured user experience signals. They&apos;re collected from real Chrome users — not lab simulations — and fed directly into search ranking algorithms.
              </p>
            </div>
            <div className="space-y-6">
              {vitals.map((vital) => (
                <div key={vital.metric} className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] divide-y md:divide-y-0 md:divide-x divide-slate-800">
                    <div className="p-6 flex flex-col items-start justify-center">
                      <div className="text-3xl font-black font-mono text-cyan-400 mb-1">{vital.metric}</div>
                      <div className="text-xs text-slate-500 leading-tight">{vital.full}</div>
                      <div className="mt-3 text-xs font-mono text-green-400 bg-green-500/10 border border-green-500/20 rounded px-2 py-1">
                        Target: {vital.target}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">What it measures</div>
                      <p className="text-sm text-slate-300 leading-relaxed">{vital.what}</p>
                    </div>
                    <div className="p-6">
                      <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">Common causes of failure</div>
                      <p className="text-sm text-slate-400 leading-relaxed">{vital.causes}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What I fix */}
        <section className="py-20 border-b border-slate-800">
          <div className="mx-auto max-w-375 px-6">
            <div className="max-w-2xl mb-14">
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
                What Gets Fixed
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                The Full Performance Stack
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Most performance problems have 3–5 root causes responsible for 80% of the slowdown. I audit for all of them — then fix the ones that move the needle.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fixes.map((item) => (
                <div key={item.label} className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/15 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">{item.label}</div>
                    <div className="text-xs text-slate-400 leading-relaxed">{item.detail}</div>
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
                Measurable Outcomes, Not Lab Scores
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-800/40 rounded-2xl overflow-hidden border border-slate-700/40">
              {results.map((r) => (
                <div key={r.label} className="bg-slate-900 px-10 py-10 text-center">
                  <div className="text-4xl font-black text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)] mb-2">{r.metric}</div>
                  <div className="text-sm font-semibold text-white mb-2">{r.label}</div>
                  <div className="text-xs text-slate-400">{r.detail}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-600 mt-4 text-center">
              Metrics represent client results. Individual results vary based on current site state, platform, and traffic volume.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 border-b border-slate-800">
          <div className="mx-auto max-w-375 px-6">
            <div className="max-w-2xl mb-12">
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
                Common Questions
              </span>
              <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl space-y-4">
              {faqSchema.mainEntity.map((faq) => (
                <div key={faq.name} className="rounded-xl border border-slate-800 bg-slate-900/50 p-7">
                  <h3 className="text-base font-semibold text-white mb-3">{faq.name}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LabFramework />

        {/* Related */}
        <section className="py-16 border-b border-slate-800">
          <div className="mx-auto max-w-375 px-6">
            <h2 className="text-lg font-bold text-white mb-6">Related Services</h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services/conversion-optimization"
                className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-200"
              >
                Conversion Optimization →
              </Link>
              <Link
                href="/services/b2b-website-design"
                className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200"
              >
                B2B Website Design →
              </Link>
              <Link
                href="/services/custom-web-development"
                className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200"
              >
                Custom Web Development →
              </Link>
            </div>
          </div>
        </section>

        <PageClose
          title="Start With a Free Performance Audit"
          bodyPrimary="I&apos;ll review your current site against Core Web Vitals, real-user performance data, and technical SEO signals — and show you exactly what&apos;s costing you rankings and conversions."
          bodySecondary="No proposals. No slides. Just a direct assessment of what&apos;s wrong and what I&apos;d do about it."
          secondaryHref="/case-studies"
          secondaryLabel="View Results"
        />
      </main>
    </>
  );
}
