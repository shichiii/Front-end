import React, { useCallback, useContext, useEffect, useState } from "react";
import socket from "./Socket";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import SingleChat from "./SingleChat";
import SendMessage from "./SendMessage";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import AuthContext from "../../../Context/AuthContext";

const authToken = `${localStorage.getItem("token")}`;

function App() {
  const { chatRoomId } = useContext(AuthContext);
  const BASE = `http://87.107.105.201:8000/chat/messages/${chatRoomId}/`;
  const car_owner = 6;
  const userId = jwtDecode(localStorage.getItem("token")).user_id;
  const [messages, setMessages] = useState([]);
  const WS_URL = `ws://87.107.105.201:8000/ws/chat/${chatRoomId}/?access_token=${authToken}`;
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

  return (
    <div className=" z-[10000]">
      <div class="flex flex-col rounded-lg  min-h-[700px] text-gray-800 w-[500px]">
        <div class="flex flex-col  flex-grow w-full max-w-xl bg-pallate-Police_Blue shadow-lg  rounded-t-lg  overflow-hidden">
          <div class="flex flex-col flex-grow h-0 p-4 overflow-auto rounded-lg">
            {messages.map((message) => (
              <SingleChat
                text={message.message}
                position={`${userId === message.sender ? "right" : "left"}`}
              />
            ))}
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
