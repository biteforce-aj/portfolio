# Starter plan (approved in Phase 1)

Stack: Next 16 (create-next-app@16.4.2), Tailwind v4 (no config file), npm, Node 22.

## Setup (Phase 2)
```powershell
npx create-next-app@16.4.2 "$env:TEMP\site-starter-scaffold" --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --yes
robocopy "$env:TEMP\site-starter-scaffold" . /E /XD node_modules .git .claude kit /XF CLAUDE.md AGENTS.md PROGRESS.md START_HERE.md
npm install
npm install clsx tailwind-merge next-themes lucide-react
```
Keep the generated `.gitignore`; confirm it covers node_modules, .next, .env*.local.

## Files
```
src/app/        layout.tsx, page.tsx, not-found.tsx, sitemap.ts, robots.ts, opengraph-image.tsx
src/components/ui/        Button, Card, Badge, Input, Textarea, Select, Container, Section,
                          Heading, Icon (lucide), ThemeToggle, Reveal (scroll reveal, off with reduced motion)
src/components/sections/  Navbar, Footer, Hero, FeatureGrid, Testimonials, CTABand, FAQ,
                          ContactForm (+ contact.action.ts server stub), Gallery, StatsRow,
                          LogoStrip, WhatsAppButton
src/config/site.config.ts      SiteConfig type + demo content
src/lib/utils.ts               cn(), formatPhone(), whatsappLink()
src/styles/tokens.css          all design tokens
src/styles/globals.css         @import "tailwindcss"; tokens; base styles
src/styles/fonts.ts            next/font setup (Inter body + neutral heading font)
public/images/                 neutral placeholder images (generated locally)
```

## Tokens → Tailwind
- `tokens.css` declares light values in `@theme` and clears the default palette (`--color-*: initial`), so only token colours exist: `bg-primary`, `text-muted`, `border-border`, `rounded-md`, `text-3xl`…
- Dark values under `[data-theme="dark"]` and `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) }`.
- `--text-sm`…`--text-5xl` override Tailwind's type scale with `clamp()`.
- Theme toggle: next-themes with `attribute="data-theme"`.

## SiteConfig
```ts
type Link = { label: string; href: string };
type ImageRef = { src: string; alt: string; width: number; height: number };

export interface SiteConfig {
  brand: { name: string; tagline: string; logo: ImageRef; favicon: string };
  nav: { links: Link[]; cta: Link };
  hero: { eyebrow?: string; title: string; subtitle: string;
          primaryCta: Link; secondaryCta?: Link; image?: ImageRef };
  features: { title: string; intro?: string;
              items: { icon: string; title: string; text: string }[] };
  testimonials: { title: string;
                  items: { quote: string; name: string; role?: string; avatar?: ImageRef }[] };
  faq: { title: string; items: { question: string; answer: string }[] };
  stats: { items: { value: string; label: string }[] };
  logos: { title?: string; items: ImageRef[] };
  gallery: { title: string; items: ImageRef[] };
  cta: { title: string; text: string; button: Link };
  contact: { email: string; phone?: string; whatsapp?: string; address?: string;
             mapEmbedUrl?: string; hours?: { days: string; time: string }[] };
  socials: { platform: "instagram" | "facebook" | "x" | "linkedin" | "youtube" | "tiktok"; url: string }[];
  seo: { titleTemplate: string; defaultTitle: string; description: string;
         ogImage: string; siteUrl: string; locale: string };
}
```
WhatsApp button hidden when `contact.whatsapp` is empty.

## Decisions
- Fonts live in `src/styles/fonts.ts` (next/font needs a code import), so a rebrand touches tokens.css + site.config.ts + fonts.ts.
- Default branch renamed to `main`.
