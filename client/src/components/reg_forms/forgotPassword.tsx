import Form from "../ui/form";
import FormInput from "../ui/form/form-input";
import Label from "../ui/Label";
import Link from "../ui/Link";
import Button from "../ui/Button";
import { useForm, yup } from "@/lib/hooks/form/use-form";

export interface ForgotPasswordFormSchema {
    email: string;
}

const ForgotPasswordForm = ({ setLoginState }: Readonly<{
    setLoginState: any,
}>) => {
    function handleForgotPasswordsubmit() {
        setLoginState("Validate");
    }
    
    const forgotPasswordFormDefaultVals = {
        email: "",
    };

    const forgotPasswordSchema: yup.ObjectSchema<ForgotPasswordFormSchema> = yup.object().shape({
        email: yup.string().required("Email required"),
    });

    const {
        handleSubmit,
        register,
        formState: { errors },
        watch,
        control,
        setValue,
        trigger,
    } = useForm<ForgotPasswordFormSchema>({
        defaultValues: forgotPasswordFormDefaultVals,
        schema: forgotPasswordSchema,
    });

    const testWatch = watch("email");

    async function handleFormSubmit(data: any) {
        console.log("SUBMIT FORGOT PASSWORD FORM ", data);
        handleForgotPasswordsubmit();
    }

    return (
        <Form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="flex flex-col items-center gap-10"
        >
            <h2 className="w-max text-2xl font-semibold">Password Reset</h2>

            <Form.Control className="flex flex-col">
                <Label htmlFor="email">Email Address</Label>
                <FormInput
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    control={control}
                    aria-describedby="email-error"
                />
                <Form.Error message={errors?.email?.message} id="email-error" />
            </Form.Control>

            <Button type="submit">Submit</Button>
            <Link href="#" onClick={() => setLoginState("Login")}>Cancel</Link>
        </Form>
    );
}

export default ForgotPasswordForm;