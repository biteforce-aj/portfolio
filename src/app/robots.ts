import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

export default function robots(): MetadataRoute.Robots {
  const { siteUrl } = siteConfig.seo;
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/styleguide" },
    sitemap: new URL("/sitemap.xml", siteUrl).href,
  };
}
