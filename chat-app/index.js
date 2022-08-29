const express = require('express')

const app = express();
const http = require('http')
const server = http.createServer(app)
const {Server} = require('socket.io')

const io = new Server(server)
app.get('/'  , (req,res) =>{
    res.sendFile(__dirname+ '/chat.html')
})
// khi co nguoi dung ket noi vao 
io.on('connection' , (socket) =>{
    socket.on('on-chat' , data =>{
        io.emit('user-chat' , data)
    })


})
server.listen(3000 , ()=>{
    console.log('listen port 3000');
})