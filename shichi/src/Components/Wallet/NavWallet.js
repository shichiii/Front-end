import React, { useState } from 'react';
import { FaWallet } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode'

const NavWallet = () => {
  const token = localStorage.getItem("token");
  const user = jwtDecode(token);
  const [money, setmoney] = useState(0);
  let navigate = useNavigate();
  const handle = () => {
    // Use the history object to navigate to "/wallet"
    navigate(`/wallet/${user.user_id}`);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>
        
        <FaWallet onClick={handle} className='text-[30px] cursor-pointer' />
      </div>
      <p>Wallet: {money}$</p>
    </div>
  );
};


export default NavWallet
