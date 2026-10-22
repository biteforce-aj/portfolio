import Image from "next/image";
import Link from "next/link";
import { buttonVariants, Container, Icon, SocialIcon, socialLabels } from "@/components/ui";
import { siteConfig, type SiteConfig } from "@/config/site.config";
import { formatPhone } from "@/lib/utils";

type FooterProps = {
  brand?: SiteConfig["brand"];
  nav?: SiteConfig["nav"];
  contact?: SiteConfig["contact"];
  socials?: SiteConfig["socials"];
};

// cacheComponents: `new Date()` must be cached; the year refreshes on revalidation.
async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

const columnTitle = "text-sm font-semibold tracking-wide uppercase";
const footerLink = "rounded-sm text-muted transition-colors hover:text-foreground";

export function Footer({
  brand = siteConfig.brand,
  nav = siteConfig.nav,
  contact = siteConfig.contact,
  socials = siteConfig.socials,
}: FooterProps) {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex w-fit items-center gap-2.5 rounded-md font-heading text-lg font-bold tracking-tight">
            <Image src={brand.logo.src} alt="" width={brand.logo.width} height={brand.logo.height} className="size-8" />
            {brand.name}
          </Link>
          <p className="text-muted">{brand.tagline}</p>
          {socials.length > 0 && (
            <ul className="mt-2 flex flex-wrap gap-2">
              {socials.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${brand.name} on ${socialLabels[social.platform]} (opens in a new tab)`}
                    className={buttonVariants({ variant: "outline", size: "icon" })}
                  >
                    <SocialIcon platform={social.platform} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-4">
          <h2 className={columnTitle}>Explore</h2>
          <ul className="flex flex-col gap-0.5">
            {nav.links.map((link) => (
              <li key={link.href}>
                {/* py-1 lifts the tap target to ~28px without changing the rhythm. */}
                <Link href={link.href} className={`${footerLink} inline-block py-1`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-4">
          <h2 className={columnTitle}>Contact</h2>
          <address className="flex flex-col gap-2.5 not-italic">
            <a href={`mailto:${contact.email}`} className={`${footerLink} flex items-center gap-2 break-all`}>
              <Icon name="Mail" className="size-4 shrink-0" />
              {contact.email}
            </a>
            {contact.phone && (
              <a href={`tel:${formatPhone(contact.phone)}`} className={`${footerLink} flex items-center gap-2`}>
                <Icon name="Phone" className="size-4 shrink-0" />
                {contact.phone}
              </a>
            )}
            {contact.address && (
              <p className="flex gap-2 text-muted">
                <Icon name="MapPin" className="mt-1 size-4 shrink-0" />
                {contact.address}
              </p>
            )}
          </address>
        </div>
      </Container>

      <Container className="border-t border-border py-6">
        <p className="text-sm text-muted">
          © <CurrentYear /> {brand.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
