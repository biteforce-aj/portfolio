import type { Metadata } from "next";
import { AboutIntro, ContactBand, Footer, Navbar, SkillGroups, StatusBar, Timeline } from "@/components/sections";
import { siteConfig } from "@/config/site.config";
import { baseOpenGraph } from "@/lib/metadata";

const { about, experience, education } = siteConfig;

export const metadata: Metadata = {
  title: about.title,
  description: about.description,
  alternates: { canonical: "/about" },
  openGraph: { ...baseOpenGraph, url: "/about", title: about.title, description: about.description },
};

const experienceItems = experience.map((job) => ({
  period: job.period,
  title: job.role,
  meta: `${job.org} · ${job.location}`,
  points: job.points,
}));

const educationItems = education.map((entry) => ({
  period: entry.year,
  title: entry.degree,
  meta: `${entry.school} · ${entry.detail}`,
}));

export default function AboutPage() {
  return (
    <>
      <StatusBar />
      <Navbar />
      <main id="main" className="flex-1 overflow-x-clip">
        <AboutIntro as="h1" story={about.story} showFacts={false} showMore={false} className="pt-16 tablet:pt-24" />
        <Timeline id="experience" title={about.experienceTitle} items={experienceItems} className="bg-surface" />
        <Timeline id="education" title={about.educationTitle} items={educationItems} />
        <SkillGroups className="bg-surface" />
        <ContactBand />
      </main>
      <Footer />
    </>
  );
}
