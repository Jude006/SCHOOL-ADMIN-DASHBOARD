import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SideNav2 = () => {
  return (
    <header className='flex items-center justify-between w-full md:px-6 px-4 py-4'>
        <div className='relative'>
            <input type="text" name="" id="" placeholder='Search here...' className='py-3 md:px-14 px-8 rounded-full shadow bg-white text-primary'/>
            <FaSearch  className='absolute top-4 left-6 text-primary text-lg md:flex hidden'/>
        </div>
        <div>
            <div>
                <select name="" id="" className='py-3 px-8 rounded-full focus:outline-none  bg-white shadow'>
                    <option value="">Newest</option>
                    <option value="">Olderst</option>
                </select>
            </div>
        </div>
    </header>
  )
}

export default SideNav2