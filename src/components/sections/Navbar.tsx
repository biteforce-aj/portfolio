import Image from "next/image";
import Link from "next/link";
import { Button, Container, ThemeToggle } from "@/components/ui";
import { siteConfig, type SiteConfig } from "@/config/site.config";
import { MobileNav } from "./MobileNav";

type NavbarProps = { brand?: SiteConfig["brand"]; nav?: SiteConfig["nav"] };

/** Sticky header with skip link. Pages should render `<main id="main">` for the skip link target. */
export function Navbar({ brand = siteConfig.brand, nav = siteConfig.nav }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-gutter focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:shadow-md"
      >
        Skip to content
      </a>

      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 rounded-md font-heading text-lg font-bold tracking-tight">
          {/* Name is shown as text, so the logo is decorative here. */}
          <Image src={brand.logo.src} alt="" width={brand.logo.width} height={brand.logo.height} className="size-8" />
          {brand.name}
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button href={nav.cta.href} size="sm" className="ms-2 hidden lg:inline-flex">
            {nav.cta.label}
          </Button>
          <div className="lg:hidden">
            <MobileNav links={nav.links} cta={nav.cta} />
          </div>
        </div>
      </Container>
    </header>
  );
}
