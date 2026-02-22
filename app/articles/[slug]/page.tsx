import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import { ChevronDown } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ReadingProgressBar from "@/components/ReadingProgressBar";

export const dynamic = "force-dynamic";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  body,
  "author": author->{ name }
}`;

function estimateReadTime(body: any[]): number {
    if (!body) return 0;
    const text = body
        .filter((block: any) => block._type === "block")
        .map((block: any) =>
            block.children?.map((child: any) => child.text ?? "").join("") ?? ""
        )
        .join(" ");
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 200));
}

export default async function ArticlePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const article = await client.fetch(POST_QUERY, { slug });

    if (!article) {
        return notFound();
    }

    const readTime = estimateReadTime(article.body);

    return (
        <main className="bg-black text-white">
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
                                        <span>by {article.author.name}</span>
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
            </section>
        </main>
    );
}
