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
    <section className="w-full bg-linear-to-b from-black via-slate-950 to-[#111214] text-white py-24 relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-volt-500/6 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-volt-500/6 rounded-full blur-3xl" />

      <div className="mx-auto max-w-375 px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white pb-2">
            Building, Learning & Sharing at Black Lab Development
          </h2>
          <p className="text-lg text-[#e5e7eb]/70 leading-relaxed max-w-4xl">
            Explore our latest articles featuring development tips, technical deep dives, and behind-the-scenes insights from real projects. From scalable web apps to modern tooling and workflows, this is where we share what's working—and why.
          </p>
        </div>

        {/* Latest Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {articles.map((a, index) => (
            <AnimatedCard key={a._id} delay={index * 100}>
              <Link
                href={`/articles/${a.slug.current}`}
                className="group h-full block border border-neutral-800 rounded-2xl overflow-hidden bg-neutral-950 transition-all duration-500 hover:-translate-y-2 hover:border-volt-500/40 hover:shadow-xl hover:shadow-volt-500/10"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={a.mainImage ? urlFor(a.mainImage).width(800).url() : "/images/articles/default.jpg"}
                    alt={a.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-volt-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col grow relative">
                  {/* Hover gradient background */}
                  <div className="absolute inset-0 bg-linear-to-br from-volt-500/0 to-volt-500/0 group-hover:from-volt-500/3 group-hover:to-transparent transition-all duration-500 rounded-b-2xl" />

                  <div className="relative z-10">
                    {a.publishedAt && (
                      <time
                        dateTime={new Date(a.publishedAt).toISOString()}
                        className="block mb-3 text-xs uppercase tracking-widest text-volt-500/70 font-medium"
                      >
                        {formatDate(a.publishedAt)}
                      </time>
                    )}

                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-volt-400 transition-all duration-300 pb-1">
                      {a.title}
                    </h3>

                    <p className="text-sm text-[#e5e7eb]/60 leading-relaxed mb-4 group-hover:text-[#e5e7eb]/80 transition-colors duration-300">
                      {toPlainText(a.excerpt)}
                    </p>

                    {/* Read article CTA */}
                    <div className="flex items-center text-volt-500 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 mt-auto">
                      <span className="text-sm font-semibold">Read article</span>
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-volt-500/0 to-transparent group-hover:via-volt-500/80 transition-all duration-500 rounded-b-2xl" />
              </Link>
            </AnimatedCard>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/articles"
            className="inline-flex items-center justify-center rounded-md border-2 border-volt-500/40 bg-volt-500/8 px-10 py-4 text-sm font-semibold uppercase tracking-wide text-volt-400 transition-all duration-300 hover:border-volt-400 hover:bg-volt-500/15 hover:text-white hover:shadow-lg hover:shadow-volt-500/20"
          >
            Explore All Insights
            <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
