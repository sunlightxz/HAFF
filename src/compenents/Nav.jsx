import React , {useState} from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import logo from '/logos.png'
const Nav = () => {
  const [toggleMenu ,setToggleMenu] = useState(false);

  return (
    <nav className='w-full flex justify-between items-center py-4 px-8 text-black'>
        <div className="flex justify-start items-center nav-img ">
            <img className='w-full' src={logo} alt="" />
        </div>

        <div className='app-nav-links'>
          <ul className="flex justify-center items-center">
            <li className='mx-4 my-0 hover:text-gray-500 hover:border-b-2 border-yellow-600'><a href="#home">Home</a></li>
            <li className='mx-4 my-0 hover:text-gray-500 hover:border-b-2 border-yellow-600'><a href="#pages">Menu</a></li>
            <li className='mx-4 my-0 hover:text-gray-500 hover:border-b-2 border-yellow-600'><a href="#blog">Stories</a></li>
            <li className='mx-4 my-0 hover:text-gray-500 hover:border-b-2 border-yellow-600'><a href="#contact">Contact Us</a></li>
          </ul>
      </div>
     <div className="login flex justify-center items-center">
        <a className='mx-4 hover:text-gray-500 hover:border-b-2 hover:transition-all ease-in-out border-yellow-600' href="#login">Login/Register</a>
        <div className="w-px h-8 bg-slate-300"></div>
        <a className='mx-4 hover:text-gray-500 hover:border-b-2 border-yellow-600' href="">book table</a>
      </div>
      {/* small screen */}
      <div className="hidden app-nav-sm-links">
        <GiHamburgerMenu className='cursor-pointer' color='#000' fontSize={27} onClick= {()=>{setToggleMenu(true)}} />
        { toggleMenu && (
        <div className="nav-sm-overlay ">
          <MdOutlineRestaurantMenu className='nav-sm-close' fontSize={25} onClick= {()=>{setToggleMenu(false)}}/>
          <ul className="nav-sm-link h-full flex flex-col justify-center items-center">
            <li className='m-8 text-yellow-600 text-2xl hover:text-white '><a href="#home">Home</a></li>
            <li className='m-8 text-yellow-600 text-2xl hover:text-white '><a href="#pages">Menu</a></li>
            <li className='m-8 text-yellow-600 text-2xl hover:text-white '><a href="#landing">Stories</a></li>
            <li className='m-8 text-yellow-600 text-2xl hover:text-white '><a href="#contact">Contact Us</a></li>
          </ul>
        </div> )
        }
      </div>
    </nav>
  )
}

export default Nav