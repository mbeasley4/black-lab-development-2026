import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { readClient as client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import JsonLd from "@/components/JsonLd";
import PageClose from "@/components/PageClose";
import { portableTextComponents } from "@/components/PortableTextComponents";
import { projects, type Project } from "@/data/projects";
import { getProjectDetail, type DetailSection } from "@/data/projectDetails";

// "More Work" shows the next projects in portfolio order (as on /work),
// wrapping at the end. Every portfolio project with a slug has a page.
function getMoreProjects(slug: string, count = 3) {
  const navigable = projects.filter((p): p is Project & { slug: string } => Boolean(p.slug));
  const i = navigable.findIndex((p) => p.slug === slug);
  const others = navigable.length - (i === -1 ? 0 : 1);
  return Array.from({ length: Math.min(count, others) }, (_, k) =>
    navigable[(Math.max(i, -1) + 1 + k) % navigable.length],
  );
}

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
  kind,
  platform,
  websiteUrl,
  mainImage,
  beforeImage,
  gallery,
  details,
  publishedAt,
  metrics,
  body,
  "seoTitle": seo.title,
  "metaDescription": seo.metaDescription
}`;

type GalleryItem = { key: string; src: string; alt: string; caption?: string };
type Metric = { improvement: string; label: string; value?: string; note?: string };

// Column count follows the number of items so 1-3 metrics don't sit in a half-empty row.
const metricGridCols = (count: number) =>
  count <= 1 ? "grid-cols-1 max-w-sm" : count === 2 ? "grid-cols-2 max-w-2xl" : count === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2 lg:grid-cols-4";
type SanityImage = { _key?: string; alt?: string; caption?: string };

// Page content comes from, in order:
//   1. a published Sanity caseStudy with this slug (unless the write-up in
//      data/projectDetails.ts sets overridesSanity),
//   2. the full write-up in data/projectDetails.ts,
//   3. the portfolio card in data/projects.ts.
// Every source is normalized to the same shape so the template renders them
// identically, and every portfolio card has a working detail page.
async function loadStudy(slug: string) {
  const detail = getProjectDetail(slug);
  const study = detail?.overridesSanity
    ? null
    : await client.fetch(CASE_STUDY_QUERY, { slug });
  const project = projects.find((p) => p.slug === slug);
  if (study) {
    return {
      ...study,
      websiteUrl: study.websiteUrl ?? project?.url,
      heroSrc: study.mainImage ? urlFor(study.mainImage).width(1400).url() : null,
      heroAlt: study.mainImage?.alt ?? study.title,
      beforeSrc: study.beforeImage ? urlFor(study.beforeImage).width(1400).url() : null,
      beforeAlt: study.beforeImage?.alt,
      galleryItems: (study.gallery ?? []).map((image: SanityImage, i: number) => ({
        key: image._key ?? String(i),
        src: urlFor(image).width(1000).url(),
        alt: image.alt ?? image.caption ?? study.title,
        caption: image.caption,
      })) as GalleryItem[],
      sections: null as DetailSection[] | null,
      results: (study.metrics ?? []) as Metric[],
      facts: [] as Metric[],
    };
  }
  if (!project) return null;
  return {
    _id: `project-${slug}`,
    title: detail?.title ?? project.name,
    slug: { current: slug },
    clientName: project.name,
    industry: detail?.industry,
    kind: "project",
    platform: project.platform,
    websiteUrl: project.url,
    excerpt: detail?.excerpt ?? project.summary,
    tagline: detail?.tagline ?? project.summary,
    seoTitle: detail?.seoTitle,
    metaDescription: detail?.metaDescription,
    details: detail?.details ?? project.details,
    results: (detail?.results ?? []).map((m) => ({ improvement: m.value, label: m.label, note: m.note })) as Metric[],
    facts: (detail?.metrics ?? []).map((m) => ({ improvement: m.value, label: m.label, note: m.note })) as Metric[],
    heroSrc: detail?.main.src ?? project.screenshot,
    heroAlt: detail?.main.alt ?? `${project.name} website`,
    beforeSrc: detail?.before?.src ?? null,
    beforeAlt: detail?.before?.alt,
    galleryItems: (detail?.gallery ?? []).map((image, i) => ({ key: String(i), ...image })) as GalleryItem[],
    body: null,
    sections: detail?.body ?? null,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = await loadStudy(slug);
  if (!study) return { title: "Project Not Found" };
  const canonical = `https://blacklabdev.com/work/${slug}`;
  const title = study.seoTitle || study.title;
  const description = study.metaDescription || study.excerpt || "";
  const ogImage = study.mainImage
    ? { url: urlFor(study.mainImage).width(1200).height(630).fit("crop").url(), width: 1200, height: 630, alt: study.title }
    : study.heroSrc
      ? { url: study.heroSrc, alt: study.title }
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
  "border-neutral-800 bg-white/[0.04] text-white",
  "border-neutral-800 bg-white/[0.04] text-white",
  "border-neutral-800 bg-white/[0.04] text-white",
];

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await loadStudy(slug);

  if (!study) return notFound();

  const moreProjects = getMoreProjects(slug);

  // Only measured results appear as hero chips; build facts are shown once below.
  // Hero stats: measured results first, then build facts, three max.
  const heroMetrics: Metric[] = [...study.results, ...study.facts].slice(0, 3);
  // The full results grid only earns its place when there are more results than the hero shows.
  const showResultsGrid = study.results.length > heroMetrics.length;
  // Real hostname when the live URL is known; otherwise just the client name,
  // never a guessed domain.
  const siteHost: string = study.websiteUrl
    ? new URL(study.websiteUrl).hostname
    : (study.clientName ?? study.title);
  const canonicalUrl = `https://blacklabdev.com/work/${study.slug.current}`;

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
    ...(study.heroSrc && {
      image: study.mainImage
        ? urlFor(study.mainImage).width(1200).url()
        : `https://blacklabdev.com${study.heroSrc}`,
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
      { "@type": "ListItem", position: 2, name: "Work", item: "https://blacklabdev.com/work" },
      { "@type": "ListItem", position: 3, name: study.title, item: canonicalUrl },
    ],
  };

  return (
    <main className="w-full bg-surface text-white">
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-neutral-800 bg-surface">
        {/* Ambient glows */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

        <div className="hero-frame relative z-10 mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className={`grid w-full gap-12 items-center ${study.heroSrc ? "grid-cols-1 lg:grid-cols-[1fr_1.1fr]" : "grid-cols-1"}`}>

            {/* ── Left: text + metrics ── */}
            <div className="flex flex-col justify-center">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <Link href="/work" className="text-xs text-neutral-400 hover:text-neutral-400 transition-colors">
                  ← Work
                </Link>
                <span className="text-neutral-500">/</span>
                <span className="text-xs text-neutral-400">Project</span>
                {study.platform && (
                  <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full border border-neutral-800 bg-white/[0.04] text-neutral-500">
                    {study.platform}
                  </span>
                )}
              </div>

              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-neutral-300 mb-6 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                {study.clientName ?? "Project"}
                {study.industry ? ` · ${study.industry}` : ""}
              </span>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white leading-tight">
                {study.title}
              </h1>

              {study.tagline && (
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-10 max-w-xl">
                  {study.tagline}
                </p>
              )}

              {heroMetrics.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {heroMetrics.map((m: Metric, i: number) => (
                    <div
                      key={i}
                      className={`rounded-xl border px-4 sm:px-6 py-4 text-center flex-1 min-w-0 ${HERO_METRIC_STYLES[i]}`}
                    >
                      <div className="text-2xl sm:text-3xl font-black">{m.improvement}</div>
                      <div className="text-xs text-neutral-400 mt-1 uppercase tracking-wide">{m.label}</div>
                      {m.note && <div className="text-[11px] text-neutral-500 mt-1.5 leading-snug">{m.note}</div>}
                    </div>
                  ))}
                </div>
              )}

              {study.websiteUrl && (
                <a
                  href={study.websiteUrl}
                  target="_blank"
                  rel="noopener"
                  className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white hover:text-neutral-300 transition-colors duration-200"
                >
                  Visit {siteHost.replace(/^www\./, "")}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5h5v5M19 5l-9 9M10 5H5v14h14v-5" />
                  </svg>
                </a>
              )}
            </div>

            {/* ── Right: main image screenshot ── */}
            {study.heroSrc && (
              <div className="relative flex items-center justify-center lg:justify-end">
                {/* Glow halo behind the frame */}
                <div className="absolute -inset-6 bg-white/[0.04] rounded-3xl blur-3xl pointer-events-none" />
                <div className="absolute -inset-2 bg-white/[0.04] rounded-2xl blur-xl pointer-events-none" />

                {/* Browser chrome frame */}
                <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden border border-neutral-800 ring-1 ring-white/5">
                  {/* Chrome bar */}
                  <div className="h-9 bg-neutral-900 border-b border-neutral-800 flex items-center gap-2 px-4 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/[0.04]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    <div className="ml-4 flex-1 max-w-xs h-5 bg-neutral-800 rounded-md flex items-center px-3">
                      <span className="text-[10px] text-neutral-500 truncate">{siteHost}</span>
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div className="relative aspect-16/10 w-full">
                    <Image
                      src={study.heroSrc}
                      alt={study.heroAlt}
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

        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* ─── RESULTS (measured outcomes) ──────────────── */}
      {showResultsGrid && (
        <section className="py-20 border-b border-neutral-800" aria-labelledby="results-heading">
          <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
            <div className="max-w-2xl mb-10">
              <span className="eyebrow inline-block mb-4 text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold">
                The Results
              </span>
              <h2 id="results-heading" className="text-3xl md:text-4xl font-bold text-white">Key Metrics</h2>
            </div>
            <div className={`grid ${metricGridCols(study.results.length)} gap-px bg-neutral-800/40 rounded-2xl overflow-hidden border border-neutral-800`}>
              {study.results.map((m: Metric, i: number) => (
                <div key={i} className="bg-neutral-950 px-8 py-8 text-center">
                  <div className="text-4xl font-black text-white mb-2">{m.improvement}</div>
                  <div className="text-sm font-semibold text-white mb-1">{m.label}</div>
                  {m.value && <div className="text-xs text-neutral-400">{m.value}</div>}
                  {m.note && <div className="text-xs text-neutral-500 mt-0.5">{m.note}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── WHAT WE BUILT ────────────────────────────── */}
      {study.details && study.details.length > 0 && (
        <section className="py-20 border-b border-neutral-800">
          <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
            <div className="max-w-2xl mb-10">
              <span className="eyebrow inline-block mb-4 text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold">
                The Build
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Project Highlights</h2>
              <div className="mt-4 h-px w-32 bg-linear-to-r from-white/10 via-white/10 to-transparent" />
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {study.details.map((item: string) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-neutral-800 bg-neutral-950 px-5 py-4 text-neutral-300">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ─── BEFORE / AFTER ───────────────────────────── */}
      {study.beforeSrc && study.heroSrc && (
        <section className="py-20 border-b border-neutral-800">
          <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
            <div className="max-w-2xl mb-10">
              <span className="eyebrow inline-block mb-4 text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold">
                The Transformation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Before &amp; After</h2>
              <div className="mt-4 h-px w-32 bg-linear-to-r from-white/10 via-white/10 to-transparent" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                { label: "Before", src: study.beforeSrc as string, alt: study.beforeAlt, accent: "text-neutral-400 border-neutral-700" },
                { label: "After", src: study.heroSrc as string, alt: study.heroAlt, accent: "text-white border-neutral-500" },
              ].map(({ label, src, alt, accent }) => (
                <figure key={label} className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950">
                  <div className="relative aspect-16/10 w-full">
                    <Image
                      src={src}
                      alt={alt ?? `${study.clientName ?? study.title} — ${label.toLowerCase()}`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <figcaption className="px-5 py-3 border-t border-neutral-800">
                    <span className={`inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-2 py-0.5 rounded-full border ${accent}`}>
                      {label}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── BODY ─────────────────────────────────────── */}
      {(study.body || study.sections) && (
        <section className="py-20 border-b border-neutral-800">
          <div className="mx-auto max-w-225 px-6">
            <article className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h3:text-xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:text-neutral-300 prose-p:leading-relaxed prose-li:text-neutral-300 prose-ul:space-y-1 prose-strong:text-white">
              {study.body ? (
                <PortableText value={study.body} components={portableTextComponents} />
              ) : (
                study.sections?.map((section: DetailSection) => (
                  <div key={section.heading}>
                    {section.level === 3 ? <h3>{section.heading}</h3> : <h2>{section.heading}</h2>}
                    {section.paragraphs.map((p: string) => (
                      <p key={p.slice(0, 40)}>{p}</p>
                    ))}
                  </div>
                ))
              )}
            </article>
          </div>
        </section>
      )}

      {/* ─── GALLERY ──────────────────────────────────── */}
      {study.galleryItems.length > 0 && (
        <section className="py-20 border-b border-neutral-800">
          <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
            <div className="max-w-2xl mb-10">
              <span className="eyebrow inline-block mb-4 text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold">
                The Finished Site
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Gallery</h2>
              <div className="mt-4 h-px w-32 bg-linear-to-r from-white/10 via-white/10 to-transparent" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {study.galleryItems.map((image: GalleryItem) => (
                <figure key={image.key} className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950">
                  <div className="relative aspect-16/10 w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  {image.caption && (
                    <figcaption className="px-5 py-3 border-t border-neutral-800 text-sm text-neutral-400">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── MORE WORK ────────────────────────────────── */}
      {moreProjects.length > 0 && (
        <nav aria-labelledby="more-work-heading" className="relative overflow-hidden bg-neutral-100 py-20 md:py-24">
          {/* Subtle diagonal texture so the band doesn't read as a flat block */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "repeating-linear-gradient(135deg, #000 0 1px, transparent 1px 14px)" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="eyebrow inline-block mb-3 text-xs tracking-[0.2em] uppercase font-semibold text-neutral-500">Keep Exploring</span>
                <h2 id="more-work-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-950">
                  More Work
                </h2>
              </div>
              <Link
                href="/work#portfolio"
                className="inline-flex items-center gap-2 rounded-md bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-900 transition-colors duration-200"
              >
                All projects
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {moreProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-neutral-950 shadow-[0_18px_40px_-16px_rgba(15,33,56,0.16)] ring-1 ring-black/5 transition-all duration-300 ease-out hover:shadow-[0_28px_60px_-14px_rgba(15,33,56,0.16)] motion-safe:hover:-translate-y-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black"
                >
                  <div className="bg-linear-to-br from-neutral-900 to-neutral-950 p-3 border-b border-neutral-800">
                    <div className="overflow-hidden rounded-lg border border-white/10 bg-neutral-900 transition-colors duration-300 group-hover:border-neutral-500">
                      <div className="flex h-5 items-center gap-1 border-b border-white/5 px-2.5" aria-hidden="true">
                        <span className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
                        <span className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
                        <span className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
                      </div>
                      <div className="relative aspect-16/10 w-full overflow-hidden">
                        <Image
                          src={project.screenshot}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.05]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex grow flex-col gap-3 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-bold leading-snug text-white">{project.name}</h3>
                      <span className="mt-0.5 shrink-0 rounded-full border border-neutral-800 bg-white/[0.04] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white">
                        {project.platform}
                      </span>
                    </div>
                    <p className="line-clamp-2 text-sm leading-relaxed text-neutral-400">{project.summary}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-1 text-xs font-semibold uppercase tracking-wide text-white group-hover:text-white">
                      View project
                      <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}

      <PageClose
        title="Want Results Like These?"
        body="Tell me about your project and I'll show you what it would take."
        secondaryHref="/work"
        secondaryLabel="View All Work"
      />
    </main>
  );
}
