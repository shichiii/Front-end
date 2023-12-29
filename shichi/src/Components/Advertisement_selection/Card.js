import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Assuming your backend API endpoint

const Card = ({
  search,
  searchedCars,
  lowerPrice,
  upperPrice,
  carCategory,
  carColor,
  startDate,
  endDate,
  state,
}) => {
  const API_ENDPOINT = `http://87.107.105.201:8000/advertisement/filter/?${

    carCategory ? `&car_category=${carCategory}` : ""
  }${carColor ? `&car_color=${carColor}` : ""}${
    startDate ? `&start_date=${startDate}` : ""
  }${endDate ? `&end_date=${endDate}` : ""}${state ? `&state=${state}` : ""}${
    lowerPrice ? `&lower_price=${lowerPrice}` : ""
  }${upperPrice ? `&upper_price=${upperPrice}` : ""}`;
/*
    search ? `ordering=${search}` : ""
  }${carCategory ? `&car_category=${carCategory}` : ""}${
    carColor ? `&car_color=${carColor}` : ""
  }${startDate ? `&start_date=${startDate}` : ""}${
    endDate ? `&end_date=${endDate}` : ""
  }${state ? `&state=${state}` : ""}${
    category ? `&car_category=${category}` : ""
  }${lowerPrice ? `&lower_price=${lowerPrice}` : ""}${
    upperPrice ? `&upper_price=${upperPrice}` : ""
  }`;

*/
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    // Fetch data from the backend when the component mounts
    if (
      lowerPrice ||
      upperPrice ||
      carCategory ||
      carColor ||
      startDate ||
      endDate ||
      state
    ) {
      axios
        .get(API_ENDPOINT)
        .then((response) => {
          setCardData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [
    lowerPrice,
    upperPrice,
    carCategory,
    carColor,
    startDate,
    endDate,
    state,
  ]); // Empty dependency array means this effect runs once when the component mounts

  console.log("searchedCars: ", searchedCars);

  return (
    <div>
      <h1 className="text-pallate-Dark_Sky_Blue border-2 border-pallate-Dark_Sky_Blue p-3 rounded-md font-bold text-4xl text-center">
        Result For
      </h1>
      <div className="flex flex-wrap justify-center bg-pallate-Dark_Sky_Blue bg-opacity-30 m-4 h-[600px] overflow-y-auto rounded-md mr-10 ml-10">
        {search.length > 2
          ? searchedCars.map((item, index) => (
              <div key={index} className="p-4 max-w-[450px]">
                <div className="flex rounded-lg h-96 border-2 border-pallate-Dark_Sky_Blue bg-pallate-Gunmetal bg-opacity-30 p-8 flex-col w-80">
                  <div className="flex items-center mb-3">
                    <div className=" w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9-9-18 3 9H2"></path>
                      </svg>
                    </div>
                    <h2 className="text-white dark:text-white text-lg font-medium">
                      <div>{item.car_name}</div>
                      <div className="text-pallate-Dark_Sky_Blue text-sm font-medium">
                        {item.car_category}-{item.price} $
                      </div>
                    </h2>
                  </div>

                  <div className="flex flex-col justify-between flex-grow">
                    <p className="leading-relaxed text-base text-white dark:text-gray-300">
                      {item.description}
                    </p>
                    <img
                      src={item.car_image1}
                      // alt="Description of your image"
                      className="mt-3 w-full rounded-lg h-52 object-cover" // Add the desired width and styling
                    />
                    <Link
                      to={`/Car/${item.id}`}
                      className="mt-3 text-black dark:text-white
                  hover:text-pallate-Gunmetal hover:font-bold inline-flex
                  animate-bounce items-center"
                    >
                      {" "}
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          : cardData.map((item, index) => (
              <div key={index} className="p-4 max-w-[450px]">
                <div className="flex rounded-lg h-96 border-2 border-pallate-Dark_Sky_Blue bg-pallate-Gunmetal bg-opacity-30 p-8 flex-col w-80">
                  <div className="flex items-center mb-3">
                    <div className=" w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9-9-18 3 9H2"></path>
                      </svg>
                    </div>
                    <h2 className="text-white dark:text-white text-lg font-medium">
                      <div>{item.car_name}</div>
                      <div className="text-pallate-Dark_Sky_Blue text-sm font-medium">
                        {item.car_category}-{item.price} $
                      </div>
                    </h2>
                  </div>

                  <div className="flex flex-col justify-between flex-grow">
                    <p className="leading-relaxed text-base text-white dark:text-gray-300">
                      {item.description}
                    </p>
                    <img
                      src={item.car_image1}
                      // alt="Description of your image"
                      className="mt-3 w-full rounded-lg h-52 object-cover" // Add the desired width and styling
                    />
                    <Link
                      to={`/Car/${item.id}`}
                      className="mt-3 text-black dark:text-white
                  hover:text-pallate-Gunmetal hover:font-bold inline-flex

                  animate-bounce items-center"
                    >
                      {" "}
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
//=======
                   items-center"
                >
                  {" "}
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
//>>>>>>> Develop
              </div>
            ))}
      </div>
    </div>
  );
};

export default Card;
