import { GoogleButton } from "@/components/GoogleButton";
import { SignInForm } from "@/components/SigninForm";

export default async function Signin() {
    return (
        <div className="stack">
            <h1>
                Signin!
            </h1>
            <GoogleButton />
            <div>or</div>
            <SignInForm />
        </div>
    )
}