import React from "react";
import Typed from "react-typed";
import car from "../../../Static/ar2-removebg.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  let navigate = useNavigate();
  const handleclick = (event) =>{
    navigate("/advertise");
  }
  return (
    <div className="text-white bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal pt-32 baghbaghooo">
      <div className="max-w-[800px]  w-full  mx-auto text-center flex flex-col justify-center">
        {/* <p className="text-[#00df9a] font-bold p-2">
          Welcome.
        </p> */}
        <h1 className="md:text-5xl sm:text-4xl text-4xl font-bold md:py-6">
          DRIVE YOUR DREAMS.
        </h1>
        <div className="flex justify-center items-center border-2 rounded-2xl border-pallate-Dark_Sky_Blue">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4"></p>
          <Typed
            className="md:text-3xl sm:text-3xl text-xl font-bold md:pl-4 pl-2"
            strings={["Rent The Perfect Car Today."]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          <img className="h-28 "id="tours-in-Seasonal" src={car} />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          "You can also rent out your own personal car."
        </p>
        <button onClick={handleclick} className="bg-pallate-Dark_Sky_Blue w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
      
      

        
    
    </div>
  );
};

export default Hero;
