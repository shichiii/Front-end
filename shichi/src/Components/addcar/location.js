// import { useState } from 'react';
// import { FaGasPump } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import { BiTimeFive } from "react-icons/bi";
// import { BsFillInfoCircleFill } from "react-icons/bs";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   useMap,
//   useMapEvents,
// } from "react-leaflet";
// import icon from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-shadow.png";

// let DefaultIcon = L.icon({
//   iconUrl: icon,
//   shadowUrl: iconShadow,
// });

// L.Marker.prototype.options.icon = DefaultIcon;

// function CarLocation() {
//     const [pickUpLocation, setPickUpLocation] = useState('');
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       // Send the pick-up location to the backend
//       console.log('Pick-up Location:', pickUpLocation);
//       // You can make an API call or perform any necessary actions to send the pick-up location data to the backend here
//     };
  
//     return (
//       <div className="rounded-2xl p-5 bg-slate-100 h-96 flex flex-row w-[800px]">
//         <div className="flex flex-col justify-around w-2/3">
//           <div className="font-bold text-slate-400 text-xs">PICK-UP</div>
//           <div className="font-bold text-xl">
//             19 October 2023, Thursday, 11:00
//           </div>
//           <div>
//             <input
//               type="text"
//               value={pickUpLocation}
//               onChange={(e) => setPickUpLocation(e.target.value)}
//               className="bg-white border border-gray-300 rounded py-2 px-3 mt-2"
//             />
//           </div>
//           <div className="text-xs text-slate-400">
//             Address: 43 Brookes Road, Frankton, Queenstown, 9371
//           </div>
//           <div className="flex flex-row items-center gap-3 mt-5">
//             <FaLocationDot fontSize={25} />
//             <div className="flex flex-col">
//               <span className="font-bold text-sm">Pick-up location</span>
//               <span>Free shuttle service</span>
//             </div>
//           </div>
//           <div className="flex flex-row items-center gap-3 mt-5">
//             <BiTimeFive fontSize={25} />
//             <div className="flex flex-col">
//               <span className="font-bold text-sm">Business hours</span>
//               <span>Thursday 08:00 - 18:00</span>
//             </div>
//           </div>
//           <div className="flex flex-row items-center gap-3 mt-5">
//             <BsFillInfoCircleFill fontSize={25} />
//             <div className="flex flex-col">
//               <span className="font-bold text-sm">Pick-up instructions</span>
//               <span className="w-10/12">
//                 Once you have collected your luggage and are ready to leave the airport, please follow the signs for the shuttle bus pick-up area. Our shuttle buses operate between the airport terminal and our branch throughout the day.
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="w-52 h-full bg-slate-300 rounded-2xl">
//           {/* Existing code for the map */}
//         </div>
//         <div className="mt-5">
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="pickUpLocationInput" className="font-bold text-sm">
//               Enter Pick-up Location:
//             </label>
//             <input
//               id="pickUpLocationInput"
//               type="text"
//               value={pickUpLocation}
//               onChange={(e) => setPickUpLocation(e.target.value)}
//               className="bg-white border border-gray-300 rounded py-2 px-3 mt-2"
//             />
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }

// export default CarLocation;