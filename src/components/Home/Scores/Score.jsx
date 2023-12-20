import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'
import React, { useEffect } from 'react'

function Score({score}) {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className='w-[331px] h-[204px]  rounded-[7px] bg-[#08101D] custom-shadow-score ' ref={ref}>
            <div className=' w-full h-full  flex flex-col items-center mt-4'>
                <motion.h3 
                    className='text-[16px] font-bold font-lato text-white uppercase custom-shadow-text'
                    variants={variants}
                    initial="hidden"
                    animate={controls}
                >
                    {score.videogame}
                </motion.h3>
                <motion.h4 
                    className='text-[10px] font-bold font-lato text-white uppercase  custom-shadow-text'
                    variants={variants}
                    initial="hidden"
                    animate={controls}
                    transition={{ delay: 0.1 }}
                >
                    {score.tournament}
                </motion.h4>
                <div className='w-full h-full flex flex-row justify-around'>
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <motion.div 
                            variants={variants}
                            initial="hidden"
                            animate={controls}
                            transition={{ delay: 0.2 }}
                        >
                            <Image src={score.team1logo} alt="" className='w-[90px] h-[90px] rounded-[7px]  custom-shadow'/>
                        </motion.div>
                        <motion.h5 
                            className=' font-bold header mt-4 text-center text-[14px] text-white uppercase  custom-shadow-text'
                            variants={variants}
                            initial="hidden"
                            animate={controls}
                            transition={{ delay: 0.3 }}
                        >
                            {score.team1}
                        </motion.h5>
                    </div>

                    <div className='flex flex-col items-center justify-center h-full'>
                        <div className='flex flex-row justify-center items-center'>
                            <motion.h5 
                                className='text-[18px] font-bold header text-white uppercase  custom-shadow-text'
                                variants={variants}
                                initial="hidden"
                                animate={controls}
                                transition={{ delay: 0.4 }}
                            >
                                {score.score1}
                            </motion.h5>
                            <motion.h5 
                                className='text-[18px] font-bold header text-white uppercase ml-2  custom-shadow-text'
                                variants={variants}
                                initial="hidden"
                                animate={controls}
                                transition={{ delay: 0.5 }}
                            >
                                -
                            </motion.h5>
                            <motion.h5 
                                className='text-[18px] font-bold header text-white uppercase ml-2  custom-shadow-text'
                                variants={variants}
                                initial="hidden"
                                animate={controls}
                                transition={{ delay: 0.6 }}
                            >
                                {score.score2}
                            </motion.h5>
                        </div>
                        <motion.h5 
                                className='text-[18px] font-bold header text-white uppercase ml-2  custom-shadow-text'
                                variants={variants}
                                initial="hidden"
                                animate={controls}
                                transition={{ delay: 0.6 }}
                            >vs
                            </motion.h5>
                    </div>

                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <Image src={score.team2logo} alt="" className='w-[90px] h-[90px] rounded-[7px]  custom-shadow'/>
                        <h5 className=' font-bold header mt-4 text-center text-[14px] text-white uppercase  custom-shadow-text'>{score.team2}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Score