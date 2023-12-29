import React, { useCallback, useEffect, useState } from "react";
import socket from "./Socket";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import SingleChat from "./SingleChat";
import SendMessage from "./SendMessage";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const BASE = "http://87.107.105.201:8000/chat/messages/1/";
const authToken = `${localStorage.getItem("token")}`;

function App() {
  const userId = jwtDecode(localStorage.getItem("token")).user_id;
  const [messages, setMessages] = useState([]);
  const WS_URL = `ws://87.107.105.201:8000/ws/chat/1/?access_token=${authToken}`;
  const client = new W3CWebSocket(WS_URL);
  useEffect(function () {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };

    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      if (dataFromServer) {
        setMessages((messages) => [...messages, dataFromServer]);
      }
    };
  }, []);

  function sendMessageHandler(message) {
    client.send(JSON.stringify({ message: message }));
  }

  useEffect(function () {
    async function getMessages() {
      await axios.get(BASE).then(async (response) => {
        const ar = [];
        await response.data.map(async (element) => {
          ar.push({ message: element.content, sender: element.sender });
        });
        setMessages([...messages, ...ar]);
      });
    }
    getMessages();
  }, []);

  // const [socketUrl, setSocketUrl] = useState(
  //   "ws://87.107.105.201:8000/ws/chat/1/"
  // );

  // const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
  //   protocols: ["Authorization", authToken],
  // });

  // console.log("readyState: ", readyState);

  // useEffect(() => {
  //   if (lastMessage !== null) {
  //     setMessages((prev) => prev.concat(lastMessage));
  //   }
  // }, [messages, setMessages]);

  // const handleClickSendMessage = useCallback(
  //   () => sendMessage(JSON.stringify({ message: "Hello from new shit" })),
  //   []
  // );

  // const connectionStatus = {
  //   [ReadyState.CONNECTING]: "Connecting",
  //   [ReadyState.OPEN]: "Open",
  //   [ReadyState.CLOSING]: "Closing",
  //   [ReadyState.CLOSED]: "Closed",
  //   [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  // }[readyState];

  return (
    <div className=" z-[10000]">
      <div class="flex flex-col rounded-lg  min-h-[700px] text-gray-800 w-[500px]">
        <div class="flex flex-col  flex-grow w-full max-w-xl bg-pallate-Police_Blue shadow-lg  rounded-t-lg  overflow-hidden">
          <div class="flex flex-col flex-grow h-0 p-4 overflow-auto rounded-lg">
            {messages.map((message) => (
              <SingleChat
                text={message.message}
                position={`${userId === message.sender ? "right" : "right"}`}
              />
            ))}
            {/* <SingleChat /> */}
            {/* <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div class="bg-pallate-Dark_Sky_Blue text-white p-3 rounded-l-lg rounded-br-lg">
                  <p class="text-sm">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                <img
                  src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe"
                  alt="User's Profile Picture"
                  className="rounded-full object-cover h-full w-full"
                />
              </div>
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                <img
                  src="https://tecdn.b-cdn.net/img/new/avatars/1.webp"
                  alt="User's Profile Picture"
                  className="rounded-full object-cover h-full w-full"
                />
              </div>
              <div>
                <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div class="bg-pallate-Dark_Sky_Blue text-white p-3 rounded-l-lg rounded-br-lg">
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              </div>
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                <img
                  src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe"
                  alt="User's Profile Picture"
                  className="rounded-full object-cover h-full w-full"
                />
              </div>
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div class="bg-pallate-Dark_Sky_Blue text-white p-3 rounded-l-lg rounded-br-lg">
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                <img
                  src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe"
                  alt="User's Profile Picture"
                  className="rounded-full object-cover h-full w-full"
                />
              </div>
            </div>
            <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div class="bg-pallate-Dark_Sky_Blue text-white p-3 rounded-l-lg rounded-br-lg">
                  <p class="text-sm">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                <img
                  src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe"
                  alt="User's Profile Picture"
                  className="rounded-full object-cover h-full w-full"
                />
              </div>
            </div> */}
            {/* <div class="flex w-full mt-2 space-x-3 max-w-xs">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                <img
                  src="https://tecdn.b-cdn.net/img/new/avatars/1.webp"
                  alt="User's Profile Picture"
                  className="rounded-full object-cover h-full w-full"
                />
              </div>
              <div>
                <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              </div>
            </div> */}
            {/* <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div class="bg-pallate-Dark_Sky_Blue text-white p-3 rounded-l-lg rounded-br-lg">
                  <p class="text-sm">Lorem ipsum dolor sit.</p>
                </div>
              </div>
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                <img
                  src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe"
                  alt="User's Profile Picture"
                  className="rounded-full object-cover h-full w-full"
                />
              </div>
            </div> */}
          </div>

          <div class="bg-pallate-Dark_Sky_Blue p-4 rounded-t-lg flex">
            <SendMessage
              sendMessageHandler={sendMessageHandler}
              disabled={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
