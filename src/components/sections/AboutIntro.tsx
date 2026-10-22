import { existsSync } from "node:fs";
import path from "node:path";
import { Arrow, Button, Container, CvButton, MonoLabel, Portrait } from "@/components/ui";
import { siteConfig, type SiteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";

const quoteClass = "mt-5 mb-7 font-serif text-quote font-normal tracking-serif text-foreground italic";

type AboutIntroProps = {
  content?: SiteConfig["home"]["about"];
  person?: SiteConfig["person"];
  id?: string;
  showMore?: boolean;
  /** "h1" when the quote is the page title (the About page). */
  as?: "h1" | "h2";
  /** Paragraphs shown instead of `content.text`. */
  story?: string[];
  showFacts?: boolean;
  className?: string;
};

/** Annotated portrait beside a pull quote, short bio, key facts and the CV download. */
export function AboutIntro({
  content = siteConfig.home.about,
  person = siteConfig.person,
  id = "about",
  showMore = true,
  as = "h2",
  story = [content.text],
  showFacts = true,
  className,
}: AboutIntroProps) {
  const cvAvailable = existsSync(path.join(process.cwd(), "public", person.cvPath));
  const layerName = person.photo ? path.basename(person.photo.src) : `${person.name.split(" ")[0].toLowerCase()}.jpg`;

  return (
    <section id={id} className={cn("scroll-mt-24 pt-section pb-section-end", className)}>
      <Container className="grid items-center gap-12 desktop:grid-cols-[500px_minmax(0,1fr)] desktop:gap-24">
        <Portrait
          photo={person.photo}
          initials={person.initials}
          layerName={layerName}
          className="scroll-reveal w-full max-w-[420px] desktop:max-w-none"
        />

        <div>
          <MonoLabel as="p">{content.label}</MonoLabel>
          {as === "h1" ? (
            <h1 className={quoteClass}>“{content.quote}”</h1>
          ) : (
            <blockquote className={quoteClass}>
              <p>“{content.quote}”</p>
            </blockquote>
          )}
          {story.map((paragraph) => (
            <p key={paragraph} className="mb-7 max-w-[34em] text-lead text-muted">
              {paragraph}
            </p>
          ))}

          {showFacts && (
            <dl className="mb-8">
              {content.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid gap-1 border-t border-border py-4 last:border-b tablet:grid-cols-[140px_minmax(0,1fr)] tablet:gap-6"
                >
                  <dt className="font-mono text-label tracking-mono text-muted uppercase">{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="flex flex-wrap gap-3">
            <CvButton
              href={person.cvPath}
              label={content.cvLabel}
              available={cvAvailable}
              missingMessage={siteConfig.messages.cvMissing}
            />
            {showMore && (
              <Button href={content.more.href} variant="ghost">
                {content.more.label} <Arrow />
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
