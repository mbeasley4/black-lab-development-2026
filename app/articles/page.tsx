import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";
import PageHero from "@/components/PageHero";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SanityDocument } from "next-sanity";

export const dynamic = "force-dynamic";

const PAGE_SIZE = 9;

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) [$start...$end] {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt
}`;

const COUNT_QUERY = `count(*[_type == "post" && defined(slug.current)])`;

export const metadata = {
  title: "Articles | Black Lab Development",
  description:
    "Technical strategy, performance, and platform engineering insights from Black Lab Development.",
};

function toPlainText(blocks: { _type: string; children?: { text: string }[] }[]) {
  if (!blocks || !Array.isArray(blocks)) return "";
  return blocks
    .filter((b) => b._type === "block" && b.children)
    .map((b) => b.children!.map((c) => c.text).join(""))
    .join(" ");
}

function formatDate(date?: string | Date) {
  if (!date) return null;
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Pagination({ page, totalPages }: { page: number; totalPages: number }) {
  if (totalPages <= 1) return null;

  // Build a window of page numbers around the current page
  const getPages = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages: (number | "…")[] = [];
    pages.push(1);
    if (page > 3) pages.push("…");
    for (let p = Math.max(2, page - 1); p <= Math.min(totalPages - 1, page + 1); p++) {
      pages.push(p);
    }
    if (page < totalPages - 2) pages.push("…");
    pages.push(totalPages);
    return pages;
  };

  const pages = getPages();

  const linkBase =
    "inline-flex items-center justify-center min-w-[2.25rem] h-9 px-3 rounded-md text-sm font-medium transition-colors";
  const active = "bg-cyan-500 text-black";
  const inactive = "border border-neutral-800 text-neutral-400 hover:border-cyan-500/40 hover:text-white";
  const disabled = "border border-neutral-900 text-neutral-700 pointer-events-none";

  return (
    <nav
      className="flex items-center justify-center gap-2 mt-16"
      aria-label="Article pagination"
    >
      {page > 1 ? (
        <Link
          href={`?page=${page - 1}`}
          className={`${linkBase} ${inactive} gap-1 pr-4`}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-4 h-4" />
          Prev
        </Link>
      ) : (
        <span className={`${linkBase} ${disabled} gap-1 pr-4`} aria-disabled="true">
          <ChevronLeft className="w-4 h-4" />
          Prev
        </span>
      )}

      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`ellipsis-${i}`} className="text-neutral-600 px-1">
            …
          </span>
        ) : (
          <Link
            key={p}
            href={`?page=${p}`}
            aria-current={p === page ? "page" : undefined}
            className={`${linkBase} ${p === page ? active : inactive}`}
          >
            {p}
          </Link>
        )
      )}

      {page < totalPages ? (
        <Link
          href={`?page=${page + 1}`}
          className={`${linkBase} ${inactive} gap-1 pl-4`}
          aria-label="Next page"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Link>
      ) : (
        <span className={`${linkBase} ${disabled} gap-1 pl-4`} aria-disabled="true">
          Next
          <ChevronRight className="w-4 h-4" />
        </span>
      )}
    </nav>
  );
}

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const [articles, total] = await Promise.all([
    client.fetch<SanityDocument[]>(POSTS_QUERY, { start, end }),
    client.fetch<number>(COUNT_QUERY),
  ]);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <main className="w-full bg-black text-white">
      {/* HERO */}
      <PageHero
        label="Articles"
        title="From the Codebase"
        titleHighlight="Codebase"
        description="Articles documenting technical decisions, tradeoffs, and lessons learned while building systems that run under real-world conditions."
        backgroundImage="/images/articles-hero-bg.png"
      />

      {/* GRID */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-stretch">
            {articles.map((a, index) => (
              <AnimatedCard key={a._id} delay={index * 80}>
                <Link
                  href={`/articles/${a.slug.current}`}
                  className="h-full group block border border-neutral-900 rounded-xl overflow-hidden bg-neutral-950"
                >
                  <div className="relative h-56">
                    <Image
                      src={a.mainImage ? urlFor(a.mainImage).width(800).url() : "/images/articles/default.jpg"}
                      alt={a.title}
                      fill
                      className="object-cover opacity-90"
                    />
                  </div>

                  <div className="p-6 flex flex-col grow">
                    {a.publishedAt && (
                      <time
                        dateTime={new Date(a.publishedAt).toISOString()}
                        className="block mb-2 text-xs uppercase tracking-widest text-neutral-500"
                      >
                        {formatDate(a.publishedAt)}
                      </time>
                    )}

                    <h2 className="text-xl font-medium mb-2 group-hover:text-white transition">
                      {a.title}
                    </h2>

                    <p className="text-neutral-400 text-sm article-excerpt">
                      {toPlainText(a.excerpt)}
                    </p>
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>

          {/* Pagination */}
          <Pagination page={page} totalPages={totalPages} />

          {/* Page count label */}
          {totalPages > 1 && (
            <p className="text-center text-xs text-neutral-600 mt-4">
              Page {page} of {totalPages} · {total} articles
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
