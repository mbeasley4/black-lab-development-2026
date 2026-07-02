---
name: feedback-react19-set-state-in-effect
description: Project's ESLint enforces react-hooks/set-state-in-effect (React 19 / Next 16) — prefer useSyncExternalStore for client-only reads
metadata:
  type: feedback
---

Calling `setState` synchronously inside a `useEffect` body is an ESLint **error** in this repo (`react-hooks/set-state-in-effect`), not a warning. It will fail `npx eslint`.

**Why:** The project runs Next.js 16 / React 19 with `eslint-config-next` 16, which ships the newer react-hooks rules.

**How to apply:** When you need a client-only value that must not run during SSR (e.g. reading `localStorage` and revealing UI), do NOT use the `useState(false)` + `useEffect(() => setState(true))` pattern. Use `useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)` instead — it gives an SSR-safe server snapshot, reconciles after hydration without a mismatch, and avoids the lint error. Effects that only touch the DOM (e.g. `.focus()`) are fine.
