"use client";

import { ThemeProvider } from "next-themes";
import { ToastProvider } from "@/components/ui/Toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
      // The portfolio is dark-only; tokens.css has no light palette.
      forcedTheme="dark"
    >
      <ToastProvider>{children}</ToastProvider>
    </ThemeProvider>
  );
}
