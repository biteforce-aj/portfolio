import Link from "next/link";
import { siteConfig, type Project } from "@/config/site.config";
import { projectLink } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { Arrow } from "./Arrow";
import { MonoLabel } from "./MonoLabel";
import { ProjectCover } from "./ProjectCover";
import { ToastButton } from "./ToastButton";

type ProjectCardProps = {
  project: Project;
  number: string;
  as?: "h2" | "h3";
  className?: string;
};

// The title's link (or button) is stretched over the whole card.
const stretched = "after:absolute after:inset-0 after:content-[''] focus-visible:outline-none";

/**
 * Project card: cover that scales on hover, meta, summary, tags and where it leads.
 * Coming-soon projects get the abstract cover and a button that explains instead of a link.
 * `data-cursor` feeds the CursorBubble label.
 */
export function ProjectCard({ project, number, as: Heading = "h2", className }: ProjectCardProps) {
  const link = projectLink(project);
  const { workCtas, messages, ui, work } = siteConfig;
  const cta = link?.cta ?? workCtas.soon;

  return (
    <article
      data-cursor={cta}
      className={cn(
        "group/card relative flex flex-col overflow-hidden rounded-panel border border-border bg-surface transition-colors hover:border-border-strong",
        "has-focus-visible:outline-2 has-focus-visible:outline-offset-3 has-focus-visible:outline-ring",
        className,
      )}
    >
      <div className="overflow-hidden border-b border-border">
        <ProjectCover
          project={project}
          sizes="(min-width: 1101px) 640px, (min-width: 821px) 50vw, 100vw"
          className="transition-transform duration-700 ease-out motion-safe:group-hover/card:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6 tablet:p-7">
        <div className="flex justify-between gap-4">
          <MonoLabel className="transition-colors group-hover/card:text-primary-text">{number}</MonoLabel>
          <MonoLabel>{project.year}</MonoLabel>
        </div>

        <Heading className="text-3xl font-medium tracking-tight">
          {link === null ? (
            <ToastButton message={messages.comingSoon} className={cn(stretched, "cursor-pointer text-left")}>
              {project.title}
            </ToastButton>
          ) : link.external ? (
            <a href={link.href} target="_blank" rel="noopener noreferrer" className={stretched}>
              {project.title}
              <span className="sr-only"> {ui.newTab}</span>
            </a>
          ) : (
            <Link href={link.href} className={stretched}>
              {project.title}
            </Link>
          )}
        </Heading>

        <p className="text-muted">{project.category}</p>
        {project.status !== "coming-soon" && <p className="text-sm text-muted">{project.summary}</p>}

        <ul className="mt-1 flex flex-wrap gap-2" aria-label={work.tagsLabel}>
          {project.tags.map((tag) => (
            <li key={tag}>
              <MonoLabel className="rounded-full border border-border px-2.5 py-1 text-micro">{tag}</MonoLabel>
            </li>
          ))}
        </ul>

        <MonoLabel
          aria-hidden="true"
          className="mt-auto flex items-center gap-2 pt-4 text-foreground transition-colors group-hover/card:text-primary-text"
        >
          {cta}
          {link && !link.external && <Arrow size={12} />}
        </MonoLabel>
      </div>
    </article>
  );
}
