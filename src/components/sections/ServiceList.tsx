import { Arrow, Button, Container, MonoLabel } from "@/components/ui";
import { siteConfig, type Link, type SiteConfig } from "@/config/site.config";
import { pad } from "@/lib/projects";
import { cn } from "@/lib/utils";

type ServiceListProps = {
  intro?: { label: string; title: string; text: string; more?: Link };
  services?: SiteConfig["services"];
  id?: string;
  /** Hide the "more" link, e.g. on the Services page itself. */
  showMore?: boolean;
  /** "h1" when the intro is the page title. */
  as?: "h1" | "h2";
  className?: string;
};

/** Sticky serif intro beside numbered service rows. */
export function ServiceList({
  intro = siteConfig.home.services,
  services = siteConfig.services,
  id = "services",
  showMore = true,
  as: Title = "h2",
  className,
}: ServiceListProps) {
  // Keep heading levels sequential when the intro is the page's h1.
  const ItemTitle = Title === "h1" ? "h2" : "h3";
  return (
    <section id={id} className={cn("scroll-mt-24 bg-surface pt-section pb-section-end", className)}>
      <Container className="grid items-start gap-12 desktop:grid-cols-[420px_minmax(0,1fr)] desktop:gap-24">
        <div className="scroll-reveal desktop:sticky desktop:top-30">
          <MonoLabel as="p">{intro.label}</MonoLabel>
          <Title className="mt-3 max-w-[8em] font-serif text-section font-normal tracking-serif italic">{intro.title}</Title>
          <p className="mt-5 max-w-[24em] text-lead text-muted">{intro.text}</p>
          {showMore && intro.more && (
            <Button href={intro.more.href} variant="outline" className="mt-8">
              {intro.more.label} <Arrow />
            </Button>
          )}
        </div>

        <ul>
          {services.map((service, index) => (
            <li
              key={service.title}
              className="grid gap-1.5 border-t border-border py-8 transition-[padding] duration-350 ease-out last:border-b hover:pl-3 tablet:grid-cols-[48px_minmax(0,1fr)_auto] tablet:gap-8"
            >
              <MonoLabel className="text-primary-text">({pad(index + 1)})</MonoLabel>
              <div>
                <ItemTitle className="mb-2 text-title font-medium tracking-snug">{service.title}</ItemTitle>
                <p className="text-muted">{service.text}</p>
              </div>
              <MonoLabel className="tablet:text-right">{service.tags}</MonoLabel>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
