import React from "react";
import Typed from "react-typed";
import car from "../../../Static/Car2.png";
import img from "../../../Static/110.png";
import { useNavigate } from "react-router-dom";
import economic from "../../../Static/economic.svg";
import minivan from "../../../Static/minvan.svg";
import affroad from "../../../Static/affroad.svg";
import truck from "../../../Static/truck.svg";
import convertible from "../../../Static/convertible.svg";
import compact from "../../../Static/compact.svg";
import electric from "../../../Static/electric.svg";
import hybrid from "../../../Static/hybrid.svg";
import passenger from "../../../Static/passenger.svg";
import luxury from "../../../Static/luxury.svg";
const Hero = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // Save the selected category to local storage
    localStorage.setItem("selectedCategory", category);
    
    // Navigate to the advertisement page or any other desired action
    navigate("/advertisement");
  };
  
  return (
    <div>
      <div id="carcategory" class="bg-pallate-Gunmetal min-h-screen py-12 flex items-center justify-center">
        <div class="flex  justify-center flex-wrap  gap-6 p-10">
          <div class="bg-pallate-Dark_Sky_Blue bg-opacity-20 text-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <div class="p-1 bg-blue-200"></div>
            <div class="p-8">
              <h2 class="text-3xl font-bold  mb-4">Economy</h2>
              
              <img className="rounded-md w-80 h-48" src={economic} alt="" />
             
              <ul class="text-sm text-gray-200 mb-6">
                <li class="mb-2 flex items-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Affordable price
                </li>
                <li class="mb-2 flex items-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  More diverse cars
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Versatility for use everywhere
                </li>
              </ul>
            </div>
            <div class="p-4">
              <button  onClick={() => handleCategoryClick("Economy")} class="w-full bg-pallate-Dark_Sky_Blue text-white rounded-full px-4 py-2 hover:bg-blue-200 hover:animate-pulse hover:text-black focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                Show Cars
              </button>
            </div>
          </div>

          <div class="bg-pallate-Dark_Sky_Blue bg-opacity-20 text-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <div class="p-1 bg-green-200"></div>
            <div class="p-8">
              <h2 class="text-3xl font-bold  mb-4">Compact</h2>
              
              <img className="rounded-md w-80 h-48" src={compact} alt="" />
              
              <ul class="text-sm text-gray-200 mb-6">
                <li class="mb-2 flex items-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Fuel Efficiency
                </li>
                <li class="mb-2 flex items-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Maneuverability
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Parking Convenience
                </li>
              </ul>
            </div>
            <div class="p-4">
              <button  onClick={() => handleCategoryClick("Compact")} class="w-full bg-pallate-Dark_Sky_Blue text-white rounded-full px-4 py-2 hover:bg-green-200 hover:animate-pulse hover:text-black focus:outline-none focus:shadow-outline-green active:bg-green-800">
                Show Cars
              </button>
            </div>
          </div>

          <div class="bg-pallate-Dark_Sky_Blue bg-opacity-20 text-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <div class="p-1 bg-purple-200"></div>
            <div class="p-8">
              <h2 class="text-3xl font-bold  mb-4">Luxury</h2>
             
              <img className="rounded-md w-80 h-48" src={luxury} alt="" />
              
              <ul class="text-sm text-gray-200 mb-6">
                <li class="mb-2 flex items-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  High-Performance Engines
                </li>
                <li class="mb-2 flex items-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Exceptional Comfort
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Customization Options
                </li>
              </ul>
            </div>
            <div class="p-4">
              <button  onClick={() => handleCategoryClick("Luxury")} class="w-full bg-pallate-Dark_Sky_Blue text-white rounded-full px-4 py-2  hover:bg-purple-200 hover:animate-pulse hover:text-black focus:outline-none focus:shadow-outline-purple active:bg-purple-800">
                Show Cars
              </button>
            </div>
          </div>
          <div class="bg-pallate-Dark_Sky_Blue bg-opacity-20 text-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
        <div class="p-1 bg-blue-200"></div>
        <div class="p-8">
          <h2 class="text-3xl font-bold  mb-4">Hybrid</h2>
          
          <img className="rounded-md w-80 h-48" src={hybrid} alt="" />
          
          <ul class="text-sm text-gray-200 mb-6">
            <li class="mb-2 flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Fuel Efficiency
            </li>
            <li class="mb-2 flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Automatic Start/Stop
            </li>
            <li class="flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Quiet Operation
            </li>
          </ul>
        </div>
        <div class="p-4">
          <button  onClick={() => handleCategoryClick("Hybrid")} class="w-full bg-pallate-Dark_Sky_Blue text-white rounded-full px-4 py-2 hover:bg-blue-200 hover:animate-pulse hover:text-black focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Show Cars
          </button>
        </div>
      </div>

      <div class="bg-pallate-Dark_Sky_Blue bg-opacity-20 text-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
        <div class="p-1 bg-green-200"></div>
        <div class="p-8">
          <h2 class="text-3xl font-bold mb-4">Electric</h2>
       
          <img className="rounded-md w-80 h-48" src={electric} alt="" />
         
          <ul class="text-sm text-gray-200 mb-6">
            <li class="mb-2 flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Zero Emissions
            </li>
            <li class="mb-2 flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Low Operating Costs
            </li>
            <li class="flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Home Charging
            </li>
          </ul>
        </div>
        <div class="p-4">
          <button   onClick={() => handleCategoryClick("Electric")} class="w-full bg-pallate-Dark_Sky_Blue text-white rounded-full px-4 py-2 hover:bg-green-200 hover:animate-pulse hover:text-black focus:outline-none focus:shadow-outline-green active:bg-green-800">
            Show Cars
          </button>
        </div>
      </div>

      <div class="bg-pallate-Dark_Sky_Blue bg-opacity-20 text-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
        <div class="p-1 bg-purple-200"></div>
        <div class="p-8">
          <h2 class="text-3xl font-bold mb-4">Truck</h2>
         
          <img className="rounded-md w-80 h-48" src={truck} alt="" />
         
          <ul class="text-sm text-gray-200 mb-6">
            <li class="mb-2 flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Cargo Space
            </li>
            <li class="mb-2 flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http

://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Passenger Seating
            </li>
            <li class="flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Off-Road Performance
            </li>
          </ul>
        </div>
        <div class="p-4">
          <button  onClick={() => handleCategoryClick("Truck")} class="w-full bg-pallate-Dark_Sky_Blue text-white rounded-full px-4 py-2 hover:bg-purple-200 hover:animate-pulse hover:text-black focus:outline-none focus:shadow-outline-purple active:bg-purple-800">
            Show Cars
          </button>
        </div>
      </div>

      <div class="bg-pallate-Dark_Sky_Blue bg-opacity-20 text-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
        <div class="p-1 bg-blue-200"></div>
        <div class="p-8">
          <h2 class="text-3xl font-bold  mb-4">OffRoad</h2>
         
          <img className="rounded-md w-80 h-48" src={affroad} alt="" />
          
          <ul class="text-sm text-gray-200 mb-6">
            <li class="mb-2 flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Robust Suspension Systems
            </li>
            <li class="mb-2 flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              High Ground Clearance
            </li>
            <li class="flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Powerful Engines
            </li>
          </ul>
        </div>
        <div class="p-4">
          <button onClick={() => handleCategoryClick("OffRoad")} class="w-full bg-pallate-Dark_Sky_Blue text-white rounded-full px-4 py-2 hover:bg-blue-200 hover:animate-pulse hover:text-black focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Show Cars
          </button>
        </div>
      </div>

      <div class="bg-pallate-Dark_Sky_Blue bg-opacity-20 text-white rounded-lg overflow-hidden shadow-lg  transition-transform transform hover:scale-105">
        <div class="p-1 bg-green-200"></div>
        <div class="p-8">
          <h2 class="text-3xl font-bold  mb-4">Covertible</h2>
         
          <img className="rounded-md w-80 h-48" src={convertible} alt="" />
         
          <ul class="text-sm text-gray-200 mb-6">
            <li class="mb-2 flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Retractable Roof
            </li>
            <li class="mb-2 flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Versatility
            </li>
            <li class="flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Performance
            </li>
          </ul>
        </div>
        <div class="p-4">
          <button   onClick={() => handleCategoryClick("Convertible")} class="w-full bg-pallate-Dark_Sky_Blue text-white rounded-full px-4 py-2 hover:bg-green-200 hover:animate-pulse hover:text-black focus:outline-none focus:shadow-outline-green active:bg-green-800">
            Show Cars
          </button>
        </div>
      </div>

      <div class="bg-pallate-Dark_Sky_Blue bg-opacity-20 text-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
        <div class="p-1 bg-purple-200"></div>
        <div class="p-8">
          <h2 class="text-3xl font-bold  mb-4">Mini-van</h2>
          
          <img className="rounded-md w-80 h-48" src={minivan} alt="" />
          
          <ul class="text-sm text-gray-200 mb-6">
            <li class="mb-2 flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Spacious Interior
            </li>
            <li class="mb-2 flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http

://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Flexible Seating
            </li>
            <li class="flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Safety Features
            </li>
          </ul>
        </div>
        <div class="p-4">
          <button  onClick={() => handleCategoryClick("Minivans")} class="w-full bg-pallate-Dark_Sky_Blue text-white rounded-full px-4 py-2 hover:bg-purple-200 hover:animate-pulse hover:text-black focus:outline-none focus:shadow-outline-purple active:bg-purple-800">
            Show Cars
          </button>
        </div>
      </div>

      <div class="bg-pallate-Dark_Sky_Blue bg-opacity-20 text-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
        <div class="p-1 bg-blue-200"></div>
        <div class="p-8">
          <h2 class="text-3xl font-bold  mb-4">Passenger-van</h2>
      
          <img className="rounded-md w-80 h-48" src={passenger} alt="" />
         
          <ul class="text-sm text-gray-200 mb-6">
            <li class="mb-2 flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Advanced Safety Features
            </li>
            <li class="mb-2 flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Infotainment Systems
            </li>
            <li class="flex items-center">
              <svg
                class="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Economical Maintenance
            </li>
          </ul>
        </div>
        <div class="p-4">
          <button    onClick={() => handleCategoryClick("Passenger vans")} class="w-full bg-pallate-Dark_Sky_Blue text-white rounded-full px-4 py-2 hover:bg-blue-200 hover:animate-pulse hover:text-black focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Show Cars
          </button>
        </div>
      </div>

        </div>
        
      </div>

        
      
    </div>
  );
};

export default Hero;
