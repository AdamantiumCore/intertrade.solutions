import Form from "../ui/form";
import Label from "../ui/Label";
import Button from "../ui/Button";
import { useForm, yup } from "@/lib/hooks/form/use-form";
import axios from "axios";
import { API_URL } from "@/constants";
import {Cookies} from "react-cookie"
export interface ValidateEmailFormSchema {
  validationCode: string;
}

const ValidateEmailForm = ({
  setLoginState,
}: Readonly<{
  setLoginState: any;
}>) => {
  async function handleValidateEmail(validationCode: string) {
    var isValidated = false;
    console.log(validationCode)
    const cookies = new Cookies();
    const userId = cookies.get("ValidationToken")
    const data = { validation_code: validationCode, userId }
    await axios.post(`${API_URL}/auth/validateUserCode`, data, {withCredentials: true})
    .then(res => {
      if(res.status == 200){
        isValidated = true;
        cookies.remove("ValidationToken");
      }
    }).catch(err => {
      isValidated = false;
    })
    if(isValidated){
      //User needs to log in first to get access to the website but it is validated
      setLoginState("Login");  

    }else{
      setLoginState("Validate")
    }
    
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
    handleValidateEmail(data.validationCode);
  }

  return (
    <Form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col items-center gap-10"
    >
      <h2 className="w-max text-2xl font-semibold">Validate Email</h2>

      <Form.Control className="flex flex-col">
      <Label htmlFor="validationCode">Validation Code</Label>
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
