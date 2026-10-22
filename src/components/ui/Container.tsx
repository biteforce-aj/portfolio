import { cn } from "@/lib/utils";

const sizes = {
  content: "max-w-content",
  prose: "max-w-(--container-prose)",
};

export type ContainerSize = keyof typeof sizes;

type ContainerProps = React.ComponentProps<"div"> & { size?: ContainerSize };

export function Container({ size = "content", className, ...rest }: ContainerProps) {
  return <div className={cn("mx-auto w-full px-gutter", sizes[size], className)} {...rest} />;
}
