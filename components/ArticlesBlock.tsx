import Link from "next/link";
import Image from "next/image";
import { dbConnect } from "@/lib/mongodb";
import AnimatedCard from '@/components/AnimatedCard';
import { Article } from "@/models/Article";

export default async function ArticlesBlock() {
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
    .limit(3);
    return <section className="py-24">
        <div className="mx-auto max-w-[1500px] px-6 py-10">
            <h2 className="text-4xl text-white md:text-5xl font-semibold tracking-tight mb-6">Building, Learning & Sharing at Black Lab Development</h2>
            <p>Explore our latest articles featuring development tips, technical deep dives, and behind-the-scenes insights from real projects. From scalable web apps to modern tooling and workflows, this is where we share what’s working—and why.</p>
        </div>
        { /* Latest Articles */ }
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
         {/* CTA Buttons */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
                href="/articles"
                className="inline-flex items-center justify-center rounded-md bg-white px-10 py-4 text-sm font-medium uppercase tracking-wide text-black transition hover:bg-neutral-200"
            >
                Explore Our Knowledge Library
            </Link>
        </div>
      </section>;

}