import Image from 'next/image'
import React from 'react'
import logo from '../assets/images/Logo/logo.png'
import { FaArrowUp, FaFacebook, FaInstagram, FaTiktok, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { useMediaQuery } from 'react-responsive';


function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const { ref, inView } = useInView({
    triggerOnce: true,
});
const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <>
<motion.div 
        ref={ref}
        className='flex md:hidden flex-col items-center justify-center w-full h-full
        bg-[#08101D]'
        initial={{ y: -50, opacity: 0 }}
        animate={isMobile || inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 1 }}
    >
        <div>
            <Image src={logo} alt='logo' className='w-[247px] h-[223px] object-contain mt-8'/>
        </div>
        <motion.div 
            className='w-full flex flex-row justify-around items-center mt-8'
            initial={{ y: -50, opacity: 0 }}
            animate={isMobile || inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
        >
            <FaTwitch className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150custom-shadow-text text-[30px] mr-[16px]'/>
            <FaYoutube className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text text-[30px] mr-[16px]'/>
            <FaFacebook className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text text-[30px] mr-[16px]'/>
            <FaInstagram className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text text-[30px] mr-[16px]'/>
            <FaTwitter className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text text-[30px] mr-[16px]'/>
            <FaTiktok className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text text-[30px] mr-[16px]'/>
        </motion.div>
        <motion.div 
            className='flex flex-col items-center gap-8 mb-8 mt-8'
            initial={{ y: -50, opacity: 0 }}
            animate={isMobile ||inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
        >
            <span className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text font-lato font-bold text-[16px] uppercase'>Home</span>
            <span className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text font-lato font-bold text-[16px] uppercase'>Shop</span>
            <span className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text font-lato font-bold text-[16px] uppercase'>Events</span>
            <span className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text font-lato font-bold text-[16px] uppercase'>Teams</span>
        </motion.div>
        
    <motion.div 
        className='flex flex-row justify-center items-center mb-4 mt-4'
        initial={{ y: -50, opacity: 0 }}
        animate={isMobile ||inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
    >
        <div 
            onClick={scrollToTop}
            className='rounded-full w-[95px] h-[95px] flex justify-center custom-shadow items-center bg-[#21ECB5]'
        >
            <FaArrowUp className='text-[#070B12] text-[40px] custom-shadow-text'/>
        </div>
    </motion.div>
    <motion.div 
        className='bg-black text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text flex flex-row justify-center items-center w-full h-[77px]'
        initial={{ y: -50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
    >
        <h2 className='header text-[20px] md:text-[26px] text-center'>Designed by jaizmora digital media</h2>
    </motion.div>

 

</motion.div>

<motion.div 
        ref={ref}
        className='hidden md:flex md:flex-col w-full h-[550px] bg-[#08101D] relative'
        initial={{ y: -50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 1 }}
    >        <div className='w-full px-[24px] grid grid-cols-4 pt-20'>
            <div className='w-full '>
            <Image src={logo} alt='logo' className='w-[247px] h-[223px] object-contain'/>
            </div>
            <motion.div 
                className='w-full flex flex-col gap-8 text-center'
                initial={{ y: -50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                
                    <p className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text font-lato font-bold text-[16px] uppercase'>Navigation</p>
                    <p className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text font-lato font-bold text-[16px] uppercase'>Home</p>
                    <p className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text font-lato font-bold text-[16px] uppercase'>Shop</p>
                    <p className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text font-lato font-bold text-[16px] uppercase'>Events</p>
                    <p className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text font-lato font-bold text-[16px] uppercase'>Teams</p>
                     
                </motion.div>
                <motion.div 
                className='w-full flex flex-col gap-8 text-center'
                initial={{ y: -50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
            >                
                    <p className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text font-lato font-bold text-[16px] uppercase'>Categories</p>
                    <p className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text font-lato font-bold text-[16px] uppercase'>Home</p>
                    <p className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text font-lato font-bold text-[16px] uppercase'>Shop</p>
                    <p className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text font-lato font-bold text-[16px] uppercase'>Events</p>
                    <p className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text font-lato font-bold text-[16px] uppercase'>Teams</p>
                     
                </motion.div>
                <motion.div 
                className='w-full flex flex-col gap-8 text-center'
                initial={{ y: -50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
            >
                
                    <p className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text font-lato font-bold text-[16px] uppercase'>HELP and support</p>
                    <p className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text font-lato font-bold text-[16px] uppercase'>Home</p>
                    <p className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text font-lato font-bold text-[16px] uppercase'>Shop</p>
                    <p className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text font-lato font-bold text-[16px] uppercase'>Events</p>
                     
                </motion.div>

        </div>
        <motion.div 
        ref={ref}
        className='w-full flex flex-row justify-center items-center mt-20 gap-4'
        initial={{ y: -50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 1 }}
    >
        <FaTwitch className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text text-[30px] mr-[16px]'/>
        <FaYoutube className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text text-[30px] mr-[16px]'/>
        <FaFacebook className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text text-[30px] mr-[16px]'/>
        <FaInstagram className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text text-[30px] mr-[16px]'/>
        <FaTwitter className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text text-[30px] mr-[16px]'/>
        <FaTiktok className='text-white cursor-pointer hover:scale-125 ease-linear transition duration-150 custom-shadow-text text-[30px] mr-[16px]'/>
    </motion.div>
    <motion.div 
        className='bg-black text-white 
        custom-shadow-text flex flex-row justify-center items-center absolute bottom-0 w-full h-[77px]'
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
    >
        <h2 className='header text-[26px]'>Designed by jaizmora digital media</h2>
    </motion.div>

    </motion.div>
    </>
  )
}

export default Footer