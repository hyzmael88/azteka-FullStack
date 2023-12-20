import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import bg from '../../assets/images/home/Hero/bg.png';
import azteka from '../../assets/images/home/Hero/azteka.png';

const Hero = () => {
  return (
    <motion.div className="bg-cover bg-center h-[85vh] flex flex-col justify-center items-center relative" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Image src={bg} alt="Logo"  className="w-full h-full object-cover absolute " />
      <motion.div className='w-full h-full flex flex-col justify-center items-center z-10'
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image src={azteka} alt="Logo" className=' w-[336px] h-[228px]  md:w-[636px] md:h-[433px]  lg:w-[336px] lg:h-[228px] ' />

        <motion.p className="text-white text-center mb-4 header text-[21px] md:text-[32px] lg:text-[24px] w-full md:w-[638px] lg:w-[500px]  custom-shadow-text "
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          unete a la comunidad del mejor equipo 
          <br/>
          <span className='text-[#76FFD4] text-[29px] md:text-[43px] lg:text-[34px]  custom-shadow-text'>
            mexicano de esports
          </span> 
        </motion.p>
        <motion.button className="bg-[#FFB202] w-[250px] p-[15px] font-lato font-bold text-blackpy-2 px-4 rounded text-[23px] custom-shadow"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          ÚNETE
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
