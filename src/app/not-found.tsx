import type { Metadata } from "next";
import { Footer, Navbar } from "@/components/sections";
import { Button, Section } from "@/components/ui";
import { siteConfig } from "@/config/site.config";

const { nav, notFound } = siteConfig;

export const metadata: Metadata = { title: notFound.title, robots: { index: false } };

// In-page anchors (#services) only exist on the home page, so point them there.
const fromHome = <T extends { href: string }>(link: T): T =>
  link.href.startsWith("#") ? { ...link, href: `/${link.href}` } : link;
const homeNav = { links: nav.links.map(fromHome), cta: fromHome(nav.cta) };

export default function NotFound() {
  return (
    <>
      <Navbar nav={homeNav} />
      <main id="main" className="flex flex-1 items-center">
        <Section container="prose" className="w-full text-center" aria-labelledby="not-found-title">
          <p className="font-heading text-5xl font-bold text-primary">404</p>
          <h1 id="not-found-title" className="mt-4 text-4xl font-bold">
            {notFound.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{notFound.text}</p>
          <Button href={notFound.button.href} size="lg" className="mt-8">
            {notFound.button.label}
          </Button>
        </Section>
      </main>
      <Footer nav={homeNav} />
    </>
  );
}
