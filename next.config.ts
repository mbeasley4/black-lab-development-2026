import type { NextConfig } from "next";

// Content-Security-Policy is set in middleware.ts (per-request nonce) rather
// than here — several pages render page-specific JSON-LD, including
// /articles/[slug] and /case-studies/[slug] which pull content from Sanity
// on an ISR revalidate cycle, so a build-time hash allowlist can't cover them.

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/work",
        destination: "/case-studies",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async headers() {
    return [
      {
        // Applies everywhere, including /studio — none of these restrict
        // Sanity Studio's own functionality.
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
