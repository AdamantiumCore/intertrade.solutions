import Form from "../ui/form"; // changed from importing from "../ui/form/form";
import Button from "../ui/Button";
import { useForm, yup } from "@/lib/hooks/form/use-form";

export interface ValidateEmailFormSchema {
  verificationCode: string;
}

const ValidateEmailForm = ({
  setLoginState,
}: Readonly<{
  setLoginState: any;
}>) => {
  const validateEmailSchema: yup.ObjectSchema<ValidateEmailFormSchema> = yup
    .object()
    .shape({
      verificationCode: yup
        .string()
        .required("Code Required")
        //   .min(5, "Code must be at least X length"), // could add something like this but actually not great for security; leaving for example option
        .matches(/^[0-9]+$/g, "Invalid Code"),
    });

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    control,
    setValue,
    trigger,
  } = useForm<ValidateEmailFormSchema>({
    defaultValues: { verificationCode: "" },
    schema: validateEmailSchema,
  });

  const testWatch = watch("verificationCode"); // example of watch which updates on field change
  console.log("WATCHING: ", testWatch);

  return (
    <Form className="flex flex-col items-center gap-10">
      <h2 className="w-max text-2xl font-semibold">Validate Email</h2>

      <Form.Control>
        <Form.Input
          name="verificationCode"
          id="verificationCode"
          type="text"
          placeholder="Verification Code"
          control={control}
        />
      </Form.Control>

      <Button type="submit" onClick={() => setLoginState("Login")}>
        Submit
      </Button>
    </Form>
  );
};

export default ValidateEmailForm;
