import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageClose from "@/components/PageClose";

export const metadata = {
  title: "B2B Website Design | Built for Complex Buyers & Long Sales Cycles",
  description:
    "Custom B2B website design built for technical buyers, complex buying decisions, and higher-quality lead generation — no bloated builders, no shortcuts.",
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
    <main className="w-full bg-black text-white">
      <PageHero
        label="B2B Website Design Agency"
        title="Websites Designed for How B2B Buyers Actually Buy"
        titleHighlight="B2B Buyers Actually Buy"
        description="B2B buyers are skeptical, slow, and involve multiple people. I build websites that work for all of them — with conversion architecture engineered for long sales cycles and complex decisions."
        backgroundImage="/images/services-hero-bg.png"
        badges={["Long sales cycles", "Multi-stakeholder design", "Pipeline-focused"]}
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
                <div className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">{r.metric}</div>
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
        secondaryHref="/work"
        secondaryLabel="View Case Studies"
      />
    </main>
  );
}
