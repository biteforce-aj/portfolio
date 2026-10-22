import Image from "next/image";
import { Reveal, Section } from "@/components/ui";
import { siteConfig, type SiteConfig } from "@/config/site.config";

type LogoStripProps = { content?: SiteConfig["logos"] };

/** Row of client or partner logos. */
export function LogoStrip({ content = siteConfig.logos }: LogoStripProps) {
  const { title, items } = content;

  return (
    <Section aria-labelledby={title ? "logos-title" : undefined} aria-label={title ? undefined : "Clients"}>
      <Reveal className="flex flex-col items-center gap-8">
        {title && (
          <h2 id="logos-title" className="text-sm font-semibold tracking-wide text-muted uppercase">
            {title}
          </h2>
        )}
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {items.map((logo) => (
            <li key={logo.src}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-10 w-auto opacity-80 transition-opacity hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
