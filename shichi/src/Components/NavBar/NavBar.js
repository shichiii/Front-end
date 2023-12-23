import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

import logo from "../../Static/whitelogo.svg";
import User from "../../Components/for_push/HomePage/User";
import axios from "axios";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [image, setImage] = useState('');
  const [user, setUser] = useState({});  // State to store user information

  const baseURL = "87.107.105.201:8000/user/myshow/";

  useEffect(() => {
    // Fetch user information from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setImage(storedUser.profile_image);
    }

    // If user information is not in localStorage, you may fetch it from the server
    // ...

  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-pallate-Gunmetal h-[100px]">
      <div className="flex justify-between items-center border-x-pallate-Gunmetal h-24 max-w-[1240px] m-auto text-white">
        <Link to="/">
          <img src={logo} alt="My Logo" className="w-52 w-52 md:w-64 h-64" />
        </Link>
        <ul className="hidden md:flex">
          <Link to="/home">
            <li className="p-4">Home</li>
          </Link>
          <Link to="/Advertisement">
            <li className="p-4">All Cars</li>
          </Link>
          <Link to="/addcar">
            <li className="p-4">Advertisement register</li>
          </Link>
          <Link to="/about">
          <li className="p-4">About US</li>
          </Link>
          <Link to="/contact">
          <li className="p-4">Contact</li>
          </Link>
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
          <Link to="/">
            <img src={logo} alt="My Logo" className="w-64 h-64" />
          </Link>
          <Link to="/home">
            <li className="p-4 border-b border-gray-600">Home</li>
          </Link>
          <Link to="/company">
            <li className="p-4 border-b border-gray-600">Company</li>
          </Link>
          <Link to="/resources">
            <li className="p-4 border-b border-gray-600">Resources</li>
          </Link>
          <Link to="/about">
            <li className="p-4 border-b border-gray-600">About</li>
          </Link>
          <Link to="/contact">
            <li className="p-4">Contact</li>
          </Link>
        </ul>
        <User Image={image} UserName={user.name} />  {/* Pass the user name to User component */}
      </div>
    </div>
  );
};

export default NavBar;