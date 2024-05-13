import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import vid from "/video.png";
import eclipse from "/eclipse.png";

const Vide = () => {
  return (
    <div className='py-24 flex relative px-[60px] justify-center items-center font-arvo'>
      <div className="flex justify-between items-center gap-20  ">
          <div className="w-1/3">
              <div className="circle absolute top-[15%] z-10 left-0">
                <img src={eclipse} alt="" />
              </div>
              <div className="relative z-20">
              <h1 className='text-[32px]'>All-in one <span className='font-kalam font-extrabold'>BUbble tea</span></h1>
              <h1 className='text-[32px]'>Wholesale Supply</h1>
              <p className='mt-5 mb-6'>nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea</p>
              <button className='flex justify-center gap-2 items-center py-3 px-3 border hover:bg-black ease-in-outout transition-all 0.5s hover:text-white border-black text-black  rounded-2xl'>Go to the menu <span><FaArrowRight/></span></button>
              </div>

          </div>
          <div className="">
            <img src={vid} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Vide