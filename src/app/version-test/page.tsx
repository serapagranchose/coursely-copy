import Image from "next/image";

import Button from '@/components/Button';
import ToolCard from "@/components/ToolCard";
import CategoryCard from "@/components/CategoryCard";
import ExpertCard from "@/components/ExpertCard";
import TestimonialCard from "@/components/TestimonialCard";

export default function Home() {
  return (
    <div className='grid justify-items-center'>
      <div className='flex gap-1 w-[1200px] p-[5px] px-[20px]'>
        <div className='grid gap-12 self-center my-[40px]'>
          <div>
            <div className='text-6xl font-black'>
              There is no planet B <br></br>
              We help you to reach out your Net 0 journey
            </div>
            <div className='mt-[10px] text-[#707070]'>
              In alignment with Paris Agreement
            </div>
          </div>
          <Button title='Get Started' />
        </div>
        <div className='relative flex-shrink-0 w-[431px] h-[500px]'>
          <Image
            src={'/assets/images/forest.jpeg'}
            alt='Forest'
            fill
            className="object-cover object-top"
          />
        </div>
      </div>

      <div className='flex justify-between w-[1000px] p-[20px] '>
        <div>
          <div className='text-4xl font-black'>12k+</div>
          <div className='text-[#707070]'>Sustainability tools</div>
        </div>
        <div>
          <div className='text-4xl font-black'>9+</div>
          <div className='text-[#707070]'>Consultants experts</div>
        </div>
        <div>
          <div className='text-4xl font-black'>356+</div>
          <div className='text-[#707070]'>Worldwide partners</div>
        </div>
        <div>
          <div className='text-4xl font-black'>45+</div>
          <div className='text-[#707070]'>decarbonized clients</div>
        </div>
      </div>

      <div className="flex justify-center m-[15px] my-[55px]">
        <div className='text-4xl font-black'>
          Our popular sustainability tools 
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] w-[1200px] mx-[15px]'>
        <ToolCard img_src={'/assets/images/SBTI_Decarbonation_Strategy.jpeg'} title="SBTI Decarbonation Strategy" />
        <ToolCard img_src={'/assets/images/ACT_Decarbonation.png'} title="ACT Decarbonation" />
        <ToolCard img_src={'/assets/images/Aktio_carbon_footprint_software.png'} title="Aktio carbon footprint software" />
        <ToolCard img_src={'/assets/images/BiOceanOR_Analysis_Water_Quality.jpg'} title="BiOceanOR Analysis Water Quality" />
      </div>
      <div className="flex items-center justify-center pt-[75px]">
        <Button title='Explore more' />
      </div>

      <div className="flex items-center justify-center">
        <div className='text-4xl font-black m-[15px] mt-[55px] mb-[55px]'>
          Top Categories
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-[20px] w-[1200px] mx-[20px] pt-[20px]'>
        <CategoryCard title="Sustainability Measurement" color="#ffedce" />
        <CategoryCard title="Decarbonisation & offsetting" color="#e9f1de" />
        <CategoryCard title="Reporting & communication" color="#ecebff" />
        <CategoryCard title="Supply chain" color="#fbe6e8" />
      </div>

      <div className="flex items-center justify-center">
        <div className='text-4xl font-black m-[15px] mt-[55px] mb-[55px]'>
          Meet Our Carbon experts
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] w-[1200px] mx-[20px]'>
        <ExpertCard img_src={'/assets/images/user-profile-pic/9XnCvz8m.jpg'} name="Marie Caron" title="ESG communication & marketing expert" />
        <ExpertCard img_src={'/assets/images/user-profile-pic/JSFWlyoi.jpg'} name="Scott Yldrich" title="Expert in sustainability and finance" />
        <ExpertCard img_src={'/assets/images/user-profile-pic/quyonu2X.jpg'} name="John Smith" title="Expert in carbon offsets" />
      </div>

      <div className="flex items-center justify-center">
        <div className='text-4xl font-black m-[15px] mt-[55px] mb-[55px]'>
          Testimonials
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-[20px] w-[1200px] mx-[20px] mb-[90px]'>
        <TestimonialCard img_src={'/assets/images/user-profile-pic/VOnYlAwr.jpg'} name="Carmen Cabareti" company="EDF" text="DT Master Carbon supports on the compensation part to source high quality projects" />
        <TestimonialCard img_src={'/assets/images/user-profile-pic/ZkFJoQ8Z.jpg'} name="Adam Kacimi" company="Eurostar" text="DT Master Carbon was a great help for us regarding our Net 0 strategy"/>
      </div>
    </div>
  )
}
