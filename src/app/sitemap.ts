import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

// Add each route here as it ships.
const routes = [
  { path: "/", priority: 1 },
  { path: "/work", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: new URL(path, siteConfig.seo.siteUrl).href,
    changeFrequency: "monthly",
    priority,
  }));
}
