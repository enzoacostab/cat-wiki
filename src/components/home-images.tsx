import { fetchMostSearchedBreeds } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function HomeImages() {
  const { cats } = await fetchMostSearchedBreeds()

  return (
    <>
      {cats.slice(0, 4).map((cat: any, i: number) => (
        <Link href={`/${cat.breeds[0].id}`} key={cat.id} className="z-10 relative">
          {i === 0 ? <div className="h-[90px] lg:h-[175px] w-11 bg-[#DEC68B] rounded-xl absolute top-5 -left-1 lg:-left-2"></div> : null}
          <Image src={cat.url} width={220} height={220} className="rounded-3xl lg:h-[220px] lg:w-[220px] h-[130px] w-[130px] drop-shadow-lg object-cover" alt="cat image"></Image>
          <span className="lg:text-lg text-xs font-semibold">{cat.breeds[0].name}</span>
        </Link>
      ))}
    </>
  )
}
