const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message.js');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');



    socket.on('createEmail', (newEmail) => {
        console.log('createEmail', newEmail)
    });

    socket.on('createMessage', (newMessage, callback) => {
        console.log('newMessage', newMessage);
        
        socket.emit('newMessage', generateMessage('Admin', 'Welcome to chat app'));
        socket.broadcast.emit('newMessage', generateMessage('Admin', 'User just joined.'));

        io.emit('newMessage', generateMessage(newMessage.from, newMessage.text));
        callback();
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});
