import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import { BsEnvelopeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../Static/whitelogowithouttext90.svg";
import logo2 from "../Static/whitelogowithouttext270.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BsPatchExclamation } from "react-icons/bs";
const Signup = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setpassword] = useState("");
  const [emailAddressError, setEmailAddressError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);
  const [passwordContainsDigitError, setPasswordContainsDigitError] =
    useState(false);
  

  const validPasswordLength = new RegExp(/^.{5,10}$/);
  const validPassowrdContainsDigit = new RegExp(/^(?=.*\d).+$/);
  const validEmailAddress = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );

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
      toast.success("Success Notification !");
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

  return (
     
    
    <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal">
      <div className="flex items-center justify-center h-screen">
        <img src={logo} alt="My Logo" class="w-6 mt-64 " />
        <div className="max-w-[450px] mima rounded-2xl h-[490px] justify-center neon-button text-3xl fnt-bold font-mono text-white w-full text-center flex flex-col bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20">
          <div className="text-[30px] font-mono font-normal text-center">
            SignUp
          </div>

          <form className="w-full max-w-sm pt-7">
            <div className="flex items-center border-b border-pallate-Dark_Sky_Blue py-2">
              <BsPersonFill className="mr-1" />
              <input
                id="firstname"
                name="firstname"
                className=" appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-end input-focus"
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
                className="appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-end input-focus"
                type="text"
                placeholder="LastName"
                onChange={handleLastname}
                autoComplete="off"
              />
            </div>
            <div className="flex items-center border-b border-pallate-Dark_Sky_Blue py-2">
              <BsEnvelopeFill className="mr-1" />
              <div className="group flex ">
                <span className="w-60 scale-0 rounded-md  h-8  absolute bg-pallate-Dark_Sky_Blue opacity-90  text-xs text-black group-hover:scale-100">
                  {emailAddressError && (
                    <span className="text-blue-600 text-xs font-bold w-[700px] neon-button-remove">
                      {emailAddressError}
                    </span>
                  )}
                </span>
                {emailAddressError && (
                  <BsPatchExclamation className="ml-2 text-red-500" />
                )}
              </div>
              <input
                id="email"
                name="email"
                className="appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-end input-focus"
                type="email"
                placeholder="Email"
                onChange={handleEmail}
                autoComplete="off"
              />
            </div>

            <div className="flex items-center  border-b border-pallate-Dark_Sky_Blue py-2 ">
              <HiLockClosed className="mr-1 group" />{" "}
              <div className="group flex ">
                <span className="w-60 scale-0 rounded-md  absolute bg-pallate-Dark_Sky_Blue opacity-90  text-xs text-black group-hover:scale-100">
                  {passwordError && (
                    <span className="text-blue-600 text-xs font-bold w-[700px] neon-button-remove">
                      {passwordError}
                    </span>
                  )}

                  {passwordContainsDigitError && (
                    <span className="text-blue-600 text-xs font-bold w-[700px] neon-button-remove">
                      {passwordContainsDigitError}
                    </span>
                  )}

                  {passwordLengthError && (
                    <span className="text-blue-600 text-xs font-bold w-[700px] neon-button-remove">
                      {passwordLengthError}
                    </span>
                  )}
                </span>
                {passwordError && (
                  <BsPatchExclamation className="ml-2 text-red-500" />
                )}
                {passwordContainsDigitError && (
                  <BsPatchExclamation className="ml-2 text-red-500" />
                )}
                {passwordLengthError && (
                  <BsPatchExclamation className="ml-2 text-red-500" />
                )}
              </div>
              <input
                id="password"
                name="password"
                className="appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-end input-focus"
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
              disabled={
                emailAddressError ||
                passwordContainsDigitError ||
                passwordError ||
                passwordLengthError ||
                firstname.length === 0 ||
                lastname.length === 0 ||
                emailAddress.length === 0 ||
                password.length === 0
              }
              onClick={handleSubmit}
              className="bg-pallate-Dark_Sky_Blue hover:bg-transparent hover:text-pallate-Dark_Sky_Blue duration-300 w-full text-[20px] hover.text-pallate-Dark_Sky_Blue text-white font-mono px-10 py-1 rounded-[400px]"
            >
              Sign Up
            </button>
            <ToastContainer />
          </div>
        </div>
        <div className="grid">
          {" "}
          <img src={logo2} alt="My Logo" class="w-6 mb-24" />
          <img src={logo2} alt="My Logo" class="w-6 mb-24" />
        </div>
       
      </div>
    </div>

  );
};

export default Signup;
