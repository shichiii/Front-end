import React from "react";

import { data } from "./Data";

const Card = () => {
  return (
    <div>
       <h1 className="text-pallate-Dark_Sky_Blue   border-2 border-pallate-Dark_Sky_Blue p-3 rounded-md font-bold text-4xl text-center">
        Result For ....
      </h1>
      <div className="flex flex-wrap justify-center bg-pallate-Dark_Sky_Blue bg-opacity-30 m-4 h-[600px] overflow-y-auto  rounded-md mr-10 ml-10 ">
        {data.map((item, index) => (
          <div key={index} className="p-4 max-w-[450px]">
            <div className="flex rounded-lg h-full border-2 border-pallate-Dark_Sky_Blue bg-pallate-Gunmetal bg-opacity-30 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-white dark:text-white text-lg font-medium">
                  <div>{item.name}</div>
                  <div className="text-pallate-Dark_Sky_Blue text-sm font-medium">
                    {item.category}-{item.price}
                  </div>
                </h2>
              </div>

              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-base text-white dark:text-gray-300">
                  {item.Description}
                </p>
                <img
                  src={item.image}
                  alt="Description of your image"
                  className="mt-3 w-full rounded-lg" // Add the desired width and styling
                />
                <a
                  href="#"
                  className="mt-3 text-black dark:text-white  hover:text-pallate-Gunmetal hover:font-bold inline-flex animate-bounce items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
