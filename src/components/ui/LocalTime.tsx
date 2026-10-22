"use client";

import { useSyncExternalStore } from "react";

const formatters = new Map<string, Intl.DateTimeFormat>();
const format = (timeZone: string) => {
  if (!formatters.has(timeZone)) {
    formatters.set(timeZone, new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit" }));
  }
  return formatters.get(timeZone)!.format(new Date());
};

const subscribe = (onChange: () => void) => {
  const id = window.setInterval(onChange, 15_000);
  return () => window.clearInterval(id);
};

/** Live HH:MM in a time zone. Renders "--:--" on the server and before hydration. */
export function LocalTime({ timeZone }: { timeZone: string }) {
  const time = useSyncExternalStore(
    subscribe,
    () => format(timeZone),
    () => "--:--",
  );
  return <time suppressHydrationWarning>{time}</time>;
}
