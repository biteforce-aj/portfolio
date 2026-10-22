import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: new URL("/", siteConfig.seo.siteUrl).href, changeFrequency: "monthly", priority: 1 }];
}
