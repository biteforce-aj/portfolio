import type { Metadata } from "next";
import {
  Badge,
  Button,
  Card,
  Container,
  Heading,
  Icon,
  iconNames,
  Input,
  Reveal,
  Section,
  Select,
  Textarea,
  ThemeToggle,
  type ButtonSize,
  type ButtonVariant,
} from "@/components/ui";
import { Demo, ThemePair } from "./ThemePair";

export const metadata: Metadata = {
  title: "Styleguide",
  robots: { index: false, follow: false },
};

const groups = [
  { id: "buttons", title: "Button" },
  { id: "badges", title: "Badge" },
  { id: "cards", title: "Card" },
  { id: "forms", title: "Form fields" },
  { id: "headings", title: "Heading" },
  { id: "icons", title: "Icon" },
  { id: "theme-toggle", title: "ThemeToggle" },
  { id: "layout", title: "Container & Section" },
  { id: "reveal", title: "Reveal" },
];

const buttonVariants: ButtonVariant[] = ["primary", "secondary", "outline", "ghost"];
const buttonSizes: { size: Exclude<ButtonSize, "icon">; label: string }[] = [
  { size: "sm", label: "Small" },
  { size: "md", label: "Medium" },
  { size: "lg", label: "Large" },
];

const serviceOptions = [
  { value: "design", label: "Website design" },
  { value: "seo", label: "Search optimisation" },
  { value: "support", label: "Ongoing support" },
];

