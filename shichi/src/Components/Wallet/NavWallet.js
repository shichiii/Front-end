import React, { useState, useEffect } from "react";
import Navbar from "../for_push/HomePage/NavBar";


const NavWallet = () => {
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
        
      </div>
    
    </div>
  );
};

export default NavWallet;
