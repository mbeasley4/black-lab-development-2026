"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/lib/analytics";

/**
 * Pushes a `page_view` event to the dataLayer on every SPA route change,
 * including initial mount. This replaces GTM's History Change trigger, which
 * can fire duplicate or out-of-order events on Next.js App Router navigations.
 *
 * Configure GA4 in GTM to fire on the custom "page_view" event trigger —
 * NOT on the built-in "All Pages / Page View" trigger — to keep counts clean.
 */
export default function RouteChangeTracker() {
  const pathname = usePathname();

  useEffect(() => {
    trackPageView();
  }, [pathname]);

  return null;
}
