import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

import { useMediaQuery } from 'react-responsive';
import { useInView } from 'react-intersection-observer';
import { useRouter } from "next/router";

function Product({product, index}) {
  const router = useRouter();

  const renderStars = (rate) => {
    const roundedRate = Math.ceil(rate);
    const stars = [];
    

    for (let i = 0; i < roundedRate; i++) {
      stars.push(
          <motion.span 
              ref={ref}
              key={i} 
              className="text-yellow-500 text-[20px] md:text-[25px]"
              initial={{ y: -50, opacity: 0 }}
              animate={isMobile || inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
              transition={{ duration: 1, delay: i * 0.2 }}
          >
              &#9733;
          </motion.span>
      );
  }

    return stars;
};

const { ref, inView } = useInView({
  triggerOnce: true,
});

const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <motion.div
    ref={ref}
    key={index}
    className="w-full h-full flex flex-col items-center justify-center custom-shadow
    cursor-pointer
    "
    initial={{ y: -50, opacity: 0 }}
    animate={isMobile || inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
    transition={{ duration: 1, delay: index * 0.2 }}
    onClick={() => router.push(`/Product/${product.productSlug}`)}
  >
    <Image
      src={product.img}
      alt=""
      className="w-full h-full rounded-[7px] object-cover "
    />
    <motion.div className="w-full h-[120px] bg-black flex flex-col
    px-3
    ">
      <div className="flex flex-row  gap-2 items-center">
        <div>
          {renderStars(product.rate)}
        </div>
        <p className="text-white font-lato font-bold text-[12px] xl:text-[20px]">({product.qtyrates})</p>
      </div>
      <motion.div className="text-white w-full h-full flex flex-row justify-between items-end">
        <p className="w-[108px] md:w-[150px] xl:w-[190px] text-[14px]  md:text-[18px] xl:text-[23px] font-lato font-bold">
          {product.name}
        </p>
        <div className=" text-[14px]  md:text-[18px] xl:text-[23px] font-lato font-bold">
          ${product.price}
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
  )
}

export default Product