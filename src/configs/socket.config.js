const socketIo = require('socket.io');
const http = require('http')

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

module.exports = SocketServer