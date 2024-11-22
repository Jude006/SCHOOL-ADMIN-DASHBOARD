import React from 'react'
import { FaCalendarAlt, FaUserAlt, FaUserCheck, FaUtensils } from 'react-icons/fa'
import PerformanceSection from './PerformanceSection'
import SchoolCalendar from './SchoolCalender'
import SchoolFinance from './SchoolFinance'
import UnpaidTuition from './UnpaidTuition'

const DashboardSection = () => {
  return (
    <>
    <section className='bg-white rounded shadow py-10 px-2 grid md:grid-cols-4 grid-cols-2 gap-4'>
        <div className='flex  items-center gap-3'>
        <div className='bg-primary p-3 rounded-full shadow text-secondary'>
            <FaUserAlt />
        </div>
        <div className='flex flex-col '>
            <p className='text-lg'>Students</p>
            <p className='text-3xl font-bold'>932</p>
        </div>
        </div>
        <div className='flex  items-center gap-3'>
        <div className='bg-primary p-3 rounded-full shadow text-secondary'>
            <FaUserCheck  />
        </div>
        <div className='flex flex-col'>
            <p className='text-lg'>Teachers</p>
            <p className='text-3xl font-bold'>754</p>
        </div>
        </div>
        <div className='flex  items-center gap-3'>
        <div className='bg-primary p-3 rounded-full shadow text-secondary'>
            <FaCalendarAlt />
        </div>
        <div className='flex flex-col gap-1'>
            <p className='text-lg'>Events</p>
            <p className='text-3xl font-bold'>40</p>
        </div>
        </div>
        <div className='flex  items-center gap-3'>
        <div className='bg-primary p-3 rounded-full shadow text-secondary'>
            <FaUtensils />
        </div>
        <div className='flex flex-col gap-1'>
            <p className='text-lg'>Food</p>
            <p className='text-3xl font-bold'>32k</p>
        </div>
        </div>
    </section>
    <PerformanceSection />
    <SchoolCalendar />
    <SchoolFinance />
    <UnpaidTuition />
    </>
  )
}

export default DashboardSection