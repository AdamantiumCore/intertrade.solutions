import Form from "../ui/form/form";
import FormControl from "../ui/form/form-control";
import FormInput from "../ui/form/form-input";
import Link from "../ui/Link";
import Button from "../ui/Button";

const RegistrationForm = ({ setLoginState }: Readonly<{
    setLoginState: any,
}>) => {
    return (
        <Form className="flex flex-col items-center gap-10">
            <h2 className="w-fit text-2xl font-semibold">Sign Up</h2>

            <FormControl>
                <FormInput
                    name="firstname"
                    type="text"
                    placeholder="First Name"
                />
            </FormControl>

            <FormControl>
                <FormInput
                    name="lastname"
                    type="text"
                    placeholder="Last Name"
                />
            </FormControl>

            <FormControl>
                <FormInput
                    name="middlename"
                    type="text"
                    placeholder="Middle Name/Initial"
                />
            </FormControl>

            <FormControl>
                <FormInput
                    name="username"
                    type="text"
                    placeholder="Username"
                />
            </FormControl>

            <FormControl>
                <FormInput
                    name="password"
                    type="password"
                    placeholder="Password"
                />
            </FormControl>

            <FormControl>
                <FormInput
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                />
            </FormControl>

            <FormControl>
                <FormInput
                    name="email"
                    type="email"
                    placeholder="Email Address"
                />
            </FormControl>

            <FormControl>
                <FormInput
                    name="phone"
                    type="text"
                    placeholder="Phone Number"
                />
            </FormControl>
            
            <label htmlFor="avatar_file" className="">Choose an Avatar</label>
            <input id="avatar_file" type="file" placeholder='Avatar' className="w-3/4 p-5 border-solid border-2 border-gray-600 rounded-md" />

            <Button type="submit" onClick={() => setLoginState("Validate")}>Submit</Button>
            <Link href="#" onClick={() => setLoginState("Login")}>Already have an account? Sign In.</Link>
        </Form>
    )
}

export default RegistrationForm;