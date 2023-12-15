import React from "react";
import img from "../../../Static/date.svg";
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
    <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal">
      <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal min-h-screen flex flex-col justify-center md:px-32">
        <div className="flex flex-col md:flex-row items-center space-y-5">
          <div className=" mt-5">
            <img className=" rounded-md" src={img} alt="" />
          </div>
          <div>
            <div>
              <h1 className=" text-4xl font-playFair font-medium text-center">
                Select Your Category
              </h1>
            </div>

            <div className="flex flex-row gap-5 p-5 md:pl-24 ">
              <div>
                <h3
                  onClick={() => handleCategoryClick("Convertible")}
                  className=" text-[20px] font-semibold pb-3 animate-pulse text-pallate-Dark_Sky_Blue  p-2 hover:bg-pallate-Dark_Sky_Blue hover:bg-opacity-20 hover:text-black cursor-pointer rounded-full"
                >
                  Convertible
                </h3>
                <p className=" w-4/5 text-slate-300">
                  Convertible cars are 2-door sports coupes with retractable roofs. Some rental car companies may offer different levels of convertible car performance and luxury.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5 p-5 md:pl-24 ">
              <div>
                <h3
                  onClick={() => handleCategoryClick("Minivans")}
                  className=" text-[20px] font-semibold pb-3 animate-pulse text-pallate-Dark_Sky_Blue  p-2 hover:bg-pallate-Dark_Sky_Blue hover:bg-opacity-20 hover:text-black cursor-pointer rounded-full"
                >
                  Minivans
                </h3>
                <p className=" w-4/5 text-slate-300">
                  Minivans can comfortably seat 7 or 8 passengers depending on the model, and are perfect for long road trips with several people.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5 p-5 md:pl-24 ">
              <div>
                <h3
                  onClick={() => handleCategoryClick("Passenger vans")}
                  className=" text-[20px] font-semibold pb-3 animate-pulse text-pallate-Dark_Sky_Blue  p-2 hover:bg-pallate-Dark_Sky_Blue hover:bg-opacity-20 hover:text-black cursor-pointer rounded-full"
                >
                  Passenger vans
                </h3>
                <p className=" w-4/5 text-slate-300">
                  Passenger vans are full-sized vans that can seat large groups of more than 8 passengers. Some rental car companies will also offer cargo vans that have room for hauling bigger items instead of seats for transporting people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
