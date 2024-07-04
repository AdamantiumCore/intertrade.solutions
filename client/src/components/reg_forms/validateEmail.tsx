import Form from "../ui/form"; // changed from importing from "../ui/form/form";
import Button from "../ui/Button";
import { useForm, yup } from "@/lib/hooks/form/use-form";

export interface ValidateEmailFormSchema {
  validationCode: string;
}

const ValidateEmailForm = ({
  setLoginState,
}: Readonly<{
  setLoginState: any;
}>) => {
  function handleValidateEmail() {
    setLoginState("Login");
  }

  const validateEmailFormDefaultVals = {
    validationCode: "",
  };

  const validateEmailSchema: yup.ObjectSchema<ValidateEmailFormSchema> = yup
    .object()
    .shape({
      validationCode: yup
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
    defaultValues: { validationCode: "" },
    schema: validateEmailSchema,
  });

  const testWatch = watch("validationCode"); // example of watch which updates on field change
  console.log("WATCHING: ", testWatch);

  async function handleFormSubmit(data: any) {
    console.log("SUBMIT VALIDATE EMAIL FORM ", data);
    handleValidateEmail();
  }

  return (
    <Form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col items-center gap-10"
    >
      <h2 className="w-max text-2xl font-semibold">Validate Email</h2>

      <Form.Control>
        <Form.Input
          name="validationCode"
          id="validationCode"
          type="text"
          placeholder="Validation Code"
          control={control}
          aria-describedby="validationcode-error"
        />
        <Form.Error message={errors?.validationCode?.message} id="validationcode-error" />
      </Form.Control>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default ValidateEmailForm;
