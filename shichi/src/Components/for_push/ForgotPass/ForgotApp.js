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
const ForgotPass = () => {
  const [emailAddress, setEmailAddress] = useState("");

  const [emailAddressError, setEmailAddressError] = useState(false);

  const validEmailAddress = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );

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

  const handleSubmit = () => {
    axios
      .post("http://185.157.245.99:8000/user/password-reset/", {
        email: emailAddress,
      })
      .then((response) => {
        // Handle the response if needed
        console.log(response.data);
        navigate("/success");
      })
      .catch((error) => {
        // Handle errors if any
        console.error(error);
        navigate("/fail");
      });
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
          <div class="relative flex flex-col  bg-transparent  md:bg-pallate-Dark_Sky_Blue md:bg-opacity-20  shadow-2xl rounded-2xl md:flex-row md:space-y-0">
            <div class="flex flex-col justify-center   bg-pallate-Dark_Sky_Blue md:bg-opacity-20 md:bg-purple-300 bg-opacity-20 rounded-2xl border-pallate-Dark_Sky_Blue p-8 md:p-14">
              <div className="text-[40px] font-mono font-normal text-center text-white">
                Forgot Password
              </div>

              <div className="text-[30px] text-white font-mono font-normal text-center">
                <form className="w-full max-w-sm pt-8">
                  <div className="flex items-center border-b border-pallate-Dark_Sky_Blue py-2">
                    <BsEnvelopeFill className="mr-1" />
                    <div className="group flex ">
                      <span className="w-60 scale-0 rounded-md   absolute bg-pallate-Dark_Sky_Blue opacity-90  text-xs text-black group-hover:scale-100">
                        {emailAddressError && (
                          <span className="text-red-500 text-xs font-bold w-[700px] neon-button-remove">
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
                      className="appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-start" // Added text-center to center the text
                      type="email"
                      placeholder="Email"
                      onChange={handleEmail}
                      autoComplete="off"
                    />
                  </div>
                </form>
                <div className="pt-8">
                  <button
                    disabled={emailAddressError || emailAddress.length === 0}
                    onClick={handleSubmit}
                    className="bg-pallate-Dark_Sky_Blue hover:bg-transparent hover:text-pallate-Dark_Sky_Blue duration-300 w-full text-[20px] hover.text-pallate-Dark_Sky_Blue  text-white font-mono px-10 py-1 rounded-[400px]"
                  >
                    Receive Email
                  </button>
                </div>
              </div>
            </div>

            <div class="relative group">
              <img
                src={img}
                alt="img"
                class="w-[500px]  h-full hidden rounded-r-2xl md:block"
              />

             
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default ForgotPass;
