import Form from "../ui/form";
import Label from "../ui/Label";
import Link from "../ui/Link";
import Button from "../ui/Button";
import { useForm, yup } from "@/lib/hooks/form/use-form";
import axios from "axios";
import { API_URL } from "@/constants";

export interface LoginFormSchema {
  username: string;
  password: string;
}

const LoginForm = ({
  setLoginState,
}: Readonly<{
  setLoginState: any;
}>) => {
  async function handleLogin(data: any) {
    // compare login info with database values
    var isLoggedId = false;
    const loginData = {username: data.username, password: data.password}
    await axios.post(`${API_URL}/auth/login`, loginData, { withCredentials: true })
    .then(res => {
      console.log(res);
      isLoggedId = res.data?.isLoggedIn;
    })
    .catch(err => {
      console.log(err)
      if(err.response.status == 401){
        isLoggedId = false;
      }
      //TODO: inform user for invalid data maybe
    });
    // on success, close form
    if(isLoggedId){
      setLoginState("LoggedIn");
    }else{
      setLoginState("Login");
    }
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
    handleLogin(data);
  }

  return (
    <Form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col items-center gap-5"
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
