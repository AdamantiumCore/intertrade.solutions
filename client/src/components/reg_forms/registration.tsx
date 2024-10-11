import Form from "../ui/form";
import Label from "../ui/Label";
import Link from "../ui/Link";
import Button from "../ui/Button";
import { useForm, yup } from "@/lib/hooks/form/use-form";

export interface RegistrationFormSchema {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  phone?: string;
  avatar?: string;
}

const RegistrationForm = ({
  setLoginState,
  handleRegistration
}: Readonly<{
  setLoginState: any,
  handleRegistration: (data: any) => {},
}>) => {
  const registrationFormDefaultVals = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
    avatar: "",
  };

  const registrationSchema: yup.ObjectSchema<RegistrationFormSchema> = yup
    .object()
    .shape({
      firstname: yup.string().required("First name required"),
      lastname: yup.string().required("Last name required"),
      username: yup.string().required("Username required"),
      password: yup.string().required("Password required"),
      confirmPassword: yup.string().required("Confirm Password required"),
      email: yup.string().required("Email required"),
      phone: yup.string(),
      avatar: yup.string(),
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
    //TODO register check with DB
    handleRegistration(data)
  }

  // TODO: Setup Error fields
  return (
    <Form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col items-center gap-5"
    >
      <h2 className="w-fit text-2xl font-semibold">Sign Up</h2>

      <Form.Control className="flex flex-col">
        <Label htmlFor="firstname">First Name</Label>
        <Form.Input
          name="firstname"
          id="firstname"
          control={control}
          type="text"
          placeholder="First Name"
          aria-describedby="firstname-error"
        />
        <Form.Error message={errors?.firstname?.message} id="firstname-error" />
      </Form.Control>

      <Form.Control className="flex flex-col">
        <Label htmlFor="lastname">Last Name</Label>
        <Form.Input
          name="lastname"
          id="lastname"
          control={control}
          type="text"
          placeholder="Last Name"
          aria-describedby="lastname-error"
        />
        <Form.Error message={errors?.lastname?.message} id="lastname-error" />
      </Form.Control>

      <Form.Control className="flex flex-col">
        <Label htmlFor="username">Username</Label>
        <Form.Input
          name="username"
          id="username"
          control={control}
          type="text"
          placeholder="Username"
          aria-describedby="username-error"
        />
        <Form.Error message={errors?.username?.message} id="username-error" />
      </Form.Control>

      <Form.Control className="flex flex-col">
        <Label htmlFor="password">Password</Label>
        <Form.Input
          name="password"
          id="password"
          control={control}
          type="password"
          placeholder="Password"
          aria-describedby="password-error"
        />
        <Form.Error message={errors?.password?.message} id="password-error" />
      </Form.Control>

      <Form.Control className="flex flex-col">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Form.Input
          name="confirmPassword"
          id="confirmPassword"
          control={control}
          type="password"
          placeholder="Confirm Password"
          aria-describedby="confirmPassword-error"
        />
        <Form.Error message={errors?.confirmPassword?.message} id="confirmPassword-error" />
      </Form.Control>

      <Form.Control className="flex flex-col">
        <Label htmlFor="email">Email Address</Label>
        <Form.Input
          name="email"
          id="email"
          control={control}
          type="email"
          placeholder="Email Address"
          aria-describedby="email-error"
        />
        <Form.Error message={errors?.email?.message} id="email-error" />
      </Form.Control>

      <Form.Control className="flex flex-col">
        <Label htmlFor="phone">Phone Number</Label>
        <Form.Input
          name="phone"
          id="phone"
          control={control}
          type="text"
          placeholder="Phone Number"
        />
        {/* <Form.Error message={errors?.password?.message} id="password-error" /> */}
      </Form.Control>

      {/* <Form.Control className="flex flex-col">
        <Label htmlFor="avatar">Choose an Avatar</Label>
        <Form.Input
          name="avatar"
          id="avatar"
          control={control}
          type="file"
          placeholder="Avatar"
          // className="w-3/4 rounded-md border-2 border-solid border-gray-600 p-5"
        />
      </Form.Control> */}

      <Button type="submit">Submit</Button>
      <Link href="#" onClick={() => setLoginState("Login")}>
        Already have an account? Sign In.
      </Link>
    </Form>
  );
};

export default RegistrationForm;
