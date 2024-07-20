import type { HTMLProps } from "react";
import { useController } from "react-hook-form";
import type { FieldValues, UseControllerProps } from "react-hook-form";
import classNames from "classnames";

type FormTextAreaProps<TFields extends FieldValues> =
  UseControllerProps<TFields> &
    Omit<HTMLProps<HTMLTextAreaElement>, "name" | "defaultValue">;

function FormTextArea<T extends FieldValues>({
  className,
  ...props
}: FormTextAreaProps<T>) {
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
    <textarea
      {...fieldProps}
      {...inputProps}
      value={value || ""}
      className={classNames(
        fieldState.error
          ? "border-rose-500 outline-none ring-rose-400 placeholder:text-rose-400/75 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
          : "border-zinc-500",
        className,
      )}
    />
  );
}

export default FormTextArea;
