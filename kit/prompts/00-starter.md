# 00 — Starter repo
Repo name: `site-starter`
Full spec: `kit/STARTER_SPEC.md` (read it in Phase 1 only).

## Goal
A clean base with tokens, config, and shared components that every other template is cloned from. Visually neutral but polished.

## Phases (one session each — run /clear between them)
1. **Plan** — Read the spec. Propose the exact setup commands, file list, and the `SiteConfig` type. Stop for approval.
2. **Scaffold** — This folder already holds the kit files, so create the Next.js + TS + Tailwind app in a temp folder and move it in without overwriting `CLAUDE.md`, `PROGRESS.md`, `START_HERE.md`, `.claude/` or `kit/`. Add a `.gitignore` (node_modules, .next, .env*.local). Then set up tokens.css, globals.css, Tailwind mapping, folder structure, `site.config.ts` with demo content, lint passing.
3. **UI components** — Everything in `components/ui`. Keep each small.
4. **Section components (part 1)** — Navbar (with mobile menu and theme toggle), Footer, Hero, FeatureGrid, CTABand.
5. **Section components (part 2)** — Testimonials, FAQ, StatsRow, LogoStrip, Gallery, ContactForm, WhatsApp button.
6. **Demo home + SEO** — Home page using only sections and config; metadata, sitemap, robots, OG image, not-found page.
7. **Polish + README** — Responsive pass at 360/768/1280, a11y check, Lighthouse fixes, README from the template in the spec.

## Done when
- Changing tokens.css and site.config.ts alone fully rebrands the demo
- Lint and build pass; Lighthouse 90+
