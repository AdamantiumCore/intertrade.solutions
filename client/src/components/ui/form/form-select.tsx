import type { HTMLProps, ReactNode } from "react";
import { useController } from "react-hook-form";
import type { FieldValues, UseControllerProps } from "react-hook-form";
import classNames from "classnames";

type FormSelectProps<TFields extends FieldValues> =
  UseControllerProps<TFields> &
    Omit<HTMLProps<HTMLSelectElement>, "name" | "defaultValue"> & {
      children?: ReactNode;
    };

function FormSelect<T extends FieldValues>({
  className,
  children,
  ...props
}: FormSelectProps<T>) {
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

  return (
    <select
      {...fieldProps}
      {...inputProps}
      value={value as string | number | readonly string[]}
      className={classNames(
        fieldState.error
          ? "border-rose-500 outline-none ring-rose-400 placeholder:text-rose-400/75 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
          : "border-zinc-500",
        className,
      )}
    >
      {children}
    </select>
  );
}

export default FormSelect;
