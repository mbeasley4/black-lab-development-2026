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
  "border-amber-500/30 bg-amber-500/10 text-amber-400",
  "border-blue-500/30 bg-blue-500/10 text-blue-400",
  "border-amber-400/30 bg-amber-400/8 text-amber-300",
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
    <main className="w-full bg-[#0b0b0c] text-white">
      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-amber-500/20">
        {study.mainImage ? (
          <>
            <Image
              src={urlFor(study.mainImage).width(1920).url()}
              alt={study.mainImage.alt ?? study.title}
              fill
              priority
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-linear-to-br from-[#0b0b0c]/95 via-[#111214]/90 to-black/98" />
          </>
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-[#111214]/90 via-slate-950/80 to-[#0b0b0c]" />
        )}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />

        <div className="relative z-10 py-16 md:py-24 mx-auto max-w-[1500px] px-6">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Link href="/work" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">
              ← Work
            </Link>
            <span className="text-slate-700">/</span>
            <span className="text-xs text-slate-500">Case Study</span>
          </div>

          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/35 bg-amber-500/8 text-amber-500 text-xs font-bold tracking-[0.2em] uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.9)]" />
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

        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/40 to-transparent" />
      </section>

      {/* ─── MAIN IMAGE ───────────────────────────────── */}
      {study.mainImage && (
        <section className="relative border-b border-slate-800">
          <div className="mx-auto max-w-[1500px] px-6 py-12">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-neutral-800 shadow-[0_0_60px_rgba(245,158,11,0.06)]">
              <Image
                src={urlFor(study.mainImage).width(1920).url()}
                alt={study.mainImage.alt ?? study.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0b0b0c]/40 to-transparent" />
            </div>
          </div>
        </section>
      )}

      {/* ─── FULL METRICS GRID ────────────────────────── */}
      {study.metrics && study.metrics.length > 0 && (
        <section className="py-20 border-b border-slate-800">
          <div className="mx-auto max-w-[1500px] px-6">
            <div className="max-w-2xl mb-10">
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-amber-500 font-semibold">
                The Results
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Key Metrics</h2>
              <div className="mt-4 h-px w-32 bg-linear-to-r from-amber-500/60 via-amber-500/25 to-transparent" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-slate-800/40 rounded-2xl overflow-hidden border border-neutral-800">
              {study.metrics.map(
                (m: { improvement: string; label: string; value?: string; note?: string }, i: number) => (
                  <div key={i} className="bg-neutral-950 px-8 py-8 text-center">
                    <div className="text-4xl font-black text-amber-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.4)] mb-2">
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
      <section className="relative overflow-hidden py-24 border-t border-amber-500/20">
        <div className="absolute inset-0 bg-linear-to-br from-[#111214] via-slate-950 to-[#0b0b0c]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 text-center">
          <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-amber-500 font-semibold">
            Work With Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build on a Better Foundation?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Start with a performance and conversion audit. We'll identify what's limiting your site — and what it would take to fix it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-amber-500 text-black px-10 py-4 text-base font-semibold hover:bg-amber-400 transition-colors duration-200 shadow-lg shadow-amber-500/25"
            >
              Start a Conversation
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors duration-200"
            >
              View all case studies
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-500/40 to-transparent" />
      </section>
    </main>
  );
}
