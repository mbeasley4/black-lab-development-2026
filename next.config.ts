import type { NextConfig } from "next";

// Hashes for the site's fixed inline <script> tags (JSON-LD schema, the
// Consent Mode v2 bootstrap, and the GTM init snippet in
// components/GoogleTagManager.tsx). All three render identical byte-for-byte
// content on every request, so they're pinned by hash instead of a per-request
// nonce — a nonce would require reading headers() in the root layout, which
// would opt every page out of static generation.
//
// If any of those three inline scripts' contents ever change, recompute with:
//   node -e "console.log(require('crypto').createHash('sha256').update('<exact script text>','utf8').digest('base64'))"
const INLINE_SCRIPT_HASHES = [
  "'sha256-zrIk2JEpQx1IUEu9pQXAMyAMgECCHP+vk57dx2fK8uM='", // JSON-LD (localBusinessSchema)
  "'sha256-QU+tfx8I/BbvWM2lgpNQlTvJG/ecixlimEyHI93syQ0='", // Consent Mode v2 bootstrap
  "'sha256-j2MScxdg+HK0gb3JiXW+FIFxaZdzJuH9inl8WPfM5KY='", // GTM init snippet
];

const CSP_DIRECTIVES = [
  `default-src 'self'`,
  `script-src 'self' https://www.googletagmanager.com https://challenges.cloudflare.com ${INLINE_SCRIPT_HASHES.join(" ")}`,
  `style-src 'self' 'unsafe-inline'`,
  `img-src 'self' data: https://cdn.sanity.io`,
  `font-src 'self'`,
  `connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://us.aptabase.com https://challenges.cloudflare.com`,
  `frame-src https://www.googletagmanager.com https://challenges.cloudflare.com`,
  `object-src 'none'`,
  `base-uri 'self'`,
  `form-action 'self'`,
  `frame-ancestors 'self'`,
  `upgrade-insecure-requests`,
];

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
      {
        // Sanity Studio (/studio) is a separate React app (editor + GROQ
        // console) that needs a much looser policy — exclude it here rather
        // than fight it with the marketing site's strict CSP.
        source: "/((?!studio).*)",
        headers: [{ key: "Content-Security-Policy", value: CSP_DIRECTIVES.join("; ") }],
      },
    ];
  },
};

export default nextConfig;
