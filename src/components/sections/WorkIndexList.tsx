"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/components/ui/Toast";
import { cn } from "@/lib/utils";
import type { ProjectLink } from "@/lib/projects";

export type WorkRow = {
  key: string;
  number: string;
  title: string;
  category: string;
  year: string;
  /** null for coming-soon work: the row is a button that explains instead. */
  link: ProjectLink | null;
  preview: React.ReactNode;
  inlinePreview: boolean;
};

type WorkIndexListProps = { rows: WorkRow[]; soonMessage: string; soonCta: string; newTab: string };

const rowClass = cn(
  "group/row grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1.5 border-t border-border py-5 text-left",
  "transition-[opacity,padding] duration-400 ease-out",
  "tablet:grid-cols-[56px_minmax(0,1fr)_240px_120px_22px] tablet:gap-8 tablet:py-7",
);

/**
 * Rows plus the floating preview and cursor bubble. The preview follows the pointer with a
 * little lag (snaps instead with reduced motion) and only runs on fine, hover-capable pointers.
 */
export function WorkIndexList({ rows, soonMessage, soonCta, newTab }: WorkIndexListProps) {
  const toast = useToast();
  const [active, setActive] = useState<WorkRow | null>(null);
  const [visible, setVisible] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const frame = useRef(0);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  // Scrolling moves the row out from under a still pointer without a pointerleave.
  useEffect(() => {
    if (!visible) return;
    const hide = () => setVisible(false);
    window.addEventListener("scroll", hide, { passive: true, once: true });
    return () => window.removeEventListener("scroll", hide);
  }, [visible]);

  const place = () => {
    const { x, y } = current.current;
    previewRef.current?.style.setProperty("--x", `${x + 28}px`);
    previewRef.current?.style.setProperty("--y", `${y - 150}px`);
    bubbleRef.current?.style.setProperty("--x", `${x + 14}px`);
    bubbleRef.current?.style.setProperty("--y", `${y + 14}px`);
  };

  const loop = () => {
    const ease = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 0.18;
    current.current.x += (target.current.x - current.current.x) * ease;
    current.current.y += (target.current.y - current.current.y) * ease;
    place();
    frame.current = requestAnimationFrame(loop);
  };

  const enter = (row: WorkRow) => (event: React.PointerEvent) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    target.current = current.current = { x: event.clientX, y: event.clientY };
    place();
    setActive(row);
    setVisible(true);
    if (!frame.current) loop();
  };
  const move = (event: React.PointerEvent) => {
    target.current = { x: event.clientX, y: event.clientY };
  };
  const leaveRow = () => setVisible(false);
  const leaveList = () => {
    cancelAnimationFrame(frame.current);
    frame.current = 0;
  };

  return (
    <>
      <ul onPointerLeave={leaveList} className="group/list border-b border-border">
        {rows.map((row) => {
          const cells = (
            <>
              <span className="order-1 font-mono text-label tracking-mono text-muted uppercase transition-colors group-hover/row:text-primary-text tablet:order-none">
                {row.number}
              </span>
              <span className="order-3 col-span-full text-row font-medium tracking-tight tablet:order-none tablet:col-span-1">
                {row.title}
              </span>
              <span className="order-4 col-span-full text-sm text-muted tablet:order-none tablet:col-span-1 tablet:text-base">
                {row.category}
              </span>
              <span className="order-2 text-right font-mono text-label tracking-mono text-muted uppercase transition-colors tablet:order-none tablet:text-left">
                {row.year}
              </span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="hidden text-foreground transition-[transform,color] duration-350 group-hover/row:rotate-45 group-hover/row:text-primary-text tablet:block"
              >
                <path
                  d="M7 17L17 7M9 7h8v8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {row.inlinePreview && (
                <div className="order-5 col-span-full mt-3 overflow-hidden rounded-md tablet:hidden">{row.preview}</div>
              )}
            </>
          );
          const handlers = { onPointerEnter: enter(row), onPointerMove: move, onPointerLeave: leaveRow };
          const hoverShift = "tablet:hover:pl-[18px]";

          return (
            <li
              key={row.key}
              className="transition-opacity duration-400 ease-out tablet:group-hover/list:opacity-32 tablet:hover:opacity-100"
            >
              {row.link === null ? (
                <button
                  type="button"
                  className={cn(rowClass, hoverShift, "cursor-pointer")}
                  onClick={() => toast(soonMessage)}
                  {...handlers}
                >
                  {cells}
                </button>
              ) : row.link.external ? (
                <a
                  href={row.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(rowClass, hoverShift)}
                  {...handlers}
                >
                  {cells}
                  <span className="sr-only">{newTab}</span>
                </a>
              ) : (
                <Link href={row.link.href} className={cn(rowClass, hoverShift)} {...handlers}>
                  {cells}
                </Link>
              )}
            </li>
          );
        })}
      </ul>

      <div
        ref={previewRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-40 hidden w-[368px] overflow-hidden rounded-panel shadow-lg tablet:block",
          "[transform:translate3d(var(--x,0),var(--y,0),0)_rotate(-4deg)_scale(.92)] transition-[opacity,transform] duration-[250ms,80ms] ease-linear motion-reduce:transition-opacity",
          visible ? "opacity-100" : "opacity-0",
        )}
      >
        {active?.preview}
      </div>
      <div
        ref={bubbleRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-41 hidden rounded-full bg-primary px-3.5 py-2 font-mono text-micro tracking-wide whitespace-nowrap text-primary-foreground uppercase tablet:block",
          "[transform:translate3d(var(--x,0),var(--y,0),0)] transition-opacity duration-200",
          visible ? "opacity-100" : "opacity-0",
        )}
      >
        {active ? (active.link?.cta ?? soonCta) : null}
      </div>
    </>
  );
}
