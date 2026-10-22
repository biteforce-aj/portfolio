import { Heading, Icon, Reveal, Section } from "@/components/ui";
import { siteConfig, type SiteConfig } from "@/config/site.config";
import { formatPhone } from "@/lib/utils";
import { ContactFormFields } from "./ContactFormFields";

type ContactFormProps = {
  content?: SiteConfig["contact"];
  /** Anchor for nav links. */
  id?: string;
};

const linkClass = "underline-offset-4 hover:text-primary hover:underline";

/** Contact details beside a message form (see contact.action.ts). */
export function ContactForm({ content = siteConfig.contact, id = "contact" }: ContactFormProps) {
  const { title, intro, email, phone, address, hours } = content;

  return (
    <Section id={id} tone="surface" aria-labelledby={`${id}-title`}>
      <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div className="flex flex-col gap-8">
          <Heading id={`${id}-title`} title={title} intro={intro} />
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <Icon name="Mail" className="mt-1 size-5 shrink-0 text-primary" />
              <a href={`mailto:${email}`} className={linkClass}>
                {email}
              </a>
            </li>
            {phone && (
              <li className="flex items-start gap-3">
                <Icon name="Phone" className="mt-1 size-5 shrink-0 text-primary" />
                <a href={`tel:${formatPhone(phone)}`} className={linkClass}>
                  {phone}
                </a>
              </li>
            )}
            {address && (
              <li className="flex items-start gap-3">
                <Icon name="MapPin" className="mt-1 size-5 shrink-0 text-primary" />
                <address className="not-italic">{address}</address>
              </li>
            )}
            {hours && hours.length > 0 && (
              <li className="flex items-start gap-3">
                <Icon name="Clock" className="mt-1 size-5 shrink-0 text-primary" />
                <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                  {hours.map((row) => (
                    <div key={row.days} className="contents">
                      <dt className="text-muted">{row.days}</dt>
                      <dd>{row.time}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            )}
          </ul>
        </div>
        <Reveal>
          <ContactFormFields />
        </Reveal>
      </div>
    </Section>
  );
}
