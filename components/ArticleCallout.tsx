import Link from "next/link";
import { client } from "@/sanity/lib/client";

/**
 * Links to an article only once it is published, so pages can reference
 * upcoming articles without shipping a broken link.
 */
export default async function ArticleCallout({ slug, label = "Related reading" }: { slug: string; label?: string }) {
  const article = await client.fetch<{ title: string } | null>(
    `*[_type == "post" && slug.current == $slug][0]{ title }`,
    { slug },
  );
  if (!article) return null;

  return (
    <p className="mt-10 text-sm text-neutral-300">
      {label}:{" "}
      <Link
        href={`/articles/${slug}`}
        className="font-semibold text-white underline decoration-volt-500 decoration-2 underline-offset-4 hover:decoration-current"
      >
        {article.title}
      </Link>
    </p>
  );
}
