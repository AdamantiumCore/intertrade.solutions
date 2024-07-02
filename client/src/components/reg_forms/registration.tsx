import Form from "../ui/form"; // changed from importing from "../ui/form/form";
import Link from "../ui/Link";
import Button from "../ui/Button";
import { useForm, yup } from "@/lib/hooks/form/use-form";

export interface RegistrationFormSchema {
  firstname: string;
  lastname: string;
  middlename?: string;
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  phone?: string;
}

const registrationFormDefaultVals = {
  firstname: "",
  lastname: "",
  middlename: "",
  username: "",
  password: "",
  confirmPassword: "",
  email: "",
  phone: "",
};

const RegistrationForm = ({
  setLoginState,
}: Readonly<{
  setLoginState: any;
}>) => {
  const registrationSchema: yup.ObjectSchema<RegistrationFormSchema> = yup
    .object()
    .shape({
      firstname: yup.string().required("First name required"),
      lastname: yup.string().required("Last name required"),
      middlename: yup.string(),
      username: yup.string().required("Username required"),
      password: yup.string().required("Password required"),
      confirmPassword: yup.string().required("Confirm Password required"),
      email: yup.string().required("Email required"),
      phone: yup.string(),
    });

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    control,
    setValue,
    trigger,
  } = useForm<RegistrationFormSchema>({
    defaultValues: registrationFormDefaultVals,
    schema: registrationSchema,
  });

  const testWatch = watch("firstname");
  console.log("FIRST NAME WATCH : ", testWatch);

  async function handleFormSubmit(data: any) {
    console.log("SUBMIT FORM ", data);
    setLoginState("Validate");
  }

  // TODO: Setup Error fields
  return (
    <Form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col items-center gap-10"
    >
      <h2 className="w-fit text-2xl font-semibold">Sign Up</h2>

      <Form.Control>
        <Form.Input
          name="firstname"
          id="firstname"
          control={control}
          type="text"
          placeholder="First Name"
        />
        {/* <Form.Error message={errors?.password?.message} id="password-error" /> */}
      </Form.Control>

      <Form.Control>
        <Form.Input
          name="lastname"
          id="lastname"
          control={control}
          type="text"
          placeholder="Last Name"
        />
        {/* <Form.Error message={errors?.password?.message} id="password-error" /> */}
      </Form.Control>

      <Form.Control>
        <Form.Input
          name="middlename"
          id="middlename"
          control={control}
          type="text"
          placeholder="Middle Name/Initial"
        />
        {/* <Form.Error message={errors?.password?.message} id="password-error" /> */}
      </Form.Control>

      <Form.Control>
        <Form.Input
          name="username"
          id="username"
          control={control}
          type="text"
          placeholder="Username"
        />
        {/* <Form.Error message={errors?.password?.message} id="password-error" /> */}
      </Form.Control>

      <Form.Control>
        <Form.Input
          name="password"
          id="password"
          control={control}
          type="password"
          placeholder="Password"
        />
        {/* <Form.Error message={errors?.password?.message} id="password-error" /> */}
      </Form.Control>

      <Form.Control>
        <Form.Input
          name="confirmPassword"
          id="confirmPassword"
          control={control}
          type="password"
          placeholder="Confirm Password"
        />
        {/* <Form.Error message={errors?.password?.message} id="password-error" /> */}
      </Form.Control>

      <Form.Control>
        <Form.Input
          name="email"
          id="email"
          control={control}
          type="email"
          placeholder="Email Address"
        />
        {/* <Form.Error message={errors?.password?.message} id="password-error" /> */}
      </Form.Control>

      <Form.Control>
        <Form.Input
          name="phone"
          id="phone"
          control={control}
          type="text"
          placeholder="Phone Number"
        />
        {/* <Form.Error message={errors?.password?.message} id="password-error" /> */}
      </Form.Control>

      <label htmlFor="avatar_file" className="">
        Choose an Avatar
      </label>
      <input
        id="avatar_file"
        type="file"
        placeholder="Avatar"
        className="w-3/4 rounded-md border-2 border-solid border-gray-600 p-5"
      />

      {/* <Button type="submit" onClick={() => setLoginState("Validate")}>
        Submit
      </Button> */}
      <Button type="submit">Submit</Button>
      <Link href="#" onClick={() => setLoginState("Login")}>
        Already have an account? Sign In.
      </Link>
    </Form>
  );
};

export default RegistrationForm;
