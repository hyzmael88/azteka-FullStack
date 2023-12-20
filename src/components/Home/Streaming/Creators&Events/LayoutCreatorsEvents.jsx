import React from 'react'
import Creators from './Creators'
import Events from './Events'

function LayoutCreatorsEvents() {
  return (
    <div className='flex flex-col xl:flex-row justify-between gap-4 w-full h-full
    px-[10px]
    md:px-[24px]
    '>
        <Creators/>
        <Events/>
    </div>
  )
}

export default LayoutCreatorsEvents