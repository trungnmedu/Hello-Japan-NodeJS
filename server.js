require('dotenv').config()
require('module-alias/register')
const server = require('@src/app')

const socket = require("@configs/socket.config")

const {APP_PORT, SOCKET_PORT} = require('@configs/app.config')

server.listen(
    APP_PORT,
    () => {
        console.log(`Server start at: ${APP_PORT}`)
    }
)

socket.listen(
    SOCKET_PORT,
    () => {
        console.log(`Socket server start at: ${SOCKET_PORT}`)
    }
)