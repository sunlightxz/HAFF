import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import vid from "/video.png";
import eclipse from "/eclipse.png";
import Modal from 'react-modal';
import boba from '/boba.mp4'
const Vide = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  
  const closeModal = () => {
    setModalIsOpen(false);
  };
  
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
              <button className='flex justify-center gap-2 items-center py-3 px-3 border hover:bg-black ease-in-outout transition-all duration-300 hover:text-white border-black text-black rounded-2xl'>Go to the menu <span><FaArrowRight/></span></button>
              </div>

          </div>
          <div className=" overflow-hidden rounded-xl">
            <img src={vid} className='object-cover hover:grayscale duration-300 hover:scale-105 transition-all ease-in-out cursor-pointer' alt=""onClick={openModal}/>
          </div>

          <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Video Modal"
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)', // Background color with transparency
      zIndex: 50 // Higher z-index value
    },
    content: {
      backgroundColor: 'transparent', // Transparent background for the content area
      border: 'none', // No border
      boxShadow: 'none', // No shadow
      top: '50%', // Center vertically
      left: '50%', // Center horizontally
      transform: 'translate(-50%, -50%)', // Center the modal
      height:'60%',
    }
  }}
>
<video controls autoPlay>
  <source src={boba} type="video/mp4" />
</video></Modal>
      </div>
    </div>
  )
}

export default Vide