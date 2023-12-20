import React from 'react'
import product1 from '../../../assets/images/store/Store/product1.png'
import product2 from '../../../assets/images/store/Store/product2.png'
import product3 from '../../../assets/images/store/Store/product3.png'
import product4 from '../../../assets/images/store/Store/product4.png'
import product5 from '../../../assets/images/store/Store/product5.png'
import product6 from '../../../assets/images/store/Store/product6.png'
import product7 from '../../../assets/images/store/Store/product7.png'
import product9 from '../../../assets/images/store/Store/product9.png'
import product10 from '../../../assets/images/store/Store/product10.png'
import Image from 'next/image'

import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Product from './Product'


   export const products = [
      {
        id: 1,
        name: "Air Jordan 1 Azteka Esports",
        productSlug: "air-jordan-1-azteka-esports",
        price: 198,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
        img: product1,
        rate: 4.7,
        qtyrates: 128,
        category: "shoes",
      },
      {
        id: 2,
        name: "Azteka T-shirt Rakmul ADC",
        productSlug: "azteka-t-shirt-rakmul-adc",
        price: 97,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
        img: product2,
        rate: 4.5,
        qtyrates: 113,
        category: "t-shirts",
      },
      {
        id: 3,
        name: "Xbox Series X Controller Azteka",
        productSlug: "xbox-series-x-controller-azteka",
        price: 250,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
        img: product3,
        rate: 4.2,
        qtyrates: 14,
        category: "controllers",
      },
      {
        id: 4,
        name: "Nike Hoodie Azteka Pyramids",
        productSlug: "nike-hoodie-azteka-pyramids-4",
        price: 180,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
        img: product4,
        rate: 4.1,
        qtyrates: 48,
        category:  "hoodies",
      },
      {
        id: 5,
        name: "Nike Hoodie Azteka Pyramids",
        productSlug: "nike-hoodie-azteka-pyramids-5",
        price: 180,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
        img: product5,
        rate: 4.1,
        qtyrates: 48,
        category: "hoodies",
      },
      {
        id: 6,
        name: "Nike Hoodie Azteka Pyramids",
        productSlug: "nike-hoodie-azteka-pyramids-6",
        price: 180,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
        img: product6,
        rate: 4.1,
        qtyrates: 48,
        category: "hoodies",
      },
      {
        id: 7,
        name: "Nike Hoodie Azteka Pyramids",
        productSlug: "nike-hoodie-azteka-pyramids-7",
        price: 180,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
        img: product7,
        rate: 4.1,
        qtyrates: 48,
        category: "hoodies",
      },
      {
        id: 8,
        name: "Nike Hoodie Azteka Pyramids",
        productSlug: "nike-hoodie-azteka-pyramids-8",
        price: 180,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
        img: product9,
        rate: 4.1,
        qtyrates: 48,
        category: "hoodies",
      },
      {
        id: 9,
        name: "Nike Hoodie Azteka Pyramids",
        productSlug: "nike-hoodie-azteka-pyramids-9",
        price: 180,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.",
        img: product10,
        rate: 4.1,
        qtyrates: 48,
        category: "hoodies",
      },
      ];
function Products() {

     
    
    
  return (
    <div className='w-full h-full flex flex-col bg-[#191A1B] mb-20 custom-shadow px-[10px] pt-[10px] '>
        <div className='w-full lg:px-[10px] h-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 mb-4'>
        {products.map((product, index) => (
         <Product key={index} product={product} index={index}/>
        ))}
        </div>
            <div className='flex flex-row justify-center items-center'>
                    <div>
                        <button className='py-[16px] px-[10px] bg-[#054A59] hover:bg-[#21ECB5]
                        text-white hover:text-black
                        uppercase flex items-center
                        rounded-[7px]
                        mt-10 mb-10
                        custom-shadow
                        '>
                        <p className='font-lato font-bold text-[13px]'>Load More</p>
                        </button>
                    </div>
            </div>
    </div>
  )
}

export default Products