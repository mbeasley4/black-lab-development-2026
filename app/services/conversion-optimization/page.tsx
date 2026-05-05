import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageClose from "@/components/PageClose";

export const metadata = {
  title: "B2B Website Conversion Optimization | Turn Traffic Into Pipeline",
  description:
    "Diagnose and fix why your website isn't converting. Improve messaging, UX, and CTAs to generate more qualified leads.",
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
    <main className="w-full bg-black text-white">
      <PageHero
        label="B2B Website Conversion Optimization"
        title="Traffic Without Conversions Is Just Overhead"
        titleHighlight="Just Overhead"
        description="I diagnose exactly why your B2B website isn't generating qualified leads, then systematically fix it — with data, not guesswork."
        backgroundImage="/images/services-hero-bg.png"
        badges={["Audit-first approach", "Measured before & after", "No vanity metrics"]}
      />

      {/* The core problem */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
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
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
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
                  <div className="text-xs uppercase tracking-widest text-cyan-500/60 mb-2">Root Cause</div>
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
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              How I Fix Conversion Problems
            </h2>
          </div>
          <div className="space-y-12">
            {process.map((item) => (
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

      {/* Before / After */}
      <section className="py-20 bg-slate-950/50 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <div className="max-w-2xl mb-14">
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
              Before &amp; After
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What Changes After Conversion Optimization
            </h2>
          </div>
          <div className="space-y-4">
            {beforeAfter.map((item) => (
              <div key={item.label} className={`rounded-xl border bg-slate-900/50 overflow-hidden transition-colors duration-200 ${'caseStudyHref' in item ? 'border-cyan-500/30 hover:border-cyan-400/60' : 'border-slate-800'}`}>
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
                    <div className="text-3xl font-black text-cyan-400">{item.after}</div>
                  </div>
                </div>
                <div className="px-6 pb-4 border-t border-slate-800 pt-3 text-center">
                  {'caseStudyHref' in item && item.caseStudyHref ? (
                    <Link href={item.caseStudyHref} className="text-xs text-cyan-500 hover:text-cyan-300 transition-colors duration-200">
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

      {/* Related */}
      <section className="py-20 border-b border-slate-800">
        <div className="mx-auto max-w-375 px-6">
          <h2 className="text-2xl font-bold text-white mb-8">Related</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/case-studies/ecommerce-website-redesign-increase-aov" className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/20 transition-all duration-200">
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
        secondaryHref="/work"
        secondaryLabel="View Case Studies"
      />
    </main>
  );
}
