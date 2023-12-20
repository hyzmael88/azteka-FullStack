import React from 'react'
import hero from '../../assets/images/store/hero.png'
import herohot from '../../assets/images/store/herohor.png'
import Image from 'next/image'
import Button from '../Home/Streaming/Creators&Events/Button'

import { useMediaQuery } from 'react-responsive';

function Hero() {
  const isLg = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <div className='w-full h-full'>
      <div className='w-full h-screen lg:h-[70vh] xl:h-[70vh] relative'>
        <Image
          src={isLg ? hero : herohot}
          alt='hero'
          className='w-full h-full object-cover custom-shadow rounded-[7px]'
        />
        <div className='w-full h-full absolute top-0 z-10 flex flex-col justify-center items-center pt-[300px]'>
          <Button titulo='PREORDENAR' />
        </div>
      </div>
    </div>
  );
}

export default Hero