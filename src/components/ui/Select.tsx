import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Field, controlClass, fieldAria, type FieldProps } from "./Field";

type SelectProps = React.ComponentProps<"select"> &
  FieldProps & {
    name: string;
    options: { value: string; label: string }[];
    /** Empty first option, e.g. "Choose a service". */
    placeholder?: string;
  };

export function Select({
  label,
  hint,
  error,
  hideLabel,
  id,
  name,
  required,
  options,
  placeholder,
  className,
  ...rest
}: SelectProps) {
  const inputId = id ?? name;
  return (
    <Field id={inputId} label={label} hint={hint} error={error} hideLabel={hideLabel} required={required}>
      <div className="relative">
        <select
          id={inputId}
          name={name}
          required={required}
          defaultValue={placeholder && rest.value === undefined ? "" : undefined}
          className={cn(controlClass, "cursor-pointer appearance-none pr-10", className)}
          {...fieldAria(inputId, { hint, error })}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-muted"
        />
      </div>
    </Field>
  );
}
