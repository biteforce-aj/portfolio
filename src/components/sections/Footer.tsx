import { Container, LocalTime } from "@/components/ui";
import { siteConfig, type SiteConfig } from "@/config/site.config";

type FooterProps = { person?: SiteConfig["person"]; content?: SiteConfig["footer"] };

// cacheComponents: `new Date()` must be cached; the year refreshes on revalidation.
async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

/** One mono line: copyright, live local time, credit, back to top. */
export function Footer({ person = siteConfig.person, content = siteConfig.footer }: FooterProps) {
  return (
    <footer className="border-t border-border font-mono text-label tracking-mono text-muted uppercase">
      <Container className="flex flex-wrap justify-between gap-6 pt-6 pb-8">
        <span>
          © <CurrentYear /> {person.name}
        </span>
        <span>
          {person.locationShort} — <LocalTime timeZone={person.timeZone} /> {person.timeZoneLabel}
        </span>
        <span>{content.credit}</span>
        <a href="#top" className="rounded-sm transition-colors hover:text-foreground">
          {content.backToTop}
        </a>
      </Container>
    </footer>
  );
}
