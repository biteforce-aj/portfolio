"use client";

import { useToast } from "./Toast";

type ToastButtonProps = Omit<React.ComponentProps<"button">, "onClick"> & { message: string };

/** A button whose only job is to explain something in the shared toast. */
export function ToastButton({ message, type = "button", ...rest }: ToastButtonProps) {
  const toast = useToast();
  return <button type={type} onClick={() => toast(message)} {...rest} />;
}
