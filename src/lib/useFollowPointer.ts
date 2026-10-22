"use client";

import { useEffect, useRef } from "react";

type Place = (x: number, y: number) => void;

/** True on fine, hover-capable pointers (mouse, trackpad) — where follow-the-cursor UI makes sense. */
export const canHover = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/**
 * Eases a point toward the pointer every frame and hands it to `place`.
 * Snaps instead of easing with reduced motion. Call `start` on enter, `move` on move, `stop` on leave.
 */
export function useFollowPointer(place: Place) {
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const frame = useRef(0);
  const placeRef = useRef(place);

  useEffect(() => {
    placeRef.current = place;
  });
  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const loop = () => {
    const ease = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 0.18;
    current.current.x += (target.current.x - current.current.x) * ease;
    current.current.y += (target.current.y - current.current.y) * ease;
    placeRef.current(current.current.x, current.current.y);
    frame.current = requestAnimationFrame(loop);
  };

  return {
    start(event: React.PointerEvent) {
      target.current = { x: event.clientX, y: event.clientY };
      current.current = { x: event.clientX, y: event.clientY };
      placeRef.current(event.clientX, event.clientY);
      if (!frame.current) loop();
    },
    move(event: React.PointerEvent) {
      target.current = { x: event.clientX, y: event.clientY };
    },
    stop() {
      cancelAnimationFrame(frame.current);
      frame.current = 0;
    },
  };
}
