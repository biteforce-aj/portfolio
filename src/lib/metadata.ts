import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

const { brand, seo } = siteConfig;

/**
 * Open Graph fields every page shares. A page's `openGraph` replaces its parent's
 * rather than merging, so each page spreads these in to keep the share image.
 */
export const baseOpenGraph = {
  type: "website",
  siteName: brand.name,
  locale: seo.locale,
  images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: seo.defaultTitle }],
} satisfies Metadata["openGraph"];
