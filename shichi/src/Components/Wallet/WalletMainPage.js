import React from "react";
import { FaWallet } from "react-icons/fa";
import wallet from "../../Static/wallet2.svg";
const WalletApp = () => {
  return (
    <div>
      <div class="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal relative lg:py-20">
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
                <div class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                  <div class="relative">
                    <p
                      class="bg-pallate-Dark_Sky_Blue bg-opacity-90 rounded-3xl pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute"
                    >
                      Amount
                    </p>
                    <input
                      placeholder="$"
                      type="number"
                      class="border placeholder-gray-400 focus:outline-none text-white
                  focus:border-pallate-Dark_Sky_Blue  w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-transparent
                  border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="relative">
                    <a
                      class="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-pallate-Dark_Sky_Blue bg-opacity-50
                  rounded-lg transition duration-200 hover:bg-transparent hover:border-2 ease"
                    >
                      Go To ZarinPal
                    </a>
                  </div>
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
