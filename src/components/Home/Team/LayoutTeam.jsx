import React from 'react'
import Videogames from './Videogames'
import Players from './Players'
import Trophies from './Trophies'

function LayoutTeam() {
    return (
        <div className='w-full h-full px-[10px] md:px-[24px]'>
                <div className='w-full h-full  '>
                    <Videogames/>
                    <div className='w-full h-[800px] xl:h-[679px] relative'>

                    <div className='w-full h-full   bg-[#08101D] rounded-[7px] absolute -top-9
                     overflow-hidden'>
                        <Players/>
                        <Trophies/>
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default LayoutTeam