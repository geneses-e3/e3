export function LoginForm() {
    return (
        <form className={'flex flex-col text-xl gap-2'}>
            <input
                type={"email"}
                placeholder={"email"}
                className={'bg-transparent border text-white outline-none rounded-md p-2'} />
            <button type="submit" className={'bg-white rounded-md p-2'}>Join</button>
        </form>
    )
}