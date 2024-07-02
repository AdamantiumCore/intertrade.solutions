import Form from "../ui/form/form";
import FormControl from "../ui/form/form-control";
import FormInput from "../ui/form/form-input";
import Button from "../ui/Button";


const ValidateEmailForm = ({ setLoginState }: Readonly<{
    setLoginState: any,
}>) => {
    return (
        <Form className="flex flex-col items-center gap-10">
            <h2 className="w-max text-2xl font-semibold">Validate Email</h2>

            <FormControl>
                <FormInput
                    name="verficationCode"
                    type="text"
                    placeholder="Verification Code"
                />
            </FormControl>

            <Button type="submit" onClick={() => setLoginState("Login")}>Submit</Button>
        </Form>
    );
}

export default ValidateEmailForm;