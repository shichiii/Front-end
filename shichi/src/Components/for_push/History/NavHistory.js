import React, { useState, useEffect } from "react";
import Navbar from "../HomePage/NavBar";
import { TbHistoryToggle } from "react-icons/tb";

const NavHistory = () => {
  const [isAdvertisementClicked, setIsAdvertisementClicked] = useState(true);
  const [isRentalClicked, setIsRentalClicked] = useState(false);

  const handleAdvertisementClick = () => {
    setIsAdvertisementClicked(true);
    setIsRentalClicked(false);
  };

  const handleRentalClick = () => {
    setIsAdvertisementClicked(false);
    setIsRentalClicked(true);
  };

  useEffect(() => {
    
  }, []); 

  return (
    <div>
      <Navbar  />
      <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal h-24 flex w-full">
        <div
          onClick={handleAdvertisementClick}
          className={`text-white justify-center items-center w-1/2 flex cursor-pointer ${
            isAdvertisementClicked ? 'border-b-4 border-white' : ''
          }`}
        >
          <TbHistoryToggle className="m-1"/>Advertisement History
        </div>
        <div
          onClick={handleRentalClick}
          className={`text-white justify-center items-center w-1/2 flex  cursor-pointer ${
            isRentalClicked ? 'border-b-4 border-white' : ''
          }`}
        >
         <TbHistoryToggle className="m-1"/> Rental History
        </div>
      </div>
    
    </div>
  );
};

export default NavHistory;
