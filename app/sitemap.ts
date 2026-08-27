import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

const BASE_URL = "https://blacklabdev.com";

async function getArticleSlugs(): Promise<string[]> {
  return client.fetch<string[]>(
    `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }.slug`
  );
}

async function getCaseStudySlugs(): Promise<string[]> {
  return client.fetch<string[]>(
    `*[_type == "caseStudy" && defined(slug.current)]{ "slug": slug.current }.slug`
  );
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articleSlugs, caseStudySlugs] = await Promise.all([
    getArticleSlugs(),
    getCaseStudySlugs(),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/small-business-website-design`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/conversion-optimization`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/custom-web-development`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/website-performance-optimization`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/partners`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/partners/white-label-web-development`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/partners/seo-fulfillment`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/cincinnati-web-developer`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/industries`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/industries/manufacturing`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/industries/professional-services`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/industries/healthcare`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/industries/technology`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/industries/ecommerce`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/industries/education`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/case-studies`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/articles`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/wordpress-development`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/shopify-development`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${BASE_URL}/articles/${slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => ({
    url: `${BASE_URL}/case-studies/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes, ...caseStudyRoutes];
}
