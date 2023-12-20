import React from 'react';
import { FaReact, FaAngular, FaVuejs, FaEmber, FaNodeJs, FaAccusoft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Asus from '../../assets/images/home/Brands/asus.svg'
import Alien from '../../assets/images/home/Brands/alien.svg'
import Mercedez from '../../assets/images/home/Brands/mercedez.svg'
import Razer from '../../assets/images/home/Brands/razer.svg'
import Vertagear from '../../assets/images/home/Brands/vertagear.svg'
import Image from 'next/image';

const Brands = () => {
    const images = [
       {
        image: Asus
       },
       {
        image: Alien
       },
       {
        image: Mercedez
       },
       {
        image: Razer
       },
       {
        image: Vertagear
       },
    ];

    const variants = {
        animate: {
            x: [-500,0],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                },
            },
        },
        animate2: {
            x: [-880,0],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                },
            },
        },
    };

    return (
        <div className="carousel-container mt-8 mb-8">
            <div className="carousel-wrapper flex w-full gap-2 xl:gap-8 ">
                {images.map((item, index) => (
                    <div key={index}>
                    <motion.div
                        
                        className="hidden xl:flex brand-image items-center "
                        variants={variants}
                        animate="animate"
                    >
                        <div className='w-[232px] h-[48px]'>

                        <Image src={item.image} alt='asus-brand' className='w-full h-full object-contain'/>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        key={index}
                        className="flex xl:hidden brand-image items-center  "
                        variants={variants}
                        animate="animate2"
                    >
                        <div className='w-[232px]  h-[48px]'>

                        <Image src={item.image} alt='asus-brand' className='custom-shadow w-full h-full object-contain'/>
                        </div>
                    </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brands;