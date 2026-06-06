import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "vercel-screenshot", allow: "/" },
      {
        userAgent: ["GPTBot", "ClaudeBot", "CCBot", "anthropic-ai", "Google-Extended", "Amazonbot"],
        allow: "/",
        disallow: ["/api/", "/studio/"],
      },
    ],
    sitemap: "https://blacklabdev.com/sitemap.xml",
  };
}
