import Form from "../ui/form";
import Link from "../ui/Link";
import Button from "../ui/Button";
import { useForm, yup } from "@/lib/hooks/form/use-form";
import { TestContext } from "node:test";

export interface ResetPasswordFormSchema {
    tempPassword: string;
    newPassword: string;
    newPasswordConfirm: string;
}

const ResetPasswordForm = ({ setLoginState }: Readonly<{
    setLoginState: any,
}>) => {
    function handleResetPasswordSubmit() {
        setLoginState("Login")
    }

    const resetPasswordFormDefaultVals = {
        tempPassword: "",
        newPassword: "",
        newPasswordConfirm: "",
    };

    const resetPasswordSchema: yup.ObjectSchema<ResetPasswordFormSchema> = yup.object().shape({
        tempPassword: yup.string().required("Temp Password required"),
        newPassword: yup.string().required("New Password required"),
        newPasswordConfirm: yup.string().required("Confirm New Password required"),
    });

    const {
        handleSubmit,
        register,
        formState: { errors },
        watch,
        control,
        setValue,
        trigger,
    } = useForm<ResetPasswordFormSchema>({
        defaultValues: resetPasswordFormDefaultVals,
        schema: resetPasswordSchema,
    });

    const testWatch = watch("tempPassword");

    console.log("WATCHING TEMP PASSWORD: ", testWatch);

    async function handleFormSubmit(data: any) {
        console.log("SUBMIT RESET PASSWORD FORM ", data);
        handleResetPasswordSubmit();
    }

    return (
        <Form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="flex flex-col items-center gap-10"
        >
            <Form.Control>
                <Form.Input
                    name="tempPassword"
                    id="tempPassword"
                    type="text"
                    placeholder="Temp Password"
                    control={control}
                    aria-describedby="temppassword-error"
                    />
                <Form.Error message={errors?.tempPassword?.message} id="temppassword-error" />
            </Form.Control>

            <Form.Control>
                <Form.Input
                    name="newPassword"
                    id="newPassword"
                    type="password"
                    placeholder="New Password"
                    control={control}
                    aria-describedby="newpassword-error"
                />
                <Form.Error message={errors?.newPassword?.message} id="newpassword-error" />
            </Form.Control>

            <Form.Control>
                <Form.Input
                    name="newPasswordConfirm"
                    id="newPasswordConfirm"
                    type="password"
                    placeholder="Confirm Password"
                    control={control}
                    aria-describedby="newpasswordconfirm-error"
                />
                <Form.Error message={errors?.newPasswordConfirm?.message} id="newpasswordconfirm-error" />
            </Form.Control>

            <Button type="submit">Submit</Button>
            <Link href="#" onClick={() => setLoginState("Login")}>Cancel</Link>
        </Form>
    );
}

export default ResetPasswordForm;