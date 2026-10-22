import type { Metadata } from "next";
import { ContactBand, Footer, Navbar, ProjectGrid, StatusBar } from "@/components/sections";
import { Container, MonoLabel } from "@/components/ui";
import { siteConfig } from "@/config/site.config";
import { pad } from "@/lib/projects";

const { work, projects } = siteConfig;

export const metadata: Metadata = {
  title: work.title,
  description: work.description,
  alternates: { canonical: "/work" },
  openGraph: { url: "/work", title: work.title, description: work.description },
};

export default function WorkPage() {
  return (
    <>
      <StatusBar />
      <Navbar />
      <main id="main" className="flex-1 overflow-x-clip">
        <section className="pt-16 pb-section-end tablet:pt-24">
          <Container>
            <div className="mb-14 flex items-end justify-between gap-6">
              <div>
                <MonoLabel as="p">{work.title}</MonoLabel>
                <h1 className="mt-3 max-w-[8em] font-serif text-section font-normal tracking-serif italic">
                  {work.intro}
                </h1>
              </div>
              <MonoLabel aria-hidden="true">({pad(projects.length)})</MonoLabel>
            </div>
            <ProjectGrid />
          </Container>
        </section>
        <ContactBand />
      </main>
      <Footer />
    </>
  );
}
