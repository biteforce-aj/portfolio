import { Container, CopyEmail, MonoLabel } from "@/components/ui";
import { siteConfig, type SiteConfig } from "@/config/site.config";
import { ContactLinks } from "./ContactLinks";

type ContactBandProps = { content?: SiteConfig["home"]["contact"]; id?: string };

/** Oversized sign-off: headline, copyable email, WhatsApp / LinkedIn / GitHub. Used at the end of every page. */
export function ContactBand({ content = siteConfig.home.contact, id = "contact" }: ContactBandProps) {
  const { contact, messages } = siteConfig;

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
          <ContactLinks className="max-tablet:w-full" />
        </div>
      </Container>
    </section>
  );
}
