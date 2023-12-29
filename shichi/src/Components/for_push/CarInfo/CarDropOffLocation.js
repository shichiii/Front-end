import { useEffect, useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaGasPump } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function CarDropOffLocation({ car }) {
  const [carQuality, setCarQuality] = useState("");

  useEffect(
    function () {
      if (car.average_rating <= 1) {
        setCarQuality("Very Bad");
      } else if (car.average_rating > 1 && car.average_rating <= 2) {
        setCarQuality("Bad");
      } else if (car.average_rating > 2 && car.average_rating <= 3) {
        setCarQuality("Okay");
      } else if (car.average_rating > 3 && car.average_rating <= 4) {
        setCarQuality("Good");
      } else {
        setCarQuality("Very Good");
      }
    },
    [car.average_rating]
  );

  return (
    <div className="w-[400px] rounded-2xl p-5 bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20 h-96 flex flex-col justify-around items-center">
      <div className="flex flex-col justify-center items-center p-5 gap-8">
        <span className="">Cost of rental</span>
        <span className="font-bold text-2xl text-pallate-Dark_Sky_Blue">
          $ {car.price}
        </span>
      </div>
      <div>
        <div className="bg-blue-400 p-3 text-slate-200 rounded-xl w-[50px] mx-auto font-bold">
          {car?.average_rating?.toFixed(1)}
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text border-b border-blue-400 text-blue-400">
            {carQuality}
          </span>
          {/* <span className="text-xs">131 ratings</span> */}
        </div>
      </div>
    </div>
  );
}

export default CarDropOffLocation;
