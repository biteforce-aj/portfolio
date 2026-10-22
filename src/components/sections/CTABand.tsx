import { Button, Icon, Reveal, Section } from "@/components/ui";
import { siteConfig, type SiteConfig } from "@/config/site.config";

type CTABandProps = { content?: SiteConfig["cta"] };

/** Full-width call to action on the primary colour. */
export function CTABand({ content = siteConfig.cta }: CTABandProps) {
  const { title, text, button } = content;

  return (
    <Section tone="primary" aria-labelledby="cta-title">
      <Reveal className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-(--container-prose) flex-col gap-3">
          <h2 id="cta-title" className="text-4xl font-bold">
            {title}
          </h2>
          <p className="text-lg text-primary-foreground/85">{text}</p>
        </div>
        <Button href={button.href} variant="inverse" size="lg" className="shrink-0">
          {button.label}
          <Icon name="ArrowRight" />
        </Button>
      </Reveal>
    </Section>
  );
}
