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
import { Alert, AlertTitle } from "@material-ui/lab";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BsPatchExclamation } from "react-icons/bs";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const Login = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setpassword] = useState("");
  const [emailAddressError, setEmailAddressError] = useState(false);

  const { authTokens, setAuthTokens } = useContext(AuthContext);

  const notify = () => {
    toast.success(" Login successful !", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };
  const notifyfaild = () => {
    toast.error(" Login Faild !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
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
  const token = localStorage.getItem("token");
  const handlePassword = (event) => {
    setpassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://87.107.54.89:8000/user/login/",
        {
          email: emailAddress,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // <<<<<<< feature/v1.0.0/HistoryForUser
      // const token = response.data.token;
      // localStorage.setItem("token", token);
      // navigate("/home");
      // console.log(response.data);
      // console.log(token);
      /*// =======
// // <<<<<<< feature/v1.0.0/NewAddAdvertise
// //       const token = response.data.access;
// //       localStorage.setItem("token", token);
// // =======

// //       navigate("/home");
// //       console.log(response.data);

//       // console.log(response.data);
//       // console.log('login token',token);
//       // console.log(localStorage.setItem('accessTokenCustomer',res.data.access));

// >>>>>>> Develop*/

      //       <<<<<<< feature/v1.0.0/overallfix
      setAuthTokens(response.data.access);
      notify();
      console.log("aloooooooooooooooooooooooooooooooooooooooo", token)
      // setSuccessMessage('Login successful!');
      setTimeout(() => {
        navigate("/home");
      }, 3000);
      // =======
      //       setAuthTokens(response.data.access);

      //       navigate("/home");
      // >>>>>>> Develop
    } catch (error) {
      notifyfaild();
      setErrorMessage("Login Failed!");
      console.error(error);
    }
  };
  let navigate = useNavigate();
  // <<<<<<< feature/v1.0.0/newloginsignup
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
        <ToastContainer position="bottom-left" theme="light" pauseOnHover />
        <div class="flex items-center justify-center min-h-screen bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal">
          <div class="relative flex flex-col  bg-transparent  md:bg-pallate-Dark_Sky_Blue md:bg-opacity-20  shadow-2xl rounded-2xl md:flex-row md:space-y-0">
            <div class="flex flex-col justify-center   bg-pallate-Dark_Sky_Blue md:bg-opacity-20 md:bg-purple-300 bg-opacity-20 rounded-2xl border-pallate-Dark_Sky_Blue p-8 md:p-14">
              <div className="text-[40px] font-mono font-normal text-center text-white">
                LogIn
              </div>

              <div className="text-[30px] text-white font-mono font-normal text-center">
                <form className="w-full max-w-sm pt-8">
                  <div className="flex items-center border-b border-pallate-Dark_Sky_Blue py-2">
                    <BsEnvelopeFill className="mr-1" />
                    <div className="group flex ">
                      <span className="m-[-19px] ml-[-40px] p-[2px] scale-0 rounded-md   absolute bg-pallate-Dark_Sky_Blue opacity-90  text-xs text-black group-hover:scale-100">
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
                  <div className="flex items-center border-b border-pallate-Dark_Sky_Blue py-2">
                    <HiLockClosed className="mr-1" />
                    <input
                      id="password"
                      name="password"
                      className="appearance-none text-sm text-white bg-transparent border-none w-full  py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-start" // Added text-center to center the text
                      type="password"
                      placeholder="Password"
                      onChange={handlePassword}
                      autoComplete="off"
                    />
                  </div>
                </form>
                <div>
                  {/* {successMessage && (
                  <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    {successMessage}
                  </Alert>
                )}
                {errorMessage && (
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {errorMessage}
                  </Alert>
                )} */}
                </div>
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

            <div class="relative group">
              <img
                src={img}
                alt="img"
                class="w-[500px]  h-full hidden rounded-r-2xl md:block transform group-hover:-translate-y-5 2xl:group-hover:-translate-y-5 transition-all duration-1000 lg:duration-700 ease-in-out"
              />

              {isLargeScreen && (
                <div class="absolute bottom-10 right-6 p-6 bg-opacity-0 bg-purple-400 group-hover:bg-opacity-20 2xl:group-hover:backdrop-blur-sm  drop-shadow-lg md:block rounded-lg group-hover:-translate-y-16 2xl:group-hover:-translate-x-12 transition-all duration-1000 lg:duration-700 ease-in-out">
                  <span class="text-white text-xl opacity-0 group-hover:opacity-100">
                    You can confidently rent out
                    <br />
                    your car or rent the car of your choice. <br />
                    Just trust Shichi and get started.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </body>
      {/* // ======= */}

      {/* //   return (
//     <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal">
//       <div className="flex items-center justify-center h-screen">
//         <img src={logo} alt="My Logo" class="w-6 mt-52 " />
//         <div className="max-w-[450px] mima  rounded-2xl h-[420px] justify-center neon-button text-3xl  font-bold font-mono text-white w-full text-center flex flex-col bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20">
//           <div>LogIn</div>
//           <div className="text-[30px] font-mono font-normal text-center">
//             <form className="w-full max-w-sm pt-8">
//               <div className="flex items-center border-b border-pallate-Dark_Sky_Blue py-2">
//                 <BsEnvelopeFill className="mr-1" />
//                 <div className="group flex ">
//                   <span className="w-60 scale-0 rounded-md  h-8  absolute bg-pallate-Dark_Sky_Blue opacity-90  text-xs text-black group-hover:scale-100">
//                     {emailAddressError && (
//                       <span className="text-blue-600 text-xs font-bold w-[700px] neon-button-remove">
//                         {emailAddressError}
//                       </span>
//                     )}
//                   </span>
//                   {emailAddressError && (
//                     <BsPatchExclamation className="ml-2 text-red-500" />
//                   )}
//                 </div>
//                 <input
//                   id="email"
//                   name="email"
//                   className="appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-end" // Added text-center to center the text
//                   type="email"
//                   placeholder="Email"
//                   onChange={handleEmail}
//                   autoComplete="off"
//                 />
//               </div>
//               <div className="flex items-center border-b border-pallate-Dark_Sky_Blue py-2">
//                 <HiLockClosed className="mr-1" />
//                 <input
//                   id="password"
//                   name="password"
//                   className="appearance-none text-sm text-white bg-transparent border-none w-full  py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-end" // Added text-center to center the text
//                   type="password"
//                   placeholder="Password"
//                   onChange={handlePassword}
//                   autoComplete="off"
//                 />
//               </div>
//             </form>
//             <div>
//               <Link
//                 to="/forgot"
//                 className="hover:bg-transparent hover:text-white hover:font-bold duration-300 m-3 hover:bg-AteneoBlue-400 focus:bg-AteneoBlue-500 inline-block text-sm text-white align-baseline py-2.5 w-full rounded bg-AteneoBlue-500 text-center focus:text-white"
//               >
//                 forgot password?
//               </Link>

//               <button
//                 disabled={
//                   emailAddressError ||
//                   emailAddress.length === 0 ||
//                   password.length === 0
//                 }
//                 onClick={handleSubmit}
//                 className="bg-pallate-Dark_Sky_Blue hover:bg-transparent hover:text-pallate-Dark_Sky_Blue duration-300 w-full text-[20px] hover.text-pallate-Dark_Sky_Blue  text-white font-mono px-10 py-1 rounded-[400px]"
//               >
//                 Login
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="grid">
//           {" "}
//           <img src={logo2} alt="My Logo" class="w-6 mb-16" />
//           <img src={logo2} alt="My Logo" class="w-6 mb-16" />
//         </div>
//       </div>
// >>>>>>> Develop */}
    </div>
  );
};

export default Login;
