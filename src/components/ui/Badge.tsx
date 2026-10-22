import { cn } from "@/lib/utils";

const variants = {
  accent: "bg-accent text-accent-foreground",
  primary: "bg-primary text-primary-foreground",
  outline: "border border-border text-muted",
};

type BadgeProps = React.ComponentProps<"span"> & { variant?: keyof typeof variants };

export function Badge({ variant = "accent", className, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium",
        variants[variant],
        className,
      )}
      {...rest}
    />
  );
}
