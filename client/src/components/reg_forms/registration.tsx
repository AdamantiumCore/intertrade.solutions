import Form from "../ui/form"; // changed from importing from "../ui/form/form";
import FormControl from "../ui/form/form-control";
import FormInput from "../ui/form/form-input";
import Link from "../ui/Link";
import Button from "../ui/Button";
import { useForm } from "@/lib/hooks/form/use-form";

export interface RegistrationFormSchema {
  firstname: string;
  lastname: string;
  middlename: string;
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  phone: string;
}

const RegistrationForm = ({
  setLoginState,
}: Readonly<{
  setLoginState: any;
}>) => {
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
  });

  const testWatch = watch("firstname");
  console.log("FIRST NAME WATCH : ", testWatch);

  return (
    <Form className="flex flex-col items-center gap-10">
      <h2 className="w-fit text-2xl font-semibold">Sign Up</h2>

      <FormControl>
        <FormInput
          name="firstname"
          id="firstname"
          control={control}
          type="text"
          placeholder="First Name"
        />
      </FormControl>

      <FormControl>
        <FormInput
          name="lastname"
          id="lastname"
          control={control}
          type="text"
          placeholder="Last Name"
        />
      </FormControl>

      <FormControl>
        <FormInput
          name="middlename"
          id="middlename"
          control={control}
          type="text"
          placeholder="Middle Name/Initial"
        />
      </FormControl>

      <FormControl>
        <FormInput
          name="username"
          id="username"
          control={control}
          type="text"
          placeholder="Username"
        />
      </FormControl>

      <FormControl>
        <FormInput
          name="password"
          id="password"
          control={control}
          type="password"
          placeholder="Password"
        />
      </FormControl>

      <FormControl>
        <FormInput
          name="confirmPassword"
          id="confirmPassword"
          control={control}
          type="password"
          placeholder="Confirm Password"
        />
      </FormControl>

      <FormControl>
        <FormInput
          name="email"
          id="email"
          control={control}
          type="email"
          placeholder="Email Address"
        />
      </FormControl>

      <FormControl>
        <FormInput
          name="phone"
          id="phone"
          control={control}
          type="text"
          placeholder="Phone Number"
        />
      </FormControl>

      <label htmlFor="avatar_file" className="">
        Choose an Avatar
      </label>
      <input
        id="avatar_file"
        type="file"
        placeholder="Avatar"
        className="w-3/4 rounded-md border-2 border-solid border-gray-600 p-5"
      />

      <Button type="submit" onClick={() => setLoginState("Validate")}>
        Submit
      </Button>
      <Link href="#" onClick={() => setLoginState("Login")}>
        Already have an account? Sign In.
      </Link>
    </Form>
  );
};

export default RegistrationForm;
