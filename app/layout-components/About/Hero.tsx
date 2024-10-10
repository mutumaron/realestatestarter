import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='items-center lg:h-[90vh] flex flex-col lg:flex-row'>
      <div className='flex flex-col gap-10 flex-1'>
        <p className='text-gray-500 font-semibold '>Our company</p>
        <h1 className='text-6xl'>Join Onyx Homes.
        From anywhere.</h1>
        <p className='w-2/3'>Help us shape the future of freely usable imagery—powered by a community of millions of creators.</p>
        <div className='flex gap-2'>
        <Button className='flex gap-2'>
         Find A Home <ArrowRight size={20}/>
        </Button>
        <Button variant={'outline'}>
          Become An Agent
        </Button>
        </div>
      </div>
      <div className='bg-rose-50 lg:h-[90vh] hidden lg:items-center lg:flex'>
      <Image src="/images/home-illustration1.svg" alt="Illustaration" width={496} height={1200} />
      </div>
    </div>
  )
}

export default Hero
