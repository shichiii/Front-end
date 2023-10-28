import React, { useState } from "react";
import Chat from "./AppChat";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openChat = () => {
    setIsChatOpen(true);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen  bg-gray-100 text-gray-800 p-10">
      <button
        onClick={openChat}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4"
      >
        Open Chat
      </button>
      {isChatOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
            <Chat/>
            <button onClick={closeChat} className="bg-pallate-Dark_Sky_Blue text-white py-2 px-4 rounded-lg mt-4">
              Close Chat
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
