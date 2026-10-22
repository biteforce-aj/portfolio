import { siteConfig, type MockScreen as MockScreenName, type SiteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";
import { SiteStarterMock } from "./SiteStarterMock";
import { SoonMock } from "./SoonMock";
import { WireframeMock } from "./WireframeMock";
import { WmenMock } from "./WmenMock";

const screens = {
  wireframe: WireframeMock,
  wmen: WmenMock,
  "site-starter": SiteStarterMock,
  soon: SoonMock,
} satisfies Record<MockScreenName, React.ComponentType<{ content: SiteConfig["mocks"] }>>;

type MockScreenProps = {
  screen: MockScreenName;
  /** Fill the parent (absolute inset-0) instead of keeping the 656 × 460 ratio. */
  fill?: boolean;
  className?: string;
};

/**
 * A drawn mini-site in a 656 × 460 design space. `--u` is one design pixel at the current
 * width (a container query unit), so the mock scales with its box without JavaScript.
 * Decorative: callers provide the accessible description. Server-only (reads siteConfig).
 */
export function MockScreen({ screen, fill, className }: MockScreenProps) {
  const Screen = screens[screen];
  return (
    <div
      aria-hidden="true"
      className={cn(
        "@container overflow-hidden select-none",
        fill ? "absolute inset-0" : "relative aspect-[656/460] w-full",
        className,
      )}
    >
      <div className="absolute inset-0 [--u:calc(100cqw/656)]">
        <Screen content={siteConfig.mocks} />
      </div>
    </div>
  );
}
