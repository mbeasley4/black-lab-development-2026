import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "eCommerce Redesign That Increased AOV 164% in 7 Days",
  description:
    "See how a focused website redesign increased revenue 88% and average order value 164% in just one week.",
  openGraph: {
    title: "eCommerce Redesign That Increased AOV 164% in 7 Days",
    description:
      "See how a focused website redesign increased revenue 88% and average order value 164% in just one week.",
    type: "article",
  },
};

const results = [
  { metric: "+164%", label: "Average Order Value", value: "$281", note: "From baseline" },
  { metric: "+88%", label: "Total Revenue", value: "$1,406.52", note: "Week-over-week" },
  { metric: "+320%", label: "Returning Customer Rate", value: "60%", note: "Post-redesign" },
  { metric: "+56%", label: "Conversion Rate", value: "0.68%", note: "Uplift" },
  { metric: "+29%", label: "Total Orders", value: "", note: "In 7 days" },
  { metric: "+61%", label: "Sessions", value: "", note: "Traffic lift" },
];

const whatWeDid = [
  {
    number: "01",
    title: "Reworked Product Hierarchy",
    body: "Simplified collections and restructured navigation paths so buyers could find what they were looking for without effort — and discover adjacent products naturally.",
  },
  {
    number: "02",
    title: "Increased Perceived Value",
    body: "Improved product presentation, photography framing, and positioning copy to justify higher price points before buyers ever reached checkout.",
  },
  {
    number: "03",
    title: "Conversion-Focused UX Updates",
    body: "Cleaner CTA placement, reduced friction in the buying flow, and a checkout path designed around how buyers actually move — not how the default template was configured.",
  },
  {
    number: "04",
    title: "Optimized for Higher Order Value",
    body: "Structured collections and product relationships to encourage multi-item purchases and support natural bundling behavior — without heavy-handed upsell pop-ups.",
  },
];

