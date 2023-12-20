import Image from 'next/image'
import React from 'react'
import { FaTwitch } from 'react-icons/fa'
import avatar from '../../../../assets/images/home/Streaming/avat.png'  
import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';


function Info() {
    const { ref, inView } = useInView({
        triggerOnce: true,
      });
    
    const time = [
        {name:"Monday", time: "7:30 PM"},
        {name:"Tuesday", time: "7:30 PM"},
        {name:"Wednesday", time: "7:30 PM"},
        {name:"Thursday", time: "7:30 PM"},
        {name:"Friday", time: "7:30 PM"},
        {name:"Saturday", time: "7:30 PM"},
        {name:"Sunday", time: "7:30 PM"}
    ]

    
  return (
    <motion.div className='w-full h-full flex flex-col text-left'
    ref={ref}
    initial={{ y: -50, opacity: 0 }}
    animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
    transition={{ duration: 1 }}
  >
    <motion.div className='hidden md:flex items-center gap-1'
      initial={{ y: -50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Image src={avatar} alt='avatar-image' className='rounded-full w-[55px] h-[55px] bg-green-500'/>
      <motion.div className='flex flex-col'>
        <motion.div className='flex items-center'>
          <motion.h3 className='header text-[48px]'>MORATOMICA</motion.h3> <FaTwitch className='text-purple-500 text-[32px]'/>
        </motion.div>
        <motion.p className='font-lato text-[16px]'>11K SEGUIDORES</motion.p>
      </motion.div>
    </motion.div>
    <motion.p className='font-lato text-[14px]  md:text-[18px] 
    custom-shadow-text
    mt-4 mb-4 font-bold  '>¡Bienvenidos a mi rincón de diversión! 🐾🎮 Con 5 gatos como mis fieles asistentes (o jefes, depende del día), me aventuro en los reinos de League of Legends y Valorant, aunque a veces mezclo variedad.
         ¡Prepárate para risas, victorias y, por supuesto, momentos de inevitable manqueo! 😸🎉</motion.p>
         <motion.div className='hidden xl:flex flex-col '>
            {
                    time.map((time,index) =>(

                        <motion.div key={index} className='flex flex-row gap-8 uppercase'>
                         <motion.h4 className='w-[80px] font-lato text-[16px] font-bold'>{time.name}</motion.h4>
                          <p className='font-lato text-[16px] font-bold'>{time.time}</p>
                        </motion.div>
                    ))
                }
             </motion.div>
    </motion.div>
  )
}

export default Info