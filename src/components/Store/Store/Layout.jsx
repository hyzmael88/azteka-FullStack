import React, { useState } from 'react'
import { BiSortAlt2 } from "react-icons/bi";
import Products from './Products';




function Layout() {

    const [order, setOrder] = useState('relevance')
    const [open, setOpen] = useState(false)

    const types = [
        'relevance',
        'price',
        'popularity',
        'newest'
    ] 
  return (
    <div className='w-full h-full '>
        <div className='w-full h-full flex flex-col items-center relative overflow-hidden'>
            <button
            onClick={()=>setOpen(!open)}
            className={`
            ${
              !open?
            'h-[70px]'
            :
            'h-[300px]'
            }
            w-[200px] bg-[#21ECB5] uppercase  mt-20 xl:mt-14 mb-20 xl:mb-14 custom-shadow`}>
           <div className='flex flex-col'>
            <div className='flex flex-row justify-center items-center'>
            <BiSortAlt2 /> <p className='font-lato font-bold text-[13px]'>Order by: &nbsp; {order}</p>
            </div>
            {
              open&&
              <div className='flex flex-col'>
              {
                  types.map((type, index)=>(
                    <div key={index} className='flex flex-row justify-center items-center'>
                    <div
                    onClick={()=>setOrder(type)}
                    className='py-[16px] px-[10px]  hover:bg-[#21ECB5]
                    hover:text-white text-black
                    uppercase flex items-center
                    '>
                    <p className='font-lato font-bold text-[13px]'>{type}</p>
                    </div>
                    </div>
                  ))
              }
              </div>
            }
           </div>
            </button>
            <Products/>
        </div>

    </div>
  )
}

export default Layout