const faqs = [
  {
    q: "How can a website redesign increase average order value?",
    a: "Average order value is primarily influenced by product presentation, collection structure, and the buying path. When products are positioned clearly, navigation surfaces natural product relationships, and the checkout flow removes friction, buyers spend more per order — not because of tricks, but because the site makes it easy to buy more of what they came for.",
  },
  {
    q: "What affects eCommerce conversion rates the most?",
    a: "The three biggest levers are: (1) clarity of value proposition on product pages, (2) friction in the buying flow, and (3) trust signals at decision points. Most eCommerce sites underperform because they optimize for aesthetics rather than for how buyers actually make purchase decisions.",
  },
  {
    q: "How long does it take to see results from an eCommerce redesign?",
    a: "It depends on traffic volume and how significant the UX issues were. In this case, meaningful improvements were visible within 7 days of launch. Sites with higher traffic see signals faster — but the core changes that drive AOV and conversion rate are structural, not algorithmic, so they hold over time.",
  },
  {
    q: "Is conversion optimization different from a full redesign?",
    a: "Yes. A full redesign addresses structure, positioning, navigation, and visual design. Conversion optimization can often be done without a full redesign — targeted changes to CTAs, product page layouts, and checkout flow can move the numbers significantly on an existing site.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function EcommerceAOVCaseStudy() {
  return (
    <main className="w-full bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-cyan-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-950/80 to-cyan-950/70" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />

        <div className="relative z-10 py-16 md:py-24 mx-auto max-w-375 px-6">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Link href="/work" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">
              ← Work
            </Link>
            <span className="text-slate-700">/</span>
            <span className="text-xs text-slate-500">Case Study</span>
          </div>

          <span className="inline-block mb-5 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
            eCommerce Case Study
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white leading-tight max-w-4xl">
            eCommerce Website Redesign That Increased{" "}
            <span className="text-cyan-400">AOV 164%</span> in 7 Days
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mb-10">
            Most redesigns are measured in pageviews. This one was measured in revenue mechanics — and the results were visible in under a week.
          </p>

          {/* Stat callouts */}
          <div className="flex flex-wrap gap-6">
            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-4 text-center">
              <div className="text-3xl font-black text-cyan-400">+164%</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide">Average Order Value</div>
            </div>
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-6 py-4 text-center">
              <div className="text-3xl font-black text-blue-400">+88%</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide">Total Revenue</div>
            </div>
            <div className="rounded-xl border border-violet-500/30 bg-violet-500/10 px-6 py-4 text-center">
              <div className="text-3xl font-black text-violet-400">+320%</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide">Returning Customers</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </section>

      {/* ─── THE HOOK ─────────────────────────────────── */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-3xl">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
              The Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Most eCommerce Sites Focus on Getting More Traffic.
              <br />
              <span className="text-slate-400">This One Increased Revenue Per Customer in Under a Week.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              That&apos;s a fundamentally different outcome — and a harder one to produce. Traffic is a function of marketing spend and SEO. Revenue per customer is a function of how your site is built.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              When you increase average order value and returning customer rate simultaneously, you&apos;ve done something structural to the buying experience — not just the aesthetics. The numbers below reflect exactly that.
            </p>

            {/* Tight stat grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {results.map((r) => (
                <div key={r.label} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                  <div className="text-2xl font-black text-cyan-400 mb-1">{r.metric}</div>
                  <div className="text-sm font-semibold text-white mb-1">{r.label}</div>
                  {r.value && <div className="text-xs text-slate-400">{r.value} {r.note}</div>}
                  {!r.value && <div className="text-xs text-slate-400">{r.note}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE PROBLEM ─────────────────────────────── */}
      <section className="py-20 bg-slate-950/50 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
                The Problem
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                The Site Had Traffic. It Wasn&apos;t Converting Efficiently.
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                The existing site was functional — products were there, checkout worked, buyers were arriving. But the structure wasn&apos;t built for how buyers actually decide to purchase, or how much they&apos;re willing to spend per transaction.
              </p>
              <p className="text-slate-400 leading-relaxed">
                The result was a site that converted below its potential and left significant revenue per session on the table — not because of bad products, but because of how they were presented and structured.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { problem: "Low perceived value", impact: "Buyers anchoring to lower price points than the product warranted" },
                { problem: "Weak product structure", impact: "Related products weren't surfaced — buyers bought one item and left" },
                { problem: "Poor conversion flow", impact: "Friction between intent and purchase caused drop-off at predictable points" },
                { problem: "No clear AOV logic", impact: "No incentive structure or product relationships that encouraged multi-item orders" },
              ].map((item) => (
                <div key={item.problem} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
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

      {/* ─── WHAT I DID ─────────────────────────────── */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
              What I Did
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              I Didn&apos;t Just Build a Site.
              <br />
              <span className="text-cyan-400">I Engineered Buying Behavior.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Every decision was made against a specific revenue mechanic — AOV, conversion rate, or returning customer likelihood. Not against visual preferences or trend chasing.
            </p>
          </div>
          <div className="space-y-12">
            {whatWeDid.map((item) => (
              <div key={item.number} className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 items-start">
                <div className="text-5xl font-black font-mono text-cyan-400/20 leading-none">{item.number}</div>
                <div className="border-b border-slate-800 pb-10 last:border-0 last:pb-0">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RESULTS ─────────────────────────────────── */}
      <section className="py-20 bg-slate-950/50 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
              The Results
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Within 7 Days of Launch
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-slate-800/40 rounded-2xl overflow-hidden border border-slate-700/40 mb-10">
            {results.map((r) => (
              <div key={r.label} className="bg-slate-900 px-8 py-8 text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">{r.metric}</div>
                <div className="text-sm font-semibold text-white mb-1">{r.label}</div>
                {r.value && <div className="text-xs text-slate-500">{r.value}</div>}
              </div>
            ))}
          </div>

          {/* The key insight callout */}
          <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 p-8 text-center">
            <p className="text-xl md:text-2xl font-bold text-white max-w-3xl mx-auto leading-snug">
              The biggest impact wasn&apos;t just more sales—
              <span className="text-cyan-400"> it was more value per customer.</span>
            </p>
          </div>
          <p className="text-xs text-slate-600 mt-4 text-center">
            Results measured week-over-week following launch. Individual results vary based on traffic, product category, and baseline site performance.
          </p>
        </div>
      </section>

      {/* ─── WHY IT MATTERS ──────────────────────────── */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
                Why It Matters
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Most Agencies Chase Traffic.
                <br />
                <span className="text-slate-400">But Traffic Without Conversion Is Wasted.</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                The standard agency playbook is to sell you more SEO, more ads, more content. Traffic goes up. Revenue per session stays flat or falls. You spend more to make the same — or less.
              </p>
              <p className="text-slate-400 leading-relaxed">
                This project proves a different approach: you can increase revenue without dramatically increasing traffic, if you fix how your site converts the visitors you already have.
              </p>
            </div>
            <div className="space-y-5">
              {[
                { claim: "You can increase revenue without increasing traffic", proof: "Sessions +61% drove +88% revenue — the per-session value went up, not just the volume" },
                { claim: "UX and structure directly impact revenue mechanics", proof: "AOV increased 164% — that's a structural change in how buyers behave, not a pricing change" },
                { claim: "Fast iteration can produce meaningful results", proof: "7 days post-launch. No months of waiting for SEO to compound" },
              ].map((item) => (
                <div key={item.claim} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white mb-1">{item.claim}</div>
                      <div className="text-xs text-slate-400 leading-relaxed">{item.proof}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ (SEO) ───────────────────────────────── */}
      <section className="py-20 bg-slate-950/50 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-12">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
              Common Questions
            </span>
            <h2 className="text-3xl font-bold text-white">FAQ</h2>
          </div>
          <div className="max-w-3xl space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-slate-800 bg-slate-900/50 p-7">
                <h3 className="text-base font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTERNAL LINKS ──────────────────────────── */}
      <section className="py-16 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <h2 className="text-lg font-bold text-white mb-6">Related Services</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services/conversion-optimization"
              className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-200"
            >
              Website Conversion Optimization →
            </Link>
            <Link
              href="/services/b2b-website-design"
              className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200"
            >
              B2B Website Design →
            </Link>
            <Link
              href="/work"
              className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-200"
            >
              View All Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 border-t border-cyan-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-cyan-950 to-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-purple-500/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 mx-auto max-w-375 px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Want Results Like This?
          </h2>
          <p className="text-xl text-cyan-50/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Start with a website conversion audit. I&apos;ll identify exactly where revenue is leaking from your site — and what it would take to fix it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-4 text-base font-bold uppercase tracking-wide text-white hover:from-cyan-400 hover:to-blue-400 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
            >
              Get a Website Conversion Audit
            </Link>
            <Link
              href="/services/conversion-optimization"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
            >
              See how I optimize
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      </section>
    </main>
  );
}
