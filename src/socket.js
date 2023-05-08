const IOEvent = require("@events/io.event")
const SocketEvent = require("@events/socket.event")
const SocketServer = require('@configs/socket.config')

SocketServer.io.use(IOEvent.authenticated)
SocketServer.io.on('connection', SocketEvent.registerSocketEvent)

module.exports = SocketServer.server