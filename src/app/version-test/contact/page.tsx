export default function Home() {
  return (
    <div className='grid justify-items-center'>
      <div className="grid gap-5 content-between w-[800px] bg-white my-[60px] p-[40px] border-solid border-[1px] border-black">
        <p className='text-4xl font-black'>Contact Us</p>
        <div>
          <div className="flex gap-5">
            <div>
              <div>Name</div>
              <input className='w-full h-[45px] mt-[10px] border-solid border-[1px] border-black px-[10px]' placeholder="Marry"></input>
            </div>
            <div>
              <div>Email</div>
              <input className='w-full h-[45px] mt-[10px] border-solid border-[1px] border-black px-[10px]' placeholder="example@gmail.com"></input>
            </div>
          </div>
          <div className="grid">
            <div>
              <div>Subject</div>
              <input className='w-full h-[45px] mt-[20px] border-solid border-[1px] border-black px-[10px]'></input>
            </div>
            <div>
              <div>Message</div>
              <input className='w-full h-[80px] mt-[20px] border-solid border-[1px] border-black p-[10px]'></input>
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
