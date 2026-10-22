import { cn } from "@/lib/utils";

type ArrowProps = React.ComponentProps<"svg"> & { size?: number; strokeWidth?: number };

/** The prototype's up-right arrow. Decorative; Button nudges it on hover. */
export function Arrow({ size = 14, strokeWidth = 2.2, className, ...rest }: ArrowProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("arrow", className)}
      {...rest}
    >
      <path
        d="M7 17L17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
