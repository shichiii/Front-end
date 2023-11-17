import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../../Styles/for_push/ForgotPass/Forgot.css";
import logo from "../../../Static/whitelogowithouttext90.svg";
import logo2 from "../../../Static/whitelogowithouttext270.svg";

const ForgotApp = () => {
  const [emailValue, setEmailValue] = React.useState("");
  const [emailErrorValue, setEmailErrorValue] = React.useState(false);
  const [logoRotation, setLogoRotation] = useState(0);
  const [logo2Rotation, setLogo2Rotation] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const handleCode = () => {
   
  };

  const handleCardFlip = () => {
   
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmailValue(e.target.value);
    setEmailErrorValue(
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value) &&
        e.target.value !== ""
    );
  };

  useEffect(() => {
    let rotationInterval;

    if (isRotating) {
      rotationInterval = setInterval(() => {
        setLogoRotation((prevRotation) => prevRotation + 180);
        setLogo2Rotation((prevRotation) => prevRotation + 180);
      }, 3000);
    } else {
      clearInterval(rotationInterval);
    }

    return () => {
      clearInterval(rotationInterval);
    };
  }, [isRotating]);

  return (
    <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal">
      <div className="flex items-center justify-center h-screen">
        <img
          src={logo}
          alt="My Logo"
          className="w-6 mt-52"
          style={{ transform: `rotate(${logoRotation}deg)` }}
          onClick={handleCardFlip}
        />
        <div
          className={`max-w-[450px] mima rounded-2xl h-[350px] justify-center neon-button text-3xl px-2 font-bold font-mono text-white w-full text-center flex flex-col bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20`}
        >
         
          <>
            Forgot Password
            <div className="text-[15px] font-mono font-normal"></div>
            <form className="w-full max-w-sm p-4">
              <div className="flex items-center border-b border-pallate-Dark_Sky_Blue py-2">
                <input
                  className={`appearance-none text-sm text-white bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light ${
                    emailErrorValue
                      ? "border-red-500   focus:ring-red-500 focus:border-red-500"
                      : "border-pallate-persian_green   focus:ring-pallate-persian_green  focus:border-pallate-persian_green"
                  }`}
                  type="email"
                  value={emailValue}
                  placeholder="Please Enter Your Email..."
                  onChange={handleEmail}
                />
              </div>
              {emailErrorValue && (
                <div className="text-blue-600 text-[15px] neon-button-remove">
                  Invalid email address ...
                </div>
              )}
            </form>
            <div>
              <button
               disabled={emailErrorValue || emailValue.length === 0}
                onClick={handleCardFlip}
                onChange={handleCode}
                className="bg-pallate-Dark_Sky_Blue hover-bg-transparent w-full text-[20px] hover:text-pallate-Dark_Sky_Blue duration-300 text-white font-mono px-10 py-1 rounded-[400px]"
              >
                Receive Code
              </button>
            </div>
          </>
        </div>
        <img
          src={logo2}
          alt="My Logo"
          className="w-6"
          style={{ transform: `rotate(${logo2Rotation}deg)` }}
          onClick={handleCardFlip}
        />
      </div>
    </div>
  );
};

export default ForgotApp;
