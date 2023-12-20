import React from 'react'
import banner from '../../assets/images/checkout/banner.jpg'
import Image from 'next/image'

function Banner() {
  return (
    <div className='w-full h-[350px] mb-8'>
      <Image src={banner} alt='banner' className='w-full h-full object-cover '/>
    </div>
  )
}

export default Banner