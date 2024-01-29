import React, { useCallback, useContext, useEffect, useState } from "react";
import socket from "./Socket";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import SingleChat from "./SingleChat";
import SendMessage from "./SendMessage";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import AuthContext from "../../../Context/AuthContext";
import { Comment } from "react-loader-spinner";

function App() {
  const authToken = `${localStorage.getItem("token")}`;
  const { chatRoomId } = useContext(AuthContext);
  const BASE = `http://87.107.54.89:8000/chat/messages/${chatRoomId}/`;
  const userId = jwtDecode(localStorage.getItem("token")).user_id;
  const [messages, setMessages] = useState([]);
  const [reciverId, setReciverId] = useState();
  const [reciverName, setReciverName] = useState("");
  const [reciverImage, setReciverImage] = useState();
  const [senderId, setSenderId] = useState();
  const [senderName, setSenderName] = useState("");
  const [senderImage, setSenderImage] = useState();
  const [chatReady, setChatReady] = useState(false);
  const WS_URL = `ws://87.107.54.89:8000/ws/chat/${chatRoomId}/?access_token=${authToken}`;
  const client = new W3CWebSocket(WS_URL);
  console.log("reciverName: ", reciverName.split(" ")[1]);
  useEffect(
    function () {
      client.onopen = () => {
        console.log("WebSocket Client Connected");
        setChatReady(true);
      };

      client.onmessage = (message) => {
        if (reciverName.split(" ")[1]) {
          const dataFromServer = JSON.parse(message.data);
          dataFromServer.sender =
            reciverName.split(" ")[1] === dataFromServer.sender
              ? reciverId
              : senderId;
          if (dataFromServer) {
            setMessages((messages) => [...messages, dataFromServer]);
          }
        }
      };
    },
    [reciverName]
  );

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

  useEffect(function () {
    axios
      .get(`http://87.107.54.89:8000/chat/chatroom/chatroom/${chatRoomId}/`)
      .then(async (response) => {
        const chatroom = response.data;
        setReciverId(chatroom.reciver.id);
        setReciverName(
          `${chatroom.reciver.first_name} ${chatroom.reciver.last_name}`
        );
        setReciverImage(chatroom.reciver.profile_image);
        setSenderId(chatroom.sender.id);
        setSenderName(
          `${chatroom.sender.first_name} ${chatroom.sender.last_name}`
        );
        setSenderImage(chatroom.sender.profile_image);
      });
  }, []);

  return (
    <div className=" z-[10000]">
      <div class="flex flex-col rounded-lg  min-h-[700px] text-gray-800 w-[500px]">
        <div class="flex flex-col  flex-grow w-full max-w-xl bg-pallate-Police_Blue shadow-lg  rounded-t-lg  overflow-hidden">
          <div class="flex flex-col flex-grow h-0 p-4 overflow-auto rounded-lg">
            {chatReady ? (
              messages.map((message) => (
                <SingleChat
                  text={message.message}
                  position={`${userId === message.sender ? "right" : "left"}`}
                  image={`${
                    senderId === message.sender ? senderImage : reciverImage
                  }`}
                />
              ))
            ) : (
              <Comment
                visible={true}
                height="80"
                width="80"
                ariaLabel="comment-loading"
                wrapperStyle={{}}
                wrapperClass="comment-wrapper mx-auto mt-[200px]"
                color="#fff"
                backgroundColor="#87BEC7"
              />
            )}
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
