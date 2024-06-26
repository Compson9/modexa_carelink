import { MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function SearchBar() {
  return (
   
<form className="max-w-md hidden lg:block mr-[150px]">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium overflow-hidden text-black sr-only ">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 dark:text-gray-400"/>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full xl bg-white  focus:border-blue-500 " placeholder="Search for doctors, bookings......" required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue dark:bg-slate-950 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

  )
}
