import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";
import PageHero from "@/components/PageHero";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SanityDocument } from "next-sanity";
import PageClose from "@/components/PageClose";

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
  title: "Engineering Articles | Black Lab Development",
  description:
    "Technical articles on web engineering, performance, software architecture, and platform decisions — from a senior engineer with 15+ years and a low tolerance for cargo-cult thinking.",
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
        badges={["Senior-led execution", "Production systems", "Direct collaboration"]}
      />

      {/* GRID */}
      <section className="py-6 md:py-9 relative overflow-hidden">
        {/* Ambient neon glows */}
        <div className="absolute top-32 left-1/4 w-175 h-175 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-32 right-1/4 w-125 h-125 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-[1500px] px-6 relative">
           {/* Section eyebrow */}
          <div className="flex items-center gap-6 mb-10 md:mb-20">
            <div>
              <span className="inline-block mb-3 text-xs tracking-[0.5em] uppercase text-cyan-400 font-mono drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]">
                // Articles
              </span>
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="bg-linear-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                 All Articles
                </span>
              </h2>
              <p className="text-sm text-neutral-500 mt-1">{total} article{total !== 1 ? "s" : ""} published</p>
            </div>
            <div className="flex-1 h-px bg-linear-to-r from-cyan-500/80 via-cyan-500/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-stretch">
            {articles.map((a, index) => (
              <AnimatedCard key={a._id} delay={index * 80}>
                <Link
                  href={`/articles/${a.slug.current}`}
                  className="h-full group flex flex-col border border-neutral-800 rounded-xl overflow-hidden bg-neutral-950 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.10)]"
                >
                  {/* Top accent line */}
                  <div className="h-px bg-linear-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/70 transition-all duration-500" />

                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={a.mainImage ? urlFor(a.mainImage).width(800).url() : "/images/articles/default.jpg"}
                      alt={a.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-95 group-hover:scale-[1.02] transition-all duration-500"
                    />
                    {/* Neon tint overlay on hover */}
                    <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-cyan-500/0 group-hover:to-cyan-500/10 transition-all duration-500" />
                    {/* Bottom fade into card */}
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-neutral-950 to-transparent" />
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

                    <h2 className="text-xl font-medium mb-3 text-neutral-100 group-hover:text-cyan-200 transition-colors duration-200">
                      {a.title}
                    </h2>

                    <p className="text-neutral-400 text-sm article-excerpt grow">
                      {toPlainText(a.excerpt)}
                    </p>

                    {/* Read indicator */}
                    <div className="mt-5 pt-4 border-t border-neutral-800/60 flex items-center gap-1 text-xs font-medium text-cyan-500/0 group-hover:text-cyan-400 transition-colors duration-300">
                      Read article
                      <span className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </div>
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
       {/* ================= CLOSE ================= */}
        <PageClose
        title="The Work That Actually Moves Systems Forward"
        bodyPrimary="Not every problem needs a new stack. Not every engagement needs a full rebuild. Black Lab Development focuses on the work that actually moves systems forward — with clear tradeoffs and practical decisions."
        bodySecondary="If you need a senior engineer who can step into complex systems, identify real issues, and execute effectively, these services are designed for that kind of work."
        secondaryHref="/work"
        secondaryLabel="View Work"
      />
    </main>
  );
}
