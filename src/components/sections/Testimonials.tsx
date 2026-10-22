import Image from "next/image";
import { Card, Heading, Icon, Reveal, Section } from "@/components/ui";
import type { SectionTone } from "@/components/ui/Section";
import { siteConfig, type SiteConfig } from "@/config/site.config";

type TestimonialsProps = {
  content?: SiteConfig["testimonials"];
  /** Anchor for nav links. */
  id?: string;
  tone?: SectionTone;
};

export function Testimonials({ content = siteConfig.testimonials, id = "testimonials", tone }: TestimonialsProps) {
  const { title, items } = content;

  return (
    <Section id={id} tone={tone} aria-labelledby={`${id}-title`}>
      <Heading id={`${id}-title`} title={title} align="center" />
      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <li key={item.name}>
            <Reveal delay={(index % 3) * 100} className="h-full">
              <Card as="article" className="h-full">
                <figure className="flex h-full flex-col gap-6">
                  <Icon name="Quote" className="size-8 text-primary" />
                  <blockquote className="flex-1 text-lg">
                    <p>{item.quote}</p>
                  </blockquote>
                  <figcaption className="flex items-center gap-4">
                    {item.avatar && (
                      <Image
                        src={item.avatar.src}
                        alt=""
                        width={item.avatar.width}
                        height={item.avatar.height}
                        sizes="48px"
                        className="size-12 rounded-full object-cover"
                      />
                    )}
                    <span className="flex flex-col">
                      <span className="font-semibold">{item.name}</span>
                      {item.role && <span className="text-sm text-muted">{item.role}</span>}
                    </span>
                  </figcaption>
                </figure>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
