import React, { useContext, useEffect, useRef, useState } from "react";
import Counter from "../Counter";
import Image from "next/image";
import { AppContext } from "@/context/AppContext";

function Item({ item  }) {
  console.log(item)
  
  const [counter, setCounter] = useState(1);
  console.log(counter)

  const {removeFromCart, updateCartItem} = useContext(AppContext)

  const prevCounter = useRef(counter);

  useEffect(() => {
    setCounter(item.qty);
    prevCounter.current = item.qty;
  }, [item]);

  useEffect(() => {
    if(counter === 0){
      removeFromCart(item.product.id)
    } else if (counter !== prevCounter.current) {
      updateCartItem(item.product.id, item.size, counter);
      prevCounter.current = counter;
    }
  }, [counter]);

  useEffect(() => {
    if (item.qty !== counter) {
      updateCartItem(item.product.id, item.size, counter);
    }
  }, [counter, item.qty, item.product.id, item.size, updateCartItem]);



  return (
    <div className="w-full h-full flex flex-row gap-4 justify-between lg:items-center">
      <div className="w-[70%] h-full flex flex-col gap-4">
        <h3 className="text-white header text-[19px] custom-shadow-text ">{item.product.name}</h3>
        <p className="font-lato text-white text-[19px] custom-shadow-text ">SIZE: {item.size}</p>
        <div className="w-full flex flex-col lg:flex-row justify-between lg:items-center">
          <div className="flex flex-row items-center gap-4">
            <span className="text-white font-lato text-[19px] custom-shadow-text ">QTY:</span>
            <Counter counter={counter} setCounter={setCounter} item={item} />
          </div>
          <span className="text-white font-lato font-bold text-[26px] custom-shadow-text  ">
            ${item.product.price}
          </span>
        </div>
      </div>
      <div className="w-[30%] h-full flex flex-col">
        <img
          src={item.product.img.src}
          alt={item.product.name}
          className="w-full lg:h-[140px] object-cover"
        />
      </div>
    </div>
  );
}

export default Item;
