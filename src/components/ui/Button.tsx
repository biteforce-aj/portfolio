import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-foreground text-background hover:bg-primary hover:text-primary-foreground",
  secondary: "bg-accent text-accent-foreground hover:bg-accent/70",
  outline: "border border-border text-foreground hover:border-foreground hover:bg-raised",
  ghost: "text-foreground hover:bg-raised",
  /** For use on `bg-primary` surfaces, e.g. CTABand. */
  inverse:
    "bg-primary-foreground text-primary hover:bg-primary-foreground/90 focus-visible:outline-primary-foreground",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5.5 text-ui",
  lg: "h-13 px-7 text-lg",
  icon: "size-11",
};

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

type StyleProps = { variant?: ButtonVariant; size?: ButtonSize; className?: string };

/** Button classes, for elements that can't use <Button> directly. */
export function buttonVariants({ variant = "primary", size = "md", className }: StyleProps = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2.5 rounded-full font-medium whitespace-nowrap transition-colors",
    "disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 [&_svg:not(.arrow)]:size-[1.15em]",
    // Arrow nudges up-right on hover (see ui/Arrow).
    "[&_.arrow]:transition-transform [&_.arrow]:duration-300 hover:[&_.arrow]:translate-x-0.5 hover:[&_.arrow]:-translate-y-0.5",
    variants[variant],
    sizes[size],
    className,
  );
}

type ButtonAsButton = StyleProps & React.ComponentProps<"button"> & { href?: undefined };
type ButtonAsLink = StyleProps & Omit<React.ComponentProps<typeof Link>, "className">;
export type ButtonProps = ButtonAsButton | ButtonAsLink;

/** Renders a next/link when given `href`, otherwise a <button>. */
export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { variant, size, className, ...rest } = props;
    return <Link className={buttonVariants({ variant, size, className })} {...rest} />;
  }
  const { variant, size, className, type = "button", ...rest } = props;
  return <button type={type} className={buttonVariants({ variant, size, className })} {...rest} />;
}
