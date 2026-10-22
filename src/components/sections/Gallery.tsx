"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Icon } from "@/components/ui/Icon";
import { Section, type SectionTone } from "@/components/ui/Section";
import { siteConfig, type SiteConfig } from "@/config/site.config";

type GalleryProps = {
  content?: SiteConfig["gallery"];
  /** Anchor for nav links. */
  id?: string;
  tone?: SectionTone;
};

/** Image grid; each image opens a lightbox built on native <dialog> (Esc closes, arrow keys step). */
export function Gallery({ content = siteConfig.gallery, id = "work", tone }: GalleryProps) {
  const { title, items } = content;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState(0);
  const image = items[current];

  const open = (index: number) => {
    setCurrent(index);
    dialogRef.current?.showModal();
  };
  const step = (by: number) => setCurrent((index) => (index + by + items.length) % items.length);

  return (
    <Section id={id} tone={tone} aria-labelledby={`${id}-title`}>
      <Heading id={`${id}-title`} title={title} align="center" />
      <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {items.map((item, index) => (
          <li key={item.src}>
            <button
              type="button"
              onClick={() => open(index)}
              className="group block w-full overflow-hidden rounded-md"
              aria-label={`View larger: ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="aspect-4/3 w-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={title}
        onClick={(event) => event.target === dialogRef.current && dialogRef.current.close()}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") step(1);
          if (event.key === "ArrowLeft") step(-1);
        }}
        className="m-auto w-full max-w-(--container-content) bg-transparent p-4 backdrop:bg-overlay"
      >
        {image && (
          <figure className="flex flex-col items-center gap-4">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="90vw"
              className="max-h-[75vh] w-full rounded-md object-contain"
            />
            <figcaption className="flex w-full items-center justify-between gap-4 rounded-md bg-background p-2 pl-4 text-foreground">
              <span className="text-sm" aria-live="polite">
                {image.alt} · {current + 1} / {items.length}
              </span>
              <span className="flex gap-2">
                {items.length > 1 && (
                  <>
                    <Button variant="ghost" size="icon" onClick={() => step(-1)} aria-label="Previous image">
                      <Icon name="ArrowRight" className="rotate-180" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => step(1)} aria-label="Next image">
                      <Icon name="ArrowRight" />
                    </Button>
                  </>
                )}
                <Button variant="ghost" size="icon" onClick={() => dialogRef.current?.close()} aria-label="Close">
                  <Icon name="X" />
                </Button>
              </span>
            </figcaption>
          </figure>
        )}
      </dialog>
    </Section>
  );
}
