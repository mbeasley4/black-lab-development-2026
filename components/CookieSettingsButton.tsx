"use client";

import { openConsentManager } from "@/lib/consent";

/** Reopens the cookie preferences panel so visitors can change their choice
 *  after the fact — used in the footer and on the privacy policy page,
 *  outside the CookieConsent component itself. */
export default function CookieSettingsButton({
  className = "underline-offset-4 transition-colors hover:text-neutral-300 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt-400",
  children = "Cookie Settings",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button type="button" onClick={openConsentManager} className={className}>
      {children}
    </button>
  );
}
