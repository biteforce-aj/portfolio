"use client";

import { Arrow } from "./Arrow";
import { buttonVariants } from "./Button";
import { useToast } from "./Toast";

type CvButtonProps = {
  href: string;
  label: string;
  /** False until the PDF exists in /public; the button then explains instead of 404ing. */
  available: boolean;
  missingMessage: string;
};

export function CvButton({ href, label, available, missingMessage }: CvButtonProps) {
  const toast = useToast();
  const className = buttonVariants({ variant: "outline" });

  if (!available) {
    return (
      <button type="button" className={className} onClick={() => toast(missingMessage)}>
        {label} <Arrow />
      </button>
    );
  }
  return (
    <a href={href} download className={className}>
      {label} <Arrow />
    </a>
  );
}
