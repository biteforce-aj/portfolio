import { Container, MonoLabel } from "@/components/ui";
import { siteConfig, type SiteConfig } from "@/config/site.config";

type CredentialStripProps = { content?: SiteConfig["home"]["credentials"] };

/** "Previously" strip of past teams and education; scrolls sideways on small screens. */
export function CredentialStrip({ content = siteConfig.home.credentials }: CredentialStripProps) {
  return (
    <div className="border-y border-border">
      {/* Focusable so keyboard users can scroll it when it overflows. */}
      <Container
        role="region"
        aria-labelledby="credentials-label"
        tabIndex={0}
        className="flex items-center gap-10 overflow-x-auto py-[26px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <MonoLabel as="p" id="credentials-label" className="whitespace-nowrap">
          {content.label}
        </MonoLabel>
        <ul className="flex items-center gap-10">
          {content.items.map((item) => (
            <li key={item} className="text-ui whitespace-nowrap">
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
