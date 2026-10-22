import Image from "next/image";
import type { ImageRef } from "@/config/site.config";
import { cn } from "@/lib/utils";

type PortraitProps = {
  /** Real photo; without it the frame shows `initials`. */
  photo?: ImageRef;
  initials: string;
  /** Layer name on the selection tag, e.g. "joshua.jpg". */
  layerName: string;
  className?: string;
};

const FRAME = { width: 500, height: 620 };
const handles = [
  "-top-[5px] -left-[5px]",
  "-top-[5px] -right-[5px]",
  "-bottom-[5px] -left-[5px]",
  "-right-[5px] -bottom-[5px]",
];

/** Portrait framed like a selected Figma layer: outline, corner handles, name tag and height ruler. */
export function Portrait({ photo, initials, layerName, className }: PortraitProps) {
  return (
    <div className={cn("relative mt-7 aspect-[500/620] max-w-full", className)}>
      <div className="absolute inset-0 grid place-items-center overflow-hidden rounded-xs bg-linear-to-b from-raised to-surface">
        {photo ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1101px) 500px, (min-width: 821px) 420px, 100vw"
            className="object-cover"
          />
        ) : (
          <span aria-hidden="true" className="font-serif text-monogram tracking-serif text-foreground italic">
            {initials}
          </span>
        )}
      </div>

      <div aria-hidden="true" className="absolute inset-0 border-[1.5px] border-primary">
        {handles.map((position) => (
          <i key={position} className={`absolute size-[9px] border-[1.5px] border-primary bg-white ${position}`} />
        ))}
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-7 left-0 flex gap-3 rounded-xs bg-primary px-2 py-0.5 font-mono text-micro text-primary-foreground"
      >
        {layerName} <b className="font-normal opacity-75">{`${FRAME.width} × ${FRAME.height}`}</b>
      </div>
      <div aria-hidden="true" className="absolute inset-y-0 -right-[26px] hidden w-px bg-primary tablet:block">
        <span className="absolute top-1/2 left-1.5 -translate-y-1/2 -rotate-90 font-mono text-micro text-primary-text">
          {FRAME.height}
        </span>
      </div>
    </div>
  );
}
