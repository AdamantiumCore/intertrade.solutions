import {
  DeepPartial,
  FieldValues,
  useForm as useReactHookForm,
  UseFormProps,
  DefaultValues,
} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export { yup };

export function useForm<TFieldValues extends FieldValues>({
  defaultValues,
//   schema,
  config,
  mode = "onBlur",
}: {
    // defaultValues: any;
  defaultValues: DeepPartial<TFieldValues> | any;
//   schema: yup.Schema<TFieldValues>;
  config?: Omit<
    UseFormProps<TFieldValues, {}>,
    "schema | defaultValues | resolver"
  >;
  mode?: "onBlur" | "onChange" | "all";
}) {
  const configMerge = {
    mode,
    reValidateMode: "onChange" as const,
    defaultValues: defaultValues as any,
    // defaultValues: defaultValues as Partial<DeepPartial<TFieldValues>>,
    // defaultValues: defaultValues as DefaultValues<TFieldValues>,
    // resolver: yupResolver(schema),
    ...config,
  };

  return useReactHookForm<TFieldValues>(configMerge);
}