import { CursorBubble, ProjectCard } from "@/components/ui";
import { siteConfig, type Project, type SiteConfig } from "@/config/site.config";
import { pad } from "@/lib/projects";
import { ProjectFilter } from "./ProjectFilter";

type ProjectGridProps = { projects?: Project[]; content?: SiteConfig["work"] };

/** Every project as a card, filterable by tag, with the cursor bubble over cards. */
export function ProjectGrid({ projects = siteConfig.projects, content = siteConfig.work }: ProjectGridProps) {
  const items = projects.map((project, index) => ({
    key: project.slug,
    tags: project.tags,
    node: <ProjectCard project={project} number={pad(index + 1)} />,
  }));

  return (
    <CursorBubble>
      <ProjectFilter
        items={items}
        filters={content.filters}
        labels={{ group: content.filterLabel, all: content.allLabel, results: content.results }}
      />
    </CursorBubble>
  );
}
