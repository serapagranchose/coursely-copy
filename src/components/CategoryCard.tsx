type CategoryCardProps = {
  title: string;
  color: string;
};

export default function CategoryCard({ title, color }: CategoryCardProps) {
  return (
    <button className='grid justify-items-center'>
      <div className={`border-solid border-[1px] border-black grid content-between max-w-[285px] h-[100px] p-[20px]`} style={{ backgroundColor: color }}>
        <div className="text-left text-xl font-bold">{title}</div>
      </div>
      <div className="bg-yellow-dark -translate-y-6 w-[50px] h-[50px] border-solid border-[1px] border-black rounded-full">
      </div>
    </button>
  );
};