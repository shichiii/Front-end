import { FaGasPump } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiTimeFive } from "react-icons/bi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";

function CarPickUpLocation() {
  return (
    <div className="rounded p-5 bg-slate-100 h-96 flex flex-row w-[800px]">
      <div className="flex flex-col justify-around w-2/3">
        <div className="font-bold text-slate-400 text-xs">PICK-UP</div>
        <div className="font-bold text-xl">
          19 October 2023, Thursday, 11:00
        </div>
        <div>Queenstown Airport (ZQN)</div>
        <div className="text-xs text-slate-400">
          Address: 43 Brookes Road, Frankton, Queenstown, 9371
        </div>
        <div className="flex flex-row items-center gap-3 mt-5">
          <FaLocationDot fontSize={25} />
          <div className="flex flex-col">
            <span className="font-bold text-sm">Pick-up location</span>
            <span>Free shuttle service</span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 mt-5">
          <BiTimeFive fontSize={25} />
          <div className="flex flex-col">
            <span className="font-bold text-sm">Business hours</span>
            <span>Thursday 08:00 - 18:00</span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 mt-5">
          <BsFillInfoCircleFill fontSize={25} />
          <div className="flex flex-col">
            <span className="font-bold text-sm">Pick-up instructions</span>
            <span className="w-10/12">
              Once you have collected your luggage and are read
            </span>
          </div>
        </div>
      </div>
      <div className="w-52 bg-slate-300 rounded relative h-full flex-1">
        {/* <MapContainer
          center={[40, 0]}
          zoom={1}
          scrollWheelZoom={true}
          className=""
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
        </MapContainer> */}
      </div>
    </div>
  );
}

export default CarPickUpLocation;
