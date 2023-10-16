import React from "react";
import Typed from "react-typed";
import car from "../../../Static/Car2.png";
import car1 from "../../../Static/110.png";

const Hero = () => {
  return (
    <div>
      <div className="text-white bg-pallate-Gunmetal flex pt-14 border-2 md:border-none border-pallate-Dark_Sky_Blue">
        <div className="max-w-[1000px]  w-full ">
          <div class="w-full h-auto  ">
            <img
              src={car1}
              alt="Your Image"
              class="object-cover w-full h-full"
            />
          </div>
        </div>
        <div class="md:w-1/2  rounded-2xl m-5 ">
          <div className="justify-center items-center">
            <p class="font-bold text-sm  uppercase">Services</p>
            <p class="text-xs md:text-3xl font-bold">Multimedia products</p>
            <p class="text-[7px] md:text-2xl mb-10 leading-none">
              Choose one of the Topic
              <div className="w-full  md:flex-none lg:flex-none sm:flex-none sx:flex-none">
                <button class=" w-1/2  md:m-2 hover:bg-transparent hover:text-pallate-Dark_Sky_Blue hover:border-2 border-pallate-Dark_Sky_Blue duration-300 text-white font-bold p-2  rounded-2xl">
                  Economy
                </button>
                <button class=" w-1/2  md:m-2 hover:bg-transparent hover:text-pallate-Dark_Sky_Blue hover:border-2 border-pallate-Dark_Sky_Blue duration-300 text-white font-bold p-2  rounded-2xl">
                  Luxury
                </button>
                <button class=" w-1/2 md:m-2 hover:bg-transparent hover:text-pallate-Dark_Sky_Blue hover:border-2 border-pallate-Dark_Sky_Blue duration-300 text-white font-bold p-2  rounded-2xl">
                  Ye Chizi
                </button>
                <button class=" w-1/2 md:m-2 hover:bg-transparent hover:text-pallate-Dark_Sky_Blue hover:border-2 border-pallate-Dark_Sky_Blue duration-300 text-white font-bold p-2  rounded-2xl">
                  Ye chizi
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
