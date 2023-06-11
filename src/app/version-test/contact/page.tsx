export default function Home() {
  return (
    <div className='grid justify-items-center'>
      <div className="grid relative gap-5 content-between max-w-[800px] h-[536px] bg-white my-[60px] mb-[90px] p-[40px] border-solid border-[1px] border-black">
        <div className="absolute right-0 top-[-20px] w-[50px] overflow-hidden inline-block">
          <div className="h-[70px] bg-black -rotate-45 transform origin-bottom-right"></div>
        </div>
        <p className='text-4xl font-black'>Contact Us</p>
        <div>
          <div className="grid grid-flow-col grid-col-1 md:grid-col-2 justify-stretch gap-5">
            <div className='mt-[10px]'>
              <div className='text-sm ml-[10px] h-[24px]'>Your name</div>
              <input className='w-full h-[45px] border-solid border-[1px] border-black px-[10px]' placeholder="Marry"></input>
            </div>
            <div className='mt-[10px]'>
              <div className='text-sm ml-[10px] h-[24px]'>Email</div>
              <input className='w-full h-[45px] border-solid border-[1px] border-black px-[10px]' placeholder="example@gmail.com"></input>
            </div>
          </div>
          <div className="grid">
            <div className='mt-[20px]'>
              <div className='text-sm ml-[10px] h-[24px]'>Subject</div>
              <input className='w-full h-[45px] border-solid border-[1px] border-black px-[10px]'></input>
            </div>
            <div className='mt-[20px]'>
              <div className='text-sm ml-[10px] h-[24px]'>Message</div>
              <input className='w-full h-[80px] border-solid border-[1px] border-black p-[10px]'></input>
            </div>
            <button className='mt-[40px] hover:bg-[#c1befa] hover:text-black inset-0 bg-black h-[45px] border-solid border-[1px] border-black text-white text-sm'>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
