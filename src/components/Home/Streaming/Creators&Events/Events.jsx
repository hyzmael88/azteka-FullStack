import React from 'react'
import TitulosStream from '../Titulos/TitulosStream'
import img1 from '../../../../assets/images/home/Streaming/event1.jpeg'
import img2 from '../../../../assets/images/home/Streaming/event2.jpeg'
import Image from 'next/image'
import Button from './Button'
import { motion } from 'framer-motion'

import { useInView } from 'react-intersection-observer';

function Events() {
    const { ref, inView } = useInView({
        triggerOnce: true,
      });

    const images = [
        {image: img1},
        {image: img2},
    ]

  return (
    <motion.div
    ref={ref}
    className='w-full h-full'
      initial={{ y: -50, opacity: 0 }}
      animate={inView ?{ y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
      transition={{ duration: 1 }}
    >
        <TitulosStream titulo = "TOP EVENTS"/>
        <motion.div className='w-full h-full grid grid-cols-1 gap-4 mt-2'
          initial={{ y: -50, opacity: 0 }}
          animate={inView ?{ y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 1 }}
        >
        {
               images.map((image, index) => {
                   return(
                       <motion.div key={index} className='w-full h-full'
                         initial={{ y: -50, opacity: 0 }}
                         animate={{ y: 0, opacity: 1 }}
                         transition={{ duration: 1 }}
                       >
                           <Image src={image.image} alt="" className='
                           custom-shadow
                           w-full h-[161px] 
                           object-cover
                           rounded-[7px]'/>
                       </motion.div>
                   )
               })
            }
            </motion.div>
            <motion.div className='w-full flex flex-row justify-center items-center mt-2'
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
            <Button
            titulo = "Descubrir"
            />
        </motion.div>
    </motion.div>
  )
}

export default Events