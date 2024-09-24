import {LoginForm} from "@/components/login-screen/login-form";

export function LoginPage(){
    return (
        <main className="flex flex-col justify-center items-center w-full h-screen p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <p className={'text-white text-6xl'}>e3</p>
            <h1 className={'text-white text-xl'}>Enter your school email to Join</h1>
            <LoginForm/>
        </main>
    )
}