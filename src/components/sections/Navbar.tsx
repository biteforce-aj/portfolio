import Link from "next/link";
import { Arrow, Button, Container } from "@/components/ui";
import { siteConfig, type SiteConfig } from "@/config/site.config";
import { whatsappLink } from "@/lib/utils";
import { MobileNav } from "./MobileNav";
import { HeaderShell, NavLinks } from "./NavbarClient";

type NavbarProps = {
  nav?: SiteConfig["nav"];
  person?: SiteConfig["person"];
  ui?: SiteConfig["ui"];
};

// cacheComponents: `new Date()` must be cached; the year refreshes on revalidation.
async function ShortYear() {
  "use cache";
  return `©${String(new Date().getFullYear()).slice(2)}`;
}

/** Sticky header that blurs once scrolled, with skip link. Pages render `<main id="main">`. */
export function Navbar({ nav = siteConfig.nav, person = siteConfig.person, ui = siteConfig.ui }: NavbarProps) {
  const featuredCount = siteConfig.projects.filter((project) => project.featured).length;

  return (
    <HeaderShell>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-gutter focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:shadow-md"
      >
        Skip to content
      </a>

      <Container className="flex items-center justify-between gap-4 py-[18px]">
        <Link href="/" className="flex items-baseline gap-2.5 rounded-sm font-medium">
          {person.name}
          <span className="font-mono text-label tracking-mono text-muted uppercase">
            <ShortYear />
          </span>
        </Link>

        <NavLinks links={nav.links} />

        <Button href={nav.cta.href} className="hidden tablet:inline-flex">
          {nav.cta.label} <Arrow />
        </Button>

        <MobileNav
          links={nav.links}
          name={person.name}
          counts={{ [siteConfig.home.work.more.href]: featuredCount }}
          whatsapp={{ label: siteConfig.quote.whatsappLabel, href: whatsappLink(siteConfig.contact.whatsapp ?? "") }}
          status={{
            location: person.location.split(",")[0],
            timeZone: person.timeZone,
            timeZoneLabel: person.timeZoneLabel,
            availability: person.availabilityShort,
          }}
          labels={{ menu: ui.menu, close: ui.close, newTab: ui.newTab }}
        />
      </Container>
    </HeaderShell>
  );
}
