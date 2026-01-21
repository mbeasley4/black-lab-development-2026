import Link from "next/link";
import Image from "next/image";
import { dbConnect } from "@/lib/mongodb";
import { Article } from "@/models/Article";
import AnimatedCard from "@/components/AnimatedCard";

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
      <section className="relative overflow-hidden border-b border-neutral-900">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/articles-hero-bg.png')" }}
          />
          <div className="absolute inset-0 bg-black/78" />
        </div>

        <div className="relative z-10 h-[450px] flex items-center">
          <div className="mx-auto max-w-[1500px] px-6 w-full">
            <div className="max-w-5xl">
              <span className="inline-block mb-6 text-xs tracking-[0.3em] uppercase text-neutral-500">
                Articles
              </span>

              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                From the Codebase
              </h1>

              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                Articles documenting technical decisions, tradeoffs, and lessons
                learned while building systems that run under real-world conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

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
