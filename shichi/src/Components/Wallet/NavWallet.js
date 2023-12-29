import React, { useState, useEffect } from "react";
import { FaWallet } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useParams } from "react-router-dom";
import axios from "axios";

const NavWallet = () => {
  const userId = useParams();
  const baseURL = "http://87.107.105.201:8000/user/show/";
  const token = localStorage.getItem("token");
  const user = jwtDecode(token);
  const [money, setmoney] = useState(0);
  const [wallett, setwallet] = useState("");
  let navigate = useNavigate();
  const handle = () => {
    // Use the history object to navigate to "/wallet"
    navigate(`/wallet/${user.user_id}`);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = null;
    if (token !== "null" && token !== null) {
      const user = jwtDecode(token);
      axios.get(baseURL + `${user.user_id}/`).then((response) => {
        console.log(response.data);
        setwallet(response.data.wallet);
      });
    }
  }, [userId]);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <FaWallet onClick={handle} className="text-[30px] cursor-pointer" />
      </div>
      <p>Wallet: {wallett}﷼</p>
    </div>
  );
};

export default NavWallet;