export default function StyleguidePage() {
  return (
    <main className="py-12">
      <Container className="flex flex-col gap-16">
        <header className="flex flex-col gap-6">
          <Heading
            as="h1"
            size="md"
            eyebrow="Internal"
            title="Styleguide"
            intro="Every UI component in each variant, size and state, in light and dark. Tab through the page to check focus rings; hover to check hover states."
          />
          <nav aria-label="Styleguide sections">
            <ul className="flex flex-wrap gap-2">
              {groups.map((group) => (
                <li key={group.id}>
                  <Button href={`#${group.id}`} variant="outline" size="sm">
                    {group.title}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <ThemePair id="buttons" title="Button" description="Four variants × three sizes plus icon-only. Pass href to render a link.">
          {() => (
            <div className="flex flex-col gap-6">
              {buttonVariants.map((variant) => (
                <Demo key={variant} label={`variant="${variant}"`}>
                  {buttonSizes.map(({ size, label }) => (
                    <Button key={size} variant={variant} size={size}>
                      {label}
                    </Button>
                  ))}
                  <Button variant={variant} size="icon" aria-label="Add item">
                    <Icon name="Plus" />
                  </Button>
                </Demo>
              ))}
              <Demo label="with icon · as link (href)">
                <Button>
                  Get started <Icon name="ArrowRight" />
                </Button>
                <Button href="#buttons" variant="outline">
                  Link button <Icon name="ArrowUpRight" />
                </Button>
              </Demo>
              <Demo label="disabled">
                {buttonVariants.map((variant) => (
                  <Button key={variant} variant={variant} disabled>
                    Disabled
                  </Button>
                ))}
              </Demo>
            </div>
          )}
        </ThemePair>

        <ThemePair id="badges" title="Badge">
          {() => (
            <Demo label='variant="accent" · "primary" · "outline"'>
              <Badge>Accent</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge>
                <Icon name="Star" className="size-3.5" /> With icon
              </Badge>
            </Demo>
          )}
        </ThemePair>

        <ThemePair id="cards" title="Card" description="Renders as div, article or li. interactive lifts on hover.">
          {() => (
            <div className="flex flex-col gap-6">
              <Demo label="default" className="block">
                <Card>
                  <h3 className="text-xl font-semibold">Card title</h3>
                  <p className="mt-2 text-muted">Surface for features, testimonials and pricing.</p>
                </Card>
              </Demo>
              <Demo label='as="article" interactive' className="block">
                <Card as="article" interactive>
                  <h3 className="text-xl font-semibold">Hover me</h3>
                  <p className="mt-2 text-muted">Shadow grows on hover.</p>
                </Card>
              </Demo>
              <Demo label='as="li" in a list' className="block">
                <ul className="grid gap-3 @md:grid-cols-2">
                  <Card as="li" className="p-4">
                    First item
                  </Card>
                  <Card as="li" className="p-4">
                    Second item
                  </Card>
                </ul>
              </Demo>
            </div>
          )}
        </ThemePair>

        <ThemePair
          id="forms"
          title="Form fields"
          description="Input, Select and Textarea share one label / hint / error wrapper."
        >
          {(theme) => (
            <div className="grid gap-5 @lg:grid-cols-2">
              <Input id={`name-${theme}`} name="name" label="Full name" placeholder="Jane Doe" autoComplete="off" />
              <Input
                id={`email-${theme}`}
                name="email"
                type="email"
                label="Email (with hint)"
                hint="We only use this to reply."
                placeholder="jane@example.com"
                autoComplete="off"
              />
              <Input id={`phone-${theme}`} name="phone" type="tel" label="Phone (required)" required autoComplete="off" />
              <Input
                id={`website-${theme}`}
                name="website"
                label="Website (error)"
                defaultValue="example"
                error="Enter a full URL, starting with https://"
              />
              <Input id={`company-${theme}`} name="company" label="Company (disabled)" defaultValue="Acme Studio" disabled />
              <Input id={`search-${theme}`} name="search" type="search" label="Search" hideLabel placeholder="Hidden label…" />
              <Select
                id={`service-${theme}`}
                name="service"
                label="Service (placeholder)"
                placeholder="Choose a service"
                options={serviceOptions}
              />
              <Select
                id={`budget-${theme}`}
                name="budget"
                label="Budget (error)"
                placeholder="Choose a range"
                options={serviceOptions}
                error="Pick a budget range"
              />
              <Select
                id={`plan-${theme}`}
                name="plan"
                label="Plan (disabled)"
                options={serviceOptions}
                defaultValue="seo"
                disabled
              />
              <div className="hidden @lg:block" aria-hidden="true" />
              <Textarea
                id={`message-${theme}`}
                name="message"
                label="Message (with hint)"
                hint="A few lines about your project."
                placeholder="Tell us what you need…"
              />
              <Textarea id={`notes-${theme}`} name="notes" label="Notes (error)" rows={3} error="This field is required" />
            </div>
          )}
        </ThemePair>

        <ThemePair id="headings" title="Heading" description="Eyebrow + title + intro. Sizes sm / md / lg, start or center.">
          {() => (
            <div className="flex flex-col gap-10">
              <Heading
                as="h3"
                size="lg"
                eyebrow="size lg"
                title="Websites that work hard"
                intro="An intro paragraph sits under the title in the muted colour."
              />
              <Heading as="h3" eyebrow="size md (default)" title="What we offer" intro="Short supporting copy." />
              <Heading as="h3" size="sm" title="Small heading, no eyebrow or intro" />
              <Heading
                as="h3"
                align="center"
                eyebrow="align center"
                title="Centered heading"
                intro="Used for section intros above grids."
              />
            </div>
          )}
        </ThemePair>

        <ThemePair id="icons" title="Icon" description="Everything in the registry (src/components/ui/Icon.tsx), by config name.">
          {() => (
            <div className="flex flex-col gap-6">
              <ul className="grid grid-cols-2 gap-2 @sm:grid-cols-3 @lg:grid-cols-4">
                {iconNames.map((name) => (
                  <li
                    key={name}
                    className="flex items-center gap-2.5 rounded-md border border-border px-3 py-2.5 text-sm text-muted"
                  >
                    <Icon name={name} className="size-5 shrink-0 text-foreground" />
                    <span className="truncate font-mono text-xs">{name}</span>
                  </li>
                ))}
              </ul>
              <Demo label='label="…" for meaningful icons (role="img")'>
                <Icon name="Star" label="Rated five stars" className="size-6 text-primary" />
              </Demo>
            </div>
          )}
        </ThemePair>

        <ThemePair
          id="theme-toggle"
          title="ThemeToggle"
          description="Sun in light, moon in dark. This page is pinned to light, so clicking only changes your saved preference for other pages."
        >
          {() => (
            <Demo label="ghost icon button">
              <ThemeToggle />
            </Demo>
          )}
        </ThemePair>

        <ThemePair id="layout" title="Container & Section" description="Section tones; Container sizes from the layout tokens." stacked>
          {() => (
            <div className="flex flex-col gap-6">
              <Demo label='Container size="content" · size="prose"' className="block space-y-3">
                <Container className="rounded-md border border-dashed border-input py-3 text-center font-mono text-xs text-muted">
                  max-w-content
                </Container>
                <Container
                  size="prose"
                  className="rounded-md border border-dashed border-input py-3 text-center font-mono text-xs text-muted"
                >
                  max-w-(--container-prose)
                </Container>
              </Demo>
              <Demo label='Section tone="default" · "surface" · "primary" (padding reduced here)' className="block space-y-3">
                <Section container={false} className="rounded-lg border border-border px-6 py-8">
                  tone=&quot;default&quot;
                </Section>
                <Section tone="surface" container={false} className="rounded-lg px-6 py-8">
                  tone=&quot;surface&quot;
                </Section>
                <Section tone="primary" container={false} className="rounded-lg px-6 py-8">
                  tone=&quot;primary&quot;
                </Section>
              </Demo>
            </div>
          )}
        </ThemePair>

        <ThemePair
          id="reveal"
          title="Reveal"
          description="Fades in on scroll with a stagger; reload to replay. Shown instantly with reduced motion or without JS."
        >
          {() => (
            <ul className="grid gap-3 @md:grid-cols-3">
              {[0, 120, 240].map((delay) => (
                <li key={delay}>
                  <Reveal delay={delay}>
                    <Card className="p-4 text-sm">delay={delay}</Card>
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </ThemePair>
      </Container>
    </main>
  );
}
