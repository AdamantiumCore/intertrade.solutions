import Form from "../ui/form/form";
import FormControl from "../ui/form/form-control";
import FormInput from "../ui/form/form-input";
import Link from "../ui/Link";
import Button from "../ui/Button";

const ResetPasswordForm = ({ setLoginState }: Readonly<{
    setLoginState: any,
}>) => {
    return (
        <Form className="flex flex-col items-center gap-10">
            <FormControl>
                <FormInput
                    name="tempPassword"
                    type="text"
                    placeholder="Temp Password"
                />

                <FormInput
                    name="newPassword"
                    type="password"
                    placeholder="New Password"
                />

                <FormInput
                    name="newPasswordConfirm"
                    type="password"
                    placeholder="Confirm Password"
                />

                <Button type="submit" onClick={() => setLoginState("Login")}>Submit</Button>
                <Link href="#" onClick={() => setLoginState("Login")}>Cancel</Link>
            </FormControl>
        </Form>
    );
}

export default ResetPasswordForm;