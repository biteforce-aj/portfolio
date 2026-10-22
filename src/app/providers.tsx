"use client";

import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  // The styleguide shows light and dark panels side by side, so the page itself stays light.
  const forcedTheme = usePathname() === "/styleguide" ? "light" : undefined;

  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      forcedTheme={forcedTheme}
    >
      {children}
    </ThemeProvider>
  );
}
