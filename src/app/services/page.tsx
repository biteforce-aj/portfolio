import type { Metadata } from "next";
import { Footer, Navbar, ProcessSteps, QuoteBand, ServiceList, StatusBar } from "@/components/sections";
import { siteConfig } from "@/config/site.config";
import { baseOpenGraph } from "@/lib/metadata";

const { servicesPage } = siteConfig;

export const metadata: Metadata = {
  title: servicesPage.label,
  description: servicesPage.description,
  alternates: { canonical: "/services" },
  openGraph: { ...baseOpenGraph, url: "/services", title: servicesPage.label, description: servicesPage.description },
};

export default function ServicesPage() {
  return (
    <>
      <StatusBar />
      <Navbar />
      <main id="main" className="flex-1 overflow-x-clip">
        <ServiceList intro={servicesPage} showMore={false} as="h1" className="pt-16 tablet:pt-24" />
        <ProcessSteps />
        <QuoteBand />
      </main>
      <Footer />
    </>
  );
}
