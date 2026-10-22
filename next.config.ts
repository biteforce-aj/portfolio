import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Case studies are .mdx files in src/content, imported by app/work/[slug]; they are not routes.
  pageExtensions: ["ts", "tsx"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

// No remark/rehype plugins, so the options stay serialisable for Turbopack.
const withMDX = createMDX({});

export default withMDX(nextConfig);
