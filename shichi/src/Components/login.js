import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import { BsEnvelopeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../Static/whitelogowithouttext90.svg";
import logo2 from "../Static/whitelogowithouttext270.svg";
const Login = () => {
    const [emailAddress , setEmailAddress] = useState("");
    const [password , setpassword] = useState("");

    const handleEmail = (event) => {
      setEmailAddress(event.target.value);
    };
    
    const handlePassword = (event) => {
      setpassword(event.target.value);
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem("token");
      try{
        const response = await axios.post("http://185.157.245.99:8000/user/login/", {
          email : emailAddress,
          password : password,
        }, {
          headers: {
            Authorization: `JWT ${token}`,
            'Content-Type': 'application/json',
          },
        });
        navigate("/home");
        console.log(response.data);
      }catch(error){
        console.error(error);
      }
    }
    let navigate = useNavigate();
    
  return (
    <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal">
      <div className="flex items-center justify-center h-screen">
      <img src={logo} alt="My Logo" class="w-6 mt-52 " />
        <div className="max-w-[450px] mima  rounded-2xl h-[320px] justify-center neon-button text-3xl  font-bold font-mono text-white w-full text-center flex flex-col bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20">
         <div >LogIn</div>
          <div className="text-[30px] font-mono font-normal text-center">
           
            
            <form className="w-full max-w-sm pt-8">
              
              
              <div className="flex items-center border-b border-pallate-Dark_Sky_Blue py-2">
                <BsEnvelopeFill className="mr-1" />
                <input
                  id="email"
                  name="email"
                  className="appearance-none text-sm text-white bg-transparent border-none w-full py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-center" // Added text-center to center the text
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
                  className="appearance-none text-sm text-white bg-transparent border-none w-full  py-1 px-2 leading-tight focus:outline-none bg-pallate-celeste_light text-center" // Added text-center to center the text
                  type="password"
                  placeholder="Password"
                  onChange={handlePassword}
                  autoComplete="off"
                />
              </div>
            </form>
            <div>
            <Link to="/forgot" className="hover:bg-transparent hover:text-white hover:font-bold duration-300 m-3 hover:bg-AteneoBlue-400 focus:bg-AteneoBlue-500 inline-block text-sm text-white align-baseline py-2.5 w-full rounded bg-AteneoBlue-500 text-center focus:text-white">
            forgot password?
                </Link>
            </div>
            <div>
              <button onClick={(handleSubmit)} className="bg-pallate-Dark_Sky_Blue hover:bg-transparent hover:text-pallate-Dark_Sky_Blue duration-300 w-full text-[20px] hover.text-pallate-Dark_Sky_Blue  text-white font-mono px-10 py-1 rounded-[400px]">
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="grid"> <img src={logo2} alt="My Logo" class="w-6 mb-16" />
        <img src={logo2} alt="My Logo" class="w-6 mb-16" />
       </div>
      </div>
    </div>
  );
};

export default Login;










