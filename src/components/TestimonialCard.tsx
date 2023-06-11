import Image from "next/image";

type TestimonialCardProps = {
  img_src: string;
  name: string;
  company: string;
  text: string;
};

export default function TestimonialCard({ img_src, name, company, text }: TestimonialCardProps) {
  return (
    <div className='flex justify-between gap-[20px] h-[204px] bg-yellow-dark border-solid border-[1px] border-black p-[20px]'>
      <div className='grid content-between'>
        <div className='relative w-[60px] h-[60px] flex-shrink-0'>
          <Image
            src={img_src}
            alt='Forest'
            fill
            className="object-cover object-top rounded-full border-solid border-[1px] border-black"
          />
        </div>
        <div>
          <div className="text-lg text-center font-bold whitespace-nowrap">{name}</div>
          <div className="text-center">{company}</div>
        </div>
        <div className='text-[22px] font-extrabold'>0</div>
      </div>
      <div className="self-center bg-black w-[0.5px] h-[150px]">

      </div>
      <div className="self-center mx-[5px]">
        <div>"{text}"</div>
      </div>
    </div>
  );
};