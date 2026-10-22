import { Arrow, buttonVariants } from "@/components/ui";
import { siteConfig } from "@/config/site.config";
import { cn, whatsappLink } from "@/lib/utils";

/** WhatsApp (primary), LinkedIn and GitHub buttons; full width on phones. */
export function ContactLinks({ className }: { className?: string }) {
  const { contact, person, quote, ui } = siteConfig;
  const links = [
    ...(contact.whatsapp
      ? [{ label: quote.whatsappLabel, href: whatsappLink(contact.whatsapp), variant: "primary" as const }]
      : []),
    { label: ui.linkedinLabel, href: person.linkedin, variant: "outline" as const },
    { label: ui.githubLabel, href: person.github, variant: "outline" as const },
  ];

  return (
    <ul className={cn("flex flex-wrap gap-3", className)}>
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
  );
}
