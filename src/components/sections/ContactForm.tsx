import { Badge, Container, CopyEmail, Dot, Icon, MonoLabel } from "@/components/ui";
import { siteConfig, type SiteConfig } from "@/config/site.config";
import { formatPhone } from "@/lib/utils";
import { ContactFormFields } from "./ContactFormFields";
import { ContactLinks } from "./ContactLinks";

type ContactFormProps = {
  content?: SiteConfig["contact"];
  heading?: SiteConfig["home"]["contact"];
  /** "h1" when this is the page title (the Contact page). */
  as?: "h1" | "h2";
  /** Anchor for nav links. */
  id?: string;
};

/** Headline, availability, copyable email and links beside a message form (see contact.action.ts). */
export function ContactForm({
  content = siteConfig.contact,
  heading = siteConfig.home.contact,
  as: Title = "h2",
  id = "contact",
}: ContactFormProps) {
  const { person, messages, quote } = siteConfig;
  const { title, email, phone, address, form } = content;

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 pt-16 pb-section-end tablet:pt-24">
      <Container className="grid items-start gap-14 desktop:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] desktop:gap-24">
        <div className="min-w-0">
          <MonoLabel as="p">{title}</MonoLabel>
          <Title id={`${id}-title`} className="mt-6 mb-8 text-display font-medium tracking-display">
            {heading.title}{" "}
            <span className="font-serif text-[1.16em] font-normal tracking-serif italic">
              {heading.titleAccent}
              <span className="text-primary-text not-italic">.</span>
            </span>
          </Title>
          <Badge variant="outline" className="gap-2 px-3.5 py-1.5 text-sm text-foreground">
            <Dot live />
            {person.availability}
          </Badge>
          <p className="mt-6 mb-10 max-w-[30em] text-lead text-muted">{quote.text}</p>

          <CopyEmail
            email={email}
            labels={{
              copy: messages.copy,
              copied: messages.copied,
              copiedToast: messages.emailCopied,
              selectedToast: messages.emailSelected,
            }}
          />
          <ContactLinks className="mt-8" />

          <ul className="mt-10 flex flex-col gap-3 text-muted">
            {phone && (
              <li className="flex items-start gap-3">
                <Icon name="Phone" className="mt-1 size-4 shrink-0 text-primary-text" />
                <a
                  href={`tel:${formatPhone(phone)}`}
                  className="underline-offset-4 hover:text-foreground hover:underline"
                >
                  {phone}
                </a>
              </li>
            )}
            {address && (
              <li className="flex items-start gap-3">
                <Icon name="MapPin" className="mt-1 size-4 shrink-0 text-primary-text" />
                <address className="not-italic">{address}</address>
              </li>
            )}
          </ul>
        </div>

        <div className="rounded-panel border border-border bg-surface p-6 tablet:p-10">
          <ContactFormFields labels={form} />
        </div>
      </Container>
    </section>
  );
}
