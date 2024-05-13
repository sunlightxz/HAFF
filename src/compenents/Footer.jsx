import React from "react";
import { FaCat } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-[400px] bg-[#2A2824]   mt-20 relative flex flex-col justify-center items-center">
        <div className=" flex flex-col justify-center items-center">
          <h1 className="text-[60px] text-[#FFD59A] font-bold leading-[56px] capitalize font-grifter">
           Subscribe to us
          </h1>
         <div className="flex justify-center p-5 rounded-2xl mt-10 items-center bg-[#FFF2D7] max-h-[70px]">
          <input className="w-[560px] h-full bg-[#FFF2D7]" placeholder="enter your email" type="text" name="" id="" />
          <button className=" glowingButton bg-[#2A2824] hover:bg-black text-white items-center justify-start  px-5 py-3 overflow-hidden font-bold rounded-[10px] group/btn">
            Contact Us
          </button>
         </div>
        </div>

        <div className="star-animation">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
     <div className="flex justify-center items-center gap-1 text-xl">
     meow <FaCat />
     </div>

    </div>
  );
};

export default Footer;
