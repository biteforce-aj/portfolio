import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

// Add each route here as it ships; case studies come from the projects list.
const routes = [
  { path: "/", priority: 1 },
  { path: "/work", priority: 0.9 },
  { path: "/services", priority: 0.9 },
  { path: "/graphic-design", priority: 0.7 },
  ...siteConfig.projects
    .filter((project) => project.hasCaseStudy && project.status !== "coming-soon")
    .map((project) => ({ path: `/work/${project.slug}`, priority: 0.8 })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: new URL(path, siteConfig.seo.siteUrl).href,
    changeFrequency: "monthly",
    priority,
  }));
}
