import React from "react";
import Typed from "react-typed";
import car from "../../../Static/Car2.png";
import car1 from "../../../Static/110.png";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const handle = () => {
  
    navigate("/advertisement");
  };
  let navigate = useNavigate();
  return (
    <div>
      <div  className="text-white bg-pallate-Gunmetal flex pt-3 border-2 md:border-none border-pallate-Dark_Sky_Blue ">
        <div className=" w-full ">
          <div class="  ">
            <img
              src={car1}
              alt="Your Image"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
        <div class="md:w-1/2  rounded-2xl m-10 ">
          <div className="justify-center items-center">
            <p class="text-xs md:text-3xl font-bold  uppercase">Services</p>
            <p class="text-xs md:text-3xl font-bold">Multimedia products</p>
            <p class="text-[7px] md:text-2xl mb-10 leading-none">
              Rent The Best Quality Car's With Us.
              Alwase Choose The Best Car From Our Local Stores or Order it remotely at the best price for you and get best quality cars for as long as you like
              <div className="w-full  md:flex-none lg:flex-none sm:flex-none sx:flex-none">
               
                <button onClick={handle}  class=" mt-10 bg-pallate-Dark_Sky_Blue bg-opacity-20 border-1 animate-bounce hover:bg-transparent hover:text-pallate-Dark_Sky_Blue hover:border-2 border-pallate-Dark_Sky_Blue duration-300 text-white font-bold p-2  rounded-2xl">
                  go to Addvertisment Page
                </button>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
