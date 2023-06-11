type ButtonProps = {
  title: string;
};

export default function Button({ title }: ButtonProps) {
  return (
    <div className='relative'>
      <div className='w-[150px] h-[40px] bg-[#c1befa] border-solid border-[1px] border-black -translate-x-1 translate-y-1'></div>
      <div className="group">
      <button className='absolute inset-0 bg-white group-hover:bg-black group-hover:text-white w-[150px] h-[40px] border-solid border-[1px] border-black text-sm'>
        {title}
      </button>
      </div>
    </div>
  );
};