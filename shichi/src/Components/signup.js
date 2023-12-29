// import img from "../Static/Frame.svg";
// import React from "react";
// import { BsPersonFill } from "react-icons/bs";
// import { HiLockClosed } from "react-icons/hi";
// import { BsEnvelopeFill } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import logo from "../Static/whitelogowithouttext90.svg";
// import logo2 from "../Static/whitelogowithouttext270.svg";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// import { BsPatchExclamation } from "react-icons/bs";
// const Signup = () => {
//   const [error, setError] = useState('');
//   const [firstname, setfirstname] = useState("");
//   const [lastname, setlastname] = useState("");
//   const [emailAddress, setEmailAddress] = useState("");
//   const [password, setpassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://87.107.105.201:8000/user/signup/",
//         {
//           email: emailAddress,
//           password: password,
//           first_name: firstname,
//           last_name: lastname,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const token = response.data.token;
//       localStorage.setItem("token", token);
//       //alert("hi")
//       // toast.success("Success Notification !");
//       navigate("/login");
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleEmail = (event) => {
//     if (event.target.value === "") {
//       setEmailAddressError("Please enter email");
//     } else if (!validEmailAddress.test(event.target.value)) {
//       setEmailAddressError("Invalid email");
//     } else {
//       setEmailAddressError(false);
//       setEmailAddress(event.target.value);
//     }
//   };

//   const handlePassword = (event) => {
//     if (event.target.value === "") {
//       setPasswordError("Please enter password");
//     } else {
//       setPasswordError(false);
//     }
//     if (
//       !validPassowrdContainsDigit.test(event.target.value) &&
//       event.target.value !== ""
//     ) {
//       setPasswordContainsDigitError("password must contain digit.");
//     } else {
//       setPasswordContainsDigitError(false);
//     }
//     if (
//       !validPasswordLength.test(event.target.value) &&
//       event.target.value !== ""
//     ) {
//       setPasswordLengthError("password must have 5 to 10 characters");
//     } else {
//       setPasswordLengthError(false);
//     }
//     if (
//       passwordError === false &&
//       !validPasswordLength.test(event.target.value) === false &&
//       passwordContainsDigitError === false &&
//       passwordLengthError === false
//     ) {
//       setpassword(event.target.value);
//     }
//   };
//   const handleFirstname = (event) => {
//     setfirstname(event.target.value);
//   };
//   const handleLastname = (event) => {
//     setlastname(event.target.value);
//   };

//   let navigate = useNavigate();
//   const [isLargeScreen, setIsLargeScreen] = useState(true);

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsLargeScreen(window.innerWidth > 768);
//     };

//     window.addEventListener("resize", checkScreenSize);

//     // اجرا کد اولیه
//     checkScreenSize();

//     return () => {
//       window.removeEventListener("resize", checkScreenSize);
//     };
//   }, []);
//   return (
//     <div>
//       <body>
//         <div class="flex items-center justify-center min-h-screen bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal">
//           <div class="relative flex flex-col  bg-pallate-Dark_Sky_Blue bg-opacity-20  shadow-2xl rounded-2xl md:flex-row md:space-y-0">
//             <div class="flex flex-col justify-center bg-purple-300 bg-opacity-20 rounded-l-2xl border-pallate-Dark_Sky_Blue p-8 md:p-14">
//               <div className="text-[40px] font-mono font-normal text-center text-white">
//                 SignUp
//               </div>

//           <form className="w-full max-w-sm pt-7">
//             <div className="flex items-center border-b border-pallate-Dark_Sky_Blue py-2">
//               <BsPersonFill className="mr-1" />
//               <input
//                 id="firstname"
//                 name="firstname"
//                 className=" appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-center input-focus"
//                 type="text"
//                 placeholder="FirstName"
//                 onChange={handleFirstname}
//                 autoComplete="off"
//               />
//             </div>
//             <div className="flex items-center border-b border-pallate-Dark_Sky_Blue py-2">
//               <BsPersonFill className="mr-1" />
//               <input
//                 id="lastname"
//                 name="lastname"
//                 className="appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-center input-focus"
//                 type="text"
//                 placeholder="LastName"
//                 onChange={handleLastname}
//                 autoComplete="off"
//               />
//             </div>
//             <div className="flex items-center border-b border-pallate-Dark_Sky_Blue py-2">
//               <BsEnvelopeFill className="mr-1" />
//               <input
//                 id="email"
//                 name="email"
//                 className="appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-center input-focus"
//                 type="email"
//                 placeholder="Email"
//                 onChange={handleEmail}
//                 autoComplete="off"
//               />
//             </div>
//             <div className="flex items-center border-b border-pallate-Dark_Sky_Blue py-2">
//               <HiLockClosed className="mr-1" />
//               <input
//                 id="password"
//                 name="password"
//                 className="appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-center input-focus"
//                 type="password"
//                 placeholder="Password"
//                 onChange={handlePassword}
//                 autoComplete="off"
//               />
//             </div>

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
const Signup = () => {
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setpassword] = useState("");

  const [confirmpassword, setConfirmpassword] = useState("");

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

    if (password !== confirmpassword) {
//<<<<<<< feature/v1.1.0/CarPage
      setError("Passwords do not match");
//=======
      // setError('Passwords do not match');
//      notifypass();
//>>>>>>> Develop
      return;
    }

    try {
      const response = await axios.post(
        "http://87.107.105.201:8000/user/signup/",
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

//<<<<<<< feature/v1.1.0/CarPage
      setSuccessMessage("Registration successful!");
//=======
      // setSuccessMessage('Registration successful!');
      notify();
//>>>>>>> Develop
      setTimeout(() => {
        navigate("/login");
      }, 5000);

      console.log(response.data);
    } catch (error) {
      notifyfaild();
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
      setPasswordLengthError("please 5 to 10 characters");
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

  const handleconfirmpassword = (event) => {
    setConfirmpassword(event.target.value);
  };

  const handleFirstname = (event) => {
    setfirstname(event.target.value);
  };
  const handleLastname = (event) => {
    setlastname(event.target.value);
  };
  const notify = () => { toast.success(" SignUp successful !" , {
    position:
    toast.POSITION.TOP_RIGHT, autoClose:3000,})
  };
  const notifyfaild = () =>{ toast.error(" SignUp Faild !" , {
    position:
    toast.POSITION.TOP_RIGHT,})
  };
  const notifypass = () =>{ toast.error("Password Do Not Match !" , {
    position:
    toast.POSITION.TOP_RIGHT,})
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
    // <<<<<<< feature/v1.0.0/newloginsignup
    <div>
      <body>
      <ToastContainer  position="bottom-left" theme="light" pauseOnHover />
        <div class="flex items-center justify-center min-h-screen bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal">
          <div class="relative flex flex-col  bg-pallate-Dark_Sky_Blue bg-opacity-20  shadow-2xl rounded-2xl md:flex-row md:space-y-0">
            <div class="flex flex-col justify-center bg-purple-300 bg-opacity-20 rounded-2xl border-pallate-Dark_Sky_Blue p-8 md:p-14">
              <div className="text-[40px] font-mono font-normal text-center text-white">
                SignUp
              </div>

              <form className="w-72 text-[40px] pt-7 text-white">
                <div className="flex items-center text-[40px] border-b border-pallate-Dark_Sky_Blue py-2">
                  <BsPersonFill className="mr-1" />
                  <input
                    id="firstname"
                    name="firstname"
                    className=" appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-start input-focus"
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
                    className="appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-start input-focus"
                    type="text"
                    placeholder="LastName"
                    onChange={handleLastname}
                    autoComplete="off"
                  />
                </div>
                <div className="flex items-center border-b border-pallate-Dark_Sky_Blue py-2">
                  <BsEnvelopeFill className="mr-1" />
                  <div className="group flex ">
                    <span className="m-[-19px] ml-[-40px] p-[2px] scale-0 rounded-md    absolute bg-pallate-Dark_Sky_Blue opacity-90  text-xs text-black group-hover:scale-100">
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
                    className="appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-start input-focus"
                    type="email"
                    placeholder="Email"
                    onChange={handleEmail}
                    autoComplete="off"
                  />
                </div>

                <div className="flex items-center  border-b border-pallate-Dark_Sky_Blue py-2 ">
                  <HiLockClosed className="mr-1 group" />{" "}
                  <div className="group flex ">
                    <span className="m-[-19px] w-[320px] ml-[-40px] p-[2px] scale-0 rounded-md  absolute bg-pallate-Dark_Sky_Blue opacity-90  text-xs text-black group-hover:scale-100">
                      {passwordError && (
                        <span className="text-red-500 text-xs font-bold w-[700px] neon-button-remove">
                          {passwordError}
                        </span>
                      )}

                      {passwordContainsDigitError && (
                        <span className="text-red-600 text-xs font-bold w-[700px] neon-button-remove">
                          {passwordContainsDigitError}
                        </span>
                      )}

                      {passwordLengthError && (
                        <span className="text-red-600 text-xs font-bold w-[700px] neon-button-remove">
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
                    placeholder="Password"
                    onChange={handlePassword}
                    autoComplete="off"
                  />
                </div>
                <div className="flex items-center  border-b border-pallate-Dark_Sky_Blue py-2 ">
                  <HiLockClosed className="mr-1 group" />{" "}
                  <div className="group flex ">
                    <span className="m-[-19px] w-[320px] ml-[-40px] p-[2px] scale-0 rounded-md  absolute bg-pallate-Dark_Sky_Blue opacity-90  text-xs text-black group-hover:scale-100">
                      {passwordError && (
                        <span className="text-red-600 text-xs font-bold w-[700px] neon-button-remove">
                          {passwordError}
                        </span>
                      )}

                      {passwordContainsDigitError && (
                        <span className="text-red-600 text-xs font-bold w-[700px] neon-button-remove">
                          {passwordContainsDigitError}
                        </span>
                      )}

                      {passwordLengthError && (
                        <span className="text-red-600 text-xs font-bold w-[700px] neon-button-remove">
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
                    placeholder="Confirm Password"
                    onChange={handleconfirmpassword}
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
                )} */}
              </div>

              <div>
                <Link
                  to="/Login"
                  className="hover:bg-transparent hover:text-white hover:font-bold duration-300 m-3 hover:bg-AteneoBlue-400 focus:bg-AteneoBlue-500 inline-block text-sm text-white align-baseline py-2.5 w-full rounded bg-AteneoBlue-500 text-center focus:text-white"
                >
                  Already have an account? Login!
                </Link>
              </div>
              <div>
                {error && <p>{error}</p>}
                <button
                  disabled={
                    emailAddressError ||
                    passwordContainsDigitError ||
                    passwordError ||
                    passwordLengthError ||
                    firstname.length === 0 ||
                    lastname.length === 0 ||
                    emailAddress.length === 0 
                  }
                  onClick={handleSubmit}
                  className="bg-pallate-Dark_Sky_Blue hover:bg-transparent hover:text-pallate-Dark_Sky_Blue duration-300 w-full text-[20px] hover.text-pallate-Dark_Sky_Blue text-white font-mono px-10 py-1 rounded-[400px]"
                >
                  Sign Up
                </button>
              </div>
            </div>
            <div class="relative group">
              <img
                src={img}
                alt="img"
                class="w-[500px]  h-full hidden rounded-r-2xl md:block transform group-hover:-translate-y-12 2xl:group-hover:-translate-y-12 transition-all duration-1000 lg:duration-700 ease-in-out"
                // =======

                //     <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal">
                //       <div className="flex items-center justify-center h-screen">
                //         <img src={logo} alt="My Logo" class="w-6 mt-64 " />
                //         <div className="max-w-[450px] mima rounded-2xl h-[490px] justify-center neon-button text-3xl fnt-bold font-mono text-white w-full text-center flex flex-col bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20">
                //           <div className="text-[30px] font-mono font-normal text-center">
                //             SignUp
                //           </div>

                //           <form className="w-full max-w-sm pt-7">
                //             <div className="flex items-center border-b border-pallate-Dark_Sky_Blue py-2">
                //               <BsPersonFill className="mr-1" />
                //               <input
                //                 id="firstname"
                //                 name="firstname"
                //                 className=" appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-end input-focus"
                //                 type="text"
                //                 placeholder="FirstName"
                //                 onChange={handleFirstname}
                //                 autoComplete="off"
                //               />
                //             </div>
                //             <div className="flex items-center border-b border-pallate-Dark_Sky_Blue py-2">
                //               <BsPersonFill className="mr-1" />
                //               <input
                //                 id="lastname"
                //                 name="lastname"
                //                 className="appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-end input-focus"
                //                 type="text"
                //                 placeholder="LastName"
                //                 onChange={handleLastname}
                //                 autoComplete="off"
                //               />
                //             </div>
                //             <div className="flex items-center border-b border-pallate-Dark_Sky_Blue py-2">
                //               <BsEnvelopeFill className="mr-1" />
                //               <div className="group flex ">
                //                 <span className="w-60 scale-0 rounded-md  h-8  absolute bg-pallate-Dark_Sky_Blue opacity-90  text-xs text-black group-hover:scale-100">
                //                   {emailAddressError && (
                //                     <span className="text-blue-600 text-xs font-bold w-[700px] neon-button-remove">
                //                       {emailAddressError}
                //                     </span>
                //                   )}
                //                 </span>
                //                 {emailAddressError && (
                //                   <BsPatchExclamation className="ml-2 text-red-500" />
                //                 )}
                //               </div>
                //               <input
                //                 id="email"
                //                 name="email"
                //                 className="appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-end input-focus"
                //                 type="email"
                //                 placeholder="Email"
                //                 onChange={handleEmail}
                //                 autoComplete="off"
                //               />
                //             </div>

                //             <div className="flex items-center  border-b border-pallate-Dark_Sky_Blue py-2 ">
                //               <HiLockClosed className="mr-1 group" />{" "}
                //               <div className="group flex ">
                //                 <span className="w-60 scale-0 rounded-md  absolute bg-pallate-Dark_Sky_Blue opacity-90  text-xs text-black group-hover:scale-100">
                //                   {passwordError && (
                //                     <span className="text-blue-600 text-xs font-bold w-[700px] neon-button-remove">
                //                       {passwordError}
                //                     </span>
                //                   )}

                //                   {passwordContainsDigitError && (
                //                     <span className="text-blue-600 text-xs font-bold w-[700px] neon-button-remove">
                //                       {passwordContainsDigitError}
                //                     </span>
                //                   )}

                //                   {passwordLengthError && (
                //                     <span className="text-blue-600 text-xs font-bold w-[700px] neon-button-remove">
                //                       {passwordLengthError}
                //                     </span>
                //                   )}
                //                 </span>
                //                 {passwordError && (
                //                   <BsPatchExclamation className="ml-2 text-red-500" />
                //                 )}
                //                 {passwordContainsDigitError && (
                //                   <BsPatchExclamation className="ml-2 text-red-500" />
                //                 )}
                //                 {passwordLengthError && (
                //                   <BsPatchExclamation className="ml-2 text-red-500" />
                //                 )}
                //               </div>
                //               <input
                //                 id="password"
                //                 name="password"
                //                 className="appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-end input-focus"
                //                 type="password"
                //                 placeholder="Password"
                //                 onChange={handlePassword}
                //                 autoComplete="off"
                // >>>>>>> Develop
              />

              {isLargeScreen && (
                <div class="absolute bottom-10 right-6 p-6 bg-opacity-0 bg-purple-400 group-hover:bg-opacity-20 2xl:group-hover:backdrop-blur-sm drop-shadow-lg md:block rounded-lg group-hover:-translate-y-16 2xl:group-hover:-translate-x-12 transition-all duration-1000 lg:duration-700 ease-in-out">
                  <span class="text-white text-xl opacity-0 group-hover:opacity-100">
                    You can confidently rent out
                    <br />
                    your car or rent the car of your choice. <br />
                    Just trust Shichi and get started.
                  </span>
                </div>
              )}
            </div>
            {/* // <<<<<<< feature/v1.0.0/newloginsignup */}
          </div>
        </div>
      </body>
      {/* // =======

//           </form>
//           <div>
//             <Link
//               to="/Login"
//               className="hover:bg-transparent hover:text-white hover:font-bold duration-300 m-3 hover:bg-AteneoBlue-400 focus:bg-AteneoBlue-500 inline-block text-sm text-white align-baseline py-2.5 w-full rounded bg-AteneoBlue-500 text-center focus:text-white"
//             >
//               Already have an account? Login!
//             </Link>
//           </div>
//           <div>
//             <button

//               disabled={
//                 emailAddressError ||
//                 passwordContainsDigitError ||
//                 passwordError ||
//                 passwordLengthError ||
//                 firstname.length === 0 ||
//                 lastname.length === 0 ||
//                 emailAddress.length === 0 ||
//                 password.length === 0
//               }
//               onClick={handleSubmit}
//               className="bg-pallate-Dark_Sky_Blue hover:bg-transparent hover:text-pallate-Dark_Sky_Blue duration-300 w-full text-[20px] hover.text-pallate-Dark_Sky_Blue text-white font-mono px-10 py-1 rounded-[400px]"
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </body>
//     </div>

//   );
// };

// export default Signup;
//             <ToastContainer />
//           </div>
//         </div>
//         <div className="grid">
//           {" "}
//           <img src={logo2} alt="My Logo" class="w-6 mb-24" />
//           <img src={logo2} alt="My Logo" class="w-6 mb-24" />
//         </div>
       
//       </div>
// >>>>>>> Develop */}
    </div>
  );
};

export default Signup;
