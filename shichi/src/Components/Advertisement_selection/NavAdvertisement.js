import React, { useState, useEffect } from "react";
import Navbar from "../../Components/NavBar/NavBar";

const NavAdvertisement = () => {
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

    </div>
  );
};

export default NavAdvertisement;