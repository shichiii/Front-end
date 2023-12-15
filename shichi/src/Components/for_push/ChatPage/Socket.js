import { io } from "socket.io-client";
import socketIOClient from "socket.io-client";

// const socket = io("ws://185.157.245.99:8000/ws/chat/1/", {
//   autoConnect: false,
// });
const socket = new WebSocket("ws://185.157.245.99:8000/ws/chat/1/");

export default socket;
