import { Container, MonoLabel } from "@/components/ui";
import { siteConfig, type SiteConfig } from "@/config/site.config";
import { pad } from "@/lib/projects";

type ProcessStepsProps = {
  intro?: SiteConfig["processIntro"];
  steps?: SiteConfig["process"];
  id?: string;
};

/** Numbered, ordered steps in a row (stacked on mobile). */
export function ProcessSteps({ intro = siteConfig.processIntro, steps = siteConfig.process, id = "process" }: ProcessStepsProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 pt-section pb-section-end">
      <Container>
        <div className="scroll-reveal mb-12">
          <MonoLabel as="p">{intro.label}</MonoLabel>
          <h2 id={`${id}-title`} className="mt-3 font-serif text-section font-normal tracking-serif italic">
            {intro.title}
          </h2>
        </div>

        <ol className="grid gap-px overflow-hidden rounded-panel border border-border bg-border tablet:grid-cols-2 desktop:grid-cols-4">
          {steps.map((item, index) => (
            <li key={item.step} className="flex items-baseline gap-5 bg-background p-6 tablet:min-h-56 tablet:flex-col tablet:items-start tablet:gap-10 tablet:p-7">
              <MonoLabel className="text-primary-text">({pad(index + 1)})</MonoLabel>
              <div className="mt-auto">
                <h3 className="text-title font-medium tracking-snug">{item.step}</h3>
                {item.text && <p className="mt-2 text-muted">{item.text}</p>}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
