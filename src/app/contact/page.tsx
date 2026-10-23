import type { Metadata } from "next";
import { ContactForm, Footer, Navbar, StatusBar } from "@/components/sections";
import { siteConfig } from "@/config/site.config";
import { baseOpenGraph } from "@/lib/metadata";

const { contact } = siteConfig;

export const metadata: Metadata = {
  title: contact.title,
  description: contact.description,
  alternates: { canonical: "/contact" },
  openGraph: { ...baseOpenGraph, url: "/contact", title: contact.title, description: contact.description },
};

export default function ContactPage() {
  return (
    <>
      <StatusBar />
      <Navbar />
      <main id="main" className="flex-1 overflow-x-clip">
        <ContactForm as="h1" />
      </main>
      <Footer />
    </>
  );
}
