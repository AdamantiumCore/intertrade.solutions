import Form from "../ui/form/form";
import FormControl from "../ui/form/form-control";
import FormInput from "../ui/form/form-input";
import Link from "../ui/Link";
import Button from "../ui/Button";

const LoginForm = ({ setLoginState }: Readonly<{
    setLoginState: any,
}>) => {
    function handleLogin() {
        // compare login info with database values
        // on success, close form

        // if validated in database then:
        setLoginState("LoggedIn")
    }

    return (
        <Form className="flex flex-col items-center gap-10">
            <h2 className="w-max text-2xl font-semibold">Sign In</h2>

            <FormControl>
                <FormInput
                    name="username"
                    type="text"
                    placeholder="Username or Email Address"
                />
            </FormControl>

            <FormControl>
                <FormInput
                    name="password"
                    type="password"
                    placeholder="Password"
                />
            </FormControl>

            <Link href="#" onClick={setLoginState("ForgotPassword")}>Forgot Password?</Link>
            <Button type="submit" onClick={handleLogin}>Login</Button>
            <Link href="#" onClick={setLoginState("Register")}>Need to Sign Up?</Link>
        </Form>
    );
}

export default LoginForm;