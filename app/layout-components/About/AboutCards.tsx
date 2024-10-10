import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const AboutCards = () => {
  return (
    <Card className='border-0 gap-6 flex flex-col'>
        <Image src={"/images/about1.jpg"} className='rounded-t-md' width={500} height={500} alt='card Image'/>
        <CardContent className='p-0 flex flex-col gap-3'>
            <h1 className='text-2xl'>Fuelling your favourite platforms
            </h1>
            <p className='text-gray-500'>With partners like BuzzFeed, Squarespace and Trello being powered by our API, the Unsplash library is more widely accessible than ever.</p>
        </CardContent>
    </Card>
  )
}

export default AboutCards
