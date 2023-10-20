import React from "react";
import Car from "../../../Static/110.png";
// import cardcar from "";
const CardHistory = () => {
  return (
    <div className="flex flex-col ">
      <div className="w-full flex h-80">
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
      <div className=" h-auto mt-2 grid grid-cols-5 gap-3 mx-2 ">
        <div className=" h-96 rounded-lg bg-orange-100 ">
          <div className="grid w-full h-full justify-center content-between f-full gap-3 grid-cols-1 ">
            <img src={Car} alt="Card Car" class="object-cover"/>
            <div class="text-center">
              <h1 class="text-4xl font-bold">Name</h1>
              <p class="text-2xl text-stone-950">Model</p>
            </div>
            <div class="text-right">
              <p class="text-stone-950 text-2xl mx-3 my-3">yyyy/yy/y</p>
            </div>
          </div>
        </div>
        <div className=" h-96 rounded-lg bg-orange-100 ">
          <div className="grid w-full h-full justify-center content-between f-full gap-3 grid-cols-1 ">
            <img src={Car} alt="Card Car" class="object-cover"/>
            <div class="text-center">
              <h1 class="text-4xl font-bold">Name</h1>
              <p class="text-2xl text-stone-950">Model</p>
            </div>
            <div class="text-right">
              <p class="text-stone-950 text-2xl mx-3 my-3">yyyy/yy/y</p>
            </div>
          </div>
        </div>
        <div className=" h-96 rounded-lg bg-orange-100 ">
          <div className="grid w-full h-full justify-center content-between f-full gap-3 grid-cols-1 ">
            <img src={Car} alt="Card Car" class="object-cover"/>
            <div class="text-center">
              <h1 class="text-4xl font-bold">Name</h1>
              <p class="text-2xl text-stone-950">Model</p>
            </div>
            <div class="text-right">
              <p class="text-stone-950 text-2xl mx-3 my-3">yyyy/yy/y</p>
            </div>
          </div>
        </div>
        <div className=" h-96 rounded-lg bg-orange-100 ">
          <div className="grid w-full h-full justify-center content-between f-full gap-3 grid-cols-1 ">
            <img src={Car} alt="Card Car" class="object-cover"/>
            <div class="text-center">
              <h1 class="text-4xl font-bold">Name</h1>
              <p class="text-2xl text-stone-950">Model</p>
            </div>
            <div class="text-right">
              <p class="text-stone-950 text-2xl mx-3 my-3">yyyy/yy/y</p>
            </div>
          </div>
        </div>
        <div className=" h-96 rounded-lg bg-orange-100 ">
          <div className="grid w-full h-full justify-center content-between f-full gap-3 grid-cols-1 ">
            <img src={Car} alt="Card Car" class="object-cover"/>
            <div class="text-center">
              <h1 class="text-4xl font-bold">Name</h1>
              <p class="text-2xl text-stone-950">Model</p>
            </div>
            <div class="text-right">
              <p class="text-stone-950 text-2xl mx-3 my-3">yyyy/yy/y</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHistory;

