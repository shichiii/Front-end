import React, { useContext, useEffect, useState } from "react";
import Chat from "./AppChat";
import AuthContext from "../../../Context/AuthContext";
const IconChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { chatRoomId, setChatRoomId } = useContext(AuthContext);

  const openChat = () => {
    setIsChatOpen(true);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  // useEffect(
  //   function () {
  //     if (chatRoomId !== 0) {
  //       setIsChatOpen(true);
  //     } else {
  //       setIsChatOpen(false);
  //     }
  //   },
  //   [chatRoomId]
  // );

  return (
    <div className="z-[1000]">
      <div class="fixed bottom-0 right-0  mb-3 lg:mr-3 lg:mb-3 xl:mr-4 xl:mb-4">
        <button
          onClick={openChat}
          class="z-20 text-white flex flex-col shrink-0 grow-0 justify-around rounded-lg"
        >
          <div class="p-3 rounded-full border-4 border-white bg-pallate-Dark_Sky_Blue">
            <svg
              class="w-10 h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
        {isChatOpen && (
          <div className="fixed bottom-3 right-5  flex items-center justify-center rounded-lg z-[1000]">
            <div className="flex flex-col flex-grow w-full max-w-xl shadow-xl rounded-lg overflow-hidden">
              <Chat />
              <button
                onClick={closeChat}
                className="bg-pallate-Police_Blue  text-white py-2 px-4 rounded-b-lg "
              >
                Close Chat
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IconChat;
