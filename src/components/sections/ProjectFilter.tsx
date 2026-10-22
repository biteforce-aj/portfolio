"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export type FilterItem = { key: string; tags: string[]; node: React.ReactNode };

type ProjectFilterProps = {
  items: FilterItem[];
  filters: string[];
  labels: { group: string; all: string; results: string };
  className?: string;
};

/** Pill filters over a grid of server-rendered cards. Cards stay in the DOM; non-matches are hidden. */
export function ProjectFilter({ items, filters, labels, className }: ProjectFilterProps) {
  const [active, setActive] = useState<string | null>(null);
  const visible = items.filter((item) => active === null || item.tags.includes(active));
  const options = [
    { value: null, label: labels.all, count: items.length },
    ...filters.map((filter) => ({
      value: filter,
      label: filter,
      count: items.filter((item) => item.tags.includes(filter)).length,
    })),
  ];

  return (
    <div className={className}>
      <div
        role="group"
        aria-label={labels.group}
        className="mb-10 flex w-fit max-w-full flex-wrap gap-1 rounded-panel border border-border bg-surface p-[5px] tablet:rounded-full"
      >
        {options.map((option) => {
          const pressed = option.value === active;
          return (
            <button
              key={option.label}
              type="button"
              aria-pressed={pressed}
              onClick={() => setActive(option.value)}
              className={cn(
                "flex items-baseline gap-1.5 rounded-full px-4 py-2 text-sm transition-colors",
                pressed ? "bg-raised text-foreground" : "text-muted hover:text-foreground",
              )}
            >
              {option.label}
              <span className="font-mono text-micro tracking-mono">({option.count})</span>
            </button>
          );
        })}
      </div>

      <p role="status" className="sr-only">
        {labels.results.replace("{count}", String(visible.length)).replace("{total}", String(items.length))}
      </p>

      <ul className="grid gap-6 tablet:grid-cols-2 tablet:gap-8">
        {items.map((item) => (
          <li key={item.key} hidden={!visible.includes(item)} className="flex [&>*]:flex-1">
            {item.node}
          </li>
        ))}
      </ul>
    </div>
  );
}
