import React from 'react'
import fortnite from '../../../assets/images/home/Videogames/fortnite.png'
import lol from '../../../assets/images/home/Videogames/lol.png'
import valorant from '../../../assets/images/home/Videogames/valorant.png'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Videogames() {
    const videogames = [
        {img: fortnite},
        {img: lol},
        {img: valorant},
    ]

    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    
  return (
    <div className='   h-[128px] flex flex-row items-center justify-center md:justify-start gap-8 '>
        <div className='custom-shadow-teams  bg-[#08101D]  flex flex-row gap-8 rounded-[7px] px-6'>

            {
                videogames.map((item, index)=>(
                    <motion.div 
                    ref={ref}
                    className='flex items-center'
                    key={index}
                    initial={{ y: -50, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                >
                        <Image src={item.img} alt='videogame' className='w-[80px] h-[80px] object-contain'/>
                        {
                            index<videogames.length-1 &&
                            <div className='w-[20px] flex justify-end '>

                            <div className='w-[1px] h-[20px]  bg-white'></div>
                            </div>
                        }
                    </motion.div>
                ))
            }
            </div>
    </div>
  )
}

export default Videogames