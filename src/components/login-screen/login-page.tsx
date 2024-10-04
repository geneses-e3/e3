// import {LoginForm} from "@/components/login-screen/login-form";
import {RegisterForm} from "@/components/login-screen/register-form";

export function LoginPage(){
    return (
        <main className="flex flex-col transition-all duration-300 justify-center items-center w-full h-screen p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <p className={'text-white text-6xl'}>e3</p>
            <h1 className={'text-white text-xl'}>Enter your school email to Join</h1>
            <RegisterForm/>
        </main>
    )
}