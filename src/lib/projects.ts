import { siteConfig, type Project } from "@/config/site.config";

export type ProjectLink = { href: string; external: boolean; cta: string };

/**
 * Where a project leads: its case study, else the repo, live site or internal page.
 * Coming-soon projects never link anywhere (the client hasn't approved publication).
 */
export function projectLink(project: Project, ctas = siteConfig.workCtas): ProjectLink | null {
  if (project.status === "coming-soon") return null;
  if (project.hasCaseStudy) return { href: `/work/${project.slug}`, external: false, cta: ctas.caseStudy };
  if (project.repoUrl) return { href: project.repoUrl, external: true, cta: ctas.repo };
  if (project.liveUrl) return { href: project.liveUrl, external: true, cta: ctas.live };
  if (project.href) return { href: project.href, external: false, cta: ctas.view };
  return null;
}

export const featuredProjects = (projects = siteConfig.projects) => projects.filter((project) => project.featured);

/** "01", "02"… */
export const pad = (n: number) => String(n).padStart(2, "0");
