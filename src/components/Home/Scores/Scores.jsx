import React, { useEffect, useRef, useState } from "react";
import azteka from '../../../assets/images/home/Scores/azteka.png'
import cloud9 from '../../../assets/images/home/Scores/cloud9.png'
import vitality from '../../../assets/images/home/Scores/vitality.svg'
import faze from '../../../assets/images/home/Scores/faze2.svg'
import Score from './Score'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


function Scores() {
 const scores = [
    {
        videogame: 'League of Legends',
        tournament: 'World Championship',
        date: '2021-10-05',
        time: '12:00',
        team1: 'Azteka',
        team2: 'Cloud9',
        score1: '3',
        score2: '0',
        status: 'Finalizado',
        winner: 'Azteka',
        team1logo: azteka,
        team2logo: cloud9,
    },
    {
        videogame: 'Valorant',
        tournament: 'Champions 2023',
        date: '2021-10-08',
        time: '13:00',
        team1: 'Azteka',
        team2: 'Evil Geniuses',
        score1: '3',
        score2: '0',
        status: 'Finalizado',
        winner: 'Azteka',
        team1logo: azteka,
        team2logo: vitality,
    },
    {
        videogame: 'Valorant',
        tournament: 'Champions 2023',
        date: '2021-10-08',
        time: '13:00',
        team2: 'Azteka',
        team1: 'Team Vitality',
        score1: '3',
        score2: '0',
        status: 'Finalizado',
        winner: 'Azteka',
        team1logo: azteka,
        team2logo: vitality,
    },
    {
        videogame: 'Valorant',
        tournament: 'Champions 2023',
        date: '2021-10-08',
        time: '13:00',
        team1: 'Azteka',
        team2: 'Faze Clan',
        score1: '3',
        score2: '0',
        status: 'Finalizado',
        winner: 'Azteka',
        team1logo: azteka,
        team2logo: faze,
    },
 ]


  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
  });

  const scrollContainerRef = useRef(null);

  const [isAtLeft, setIsAtLeft] = useState(true);
  const [isAtRight, setIsAtRight] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      setIsAtLeft(scrollContainerRef.current.scrollLeft === 0);
      setIsAtRight(
        scrollContainerRef.current.scrollLeft +
          scrollContainerRef.current.offsetWidth >=
          scrollContainerRef.current.scrollWidth - 1
      );
    };

    checkScrollPosition();
    scrollContainerRef.current.addEventListener("scroll", checkScrollPosition);

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener(
          "scroll",
          checkScrollPosition
        );
      }
    };
  }, []);

  const rightDesplacement = () => {
    scrollContainerRef.current.scrollLeft += 200;
  };

  const leftDesplacement = () => {
    scrollContainerRef.current.scrollLeft -= 200;
  };

  return (
    <div className="w-full h-full relative" ref={inViewRef}>
      {!isAtLeft && (
        <div
          className="w-[70px] h-[70px] bg-red-500 rounded-full absolute top-[90px] left-0 z-10 flex flex-col justify-center items-center cursor-pointer"
          onClick={leftDesplacement}
        >
          <FaArrowLeft className="text-white text-[30px]" />
        </div>
      )}
      {!isAtRight && (
        <div
          className="hidden w-[70px] h-[70px] bg-red-500 rounded-full absolute top-[90px] right-0 z-10 lg:flex flex-col justify-center items-center cursor-pointer"
          onClick={rightDesplacement}
        >
          <FaArrowRight className="text-white text-[30px]" />
        </div>
      )}
    <motion.div className='w-full px-[10px] md:px-[24px] h-full 
    flex flex-row gap-4 md:gap-8 mt-8 overflow-x-scroll scrollbar-hide '
    ref={scrollContainerRef}
    variants={variants}
    initial="hidden"
    animate={inView ? 'show' : 'hidden'}>
      
        {
            scores.map((score, index) => (
                <motion.div key={index} variants={item}>
                  <Score score={score}/>
                </motion.div>
            ))
        }
    </motion.div>
    </div>
  )
}

export default Scores