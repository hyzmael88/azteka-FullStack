import Image from 'next/image'
import React from 'react'
import banner from '../../../assets/images/store/Store/banner.png'
import Button from '@/components/Home/Streaming/Creators&Events/Button'
import { useRouter } from 'next/router';

function Banner() {
    
    const router = useRouter();
  return (
    <div className='h-[150px] md:h-[30vh] lg:h-[50vh] w-full mt-10 relative'>
        <Image src={banner} alt="banner" className='w-full h-full object-cover' />
        <div className='absolute top-0 w-full h-full flex flex-row justify-end items-center lg:pr-[20px] '>
          <div>

            <h4 className='header text-[12px] w-[200px] md:w-[30vh] 
            lg:w-[60vh]
            xl:w-[625px]
            md:text-[22px]
            xl:text-[32px]
            '>
                descubre nuestros productos mas nuevos
            </h4>
            
            
            <button 
             onClick={()=>router.push('/Store')}
             className='py-[11px] px-[60px] bg-[#FFB202]
             font-lato font-bold text-[14px] md:text-[24px]
             xl:text-[36px]
             xl:w-[625px]
             xl:h-[70px]
             mt-4 
             custom-shadow
             rounded-[7px] uppercase text-black'
             >
                Ver tienda
                </button>
              </div>
        </div>
    </div>
  )
}

export default Banner