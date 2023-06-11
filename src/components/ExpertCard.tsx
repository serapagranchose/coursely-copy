import Image from "next/image";

type ExpertCardProps = {
  img_src: string;
  name: string;
  title: string;
};

export default function ExpertCard({ img_src, name , title }: ExpertCardProps) {
  return (
    <button className='min-h-[250px] bg-white border-solid border-[1px] border-black'>
      <div className='grid justify-items-center w-full h-full p-[20px]'>
        <div className='relative w-[150px] h-[150px] flex-shrink-0'>
          <Image
            src={img_src}
            alt='Forest'
            fill
            className="object-cover object-top rounded-full border-solid border-[1px] border-black"
          />
        </div>
        <div className="mx-[5px]">
          <div className="text-left text-xl font-bold">{name}</div>
        </div>
        <div className="mx-[5px]">
          <div className="text-left text-xl">{title}</div>
        </div>
        <div className='flex w-full justify-between'>
          <div className='text-lg font-extrabold'>0</div>
          <div className='text-lg font-bold text-[#e0e0e0]'>{'(0)'}</div>
        </div>
      </div>
    </button>
  );
};