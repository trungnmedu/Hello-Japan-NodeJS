const socketIo = require('socket.io');
const http = require('http');
const IOEvent = require('@events/io.event');
const SocketEvent = require('@events/socket.event');

class SocketServer {
    static server = http.createServer()
    static io = socketIo(
        SocketServer.server,
        {
            path: "/chat",
            cors: {
                origin: "*",
                methods: "*"
            },
            pingInterval: 2500,
            pingTimeout: 2500
        }
    )
}

SocketServer.io.use(IOEvent.authenticated)
SocketServer.io.on('connection', SocketEvent.registerSocketEvent)

module.exports = SocketServer