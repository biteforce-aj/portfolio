import { Card, Heading, Icon, Reveal, Section } from "@/components/ui";
import { siteConfig, type SiteConfig } from "@/config/site.config";

type FeatureGridProps = {
  content?: SiteConfig["features"];
  /** Anchor for nav links. */
  id?: string;
};

export function FeatureGrid({ content = siteConfig.features, id = "services" }: FeatureGridProps) {
  const { title, intro, items } = content;

  return (
    <Section id={id} tone="surface" aria-labelledby={`${id}-title`}>
      <Heading id={`${id}-title`} title={title} intro={intro} align="center" />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <li key={item.title}>
            <Reveal delay={(index % 3) * 100} className="h-full">
              <Card className="flex h-full flex-col gap-4">
                <span className="flex size-12 items-center justify-center rounded-md bg-accent text-accent-foreground">
                  <Icon name={item.icon} className="size-6" />
                </span>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted">{item.text}</p>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
