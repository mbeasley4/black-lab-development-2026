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
  title: "Website Conversion Optimization | More Leads, Better Results",
  description:
    "Fix what's stopping your website from converting. Better structure, clearer messaging, and smarter CTAs — measured before and after with real data.",
  alternates: { canonical: "/services/conversion-optimization" },
  openGraph: {
    title: "Website Conversion Optimization | More Leads, Better Results",
    description:
      "Fix what's stopping your website from converting. Better structure, clearer messaging, and smarter CTAs — measured before and after with real data.",
    url: "/services/conversion-optimization",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Website Conversion Optimization | More Leads, Better Results",
    description:
      "Fix what's stopping your website from converting — measured before and after with real data.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://blacklabdev.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://blacklabdev.com/services" },
    { "@type": "ListItem", position: 3, name: "Conversion Optimization", item: "https://blacklabdev.com/services/conversion-optimization" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why is my website getting traffic but not generating leads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most common causes are positioning that's too broad (your site speaks to everyone so it resonates with no one), CTAs generating the wrong contacts, service pages that don't answer specific buyer questions, and content without a clear next step. Conversion optimization diagnoses which of these is killing your pipeline and fixes it with data — not guesswork.",
      },
    },
    {
      "@type": "Question",
      name: "What does conversion optimization actually involve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It starts with a data-driven audit of analytics, heatmaps, session recordings, and funnel data to identify exactly where buyers drop off. From there: messaging alignment against your ideal buyer persona, UX friction removal, CTA and form optimization, and structured A/B testing to measure lift in qualified leads — not just raw conversion rate.",
      },
    },
    {
      "@type": "Question",
      name: "Do you need to rebuild my website to improve conversions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Most conversion problems don't require a full rebuild. UX friction removal, CTA repositioning, copy rewrites, and form redesigns can produce significant lift without touching the underlying architecture. A full redesign is only recommended when the positioning, information architecture, or technical foundation is the root cause.",
      },
    },
    {
      "@type": "Question",
      name: "How long before I see results from conversion optimization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Initial improvements from messaging alignment, CTA optimization, and friction removal are typically measurable within 30–60 days. One manufacturing client went from 3 to 27 qualified leads per month within a 90-day engagement. Results depend on current baseline traffic volume and how significant the conversion blockers are.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure success in a conversion optimization engagement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Success is measured in qualified leads and pipeline — not just raw conversion rate or traffic. Conversion tracking is set up before any changes go live, giving a clear before/after baseline. A/B tests run on headlines, CTAs, page layouts, and form designs to attribute specific lift to specific changes.",
      },
    },
    {
      "@type": "Question",
      name: "How much does conversion optimization cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A focused conversion audit engagement runs $1,500–$3,500 and produces a prioritized findings report with specific recommendations. Full implementation — messaging rewrites, CTA redesigns, form rebuilds, and A/B testing setup — typically ranges from $4,000 to $12,000 depending on scope. Engagements start with the audit so you know what you're paying to fix before committing to the implementation.",
      },
    },
    {
      "@type": "Question",
      name: "Who needs conversion optimization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any B2B company getting traffic but not generating qualified leads. The most common candidates are businesses spending on SEO or ads without proportional pipeline growth, companies whose sales team says leads are low-quality or poorly qualified, and organizations whose service pages get views but rarely produce inquiries. If you have traffic and no conversions, the problem is almost always conversion architecture — not traffic volume.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "B2B Website Conversion Optimization",
  serviceType: "Conversion Rate Optimization",
  description:
    "Fix what's stopping your website from converting. Better structure, clearer messaging, and smarter CTAs — measured before and after with real data.",
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
  url: "https://blacklabdev.com/services/conversion-optimization",
};

