import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaGasPump } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function CarDropOffLocation({ car }) {
  return (
    <div className="w-[400px] rounded-2xl p-5 bg-slate-100 h-96 flex flex-col justify-around">
      <div className="font-bold text-slate-400 text-xs">DROP-OFF</div>
      <div className="font-bold text-xl text-pallate-Dark_Sky_Blue">
        27 October 2023, Friday, 11:00
      </div>
      <div>
        {car?.location?.city}, {car?.location?.state}
      </div>
      <div className="text-xs text-slate-400">
        {car?.location?.city}, {car?.location?.state}
      </div>
      <div className="flex flex-row items-center gap-3 mt-5">
        <FaLocationDot fontSize={25} className="text-pallate-Dark_Sky_Blue" />
        <div className="flex flex-col">
          <span className="font-bold text-sm">Business hours</span>
          <span>Thursday 08:00 - 18:00</span>
        </div>
      </div>
      <div className="flex flex-row items-center gap-3 mt-5">
        <BsFillInfoCircleFill
          fontSize={25}
          className="text-pallate-Dark_Sky_Blue"
        />
        <div className="flex flex-col w-10/12">
          <span className="font-bold text-sm">Pick-up instructions</span>
          <span>
            Once you have collected your luggage and are ready for pick up,
            please wait in Airport Transfer Area and call us 0064 34
          </span>
        </div>
      </div>
    </div>
  );
}

export default CarDropOffLocation;
