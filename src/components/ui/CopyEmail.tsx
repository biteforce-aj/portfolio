"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "./Toast";

type CopyEmailProps = {
  email: string;
  labels: { copy: string; copied: string; copiedToast: string; selectedToast: string };
  className?: string;
};

/** Big underlined mailto link with a Copy button; falls back to selecting the text. */
export function CopyEmail({ email, labels, className }: CopyEmailProps) {
  const toast = useToast();
  const [copied, setCopied] = useState(false);
  const addressRef = useRef<HTMLAnchorElement>(null);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast(labels.copiedToast);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      const node = addressRef.current;
      if (!node) return;
      const range = document.createRange();
      range.selectNodeContents(node);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
      toast(labels.selectedToast);
    }
  };

  return (
    <div className={cn("flex min-w-0 flex-wrap items-center gap-4", className)}>
      <a
        ref={addressRef}
        href={`mailto:${email}`}
        className="text-email font-medium tracking-snug break-all underline decoration-1 underline-offset-6 transition-colors hover:text-primary-text"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="rounded-sm border border-border px-2.5 py-1.5 font-mono text-label tracking-mono text-muted uppercase transition-colors hover:border-foreground hover:text-foreground"
      >
        {copied ? labels.copied : labels.copy}
      </button>
    </div>
  );
}
