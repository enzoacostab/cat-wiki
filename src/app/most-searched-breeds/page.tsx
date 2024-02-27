import { fetchMostSearchedBreeds } from '@/lib/data';
import Image from 'next/image';
import React from 'react'

export default async function Page() {
  const { cats } = await fetchMostSearchedBreeds()
  
  return (
    <main className='text-[#291507] mb-20'>
      <h1 className='text-4xl font-bold mt-5 -mb-24 sm:mb-0'>Most searched breeds</h1>
      <ul>
        {cats.map((cat: any, i: number) => 
          <li key={cat.id} className='sm:mt-20 mt-44 flex gap-10 sm:flex-row flex-col'>
            <div className='h-[170px] min-w-[170px] w-fit relative'>
              <Image src={cat.url} alt='cat image' fill style={{ objectFit: 'cover', borderRadius: 24 }} sizes='100%' className='drop-shadow-lg'/>
            </div>
            <div className='w-full'>
              <h2 className='font-semibold text-4xl'>{i + 1}. {cat.breeds[0].name}</h2>
              <p className='font-medium text-lg mt-5'>{cat.breeds[0].description}</p>
            </div>
          </li>
        )}
      </ul>
    </main>
  )
}
