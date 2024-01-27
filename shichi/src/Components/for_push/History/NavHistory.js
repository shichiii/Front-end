import React, { useState } from "react";
import Navbar from "../HomePage/NavBar";
import { TbHistoryToggle } from "react-icons/tb";
import AdvertisementContent from "./History";
import RentalContent from "./History";
import MyAdvertiseContent from "./MyHistory";

const NavHistory = () => {
  const [isAdvertisementClicked, setIsAdvertisementClicked] = useState(true);
  const [isRentalClicked, setIsRentalClicked] = useState(false);
  const [isMyAdvertiseClicked, setIsMyAdvertiseClicked] = useState(false);

  const handleAdvertisementClick = () => {
    setIsAdvertisementClicked(true);
    setIsRentalClicked(false);
    setIsMyAdvertiseClicked(false);
  };

  const handleRentalClick = () => {
    setIsAdvertisementClicked(false);
    setIsRentalClicked(true);
    setIsMyAdvertiseClicked(false);
  };

  const handleMyAdvertiseClick = () => {
    setIsAdvertisementClicked(false);
    setIsRentalClicked(false);
    setIsMyAdvertiseClicked(true);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal h-24 flex w-full">
        <div
          onClick={handleAdvertisementClick}
          className={`text-white justify-center items-center w-1/3 flex cursor-pointer ${
            isAdvertisementClicked ? "border-b-4 border-white" : ""
          }`}
        >
          <TbHistoryToggle className="m-1" />
          Advertisement History
        </div>
        <div
          onClick={handleRentalClick}
          className={`text-white justify-center items-center w-1/3 flex cursor-pointer ${
            isRentalClicked ? "border-b-4 border-white" : ""
          }`}
        >
          <TbHistoryToggle className="m-1" />
          Rental History
        </div>
        <div
          onClick={handleMyAdvertiseClick}
          className={`text-white justify-center items-center w-1/3 flex cursor-pointer ${
            isMyAdvertiseClicked ? "border-b-4 border-white" : ""
          }`}
        >
          <TbHistoryToggle className="m-1" />
          My Advertise
        </div>
      </div>

      <div className="">
        {isAdvertisementClicked && <AdvertisementContent />}
        {isRentalClicked && <RentalContent />}
        {isMyAdvertiseClicked && <MyAdvertiseContent />}
      </div>
    </div>
  );
};

export default NavHistory;
