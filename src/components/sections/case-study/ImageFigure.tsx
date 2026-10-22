import Image from "next/image";
import { MockScreen, MonoLabel } from "@/components/ui";
import type { MockScreen as MockScreenName } from "@/config/site.config";

type ImageFigureProps = {
  caption: string;
  /** Screenshot or export in /public. */
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  /** Drawn mock to show until a real screenshot exists. */
  mock?: MockScreenName;
};

/** Framed figure for case study screenshots, with a mono caption. */
export function ImageFigure({ caption, src, alt = "", width = 1600, height = 1000, mock }: ImageFigureProps) {
  return (
    <figure className="scroll-reveal my-2 text-base">
      <div className="overflow-hidden rounded-panel border border-border bg-surface shadow-lg">
        {src ? (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width: 1101px) 900px, 100vw"
            className="h-auto w-full"
          />
        ) : (
          mock && <MockScreen screen={mock} />
        )}
      </div>
      <MonoLabel as="figcaption" className="mt-3 block normal-case">
        {caption}
      </MonoLabel>
    </figure>
  );
}
