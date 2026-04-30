import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const dynamic = "force-dynamic";

const CASE_STUDY_QUERY = `*[_type == "caseStudy" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  clientName,
  industry,
  excerpt,
  tagline,
  mainImage,
  publishedAt,
  metrics,
  body,
  "seoTitle": seo.title,
  "metaDescription": seo.metaDescription
}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = await client.fetch(CASE_STUDY_QUERY, { slug });
  if (!study) return { title: "Case Study | Black Lab Development" };
  return {
    title: study.seoTitle || `${study.title} | Black Lab Development`,
    description: study.metaDescription || study.excerpt || "",
  };
}

const HERO_METRIC_STYLES = [
  "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
  "border-blue-500/30 bg-blue-500/10 text-blue-400",
  "border-violet-500/30 bg-violet-500/10 text-violet-400",
];

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await client.fetch(CASE_STUDY_QUERY, { slug });

  if (!study) return notFound();

  const heroMetrics = study.metrics?.slice(0, 3) ?? [];

  return (
    <main className="w-full bg-black text-white">
      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-cyan-500/20">
        {study.mainImage ? (
          <>
            <Image
              src={urlFor(study.mainImage).width(1920).url()}
              alt={study.mainImage.alt ?? study.title}
              fill
              priority
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-slate-900/92 to-black/98" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-950/80 to-cyan-950/70" />
        )}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />

        <div className="relative z-10 py-16 md:py-24 mx-auto max-w-[1500px] px-6">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Link href="/work" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">
              ← Work
            </Link>
            <span className="text-slate-700">/</span>
            <span className="text-xs text-slate-500">Case Study</span>
          </div>

          <span className="inline-block mb-5 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
            {study.clientName ?? "Case Study"}
            {study.industry ? ` · ${study.industry}` : ""}
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white leading-tight max-w-4xl">
            {study.title}
          </h1>

          {study.tagline && (
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mb-10">
              {study.tagline}
            </p>
          )}

          {heroMetrics.length > 0 && (
            <div className="flex flex-wrap gap-6">
              {heroMetrics.map((m: { improvement: string; label: string }, i: number) => (
                <div
                  key={i}
                  className={`rounded-xl border px-6 py-4 text-center ${HERO_METRIC_STYLES[i]}`}
                >
                  <div className="text-3xl font-black">{m.improvement}</div>
                  <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide">{m.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </section>

      {/* ─── FULL METRICS GRID ────────────────────────── */}
      {study.metrics && study.metrics.length > 0 && (
        <section className="py-20 border-b border-slate-800">
          <div className="mx-auto max-w-[1500px] px-6">
            <div className="max-w-2xl mb-10">
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
                The Results
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Key Metrics</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-slate-800/40 rounded-2xl overflow-hidden border border-slate-700/40">
              {study.metrics.map(
                (m: { improvement: string; label: string; value?: string; note?: string }, i: number) => (
                  <div key={i} className="bg-slate-900 px-8 py-8 text-center">
                    <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                      {m.improvement}
                    </div>
                    <div className="text-sm font-semibold text-white mb-1">{m.label}</div>
                    {m.value && <div className="text-xs text-slate-500">{m.value}</div>}
                    {m.note && <div className="text-xs text-slate-600 mt-0.5">{m.note}</div>}
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* ─── BODY ─────────────────────────────────────── */}
      {study.body && (
        <section className="py-20 border-b border-slate-800">
          <div className="mx-auto max-w-[900px] px-6">
            <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h3:text-xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300 prose-ul:space-y-1 prose-strong:text-white">
              <PortableText value={study.body} />
            </article>
          </div>
        </section>
      )}

      {/* ─── CTA ─────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 border-t border-cyan-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-cyan-950 to-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-purple-500/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build on a Better Foundation?
          </h2>
          <p className="text-xl text-cyan-50/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Start with a performance and conversion audit. We'll identify what's limiting your site — and what it would take to fix it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-4 text-base font-bold uppercase tracking-wide text-white hover:from-cyan-400 hover:to-blue-400 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
            >
              Start a Conversation
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
            >
              View all case studies
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
