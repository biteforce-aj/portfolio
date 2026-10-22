# Starter repo spec

The base every template is cloned from. Build it once (prompt `00-starter.md`), then never build these pieces again.

## Folder structure
```
src/
  app/                    routes (App Router)
    layout.tsx            fonts, metadata from config, Navbar + Footer
    page.tsx              demo home built only from section components
    not-found.tsx
  components/
    ui/                   Button, Card, Badge, Input, Textarea, Select, Container, Section, Heading, Icon
    sections/             Navbar, Footer, Hero, FeatureGrid, Testimonials, CTABand, FAQ, ContactForm, Gallery, StatsRow, LogoStrip
  config/
    site.config.ts        ALL content: brand, nav, pages copy, contact, socials, SEO
  lib/
    utils.ts              cn() helper, formatters
  styles/
    tokens.css            design tokens as CSS variables
    globals.css           Tailwind + base styles
public/images/            placeholder images
kit/                      prompts and docs (delete from client copies)
.claude/commands/         /next, /wrap-up, /new-site
CLAUDE.md · PROGRESS.md · README.md
```

## Design tokens (`tokens.css`)
- Colors: `--color-bg`, `--color-surface`, `--color-text`, `--color-muted`, `--color-primary`, `--color-primary-contrast`, `--color-accent`, `--color-border`
- Dark mode values under `[data-theme="dark"]` and `prefers-color-scheme`
- Type: `--font-heading`, `--font-body`, a fluid type scale (`--text-sm` … `--text-5xl`) using `clamp()`
- Shape and space: `--radius-sm/md/lg`, `--space-section`, `--container-max`
- Tailwind theme maps to these variables, so classes like `bg-primary` and `text-muted` work everywhere

Rebranding a template = change ~10 values in this file.

## Config (`site.config.ts`)
Typed with a `SiteConfig` interface. Starter fields:
- `brand`: name, tagline, logo path, favicon
- `nav`: array of { label, href }, plus a CTA button
- `hero`, `features`, `testimonials`, `faq`, `stats`: section content
- `contact`: email, phone, whatsapp, address, map embed URL, hours
- `socials`: array of { platform, url }
- `seo`: title template, description, OG image, site URL

Each template adds its own fields (menu, listings, products…) to this file.

## Shared behaviour
- Navbar: sticky, mobile menu with focus trap, active link state
- Theme toggle (light/dark), stored per visitor
- Contact form: client validation + server action stub with a `TODO: connect email service` (e.g. Resend or Formspree)
- WhatsApp floating button (hidden if no number in config)
- SEO: metadata from config, `sitemap.ts`, `robots.ts`, Open Graph image
- Subtle scroll-reveal animation that switches off with reduced motion

## Quality bar
- Lighthouse 90+ on all four scores
- No layout shift from images or fonts
- Every component works at 360px

## README template
Screenshot · Live demo link · Features · Stack · "Customize in 3 steps" (tokens → config → images) · Deploy to Vercel button · License
