import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { BsChatSquareDots } from 'react-icons/bs'
import { FaBars, FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram } from   'react-icons/fa'
import { AiOutlineClose } from "react-icons/ai";

function NavBar() {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80">
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex justify-between">
        <FaFacebookF size={14} className="mx-4 font-semibold" />
        <FaTwitter size={14} className="mx-4 font-semibold" />
        <FaGooglePlusG size={14} className="mx-4 font-semibold" />
        <FaInstagram size={14} className="mx-4 font-semibold" />
      </div>
      {/* Hamburger Menu */}
      <div onClick={handleNav} className="sm:hidden z-10 ">
        {nav ? <AiOutlineClose size={15} className="mr-4 cursor-pointer"/> : <FaBars size={15} className="mr-4 cursor-pointer" /> }
      </div>
      {/* Mobile Menu */}
      <div onClick={handleNav} className={nav ? `overflow-y-hidden md:hidden ease-in-out duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col` : `absolute top-0 h-screen left-[-100%] ease-in duration-300`}>
        <ul className="flex flex-col h-full w-full text-center p-12">
          <li className={'py-8 text-2xl'}>
            <a href="/">Home</a>
          </li>
          <li className={'py-8 text-2xl'}>
            <a href="#gallery">Gallery</a>
          </li>
          <li className={'py-8 text-2xl'}>
            <a href="#deals">Deals</a>
          </li>
          <li className={'py-8 text-2xl'}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
