import Image from "next/image";
import { notFound } from "next/navigation";
import { dbConnect } from "@/lib/mongodb";
import { Article } from "@/models/Article";

export const runtime = "nodejs";

export default async function ArticlePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    await dbConnect();

    const article = await Article.findOne({
        slug,
        status: "publish",
    }).lean();

    if (!article) {
        return notFound();
    }

    return (
        <main className="bg-black text-white">
            {/* ================= HERO IMAGE ================= */}
            {article.coverImage && (
                <section className="relative h-[50vh] min-h-[300px] w-full overflow-hidden">
                    <Image
                        src={article.coverImage}
                        alt={article.title}
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/70" />

                    {/* Title overlay */}
                    <div className="relative z-10 h-[450px] flex items-center">
                        <div className="mx-auto max-w-[900px] px-6 pb-16">
                            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
                                {article.title}
                            </h1>
                            <p className="text-sm text-neutral-400 mt-2">
                                {new Date(article.publishedAt).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                </section>
            )}

            {/* ================= CONTENT ================= */}
            <section className="mx-auto max-w-[900px] px-6 py-20">
                <article
                    className="prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: article.contentHtml }}
                />
            </section>
        </main>
    );
}
