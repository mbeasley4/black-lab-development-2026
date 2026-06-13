// Shared OG/Twitter card defaults. Import into every page's metadata export.
// Dynamic pages (articles/[slug], case-studies/[slug]) use their own content
// image when available and fall back to this constant.

export const DEFAULT_OG_IMAGE = {
  url: "/images/homepage-hero-bg.png",
  width: 1554,
  height: 867,
  alt: "Black Lab Development — B2B Website Design & Pipeline Generation",
} as const;

export const DEFAULT_OG_IMAGE_URL = DEFAULT_OG_IMAGE.url;
