import React, { useRef, useState, useContext } from "react";
import { Route } from "react-router-dom";
import AuthContext from "../../../Context/AuthContext";

const User = ({Image}) => {
  const Menu = ["Edit Profile", "History" , "LogOut"];
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const imgRef = useRef();
  const {authTokens, setAuthTokens, logoutUser} = useContext(AuthContext)

  window.addEventListener("click", (e)=>{
    if(e.target !== menuRef.current && e.target !== imgRef.current) {
        setOpen(false);
    }
  })
  return (
    <div className="relative p-7">
      <img
      ref={imgRef}
      onClick={() => setOpen(!open)}
        src={Image}
        class="bg-pallate-Gunmetal h-20 w-full cursor-pointer p-2 rounded-full shadow-lg"
        alt="Avatar"
      />
      {open && <div className="border-white border-2 text-[10px] absolute text-white p-2 rounded-lg">
        <ul>
          {Menu.map((meno) => (
            <li
            ref={menuRef}
            onClick={() => {
              if(meno === "LogOut"){
                logoutUser()
              }
              setOpen(false);
            }}
             className="cursor-pointer hover:bg-pallate-Dark_Sky_Blue p-2 rounded-lg"  key = {meno}>{meno} </li>
          ))}
        </ul>
      </div>}
      
    </div>
  );
};

export default User;
