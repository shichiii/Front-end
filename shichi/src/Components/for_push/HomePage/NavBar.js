import React, { useContext, useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import NavWallet from "../../Wallet/NavWallet";

import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom

import logo from "../../../Static/whitelogo.svg";
import User from "../../../Components/for_push/HomePage/User";
import axios from "axios";
import AuthContext from "../../../Context/AuthContext";
import { jwtDecode } from "jwt-decode";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [notification, setNotification] = useState(false);
  const [image, setImage] = useState("");
  const [user, setUser] = useState({}); // State to store user information
  const userId = jwtDecode(localStorage.getItem("token")).user_id;

  const navigate = useNavigate();

  const { setChatRoomName, setSenderId } = useContext(AuthContext);

  const baseURL = "87.107.54.89:8000/user/myshow/";

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

  const handleNotification = () => {
    setNotification(!notification);
  };

  const [chatRooms, setChatRooms] = useState([]);

  console.log("chatRooms: ", chatRooms);

  useEffect(() => {
    axios
      .get("http://87.107.54.89:8000/chat/chatroomMembers/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // console.log(response.data);
        setChatRooms([...response.data]);
      });
  }, []);

  function handleChatRoom(chatRoom) {
    const adv = +chatRoom.name.split("-")[1];
    navigate(`/Car/${adv}`);
    setSenderId(+chatRoom.name.split("-")[0]);
  }

  return (
    <div className="bg-pallate-Gunmetal h-[100px] ">
      <div className="flex justify-between items-center border-x-pallate-Gunmetal h-24 max-w-[1240px] m-auto text-white">
        <Link to="/">
          <img src={logo} alt="My Logo" className="w-52 md:w-64 h-64" />
        </Link>
        <ul className="hidden md:flex">
          <Link to="/home">
            <li className="p-4">Home</li>
          </Link>
          <Link to="/Advertisement">
            <li className="p-4">All Cars</li>
          </Link>
          <Link to="/advertise">
            {/* // =======
            <Link to="/Advertise">
              >>>>>>> Develop */}
            <li className="p-4">Advertisement register</li>
          </Link>
          <Link to="/about">
            <li className="p-4">About US</li>
          </Link>
          {/* <Link to="/contact">
            <li className="p-4">Contact</li>
          </Link> */}
          <li className="p-2">
            <div class="relative inline-block text-left">
              <button
                type="button"
                class="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-pallate-Dark_Slate_Gray focus:outline-none"
                id="options-menu"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={handleNotification}
              >
                <IoIosNotifications
                  size={25}
                  className=" text-pallate-Dark_Sky_Blue"
                />
              </button>

              <div
                class={`${
                  notification ? "" : "hidden"
                } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-pallate-Dark_Slate_Gray ring-1 ring-black ring-opacity-5 focus:outline-none z-[10000] transition-all duration-300`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div
                  class="py-1 text-white max-h-48 overflow-y-scroll"
                  role="none"
                >
                  {chatRooms.length > 0 ? (
                    chatRooms?.map((chatRoom) => {
                      return (
                        <div
                          class="px-4 py-2 text-sm hover:bg-pallate-Dark_Sky_Blue cursor-pointer flex items-center gap-5"
                          role="menuitem"
                          onClick={() => handleChatRoom(chatRoom)}
                        >
                          <img
                            src={`http://87.107.54.89:8000${
                              chatRoom.sender.id !== userId
                                ? chatRoom.sender.profile_image
                                : chatRoom.reciver.profile_image
                            }`}
                            alt="User's Profile Picture"
                            className="rounded-full object-cover w-[50px] h-[50px]"
                          />
                          <div className="flex flex-col items-center">
                            <span className=" font-bold">
                              {chatRoom.sender.id !== userId
                                ? chatRoom.sender.first_name
                                : chatRoom.reciver.first_name}{" "}
                              {chatRoom.sender.id !== userId
                                ? chatRoom.sender.last_name
                                : chatRoom.reciver.last_name}
                            </span>
                            <span className=" font-light">
                              {chatRoom.name.split("-")[3]}
                            </span>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <span className="p-3">No ChatRooms Yet!</span>
                  )}
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 fixed top-0  z-50 w-[45%] opacity-95 h-full border-r border-r-pallate-Gunmetal bg-pallate-Gunmetal rounded-r-[100px] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <Link to="/">
            <img src={logo} alt="My Logo" className="w-64 h-64" />
          </Link>
          <Link to="/home">
            <li className="p-4 border-b border-gray-600">Home</li>
          </Link>
          <Link to="/Advertisement">
            <li className="p-4 border-b border-gray-600">All Cars</li>
          </Link>
          <Link to="/Advertise">
            <li className="p-4 border-b border-gray-600">
              Advertisement register
            </li>
          </Link>
          <Link to="/about">
            <li className="p-4 border-b border-gray-600">About</li>
          </Link>
          {/* <Link to="/contact">
            <li className="p-4">Contact</li>
          </Link> */}
        </ul>

        <div style={{ display: "flex", alignItems: "center" }}>
          <NavWallet />
          {/* <<<<<<< Updated upstream */}
          <User Image={image} UserName={user.name} />{" "}
          {/* Pass the user name to User component */}
          {/* =======
          <User Image={image} UserName={user.name} />
>>>>>>> Stashed changes */}
        </div>
        {/* <User Image={image} UserName={user.name} />{" "} */}
      </div>
    </div>
  );
};

export default NavBar;
