"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { buttonVariants } from "@/components/ui/Button";
import { LocalTime } from "@/components/ui/LocalTime";
import type { Link as NavLink } from "@/config/site.config";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  links: NavLink[];
  name: string;
  /** Optional count shown after a link, keyed by href, e.g. { "/work": 4 }. */
  counts?: Record<string, number>;
  whatsapp: { label: string; href: string };
  status: { location: string; timeZone: string; timeZoneLabel: string; availability: string };
  labels: { menu: string; close: string; newTab: string };
};

const noop = () => () => {};

const pill =
  "inline-flex rounded-full border border-border bg-surface px-3.5 py-[9px] font-mono text-label tracking-mono text-foreground uppercase";

/** Full-screen menu that slides in from the right below the `tablet` breakpoint. */
export function MobileNav({ links, name, counts = {}, whatsapp, status, labels }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const openRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        openRef.current?.focus();
        return;
      }
      // Keep Tab inside the panel while it covers the page.
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>("a, button");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    // Matches the `tablet` breakpoint where the desktop nav takes over.
    const desktop = window.matchMedia("(min-width: 51.3125rem)");
    const onResize = () => desktop.matches && setOpen(false);

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);
  // The panel is portalled to <body>: the header's backdrop-filter would otherwise trap `position: fixed`.
  const mounted = useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );

  return (
    <>
      <button
        ref={openRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(true)}
        className={cn(pill, "tablet:hidden")}
      >
        {labels.menu}
      </button>

      {mounted &&
        createPortal(
          <div
            ref={panelRef}
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label={labels.menu}
            inert={!open}
            className={cn(
              "fixed inset-0 z-90 flex flex-col bg-background px-[max(1.5rem,env(safe-area-inset-right,0px))] pt-[calc(env(safe-area-inset-top,0px)+1.25rem)] pb-8 duration-450 ease-out tablet:hidden",
              // Visibility flips at once on open (so Close can take focus) and after the slide on close.
              open
                ? "visible translate-x-0 transition-[translate]"
                : "invisible translate-x-full transition-[translate,visibility]",
            )}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{name}</span>
              <button ref={closeRef} type="button" onClick={close} className={pill}>
                {labels.close}
              </button>
            </div>

            <nav aria-label="Mobile" className="mt-12">
              <ul className="flex flex-col">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={close}
                      className="block border-b border-border py-2.5 text-4xl font-medium tracking-tight"
                    >
                      {link.label}
                      {counts[link.href] !== undefined && (
                        <span className="ml-2 font-serif text-[0.6em] tracking-serif text-muted italic">
                          ({String(counts[link.href]).padStart(2, "0")})
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto grid gap-2.5">
              <a href={whatsapp.href} target="_blank" rel="noopener noreferrer" className={buttonVariants()}>
                {whatsapp.label}
                <span className="sr-only"> {labels.newTab}</span>
              </a>
              <span className="mt-2 text-center font-mono text-label tracking-mono text-muted uppercase">
                {status.location} — <LocalTime timeZone={status.timeZone} /> {status.timeZoneLabel} ·{" "}
                {status.availability}
              </span>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
