import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { baseOpenGraph } from "@/lib/metadata";
import { fontVariables } from "@/styles/fonts";
import { Providers } from "./providers";
import "@/styles/globals.css";

const { brand, seo } = siteConfig;

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: { default: seo.defaultTitle, template: seo.titleTemplate },
  description: seo.description,
  applicationName: brand.name,
  alternates: { canonical: "/" },
  icons: { icon: brand.favicon },
  openGraph: { ...baseOpenGraph, url: "/", title: seo.defaultTitle, description: seo.description },
  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle,
    description: seo.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={seo.locale.split("_")[0]} className={fontVariables} suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
