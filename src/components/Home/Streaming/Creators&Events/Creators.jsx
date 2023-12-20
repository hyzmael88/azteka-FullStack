import React from 'react'
import TitulosStream from '../Titulos/TitulosStream'
import img1 from '../../../../assets/images/home/Streaming/11.png'
import img2 from '../../../../assets/images/home/Streaming/12.png'
import img3 from '../../../../assets/images/home/Streaming/13.png'
import img4 from '../../../../assets/images/home/Streaming/14.png'
import Image from 'next/image'
import Button from './Button'
import { motion } from 'framer-motion'

import { useInView } from 'react-intersection-observer';


function Creators() {
    const { ref, inView } = useInView({
        triggerOnce: true,
      });

    const images = [
        {image: img1},
        {image: img2},
        {image: img3},
        {image: img4},
    ]

  return (
    <motion.div  ref={ref} className='w-full h-full'
      initial={{ y: -50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 }: { y: -50, opacity: 0 }}
      transition={{ duration: 1 }}
    >
        <TitulosStream titulo = "MAS CREADORES" />
        <motion.div className='w-full h-full grid grid-cols-2 gap-2 md:gap-4 mt-2'
          initial={{ y: -50, opacity: 0 }}
          animate={inView ?{ y: 0, opacity: 1 }: { y: -50, opacity: 0 }}
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
                           <Image src={image.image} alt="" className='w-full h-[97px] md:h-[161px] rounded-[7px] 
                           custom-shadow
                           object-cover'/>
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
            titulo = "Conocer"
            />
        </motion.div>
    </motion.div>
  )
}

export default Creators