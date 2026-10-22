import { Arrow, Button, buttonVariants, Container, MonoLabel } from "@/components/ui";
import { siteConfig, type SiteConfig } from "@/config/site.config";
import { cn, whatsappLink } from "@/lib/utils";

type QuoteBandProps = { content?: SiteConfig["quote"]; whatsapp?: string; id?: string };

/** "Get a quote" sign-off: WhatsApp with a prefilled message, or the contact form. */
export function QuoteBand({ content = siteConfig.quote, whatsapp = siteConfig.contact.whatsapp, id = "quote" }: QuoteBandProps) {
  const { ui } = siteConfig;

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 border-t border-border bg-surface">
      <Container className="pt-24 pb-18 tablet:pt-32 tablet:pb-24">
        <MonoLabel as="p">{content.label}</MonoLabel>
        <h2 id={`${id}-title`} className="mt-6 mb-6 text-display font-medium tracking-display">
          {content.title}{" "}
          <span className="font-serif text-[1.16em] font-normal tracking-serif italic">
            {content.titleAccent}
            <span className="text-primary-text not-italic">?</span>
          </span>
        </h2>
        <p className="max-w-[30em] text-lead text-muted">{content.text}</p>
        {content.priceFrom && <MonoLabel as="p" className="mt-4 text-foreground">{content.priceFrom}</MonoLabel>}

        <div className="mt-10 flex flex-wrap gap-3">
          {whatsapp && (
            <a
              href={whatsappLink(whatsapp, content.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "max-tablet:w-full")}
            >
              {content.whatsappLabel} <Arrow />
              <span className="sr-only">{ui.newTab}</span>
            </a>
          )}
          <Button href={content.button.href} variant="outline" size="lg" className="max-tablet:w-full">
            {content.button.label} <Arrow />
          </Button>
        </div>
      </Container>
    </section>
  );
}
