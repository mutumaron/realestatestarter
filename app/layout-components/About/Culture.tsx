import { Button } from '@/components/ui/button'
import React from 'react'
import CultureCards from './CultureCards'

const Culture = () => {
  return (
    <div className='bg-gray-100 mt-20 px-12 py-10 flex flex-col lg:flex-row gap-5 items-center '>
      <div className='flex flex-col gap-5 lg:w-1/3'>
        <h1 className='text-4xl'>By the numbers</h1>
        <p className='lg:w-3/4'>We started as the pioneer of onyx developers.Today, we’re digitally transforming the way the world agress by connecting landlords to tenants</p>
        <Button className='bg-rose-600 w-1/2'>Our Culture</Button>
      </div>
    <div className=''>
    <div className='mt-12 grid grid-cols-2 gap-10'>
        <CultureCards/>
        <CultureCards/>
        <CultureCards/>
        <CultureCards/>
        <CultureCards/>
        <CultureCards/>
      </div>
    </div>
    </div>
  )
}

export default Culture
