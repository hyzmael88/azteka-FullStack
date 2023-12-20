import Image from 'next/image'
import React from 'react'
import stream from '../../../../assets/images/home/Streaming/stream.png' 
import { FaTwitch } from 'react-icons/fa'
import { motion } from 'framer-motion';

function Stream() {
  return (
    <motion.div className='w-full h-full flex flex-col items-start md:items-center '
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div className='flex md:hidden items-center'
       initial={{ x: -50, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ duration: 1 }}
      >
        <h3 className='header text-[34px] md:text-[48px] custom-shadow-text'
          
        >
          MORATOMICA
        </h3> 
        <FaTwitch className='custom-shadow-text text-purple-500 text-[28px] md:ext-[32px]'/>
      </motion.div>
      <motion.p className='font-lato text-[16px] mb-4 md:hidden custom-shadow-text'
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        11K SEGUIDORES
      </motion.p>
      <div className='w-full h-[200px] md:h-[350px] lg:h-[500px] flex flex-col xl:justify-center '>
        <Image src={stream} alt='stream-image' className='
        w-full 
        h-full
        xl:h-[400px]
        custom-shadow
        rounded-[7px]
        object-cover
        md:object-cover
        lg:object-fill
        xl:object-cover
        '/>
      </div>
    </motion.div>
  )
}

export default Stream