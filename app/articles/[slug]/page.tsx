import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import { ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import AnimatedCard from "@/components/AnimatedCard";

export const revalidate = 3600;

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  _updatedAt,
  title,
  slug,
  mainImage,
  publishedAt,
  body,
  "excerpt": pt::text(excerpt),
  "author": author->{ name, "url": url },
  "seoTitle": seo.title,
  "metaDescription": seo.metaDescription
}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await client.fetch(POST_QUERY, { slug });

  if (!article) {
    return { title: "Article Not Found | Black Lab Development" };
  }

  const title = article.seoTitle
    ? article.seoTitle
    : `${article.title} | Black Lab Development`;

  let description: string = article.metaDescription ?? article.excerpt ?? "";

  if (!description && article.body) {
    description = article.body
      .filter((block: any) => block._type === "block")
      .map((block: any) =>
        block.children?.map((child: any) => child.text ?? "").join("") ?? ""
      )
      .join(" ");
  }

  if (!article.metaDescription && description.length > 157) {
    description = description.slice(0, 157) + "...";
  }

  if (!description) {
    description =
      "Technical article from Black Lab Development on web engineering, performance, and platform architecture.";
  }

  const canonical = `https://blacklabdev.com/articles/${slug}`;
  // Use the article's own mainImage as the social share card so each post
  // gets a unique OG/Twitter image instead of falling back to the site default.
  const ogImage = article.mainImage
    ? urlFor(article.mainImage).width(1200).height(630).fit("crop").url()
    : undefined;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: canonical,
      publishedTime: article.publishedAt ?? undefined,
      authors: [article.author?.url ?? "https://blacklabdev.com/about"],
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, height: 630, alt: article.title }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage && { images: [ogImage] }),
    },
  };
}


const RELATED_POSTS_QUERY = `*[_type == "post" && slug.current != $slug] | order(publishedAt desc) [0...9] {
  _id,
  title,
  slug,
  mainImage,
  "excerpt": pt::text(excerpt),
  publishedAt
}`;

function extractText(body: any[]): string {
    if (!body) return "";
    return body
        .filter((block: any) => block._type === "block")
        .map((block: any) =>
            block.children?.map((child: any) => child.text ?? "").join("") ?? ""
        )
        .join(" ");
}

function estimateReadTime(body: any[]): number {
    const text = extractText(body);
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 200));
}

function countWords(body: any[]): number {
    const text = extractText(body);
    return text.trim().split(/\s+/).filter(Boolean).length;
}


