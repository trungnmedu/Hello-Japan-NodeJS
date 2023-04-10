const socketIo = require('socket.io');
const http = require('http')

const configureSocket = (app) => {
    const server = http.Server(app)
    const io = socketIo(
        server,
        {
            cors: {
                origin: "*",
                methods: ["GET", "POST"]
            }
        }
    )

    io.on(
        'connection',
        (socket) => {

            socket.emit("userId", socket.id)
            console.log(socket.id);

            socket.on(
                'message',
                (msg) => {
                    console.log('message: ' + msg)
                    io.emit('chat message', msg)
                }
            )


            socket.on(
                'disconnect',
                () => {
                    console.log('user disconnected')
                }
            )
        }
    )

    return server
}

module.exports = configureSocket
