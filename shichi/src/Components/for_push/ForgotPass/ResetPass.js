import img from "../../../Static/forgot2.svg";
import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import { BsEnvelopeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { BsPatchExclamation } from "react-icons/bs";
const ResetPass = () => {
 
  const [password, setpassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);
  const [passwordContainsDigitError, setPasswordContainsDigitError] =
    useState(false);

  const validPasswordLength = new RegExp(/^.{5,10}$/);
  const validPassowrdContainsDigit = new RegExp(/^(?=.*\d).+$/);

  const handleSubmit = async (e) => {
    e.preventDefault();

    
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


  let navigate = useNavigate();
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", checkScreenSize);

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
                Reset Password
              </div>

              <form className="w-72 text-[40px] pt-7 text-white">
                
                  
              
               

                <div className="flex items-center  border-b border-pallate-Dark_Sky_Blue py-2 ">
                  <HiLockClosed className="mr-1 group" />{" "}
                  <div className="group flex ">
                    <span className="w-60 scale-0 rounded-md  absolute bg-pallate-Dark_Sky_Blue opacity-90  text-xs text-black group-hover:scale-100">
                      {passwordError && (
                        <span className="text-red-500 text-xs font-bold w-[700px] neon-button-remove">
                          {passwordError}
                        </span>
                      )}

                      {passwordContainsDigitError && (
                        <span className="text-red-500 text-xs font-bold w-[700px] neon-button-remove">
                          {passwordContainsDigitError}
                        </span>
                      )}

                      {passwordLengthError && (
                        <span className="text-red-500 text-xs font-bold w-[700px] neon-button-remove">
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
                    className="appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-start input-focus"
                    type="password"
                    placeholder="New Password"
                    onChange={handlePassword}
                    autoComplete="off"
                  />
                </div>
                <div className="flex items-center  border-b border-pallate-Dark_Sky_Blue py-2 ">
                  <HiLockClosed className="mr-1 group" />{" "}
                  <div className="group flex ">
                    <span className="w-60 scale-0 rounded-md  absolute bg-pallate-Dark_Sky_Blue opacity-90  text-xs text-black group-hover:scale-100">
                      {passwordError && (
                        <span className="text-red-500 text-xs font-bold w-[700px] neon-button-remove">
                          {passwordError}
                        </span>
                      )}

                      {passwordContainsDigitError && (
                        <span className="text-red-500 text-xs font-bold w-[700px] neon-button-remove">
                          {passwordContainsDigitError}
                        </span>
                      )}

                      {passwordLengthError && (
                        <span className="text-red-500 text-xs font-bold w-[700px] neon-button-remove">
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
                    id="confirmpassword"
                    name="confirmpassword"
                    className="appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-start input-focus"
                    type="password"
                    placeholder="Confirm New Password"
                    onChange={handlePassword}
                    autoComplete="off"
                  />
                </div>
              </form>
              <div>
              
              </div>
              <div className="pt-8">
                <button
                  disabled={
                  
                    passwordContainsDigitError ||
                    passwordError ||
                    passwordLengthError ||
                    password.length === 0
                  }
                  onClick={handleSubmit}
                  className="bg-pallate-Dark_Sky_Blue hover:bg-transparent hover:text-pallate-Dark_Sky_Blue duration-300 w-full text-[20px] hover.text-pallate-Dark_Sky_Blue text-white font-mono px-10 py-1 rounded-[400px]"
                >
                  Submit
                </button>
                {/* <ToastContainer /> */}
              </div>
            </div>

            <div class="relative group">
              <img
                src={img}
                alt="img"
                class="w-[500px]  h-full hidden rounded-r-2xl md:block "
              />

          
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default ResetPass;
