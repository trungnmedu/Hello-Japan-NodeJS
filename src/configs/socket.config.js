const socketIo = require('socket.io');
const http = require('http');
const IOEvent = require('@events/io.event');

class SocketServer {
    static server = http.createServer()
    static io = socketIo(
        SocketServer.server,
        {
            path: "/chat",
            cors: {
                origin: "*",
                methods: "*"
            }
        }
    )
}

SocketServer.io.use(IOEvent.authenticated)
SocketServer.io.on('connection', IOEvent.onConnection)
SocketServer.io.on('disconnect', IOEvent.onDisconnect)

module.exports = SocketServer