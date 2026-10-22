import { Reveal, Section } from "@/components/ui";
import type { SectionTone } from "@/components/ui/Section";
import { siteConfig, type SiteConfig } from "@/config/site.config";

type StatsRowProps = { content?: SiteConfig["stats"]; tone?: SectionTone };

/** Row of headline numbers. */
export function StatsRow({ content = siteConfig.stats, tone }: StatsRowProps) {
  return (
    <Section tone={tone} aria-label="Key figures">
      <Reveal>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 text-center lg:grid-cols-4">
          {content.items.map((item) => (
            <div key={item.label} className="flex flex-col-reverse gap-2">
              <dt className="text-muted">{item.label}</dt>
              <dd className="text-4xl font-bold text-primary">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
