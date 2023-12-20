import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/router';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function SimilarProducts({similarProducts}) {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isNotMobile = useMediaQuery({ query: '(min-width: 767px)' });
  const router = useRouter();

  const renderStars = (rate) => {
    const roundedRate = Math.ceil(rate);
    const stars = [];

    for (let i = 0; i < roundedRate; i++) {
      stars.push(
        <span 
          key={i} 
          className="text-yellow-500 text-[30px]"
        >
          &#9733;
        </span>
      );
    }

    return stars;
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
      className="hidden w-[70px] h-[70px] bg-red-500 rounded-full absolute top-[150px] left-0 z-10 lg:flex flex-col justify-center items-center cursor-pointer"
      onClick={leftDesplacement}
      >
      <FaArrowLeft className="text-white text-[30px]" />
      </div>
      )}
      {!isAtRight && (
        <div
        className="hidden w-[70px] h-[70px] bg-red-500 rounded-full absolute top-[150px] right-0 z-10 lg:flex flex-col justify-center items-center cursor-pointer"
        onClick={rightDesplacement}
        >
        <FaArrowRight className="text-white text-[30px]" />
        </div>
        )}
        <div className="w-full h-full flex flex-row justify-start gap-8 mt-8 overflow-x-scroll scrollbar-hide
        px-4
        "
        ref={scrollContainerRef}
        >
      {similarProducts.map((product, index) => {
       
        return (
          <motion.div
           
            key={index}
            className="w-full h-full flex flex-col items-center justify-center custom-shadow cursor-pointer "
            initial={{ y: -50, opacity: 0 }}
            animate={inView  ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            onClick={() => router.push(`/Product/${product.productSlug}`)}
          >
            <Image
              src={product.img}
              alt=""
              className="w-full h-[250px] rounded-[7px]"
            />
            <motion.div className="w-full h-[120px] bg-black flex flex-col">
              <div className="flex flex-row gap-2 items-center">
                <div>
                  {renderStars(product.rate)}
                </div>
                <p className="text-white font-lato font-bold text-[20px]">({product.qtyrates})</p>
              </div>
              <motion.div className="text-white w-full h-full flex flex-row justify-between items-end">
                <p className="w-[190px] text-[23px] font-lato font-bold">
                  {product.name}
                </p>
                <div className="text-[23px] font-lato font-bold">
                  ${product.price}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
    </div>
  );
}

export default SimilarProducts