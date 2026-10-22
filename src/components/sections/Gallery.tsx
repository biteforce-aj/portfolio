import { Heading } from "@/components/ui/Heading";
import { Section, type SectionTone } from "@/components/ui/Section";
import { siteConfig, type SiteConfig } from "@/config/site.config";
import { GalleryGrid } from "./GalleryGrid";

type GalleryProps = {
  content?: SiteConfig["gallery"];
  /** Anchor for nav links. */
  id?: string;
  tone?: SectionTone;
};

/** Titled section around GalleryGrid (masonry + lightbox). */
export function Gallery({ content = siteConfig.gallery, id = "work", tone }: GalleryProps) {
  const { title, items } = content;

  return (
    <Section id={id} tone={tone} aria-labelledby={`${id}-title`}>
      <Heading id={`${id}-title`} title={title} align="center" />
      <GalleryGrid items={items} title={title} className="mt-12" />
    </Section>
  );
}
