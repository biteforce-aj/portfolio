# Progress
Project: portfolio · Prompt file: kit/prompts/01-portfolio.md · Content: kit/prompts/portfolio-content.md · Design source: kit/prototype.html (no Figma)
## Done
- Phases 1–2: plan approved (name hero, keep prototype microcopy, bubble on rows/cards, nav → routes); dark tokens (`primary` fills / `primary-text` AA text, mock colours), Geist / Instrument Serif / Geist Mono, all content in site.config.ts
- Phase 3 Home: status bar, nav + portalled mobile menu, hero CompareSlider, work index previews, services, Portrait ("JA" until `person.photo`), contact band, toast
- Phase 4 /work: ProjectFilter + ProjectCard (coming-soon = abstract cover + toast) + CursorBubble · Phase 5 /work/[slug]: @next/mdx, src/mdx-components.tsx, sections/case-study blocks; W+Men MDX with [bracket] TODOs, client credit in header
- Phase 6: /graphic-design (GalleryGrid masonry + <dialog> lightbox; 6 real flyers, titles + alt in config), /services (ServiceList h1, ProcessSteps, QuoteBand) · Phase 7: /about (AboutIntro `as="h1"` + story, Timeline for experience/education, SkillGroups), /contact (ContactForm restyled, ContactLinks shared with ContactBand, form copy in config)
- Phase 8 Polish: contrast/heading/scroll-region fixes (Lighthouse a11y, BP, SEO 100; perf 99 desktop, ~85–94 mobile), opengraph-image.tsx from config + tokens via lib/metadata `baseOpenGraph`, siteUrl from env, README + screenshot, motion already gated by reduced-motion
## Next
- Deploy (needs Joshua's OK): push main (18 commits ahead), import on Vercel, set NEXT_PUBLIC_SITE_URL if using a custom domain, then smoke-test live
## Known issues / decisions
- Next 16 + Tailwind v4 + cacheComponents (`new Date()` needs `"use cache"`); new tokens go in cn()'s tailwind-merge config. Breakpoints `tablet` 821px / `desktop` 1101px
- MockScreen scales via `--u` = 100cqw/656 and is server-only; pass it to client components as a node. Prefer `.scroll-reveal` over Reveal. Hidden browser pane pauses animations
- Unknown /work/[slug] in prod = soft 404 (200 + noindex); true 404 needs a proxy. contact.action.ts is a stub. Lighthouse: `prod` config on :3001. Process steps have no `text` yet. About still has a "[What you care about in your work…]" placeholder in site.config.ts
