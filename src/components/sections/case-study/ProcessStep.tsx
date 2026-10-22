import { MonoLabel } from "@/components/ui";

type ProcessStepProps = { step: string; title: string; children: React.ReactNode };

/** One numbered chapter of a case study: label column beside the body, like the services rows. */
export function ProcessStep({ step, title, children }: ProcessStepProps) {
  return (
    <section className="scroll-reveal grid gap-4 border-t border-border py-12 tablet:grid-cols-[200px_minmax(0,1fr)] tablet:gap-12 tablet:py-16">
      <div>
        <MonoLabel as="p" className="text-primary-text">
          ({step})
        </MonoLabel>
        <h2 className="mt-2 text-title font-medium tracking-snug">{title}</h2>
      </div>
      <div className="min-w-0 space-y-5 text-lead text-muted [&_strong]:font-medium [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  );
}
