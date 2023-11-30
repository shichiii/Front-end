import React from "react";
import "../../../Styles/for_push/Landing/BackgroundVideo.css";
import logo from "../../../Static/logo.svg";
import { useNavigate } from "react-router-dom";


function App() {

  let navigate = useNavigate();

  

  return (
    <div className="flex flex-col justify-center h-screen ">
      <div className="neon-button text-3xl px-2 font-bold font-mono text-white w-full  rounded-r-[150px]  max-w-[250px] lg:max-w-[450px]  justify-center   h-screen text-center  flex flex-col  bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20">
        <img src={logo} alt="My Logo" class="w-64 h-64 mx-auto " />
        Make Your Driving More Exciting...
        <div className="text-[15px] font-mono font-normal">
          just click to start.
        </div>
        <div className="">
          <button class="m-2 bg-pallate-Dark_Sky_Blue hover:bg-transparent hover:text-pallate-Dark_Sky_Blue duration-300 text-white font-bold py-2 px-4 rounded"
          onClick={()=> navigate("/signup")}
          >
            Sign Up
          </button>

          <button class="bg-transparent hover:bg-pallate-Dark_Sky_Blue text-pallate-Dark_Sky_Blue font-semibold duration-300 hover:text-white py-2 px-4 border border-pallate-Dark_Sky_Blue hover:border-transparent rounded"
            onClick={()=> navigate("/login")}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
