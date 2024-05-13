import React from 'react'
import ch1 from "/choose1.png";
import ch2 from "/choose2.png";
import ch3 from "/choose3.png";
import ch4 from "/choose4.png";
import ch5 from "/choose5.png";
import { FaArrowRight } from "react-icons/fa";

const Choose = () => {

  const products = [
    { name: "BLACK SUGAR" , img : ch1},
    { name: "KIWI" , img : ch2},
    { name: "ORIGINAL" , img : ch3},
    { name: "CANBERRY" , img : ch4},
    { name: "BLUE BERRY" , img : ch5},
  ];
  return (
    <div className='py-24 mt-14  flex flex-col relative w-full font-arvo'>
     <div className="flex flex-col justify-center items-center">
        <div className="text-black text-center">
          <h1 className="text-3xl font-arvo"><span className='font-extralight'>Choose your </span> <span className='font-bold font-kalam'>unique taste</span></h1>
        </div>

        <div className="flex justify-between items-center w-[85%] pt-16">
         
          {products.map((product, index) => (
                <div
                  key={index}
                  className='flex flex-col justify-center items-center gap-5'
                  >
                  <div className="relative bg-[#FFE0B5] w-[158px] h-[157px] rounded-full cursor-pointer flex justify-center items-center">
                    <img src={product.img} className='hover:scale-125 transition-all ease-out mb-3' alt="" />
                  </div>
                  <p className="">{product.name}</p>
                </div>
            ))}
        </div>
        {/* <div className="mt-16 flex justify-center items-center">
          <button className='flex justify-center gap-2 items-center py-4 px-3 bg-black text-white rounded-2xl'>Go to the menu <span><FaArrowRight/></span></button>
        </div> */}

     </div>
    </div>
  )
}

export default Choose