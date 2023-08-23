const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();

app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST']
    }
});

io.on("connection", (socket) => {
    socket.on("send_message", (data) => {
        console.log(data);
    });
})

server.listen(3001, () => console.log('server is runned on port 3001'));