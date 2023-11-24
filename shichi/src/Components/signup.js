import img from "../Static/Frame.svg";
import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import { BsEnvelopeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../Static/whitelogowithouttext90.svg";
import logo2 from "../Static/whitelogowithouttext270.svg";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { BsPatchExclamation } from "react-icons/bs";
const Signup = () => {
  const [error, setError] = useState('');
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://185.157.245.99:8000/user/signup/",
        {
          email: emailAddress,
          password: password,
          first_name: firstname,
          last_name: lastname,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      //alert("hi")
      // toast.success("Success Notification !");
      navigate("/login");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmail = (event) => {
    if (event.target.value === "") {
      setEmailAddressError("Please enter email");
    } else if (!validEmailAddress.test(event.target.value)) {
      setEmailAddressError("Invalid email");
    } else {
      setEmailAddressError(false);
      setEmailAddress(event.target.value);
    }
  };

  const handlePassword = (event) => {
    if (event.target.value === "") {
      setPasswordError("Please enter password");
    } else {
      setPasswordError(false);
    }
    if (
      !validPassowrdContainsDigit.test(event.target.value) &&
      event.target.value !== ""
    ) {
      setPasswordContainsDigitError("password must contain digit.");
    } else {
      setPasswordContainsDigitError(false);
    }
    if (
      !validPasswordLength.test(event.target.value) &&
      event.target.value !== ""
    ) {
      setPasswordLengthError("password must have 5 to 10 characters");
    } else {
      setPasswordLengthError(false);
    }
    if (
      passwordError === false &&
      !validPasswordLength.test(event.target.value) === false &&
      passwordContainsDigitError === false &&
      passwordLengthError === false
    ) {
      setpassword(event.target.value);
    }
  };
  const handleFirstname = (event) => {
    setfirstname(event.target.value);
  };
  const handleLastname = (event) => {
    setlastname(event.target.value);
  };

  let navigate = useNavigate();
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", checkScreenSize);

    // اجرا کد اولیه
    checkScreenSize();

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  return (
    <div>
      <body>
        <div class="flex items-center justify-center min-h-screen bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal">
          <div class="relative flex flex-col  bg-pallate-Dark_Sky_Blue bg-opacity-20  shadow-2xl rounded-2xl md:flex-row md:space-y-0">
            <div class="flex flex-col justify-center bg-purple-300 bg-opacity-20 rounded-l-2xl border-pallate-Dark_Sky_Blue p-8 md:p-14">
              <div className="text-[40px] font-mono font-normal text-center text-white">
                SignUp
              </div>

          <form className="w-full max-w-sm pt-7">
            <div className="flex items-center border-b border-pallate-Dark_Sky_Blue py-2">
              <BsPersonFill className="mr-1" />
              <input
                id="firstname"
                name="firstname"
                className=" appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-center input-focus"
                type="text"
                placeholder="FirstName"
                onChange={handleFirstname}
                autoComplete="off"
              />
            </div>
            <div className="flex items-center border-b border-pallate-Dark_Sky_Blue py-2">
              <BsPersonFill className="mr-1" />
              <input
                id="lastname"
                name="lastname"
                className="appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-center input-focus"
                type="text"
                placeholder="LastName"
                onChange={handleLastname}
                autoComplete="off"
              />
            </div>
            <div className="flex items-center border-b border-pallate-Dark_Sky_Blue py-2">
              <BsEnvelopeFill className="mr-1" />
              <input
                id="email"
                name="email"
                className="appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-center input-focus"
                type="email"
                placeholder="Email"
                onChange={handleEmail}
                autoComplete="off"
              />
            </div>
            <div className="flex items-center border-b border-pallate-Dark_Sky_Blue py-2">
              <HiLockClosed className="mr-1" />
              <input
                id="password"
                name="password"
                className="appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-center input-focus"
                type="password"
                placeholder="Password"
                onChange={handlePassword}
                autoComplete="off"
              />
            </div>
          </form>
          <div>
            <Link
              to="/Login"
              className="hover:bg-transparent hover:text-white hover:font-bold duration-300 m-3 hover:bg-AteneoBlue-400 focus:bg-AteneoBlue-500 inline-block text-sm text-white align-baseline py-2.5 w-full rounded bg-AteneoBlue-500 text-center focus:text-white"
            >
              Already have an account? Login!
            </Link>
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="bg-pallate-Dark_Sky_Blue hover:bg-transparent hover:text-pallate-Dark_Sky_Blue duration-300 w-full text-[20px] hover.text-pallate-Dark_Sky_Blue text-white font-mono px-10 py-1 rounded-[400px]"
            >
              Sign Up
            </button>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Signup;
