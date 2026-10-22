import { cn } from "@/lib/utils";

export type Theme = "light" | "dark";

type ThemePairProps = {
  id: string;
  title: string;
  description?: string;
  /** Stack the panels at every width (for full-width layout demos). */
  stacked?: boolean;
  /** Called once per panel; use `theme` to keep form ids unique. */
  children: (theme: Theme) => React.ReactNode;
};

/** Renders the same demo in a light and a dark panel, side by side from lg up. */
export function ThemePair({ id, title, description, stacked, children }: ThemePairProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="flex scroll-mt-6 flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 id={`${id}-title`} className="text-2xl font-bold">
          {title}
        </h2>
        {description && <p className="text-muted">{description}</p>}
      </div>
      <div className={cn("grid gap-4", !stacked && "lg:grid-cols-2")}>
        {(["light", "dark"] as const).map((theme) => (
          <div
            key={theme}
            data-theme={theme}
            className="@container min-w-0 rounded-xl border border-border bg-background p-5 text-foreground sm:p-6"
          >
            <p className="mb-5 text-xs font-medium tracking-wide text-muted uppercase">{theme}</p>
            {children(theme)}
          </div>
        ))}
      </div>
    </section>
  );
}

/** A labelled row of examples inside a panel. */
export function Demo({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="font-mono text-xs text-muted">{label}</p>
      <div className={cn("flex flex-wrap items-center gap-3", className)}>{children}</div>
    </div>
  );
}
