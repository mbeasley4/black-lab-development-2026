// Shared cookie-consent + Google Consent Mode v2 utilities.
// Kept framework-agnostic so both the inline head bootstrap script and the
// CookieConsent client component speak the same vocabulary.

export const CONSENT_STORAGE_KEY = "cookie-consent" as const;

/** Cookie categories the visitor can control independently. "necessary" is
 *  always on and isn't part of the stored preferences. */
export type ConsentCategory = "analytics" | "marketing";

export type ConsentPreferences = {
  analytics: boolean;
  marketing: boolean;
};

export const DEFAULT_PREFERENCES: ConsentPreferences = {
  analytics: false,
  marketing: false,
};

export const ALL_GRANTED: ConsentPreferences = {
  analytics: true,
  marketing: true,
};

/**
 * The Consent Mode v2 signals we manage. Analytics maps 1:1 to
 * analytics_storage; marketing covers the three ad-related signals since we
 * don't currently distinguish ad storage/personalization in the UI.
 */
export type ConsentSignals = {
  analytics_storage: "granted" | "denied";
  ad_storage: "granted" | "denied";
  ad_user_data: "granted" | "denied";
  ad_personalization: "granted" | "denied";
};

/** Build a full signals object from the stored category preferences. */
export function signalsFor(prefs: ConsentPreferences): ConsentSignals {
  const marketing = prefs.marketing ? "granted" : "denied";
  return {
    analytics_storage: prefs.analytics ? "granted" : "denied",
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
  };
}

/**
 * Push a consent "update" to GTM. Safe to call before gtag is defined — the
 * head bootstrap defines window.gtag synchronously, but we guard anyway so the
 * component never throws during SSR/hydration edge cases.
 */
export function updateConsent(prefs: ConsentPreferences): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", signalsFor(prefs));
}

// useSyncExternalStore requires getSnapshot to return a referentially stable
// value when nothing has changed — parsing a new object on every call would
// make React think the store changes on every render and loop. Cache the
// parsed result against the raw string that produced it.
let lastRaw: string | null | undefined;
let lastParsed: ConsentPreferences | null = null;

function parsePreferences(raw: string | null): ConsentPreferences | null {
  if (raw === lastRaw) return lastParsed;
  lastRaw = raw;
  lastParsed = null;
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (typeof parsed?.analytics === "boolean" && typeof parsed?.marketing === "boolean") {
        lastParsed = { analytics: parsed.analytics, marketing: parsed.marketing };
      }
    } catch {
      // malformed or legacy ("granted"/"denied" string) value — treat as undecided
    }
  }
  return lastParsed;
}

/** Read the persisted choice, returning null when the visitor hasn't decided. */
export function readStoredConsent(): ConsentPreferences | null {
  if (typeof window === "undefined") return null;
  try {
    return parsePreferences(window.localStorage.getItem(CONSENT_STORAGE_KEY));
  } catch {
    // localStorage can throw in private-mode / sandboxed contexts.
    return null;
  }
}

// --- External store plumbing (for React's useSyncExternalStore) ------------
// Lets components subscribe to the persisted choice without reading
// localStorage during render and without setState-in-effect. Also picks up
// changes made in other tabs via the native "storage" event.

const listeners = new Set<() => void>();

function emit(): void {
  listeners.forEach((listener) => listener());
}

/** Subscribe to consent changes (this tab and cross-tab). */
export function subscribeConsent(onChange: () => void): () => void {
  listeners.add(onChange);
  const onStorage = (event: StorageEvent) => {
    if (event.key === CONSENT_STORAGE_KEY) onChange();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onStorage);
  };
}

/** Server snapshot: always "undecided" so SSR never renders a stale banner. */
export function getServerConsent(): ConsentPreferences | null {
  return null;
}

/** Persist the visitor's choice, swallowing storage errors, then notify. */
export function storeConsent(prefs: ConsentPreferences): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    /* no-op */
  }
  emit();
}

/** Event name used to reopen the preferences panel from elsewhere in the
 *  app (e.g. the "Cookie Settings" link in the footer). */
export const OPEN_CONSENT_MANAGER_EVENT = "open-cookie-preferences";

/** Ask the CookieConsent component to reopen, pre-filled with the visitor's
 *  current (or default) preferences. No-ops during SSR. */
export function openConsentManager(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_CONSENT_MANAGER_EVENT));
}
