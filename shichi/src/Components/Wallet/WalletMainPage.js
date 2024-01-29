import React, { useState, useEffect } from "react";
import { FaWallet } from "react-icons/fa";
import wallet from "../../Static/wallet2.svg";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";


const WalletApp = () => {
  const token = localStorage.getItem("token");
  const user = jwtDecode(token);
  // console.log("///////////sdfasrfaer/fafsrrfserfsergfsergsertgaerg//////////////")
  // console.log(user)

  const userId = useParams();
  // const user = localStorage.getItem("user");
  const [amount, setAmount] = useState(10000);
  const [totalBalance, setTotalBalance] = useState(0);
  const baseURL = "http://87.107.54.89:8000/user/show/";
  const [wallett, setwallet] = useState("");

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
  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `http://87.107.54.89:8000/user/updatewallet/${userId.id}/`,
        {
          wallet: amount,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
     
      console.log("Success:", response.data);
  
     
      const link = response.data;
  
     
      window.open(link, "_blank");
    } catch (error) {
    
      console.log("autoeity", `Bearer ${token}`);
      console.error("Error updating wallet:", error);
  
      
      if (error.response) {
        console.error("Response data in error:", error.response.data);
      }
  
    
    }
  };
  
  return (
    <div>
      <div class="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal relative lg:py-20 min-h-screen">
        <div
          class="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row"
        >
          <div class="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
            <div class="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
              <div class="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                <img src={wallet} class="btn-" />
              </div>
            </div>
            <div class="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
              <div
                class="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-pallate-Dark_Sky_Blue bg-opacity-20 shadow-2xl rounded-xl
            relative z-10"
              >
                <div className="flex items-center justify-center w-full h-full text-white">
                  <FaWallet className="m-4 text-[25px]" />
                  <p className="text-4xl font-medium leading-snug font-serif text-white">
                    Wallet
                  </p>
                </div>

                <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                  <div className="relative">
                    <p className="bg-pallate-Dark_Sky_Blue bg-opacity-90 rounded-3xl pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                      Amount
                    </p>
                    <input
                      placeholder="﷼"
                      min={10000}
                      step={10000}
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(parseFloat(e.target.value))}
                      className="border placeholder-gray-400 focus:outline-none text-white focus:border-pallate-Dark_Sky_Blue  w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-transparent border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="relative">
                    <button
                      onClick={handleSubmit}
                      className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-pallate-Dark_Sky_Blue bg-opacity-50
                  rounded-lg transition duration-200 hover:bg-transparent hover:border-2 ease"
                    >
                      Go To ZarinPal
                    </button>
                  </div>

                  {/* Display total balance */}
                  <p className="text-white">Total Balance: ﷼{wallett}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletApp;
