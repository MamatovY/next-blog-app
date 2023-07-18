'use client'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { FormEventHandler } from 'react'

const SignInForm = () => {
    const router = useRouter()

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const res = await signIn("credentials", {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })
        if (res && !res.error) {
            console.log(res);
            router.push('/profile')
        } else {
            console.log(res);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" />
            <input type="password" name="password" />
            <button type="submit">SignIn</button>
        </form>
    )
}

export { SignInForm }