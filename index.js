const express = require("express")
const socket = require('socket.io')

const app = express()

const server = app.listen(3000, () => {
    console.log("Listening to requests on ports 3000")
})

// 👇 Static files
app.use(express.static('public'))

// 📍 Socket setup
const io = socket(server)
io.on('connection', function(socket) {
    console.log("Made socket connection.", socket.id)

    socket.on("chat", (data) => { // 👈 Listening to all my sockets for 'chat' message
        io.sockets.emit("chat", data) // 👈 Send back data to all sockets
    })
})