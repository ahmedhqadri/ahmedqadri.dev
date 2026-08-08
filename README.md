# ahmedqadri.dev

Personal site of Ahmed Qadri — full-stack developer. A single-page portfolio covering
who I am, selected projects, and the tools I work with.

## Overview

One statically prerendered route (`/`), composed of four sections — hero, projects,
skills, footer — behind a fixed glass navigation bar. Motion is the through-line:
a scroll-driven parallax layer, reveal-on-scroll sections, and hover states defined
by the design system rather than improvised per component.

## Tech stack

| Concern    | Choice                                                          |
| ---------- | --------------------------------------------------------------- |
| Framework  | Next.js 16 — App Router, Turbopack                                |
| Language   | TypeScript 5                                                      |
| UI         | React 19                                                          |
| Styling    | Tailwind CSS 3.4 over CSS custom properties                       |
| Motion     | framer-motion for scroll progress; a small rAF + IntersectionObserver engine for parallax and reveals |
| Icons      | lucide-react, 2px stroke                                          |
| Fonts      | `next/font/google` — Space Grotesk, Instrument Sans, Space Mono    |
| Analytics  | `@vercel/analytics`                                               |
| Hosting    | Vercel                                                            |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

### Scripts

| Command         | Does                                      |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Dev server with hot reload                |
| `npm run build` | Production build                          |
| `npm run start` | Serve the production build                |
| `npm run lint`  | Next.js lint                              |

Type checking is not part of the build (see [Notes](#notes)) — run `npx tsc --noEmit`
to check types.

## Architecture

```
app/
  layout.tsx            Root layout — font variables, metadata, analytics
  page.tsx              Section composition, scroll progress, parallax + reveal hooks
  globals.css           Design tokens, base styles, design-system utility classes
  components/
    header.tsx          Fixed glass nav; scroll-shrink, active section, mobile sheet
    hero.tsx            Grid floor, parallax glow orbs, code mock
    projects.tsx        Project grid — cover frame + meta, hover zoom
    skills.tsx          Light `.on-paper` section; the stack as mono pills
    footer.tsx          Wordmark, link columns, colophon
    social-links.tsx    Shared link data (LinkedIn, GitHub, photography)
    ds/                 Design-system primitives — Button, Card, Badge, Eyebrow
    ds/motion.ts        Parallax engine, reveal-on-scroll, smooth scroll-to-section

components/ui/          shadcn/ui scaffolding — present, not used by the page
hooks/  lib/            Helpers from the same scaffolding
public/                 Project screenshots
```

The page is a client component: it owns the active-section observer and mounts the
parallax and reveal effects once, for the whole document, rather than per section.
Sections stay presentational and read their styling from tokens.

## Design system

The site is built on the **AQ Studios design system**, imported from Claude Design.
Visuals come from the system rather than from per-component decisions.

- **Tokens.** The full token set — cool ink neutrals, aqua and service hues, type
  scale, spacing, effects, motion — lives as CSS custom properties in
  `app/globals.css`. `tailwind.config.ts` maps the palette, families, and radii so
  both utility classes and inline `var(--*)` styles draw on one source.
- **Primitives.** `app/components/ds/` holds ports of the system's `Button`, `Card`,
  `Badge`, and `Eyebrow`.
- **Two modes, no more.** Dark-forward on the ink ramp, with a single light
  `.on-paper` section (Skills) for contrast and rhythm.
- **Signature.** Electric aqua (`--aqua-500`) carries primary actions, the focus
  ring, and the glow — as a thin accent, never a large fill. Indigo and coral tint
  card edges and hover glows so the page changes temperature as you scroll.
- **Type.** Space Grotesk for display, Instrument Sans for body, Space Mono for
  labels and eyebrows. Sentence case throughout; uppercase is reserved for mono
  labels.
- **Motion.** `[data-depth]` elements translate relative to the viewport centre on
  scroll; `.aq-reveal` elements fade up 24px as they enter view. Both are disabled
  under `prefers-reduced-motion`, and a `<noscript>` rule reveals content when
  JavaScript is unavailable.

## Notes

- `next.config.mjs` sets `typescript.ignoreBuildErrors: true`, so `next build` will
  not fail on type errors. Run `npx tsc --noEmit` separately. It currently reports
  pre-existing errors in `components/ui/resizable.tsx` from a
  `react-resizable-panels` major-version mismatch; that file is unused.
- Images are served unoptimized (`images.unoptimized`).
- Security headers — HSTS, `X-Frame-Options`, `X-Content-Type-Options`,
  `Referrer-Policy`, `Permissions-Policy` — are set in `next.config.mjs`.
- The repo started as a v0.dev scaffold. `components/ui/`, `hooks/`, and `lib/` are
  shadcn/ui leftovers the page never imports, and several files in `app/components/`
  (`contact`, `photography`, `ambient-background`, `cursor-canvas`, `code-background`,
  `dynamic-cursor`) belong to the previous design and are no longer rendered. They are
  kept for reference and are safe to delete.
