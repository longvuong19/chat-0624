import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

// {userId: socketId}
const userSocketMap = {};

io.on("connection", (socket) => {
  console.log("An user has connected.", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId != undefined) userSocketMap[userId] = socket.id;

  // io.event gửi event tới tất cả client được kết nối
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // socket.on dùng để lắng nghe sự kiện, có thể dùng ở cả server và client
  socket.on("disconnect", () => {
    console.log("User has been disconnected.", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
