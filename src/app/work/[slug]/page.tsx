import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactBand, Footer, Navbar, StatusBar } from "@/components/sections";
import { ClientCredit } from "@/components/sections/case-study";
import { Arrow, Container, MonoLabel, ProjectCard } from "@/components/ui";
import { siteConfig, type Project } from "@/config/site.config";
import { baseOpenGraph } from "@/lib/metadata";
import { pad, projectLink } from "@/lib/projects";

const { projects, caseStudy, ui } = siteConfig;
const caseStudies = projects.filter((project) => project.hasCaseStudy && project.status !== "coming-soon");

// Every real slug is prerendered. Unknown slugs render on demand and must 404 before any
// HTML streams, so the route is allowed to block on `params` instead of using Suspense.
export const instant = false;

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);
  if (!project) return {};
  const path = `/work/${project.slug}`;
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: path },
    openGraph: { ...baseOpenGraph, url: path, title: project.title, description: project.summary },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <>
      <StatusBar />
      <Navbar />
      <CaseStudy project={project} />
      <Footer />
    </>
  );
}

async function CaseStudy({ project }: { project: Project }) {
  const { default: Content } = await import(`@/content/work/${project.slug}.mdx`);

  const links = [
    project.liveUrl && { label: caseStudy.live, href: project.liveUrl },
    project.figmaUrl && { label: caseStudy.figma, href: project.figmaUrl },
    project.repoUrl && { label: caseStudy.repo, href: project.repoUrl },
  ].filter((link): link is { label: string; href: string } => Boolean(link));

  // Next linkable project after this one, wrapping around; coming-soon work is skipped.
  const index = projects.indexOf(project);
  const next = [...projects.slice(index + 1), ...projects.slice(0, index)].find(
    (item) => item.status !== "coming-soon" && projectLink(item),
  );

  const meta = [
    { label: caseStudy.role, value: project.role },
    { label: caseStudy.year, value: project.year },
    { label: caseStudy.discipline, value: project.category },
  ];

  return (
    <main id="main" className="flex-1 overflow-x-clip">
      <article>
        <header className="pt-12 tablet:pt-20">
          <Container>
            <Link
              href={caseStudy.back.href}
              className="group/back inline-flex items-center gap-2 rounded-sm font-mono text-label tracking-mono text-muted uppercase transition-colors hover:text-foreground"
            >
              <span aria-hidden="true" className="transition-transform group-hover/back:-translate-x-0.5">
                ←
              </span>
              {caseStudy.back.label}
            </Link>

            <MonoLabel as="p" className="mt-12">
              {caseStudy.label} · {project.year}
            </MonoLabel>
            <h1 className="mt-4 max-w-[14em] text-display font-medium tracking-tighter">{project.title}</h1>
            <p className="mt-6 max-w-[36em] text-lead text-muted">{project.summary}</p>

            <dl className="mt-12 grid gap-x-8 border-t border-border tablet:grid-cols-4">
              {meta.map((item) => (
                <div key={item.label} className="border-b border-border py-5 tablet:border-b-0">
                  <dt className="font-mono text-label tracking-mono text-muted uppercase">{item.label}</dt>
                  <dd className="mt-2">{item.value}</dd>
                </div>
              ))}
              {links.length > 0 && (
                <div className="py-5">
                  <dt className="font-mono text-label tracking-mono text-muted uppercase">{caseStudy.links}</dt>
                  <dd className="mt-2">
                    <ul className="flex flex-col gap-1.5">
                      {links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 underline underline-offset-4 transition-colors hover:text-primary-text"
                          >
                            {link.label} <Arrow size={12} />
                            <span className="sr-only">{ui.newTab}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
            </dl>

            {project.credit && (
              <div className="mt-10">
                <ClientCredit>{project.credit}</ClientCredit>
              </div>
            )}

            {project.cover && (
              <div className="mt-12 overflow-hidden rounded-panel border border-border bg-surface shadow-xl">
                <Image
                  src={project.cover.src}
                  alt={project.cover.alt}
                  width={project.cover.width}
                  height={project.cover.height}
                  sizes="(min-width: 1312px) 1312px, 100vw"
                  preload
                  className="h-auto w-full"
                />
              </div>
            )}
          </Container>
        </header>

        <Container className="pt-12 pb-section-end tablet:pt-16">
          <Content />
        </Container>
      </article>

      {next && (
        <section aria-labelledby="next-project" className="border-t border-border pt-section-end pb-section-end">
          <Container>
            <h2 id="next-project" className="mb-8 font-mono text-label tracking-mono text-muted uppercase">
              {caseStudy.next}
            </h2>
            <div className="flex max-w-[40rem]">
              <ProjectCard project={next} number={pad(projects.indexOf(next) + 1)} as="h3" />
            </div>
          </Container>
        </section>
      )}
      <ContactBand />
    </main>
  );
}
