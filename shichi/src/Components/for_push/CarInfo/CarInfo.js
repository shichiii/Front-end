import {
  BsFillBagFill,
  BsFillPersonFill,
  BsInfoCircleFill,
  BsSnow,
} from "react-icons/bs";
import { FaGasPump } from "react-icons/fa";
import { GiCarDoor, GiGearStickPattern } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import logo from "../../../Static/whitelogo.svg";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import Rate from "./Rate";
import StarAverageRating from "./StarAverageRating";

function CarInfo({ car }) {
  const startDate = new Date(car?.start_date);
  const options1 = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const endDate = new Date(car?.end_date);
  const options2 = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div className="flex flex-row flex-wrap gap-4 p-3 rounded-2xl h-auto bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20 w-full">
      <div className="flex flex-col gap-8 items-center w-full divide-y divide-stone-200 mt-4 px-5">
        <div className="flex flex-row gap-4 w-full">
          <img
            src={logo}
            alt="My Logo"
            className="md:w-36 lg:w-44 xl:w-52 hidden md:block"
          />
          <div className="flex flex-col">
            <div className="flex flex-row items-baseline gap-3 mb-3">
              <h1 className="font-bold text-2xl text-pallate-Dark_Sky_Blue">
                {car.car_name}
              </h1>
              <p className="text-sm items-center bg-pallate-Dark_Sky_Blue text-white p-1 rounded-2xl">
                {car.car_category}
              </p>
            </div>
            <div className="flex flex-row gap-4 text-slate-400 flex-wrap">
              <span className="text-sm flex flex-row items-center justify-between gap-2">
                <BsFillPersonFill />
                {car.car_seat_count} seats
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
        <div className="flex flex-col md:flex-row w-full items-center">
          <div className="flex flex-col w-full md:1/3 p-3 gap-5 items-center md:items-start">
            <div className="flex flex-row items-center gap-2">
              <FaGasPump fontSize={25} className="text-pallate-Dark_Sky_Blue" />
              <div className="flex flex-col">
                <span className="font-bold text-sm">Fuel policy</span>
                <span>{car.car_fuel}</span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <BsInfoCircleFill
                fontSize={25}
                className="text-pallate-Dark_Sky_Blue"
              />
              <div className="flex flex-col">
                <span className="font-bold text-sm">Description</span>
                <span>{car.description}</span>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3 mt-2">
              <FaLocationDot
                fontSize={25}
                className="text-pallate-Dark_Sky_Blue"
              />
              <div className="flex flex-col">
                <span className="font-bold text-sm">Location</span>
                <span>{car.location_state}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:1/3 p-3 gap-5 justify-around items-center md:items-start">
            <div className="flex flex-col justify-around w-full items-center md:items-start">
              <div className="font-bold text-slate-400 text-xs">PICK-UP</div>
              <div className="font-bold text-xl text-pallate-Dark_Sky_Blue text-center">
                {startDate.toLocaleDateString("en-us", options1)}
              </div>
            </div>
            <div className="flex flex-col justify-around w-full items-center md:items-start">
              <div className="font-bold text-slate-400 text-xs">DROP-OFF</div>
              <div className="font-bold text-xl text-pallate-Dark_Sky_Blue text-center">
                {endDate.toLocaleDateString("en-us", options2)}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:1/3 p-3 gap-5 justify-around">
            <div className="flex flex-col justify-center items-center">
              <span className="">Cost of rental</span>
              <span className="font-bold text-2xl text-pallate-Dark_Sky_Blue">
                $ {car.price}
              </span>
            </div>
            <StarAverageRating
              rating={car?.average_rating?.toFixed(1)}
              className="flex flex-col"
              messages={["Very Bad", "Bad", "Okay", "Good", "Very Good"]}
              size={36}
            />
          </div>
        </div>
      </div>
      {/* <div className="w-full h-full bg-slate-300 rounded-2xl block">
        {+car?.location_geo_width && +car?.location_geo_length && (
          <MapContainer
            center={[+car?.location_geo_width, +car?.location_geo_length]}
            zoom={15}
            scrollWheelZoom={true}
            className="h-full"
            style={{ borderRadius: "20px", display: "block" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
            <Marker
              position={[+car?.location_geo_width, +car?.location_geo_length]}
            ></Marker>
          </MapContainer>
        )}
      </div> */}
    </div>
  );
}

export default CarInfo;
