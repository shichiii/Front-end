import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import logo from "../../../Static/whitelogo.svg";
import User from "./User";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-pallate-Gunmetal h-[100px]  ">
      <div className="flex justify-between items-center border-x-pallate-Gunmetal h-24 max-w-[1240px] m-auto text-white">
        <img src={logo} alt="My Logo" class="w-52 w-52 md:w-64 h-64  " />
        <ul className="hidden md:flex">
          <li className="p-4">Home</li>
          <li className="p-4">All Cars</li>
          <li className="p-4">Advertisement register</li>
          <li className="p-4">About US</li>
          <li className="p-4">Contact</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[45%] opacity-95 h-full border-r border-r-gray-900 bg-pallate-Dark_Sky_Blue rounded-r-[100px] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <img src={logo} alt="My Logo" class="w-64 h-64  " />
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
        <User />
      </div>
    </div>
  );
};

export default Navbar;
