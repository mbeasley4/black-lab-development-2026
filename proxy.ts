import { NextResponse, type NextRequest } from "next/server";

// CSP for the marketing site. Uses a per-request nonce (rather than pinned
// hashes) because several pages render page-specific JSON-LD — including
// /articles/[slug] and /case-studies/[slug], which pull content from Sanity
// on an ISR revalidate cycle, so their script content isn't knowable at
// build time and can't be hash-pinned in next.config.ts.
function buildCsp(nonce: string) {
  // Next.js dev mode needs 'unsafe-eval' for HMR and reconstructing stack
  // traces across environments — React never uses eval() in production, so
  // this is scoped out of the production CSP entirely.
  const scriptSrc =
    process.env.NODE_ENV === "development"
      ? `script-src 'self' 'unsafe-eval' 'nonce-${nonce}' https://www.googletagmanager.com https://challenges.cloudflare.com`
      : `script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com https://challenges.cloudflare.com`;

  return [
    `default-src 'self'`,
    scriptSrc,
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
  ].join("; ");
}

export function proxy(request: NextRequest) {
  // Sanity Studio (/studio) is a separate React app that needs a much
  // looser policy — leave it with no CSP rather than fight it with the
  // marketing site's strict one.
  if (request.nextUrl.pathname.startsWith("/studio")) {
    return NextResponse.next();
  }

  const nonce = crypto.randomUUID().replace(/-/g, "");
  const csp = buildCsp(nonce);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("Content-Security-Policy", csp);
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
