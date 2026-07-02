/**
 * Centralized analytics helpers. All data layer events go through here so
 * components never push to window.dataLayer directly.
 *
 * GTM must be configured to listen for these custom events:
 *   page_view, generate_lead, form_submit, contact_submit
 */

type DataLayerEvent = {
  event: string;
  [key: string]: unknown;
};

function push(payload: DataLayerEvent): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

/** Fire on every route change (including initial mount). Use this as the
 *  single source of truth for GA4 page views — configure GA4 in GTM to
 *  fire on the custom "page_view" event, not the built-in Page View trigger,
 *  to avoid duplicates on SPA navigation. */
export function trackPageView(): void {
  push({
    event: "page_view",
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname,
  });
}

export function trackLead(formName: string): void {
  push({
    event: "generate_lead",
    form_name: formName,
    source: "Website",
  });
}

export function trackFormSubmit(formName: string): void {
  push({
    event: "form_submit",
    form_name: formName,
  });
}

export function trackContactSubmit(): void {
  push({
    event: "contact_submit",
    form_name: "Contact",
    source: "Website",
  });
}
