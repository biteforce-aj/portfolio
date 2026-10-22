import { Arrow, Button, Container, MonoLabel } from "@/components/ui";
import { siteConfig, type SiteConfig } from "@/config/site.config";
import { pad } from "@/lib/projects";

type ServiceListProps = {
  intro?: SiteConfig["home"]["services"];
  services?: SiteConfig["services"];
  id?: string;
  /** Hide the "more" link, e.g. on the Services page itself. */
  showMore?: boolean;
};

/** Sticky serif intro beside numbered service rows. */
export function ServiceList({
  intro = siteConfig.home.services,
  services = siteConfig.services,
  id = "services",
  showMore = true,
}: ServiceListProps) {
  return (
    <section id={id} className="scroll-mt-24 bg-surface pt-section pb-section-end">
      <Container className="grid items-start gap-12 desktop:grid-cols-[420px_minmax(0,1fr)] desktop:gap-24">
        <div className="scroll-reveal desktop:sticky desktop:top-30">
          <MonoLabel as="p">{intro.label}</MonoLabel>
          <h2 className="mt-3 max-w-[8em] font-serif text-section font-normal tracking-serif italic">{intro.title}</h2>
          <p className="mt-5 max-w-[24em] text-lead text-muted">{intro.text}</p>
          {showMore && (
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
                <h3 className="mb-2 text-title font-medium tracking-snug">{service.title}</h3>
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
