import Image from "next/image";
import React from "react";
import rewards from "../../../assets/images/home/Rewards/Rewards.png";
import { MdSend } from "react-icons/md";
import Shadow1 from "./Shadows/Shadow1";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function Rewards() {

  const { ref, inView } = useInView({
    triggerOnce: true,
});

  return (
    <div className="w-full h-full flex flex-col relative">
      <Image
        src={rewards}
        alt="rewards"
        className="w-[100%] h-[686px] md:h-[100%] object-cover"
      /> <motion.div 
      ref={ref}
      className="w-full h-full flex flex-col justify-center items-center absolute left-0 z-10"
      initial={{ y: -50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
      transition={{ duration: 1 }}
  >
      <motion.h3 
          className="header custom-shadow-text text-center text-[23px] text-white"
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
      >
          Suscribete y obten
      </motion.h3>
      <motion.h3 
          className="header custom-shadow-text w-[394px] md:w-[772px] text-[33px] md:text-[56px] text-center text-[#76FFD4]"
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
      >
          Grandes recompensas
      </motion.h3>
        <motion.div 
                className="flex flex-row mt-10"
                initial={{ y: -50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
            >
          <input
            type="text"
            placeholder="Ingresa tu correo"
            className="input w-[280px] md:w-[400px] h-[81px] bg-transparent border-4
                text-white header text-[15px] md:text-[20px] custom-shadow border-white rounded-l-[7px] text-center"
          />
          <button
            className="button w-[90px] md:w-[118px] h-[81px] custom-shadow  rounded-r-[7px] text-black bg-yellow-500 text-center
                flex justify-center items-center
                "
          >
            <MdSend className="text-[50px]" />
          </button>
        </motion.div>
      </motion.div>

    <Shadow1/>

    </div>
  );
}

export default Rewards;
