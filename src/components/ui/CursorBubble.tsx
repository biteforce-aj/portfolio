"use client";

import { useEffect, useRef, useState } from "react";
import { canHover, useFollowPointer } from "@/lib/useFollowPointer";
import { cn } from "@/lib/utils";

type CursorBubbleProps = React.ComponentProps<"div">;

/**
 * Accent label that trails the pointer over any descendant with `data-cursor="Label"`.
 * Fine pointers only; hidden with reduced motion. Decorative: the label repeats the link's own text.
 */
export function CursorBubble({ children, className, ...rest }: CursorBubbleProps) {
  const bubbleRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const follow = useFollowPointer((x, y) => {
    bubbleRef.current?.style.setProperty("--x", `${x + 14}px`);
    bubbleRef.current?.style.setProperty("--y", `${y + 14}px`);
  });

  useEffect(() => {
    if (label === null) return;
    const hide = () => setLabel(null);
    window.addEventListener("scroll", hide, { passive: true, once: true });
    return () => window.removeEventListener("scroll", hide);
  }, [label]);

  const onPointerOver = (event: React.PointerEvent) => {
    if (!canHover()) return;
    const target = (event.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
    const next = target?.dataset.cursor ?? null;
    if (next === label) return;
    if (next !== null && label === null) follow.start(event);
    setLabel(next);
  };

  return (
    <div
      className={className}
      onPointerOver={onPointerOver}
      onPointerMove={follow.move}
      onPointerLeave={() => {
        setLabel(null);
        follow.stop();
      }}
      {...rest}
    >
      {children}
      <div
        ref={bubbleRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-41 hidden rounded-full bg-primary px-3.5 py-2 font-mono text-micro tracking-wide whitespace-nowrap text-primary-foreground uppercase tablet:motion-safe:block",
          "[transform:translate3d(var(--x,0),var(--y,0),0)] transition-opacity duration-200",
          label === null ? "opacity-0" : "opacity-100",
        )}
      >
        {label}
      </div>
    </div>
  );
}
