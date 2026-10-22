import { cn } from "@/lib/utils";

type MonoLabelProps = React.HTMLAttributes<HTMLElement> & { as?: "span" | "p" | "div" | "figcaption" };

/** Uppercase, tracked Geist Mono label used for eyebrows, meta and the status bar. */
export function MonoLabel({ as: Tag = "span", className, ...rest }: MonoLabelProps) {
  return <Tag className={cn("font-mono text-label tracking-mono text-muted uppercase", className)} {...rest} />;
}

/** Accent dot; `live` adds the pulsing ring. */
export function Dot({ live, className }: { live?: boolean; className?: string }) {
  return (
    <i
      aria-hidden="true"
      className={cn(
        "inline-block size-[7px] flex-none rounded-full bg-primary-text",
        live && "animate-pulse-ring",
        className,
      )}
    />
  );
}
