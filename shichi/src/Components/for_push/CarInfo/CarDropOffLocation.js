import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaGasPump } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function CarDropOffLocation() {
  return (
    <div className="w-[400px] rounded p-5 bg-slate-100 h-96 flex flex-col justify-around">
      <div className="font-bold text-slate-400 text-xs">DROP-OFF</div>
      <div className="font-bold text-xl">27 October 2023, Friday, 11:00</div>
      <div>Queenstown Airport (ZQN)</div>
      <div className="text-xs text-slate-400">
        Address: 43 Brookes Road, Frankton, Queenstown, 9371
      </div>
      <div className="flex flex-row items-center gap-3 mt-5">
        <FaLocationDot fontSize={25} />
        <div className="flex flex-col">
          <span className="font-bold text-sm">Business hours</span>
          <span>Thursday 08:00 - 18:00</span>
        </div>
      </div>
      <div className="flex flex-row items-center gap-3 mt-5">
        <BsFillInfoCircleFill fontSize={25} />
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
