import io from "socket.io-client";

const socket = io.connect("http://localhost:3007");

export default socket;
