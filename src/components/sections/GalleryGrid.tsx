"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Button, CursorBubble, Icon, MonoLabel } from "@/components/ui";
import { siteConfig, type ImageRef, type SiteConfig } from "@/config/site.config";
import { pad } from "@/lib/projects";
import { cn } from "@/lib/utils";

type GalleryGridProps = {
  items?: ImageRef[];
  labels?: SiteConfig["graphicDesign"]["lightbox"];
  /** Accessible name for the lightbox dialog. */
  title?: string;
  className?: string;
};

const fill = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ""));

/**
 * Masonry of images (each keeps its own shape); each opens a lightbox on native <dialog>.
 * Esc and backdrop close it, arrow keys step, focus returns to the image that opened it.
 */
export function GalleryGrid({
  items = siteConfig.graphics,
  labels = siteConfig.graphicDesign.lightbox,
  title = siteConfig.graphicDesign.title,
  className,
}: GalleryGridProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const [current, setCurrent] = useState(0);
  const image = items[current];

  const open = (index: number, trigger: HTMLButtonElement) => {
    setCurrent(index);
    triggerRef.current = trigger;
    dialogRef.current?.showModal();
    closeRef.current?.focus();
  };
  const step = (by: number) => setCurrent((index) => (index + by + items.length) % items.length);

  return (
    <>
      <CursorBubble>
        <ul className={cn("columns-1 gap-4 min-[480px]:columns-2 desktop:columns-3 desktop:gap-6", className)}>
          {items.map((item, index) => (
            <li key={item.src} className="mb-4 break-inside-avoid desktop:mb-6">
              <button
                type="button"
                data-cursor={labels.view}
                onClick={(event) => open(index, event.currentTarget)}
                className="group block w-full overflow-hidden rounded-panel border border-border bg-surface transition-colors hover:border-border-strong"
                aria-label={fill(labels.open, { alt: item.alt })}
              >
                <Image
                  src={item.src}
                  alt=""
                  width={item.width}
                  height={item.height}
                  sizes="(min-width: 1101px) 33vw, (min-width: 480px) 50vw, 100vw"
                  className="h-auto w-full transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
                />
              </button>
            </li>
          ))}
        </ul>
      </CursorBubble>

      <dialog
        ref={dialogRef}
        aria-label={title}
        onClose={() => triggerRef.current?.focus()}
        onClick={(event) => event.target === dialogRef.current && dialogRef.current.close()}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        className="m-auto h-dvh max-h-none w-full max-w-none bg-transparent p-4 text-foreground backdrop:bg-overlay tablet:p-8"
      >
        <div className="flex h-full flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <MonoLabel aria-live="polite" className="text-foreground">
              {fill(labels.counter, { index: pad(current + 1), total: pad(items.length) })}
            </MonoLabel>
            <Button ref={closeRef} variant="outline" size="icon" onClick={() => dialogRef.current?.close()} aria-label={labels.close}>
              <Icon name="X" />
            </Button>
          </div>

          {image && (
            <figure className="flex min-h-0 flex-1 flex-col items-center justify-center gap-4">
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="100vw"
                className="min-h-0 w-auto max-w-full flex-1 rounded-md object-contain"
              />
              <figcaption className="max-w-prose text-center text-sm text-muted">{image.alt}</figcaption>
            </figure>
          )}

          {items.length > 1 && (
            <div className="flex justify-center gap-3">
              <Button variant="outline" size="icon" onClick={() => step(-1)} aria-label={labels.previous}>
                <Icon name="ArrowRight" className="rotate-180" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => step(1)} aria-label={labels.next}>
                <Icon name="ArrowRight" />
              </Button>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
