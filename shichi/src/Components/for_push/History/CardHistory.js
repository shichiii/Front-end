import React from "react";
import Car from "../../../Static/110.png";
const CardHistory = () => {
  return (
    <div>
      <div className="w-full flex h-56">
        <div className="text-black justify-center items-center w-1/3 flex bg-white cursor-pointer mt-10">
          <img src={Car} alt="Your Image" class="object-cover " />
        </div>
        <div className="text-black justify-center items-center w-1/3 flex bg-white cursor-pointer mt-10 ">
          <div class="container mx-auto p-4">
            <div class="text-center">
              <h1 class="text-3xl font-bold">Name</h1>
              <p class="text-gray-600">Model</p>
            </div>

            <div class="text-center">
              <p class="text-lg">Text element 1</p>
              <p class="text-lg">Text element 2</p>
              <p class="text-lg">Text element 3</p>
            </div>
          </div>
        </div>

        <div className="text-black justify-center items-center w-1/3 flex bg-white cursor-pointer mt-10">
          <img src={Car} alt="Your Image" class="object-cover " />
        </div>
      </div>
    </div>
  );
};

export default CardHistory;
