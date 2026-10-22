import { Heading, Icon, Reveal, Section } from "@/components/ui";
import { siteConfig, type SiteConfig } from "@/config/site.config";

type FAQProps = {
  content?: SiteConfig["faq"];
  /** Anchor for nav links. */
  id?: string;
};

/** Accordion built on native <details>, so it works without JavaScript. */
export function FAQ({ content = siteConfig.faq, id = "faq" }: FAQProps) {
  const { title, items } = content;

  return (
    <Section id={id} tone="surface" container="prose" aria-labelledby={`${id}-title`}>
      <Heading id={`${id}-title`} title={title} align="center" />
      <Reveal className="mt-12">
        <div className="divide-y divide-border rounded-lg border border-border bg-background">
          {items.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg p-5 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {item.question}
                <Icon
                  name="ChevronDown"
                  className="size-5 shrink-0 text-muted transition-transform group-open:rotate-180 motion-reduce:transition-none"
                />
              </summary>
              <p className="px-5 pb-5 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
