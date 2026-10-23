import { Arrow, Button, CompareSlider, Container, Dot, MockScreen, MonoLabel } from "@/components/ui";
import { siteConfig, type SiteConfig } from "@/config/site.config";

type HeroProps = { content?: SiteConfig["hero"]; person?: SiteConfig["person"] };

/** Split hero: name and two-path CTAs beside the Figma ↔ Live compare window. Above the fold, so no reveal. */
export function Hero({ content = siteConfig.hero, person = siteConfig.person }: HeroProps) {
  const words = content.title.split(" ");
  const last = words.pop();
  const { compare } = content;

  return (
    <section id="hero" className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[180px] bottom-10 size-[460px] rounded-full bg-primary opacity-16 blur-[140px] desktop:top-10 desktop:-right-[120px] desktop:bottom-auto desktop:h-[520px] desktop:w-[760px] desktop:opacity-16"
      />
      <Container className="relative grid items-center gap-12 pt-12 pb-18 desktop:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] desktop:gap-14 desktop:pt-18 desktop:pb-24">
        <div>
          <MonoLabel as="p" className="mb-6 flex items-center gap-2.5">
            <Dot />
            {person.workStyle}
          </MonoLabel>
          <h1 className="text-display font-medium tracking-tighter">
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="inline-block animate-rise">{words.join(" ")}</span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="inline-block animate-rise [animation-delay:120ms]">
                <span className="font-serif text-[1.14em] font-normal tracking-serif italic">{last}.</span>
              </span>
            </span>
          </h1>
          <p className="mt-6 text-2xl font-medium tracking-snug">{person.role}</p>
          <p className="mt-5 mb-9 max-w-[30em] text-lead text-muted">{content.subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <Button href={content.primaryCta.href} className="max-tablet:flex-1 max-tablet:basis-full">
              {content.primaryCta.label} <Arrow />
            </Button>
            {content.secondaryCta && (
              <Button
                href={content.secondaryCta.href}
                variant="outline"
                className="max-tablet:flex-1 max-tablet:basis-full"
              >
                {content.secondaryCta.label} <Arrow />
              </Button>
            )}
          </div>
          <MonoLabel as="p" className="mt-12 flex items-center gap-3">
            {content.stack.map((tool, index) => (
              <span key={tool} className="contents">
                {index > 0 && <span aria-hidden="true">→</span>}
                {tool}
              </span>
            ))}
          </MonoLabel>
        </div>

        <figure>
          <div className="animate-float-in overflow-hidden rounded-lg border border-border bg-surface shadow-xl">
            <div className="flex items-center gap-2 bg-raised px-4 py-[11px]" aria-hidden="true">
              <i className="size-2.5 rounded-full bg-border" />
              <i className="size-2.5 rounded-full bg-border" />
              <i className="size-2.5 rounded-full bg-border" />
              <span className="ml-2 rounded-sm bg-background px-3 py-[5px] font-mono text-micro tracking-mono text-muted uppercase">
                {compare.url}
              </span>
            </div>
            <CompareSlider
              className="aspect-[656/460]"
              before={<MockScreen screen="wireframe" fill />}
              after={<MockScreen screen="wmen" fill />}
              label={compare.sliderLabel}
              beforeLabel={compare.beforeLabel}
              afterLabel={compare.afterLabel}
              cursorName={compare.cursorName}
              nudge
            />
          </div>
          <MonoLabel as="figcaption" className="mt-[18px] flex justify-between gap-4">
            <span>{compare.caption}</span>
            <span aria-hidden="true">{compare.hint}</span>
          </MonoLabel>
        </figure>
      </Container>
    </section>
  );
}
