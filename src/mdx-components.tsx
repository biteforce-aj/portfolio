import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { ClientCredit, FigmaLiveSlider, ImageFigure, ProcessStep } from "@/components/sections/case-study";

// Markdown elements inside case studies, styled to match the site, plus the case study blocks.
const components: MDXComponents = {
  h3: (props) => <h3 className="pt-2 text-2xl font-medium tracking-snug text-foreground" {...props} />,
  p: (props) => <p className="text-pretty" {...props} />,
  ul: (props) => <ul className="space-y-3" {...props} />,
  ol: (props) => <ol className="list-decimal space-y-3 pl-5" {...props} />,
  li: (props) => (
    <li
      className="relative pl-6 before:absolute before:top-[0.7em] before:left-0 before:size-1.5 before:rounded-full before:bg-primary-text [ol>&]:pl-1 [ol>&]:before:hidden"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-medium text-foreground" {...props} />,
  em: (props) => <em className="font-serif text-[1.08em] text-foreground italic" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-2 border-primary pl-5 font-serif text-3xl text-foreground italic" {...props} />
  ),
  a: ({ href = "", ...props }) =>
    href.startsWith("/") ? (
      <Link href={href} className="text-foreground underline underline-offset-4 hover:text-primary-text" {...props} />
    ) : (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground underline underline-offset-4 hover:text-primary-text"
        {...props}
      />
    ),
  ProcessStep,
  ImageFigure,
  FigmaLiveSlider,
  ClientCredit,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
