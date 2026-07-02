---
name: project-design-tokens
description: Where Tailwind v4 design tokens live and the core brand color values for blacklabdev.com
metadata:
  type: project
---

Design tokens are defined in `app/globals.css` via Tailwind v4's `@theme inline` block (there is NO `tailwind.config.*` file — the project is on Tailwind v4).

**Why:** Tailwind v4 moved theme config into CSS. Searching for a tailwind config file returns nothing.

**How to apply:** Reference tokens as utility classes, not raw hex. Key values:
- Background `#0b0b0c`, foreground `#e5e7eb` (also CSS vars `--background`/`--foreground`).
- Accent: `volt` scale, `volt-500` / `bg-volt` = `#E3F544` (a yellow-green "volt"). Secondary accent blue-500.
- Primary button pattern: `bg-volt text-black` uppercase tracking-wide font-bold rounded-lg (see `components/CallToAction.tsx`). Secondary: `border-2 border-volt-500/50 text-volt-400`.
- Body fonts wired in `app/fonts.ts` (inter + spaceGrotesk), applied as CSS vars on `<body>`.
