import Image from "next/image";
import { CompareSlider, MockScreen, MonoLabel } from "@/components/ui";
import { siteConfig, type MockScreen as MockScreenName } from "@/config/site.config";

type Side = { mock?: MockScreenName; src?: string; alt?: string };

type FigmaLiveSliderProps = {
  /** Figma frame: an exported image, or a drawn mock until one exists. */
  before?: Side;
  /** Live site: a screenshot, or a drawn mock. */
  after?: Side;
  caption?: string;
};

function Layer({ side }: { side: Side }) {
  if (side.src) {
    return (
      <Image
        src={side.src}
        alt={side.alt ?? ""}
        fill
        sizes="(min-width: 1101px) 1312px, 100vw"
        className="object-cover object-top"
      />
    );
  }
  return side.mock ? <MockScreen screen={side.mock} fill /> : null;
}

/** Keyboard-accessible Figma ↔ live comparison for case studies. Both layers must share one aspect ratio. */
export function FigmaLiveSlider({
  before = { mock: "wireframe" },
  after = { mock: "wmen" },
  caption = siteConfig.caseStudy.sliderCaption,
}: FigmaLiveSliderProps) {
  const { compare } = siteConfig.hero;

  return (
    <figure className="my-2">
      <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-xl">
        <CompareSlider
          className="aspect-[656/460]"
          before={<Layer side={before} />}
          after={<Layer side={after} />}
          label={compare.sliderLabel}
          beforeLabel={compare.beforeLabel}
          afterLabel={compare.afterLabel}
          cursorName={compare.cursorName}
        />
      </div>
      <MonoLabel as="figcaption" className="mt-3 block normal-case">
        {caption}
      </MonoLabel>
    </figure>
  );
}
