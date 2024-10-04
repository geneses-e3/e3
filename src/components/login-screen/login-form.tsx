export function LoginForm() {
    return (
        <form className={'flex flex-col md:w-[25%] text-xl gap-4'}>
            <input
                type={"email"}
                placeholder="geneses001@myuct.ac.za"
                className={'bg-transparent border text-white outline-none rounded-md p-2'} />
            <button type="submit" className={'bg-white rounded-md p-2'}>Join</button>
        </form>
    )
}