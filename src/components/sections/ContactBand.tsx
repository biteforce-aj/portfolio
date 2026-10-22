import { Arrow, buttonVariants, Container, CopyEmail, MonoLabel } from "@/components/ui";
import { siteConfig, type SiteConfig } from "@/config/site.config";
import { cn, whatsappLink } from "@/lib/utils";

type ContactBandProps = { content?: SiteConfig["home"]["contact"]; id?: string };

/** Oversized sign-off: headline, copyable email, WhatsApp / LinkedIn / GitHub. Used at the end of every page. */
export function ContactBand({ content = siteConfig.home.contact, id = "contact" }: ContactBandProps) {
  const { contact, person, messages, quote, ui } = siteConfig;
  const links = [
    ...(contact.whatsapp
      ? [{ label: quote.whatsappLabel, href: whatsappLink(contact.whatsapp), variant: "primary" as const }]
      : []),
    { label: ui.linkedinLabel, href: person.linkedin, variant: "outline" as const },
    { label: ui.githubLabel, href: person.github, variant: "outline" as const },
  ];

  return (
    <section id={id} className="scroll-mt-24 border-t border-border">
      <Container className="pt-24 pb-18 tablet:pt-40 tablet:pb-30">
        <MonoLabel as="p">{content.label}</MonoLabel>
        <h2 className="mt-6 mb-14 text-display-xl font-medium tracking-display">
          {content.title}
          <br />
          <span className="font-serif text-[1.16em] font-normal tracking-serif italic">
            {content.titleAccent}
            <span className="text-primary-text not-italic">.</span>
          </span>
        </h2>

        <div className="flex flex-wrap items-center justify-between gap-6">
          <CopyEmail
            email={contact.email}
            labels={{
              copy: messages.copy,
              copied: messages.copied,
              copiedToast: messages.emailCopied,
              selectedToast: messages.emailSelected,
            }}
          />
          <ul className="flex flex-wrap gap-3 max-tablet:w-full">
            {links.map((link) => (
              <li key={link.href} className="max-tablet:flex-1 max-tablet:basis-full">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: link.variant }), "max-tablet:w-full")}
                >
                  {link.label} <Arrow />
                  <span className="sr-only">{ui.newTab}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
