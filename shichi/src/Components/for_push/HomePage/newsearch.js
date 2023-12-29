import React, { useState } from "react";
import img from "../../../Static/search.svg";
import { Navigate , Navigation } from "react-router";
import { useNavigate } from "react-router-dom";

const Newsearch = () => {
  let navigate = useNavigate();
  const [search, setSearch] = useState()
  function search_new() {
    localStorage.setItem("search", search)
    navigate("/Advertisement")
  }

  return (
    <div>
      <div
        id="to-search"
        class="flex  flex-col items-center justify-center bg-pallate-Gunmetal"
      >
        <div>
          <img class="h-[249px] w-[473px]" src={img} alt="google Logo" />
        </div>

        <div class="md:w-[584px] mx-auto mt-7 flex w-[92%] items-center rounded-full border hover:shadow-md cursor-pointer">
          <div class="pl-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                onClick={search_new}
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            class="w-full bg-transparent rounded-full py-[14px] pl-4 outline-none"
          />
          <div class="pr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white">
              You can search for the car model you want.
            </h1>
            <p className="text-white text-center">
              Sign up for our newsletter and stay up to date with the latest car
              models and news.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsearch;
