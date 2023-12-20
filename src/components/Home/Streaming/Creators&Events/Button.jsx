import React from 'react'
import { useRouter } from 'next/router';

function Button({titulo, url}) {
  const router = useRouter();
  return (
    <div>
        <button className='py-[11px] px-[82px] bg-[#FFB202]
        font-lato font-bold text-[14px] md:text-[24px]
        mt-4 md:mt-0
        custom-shadow
        rounded-[7px] uppercase text-black'
        onClick={()=>router.push(url)}
        >{titulo}</button>
    </div>
  )
}

export default Button