const socketIo = require('socket.io');
const http = require('http')
const {verifyToken} = require("@utils/jwt.util");

const server = http.createServer()

const io = socketIo(
    server,
    {
        path: "/chat",
        cors: {
            origin: "*",
            methods: "*"
        }
    }
)

const onConnection = (socket) => {
    const {id, handshake: {auth},} = socket

    const {token} = auth
}

const onDisconnect = (socketId) => {
    console.log(socketId)
}

io.use(
    (socket, next) => {
        const {id, handshake: {auth}} = socket
        const {token} = auth

        try {
            verifyToken(token)
            return next()
        } catch {
            return next(new Error('Authentication failed'))
        }
    }
)

io.on(
    'connection',
    (socket) => {
        onConnection(socket)

        socket.on(
            'disconnect',
            () => onDisconnect(socket.id)
        )
    }
)


module.exports = server
