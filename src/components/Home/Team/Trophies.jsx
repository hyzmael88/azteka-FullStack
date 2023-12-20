import React from 'react'
import trophie from '../../../assets/images/home/Trophies/1.png'     
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function Trophies() {

    const trophieArray = [];

    const { ref, inView } = useInView({
      triggerOnce: true,
  });

for (let i = 0; i < 5; i++) {
  trophieArray.push(
    <motion.div 
        ref={ref}
        key={i}
        initial={{ y: -50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 1, delay: i * 0.2 }}
    >
        <Image src={trophie} alt='trophie' className='w-[59px] custom-shadow md:w-[102px] h-[110px] md:h-[190px] object-contain' />
    </motion.div>
);
}
    

  return (
    <div className='w-full  flex flex-col xl:flex-row xl:ml-8 mt-20 '>
        <div className='w-full h-full flex gap-3 justify-center xl:justify-start '>
{/* Trophies */}
    {trophieArray}
   

        </div>
        <div className='w-full h-full flex flex-col items-center xl:items-start mt-4 xl:mt-0 '>
    <motion.h3 
        className='header text-[23px] custom-shadow-text  text-center xl:text-left'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
    >
        los mas grandes
    </motion.h3>
    <motion.p 
        className='text-white custom-shadow-text font-lato font-bold text-[16px] md:text-[16px] xl:text-[16px] 
        w-[354px] md:w-[550px] xl:w-[497px]
        text-center xl:text-left
        mt-4'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
    >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
        Duis aute irure dolor in reprehenderit in voluptate velit. 
    </motion.p> 
</div>
    </div>
  )
}

export default Trophies