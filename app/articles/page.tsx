import Link from "next/link";
import Image from "next/image";
import { dbConnect } from "@/lib/mongodb";
import { Article } from "@/models/Article";
import AnimatedCard from "@/components/AnimatedCard";
import PageHero from "@/components/PageHero";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Articles | Black Lab Development",
  description:
    "Technical strategy, performance, and platform engineering insights from Black Lab Development.",
};

export default async function ArticlesPage() {
  await dbConnect();

  function formatDate(date?: string | Date) {
    if (!date) return null;

    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  const articles = await Article.find({ status: "publish" })
    .sort({ publishedAt: -1, createdAt: -1 })
    .select("title slug excerpt coverImage publishedAt")
    .lean();

  return (
    <main className="w-full bg-black text-white">
      {/* HERO */}
      <PageHero
        label="Articles"
        title="From the Codebase"
        titleHighlight="Codebase"
        description="Articles documenting technical decisions, tradeoffs, and lessons learned while building systems that run under real-world conditions."
        backgroundImage="/images/articles-hero-bg.png"
        // No badges for articles page
      />

      {/* GRID */}
      <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-stretch">
          {articles.map((a, index) => (
            <AnimatedCard key={a.slug} delay={index * 100}>
              <Link
                href={`/articles/${a.slug}`}
                className="h-full group block border border-neutral-900 rounded-xl overflow-hidden bg-neutral-950"
              >
                <div className="relative h-56">
                  <Image
                    src={a.coverImage || "/images/articles/default.jpg"}
                    alt={a.title}
                    fill
                    className="object-cover opacity-90"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
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
                    {a.excerpt}
                  </p>
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </main>
  );
}
