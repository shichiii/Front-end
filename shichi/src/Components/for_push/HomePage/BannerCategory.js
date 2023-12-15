import React from "react";

import img from "../../../Static/rent.svg";
import { useNavigate } from "react-router-dom";
const Features = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // Save the selected category to local storage
    localStorage.setItem("selectedCategory", category);
    
    // Navigate to the advertisement page or any other desired action
    navigate("/advertisement");
  };

  return (
    <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal ">
      <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal min-h-screen flex flex-col justify-center md:px-32 ">
        <div className="flex flex-col md:flex-row items-center space-y-5">
          <div>
            <div className="flex flex-row gap-5 p-5 md:pl-24 ">
              <div>
                <h3
                  onClick={() => handleCategoryClick("Hybrid")}
                  className="font-semibold text-[20px] pb-3 animate-pulse text-pallate-Dark_Sky_Blue  p-2 hover:bg-pallate-Dark_Sky_Blue hover:bg-opacity-20 hover:text-black cursor-pointer rounded-full"
                >
                  Hybrid
                </h3>
                <p className="w-4/5 text-slate-300">
                  Hybrid cars feature a combination of a conventional engine and electric power and come in several sizes depending on your needs and budget.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5  p-5 md:pl-24 ">
              {/* <img src={icon2} alt="icon" /> */}
              <div>
                <h3
                  onClick={() => handleCategoryClick("Electric")}
                  className="font-semibold pb-3 animate-pulse  text-[20px] text-pallate-Dark_Sky_Blue  p-2 hover:bg-pallate-Dark_Sky_Blue hover:bg-opacity-20 hover:text-black cursor-pointer rounded-full"
                >
                  Electric
                </h3>
                <p className=" w-4/5 text-slate-300">
                  Electric cars feature entirely electric motors, and come in a few sizes with different features depending on your needs and budget.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5 p-5 md:pl-24 ">
              {/* <img src={icon3} alt="icon" /> */}
              <div>
                <h3
                  onClick={() => handleCategoryClick("Truck")}
                  className="font-semibold pb-3 animate-pulse text-[20px] text-pallate-Dark_Sky_Blue  p-2 hover:bg-pallate-Dark_Sky_Blue hover:bg-opacity-20 hover:text-black cursor-pointer rounded-full"
                >
                  Truck
                </h3>
                <p className=" w-4/5 text-slate-300">
                  A "truck car" typically refers to a type of vehicle that combines characteristics of both a truck and a car. In many cases, people might use the term "truck" to refer specifically to larger vehicles designed for carrying goods, while "car" generally refers to smaller vehicles primarily used for personal transportation.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5 p-5 md:pl-24 ">
              {/* <img src={icon3} alt="icon" /> */}
              <div>
                <h3
                  onClick={() => handleCategoryClick("OffRoad")}
                  className="font-semibold pb-3 animate-pulse text-[20px] text-pallate-Dark_Sky_Blue  p-2 hover:bg-pallate-Dark_Sky_Blue hover:bg-opacity-20 hover:text-black cursor-pointer rounded-full"
                >
                  OffRoad
                </h3>
                <p className=" w-4/5 text-slate-300">
                  An "off-road car" refers to a type of vehicle designed and equipped for driving on rough, uneven, and unpaved surfaces rather than on conventional roads. Off-road cars are built with features that enhance their ability to navigate challenging terrains such as dirt trails, rocky paths, sand dunes, or mud.
                </p>
              </div>
            </div>
            {/* ... (similar changes for other categories) ... */}
          </div>
          <div className="mt-24">
            <img className="rounded-md" src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
