import Image from "next/image";

type ToolCardProps = {
  img_src: string;
  title: string;
};

export default function ToolCard({ img_src, title }: ToolCardProps) {
  return (
    <div className='h-[325px] bg-white border-solid border-[1px] border-black'>
      <button className='grid content-between w-full h-full p-[10px]'>
        <div className='relative h-[150px] flex-shrink-0'>
          <Image
            src={img_src}
            alt='Forest'
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="mx-[5px]">
          <div className="text-left text-xl font-bold">{title}</div>
        </div>
        <div className="w-[20px] h-[20px] border-solid border-[1px] border-black rounded-full">

        </div>
        <div className='flex justify-between'>
          <div className='text-lg font-bold text-[#e0e0e0]'>Not Rated</div>
          <div className='text-lg font-extrabold'>$15000</div>
        </div>
      </button>
    </div>
  );
};