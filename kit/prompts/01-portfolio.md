# 01 — Personal portfolio (Joshua Anderson)
Repo name: `portfolio`
All copy and facts: `kit/prompts/portfolio-content.md` — read it in Phase 1. Never invent facts; leave [bracketed] items as visible TODOs.
Design: Joshua's Figma file — [add Figma link]. Build to the Figma frames; where a page has no frame, follow the style of the designed pages.

## Audience
Both freelance clients and employers. The hero splits them: "Need a website?" → Services, "Hiring? See my work" → Work.

## Pages
- **Home** — huge name, role, supporting line, two-path CTAs, featured work (W+Men first), services teaser, short about, contact band
- **Work** — all projects as cards; filter by Web, UI/UX, Graphic design, System
- **Case study `/work/[slug]`** — MDX: overview, role, brief, audience, design direction, key decisions, results, next steps, links (live, Figma, GitHub)
- **Graphic design** — gallery with accessible lightbox
- **Services** — four services, process steps, "Get a quote" CTA (WhatsApp + form)
- **About** — story, experience timeline, education, skills grouped, photo, CV download
- **Contact** — form, email, WhatsApp, LinkedIn, GitHub, availability badge

## Config fields to add
- `person: { name, fullName, role, location, availability, cvPath, photo }`
- `projects: [{ slug, title, summary, role, tags[], cover, status: "live" | "coming-soon" | "concept", liveUrl?, repoUrl?, figmaUrl?, featured, hasCaseStudy }]`
- `services: [{ title, text, icon }]`, `process: [{ step, text }]`
- `experience: [{ role, org, location, period, points[] }]`, `education: [{ degree, school, year, detail }]`
- `skills: [{ group, items[] }]`, `graphics: ImageRef[]`

## Rules
- Projects with `status: "coming-soon"` show NO client name, screenshot or link — only the generic title and an abstract cover. These are real clients who haven't approved publication.
- W+Men case study must credit the logo/brand marks to the client.

## Signature touches
- Figma ↔ live comparison slider on case studies (keyboard accessible)
- Bold motion: scroll-revealed oversized type, hover-scaling project images, custom cursor on links — all disabled with `prefers-reduced-motion`

## Phases
1. **Plan** — read portfolio-content.md and the Figma link; propose routes, components, config shape, MDX setup. Stop for approval.
2. **Tokens + config** — brand tokens from Figma (fonts, colours), all content into `site.config.ts`.
3. **Home** — built to the Figma design.
4. **Work + project cards + coming-soon cards + filters**
5. **Case study template + W+Men case study** — MDX, ProcessStep, ImageFigure, FigmaLiveSlider.
6. **Graphic design gallery + Services**
7. **About + Contact + CV download**
8. **Polish** — motion tuning, responsive, a11y, Lighthouse, README, deploy.
