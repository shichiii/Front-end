import React from "react";
import img from "../../../Static/home.svg";
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
      <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal min-h-screen flex flex-col justify-center md:px-32 ">
        <div className="flex flex-col md:flex-row items-center space-y-5">
          <div className=" mt-24">
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
                  onClick={() => handleCategoryClick("Economy")}
                  className=" text-[20px] font-semibold pb-3 animate-pulse text-pallate-Dark_Sky_Blue p-2 hover:bg-pallate-Dark_Sky_Blue hover:bg-opacity-20 hover:text-black cursor-pointer rounded-full"
                >
                  Economy
                </h3>
                <p className=" w-4/5 text-slate-300">
                  Economy cars typically have low rates and great fuel efficiency, and are slightly smaller than compact cars.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5 p-5 md:pl-24 ">
              <div>
                <h3
                  onClick={() => handleCategoryClick("Compact")}
                  className=" text-[20px] font-semibold pb-3 animate-pulse text-pallate-Dark_Sky_Blue  p-2 hover:bg-pallate-Dark_Sky_Blue hover:bg-opacity-20 hover:text-black cursor-pointer rounded-full"
                >
                  Compact
                </h3>
                <p className=" w-4/5 text-slate-300">
                  Compact cars feature low rates and great fuel efficiency, with slightly more room than economy cars.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5 p-5 md:pl-24 ">
              <div>
                <h3
                  onClick={() => handleCategoryClick("Luxury")}
                  className=" text-[20px] font-semibold pb-3 animate-pulse text-pallate-Dark_Sky_Blue  p-2 hover:bg-pallate-Dark_Sky_Blue hover:bg-opacity-20 hover:text-black cursor-pointer rounded-full"
                >
                  Luxury
                </h3>
                <p className=" w-4/5 text-slate-300">
                  Luxury cars are typically four-door sedans with high-end performance engines and luxury interiors that comfortably seat 5 passengers with luggage. However, some rental companies will categorize luxury SUVs, sports sedans, and executive cars in the luxury cars category along with regular luxury sedans.
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
