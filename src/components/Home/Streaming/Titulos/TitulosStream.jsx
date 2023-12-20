import React from 'react'

function TitulosStream({titulo}) {
    console.log(titulo)
    return (
        <div className='w-full h-[60px] bg-gradient-to-r from-black via-gray-800 to-gray-900 bg-opacity-0 relative'>
            <div className='rounded-l-lg bg-gradient-to-b from-[#0D687B] via-[#32F8BA] to-[#FEFEFB]
            absolute left-0 top-0 w-[12px] h-full
            '/>
               
                {titulo && 
                    <div className='w-full h-full flex flex-col justify-center mt-4 mb-4  '>

                        <h2 className='header text-[19px] md:text-[30px] ml-[32px]'>{titulo}</h2>
                    </div>
                } 
        </div>
    )
}

export default TitulosStream