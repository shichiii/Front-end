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
import { BsPatchExclamation } from "react-icons/bs";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
const Login = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setpassword] = useState("");
  const [emailAddressError, setEmailAddressError] = useState(false);
  const {authTokens, setAuthTokens} = useContext(AuthContext)

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

  const handlePassword = (event) => {
    setpassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://185.157.245.99:8000/user/login/",
        {
          email: emailAddress,
          password: password,
        },
        {
          headers: {
            Authorization: `JWT ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setAuthTokens(response.data.access);
      navigate("/home");

      console.log(response.data);
      // console.log(localStorage.setItem('accessTokenCustomer',res.data.access));
    } catch (error) {
      console.error(error);
    }
  };
  let navigate = useNavigate();

  return (
    <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal">
      <div className="flex items-center justify-center h-screen">
        <img src={logo} alt="My Logo" class="w-6 mt-52 " />
        <div className="max-w-[450px] mima  rounded-2xl h-[420px] justify-center neon-button text-3xl  font-bold font-mono text-white w-full text-center flex flex-col bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20">
          <div>LogIn</div>
          <div className="text-[30px] font-mono font-normal text-center">
            <form className="w-full max-w-sm pt-8">
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
                  className="appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-end" // Added text-center to center the text
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
                  className="appearance-none text-sm text-white bg-transparent border-none w-full  py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-end" // Added text-center to center the text
                  type="password"
                  placeholder="Password"
                  onChange={handlePassword}
                  autoComplete="off"
                />
              </div>
            </form>
            <div>
              <Link
                to="/forgot"
                className="hover:bg-transparent hover:text-white hover:font-bold duration-300 m-3 hover:bg-AteneoBlue-400 focus:bg-AteneoBlue-500 inline-block text-sm text-white align-baseline py-2.5 w-full rounded bg-AteneoBlue-500 text-center focus:text-white"
              >
                forgot password?
              </Link>

              <button
                disabled={
                  emailAddressError ||
                  emailAddress.length === 0 ||
                  password.length === 0
                }
                onClick={handleSubmit}
                className="bg-pallate-Dark_Sky_Blue hover:bg-transparent hover:text-pallate-Dark_Sky_Blue duration-300 w-full text-[20px] hover.text-pallate-Dark_Sky_Blue  text-white font-mono px-10 py-1 rounded-[400px]"
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="grid">
          {" "}
          <img src={logo2} alt="My Logo" class="w-6 mb-16" />
          <img src={logo2} alt="My Logo" class="w-6 mb-16" />
        </div>
      </div>
    </div>
  );
};

export default Login;
