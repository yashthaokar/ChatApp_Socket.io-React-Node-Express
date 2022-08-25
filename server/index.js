const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const port = 8000;
const { Server } = require("socket.io");

app.use(cors());
const server = http.createServer(app);

// createing socketio server.
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
// we listing the io event.(.on)..
io.on("connection",(socket)=>{
console.log(`User is connected:${socket.id}`);// because  every cannection came with new and  diff ID.

socket.on("join_room",(data)=>{
  socket.join(data)
  console.log(`User with ID: ${socket.id} joined room:${data} `)
})

socket.on("send_message",(data)=>{
  socket.to(data.room).emit("receive_message",data)
  //console.log(data)
  console.log(data.message)
  console.log(data.name)
} )

socket.on("disconnect",()=>{
    console.log(`User disconnected", ${socket.id}`)
})
})



server.listen(port, () => {
  console.log(`Your Backend Server is running on ${port}`);
});
