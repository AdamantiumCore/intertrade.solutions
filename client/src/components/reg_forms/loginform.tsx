import Form from "../ui/form";
import Label from "../ui/Label";
import Link from "../ui/Link";
import Button from "../ui/Button";
import { useForm, yup } from "@/lib/hooks/form/use-form";

export interface LoginFormSchema {
  username: string;
  password: string;
}

const LoginForm = ({
  setLoginState,
}: Readonly<{
  setLoginState: any;
}>) => {
  function handleLogin() {
    // compare login info with database values
    // on success, close form

    // if validated in database then:
    setLoginState("LoggedIn");
  }

  const loginFormDefaultVals = {
    firstname: "",
    lastname: "",
    middlename: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
  };

  const loginSchema: yup.ObjectSchema<LoginFormSchema> = yup.object().shape({
    username: yup.string().required("Username required"),
    password: yup.string().required("Password required"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    control,
    setValue,
    trigger,
  } = useForm<LoginFormSchema>({
    defaultValues: loginFormDefaultVals,
    schema: loginSchema,
  });

  const testWatch = watch("username");

  console.log("WATCHING USERNAME: ", testWatch);

  async function handleFormSubmit(data: any) {
    console.log("SUBMIT LOGIN FORM ", data);
    handleLogin();
  }

  return (
    <Form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col items-center gap-10"
    >
      <h2 className="w-max text-2xl font-semibold">Sign In</h2>

      <Form.Control className="flex flex-col">
        <Label htmlFor="username">Username</Label>
        <Form.Input
          name="username"
          id="username"
          type="text"
          placeholder="Username or Email Address"
          control={control}
          aria-describedby="username-error"
        />
        <Form.Error message={errors?.username?.message} id="username-error" />
      </Form.Control>

      <Form.Control className="flex flex-col">
      <Label htmlFor="username">Password</Label>
      <Form.Input
          name="password"
          id="password"
          type="password"
          placeholder="Password"
          control={control}
          aria-describedby="password-error"
        />
        <Form.Error message={errors?.password?.message} id="password-error" />
      </Form.Control>

      <Link href="#" onClick={() => setLoginState("ForgotPassword")}>
        Forgot Password?
      </Link>
      <Button type="submit">Login</Button>
      <Link href="#" onClick={() => setLoginState("Register")}>
        Need to Sign Up?
      </Link>
    </Form>
  );
};

export default LoginForm;
