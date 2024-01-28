import React, { useRef, useState, useContext } from "react";
import { Route } from "react-router-dom";
import AuthContext from "../../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
// import MyComponent from "../Components/addcar/popup";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const baseURL = "http://87.107.54.89:8000/user/show/";

const User = ({ firstName, lastName, id, avatarPath }) => {
  const navigate = useNavigate();
  const Menu = ["Edit Profile", "History", "LogOut", "Delete Account"];
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const imgRef = useRef();
  const { authTokens, setAuthTokens, logoutUser } = useContext(AuthContext);
  const editprofileuser = () => {
    const token = localStorage.getItem("token");
    let user = null;
    if (token !== "null" && token !== null) {
      console.log("heloooooooooooooooooooooooooo");
      console.log(token);
      user = jwtDecode(token); // decode your token here
    }
    // console.log("heloooooooooooooooooooooooooo");
    // console.log(user);
    // localStorage.setItem('token', token);
    // dispatch(actions.authSuccess(token, user));
    // console.log("/////////////////////")
    // console.log(user)
    navigate(`/profile/${user.user_id}`);
  };

  const historyUser = () => {
    const token = localStorage.getItem("token");
    let user = null;
    if (token !== "null" && token !== null) {
      user = jwtDecode(token); // decode your token here
    }
    // console.log("heloooooooooooooooooooooooooo");
    // console.log(user);
    // localStorage.setItem('token', token);
    // dispatch(actions.authSuccess(token, user));
    // console.log("/////////////////////")
    // console.log(user)
    navigate("/history");
  };

  const deleteAccount = () => {
    const token = localStorage.getItem("token");
    const user = null;
    // console.log("heloooooooooooooooooooooooooo");
    // console.log(token);
    if (token !== "null" && token !== null) {
      // console.log("weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
      // console.log(token)
      const user = jwtDecode(token);
      axios
        .post("http://87.107.54.89:8000/user/delete/" + `${user.user_id}/`)
        .then((response) => {
          setUserId(response.data.id);
        });
    }
  };

  const [userId, setUserId] = useState(0);
  const [firstname, setFirstN] = useState("");
  const [lastname, setLastN] = useState("");
  const [profileImage, setProfileImage] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = null;
    // console.log("heloooooooooooooooooooooooooo");
    // console.log(token);
    if (token !== "null" && token !== null) {
      // console.log("weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
      // console.log(token)
      const user = jwtDecode(token);
      axios.get(baseURL + `${user.user_id}/`).then((response) => {
        console.log(response.data);
        // setEmail(response.data.email);
        setFirstN(response.data.first_name);
        setLastN(response.data.last_name);
        setProfileImage(response.data.profile_image);
        setUserId(response.data.id);
        // setPhoneNumber(response.data.phone_number);
      });
    }
  }, [userId]);
  console.log("/////////////////////");
  console.log(firstname, lastname, profileImage, userId);

  // const userimage = () => {
  //   if (profileImage === null) {
  //     // If the profile image is not available, return the initials
  //     return `${firstname.charAt(0)}${lastname.charAt(0)}`;
  //   } else {
  //     // If the profile image is available, return the image URL
  //     return profileImage;
  //   }
  // }

  ////////////////////////////////////////
  // const [userMenu, setUserMenu] = useState(null);
  // const [loggingOut, setLoggingOut] = useState(false);
  // const navigate = useNavigate()
  // const openMenuHandler = (event) => {
  //   setUserMenu(event.currentTarget);
  // };
  // const closeMenuHandler = (event) => {
  //   setUserMenu(null);
  // };

  // const menuClickHandler = (route) => {
  //   navigate(route)
  // }

  // const LogOutNotification = () => toast.success("logged out sucessfully , redirecting to sign in page", {
  //   position: "top-center",
  //   autoClose: 1500,
  //   hideProgressBar: false,
  //   closeOnClick: false,
  //   pauseOnHover: false,
  //   draggable: false,
  //   progress: undefined,
  //   theme: 'colored',
  // })

  // const LogOutClickHandler = () => {
  //   LogOutNotification()
  //   setLoggingOut(true)
  //   setTimeout(() => {
  //     localStorage.clear()
  //     navigate("/sign-in")
  //   }, 1500);
  // };
  ////////////////////////////////////

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });

  return (
    <div className="relative p-7">
      <img
        ref={imgRef}
        onClick={() => setOpen(!open)}
        onerror="this.onerror=null;this.src='placeholder_image.jpg'; this.style='display:none;'"
        src={profileImage ? profileImage : "non-existent-url.jpg"}
        class="bg-pallate-Gunmetal h-20 w-20 cursor-pointer p-2 rounded-full shadow-lg"
        alt={`${firstname.charAt(0).toUpperCase()}  ${lastname
          .charAt(0)
          .toUpperCase()}`}
      />
     {open && (
  <div className="border-white  bg-pallate-Dark_Sky_Blue bg-opacity-10 z-50 border-2 text-[11px] absolute text-white p-2 rounded-lg">
    <ul>
      {Menu.map((meno) => (
        <li
          ref={menuRef}
          onClick={() => {
            if (meno === "LogOut") {
              logoutUser();
            }
            if (meno === "Edit Profile") {
              editprofileuser();
            }
            if (meno === "History") {
              historyUser();
            }
            if (meno === "Delete Account") {
              deleteAccount();
            }
            setOpen(false);
          }}
          className="cursor-pointer items-center text-center justify-center p-1 hover:bg-pallate-Dark_Sky_Blue  rounded-lg"
          key={meno}
        >
          {meno}
        </li>
      ))}
    </ul>
  </div>
)}

    </div>
  );
};

export default User;
