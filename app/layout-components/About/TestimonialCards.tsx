import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const TestimonialCards = () => {
  return (
    <Card className='bg-blue-100 flex flex-col p-5 border-0 gap-4'>
        <div className='flex justify-between items-center'>
            <div className='flex gap-3'>
            <Image src={"/images/ronny.png"} alt='person' width={50} height={50} className='rounded-full'/>
            <div>
                <h1 className='text-sm font-semibold pb-1'>Ronny Mutembei</h1>
                <p className='text-xs text-gray-500'>@tembe21</p>
            </div>
            </div>            
            <div>
                <Twitter className='text-gray-500'/>
            </div>
        </div>
        <CardContent className='text-sm p-0'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio delectus iusto beatae voluptatem ipsum ratione autem esse animi pariatur quas? Nisi vero odit voluptatum nesciunt dolorum laboriosam architecto repellendus enim.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, natus. Quis similique assumenda veniam
        </CardContent>
        <hr className='border-gray-500 '/>
        <CardFooter className='p-0 flex justify-between'>
            <p className='text-xs'>DEC 2018</p>
            <p className='text-xs font-semibold underline cursor-pointer'>View Post</p>
        </CardFooter>
    </Card>
  )
}

export default TestimonialCards
