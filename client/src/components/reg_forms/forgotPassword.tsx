import Form from "../ui/form/form";
import FormControl from "../ui/form/form-control";
import FormInput from "../ui/form/form-input";
import Link from "../ui/Link";
import Button from "../ui/Button";

const ForgotPasswordForm = ({ setLoginState }: Readonly<{
    setLoginState: any,
}>) => {
    return (
        <Form className="flex flex-col items-center gap-10">
            <h2 className="w-max text-2xl font-semibold">Password Reset</h2>

            <FormControl>
                <FormInput
                    name="email"
                    type="email"
                    placeholder="Email Address"
                />

                <Button type="submit" onClick={() => setLoginState("Validate")}>Request Reset</Button>
                <Link href="#" onClick={() => setLoginState("Login")}>Cancel</Link>
            </FormControl>
        </Form>
    );
}

export default ForgotPasswordForm;