const problems = [
  {
    symptom: "High traffic, low leads",
    cause: "Positioning is too broad. Your site speaks to everyone so it resonates with no one. Buyers can't tell if you're the right fit.",
  },
  {
    symptom: "Leads that don't convert to pipeline",
    cause: "Your CTAs are generating the wrong contacts. Form placement, copy, and friction are attracting tire-kickers instead of qualified buyers.",
  },
  {
    symptom: "High bounce rate on service pages",
    cause: "Buyers land on a page expecting to find answers to their specific problem. Generic service descriptions send them back to Google.",
  },
  {
    symptom: "Long time-on-site, no conversion",
    cause: "Content without a clear next step. Buyers are interested but there's no conversion architecture guiding them toward action.",
  },
];

const process = [
  {
    step: "01",
    title: "Conversion Audit",
    body: "I analyze your current analytics, heatmaps, session recordings, and funnel data to identify exactly where buyers drop off and why. No assumptions — data-driven diagnosis.",
  },
  {
    step: "02",
    title: "Messaging Alignment",
    body: "I review your copy against your ideal buyer persona. Is it speaking to their actual pain? Addressing their objections? Using language they use — or language your marketing team invented?",
  },
  {
    step: "03",
    title: "UX Friction Removal",
    body: "I identify every unnecessary click, confusing layout, and buried CTA. Then I fix them — simplifying paths to conversion without a full redesign.",
  },
  {
    step: "04",
    title: "CTA & Form Optimization",
    body: "I rewrite and reposition CTAs based on intent signals, and redesign forms to reduce abandonment while improving lead quality — fewer fields, better qualification.",
  },
  {
    step: "05",
    title: "A/B Testing & Measurement",
    body: "I run structured tests on headlines, CTAs, page layouts, and form designs — measuring lift in qualified leads, not just raw conversion rate.",
  },
];

const beforeAfter = [
  {
    label: "Average order value",
    before: "Baseline",
    after: "+164%",
    note: "eCommerce redesign — read the full case study →",
    caseStudyHref: "/case-studies/ecommerce-website-redesign-increase-aov",
  },
  {
    label: "Qualified leads / month",
    before: "3",
    after: "27",
    note: "Manufacturing client, 90-day optimization engagement",
  },
  {
    label: "Conversion rate",
    before: "0.8%",
    after: "2.2%",
    note: "B2B SaaS landing page, after CTA and form rebuild",
  },
  {
    label: "Bounce rate",
    before: "74%",
    after: "42%",
    note: "Industrial services site, after messaging realignment",
  },
];

