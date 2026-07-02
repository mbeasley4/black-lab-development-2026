"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  ALL_GRANTED,
  DEFAULT_PREFERENCES,
  OPEN_CONSENT_MANAGER_EVENT,
  type ConsentPreferences,
  getServerConsent,
  readStoredConsent,
  storeConsent,
  subscribeConsent,
  updateConsent,
} from "@/lib/consent";

type CategoryDefinition = {
  key: keyof ConsentPreferences;
  title: string;
  description: string;
};

const CATEGORIES: CategoryDefinition[] = [
  {
    key: "analytics",
    title: "Analytics cookies",
    description:
      "Help us understand how visitors use the site — pages viewed, time on page, navigation paths — so we can improve it. Data is aggregated and doesn't identify you personally.",
  },
  {
    key: "marketing",
    title: "Advertising cookies",
    description:
      "Used to measure ad performance and personalize the marketing you see from us on other sites. Turning this off won't reduce the number of ads you see, just how relevant they are.",
  },
];

/**
 * Bottom-anchored cookie consent UI that gates Google Consent Mode v2.
 *
 * Two views in one panel:
 *  - "banner": compact first-visit prompt — Accept All / Reject All /
 *    Manage Preferences.
 *  - "preferences": per-category toggles (Necessary is always on) with
 *    Reject All / Accept All / Save Preferences.
 *
 * Behaviour:
 *  - First visit (no stored choice): the banner renders and consent stays
 *    "denied" (the head bootstrap already set the default) until the visitor
 *    chooses.
 *  - Any decision persists to localStorage and pushes a Consent Mode update,
 *    then the UI hides.
 *  - Return visit: a stored choice was already replayed by the head
 *    bootstrap, so the banner never mounts again — but it can be reopened
 *    (e.g. via the "Cookie Settings" link in the footer) through
 *    openConsentManager(), which dispatches OPEN_CONSENT_MANAGER_EVENT.
 */
export default function CookieConsent() {
  // Read the persisted choice via an external store: SSR sees "undecided"
  // (null), the client reconciles after hydration, and a decision in another
  // tab dismisses the banner here too. Avoids setState-in-effect entirely.
  const stored = useSyncExternalStore(
    subscribeConsent,
    readStoredConsent,
    getServerConsent,
  );
  const [reopened, setReopened] = useState(false);
  const [view, setView] = useState<"banner" | "preferences">("banner");
  const [draft, setDraft] = useState<ConsentPreferences>(DEFAULT_PREFERENCES);

  const visible = stored === null || reopened;
  const acceptButtonRef = useRef<HTMLButtonElement>(null);
  const panelHeadingRef = useRef<HTMLHeadingElement>(null);

  // Let anything in the app (e.g. a footer link) reopen this panel, seeded
  // with the visitor's current preferences so they're editing, not
  // re-deciding from scratch.
  useEffect(() => {
    function handleOpen() {
      setDraft(stored ?? DEFAULT_PREFERENCES);
      setView("preferences");
      setReopened(true);
    }
    window.addEventListener(OPEN_CONSENT_MANAGER_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_CONSENT_MANAGER_EVENT, handleOpen);
  }, [stored]);

  // Move keyboard focus into the panel once it appears, so keyboard and
  // screen-reader users land on it without hunting.
  useEffect(() => {
    if (!visible) return;
    if (view === "preferences") panelHeadingRef.current?.focus();
    else acceptButtonRef.current?.focus();
  }, [visible, view]);

  function decide(prefs: ConsentPreferences) {
    updateConsent(prefs);
    storeConsent(prefs); // persists + notifies the store, which hides the banner
    setReopened(false);
    setView("banner");
  }

  function openPreferences() {
    setDraft(stored ?? DEFAULT_PREFERENCES);
    setView("preferences");
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-describedby={view === "banner" ? "cookie-consent-description" : undefined}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-volt-500/20 bg-[#0b0b0c]/95 backdrop-blur-md"
    >
      {view === "banner" ? (
        <div className="mx-auto flex max-w-375 flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p
            id="cookie-consent-description"
            className="text-sm leading-relaxed text-slate-300 sm:max-w-3xl"
          >
            We use cookies to analyze site traffic, remember your preferences, and
            support our marketing. Choose which categories you allow, or accept all.{" "}
            <a
              href="/privacy"
              className="rounded-sm font-medium text-volt-400 underline-offset-4 transition-colors hover:text-volt-300 hover:underline focus-visible:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt-400"
            >
              Learn more
            </a>
            .
          </p>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={openPreferences}
              className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-300 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt-400"
            >
              Manage Preferences
            </button>
            <button
              type="button"
              onClick={() => decide(DEFAULT_PREFERENCES)}
              className="inline-flex items-center justify-center rounded-lg border border-white/15 px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-slate-200 transition-all duration-200 hover:border-white/35 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt-400 active:scale-[0.98]"
            >
              Reject All
            </button>
            <button
              ref={acceptButtonRef}
              type="button"
              onClick={() => decide(ALL_GRANTED)}
              className="inline-flex items-center justify-center rounded-lg bg-volt px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-black transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:shadow-volt/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt-400 active:scale-[0.98]"
            >
              Accept All
            </button>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-h-[85vh] max-w-375 overflow-y-auto px-6 py-6">
          <div className="flex items-start justify-between gap-4">
            <h2
              ref={panelHeadingRef}
              tabIndex={-1}
              className="text-base font-bold text-white focus:outline-none"
            >
              Cookie Preferences
            </h2>
            <button
              type="button"
              onClick={() => setView("banner")}
              aria-label="Close cookie preferences"
              className="shrink-0 rounded-sm p-1 text-slate-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt-400"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-slate-400">
            Choose which categories of cookies we can use. Necessary cookies are
            always on because the site can&apos;t function without them. See our{" "}
            <a
              href="/privacy"
              className="rounded-sm font-medium text-volt-400 underline-offset-4 transition-colors hover:text-volt-300 hover:underline focus-visible:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt-400"
            >
              privacy policy
            </a>{" "}
            for details.
          </p>

          <div className="mt-4 divide-y divide-white/10 border-y border-white/10">
            <CategoryRow
              title="Necessary"
              description="Required for core functionality like page navigation, security, and remembering your cookie choice."
              checked
              locked
            />
            {CATEGORIES.map((category) => (
              <CategoryRow
                key={category.key}
                title={category.title}
                description={category.description}
                checked={draft[category.key]}
                onChange={(checked) =>
                  setDraft((current) => ({ ...current, [category.key]: checked }))
                }
              />
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => decide(DEFAULT_PREFERENCES)}
              className="inline-flex items-center justify-center rounded-lg border border-white/15 px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-slate-200 transition-all duration-200 hover:border-white/35 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt-400 active:scale-[0.98]"
            >
              Reject All
            </button>
            <button
              type="button"
              onClick={() => decide(draft)}
              className="inline-flex items-center justify-center rounded-lg bg-volt px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-black transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:shadow-volt/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt-400 active:scale-[0.98]"
            >
              Save Preferences
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function CategoryRow({
  title,
  description,
  checked,
  locked = false,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  locked?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-4">
      <div>
        <p className="text-sm font-semibold text-white">
          {title}
          {locked && (
            <span className="ml-2 text-xs font-normal uppercase tracking-wide text-volt-400">
              Always active
            </span>
          )}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-slate-400">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        disabled={locked}
        onClick={() => onChange?.(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt-400 ${
          checked ? "bg-volt-500" : "bg-white/15"
        } ${locked ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
