import { cn } from "@/lib/utils";
import { Field, controlClass, fieldAria, type FieldProps } from "./Field";

type InputProps = React.ComponentProps<"input"> & FieldProps & { name: string };

export function Input({ label, hint, error, hideLabel, id, name, required, className, ...rest }: InputProps) {
  const inputId = id ?? name;
  return (
    <Field id={inputId} label={label} hint={hint} error={error} hideLabel={hideLabel} required={required}>
      <input
        id={inputId}
        name={name}
        required={required}
        className={cn(controlClass, className)}
        {...fieldAria(inputId, { hint, error })}
        {...rest}
      />
    </Field>
  );
}
