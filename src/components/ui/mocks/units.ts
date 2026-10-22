// Mock screens are drawn in a 656 × 460 design space; `u(n)` is n design pixels.
export const u = (n: number) => `calc(${n} * var(--u))`;

/** Absolute box in design pixels. */
export function box(left: number, top: number, width?: number, height?: number): React.CSSProperties {
  return {
    position: "absolute",
    left: u(left),
    top: u(top),
    width: width === undefined ? undefined : u(width),
    height: height === undefined ? undefined : u(height),
  };
}
