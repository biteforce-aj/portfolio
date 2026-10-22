import { Container, Dot, MonoLabel } from "@/components/ui";
import { pad } from "@/lib/projects";
import { cn } from "@/lib/utils";

export type TimelineItem = { period: string; title: string; meta: string; points?: string[] };

type TimelineProps = {
  title: string;
  items: TimelineItem[];
  id?: string;
  className?: string;
};

/** Sticky serif title beside dated rows, newest first: experience, education. */
export function Timeline({ title, items, id, className }: TimelineProps) {
  const titleId = id ? `${id}-title` : undefined;

  return (
    <section id={id} aria-labelledby={titleId} className={cn("scroll-mt-24 pt-section pb-section-end", className)}>
      <Container className="grid items-start gap-12 desktop:grid-cols-[320px_minmax(0,1fr)] desktop:gap-24">
        <div className="scroll-reveal flex items-end justify-between gap-6 desktop:sticky desktop:top-30 desktop:block">
          <h2 id={titleId} className="font-serif text-section font-normal tracking-serif italic">
            {title}
          </h2>
          <MonoLabel as="p" aria-hidden="true" className="desktop:mt-5">
            ({pad(items.length)})
          </MonoLabel>
        </div>

        <ol>
          {items.map((item) => (
            <li
              key={`${item.title}-${item.period}`}
              className="grid gap-3 border-t border-border py-8 last:border-b tablet:grid-cols-[180px_minmax(0,1fr)] tablet:gap-8"
            >
              <MonoLabel as="p" className="flex items-center gap-2 tablet:mt-2 tablet:items-start">
                <Dot className="tablet:mt-1" />
                {item.period}
              </MonoLabel>
              <div>
                <h3 className="text-title font-medium tracking-snug">{item.title}</h3>
                <p className="mt-2 text-muted">{item.meta}</p>
                {item.points && item.points.length > 0 && (
                  <ul className="mt-5 flex flex-col gap-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="relative pl-5 text-muted before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-2.5 before:bg-border-strong"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
