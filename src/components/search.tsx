'use client'

import { breeds } from '@/lib/data'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'

export default function Search() {
  const [search, setSearch] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  
  return (
    <div className={`sm:w-[60%] lg:w-full ${searchOpen && window.innerWidth<640 ? 'fixed top-0 left-0 size-full mt-0 z-20 bg-white' : ''} mt-[6%] text-black sm:relative text-xs lg:text-lg`}>
      {searchOpen && window.innerWidth<640 
        ? <button onClick={() => setSearchOpen(false)} className='bg-[#9797971A] block w-fit h-fit p-3.5 ml-auto mr-4 mt-2 rounded-lg mb-5'><RxCross1 size={16}/></button> 
        : null}
      <label htmlFor="search" className={`bg-white py-[4%] px-[7%] rounded-full text-[#291507] flex gap-4 ${searchOpen && window.innerWidth<640 ? 'border mx-4 border-black py-2 px-4' : ''}`} onClick={() => setSearchOpen(true)}>
        <input id="search" onChange={({ target }) => setSearch(target.value)} className="focus-visible:outline-none w-full" type="text" autoComplete="off"/>
        <MdSearch size={24} className='lg:-mr-4'/>
      </label>
      <div className={`bg-white absolute w-full sm:h-fit px-4 py-4 rounded-3xl transition-all ${search ? 'sm:opacity-100 sm:top-[120%] sm:z-20' : 'sm:opacity-0 sm:top-0 sm:-z-10'} ${searchOpen && window.innerWidth<640 ? 'h-full z-20' : 'opacity-0 -z-20'}`}>
        <ul className="sm:max-h-[220px] h-full w-full pr-2 overflow-y-scroll">
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
