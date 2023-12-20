import { AppContext } from '@/context/AppContext'
import React, { useContext } from 'react'

function Subtotal() {
    const {subtotal, iva, envio, total} = useContext(AppContext)  
  return (
    <div className="lg:mt-8 w-full h-full flex flex-col">
        <div className="w-full flex flex-row justify-between items-center text-white">
          <h4 className="custom-shadow-text header text-[24px] ">Subtotal</h4>
          <span className="font-lato font-bold text-[#9B9B9B] text-[25px] custom-shadow-text">
            ${subtotal.toFixed(2)}
          </span>
        </div>
        <div className="w-full flex flex-row justify-between items-center text-white mt-8">
          <h4 className="custom-shadow-text font-lato font-bold  uppercase text-[18px]  ">
            + IVA(16%)
          </h4>
          <span className="font-lato font-bold text-[#9B9B9B] text-[17px] custom-shadow-text">
            ${iva.toFixed(2)}
          </span>
        </div>
        <div className="w-full flex flex-row justify-between items-center text-white mt-4 mb-8">
          <h4 className="custom-shadow-text font-lato font-bold text- uppercase text-[18px]  ">
            + Envio
          </h4>
          <span className="font-lato font-bold text-[#9B9B9B] text-[17px] custom-shadow-text">
            ${envio.toFixed(2)}
          </span>
        </div>
        <hr className="w-full h-[1.5px] bg-[#46484A] mb-5" />
        <div className="w-full flex flex-row justify-between items-center text-white">
          <h4
            className="header text-[24px] uppercase custom-shadow-text
           "
          >
            Total
          </h4>
          <span className="font-lato font-bold text-[#9B9B9B] text-[25px] custom-shadow-text">
            ${total.toFixed(2)}
          </span>
        </div>
        <button className="w-full h-[50px] bg-[#FFB202] rounded-[7px] mt-8 mb-8  font-lato font-bold text-[25px] custom-shadow">
        PAGAR
      </button>
      </div>
  )
}

export default Subtotal