import Link from "next/link";
import Image from "next/image";

export default function BottomBar() {
  return (
    <div className='flex justify-center w-full h-[228px] bottom-0 p-[40px] bg-egg-shell-dark'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[20px] w-[1200px]'>
        <div>  
          <Link href='/version-test' className='flex gap-2 flex-center'>
            <Image
              src='/assets/images/logo.png'
              alt='logo'
              width={50}
              height={50}
              className='object-contain'
              />
          </Link>
          <Link href='/version-test/decarbonize_2'>
            <div>+33 6 44 24 13 23</div>
          </Link>
          <Link href='/version-test/signup'>
            <div>mia@dtmastercarbon.fr</div>
          </Link>
          <div className='flex flex-row gap-2'>
            <div className='w-[25px] h-[25px] rounded-full bg-black'>
                
            </div>
            <div className='w-[25px] h-[25px] rounded-full bg-black'>
                
            </div>
            <div className='w-[25px] h-[25px] rounded-full bg-black'>
                
            </div>
            <div className='w-[25px] h-[25px] rounded-full bg-black'>
                
            </div>
            <div className='w-[25px] h-[25px] rounded-full bg-black'>
                
            </div>
          </div>
        </div>
        <div className='flex gap-4'>
          <div>
            <Link href='/version-test/signup'>
              <div className='mt-[10px]'>Categories</div>
            </Link>
            <Link href='/version-test/signup'>
              <div className='mt-[10px]'>Substainability tools</div>
            </Link>
            <div className='mt-[10px]'>Case Studies</div>
            <div className='mt-[10px]'>Certificates</div>
          </div>
          <div>
            <Link href='/version-test/signup'>
              <div className='mt-[10px]'>About us</div>
            </Link>
            <Link href='/version-test/signup'>
              <div className='mt-[10px]'>Join us</div>
            </Link>
            <div className='mt-[10px]'>Consultants</div>
            <div className='mt-[10px]'>Blog</div>
          </div>
          <div>
            <Link href='/version-test/signup'>
              <div className='mt-[10px]'>Privacy Policy</div>
            </Link>
            <Link href='/version-test/signup'>
              <div className='mt-[10px]'>Term & Conditions</div>
            </Link>
            <div className='mt-[10px]'>Career</div>
            <div className='mt-[10px]'>Community</div>         
          </div>
        </div>
        <div className='grid'>
          <h4 className='text-lg font-bold'>Subscribe to our Newsletter</h4>
          <input className='w-[280px] h-[45px] mt-[10px] border-solid border-[1px] border-black px-[10px]' placeholder="Type here..."></input>
          <button className='text-sm w-[150px] h-[40px] mt-[10px] border-solid border-[1px] border-black bg-black text-white'>Subscribe</button>
        </div>
      </div>
    </div>
  );
};