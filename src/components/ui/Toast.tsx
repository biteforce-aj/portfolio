"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const ToastContext = createContext<(message: string) => void>(() => {});

/** Show a short message in the shared toast. */
export const useToast = () => useContext(ToastContext);

/** One polite live region at the bottom of the screen; mounted once in app/providers. */
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const timer = useRef<number>(undefined);

  const show = useCallback((text: string) => {
    setMessage(text);
    setVisible(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setVisible(false), 2600);
  }, []);

  return (
    <ToastContext.Provider value={show}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className={cn(
          "pointer-events-none fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom,0px))] left-1/2 z-95 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-full bg-foreground px-4.5 py-3 text-center text-sm font-medium text-background transition-[opacity,translate] duration-300",
          visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
        )}
      >
        {message}
      </div>
    </ToastContext.Provider>
  );
}
