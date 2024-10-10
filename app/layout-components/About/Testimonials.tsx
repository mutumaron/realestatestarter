import React from 'react'
import TestimonialCards from './TestimonialCards'

const Testimonials = () => {
  return (
    <div className='mx-12 mt-20 flex flex-col gap-5 lg:grid lg:grid-cols-2'>
    <h1 className='text-4xl'>Talk of the town</h1>

      <TestimonialCards/>
      <TestimonialCards/>
      <TestimonialCards/>
      <TestimonialCards/>
      <TestimonialCards/>

    </div>
  )
}

export default Testimonials
