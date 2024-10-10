import React from 'react'
import AboutCards from './AboutCards'

const Grid = () => {
  return (
    <div className='flex mt-10 flex-col gap-8 mx-8 lg:flex-row lg:mx-14 lg:mt-20'>
      <AboutCards/>
      <AboutCards/>
      <AboutCards/>  
    </div>
  )
}

export default Grid
