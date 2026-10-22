"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type CompareSliderProps = {
  /** Shown on the left of the divider (e.g. the Figma frame). */
  before: React.ReactNode;
  /** Shown on the right of the divider (e.g. the live site). */
  after: React.ReactNode;
  label: string;
  beforeLabel: string;
  afterLabel: string;
  /** Multiplayer-style cursor name riding the divider; omit to hide it. */
  cursorName?: string;
  initial?: number;
  /** One gentle back-and-forth shortly after load so visitors notice it moves. */
  nudge?: boolean;
  className?: string;
};

const MIN = 4;
const MAX = 96;
const STEP = 4;
const clamp = (value: number) => Math.max(MIN, Math.min(MAX, value));
const easeInOut = (x: number) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2);

/**
 * Before/after comparison with a draggable divider. Pointer drag anywhere on the stage;
 * the handle is a keyboard slider (arrows, Home, End). Position lives in a CSS variable,
 * so dragging never re-renders React.
 */
export function CompareSlider({
  before,
  after,
  label,
  beforeLabel,
  afterLabel,
  cursorName,
  initial = 52,
  nudge = false,
  className,
}: CompareSliderProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLButtonElement>(null);
  const pos = useRef(initial);
  const touched = useRef(false);

  const setPos = (value: number) => {
    pos.current = clamp(value);
    const rounded = Math.round(pos.current);
    stageRef.current?.style.setProperty("--pos", `${pos.current}%`);
    handleRef.current?.setAttribute("aria-valuenow", String(rounded));
    handleRef.current?.setAttribute("aria-valuetext", `${rounded}% ${beforeLabel}, ${100 - rounded}% ${afterLabel}`);
  };

  const fromPointer = (event: React.PointerEvent) => {
    const rect = stageRef.current?.getBoundingClientRect();
    if (rect) setPos(((event.clientX - rect.left) / rect.width) * 100);
  };

  useEffect(() => {
    if (!nudge || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const keys: [number, number][] = [
      [0, initial],
      [700, initial + 18],
      [1500, initial - 18],
      [2300, initial],
    ];
    let frame = 0;
    const timer = window.setTimeout(() => {
      const start = performance.now();
      const step = (now: number) => {
        if (touched.current) return;
        // rAF timestamps can be slightly earlier than `start`, so clamp at 0
        const t = Math.max(0, now - start);
        const i = keys.findIndex(([at]) => at > t);
        if (i === -1) return setPos(initial);
        if (i === 0) {
          frame = requestAnimationFrame(step);
          return;
        }
        const [ta, pa] = keys[i - 1];
        const [tb, pb] = keys[i];
        setPos(pa + (pb - pa) * easeInOut((t - ta) / (tb - ta)));
        frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    }, 1400);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
    // setPos only touches refs; run once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onKeyDown = (event: React.KeyboardEvent) => {
    const delta = { ArrowLeft: -STEP, ArrowDown: -STEP, ArrowRight: STEP, ArrowUp: STEP }[event.key];
    const target =
      event.key === "Home" ? MIN : event.key === "End" ? MAX : delta === undefined ? null : pos.current + delta;
    if (target === null) return;
    event.preventDefault();
    touched.current = true;
    setPos(target);
  };

  const chip =
    "pointer-events-none absolute bottom-3.5 rounded-full bg-glass px-2.5 py-1 font-mono text-micro tracking-wide text-foreground uppercase";

  return (
    <div
      ref={stageRef}
      className={cn("group/compare relative cursor-ew-resize touch-pan-y overflow-hidden select-none", className)}
      style={{ "--pos": `${initial}%` } as React.CSSProperties}
      onPointerDown={(event) => {
        touched.current = true;
        event.currentTarget.setPointerCapture(event.pointerId);
        event.currentTarget.dataset.dragging = "";
        fromPointer(event);
      }}
      onPointerMove={(event) => {
        if (event.currentTarget.dataset.dragging !== undefined) fromPointer(event);
      }}
      onPointerUp={(event) => delete event.currentTarget.dataset.dragging}
      onPointerCancel={(event) => delete event.currentTarget.dataset.dragging}
    >
      <div className="absolute inset-0">{before}</div>
      <div className="absolute inset-0 [clip-path:inset(0_0_0_var(--pos))]">{after}</div>

      <div className="pointer-events-none absolute inset-y-0 left-(--pos) -ml-px w-0.5 bg-primary">
        <button
          ref={handleRef}
          type="button"
          role="slider"
          aria-label={label}
          aria-valuemin={MIN}
          aria-valuemax={MAX}
          aria-valuenow={initial}
          aria-valuetext={`${initial}% ${beforeLabel}, ${100 - initial}% ${afterLabel}`}
          onKeyDown={onKeyDown}
          className="pointer-events-auto absolute top-1/2 left-1/2 grid size-[42px] -translate-1/2 cursor-grab place-items-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform hover:scale-108 group-data-dragging/compare:scale-108 group-data-dragging/compare:cursor-grabbing"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M9 6l-6 6 6 6M15 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {cursorName && (
          <div aria-hidden="true" className="absolute top-[calc(50%+14px)] left-[18px] flex items-start">
            <svg width="18" height="20" viewBox="0 0 18 20" className="fill-primary stroke-foreground">
              <path d="M1 1l15 7.5-6.5 2L7 18 1 1z" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
            <span className="mt-4 -ml-0.5 rounded-sm bg-primary px-2 py-0.5 text-label font-medium whitespace-nowrap text-primary-foreground">
              {cursorName}
            </span>
          </div>
        )}
      </div>

      <span aria-hidden="true" className={cn(chip, "left-3.5")}>
        {beforeLabel}
      </span>
      <span aria-hidden="true" className={cn(chip, "right-3.5")}>
        {afterLabel}
      </span>
    </div>
  );
}
