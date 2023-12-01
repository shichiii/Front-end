import React, { useEffect, useState } from "react";
import socket from "./Socket";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import SingleChat from "./SingleChat";
import SendMessage from "./SendMessage";
import axios from "axios";

const BASE = "http://185.157.245.99:8000/chat/messages/1/";
const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAxNTMxMTg3LCJpYXQiOjE3MDE0NDQ3ODcsImp0aSI6IjUyZDlkMzQ5OTJiNDQ3NjhiNGM1YTI5NzFiMWNhMDlmIiwidXNlcl9pZCI6Nn0.w6_aG4i_4sI3uJlRLj5hJc8QrN46IIXOQ6vdRq_ZSH4";

function App() {
  const [messages, setMessages] = useState([]);
  const WS_URL = "ws://185.157.245.99:8000/ws/chat/1/";
  const client = new W3CWebSocket(WS_URL, undefined, undefined, {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAxNTMxMTg3LCJpYXQiOjE3MDE0NDQ3ODcsImp0aSI6IjUyZDlkMzQ5OTJiNDQ3NjhiNGM1YTI5NzFiMWNhMDlmIiwidXNlcl9pZCI6Nn0.w6_aG4i_4sI3uJlRLj5hJc8QrN46IIXOQ6vdRq_ZSH4`,
  });
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

  console.log("messages: ", messages);

  useEffect(function () {
    async function getMessages() {
      await axios.get(BASE).then(async (response) => {
        const ar = [];
        await response.data.map(async (element) => {
          ar.push({ message: element.content });
        });
        setMessages([...messages, ...ar]);
      });
    }
    getMessages();
  }, []);

  // const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
  //   WS_URL,
  //   {
  //     share: false,
  //     shouldReconnect: () => true,
  //   }
  // );

  // // Run when the connection state (readyState) changes
  // useEffect(() => {
  //   console.log("Connection state changed");
  //   console.log("readyState: ", readyState);
  //   console.log("lastMessage: ", lastJsonMessage);
  //   console.log("sendJsonMessage: ", sendJsonMessage);
  //   // if (readyState === ReadyState.OPEN) {
  //   //   sendJsonMessage({
  //   //     event: "subscribe",
  //   //     data: {
  //   //       channel: "general-chatroom",
  //   //     },
  //   //   });
  //   // }
  // }, [readyState]);

  // // Run when a new WebSocket message is received (lastJsonMessage)
  // useEffect(() => {
  //   console.log(`Got a new message: ${lastJsonMessage}`);
  // }, [lastJsonMessage]);

  // useEffect(function () {
  //   // socket.connect();
  //   // console.log("socket: ", socket);
  //   // socket.on("connection", () => console.log("connect"));
  //   console.log("socket: ", socket);

  //   socket.onopen = () => {
  //     console.log("WebSocket connection open");
  //     // You can send any necessary authentication or subscription messages here
  //   };
  //   socket.send("Connection established");
  // }, []);
  // const socket = io(`wss://185.157.245.99:8000/ws/chat/${1}`);
  // console.log("socket: ", socket);
  // useEffect(() => {
  //   const socket = io(`wss://185.157.245.99:8000/ws/chat/${1}`, {
  //     extraHeaders: {
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAxMzM1NzI4LCJpYXQiOjE3MDEyNDkzMjgsImp0aSI6ImM5Y2YwNmE4ZjNlZjQ0YWQ4ZGIxOTgwMDU2NGJhMTZiIiwidXNlcl9pZCI6Nn0.MqX8aatFvXax6W2wwKg7CYoDucnKWpWUmQfiBtljZyk",
  //     },
  //   });
  //   console.log("socket: ", socket);

  //   socket.on("connect", () => {
  //     console.log("Connected to WebSocket API");
  //     // You can send any necessary authentication or subscription messages here
  //   });

  //   socket.on("data", (data) => {
  //     // Handle incoming data from the WebSocket API
  //     console.log("Received data:", data);
  //   });

  //   return () => {
  //     // Disconnect the socket when the component unmounts
  //     socket.disconnect();
  //   };
  // }, []);

  return (
    <div>
      <div class="flex flex-col rounded-lg  min-h-[500px] text-gray-800 ">
        <div class="flex flex-col  flex-grow w-full max-w-xl bg-pallate-Police_Blue shadow-lg  rounded-t-lg  overflow-hidden">
          <div class="flex flex-col flex-grow h-0 p-4 overflow-auto rounded-lg">
            {messages.map((message) => (
              <SingleChat text={message.message} />
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
            <SendMessage sendMessageHandler={sendMessageHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
