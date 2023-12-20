import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import banner from "../../../assets/images/home/Store/banner.png";
import Image from "next/image";

function Banner() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      className="w-full  h-[549px]  relative"
      ref={ref}
      initial={{ y: -50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Image
        src={banner}
        alt=""
        className="w-full h-full 
       
        object-cover 
        custom-shadow
        rounded-[7px]"
      />
      <motion.div
        className="absolute w-full h-full left-0 top-0 flex flex-col justify-end
        lg:justify-center md:ml-[24px]
        items-center
        lg:items-start
        gap-4 z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2 className="uppercase text-white header text-center md:text-left custom-shadow-text">
          NEW FIRST KIT
        </motion.h2>
        <motion.p
          className="text-white font-lato text-[16px] text-center
        md:text-left
        font-bold w-[300px] custom-shadow-text md:w-[486px]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore{" "}
        </motion.p>
        <motion.div
          className="flex flex-row gap-4 md:gap-10 mb-8 "
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.button
            className="bg-[#FFB202] 
             font-lato  text-white rounded-[7px] w-[163px] h-[35px] uppercase custom-shadow"
          >
            LOREM{" "}
          </motion.button>
          <motion.button
            className="border-[1px] border-[#FFB202] 
             font-lato  text-white rounded-[7px] w-[163px] h-[35px] uppercase custom-shadow "
          >
            ipsum{" "}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Banner;
