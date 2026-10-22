"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Link as NavLink } from "@/config/site.config";
import { cn } from "@/lib/utils";

/** Sticky header; gains the blurred glass background after 40px of scroll. */
export function HeaderShell({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-[env(safe-area-inset-top,0px)] z-50 border-b transition-[background-color,border-color] duration-300",
        scrolled ? "border-border bg-glass backdrop-blur-[14px]" : "border-transparent",
      )}
    >
      {children}
    </header>
  );
}

/** Desktop pill navigation; the current section's link is highlighted. */
export function NavLinks({ links }: { links: NavLink[] }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="hidden tablet:block">
      <ul className="flex gap-1 rounded-full border border-border bg-surface p-[5px]">
        {links.map((link) => {
          const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "block rounded-full px-4 py-2 text-sm transition-colors",
                  active ? "bg-raised text-foreground" : "text-muted hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
