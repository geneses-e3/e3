import {ArrowRight} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p className={'text-4xl max-sm:text-3xl text-white'}>Geneses, Inc</p>

      <section className="flex flex-col items-center md:w-[20%]">
          <Link
              href={'/login'}
              className={'flex self-stretch justify-center hover:border-8 transition-all duration-500 hover:animate-out text-white hover:py-5 px-10 py-1 rounded-md items-center'} >
              <ArrowRight className={'font-light'} size={25} />
              <ArrowRight className={'font-light'} size={25} />
              <ArrowRight className={'font-light'} size={25} />
          </Link>
      </section>
    </div>
  );
}
