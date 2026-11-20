import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { readClient as client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { DEFAULT_OG_IMAGE } from "@/app/lib/og";
import JsonLd from "@/components/JsonLd";
import { portableTextComponents } from "@/components/PortableTextComponents";
import { projects, type Project } from "@/data/projects";

// Previous / next follow the portfolio order on /case-studies and wrap at
// the ends. Every portfolio project with a slug has a page (see loadStudy).
function getAdjacentProjects(slug: string) {
  const navigable = projects.filter((p): p is Project & { slug: string } => Boolean(p.slug));
  const i = navigable.findIndex((p) => p.slug === slug);
  if (i === -1 || navigable.length < 2) return null;
  return {
    prev: navigable[(i - 1 + navigable.length) % navigable.length],
    next: navigable[(i + 1) % navigable.length],
  };
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

// Sanity content when the page is published; otherwise a page built from the
// portfolio card in data/projects.ts, so every card has a working detail page.
async function loadStudy(slug: string) {
  const study = await client.fetch(CASE_STUDY_QUERY, { slug });
  const project = projects.find((p) => p.slug === slug);
  if (study) {
    return {
      ...study,
      websiteUrl: study.websiteUrl ?? project?.url,
      heroSrc: study.mainImage ? urlFor(study.mainImage).width(1400).url() : null,
      heroAlt: study.mainImage?.alt ?? study.title,
    };
  }
  if (!project) return null;
  return {
    _id: `project-${slug}`,
    title: project.name,
    slug: { current: slug },
    clientName: project.name,
    kind: "project",
    platform: project.platform,
    websiteUrl: project.url,
    excerpt: project.summary,
    tagline: project.summary,
    details: project.details,
    heroSrc: project.screenshot,
    heroAlt: `${project.name} website`,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = await loadStudy(slug);
  if (!study) return { title: "Case Study Not Found" };
  const canonical = `https://blacklabdev.com/case-studies/${slug}`;
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
  const study = await loadStudy(slug);

  if (!study) return notFound();

  const adjacent = getAdjacentProjects(slug);

  const heroMetrics = study.metrics?.slice(0, 3) ?? [];
  const isProject = study.kind === "project";
  // Real hostname when the live URL is known; otherwise just the client name,
  // never a guessed domain.
  const siteHost: string = study.websiteUrl
    ? new URL(study.websiteUrl).hostname
    : (study.clientName ?? study.title);
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

        <div className="relative z-10 mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
          <div className={`grid gap-12 items-center py-20 md:py-24 md:min-h-[82vh] ${study.heroSrc ? "grid-cols-1 lg:grid-cols-[1fr_1.1fr]" : "grid-cols-1"}`}>

            {/* ── Left: text + metrics ── */}
            <div className="flex flex-col justify-center">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <Link href="/case-studies" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">
                  ← Case Studies
                </Link>
                <span className="text-slate-700">/</span>
                <span className="text-xs text-slate-500">{isProject ? "Project" : "Case Study"}</span>
                {study.platform && (
                  <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full border border-volt-500/20 bg-volt-500/5 text-volt-500/80">
                    {study.platform}
                  </span>
                )}
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

              {study.websiteUrl && (
                <a
                  href={study.websiteUrl}
                  target="_blank"
                  rel="noopener"
                  className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-volt-500 hover:text-volt-400 transition-colors duration-200"
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

        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/40 to-transparent" />
      </section>

      {/* ─── FULL METRICS GRID ────────────────────────── */}
      {study.metrics && study.metrics.length > 0 && (
        <section className="py-20 border-b border-slate-800">
          <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
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

      {/* ─── WHAT WE BUILT ────────────────────────────── */}
      {study.details && study.details.length > 0 && (
        <section className="py-20 border-b border-slate-800">
          <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
            <div className="max-w-2xl mb-10">
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                The Build
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">What We Built</h2>
              <div className="mt-4 h-px w-32 bg-linear-to-r from-volt-500/60 via-volt-500/25 to-transparent" />
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {study.details.map((item: string) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-neutral-800 bg-neutral-950 px-5 py-4 text-slate-300">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-volt-500 shadow-[0_0_6px_rgba(227,245,68,0.7)] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ─── BEFORE / AFTER ───────────────────────────── */}
      {study.beforeImage && study.mainImage && (
        <section className="py-20 border-b border-slate-800">
          <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
            <div className="max-w-2xl mb-10">
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                The Transformation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Before &amp; After</h2>
              <div className="mt-4 h-px w-32 bg-linear-to-r from-volt-500/60 via-volt-500/25 to-transparent" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                { label: "Before", image: study.beforeImage, accent: "text-slate-400 border-slate-700" },
                { label: "After", image: study.mainImage, accent: "text-volt-400 border-volt-500/40" },
              ].map(({ label, image, accent }) => (
                <figure key={label} className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950">
                  <div className="relative aspect-16/10 w-full">
                    <Image
                      src={urlFor(image).width(1400).url()}
                      alt={image.alt ?? `${study.clientName ?? study.title} — ${label.toLowerCase()}`}
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
      {study.body && (
        <section className="py-20 border-b border-slate-800">
          <div className="mx-auto max-w-225 px-6">
            <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h3:text-xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300 prose-ul:space-y-1 prose-strong:text-white">
              <PortableText value={study.body} components={portableTextComponents} />
            </article>
          </div>
        </section>
      )}

      {/* ─── GALLERY ──────────────────────────────────── */}
      {study.gallery && study.gallery.length > 0 && (
        <section className="py-20 border-b border-slate-800">
          <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
            <div className="max-w-2xl mb-10">
              <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">
                The Finished Site
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Gallery</h2>
              <div className="mt-4 h-px w-32 bg-linear-to-r from-volt-500/60 via-volt-500/25 to-transparent" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {study.gallery.map((image: { _key: string; alt?: string; caption?: string }) => (
                <figure key={image._key} className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950">
                  <div className="relative aspect-16/10 w-full">
                    <Image
                      src={urlFor(image).width(1000).url()}
                      alt={image.alt ?? image.caption ?? study.title}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  {image.caption && (
                    <figcaption className="px-5 py-3 border-t border-neutral-800 text-sm text-slate-400">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── PREVIOUS / NEXT PROJECT ──────────────────── */}
      {adjacent && (
        <nav aria-label="More projects" className="py-16 border-b border-slate-800">
          <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20">
            <div className="mb-8 flex items-end justify-between gap-4">
              <span className="text-xs tracking-[0.3em] uppercase text-volt-500 font-semibold">More Work</span>
              <Link href="/case-studies#portfolio" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors duration-200">
                All projects
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {([
                { dir: "Previous", project: adjacent.prev },
                { dir: "Next", project: adjacent.next },
              ] as const).map(({ dir, project }) => (
                <Link
                  key={dir}
                  href={`/case-studies/${project.slug}`}
                  rel={dir === "Previous" ? "prev" : "next"}
                  className={`group flex items-center gap-5 rounded-2xl border border-neutral-800 bg-neutral-950 p-4 transition-all duration-300 hover:border-volt-500/40 hover:shadow-[0_0_40px_rgba(227,245,68,0.07)] ${dir === "Next" ? "md:flex-row-reverse md:text-right" : ""}`}
                >
                  <div className="relative aspect-16/10 w-32 sm:w-40 shrink-0 overflow-hidden rounded-lg border border-white/10">
                    <Image
                      src={project.screenshot}
                      alt=""
                      fill
                      sizes="160px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="min-w-0 grow">
                    <span className={`flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.2em] uppercase text-slate-500 group-hover:text-volt-500 transition-colors duration-200 ${dir === "Next" ? "md:justify-end" : ""}`}>
                      {dir === "Previous" && (
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                      )}
                      {dir} project
                      {dir === "Next" && (
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </span>
                    <span className="mt-1.5 block text-lg font-bold text-white leading-snug truncate">{project.name}</span>
                    <span className="mt-1 block text-xs text-slate-500">{project.platform}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}

      {/* ─── CTA ─────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 border-t border-volt-500/20">
        <div className="absolute inset-0 bg-linear-to-br from-[#111214] via-slate-950 to-[#0b0b0c]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-volt-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-volt-500/6 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-volt-500/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 text-center">
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
