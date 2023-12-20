import React from "react";

import visa from '../../assets/images/checkout/payments/visa.svg'
import mastercard from '../../assets/images/checkout/payments/mastercard.svg'
import american from '../../assets/images/checkout/payments/american-express.svg'
import paypal from '../../assets/images/checkout/payments/paypal.svg'
import googlePay from '../../assets/images/checkout/payments/googlePay.svg'
import applePay from '../../assets/images/checkout/payments/apple-pay.svg'
import Image from "next/image";


function MetodoPago() {
  return (
    <div className="w-full h-full flex flex-col mb-8 ">
      <div className="flex justify-between items-center h-full text-white mb-4">
        <h3 className="uppercase header custom-shadow-text">Metodos de pago</h3>
        
      </div>
      <div className="w-full h-full flex flex-row justify-start items-center">
        <div className="w-[56px] h-[37px] custom-shadow flex flex-col items-center justify-center">

        <Image src={visa} alt="visa" />
        </div>
        <div className="w-[56px] h-[37px] custom-shadow flex flex-col items-center justify-center">
        <Image src={mastercard} alt="visa" />
        </div>
        <div className="w-[56px] h-[37px] custom-shadow flex flex-col items-center justify-center">
        <Image src={american} alt="visa" />
        </div>
        <div className="w-[56px] h-[37px] custom-shadow flex flex-col items-center justify-center">
        <Image src={paypal} alt="visa" className=""/>
        </div>
        <div className="w-[56px] h-[37px] custom-shadow flex flex-col items-center justify-center">
        <Image src={googlePay} alt="visa" />
        </div>
        <div className="w-[56px] h-[37px] custom-shadow flex flex-col items-center justify-center">
        <Image src={applePay} alt="visa" />
        </div>
      </div>
      
    </div>
  );
}

export default MetodoPago;
