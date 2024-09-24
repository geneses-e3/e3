import {ArrowRight} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p className={'text-4xl max-sm:text-3xl text-gray-400'}>Geneses, Inc</p>

      <Link href={'/login'} className={'flex text-xl hover:text-black hover:bg-gray-400 text-gray-400 px-4 py-1 rounded-md items-center'} >
        <ArrowRight className={'font-light'} size={25} />
        <ArrowRight className={'font-light'} size={25} />
        <ArrowRight className={'font-light'} size={25} />
      </Link>
    </div>
  );
}
