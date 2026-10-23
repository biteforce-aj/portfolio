import type { Metadata } from "next";
import { ContactBand, Footer, GalleryGrid, Navbar, StatusBar } from "@/components/sections";
import { Container, MonoLabel } from "@/components/ui";
import { siteConfig } from "@/config/site.config";
import { baseOpenGraph } from "@/lib/metadata";
import { pad } from "@/lib/projects";

const { graphicDesign, graphics } = siteConfig;

export const metadata: Metadata = {
  title: graphicDesign.title,
  description: graphicDesign.description,
  alternates: { canonical: "/graphic-design" },
  openGraph: { ...baseOpenGraph, url: "/graphic-design", title: graphicDesign.title, description: graphicDesign.description },
};

export default function GraphicDesignPage() {
  return (
    <>
      <StatusBar />
      <Navbar />
      <main id="main" className="flex-1 overflow-x-clip">
        <section className="pt-16 pb-section-end tablet:pt-24">
          <Container>
            <div className="mb-14 flex items-end justify-between gap-6">
              <div>
                <MonoLabel as="p">{graphicDesign.title}</MonoLabel>
                <h1 className="mt-3 max-w-[8em] font-serif text-section font-normal tracking-serif italic">
                  {graphicDesign.intro}
                </h1>
              </div>
              <MonoLabel aria-hidden="true">({pad(graphics.length)})</MonoLabel>
            </div>
            <GalleryGrid />
          </Container>
        </section>
        <ContactBand />
      </main>
      <Footer />
    </>
  );
}