export default function ConversionOptimizationPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, serviceSchema, faqSchema]} />
      <main className="w-full bg-black text-white">
      <PageHero
        label="B2B Website Conversion Optimization"
        title="Traffic Without Conversions Is Just Overhead"
        titleHighlight="Just Overhead"
        description="I diagnose exactly why your B2B website isn't generating qualified leads, then systematically fix it — with data, not guesswork."
        backgroundImage="/images/services-hero-bg.png"
        badges={["Audit-first approach", "Measured before & after", "No vanity metrics"]}
      />

      <QuickAnswerBlock
        question="What is website conversion optimization?"
        answer="Website conversion optimization is the process of diagnosing and fixing why a website isn't generating qualified leads or revenue. It starts with a data-driven audit of analytics, heatmaps, and session recordings to identify exactly where buyers drop off. Fixes include messaging alignment against buyer personas, UX friction removal, CTA and form redesigns, and structured A/B testing — measured in qualified lead volume, not vanity metrics."
      />

      {/* The core problem */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
                The Real Problem
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                More Traffic Isn&apos;t Your Problem
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Most B2B companies assume they have a traffic problem. They invest in more SEO, more ads, more content — and watch their cost-per-lead go up while lead quality stays flat.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                The real problem is usually a conversion problem. The buyers are arriving. They&apos;re spending time on the site. They&apos;re just not taking action — because nothing on the site is earning it.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Conversion optimization isn&apos;t about adding more pop-ups or changing button colors. It&apos;s about understanding why buyers aren&apos;t converting and systematically removing every barrier.
              </p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-8">
              <h3 className="text-lg font-bold text-white mb-6">What our audits typically find:</h3>
              <ul className="space-y-4">
                {[
                  "CTAs that ask for too much too soon",
                  "Messaging that's too generic for the buyer's specific role",
                  "Forms with 8+ fields on first contact",
                  "Service pages that describe capabilities instead of outcomes",
                  "No content for buyers in evaluation (vs. awareness) mode",
                  "Trust signals buried 3 scrolls below the fold",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
                    <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Symptom → Cause */}
      <section className="py-20 bg-slate-950/50 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
              Diagnose First
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Symptoms I Treat (and Their Root Causes)
            </h2>
          </div>
          <div className="space-y-4">
            {problems.map((p) => (
              <div key={p.symptom} className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl border border-slate-800 overflow-hidden">
                <div className="bg-slate-900/80 p-6 border-b md:border-b-0 md:border-r border-slate-800">
                  <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">Symptom</div>
                  <div className="text-white font-semibold">{p.symptom}</div>
                </div>
                <div className="bg-slate-900/40 p-6">
                  <div className="text-xs uppercase tracking-widest text-volt-500/60 mb-2">Root Cause</div>
                  <div className="text-slate-400 text-sm leading-relaxed">{p.cause}</div>
                </div>
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
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              How I Fix Conversion Problems
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

      {/* Before / After */}
      <section className="py-20 bg-slate-950/50 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-400 font-semibold">
              Before &amp; After
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What Changes After Conversion Optimization
            </h2>
          </div>
          <div className="space-y-4">
            {beforeAfter.map((item) => (
              <div key={item.label} className={`rounded-xl border bg-slate-900/50 overflow-hidden transition-colors duration-200 ${'caseStudyHref' in item ? 'border-volt-500/30 hover:border-volt-400/60' : 'border-slate-800'}`}>
                <div className="grid grid-cols-3 divide-x divide-slate-800">
                  <div className="p-6 text-center">
                    <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">Before</div>
                    <div className="text-3xl font-black text-red-400">{item.before}</div>
                  </div>
                  <div className="p-6 text-center">
                    <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">Metric</div>
                    <div className="text-sm font-semibold text-white">{item.label}</div>
                  </div>
                  <div className="p-6 text-center">
                    <div className="text-xs uppercase tracking-widest text-slate-500 mb-2">After</div>
                    <div className="text-3xl font-black text-volt-400">{item.after}</div>
                  </div>
                </div>
                <div className="px-6 pb-4 border-t border-slate-800 pt-3 text-center">
                  {'caseStudyHref' in item && item.caseStudyHref ? (
                    <Link href={item.caseStudyHref} className="text-xs text-volt-500 hover:text-volt-300 transition-colors duration-200">
                      {item.note}
                    </Link>
                  ) : (
                    <span className="text-xs text-slate-600">{item.note}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-600 mt-4 text-center">
            Metrics represent client results. Individual results vary based on current site state, industry, and traffic volume.
          </p>
        </div>
      </section>

      <LabFramework />

      <FaqSection
        headingId="cro-faq-heading"
        faqs={faqSchema.mainEntity.map((faq) => ({ question: faq.name, answer: faq.acceptedAnswer.text }))}
      />

      {/* Related */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <h2 className="text-2xl font-bold text-white mb-8">Related</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/case-studies/ecommerce-website-redesign-increase-aov" className="rounded-lg border border-volt-500/30 bg-volt-500/10 px-6 py-3 text-sm font-semibold text-volt-400 hover:border-volt-400 hover:bg-volt-500/20 transition-all duration-200">
              Case Study: +164% AOV in 7 Days →
            </Link>
            <Link href="/services/b2b-website-design" className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200">
              B2B Website Design →
            </Link>
            <Link href="/services/manufacturing-website-design" className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200">
              Manufacturing Website Design →
            </Link>
          </div>
        </div>
      </section>

      <PageClose
        title="Start With a Conversion Audit"
        bodyPrimary="I'll review your current site and show you exactly where leads are leaking — the specific pages, specific CTAs, and specific messages that are costing you pipeline."
        bodySecondary="One focused engagement. Real findings. No proposals for things you don't need."
        secondaryHref="/case-studies"
        secondaryLabel="View Case Studies"
      />
      </main>
    </>
  );
}
