import Link from "next/link";
import PageHero from "@/components/PageHero";
import PageClose from "@/components/PageClose";
import { client } from "@/sanity/lib/client";

export const dynamic = "force-dynamic";

const CASE_STUDIES_QUERY = `*[_type == "caseStudy"] | order(featured desc, publishedAt desc) {
  _id,
  title,
  slug,
  clientName,
  industry,
  excerpt,
  mainImage,
  featured,
  metrics
}`;

export const metadata = {
  title: "Website Case Studies | Real Results | Black Lab Dev",
  description:
    "Real results: more qualified leads, faster load times, higher conversion rates, and better search visibility across B2B and ecommerce sites.",
};

export default async function CaseStudiesPage() {
  const caseStudies = await client.fetch(CASE_STUDIES_QUERY);

  return (
    <main className="w-full bg-[#0b0b0c] text-white">
      <PageHero
        label="Case Studies"
        title="Measured by Results, Not Deliverables"
        titleHighlight="Results"
        description="Real projects with real outcomes — qualified leads, conversion rates, and revenue attributed directly to the website."
        backgroundImage="/images/work-hero-bg.png"
        badges={["Pipeline-focused", "Measurable outcomes", "Senior-led delivery"]}
      />

      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-175 h-100 bg-amber-500/4 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-150 h-100 bg-blue-600/4 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-375 px-6">
          {caseStudies.length > 0 ? (
            <div className="space-y-8">
              {caseStudies.map((study: any, i: number) => {
                const isAmber = i % 2 === 0;
                return (
                  <Link key={study._id} href={`/case-studies/${study.slug?.current}`} className="group relative block">
                    <div className={`absolute -inset-px rounded-2xl blur-md transition-all duration-500 opacity-0 group-hover:opacity-100 ${isAmber ? "bg-linear-to-r from-amber-500/30 via-amber-500/10 to-amber-500/30" : "bg-linear-to-r from-blue-500/30 via-blue-500/10 to-blue-500/30"}`} />

                    <div className={`relative rounded-2xl border bg-neutral-950 transition-all duration-300 overflow-hidden ${isAmber ? "border-neutral-800 group-hover:border-amber-500/60" : "border-neutral-800 group-hover:border-blue-500/60"}`}>
                      <div className={`h-1 ${isAmber ? "bg-linear-to-r from-amber-500 via-amber-400 to-amber-500" : "bg-linear-to-r from-blue-500 via-blue-400 to-blue-500"}`} />

                      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px]">
                        <div className="p-10 flex flex-col justify-center">
                          <div className="flex flex-wrap items-center gap-3 mb-5">
                            <span className={`px-3 py-1 rounded-full border text-xs font-bold tracking-widest uppercase ${isAmber ? "border-amber-500/25 bg-amber-500/8 text-amber-500" : "border-blue-500/25 bg-blue-500/8 text-blue-400"}`}>
                              Case Study
                            </span>
                            {study.clientName && (
                              <span className="text-xs text-slate-500 uppercase tracking-widest">{study.clientName}</span>
                            )}
                            {study.industry && (
                              <span className="text-xs text-slate-600 uppercase tracking-widest">· {study.industry}</span>
                            )}
                          </div>

                          <h2 className={`text-2xl md:text-3xl font-bold text-white mb-4 leading-snug transition-colors duration-300 ${isAmber ? "group-hover:text-amber-100" : "group-hover:text-blue-100"}`}>
                            {study.title}
                          </h2>

                          {study.excerpt && (
                            <p className="text-slate-400 leading-relaxed mb-8 max-w-2xl">{study.excerpt}</p>
                          )}

                          {study.metrics && study.metrics.length > 0 && (
                            <div className="flex flex-wrap gap-8 mb-8">
                              {study.metrics.slice(0, 4).map((m: any) => (
                                <div key={m.label}>
                                  <div className={`text-2xl font-black ${isAmber ? "text-amber-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.4)]" : "text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.4)]"}`}>
                                    {m.improvement}
                                  </div>
                                  <div className="text-xs text-slate-500 uppercase tracking-wide mt-0.5">{m.label}</div>
                                </div>
                              ))}
                            </div>
                          )}

                          <div className={`inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-200 ${isAmber ? "text-amber-500" : "text-blue-400"}`}>
                            <span>Read the full case study</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>

                        <div className={`hidden lg:flex flex-col items-center justify-center border-l border-slate-800 p-10 relative overflow-hidden ${isAmber ? "bg-linear-to-b from-amber-950/40 to-[#111214]" : "bg-linear-to-b from-blue-950/40 to-[#111214]"}`}>
                          <div className="absolute inset-0 opacity-30">
                            <div className={`absolute inset-0 ${isAmber ? "bg-linear-to-br from-amber-500/8 to-transparent" : "bg-linear-to-br from-blue-500/8 to-transparent"}`} />
                          </div>
                          {study.metrics?.[0] && (
                            <div className="relative text-center">
                              <div className={`text-7xl font-black bg-clip-text text-transparent leading-none mb-3 ${isAmber ? "bg-linear-to-br from-amber-400 to-amber-300" : "bg-linear-to-br from-blue-400 to-blue-300"}`}>
                                {study.metrics[0].improvement}
                              </div>
                              <div className="text-slate-300 text-xs uppercase tracking-widest">{study.metrics[0].label}</div>
                              {study.metrics[0].note && (
                                <div className="text-slate-600 text-xs mt-2">{study.metrics[0].note}</div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">Case studies coming soon.</p>
              <Link href="/work" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors">
                View project portfolio →
              </Link>
            </div>
          )}
        </div>
      </section>

      <PageClose
        title="Ready to Become the Next Case Study?"
        bodyPrimary="Every engagement is measured against real pipeline outcomes — qualified leads, conversion rates, and revenue attributed to the website."
        bodySecondary="Start with an audit. We'll identify what's limiting your site and show you exactly what we'd fix."
        secondaryHref="/work"
        secondaryLabel="View Full Portfolio"
      />
    </main>
  );
}
