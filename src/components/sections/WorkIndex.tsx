import Image from "next/image";
import { Arrow, Button, Container, MockScreen, MonoLabel } from "@/components/ui";
import { siteConfig, type Project, type SiteConfig } from "@/config/site.config";
import { featuredProjects, pad, projectLink } from "@/lib/projects";
import { WorkIndexList, type WorkRow } from "./WorkIndexList";

type WorkIndexProps = {
  content?: SiteConfig["home"]["work"];
  projects?: Project[];
  id?: string;
};

function Preview({ project }: { project: Project }) {
  if (project.cover) {
    return (
      <div className="relative aspect-[656/460]">
        <Image src={project.cover.src} alt="" fill sizes="368px" className="object-cover" />
      </div>
    );
  }
  return project.preview ? <MockScreen screen={project.preview} /> : null;
}

/** Index-style list of featured work. Hovering a row dims the others and floats a preview. */
export function WorkIndex({
  content = siteConfig.home.work,
  projects = featuredProjects(),
  id = "work",
}: WorkIndexProps) {
  const rows: WorkRow[] = projects.map((project, index) => ({
    key: project.slug,
    number: pad(index + 1),
    title: project.title,
    category: project.category,
    year: project.year,
    link: projectLink(project),
    preview: <Preview project={project} />,
    // Coming-soon covers are abstract, so they only float on hover; no inline copy on phones.
    inlinePreview: project.status !== "coming-soon",
  }));

  return (
    <section id={id} className="scroll-mt-24 pt-section pb-section-end">
      <Container>
        <div className="scroll-reveal mb-14 flex items-end justify-between gap-6">
          <div>
            <MonoLabel as="p">{content.label}</MonoLabel>
            <h2 className="mt-3 max-w-[8em] font-serif text-section font-normal tracking-serif italic">
              {content.title}
            </h2>
          </div>
          <MonoLabel aria-hidden="true">({pad(rows.length)})</MonoLabel>
        </div>

        <WorkIndexList
          rows={rows}
          soonMessage={siteConfig.messages.comingSoon}
          soonCta={siteConfig.workCtas.soon}
          newTab={siteConfig.ui.newTab}
        />

        <Button href={content.more.href} variant="outline" className="mt-10">
          {content.more.label} <Arrow />
        </Button>
      </Container>
    </section>
  );
}
