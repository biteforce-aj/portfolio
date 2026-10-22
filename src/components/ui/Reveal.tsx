"use client";

import { useEffect, useRef } from "react";

type RevealProps = React.ComponentProps<"div"> & {
  /** Stagger in ms. */
  delay?: number;
};

/**
 * Fades children in when scrolled into view. Styles live in globals.css and only apply
 * with scripting on and no reduced-motion preference. Don't wrap above-the-fold content.
 */
export function Reveal({ delay, style, ...rest }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => el.setAttribute("data-revealed", "");
    if (!("IntersectionObserver" in window)) return show();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} data-reveal="" style={delay ? { transitionDelay: `${delay}ms`, ...style } : style} {...rest} />
  );
}
