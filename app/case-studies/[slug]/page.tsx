import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import JsonLd from "@/components/JsonLd";
import { portableTextComponents } from "@/components/PortableTextComponents";

export const revalidate = 3600;

const CASE_STUDY_QUERY = `*[_type == "caseStudy" && slug.current == $slug][0] {
  _id,
  _updatedAt,
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
  if (!study) return { title: "Case Study Not Found" };
  const canonical = `https://blacklabdev.com/case-studies/${slug}`;
  const title = study.seoTitle || study.title;
  const description = study.metaDescription || study.excerpt || "";
  const ogImage = study.mainImage
    ? { url: urlFor(study.mainImage).width(1200).height(630).fit("crop").url(), width: 1200, height: 630, alt: study.title }
    : DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title,
      description,
      url: canonical,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}

const HERO_METRIC_STYLES = [
  "border-volt-500/30 bg-volt-500/10 text-volt-400",
  "border-volt-500/30 bg-volt-500/10 text-volt-400",
  "border-volt-400/30 bg-volt-400/8 text-volt-300",
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
  const canonicalUrl = `https://blacklabdev.com/case-studies/${study.slug.current}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.excerpt || "",
    datePublished: study.publishedAt,
    dateModified: study._updatedAt ?? study.publishedAt,
    inLanguage: "en-US",
    url: canonicalUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    ...(study.mainImage && {
      image: urlFor(study.mainImage).width(1200).url(),
    }),
    author: {
      "@type": "Person",
      name: "Michael Beasley",
      url: "https://blacklabdev.com/about",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://blacklabdev.com/#business",
      name: "Black Lab Development",
      url: "https://blacklabdev.com",
      logo: {
        "@type": "ImageObject",
        url: "https://blacklabdev.com/images/blacklabdevelopment.png",
      },
    },
    about: study.industry || undefined,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://blacklabdev.com" },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://blacklabdev.com/case-studies" },
      { "@type": "ListItem", position: 3, name: study.title, item: canonicalUrl },
    ],
  };

  return (
    <main className="w-full bg-[#0b0b0c] text-white">
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-volt-500/20 bg-[#0b0b0c]">
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-175 h-175 bg-volt-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-volt-500/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/25 to-transparent" />

        <div className="relative z-10 mx-auto max-w-375 px-6">
          <div className={`grid gap-12 items-center py-20 md:py-24 md:min-h-[82vh] ${study.mainImage ? "grid-cols-1 lg:grid-cols-[1fr_1.1fr]" : "grid-cols-1"}`}>

            {/* ── Left: text + metrics ── */}
            <div className="flex flex-col justify-center">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <Link href="/case-studies" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">
                  ← Case Studies
                </Link>
                <span className="text-slate-700">/</span>
                <span className="text-xs text-slate-500">Case Study</span>
              </div>

              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-volt-500/35 bg-volt-500/8 text-volt-500 text-xs font-bold tracking-[0.2em] uppercase mb-6 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-volt-500 shadow-[0_0_8px_rgba(227,245,68,0.9)]" />
                {study.clientName ?? "Case Study"}
                {study.industry ? ` · ${study.industry}` : ""}
              </span>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
                {study.title}
              </h1>

              {study.tagline && (
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
                  {study.tagline}
                </p>
              )}

              {heroMetrics.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {heroMetrics.map((m: { improvement: string; label: string }, i: number) => (
                    <div
                      key={i}
                      className={`rounded-xl border px-4 sm:px-6 py-4 text-center flex-1 min-w-0 ${HERO_METRIC_STYLES[i]}`}
                    >
                      <div className="text-2xl sm:text-3xl font-black">{m.improvement}</div>
                      <div className="text-xs text-slate-400 mt-1 uppercase tracking-wide">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ── Right: main image screenshot ── */}
            {study.mainImage && (
              <div className="relative flex items-center justify-center lg:justify-end">
                {/* Glow halo behind the frame */}
                <div className="absolute -inset-6 bg-volt-500/10 rounded-3xl blur-3xl pointer-events-none" />
                <div className="absolute -inset-2 bg-volt-500/5 rounded-2xl blur-xl pointer-events-none" />

                {/* Browser chrome frame */}
                <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden border border-volt-500/25 shadow-[0_0_80px_rgba(227,245,68,0.18),0_32px_64px_rgba(0,0,0,0.6)] ring-1 ring-white/5">
                  {/* Chrome bar */}
                  <div className="h-9 bg-neutral-900 border-b border-neutral-800 flex items-center gap-2 px-4 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-volt-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    <div className="ml-4 flex-1 max-w-xs h-5 bg-neutral-800 rounded-md flex items-center px-3">
                      <span className="text-[10px] text-neutral-500 truncate">{study.clientName?.toLowerCase().replace(/\s+/g, "") ?? "client"}.com</span>
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div className="relative aspect-16/10 w-full">
                    <Image
                      src={urlFor(study.mainImage).width(1400).url()}
                      alt={study.mainImage.alt ?? study.title}
                      fill
                      priority
                      className="object-cover object-top"
                    />
                    {/* Subtle bottom fade into the frame */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-neutral-950/60 to-transparent" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/40 to-transparent" />
      </section>

      {/* ─── FULL METRICS GRID ────────────────────────── */}
      {study.metrics && study.metrics.length > 0 && (
        <section className="py-20 border-b border-slate-800">
          <div className="mx-auto max-w-375 px-6">
            <div className="max-w-2xl mb-10">
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                The Results
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Key Metrics</h2>
              <div className="mt-4 h-px w-32 bg-linear-to-r from-volt-500/60 via-volt-500/25 to-transparent" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-slate-800/40 rounded-2xl overflow-hidden border border-neutral-800">
              {study.metrics.map(
                (m: { improvement: string; label: string; value?: string; note?: string }, i: number) => (
                  <div key={i} className="bg-neutral-950 px-8 py-8 text-center">
                    <div className="text-4xl font-black text-volt-500 drop-shadow-[0_0_10px_rgba(227,245,68,0.4)] mb-2">
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
          <div className="mx-auto max-w-225 px-6">
            <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h3:text-xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300 prose-ul:space-y-1 prose-strong:text-white">
              <PortableText value={study.body} components={portableTextComponents} />
            </article>
          </div>
        </section>
      )}

      {/* ─── CTA ─────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 border-t border-volt-500/20">
        <div className="absolute inset-0 bg-linear-to-br from-[#111214] via-slate-950 to-[#0b0b0c]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-volt-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-volt-500/6 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-375 px-6 text-center">
          <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
            Work With Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build on a Better Foundation?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Start with a performance and conversion audit. I'll identify what's limiting your site — and what it would take to fix it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-volt-500 text-black px-10 py-4 text-base font-semibold hover:bg-volt-400 transition-colors duration-200 shadow-lg shadow-volt-500/25"
            >
              Start a Conversation
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-volt-500 hover:text-volt-400 transition-colors duration-200"
            >
              View all case studies
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/40 to-transparent" />
      </section>
    </main>
  );
}
