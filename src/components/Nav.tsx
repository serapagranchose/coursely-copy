import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className='grid justify-items-center'>
      <div className='w-[1200px] flex justify-between p-[20px] pt-[30px] border-solid border-b-[2px] border-egg-shell-dark'>
        <Link href='/version-test' className='flex gap-2 flex-center'>
          <Image
            src='/assets/images/logo.png'
            alt='logo'
            width={50}
            height={50}
            className='object-contain'
          />
        </Link>
        <div className='relative'>
          <div className='w-[150px] h-[40px] border-solid border-[1px] border-black -translate-x-1 translate-y-1'>

          </div>
          <div className='group'>
          <button className='absolute group-hover:bg-[#c1befa] group-hover:text-black inset-0 bg-black w-[150px] h-[40px] border-solid border-[1px] border-black text-white text-sm'>
            Sign up
          </button>
          </div>
        </div>
      </div>
      <div className='w-[1200px] flex justify-start gap-5 p-[20px]'>
        <button className='pr-[20px] border-solid border-r-[2px] border-[#eeece5]'>
          <div>Substainability tools</div>
        </button>
        <Link href='/version-test/decarbonize_2'>
          <div className='text-[#707070]'>Decarbonize my company</div>
        </Link>
        <Link href='/version-test/signup'>
          <div className='text-[#707070]'>Propose new sustainability tools</div>
        </Link>
        <Link href='/version-test/contact'>
          <div className='text-[#707070]'>Contact us</div>
        </Link>
      </div>
    </nav>
  );
};