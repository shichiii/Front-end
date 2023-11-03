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

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function CarLocation() {
  return (
    <div className="rounded-2xl p-5 bg-slate-100 h-96 flex flex-row w-[800px]">
      <div className="flex flex-col justify-around w-2/3">
        <div className="flex flex-row items-center gap-3 mt-5">
          <FaLocationDot fontSize={25} />
          <div className="flex flex-col">
            <span className="font-bold text-pallate-Dark_Sky_Blue text-sm">Pick-up location</span>
          </div>
        </div>
    </div>
      <div className="w-52 h-full w-full slate-300 rounded-2xl">
        <MapContainer
          center={[40, 0]}
          zoom={10}
          scrollWheelZoom={true}
          className=" h-full w-full"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
          <Marker position={[40, 0]}>
            <Popup>
              <span>1</span> <span>1</span>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default CarLocation;
