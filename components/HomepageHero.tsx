import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SanityDocument } from "next-sanity";
import HomepageHeroClient, { type FeaturedArticle } from "@/components/HomepageHeroClient";

const FEATURED_POST_QUERY = `*[_type == "post" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc) [0] {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  publishedAt,
  "category": categories[0]->title
}`;

function toPlainText(blocks?: { _type: string; children?: { text: string }[] }[]) {
  if (!blocks || !Array.isArray(blocks)) return "";
  return blocks
    .filter((b) => b._type === "block" && b.children)
    .map((b) => b.children!.map((c) => c.text).join(""))
    .join(" ");
}

export default async function HomepageHero() {
  const post = await client.fetch<SanityDocument | null>(FEATURED_POST_QUERY);

  const featuredArticle: FeaturedArticle | null = post
    ? {
        id: post._id,
        title: post.title,
        slug: post.slug.current,
        excerpt: toPlainText(post.excerpt),
        imageUrl: post.mainImage ? urlFor(post.mainImage).width(320).height(320).url() : null,
        imageAlt: post.mainImage?.alt || post.title,
        category: post.category ?? null,
        publishedAt: post.publishedAt ?? null,
      }
    : null;

  return <HomepageHeroClient featuredArticle={featuredArticle} />;
}
