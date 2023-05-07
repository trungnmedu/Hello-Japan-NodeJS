require('dotenv').config()
require('module-alias/register')
const server = require('@src/app')



const { APP_PORT, SOCKET_PORT } = require('@configs/app.config')
const SocketServer = require('@configs/socket.config')

server.listen(
    APP_PORT,
    () => {
        console.log(`Server start at: ${APP_PORT}`)
    }
)

SocketServer.server.listen(
    SOCKET_PORT,
    () => {
        console.log(`Socket server start at: ${SOCKET_PORT}`)
    }
)