import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
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
  openGraph: {
    type: "website",
    url: "/",
    siteName: brand.name,
    title: seo.defaultTitle,
    description: seo.description,
    locale: seo.locale,
    images: [{ url: seo.ogImage, width: 1200, height: 630, alt: brand.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle,
    description: seo.description,
    images: [seo.ogImage],
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
