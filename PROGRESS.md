# Progress
Project: portfolio · Prompt file: kit/prompts/01-portfolio.md · Content: kit/prompts/portfolio-content.md · Design source: kit/prototype.html (no Figma)

## Done
- Phase 1 Plan approved (defaults: name hero "Joshua *Anderson.*", keep prototype microcopy, cursor bubble on work rows/cards only, nav → routes)
- Phase 2 Tokens + config: dark-only prototype palette, cobalt split into `primary` (fills) / `primary-text` (AA text), mock-screen colour group, named type scale; Geist / Instrument Serif / Geist Mono; all content in site.config.ts
- Phase 3 Home: StatusBar, Navbar (+portalled MobileNav), Hero + CompareSlider, CredentialStrip, WorkIndex (hover preview/bubble, inline on phones), ServiceList, AboutIntro + Portrait ("JA" until `person.photo`), ContactBand + CopyEmail, Footer, Toast. Checked 360/768/1280
- Phase 4 Work: /work with ProjectGrid → ProjectFilter (aria-pressed pills, live count) + ProjectCard (cover scales on hover, coming-soon = abstract cover + toast, no link) + CursorBubble (`data-cursor`); pointer-follow shared via lib/useFollowPointer

## Next
- Phase 5 — Case study template + W+Men case study (MDX, ProcessStep, ImageFigure, FigmaLiveSlider, client credit)

## Known issues / decisions
- Next 16 + Tailwind v4: tokens in `@theme`, fonts in src/styles/fonts.ts. cacheComponents on, so `new Date()` needs `"use cache"`. New spacing/container tokens go in cn()'s tailwind-merge config
- Mock screens (ui/mocks) use `--u` = 100cqw/656 so they scale in pure CSS; MockScreen is server-only (reads config), pass it to client components as a node. Prefer `.scroll-reveal` (CSS view-timeline) over Reveal
- Breakpoints `tablet` (821px) / `desktop` (1101px) mirror the prototype. Hidden browser pane pauses animations; finish them via JS before screenshots. contact.action.ts is a stub
- Lighthouse: `prod` launch config serves `next start` on :3001; run `npx lighthouse@12` against it after `npm run build`
