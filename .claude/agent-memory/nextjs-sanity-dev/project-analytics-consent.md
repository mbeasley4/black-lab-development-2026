---
name: project-analytics-consent
description: Analytics/consent stack for blacklabdev.com — Aptabase, Vercel Analytics, and GTM gated by a cookie consent banner
metadata:
  type: project
---

Analytics stack as of 2026-06-30:
- **Aptabase** (`@aptabase/react`) via `providers/AptabaseClientProvider.tsx`, key `NEXT_PUBLIC_APTABASE_KEY`.
- **Vercel** `<Analytics />` and `<SpeedInsights />` in `app/layout.tsx`.
- **Google Tag Manager** is gated behind cookie consent. Env var `NEXT_PUBLIC_GTM_ID` (blank by default = GTM disabled). Set it to a `GTM-XXXXXXX` id to activate.

Cookie-consent + GTM Consent Mode v2 implementation:
- `lib/consent.ts` — types, gtag helper (`updateConsent`), localStorage helpers, and a tiny external store (`subscribeConsent`/`getServerConsent`) for `useSyncExternalStore`. localStorage key is `cookie-consent` (`granted`|`denied`).
- `components/GoogleTagManager.tsx` — `GoogleTagManagerHead` (inline head scripts: consent default = all denied, then GTM loader) and `GoogleTagManagerNoScript`. Consent default is an **inline** head script on purpose (not `next/script`) so it runs before GTM in document order; it also replays a `granted` update for returning visitors.
- `components/CookieConsent.tsx` — bottom-fixed banner, only renders when no stored choice.

**Why:** GTM tracking must not fire until the visitor accepts (privacy/consent compliance).

**How to apply:** Any new GTM tags must respect Consent Mode signals (`analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization`). To add GTM, set `NEXT_PUBLIC_GTM_ID` — no code change needed.
