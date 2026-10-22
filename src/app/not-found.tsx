import type { Metadata } from "next";
import { Footer, Navbar, StatusBar } from "@/components/sections";
import { Arrow, Button, Section } from "@/components/ui";
import { siteConfig } from "@/config/site.config";

const { notFound } = siteConfig;

export const metadata: Metadata = { title: notFound.title, robots: { index: false } };

export default function NotFound() {
  return (
    <>
      <StatusBar />
      <Navbar />
      <main id="main" className="flex flex-1 items-center">
        <Section container="prose" className="w-full text-center" aria-labelledby="not-found-title">
          <p className="font-serif text-section text-primary-text italic">404</p>
          <h1 id="not-found-title" className="mt-4 text-4xl font-medium tracking-tight">
            {notFound.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{notFound.text}</p>
          <Button href={notFound.button.href} className="mt-8">
            {notFound.button.label} <Arrow />
          </Button>
        </Section>
      </main>
      <Footer />
    </>
  );
}
