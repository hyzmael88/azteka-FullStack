import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { products } from "../../components/Store/Store/Products";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { IoShare } from "react-icons/io5";
import SimilarProducts from "@/components/Store/Store/SimilarProducts";
import Banner from "@/components/Store/Store/Banner";
import Shadow1 from "@/components/Product/Shadows/Shadow1";
import { AppContext } from "@/context/AppContext";
import Counter from "@/components/Counter";



function Product() {
  const router = useRouter();
  const { productSlug } = router.query;

  const { cart, addToCart, removeFromCart } = useContext(AppContext);

  


  const [size, setSize] = useState("XS");
  const [counter, setCounter] = useState(1);

  // Buscar el producto por el productSlug en el arreglo Products
  const product = products.find(
    (product) => product.productSlug === productSlug
  );
  const similarProducts = products.filter(
    (product) => product.category === product.category
  );
  const photosExtra = [
    {
      img: <div className="bg-gray-500 w-[150px] lg:w-[100px] h-[150px] lg:h-[100px] object-cover"></div>,
    },
    {
      img: <div className="bg-gray-500 w-[150px] lg:w-[100px] h-[150px] lg:h-[100px] object-cover"></div>,
    },
    {
      img: <div className="bg-gray-500 w-[150px] lg:w-[100px] h-[150px] lg:h-[100px] object-cover"></div>,
    },
    {
      img: <div className="bg-gray-500 w-[150px] lg:w-[100px] h-[150px] lg:h-[100px] object-cover"></div>,
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setSelectedImage(product?.img);
  }, [])
  


  return (
    <div className="w-full h-full relative overflow-hidden">
      {product ? (
        <div
          className="w-full h-full flex flex-col
         lg:flex-row xl:gap-4
          items-center px-[20px] lg:items-start
         
         "
        >
          <div className="w-full h-full flex flex-col  ">
            <Image
              src={selectedImage?
                selectedImage:
                product.img
              }
              alt={product.name}
              className="w-full h-[516px] lg:h-[350px] xl:h-[50vh] object-cover
              lg:object-contain
              "
            />
              {/* aqui van las fotos extra */}
              <div className="w-full h-full flex flex-row items-center justify-start md:justify-center
               gap-4 mt-4 overflow-x-scroll scrollbar-hide
               
               ">
                {photosExtra.map((photo, index) => (
                  <div
                    key={index}
                    className=" cursor-pointer flex flex-row justify-center items-center
                    
                     "
                     onClick={() => setSelectedImage(photo.img)}
                  >
                    {photo.img}
                  </div>
                ))}
            </div>
          </div>
          <div
            className="w-full xl:w-[50%] h-full flex flex-col
           items-center xl:items-start 
           "
          >
            <h2 className="text-white header text-[24px] xl:text-[32px] w-[350px]
            mt-4 xl:mt-0
            xl:w-[448px] text-center xl:text-left">
              {product.name}
            </h2>
            <p className="font-lato text-[31px] font-bold text-[#9B9B9B] text-center xl:text-left">
              ${product.price}
            </p>
            <p className="font-lato text-[20px] text-white">{size}</p>
            {/* sizes */}
            <div className="w-full flex items-center justify-center xl:justify-start gap-4">
              <div
                className={`w-[50px] h-[50px] flex flex-col justify-center items-center text-center cursor-pointer ${
                  size == "XS"
                    ? "bg-[#21ECB5]"
                    : "bg-[#054A59] hover:bg-[#21ECB5] hover:text-white"
                }`}
                onClick={() => setSize("XS")}
              >
                XS
              </div>
              <div
                className={`w-[50px] h-[50px] flex flex-col justify-center items-center text-center cursor-pointer ${
                  size == "S"
                    ? "bg-[#21ECB5]"
                    : "bg-[#054A59] hover:bg-[#21ECB5] hover:text-white"
                }`}
                onClick={() => setSize("S")}
              >
                S
              </div>
              <div
                className={`w-[50px] h-[50px] flex flex-col justify-center items-center text-center cursor-pointer ${
                  size == "M"
                    ? "bg-[#21ECB5]"
                    : "bg-[#054A59] hover:bg-[#21ECB5] hover:text-white"
                }`}
                onClick={() => setSize("M")}
              >
                M
              </div>
              <div
                className={`w-[50px] h-[50px] flex flex-col justify-center items-center text-center cursor-pointer ${
                  size == "L"
                    ? "bg-[#21ECB5]"
                    : "bg-[#054A59] hover:bg-[#21ECB5] hover:text-white"
                }`}
                onClick={() => setSize("L")}
              >
                L
              </div>
              <div
                className={`w-[50px] h-[50px] flex flex-col justify-center items-center text-center cursor-pointer ${
                  size == "XL"
                    ? "bg-[#21ECB5]"
                    : "bg-[#054A59] hover:bg-[#21ECB5] hover:text-white"
                }`}
                onClick={() => setSize("XL")}
              >
                XL
              </div>
            </div>
          <Counter
          counter={counter}
          setCounter={setCounter}
          />

            {/* buttons */}
            <div
              className="w-full h-full flex flex-col items-center xl:items-start  gap-4
                        mb-5 
                        "
            >
              <button
              onClick={() => addToCart(product, size, counter)}
              className="bg-gradient-to-t  from-[#054A59] to-[#21ECB5] h-[54px] w-full ">
                <p
                  className="text-white font-lato font-bold text-[20px] uppercase 
                            flex justify-center items-center gap-2"
                >
                  add to cart <FaShoppingCart className="text-white" />
                </p>
              </button>
              <button className="bg-gradient-to-t  from-[#E7902A] to-[#FFB202] h-[54px] w-full ">
                <p
                  className="text-white font-lato font-bold text-[20px] uppercase 
                            flex justify-center items-center gap-2"
                >
                  buy now <FaShoppingCart className="text-white" />
                </p>
              </button>
              <button
                className="bg-[#D9D9D9] h-[54px] w-[208px] 
            rounded-[7px]
            "
                onClick={() => {
                  if (navigator.share) {
                    navigator
                      .share({
                        title: product.name,
                        text: product.description,
                        url: window.location.href,
                      })
                      .catch((error) => console.log("Error sharing", error));
                  } else {
                    // fallback for browsers that do not support navigator.share
                    console.log("Web Share API not supported");
                  }
                }}
              >
                <p
                  className="text-black font-lato font-bold text-[20px] uppercase 
                            flex justify-center items-center gap-2"
                >
                  share <IoShare className="text-black" />
                </p>
              </button>
            </div>
            <hr className="w-full h-[1.5px] bg-[#46484A] mb-5" />
            {/* Info */}
            <div className="w-full h-full flex flex-col items-center xl:items-start gap-4">
              <div className="flex flex-row items-center relative">
                <span className="text-white font-lato font-bold text-[20px] uppercase">
                  description
                </span>
              </div>
              <p className="text-white font-lato text-[13px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo con
              </p>
              <hr className="w-full h-[1.5px] bg-[#46484A] mb-5" />
              <p className="text-white font-lato font-bold text-[20px] uppercase">
                Details
              </p>
              <p className="text-white font-lato text-[13px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo con
              </p>
              <hr className="w-full h-[1.5px] bg-[#46484A] mb-5" />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col justify-center items-center ">
          <p className="text-white header">Producto no encontrado</p>
        </div>
      )}

      {/* similar products */}
      <SimilarProducts similarProducts={similarProducts} />
      {/* Banner */}
      <Banner />
      <Shadow1/>
    </div>
  );
}

export default Product;
