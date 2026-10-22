import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLElement> & {
  as?: "div" | "article" | "li";
  /** Lift on hover — use when the whole card is a link target. */
  interactive?: boolean;
};

export function Card({ as: Comp = "div", interactive, className, ...rest }: CardProps) {
  return (
    <Comp
      className={cn(
        "rounded-lg border border-border bg-background p-6 shadow-sm",
        interactive && "transition-shadow hover:shadow-md",
        className,
      )}
      {...rest}
    />
  );
}
