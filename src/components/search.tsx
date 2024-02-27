'use client'

import { breeds } from '@/lib/data'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'

export default function Search() {
  const [search, setSearch] = useState('')
  
  return (
    <div className="w-[60%] lg:w-full mt-[6%] text-black relative text-xs lg:text-lg">
      <label htmlFor="search" className="bg-white py-[4%] px-[10%] rounded-full text-[#291507] flex gap-4 ">
        <input id="search" onChange={({ target }) => setSearch(target.value)} className="focus-visible:outline-none w-full" type="text" autoComplete="off"/>
        <MdSearch size={24} className='lg:-mr-4'/>
      </label>
      <div className={`bg-white absolute z-20 w-full px-2 py-4 rounded-3xl transition-all ${search ? 'opacity-100 mt-3' : 'opacity-0 -mt-3'}`}>
        <ul className="max-h-[220px] w-full pr-2 overflow-y-scroll">
          {breeds
            .filter((e: string[]) => e[0].toLowerCase().startsWith(search.toLowerCase()))
            .map((breed: string[]) => 
              <Link key={breed[1]} href={breed[1]}>
                <li className="hover:bg-[#9797971A] px-2 py-3.5 rounded-xl">{breed[0]}</li>
              </Link>
            )}
        </ul>
      </div>
    </div>
  )
}
