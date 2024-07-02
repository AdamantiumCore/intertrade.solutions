import Form from "../ui/form"; // changed from importing from "../ui/form/form";
import FormControl from "../ui/form/form-control";
import FormInput from "../ui/form/form-input";
import Link from "../ui/Link";
import Button from "../ui/Button";
import { useForm } from "@/lib/hooks/form/use-form";

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

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    control,
    setValue,
    trigger,
  } = useForm<any>({ defaultValues: { verificationCode: "" } });

  const testWatch = watch("username");

  console.log("WATCHING USERNAME: ", testWatch);

  return (
    <Form className="flex flex-col items-center gap-10">
      <h2 className="w-max text-2xl font-semibold">Sign In</h2>

      <FormControl>
        <FormInput
          name="username"
          id="username"
          type="text"
          placeholder="Username or Email Address"
          control={control}
        />
      </FormControl>

      <FormControl>
        <FormInput
          name="password"
          id="password"
          type="password"
          placeholder="Password"
          control={control}
        />
      </FormControl>

      <Link href="#" onClick={setLoginState("ForgotPassword")}>
        Forgot Password?
      </Link>
      <Button type="submit" onClick={handleLogin}>
        Login
      </Button>
      <Link href="#" onClick={setLoginState("Register")}>
        Need to Sign Up?
      </Link>
    </Form>
  );
};

export default LoginForm;
