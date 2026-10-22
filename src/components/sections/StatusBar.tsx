import { Container, Dot, LocalTime } from "@/components/ui";
import { siteConfig, type SiteConfig } from "@/config/site.config";

type StatusBarProps = { person?: SiteConfig["person"]; ui?: SiteConfig["ui"] };

/** Mono strip above the nav: live local time, availability, what I'm working on. */
export function StatusBar({ person = siteConfig.person, ui = siteConfig.ui }: StatusBarProps) {
  const item = "flex items-center gap-2 whitespace-nowrap";

  return (
    <div id="top" className="border-b border-border font-mono text-label tracking-mono text-muted uppercase">
      <Container className="flex justify-between gap-6 py-[11px]">
        <span className={item}>
          {person.locationShort} — <LocalTime timeZone={person.timeZone} /> {person.timeZoneLabel}
        </span>
        <span className={item}>
          <Dot live />
          {person.availabilityShort}
        </span>
        {person.now && (
          <span className={`${item} hidden tablet:flex`}>
            {ui.nowLabel} {person.now}
          </span>
        )}
        <span aria-hidden="true" className={`${item} hidden tablet:flex`}>
          {ui.scroll}
        </span>
      </Container>
    </div>
  );
}
