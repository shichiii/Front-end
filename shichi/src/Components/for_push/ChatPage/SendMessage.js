import { useState } from "react";

function SendMessage({ sendMessageHandler }) {
  const [message, setMessage] = useState("");
  return (
    <>
      <input
        class="flex w-5/6 items-center h-10 bg-gray-300 rounded-l-lg px-3 text-sm "
        type="text"
        placeholder="Type your message…"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <span class="flex w-1/6 items-center h-10 bg-gray-300 rounded-r-lg px-3  text-sm">
        <svg
          class="w-6 h-6 transform rotate-45  cursor-pointer text-pallate-Ming"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            sendMessageHandler(message);
            setMessage("");
          }}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </span>
    </>
  );
}

export default SendMessage;
