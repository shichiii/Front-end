import { FaGasPump } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiTimeFive } from "react-icons/bi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useState } from "react";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function CarPickUpLocation({ car }) {
  console.log("car: ", car);
  const date = new Date(car?.start_date);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  console.log("+car?.location_geo_length", +car?.location_geo_length);
  console.log("+car?.location_geo_width", +car?.location_geo_width);

  return (
    <div className="rounded-2xl p-5 bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20 h-96 flex flex-row w-[800px] ">
      <div className="flex flex-col justify-around w-2/3">
        <div className="flex flex-col justify-around w-2/3">
          <div className="font-bold text-slate-400 text-xs">PICK-UP</div>
          <div className="font-bold text-xl text-pallate-Dark_Sky_Blue">
            {date.toLocaleDateString("en-us", options)}
          </div>
        </div>
        <div className="flex flex-col justify-around w-2/3">
          <div className="font-bold text-slate-400 text-xs">DROP-OFF</div>
          <div className="font-bold text-xl text-pallate-Dark_Sky_Blue">
            {date.toLocaleDateString("en-us", options)}
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 mt-2">
          <FaLocationDot fontSize={25} className="text-pallate-Dark_Sky_Blue" />
          <div className="flex flex-col">
            <span className="font-bold text-sm">Location</span>
            <span>{car.location_state}</span>
          </div>
        </div>
      </div>
      <div className="w-96 h-full bg-slate-300 rounded-2xl">
        {+car?.location_geo_width && +car?.location_geo_length && (
          <MapContainer
            center={[+car?.location_geo_width, +car?.location_geo_length]}
            zoom={15}
            scrollWheelZoom={true}
            className="h-full"
            style={{ borderRadius: "20px" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
            <Marker
              position={[+car?.location_geo_width, +car?.location_geo_length]}
            >
              <Popup>
                <span>1</span> <span>1</span>
              </Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </div>
  );
}

export default CarPickUpLocation;
