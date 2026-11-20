import Link from "next/link";
import Image from "next/image";
import AnimatedCard from '@/components/AnimatedCard';
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SanityDocument } from "next-sanity";

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc) [0...3] {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt
}`;

export default async function ArticlesBlock() {
  const articles = await client.fetch<SanityDocument[]>(POSTS_QUERY);

  function formatDate(date?: string | Date) {
    if (!date) return null;

    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  function toPlainText(blocks: { _type: string; children?: { text: string }[] }[]) {
    if (!blocks || !Array.isArray(blocks)) return "";
    return blocks
      .filter((b) => b._type === "block" && b.children)
      .map((b) => b.children!.map((c) => c.text).join(""))
      .join(" ");
  }

  return (
    <section className="w-full bg-surface text-white py-24 relative overflow-hidden">
      <div className="mx-auto max-w-375 px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
        {/* Header: matches the other homepage sections */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-block mb-4 text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold">
              Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white">
              Building, Learning &amp; Sharing
            </h2>
            <p className="mt-4 text-lg text-neutral-400 leading-relaxed">
              Development tips, technical deep dives, and lessons from real projects — what&apos;s working, and why.
            </p>
          </div>
          <Link
            href="/articles"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white hover:text-neutral-300 transition-colors duration-200"
          >
            All articles
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Latest articles: equal-height cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {articles.map((a, index) => (
            <AnimatedCard key={a._id} delay={index * 100}>
              <Link
                href={`/articles/${a.slug.current}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 transition-all duration-300 hover:border-neutral-600 hover:shadow-xl hover:shadow-black/40 motion-safe:hover:-translate-y-1"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={a.mainImage ? urlFor(a.mainImage).width(800).url() : "/images/articles/default.jpg"}
                    alt={a.title}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex grow flex-col p-6 md:p-7">
                  {a.publishedAt && (
                    <time
                      dateTime={new Date(a.publishedAt).toISOString()}
                      className="mb-3 text-xs uppercase tracking-widest text-neutral-500 font-medium"
                    >
                      {formatDate(a.publishedAt)}
                    </time>
                  )}
                  <h3 className="mb-3 text-xl font-semibold leading-snug text-white line-clamp-3">
                    {a.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-neutral-400 line-clamp-2 md:line-clamp-3">
                    {toPlainText(a.excerpt)}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Read article
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
