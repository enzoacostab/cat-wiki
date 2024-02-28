import { fetchBreed } from '@/lib/data';
import { capitalize } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'

export default async function BreedPage({ params }: { params: { breedId: string } }) {
  const { cats, properties, breed } = await fetchBreed(params.breedId)

  return (
    <main className='pb-36'>
      <div className='flex flex-col lg:flex-row items-center lg:items-start pb-20 gap-5'>
        <div className='lg:w-[38%] w-fit h-fit relative flex items-center'>
          <div className="h-[80%] absolute w-5 bg-[#DEC68B] rounded-2xl -left-2"></div>
          <Image priority src={cats[0]?.url} height={370} width={370} alt='cat image' className='z-10 rounded-3xl w-[370px] object-cover bg-gray-100 h-[370px] drop-shadow-lg'/>
        </div>
        <div className='flex flex-col items-center text-xs sm:text-base font-medium gap-6 lg:w-[62%] w-full'>
          <h1 className='text-3xl sm:text-4xl text-[#291507] font-semibold'>{breed?.name}</h1>
          <p className='text-sm sm:text-lg text-balance text-center'>{breed?.description}</p>
          <div className='overflow-x-scroll sm:overflow-auto w-full sm:w-fit flex flex-col gap-6'>
            <p><b>Temperament: </b>{breed?.temperament}</p>
            <p><b>Origin: </b>{breed?.origin}</p>
            {breed && properties.map(property => {
              let count =  breed[property]
              let rest = 5 - count
              return (
                <div key={property} className='flex items-center w-[85%]'>
                  <b className='sm:min-w-[180px] min-w-[130px]'>{capitalize(property)}:</b>
                  <div className='flex gap-3'>
                    {new Array(count).fill(0).map((_, i) => 
                      <div key={i} className='sm:w-16 sm:h-3 w-7 h-2 bg-[#544439] rounded-lg'></div>
                    )}
                    {new Array(rest).fill(0).map((_, i) => 
                      <div key={i} className='sm:w-16 sm:h-3 w-7 h-2 bg-[#E0E0E0] rounded-lg'></div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div>
        <h2 className='sm:text-4xl text-3xl text-[#291507] font-semibold mb-10 text-center lg:text-left'>Other photos</h2>
        <div className='flex flex-wrap gap-10 justify-center'>
          {cats.slice(1).map((cat: any) => 
            <div key={cat.id} className='h-[278px] relative w-[278px] bg-gray-100 rounded-3xl'>
              <Image src={cat.url} alt='cat image' className='rounded-3xl drop-shadow-lg' style={{ objectFit: 'cover' }} sizes='278px' fill/>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
