export function RegisterForm(){
    return (
        <form className={'flex flex-col items-center md:w-[20%] text-xl gap-4'}>
            <div className="flex justify-stretch w-full max-md:flex-col gap-3">
                <input
                    name="firstname"
                    id="firstname"
                    type={"text"}
                    placeholder="name"
                    className="flex bg-transparent border text-white outline-none rounded-md p-2"
                />

                <input
                name="lastname"
                id="lastname"
                type={"text"}
                placeholder="last name"
                className={'flex  bg-transparent border text-white outline-none rounded-md p-2'}
                />
            </div>
            <button type="submit" className={'bg-white self-stretch rounded-md p-2'}>Join</button>
        </form>
    );
}