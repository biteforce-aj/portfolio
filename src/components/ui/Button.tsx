import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  secondary: "bg-accent text-accent-foreground hover:bg-accent/70",
  outline: "border border-border bg-background text-foreground hover:border-input hover:bg-surface",
  ghost: "text-foreground hover:bg-surface",
  /** For use on `bg-primary` surfaces, e.g. CTABand. */
  inverse:
    "bg-primary-foreground text-primary hover:bg-primary-foreground/90 focus-visible:outline-primary-foreground",
};

const sizes = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-base",
  lg: "h-13 px-7 text-lg",
  icon: "size-11",
};

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

type StyleProps = { variant?: ButtonVariant; size?: ButtonSize; className?: string };

/** Button classes, for elements that can't use <Button> directly. */
export function buttonVariants({ variant = "primary", size = "md", className }: StyleProps = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap transition-colors",
    "disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-[1.15em] [&_svg]:shrink-0",
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
