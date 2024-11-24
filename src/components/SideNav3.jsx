import React from 'react'
import { FaCog } from 'react-icons/fa'
import { FaBars, FaBell,FaCircle } from 'react-icons/fa6'

const SideNav3 = ({title,sideBar,setSideBar}) => {
  return (
    <div className='flex md:flex-row flex-col justify-between items-center py-8 gap-10   w-full md:px-6 px-4'>
 <div className='flex w-full justify-between'>
 <div className='text-3xl md:hidden flex text-primary'>
            <FaBars onClick={()=>setSideBar(!sideBar)} />
        </div>
        <div>
            <h1 className='text-primary text-3xl font-bold'>{title}</h1>
        </div>
 </div>
       
        <div className='md:flex hidden'>
            <input type="text" placeholder='Search'  className='py-3 px-8 rounded-3xl bg-white shadow'/>
        </div>
    <div className=' gap-8 items-center flex-row flex'>
      
       <div className="flex items-center space-x-4 relative">
        <FaBell className="text-gray-600 hover:text-tertiary text-5xl hover:duration-300 ease-linear bg-white p-2 rounded-full cursor-pointer" />
        <FaCircle  className="text-[8px] text-primary rounded-full absolute -top-2 left-1 " />
      </div>
        <div>
            <FaCog className='text-gray-600 hover:text-tertiary text-5xl hover:duration-300 ease-linear  cursor-pointer bg-white p-2 rounded-full' />
        </div>
     
        <div className='flex items-center gap-2'>
            <div className='flex flex-col items-center'>
                <p className='text-nowrap'>Jude Orifa</p>
                <p>Admin</p>
            </div>
            <div className='w-10 h-10 rounded-full bg-gray-300 '>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SideNav3