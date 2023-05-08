require('dotenv').config()
require('module-alias/register')
const app = require('@src/app')
const socket = require('@src/socket')

const { APP_PORT, SOCKET_PORT } = require('@configs/app.config')

app.listen(
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