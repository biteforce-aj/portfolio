import Image from "next/image";
import { MonoLabel } from "@/components/ui";
import type { ImageRef } from "@/config/site.config";

type ScreenshotGalleryProps = {
  caption: string;
  /** Wide page shots, each shown full width in a browser frame. */
  desktop?: ImageRef[];
  /** Tall phone shots, shown side by side in phone frames. */
  mobile?: ImageRef[];
};

/** Case study screenshots: desktop pages stacked wide, then mobile screens in a row of phones. */
export function ScreenshotGallery({ caption, desktop = [], mobile = [] }: ScreenshotGalleryProps) {
  return (
    <figure className="my-2 space-y-6 text-base tablet:space-y-8">
      {desktop.length > 0 && (
        <ul className="space-y-6 tablet:space-y-8">
          {desktop.map((shot) => (
            <li
              key={shot.src}
              className="scroll-reveal overflow-hidden rounded-panel border border-border bg-surface shadow-lg"
            >
              <div className="flex gap-1.5 bg-raised px-3 py-2.5" aria-hidden="true">
                <i className="size-2 rounded-full bg-border-strong" />
                <i className="size-2 rounded-full bg-border-strong" />
                <i className="size-2 rounded-full bg-border-strong" />
              </div>
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                sizes="(min-width: 1101px) 880px, 100vw"
                className="h-auto w-full"
              />
            </li>
          ))}
        </ul>
      )}

      {mobile.length > 0 && (
        <ul className="grid grid-cols-2 gap-4 min-[480px]:grid-cols-3 tablet:gap-6">
          {mobile.map((shot) => (
            <li
              key={shot.src}
              className="scroll-reveal rounded-xl border border-border-strong bg-raised p-1.5 shadow-lg"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                sizes="(min-width: 1101px) 280px, (min-width: 480px) 30vw, 50vw"
                className="h-auto w-full rounded-lg"
              />
            </li>
          ))}
        </ul>
      )}

      <MonoLabel as="figcaption" className="block normal-case">
        {caption}
      </MonoLabel>
    </figure>
  );
}
