import { fetchMostSearchedBreeds } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function HomeImages() {
  const { cats } = await fetchMostSearchedBreeds()

  return (
    <>
      <div className="h-[100px] lg:h-[175px] w-5 bg-[#DEC68B] rounded-2xl absolute top-4 -left-1.5"></div>
      {cats.slice(0, 4).map((cat: any) => (
        <Link href={`/${cat.breeds[0].id}`} key={cat.id} className="z-10">
          <div className='lg:h-[220px] lg:w-[220px] h-[130px] w-[130px] relative'>
            <Image src={cat.url} fill style={{ objectFit: 'cover' }} sizes='100%' className=" rounded-3xl" alt="cat image"></Image>
          </div>
          <span className="lg:text-lg text-xs font-semibold">{cat.breeds[0].name}</span>
        </Link>
      ))}
    </>
  )
}
