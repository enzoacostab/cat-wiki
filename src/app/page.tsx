import HomeImages from '@/components/home-images';
import Logo from '@/components/logo';
import Search from '@/components/search';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { MdTrendingFlat } from "react-icons/md";

export default function Home() {
  return (
    <main>
      <section className="rounded-[50px] overflow-hidden">
        <div className="md:bg-hero-lg lg:bg-hero-md bg-hero-sm w-full xl:min-h-[540px] h-fit bg-right-top bg-black bg-contain bg-no-repeat text-white py-[4%] lg:py-[7%] pl-[10%]">
          <div className="max-w-[400px] w-[50%] h-fit flex flex-col gap-1 lg:gap-3"> 
            <Logo color="white" width={"70%"} height={"100%"}/>
            <p className="max-w-[370px] w-[90%] font-medium text-[10px] leading-3 lg:text-2xl lg:leading-7">Get to know more about your cat breed</p>
            <Search/>
          </div>
        </div>
        <div className="bg-[#E3E1DC] h-[50%] text-[#291507] pb-[10%] pt-6 px-[10%] flex gap-5 lg:gap-10 flex-col">
          <span className="lg:text-lg text-xs font-medium">Most Searched Breeds</span>
          <div className="lg:w-16 w-10 h-1 bg-[#4D270C] lg:-mt-9 -mt-3"></div>
          <div className="flex justify-between font-bold items-end">
            <h2 className="lg:text-5xl text-lg w-full leading-5 lg:leading-[58px]">66+ Breeds For you to discover</h2>
            <Link href={'/most-searched-breeds'} className="text-lg hover:underline underline-offset-4 text-[#29150799] hidden justify-end lg:flex w-[90%] items-center gap-1">SEE MORE<MdTrendingFlat size={24}/></Link>
          </div>
          <div className="sm:flex gap-4 justify-between grid grid-cols-2 h-fit items-center relative">
            <HomeImages/>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row items-center justify-center gap-10 my-24">
        <div className="flex max-w-[450px] flex-col font-bold gap-8 lg:w-[50%]">
          <div className="w-14 h-1 bg-[#4D270C]"></div>
          <h2 className="text-[40px] leading-[48px] -mt-3">Why should you have a cat?</h2>
          <p className="font-medium text-lg">Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
          <Link href={'/most-searched-breeds'} className="text-xs hover:underline underline-offset-4 lg:text-lg text-[#29150799] flex items-center gap-1">READ MORE <MdTrendingFlat size={24}/></Link>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col *:h-fit w-[55%] items-end gap-5">
            <Image src="/image 2.png" width={273} height={167} alt="image 2" className='h-auto w-auto'/>
            <Image src="/image 1.png" width={195} height={290} alt="image 1" className='h-auto w-auto'/>
          </div>
          <Image src="/image 3.png" width={238} height={385} alt="image 3" className="h-fit w-[45%]"/>
        </div>
      </section>
    </main>
  )
}
