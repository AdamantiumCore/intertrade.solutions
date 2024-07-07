import type { HTMLProps } from "react";
import { useController } from "react-hook-form";
import type { FieldValues, UseControllerProps } from "react-hook-form";
import classNames from "classnames";

type FormInputProps<TFields extends FieldValues> = UseControllerProps<TFields> &
  Omit<HTMLProps<HTMLInputElement>, "name" | "defaultValue"> & {
    mask?: (input: string) => string;
  };

function FormInput<T extends FieldValues>({
  mask,
  className,
  type = "text",
  ...props
}: FormInputProps<T>) {
  const {
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
    ...inputProps
  } = props;
  const controllerProps = {
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
  };

  const {
    field: { value, ...fieldProps },
    fieldState,
  } = useController(controllerProps);

  const formattedValue = mask
    ? mask(value as string)
    : (value as string | number | readonly string[]);
  return (
    <input
      {...fieldProps}
      {...inputProps}
      type={type}
      value={formattedValue || ""}
      className={classNames(
        fieldState.error
          ? "border-rose-500 outline-none ring-rose-400 placeholder:text-rose-400/75 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
          : "border-zinc-100 rounded outline-1 outline-slate-500 ring-1 ring-slate-500 p-1",
        className,
      )}
    />
  );
}

export default FormInput;