function formatDate(date?: string | Date) {
  if (!date) return null;
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const [article, relatedArticles] = await Promise.all([
        client.fetch(POST_QUERY, { slug }),
        client.fetch(RELATED_POSTS_QUERY, { slug }),
    ]);

    if (!article) {
        return notFound();
    }

    const readTime = estimateReadTime(article.body);
    const wordCount = countWords(article.body);
    const shuffledRelated = [...relatedArticles]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    const description = article.metaDescription ?? article.excerpt ?? "";
    const canonicalUrl = `https://blacklabdev.com/articles/${article.slug.current}`;

    // For the visible byline we want an internal, client-side navigation. The
    // stored author URL is an absolute blacklabdev.com URL (used as-is in the
    // structured data / OG tags), so collapse it to a same-origin pathname here
    // and fall back to /about.
    const authorHref = (() => {
        const url = article.author?.url;
        if (!url) return "/about";
        try {
            const parsed = new URL(url);
            if (parsed.hostname.replace(/^www\./, "") === "blacklabdev.com") {
                return `${parsed.pathname}${parsed.search}${parsed.hash}` || "/about";
            }
            return url;
        } catch {
            return url.startsWith("/") ? url : "/about";
        }
    })();

    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": article.title,
            "description": description,
            "datePublished": article.publishedAt,
            "dateModified": article._updatedAt ?? article.publishedAt,
            "wordCount": wordCount,
            "inLanguage": "en-US",
            "url": canonicalUrl,
            "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl },
            ...(article.mainImage && {
                "image": urlFor(article.mainImage).width(1200).url(),
            }),
            "author": {
                "@type": "Person",
                "name": article.author?.name ?? "Black Lab Development",
                "url": article.author?.url ?? "https://blacklabdev.com/about",
            },
            "publisher": {
                "@type": "Organization",
                "@id": "https://blacklabdev.com/#business",
                "name": "Black Lab Development",
                "url": "https://blacklabdev.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://blacklabdev.com/images/blacklabdevelopment.png",
                },
            },
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://blacklabdev.com" },
                { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://blacklabdev.com/articles" },
                { "@type": "ListItem", "position": 3, "name": article.title, "item": canonicalUrl },
            ],
        },
    ];

    return (
        <main className="bg-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ReadingProgressBar />

            {/* ================= CINEMATIC HERO ================= */}
            {article.mainImage && (
                <section className="relative min-h-screen w-full overflow-hidden">
                    <Image
                        src={urlFor(article.mainImage).width(1920).url()}
                        alt={article.mainImage.alt ?? article.title}
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* Gradient overlay matching site style */}
                    <div className="absolute inset-0 bg-linear-to-br from-blue-950/85 via-slate-900/85 to-black/90" />

                    {/* Ambient glow orbs */}
                    <div className="absolute top-1/4 right-1/4 w-125 h-125 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-1/4 left-1/4 w-100 h-100 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                    {/* Hero content — vertically centered */}
                    <div className="relative z-10 flex min-h-screen items-center">
                        <div className="mx-auto max-w-225 w-full px-6 pb-20 pt-32">
                            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
                                Article
                            </span>

                            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 max-w-4xl">
                                {article.title}
                            </h1>

                            {/* Metadata strip */}
                            <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-400">
                                {article.publishedAt && (
                                    <span>
                                        {new Date(article.publishedAt).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </span>
                                )}
                                {article.author?.name && (
                                    <>
                                        <span className="text-cyan-500/40">·</span>
                                        <span>
                                            by{" "}
                                            <Link
                                                href={authorHref}
                                                className="rounded-sm underline decoration-transparent underline-offset-2 transition-colors duration-200 hover:text-neutral-200 hover:decoration-current focus-visible:text-neutral-200 focus-visible:decoration-current focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
                                            >
                                                {article.author.name}
                                            </Link>
                                        </span>
                                    </>
                                )}
                                {readTime > 0 && (
                                    <>
                                        <span className="text-cyan-500/40">·</span>
                                        <span>{readTime} min read</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                        <ChevronDown className="w-6 h-6 text-cyan-400 opacity-70" />
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />
                </section>
            )}

            {/* ================= CONTENT ================= */}
            <section className="mx-auto max-w-225 px-6 py-20">
                <div className="breadcrumb">
                    <Link
                        href="/articles"
                        className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-white mb-6 transition-colors"
                    >
                        Articles
                    </Link> &gt; <span className="text-sm text-neutral-400">{article.title}</span>
                </div>
                <article className="prose prose-invert max-w-none">
                    {article.body && <PortableText value={article.body} />}
                </article>

                {/* Author bio — expertise signal for AI systems */}
                <div className="mt-16 pt-10 border-t border-slate-800">
                    <div className="flex items-start gap-6">
                        <div className="shrink-0 w-14 h-14 rounded-full overflow-hidden border border-slate-700">
                            <img
                                src="/images/michael-beasley.png"
                                alt="Michael Beasley"
                                className="w-full h-full object-cover object-top"
                                width={56}
                                height={56}
                            />
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">Written by</p>
                            <Link
                                href={authorHref}
                                className="text-base font-semibold text-white hover:text-cyan-400 transition-colors duration-200"
                            >
                                Michael Beasley
                            </Link>
                            <p className="text-sm text-slate-500 mt-0.5 mb-3">
                                Senior Web Developer &amp; Founder, Black Lab Development
                            </p>
                            <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
                                Michael Beasley is a Cincinnati-based web developer with 15+ years of experience building B2B websites, manufacturing platforms, and revenue-focused digital infrastructure. He specializes in conversion architecture, technical SEO, and Next.js / WordPress development for industrial and technical B2B companies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ================= RELATED ARTICLES ================= */}
            {shuffledRelated.length > 0 && (
              <section className="relative py-24 overflow-hidden">
                {/* Neon ambient glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-75 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" />

                <div className="relative mx-auto max-w-375 px-6">
                  {/* Section heading */}
                  <div className="mb-12 flex flex-col items-center text-center">
                    <span className="inline-block mb-3 text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold">
                      Continue Reading
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                      Related{" "}
                      <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]">
                        Articles
                      </span>
                    </h2>
                    <div className="mt-4 w-16 h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
                    {shuffledRelated.map((a, index: number) => (
                      <AnimatedCard key={a._id} delay={index * 80}>
                        <Link
                          href={`/articles/${a.slug?.current}`}
                          className="h-full group flex flex-col rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 hover:border-cyan-500/50 transition-colors duration-300 shadow-[0_0_0_0_rgba(34,211,238,0)] hover:shadow-[0_0_24px_-4px_rgba(34,211,238,0.25)]"
                        >
                          <div className="relative h-52 overflow-hidden">
                            <Image
                              src={a.mainImage ? urlFor(a.mainImage).width(800).url() : "/images/articles/default.jpg"}
                              alt={a.title}
                              fill
                              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                            />
                            {/* Image neon overlay on hover */}
                            <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-transparent" />
                            <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 transition-colors duration-300" />
                          </div>

                          <div className="p-6 flex flex-col grow">
                            {a.publishedAt && (
                              <time
                                dateTime={new Date(a.publishedAt).toISOString()}
                                className="block mb-2 text-xs uppercase tracking-widest text-cyan-500/60"
                              >
                                {formatDate(a.publishedAt)}
                              </time>
                            )}

                            <h3 className="text-lg font-semibold mb-3 text-neutral-200 group-hover:text-cyan-300 transition-colors duration-300 leading-snug">
                              {a.title}
                            </h3>

                            <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3 grow">
                              {a.excerpt}
                            </p>

                            <div className="mt-4 flex items-center gap-1 text-xs text-cyan-400 font-medium opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                              Read article
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                              </svg>
                            </div>
                          </div>
                        </Link>
                      </AnimatedCard>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" />
              </section>
            )}
        </main>
    );
}
