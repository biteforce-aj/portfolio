import { cn } from "@/lib/utils";

const sizes = {
  sm: "text-2xl",
  md: "text-4xl",
  lg: "text-5xl",
};

type HeadingProps = {
  title: string;
  eyebrow?: string;
  intro?: string;
  as?: "h1" | "h2" | "h3";
  /** Defaults to lg for h1, md otherwise. */
  size?: keyof typeof sizes;
  align?: "start" | "center";
  /** Set on the heading element, for aria-labelledby. */
  id?: string;
  className?: string;
};

/** Eyebrow + title + intro block used at the top of sections. */
export function Heading({ title, eyebrow, intro, as: Tag = "h2", size, align = "start", id, className }: HeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-(--container-prose) flex-col gap-3",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow && <p className="text-sm font-semibold tracking-wide text-primary uppercase">{eyebrow}</p>}
      <Tag id={id} className={cn("font-bold", sizes[size ?? (Tag === "h1" ? "lg" : "md")])}>
        {title}
      </Tag>
      {intro && <p className="text-lg text-muted">{intro}</p>}
    </div>
  );
}
