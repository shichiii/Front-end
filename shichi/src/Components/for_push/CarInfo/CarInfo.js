import RentalCost from "./RentalCost";
import { BsFillBagFill, BsFillPersonFill, BsSnow } from "react-icons/bs";
import { FaGasPump } from "react-icons/fa";
import { GiCarDoor, GiGearStickPattern } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import { useState } from "react";
import RateCar from "./RateCar";

function CarInfo({ car }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-row gap-4 p-3 rounded-2xl h-96 bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20 w-[1215px]">
      <div className="flex flex-col gap-8 items-center w-2/3 divide-y divide-stone-200 mt-4">
        <div className="flex flex-row gap-4 justify-between items-center">
          <img
            alt="Toyota Aqua Hybrid"
            src="https://www.discovercars.com/images/car/8109/200.png"
            width="200"
          />
          <div className="">
            <div className="flex flex-row items-baseline gap-3 mb-3">
              <h1 className="font-bold text-2xl text-pallate-Dark_Sky_Blue">
                {car.car_name}
              </h1>
              <p className="text-sm items-center bg-pallate-Dark_Sky_Blue text-white p-1 rounded-2xl">
                {car.car_category}
              </p>
            </div>
            <div className="flex flex-row gap-4 text-slate-500">
              <span className="text-sm flex flex-row items-center justify-between gap-2">
                <BsFillPersonFill />
                {car.car_seat_count} seats
              </span>
              <span className="text-sm flex flex-row items-center justify-between gap-2">
                <BsFillBagFill />1 bag
              </span>
              <span className="text-sm flex flex-row items-center justify-between gap-2">
                <GiCarDoor />
                {car.car_door_count} doors
              </span>
              {car.car_Is_cooler ? (
                <span className="text-sm flex flex-row items-center justify-between gap-2">
                  <BsSnow />
                  Air Conditioning
                </span>
              ) : null}
              <span className="text-sm flex flex-row items-center justify-between gap-2">
                <IoIosColorPalette />
                {car.car_color}
              </span>

              <span className="text-sm flex flex-row items-center justify-between gap-2">
                <GiGearStickPattern />
                {car.car_gearbox}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col w-1/3 p-3 gap-5">
            <div className="flex flex-row items-center gap-2">
              <FaGasPump fontSize={25} className="text-pallate-Dark_Sky_Blue" />
              <div className="flex flex-col">
                <span className="font-bold text-sm">Fuel policy</span>
                <span>{car.car_fuel}</span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <FaLocationDot
                fontSize={25}
                className="text-pallate-Dark_Sky_Blue"
              />
              <div className="flex flex-col">
                <span className="font-bold text-sm">Pick-up location</span>
                <span>Free shuttle service</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-sm p-3 w-1/3 gap-2">
            <span>
              <span className="text-green-600">✔</span> Unlimited mileage
            </span>
            <span>
              <span className="text-green-600">✔</span> Collision Damage Waiver
            </span>
            <span>
              <span className="text-green-600">✔</span> Theft Protection
            </span>
            {showMore ? (
              <>
                <span>
                  <span className="text-green-600">✔</span> Theft Protection
                </span>
                <span>
                  <span className="text-green-600">✔</span> Theft Protection
                </span>
              </>
            ) : null}
            <span
              className="ml-5 text-blue-400 cursor-pointer hover:text-blue-700"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "show 2 more" : "show less"}
            </span>
          </div>
          <div className="flex flex-col w-1/3 p-3 justify-center gap-5">
            <span className="font-bold text-green-600 text-xs bg-green-200 p-2 rounded-sm">
              ✔ FREE cancellation before 11:00 on 17 October 2023
            </span>
            <div>
              <div className="bg-blue-400 p-3 text-slate-200 rounded-xl w-[50px] mx-auto font-bold">
                8.6
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="text border-b border-blue-400 text-blue-400">
                  Very good
                </span>
                <span className="text-xs">131 ratings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RentalCost car={car} />
    </div>
  );
}

export default CarInfo;
