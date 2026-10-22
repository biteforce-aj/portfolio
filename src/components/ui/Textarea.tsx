import { cn } from "@/lib/utils";
import { Field, controlClass, fieldAria, type FieldProps } from "./Field";

type TextareaProps = React.ComponentProps<"textarea"> & FieldProps & { name: string };

export function Textarea({
  label,
  hint,
  error,
  hideLabel,
  id,
  name,
  required,
  rows = 5,
  className,
  ...rest
}: TextareaProps) {
  const inputId = id ?? name;
  return (
    <Field id={inputId} label={label} hint={hint} error={error} hideLabel={hideLabel} required={required}>
      <textarea
        id={inputId}
        name={name}
        rows={rows}
        required={required}
        className={cn(controlClass, "min-h-28 resize-y", className)}
        {...fieldAria(inputId, { hint, error })}
        {...rest}
      />
    </Field>
  );
}
