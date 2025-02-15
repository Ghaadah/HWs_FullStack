const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || 5003;

const { Server } = require('socket.io');
const io = new Server(server);
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('msg: ' + msg);
    io.emit('chat message' , msg);
  });

  //socket.on('disconnect', () => {
  //  console.log('user disconnected!');
  //});
});

server.listen(port, () => {
  console.log(`listening on *:${port}`);
});
