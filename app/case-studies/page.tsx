import type { Metadata } from "next";
import Link from "next/link";
import PageClose from "@/components/PageClose";
import JsonLd from "@/components/JsonLd";
import WorkShowcase from "@/components/WorkShowcase";
import { projects } from "@/data/projects";
import { readClient as client } from "@/sanity/lib/client";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";

export const revalidate = 3600;

const CASE_STUDIES_QUERY = `*[_type == "caseStudy"] | order(featured desc, publishedAt desc) {
  _id,
  title,
  slug,
  clientName,
  industry,
  excerpt,
  mainImage,
  featured,
  metrics,
  kind
}`;

export const metadata: Metadata = {
  title: "Website Case Studies | Real Results",
  description:
    "Real results: more qualified leads, faster load times, higher conversion rates, and better search visibility across B2B and ecommerce sites.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Website Case Studies | Real Results",
    description:
      "Real results: more qualified leads, faster load times, higher conversion rates, and better search visibility across B2B and ecommerce sites.",
    url: "/case-studies",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    title: "Website Case Studies | Real Results",
    description:
      "Real results: more qualified leads, faster load times, higher conversion rates, and better search visibility across B2B and ecommerce sites.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default async function CaseStudiesPage() {
  const allStudies = await client.fetch(CASE_STUDIES_QUERY);
  // "project" docs are detail pages for the portfolio cards above; only
  // metrics-led case studies go in the "More Case Studies" grid.
  const caseStudies = allStudies.filter((study: { kind?: string }) => study.kind !== "project");
  // A card links to its detail page only once that page is published.
  const publishedSlugs: string[] = allStudies
    .map((study: { slug?: { current?: string } }) => study.slug?.current)
    .filter(Boolean);

  // CollectionPage + ItemList exposes the case-study set as a structured,
  // ordered list for rich results and AI answer engines.
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Website Case Studies",
    description:
      "Real results: more qualified leads, faster load times, higher conversion rates, and better search visibility across B2B and ecommerce sites.",
    url: "https://blacklabdev.com/case-studies",
    isPartOf: { "@type": "WebSite", "@id": "https://blacklabdev.com/#website", name: "Black Lab Development", url: "https://blacklabdev.com" },
    publisher: { "@type": "Organization", "@id": "https://blacklabdev.com/#business" },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: allStudies.map((study: any, i: number) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://blacklabdev.com/case-studies/${study.slug?.current}`,
        name: study.title,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://blacklabdev.com" },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://blacklabdev.com/case-studies" },
    ],
  };

  return (
    <main className="w-full bg-[#0b0b0c] text-white">
      <JsonLd data={[collectionSchema, breadcrumbSchema]} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-volt-500/20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/case-studies-hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#0b0b0c]/95 via-[#0b0b0c]/88 to-[#0b0b0c]/80" />
        <div className="absolute top-0 right-0 w-175 h-125 bg-volt-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-125 h-100 bg-volt-500/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 py-20 md:py-28">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-volt-500/35 bg-volt-500/8 text-volt-500 text-xs font-bold tracking-[0.2em] uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-volt-500 shadow-[0_0_8px_rgba(227,245,68,0.9)]" />
            Case Studies
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-8">
            <span className="block text-white">Real Work.</span>
            <span className="block text-volt-500 drop-shadow-[0_0_60px_rgba(227,245,68,0.35)]">Real Outcomes.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mb-8">
            If a website doesn&apos;t generate leads, bookings, or pipeline — it&apos;s not doing its job. Here&apos;s what building it right actually produces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-volt-500 text-black px-8 py-3.5 text-sm font-semibold hover:bg-volt-400 transition-colors duration-200 shadow-lg shadow-volt-500/25"
            >
              Schedule a Call
            </Link>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-md border border-slate-700 px-8 py-3.5 text-sm font-semibold text-slate-300 hover:border-volt-500/40 hover:text-white transition-all duration-200"
            >
              Browse the Work
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/40 to-transparent" />
      </section>

      {/* ── Work Accomplished ── */}
      <section id="portfolio" className="py-20 md:py-24 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 left-1/4 w-175 h-175 bg-volt-500/6 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-150 h-150 bg-volt-600/6 rounded-full blur-[130px] pointer-events-none" />

        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 relative">
          <div className="mb-12 md:mb-16 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-volt-500/35 bg-volt-500/8 text-volt-500 text-xs font-bold tracking-[0.2em] uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-volt-500 shadow-[0_0_8px_rgba(227,245,68,0.9)]" />
              Work Accomplished
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5">
              {projects.length}+ Projects,{" "}
              <span className="text-volt-500">Shipped and Supported</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              15+ years building and maintaining production websites for manufacturers, healthcare providers, restaurants, and B2B platforms — on WordPress, Shopify, and custom Next.js builds.
            </p>
            <div className="mt-6 h-px w-64 bg-linear-to-r from-volt-500/60 via-volt-500/25 to-transparent" />
          </div>

          <WorkShowcase projects={projects} linkedSlugs={publishedSlugs} />
        </div>
      </section>

      {/* ── Case Studies intro ── */}
      <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 pt-20 md:pt-24 pb-4">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-volt-500/35 bg-volt-500/8 text-volt-500 text-xs font-bold tracking-[0.2em] uppercase mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-volt-500 shadow-[0_0_8px_rgba(227,245,68,0.9)]" />
          Case Studies
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
          A Closer Look, <span className="text-volt-500">With the Numbers</span>
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
          A handful of engagements broken down in detail — what was built, what changed, and what it produced.
        </p>
      </div>

      {/* ── Whole30 Featured Case Study ── */}
      <section className="relative py-20 overflow-hidden border-b border-slate-800 bg-[#0e0d14]">
        <div className="absolute top-0 right-0 w-150 h-150 bg-volt-500/8 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-violet-500/6 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/25 to-transparent" />

        <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">

          {/* Featured card */}
          <div className="relative rounded-2xl border border-volt-500/25 overflow-hidden bg-neutral-950/80">
            <div className="absolute -inset-px rounded-2xl blur-lg bg-linear-to-br from-volt-500/15 via-transparent to-transparent pointer-events-none" />
            <div className="h-0.5 bg-linear-to-r from-volt-600 via-volt-400 to-volt-600" />

            {/* Hero metric row */}
            <div className="relative grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-800/80 bg-linear-to-br from-volt-950/50 via-volt-950/20 to-neutral-950 border-b border-slate-800/80">
              <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
                <div className="absolute right-0 top-0 bottom-0 w-96 bg-linear-to-l from-volt-500/4 to-transparent" />
              </div>
              {[
                { value: "6,000+", label: "Daily Users", note: "Platform scale" },
                { value: "60%→97%", label: "SEO Health", note: "+37 points" },
                { value: "−25%", label: "Cost Reduction", note: "Infrastructure" },
                { value: "+50%", label: "Integrations", note: "API-driven" },
              ].map((m) => (
                <div key={m.label} className="relative px-4 sm:px-6 py-5 sm:py-7 text-center group hover:bg-volt-500/5 transition-colors duration-300">
                  <div className="text-2xl sm:text-4xl md:text-5xl font-black text-volt-400 drop-shadow-[0_0_20px_rgba(227,245,68,0.6)] mb-1.5 group-hover:drop-shadow-[0_0_32px_rgba(227,245,68,0.85)] transition-all duration-300 tabular-nums">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-white tracking-wide">{m.label}</div>
                  <div className="text-[10px] text-slate-600 mt-0.5">{m.note}</div>
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] divide-y lg:divide-y-0 lg:divide-x divide-slate-800/80">

              {/* Left — title + description + bullets */}
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-volt-500/35 bg-volt-500/8 text-volt-500 text-xs font-bold tracking-[0.2em] uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-volt-500 shadow-[0_0_8px_rgba(227,245,68,0.9)]" />
                    Featured Case Study
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-volt-500/30 bg-volt-500/8 text-volt-400 text-xs font-semibold tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-volt-400 animate-pulse" />
                    Ongoing Engagement
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-white mb-4">
                  Whole30 —{" "}
                  <span className="text-volt-400 drop-shadow-[0_0_30px_rgba(227,245,68,0.4)]">High-Traffic Platform</span>{" "}
                  &amp; React Engineering
                </h2>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
                  Whole30 is a high-traffic health and wellness platform serving thousands of daily users across recipe discovery, program guidance, and a curated partner marketplace — built on a performant WordPress foundation with key features delivered as embedded React components for speed and SEO control.
                </p>

                <h3 className="text-xs uppercase tracking-[0.25em] text-volt-500 font-semibold mb-4">What Was Built</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {[
                    "WordPress platform scaling to 6,000+ daily users",
                    "React components — Recipes, Articles, Testimonials, Approved Partners",
                    "Custom plugins, themes, and Gutenberg blocks",
                    "Shopify, CRM, SMS, and marketing automation via REST API",
                    "CI/CD, Cloudflare CDN, and WAF security hardening",
                    "Technical SEO rebuilt — 60% → 97% site health",
                    "Infrastructure costs reduced by 25%",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-300 text-sm leading-snug">
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-volt-500 shadow-[0_0_6px_rgba(227,245,68,0.5)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — stack + CTA */}
              <div className="p-8 md:p-10 flex flex-col gap-6 bg-neutral-950/40">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.25em] text-volt-500 font-semibold mb-3">Stack</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {["WordPress", "PHP", "React", "Gutenberg", "REST API", "Shopify", "Cloudflare", "GitHub Actions", "ActiveCampaign"].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded border border-slate-700 bg-slate-900 text-xs text-slate-400 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-800/80">
                  <p className="text-[11px] text-slate-600 leading-relaxed mb-6">Health &amp; Wellness · eCommerce · High-Traffic Content</p>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 rounded-md bg-volt-500 text-black px-6 py-3 text-sm font-semibold hover:bg-volt-400 transition-colors duration-200 shadow-lg shadow-volt-500/20 hover:shadow-volt-500/40"
                  >
                    Discuss Your Project
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sanity Case Studies ── */}
      {caseStudies.length > 0 && (
        <section className="relative py-20 overflow-hidden border-b border-slate-800">
          <div className="absolute top-0 left-1/4 w-175 h-100 bg-volt-500/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-150 h-100 bg-volt-600/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">

            {/* Section header */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">
                More Case <span className="text-volt-500 drop-shadow-[0_0_30px_rgba(227,245,68,0.35)]">Studies</span>
              </h2>
              <div className="mt-4 h-px w-48 bg-linear-to-r from-volt-500/60 via-volt-500/25 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((study: any, i: number) => {
                const isAmber = i % 2 === 0;
                const primaryMetric = study.metrics?.[0];
                return (
                  <Link key={study._id} href={`/case-studies/${study.slug?.current}`} className="group relative block">
                    <div className={`absolute -inset-px rounded-2xl blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100 ${isAmber ? "bg-linear-to-br from-volt-500/35 via-volt-500/10 to-transparent" : "bg-linear-to-br from-volt-500/35 via-volt-500/10 to-transparent"}`} />
                    <div className={`relative h-full rounded-2xl border overflow-hidden flex flex-col transition-all duration-300 bg-neutral-950 ${isAmber ? "border-neutral-800 group-hover:border-volt-500/55" : "border-neutral-800 group-hover:border-volt-500/55"}`}>

                      {/* Hero metric */}
                      {primaryMetric && (
                        <div className={`relative px-7 pt-7 pb-6 overflow-hidden ${isAmber ? "bg-linear-to-br from-volt-950/70 via-volt-950/25 to-neutral-950" : "bg-linear-to-br from-volt-950/70 via-volt-950/25 to-neutral-950"}`}>
                          <div className={`absolute top-0 left-0 right-0 h-0.5 ${isAmber ? "bg-linear-to-r from-volt-600 via-volt-400 to-volt-600" : "bg-linear-to-r from-volt-600 via-volt-400 to-volt-600"}`} />
                          <div className={`absolute right-5 top-1/2 -translate-y-1/2 text-[110px] font-black leading-none pointer-events-none select-none tabular-nums opacity-[0.04] ${isAmber ? "text-volt-400" : "text-volt-400"}`}>
                            {primaryMetric.improvement}
                          </div>
                          <div className={`relative text-5xl md:text-6xl font-black tabular-nums leading-none mb-2 transition-all duration-300 ${isAmber ? "text-volt-400 drop-shadow-[0_0_24px_rgba(227,245,68,0.55)] group-hover:drop-shadow-[0_0_36px_rgba(227,245,68,0.8)]" : "text-volt-400 drop-shadow-[0_0_24px_rgba(96,165,250,0.55)] group-hover:drop-shadow-[0_0_36px_rgba(96,165,250,0.8)]"}`}>
                            {primaryMetric.improvement}
                          </div>
                          <div className="text-xs text-slate-300 uppercase tracking-[0.2em] font-semibold">{primaryMetric.label}</div>
                          {primaryMetric.note && (
                            <div className="text-[10px] text-slate-600 mt-1">{primaryMetric.note}</div>
                          )}
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-7 flex flex-col flex-1 border-t border-slate-800/60">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          {study.clientName && (
                            <span className={`text-xs font-semibold uppercase tracking-widest ${isAmber ? "text-volt-500/70" : "text-volt-400/70"}`}>{study.clientName}</span>
                          )}
                          {study.industry && (
                            <span className="text-xs text-slate-600 uppercase tracking-widest">· {study.industry}</span>
                          )}
                        </div>
                        <h2 className={`text-lg md:text-xl font-bold text-white mb-3 leading-snug transition-colors duration-300 ${isAmber ? "group-hover:text-volt-100" : "group-hover:text-volt-100"}`}>
                          {study.title}
                        </h2>
                        {study.excerpt && (
                          <p className="text-slate-500 text-sm leading-relaxed mb-5">{study.excerpt}</p>
                        )}
                        {study.metrics && study.metrics.length > 1 && (
                          <div className="flex flex-wrap gap-4 mb-5 mt-auto">
                            {study.metrics.slice(1, 4).map((m: any) => (
                              <div key={m.label} className="flex items-baseline gap-1.5">
                                <span className={`text-base font-black tabular-nums ${isAmber ? "text-volt-500" : "text-volt-400"}`}>{m.improvement}</span>
                                <span className="text-[10px] text-slate-600 uppercase tracking-wide">{m.label}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        <div className={`inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-200 mt-auto ${isAmber ? "text-volt-500" : "text-volt-400"}`}>
                          <span>Read the full case study</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <PageClose
        title="Ready to Become the Next Case Study?"
        bodyPrimary="Every engagement is measured against real pipeline outcomes — qualified leads, conversion rates, and revenue attributed to the website."
        bodySecondary="Start with an audit. I'll identify what's limiting your site and show you exactly what I'd fix."
        secondaryHref="/contact"
        secondaryLabel="Schedule a Call"
      />
    </main>
  );
}
