import { cn } from "@/lib/utils";

/** Shared label / hint / error props for Input, Textarea and Select. */
export type FieldProps = {
  label: string;
  hint?: string;
  error?: string;
  /** Keep the label for screen readers only. */
  hideLabel?: boolean;
};

export const controlClass = cn(
  "w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-base text-foreground",
  "transition-colors placeholder:text-muted hover:border-foreground/50 focus-visible:border-ring",
  "aria-invalid:border-danger disabled:cursor-not-allowed disabled:opacity-60",
);

/** aria attributes linking a control to its hint or error message. */
export function fieldAria(id: string, { hint, error }: Pick<FieldProps, "hint" | "error">) {
  return {
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : hint ? `${id}-hint` : undefined,
  };
}

type FieldWrapperProps = FieldProps & { id: string; required?: boolean; children: React.ReactNode };

export function Field({ id, label, hint, error, hideLabel, required, children }: FieldWrapperProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className={cn("text-sm font-medium", hideLabel && "sr-only")}>
        {label}
        {required && (
          <span aria-hidden="true" className="text-danger">
            {" *"}
          </span>
        )}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-danger">
          {error}
        </p>
      ) : (
        hint && (
          <p id={`${id}-hint`} className="text-sm text-muted">
            {hint}
          </p>
        )
      )}
    </div>
  );
}
