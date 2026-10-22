import Image from "next/image";
import { Button, Heading, Icon, Section } from "@/components/ui";
import { siteConfig, type SiteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";

type HeroProps = { content?: SiteConfig["hero"] };

/** Page-top intro with h1. Centred when there's no image. Not wrapped in Reveal: it's above the fold. */
export function Hero({ content = siteConfig.hero }: HeroProps) {
  const { eyebrow, title, subtitle, primaryCta, secondaryCta, image } = content;

  return (
    <Section aria-labelledby="hero-title" className="overflow-hidden">
      <div className={cn("grid items-center gap-12", image && "lg:grid-cols-2 lg:gap-16")}>
        <div className={cn("flex flex-col gap-8", !image && "items-center text-center")}>
          <Heading
            as="h1"
            id="hero-title"
            eyebrow={eyebrow}
            title={title}
            intro={subtitle}
            align={image ? "start" : "center"}
          />
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
              <Icon name="ArrowRight" />
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outline" size="lg">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>

        {image && (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 80rem) 36rem, (min-width: 64rem) 45vw, 100vw"
            preload
            fetchPriority="high"
            className="h-auto w-full rounded-xl border border-border shadow-lg"
          />
        )}
      </div>
    </Section>
  );
}
