const ChatService = require("@services/chat.service")
const ConversationService = require("@services/conversation.service")
const { verifyToken } = require("@utils/jwt.util")
const SocketEvent = require("./socket.event")

class IOEvent {

    static async onConnection(socket) {
        const { id, userId } = socket

        socket.on('chat', (data) => SocketEvent.onChat(socket, data))


        await ChatService.saveClient(userId, id)
    }

    static async onDisconnect(socket) {
        console.log("disconnect")
    }

    static async authenticated(socket, next) {
        const { handshake: { auth } } = socket

        try {
            const { token } = auth

            if (token) {
                const { sub, role } = verifyToken(token)
                socket.credential = {
                    sub,
                    role
                }
                socket.userId = sub
            } else {
                socket.credential = false
                socket.userId = Date.now().toString()
            }
            next()
        } catch {
            next(new Error('Authentication failed'))
        }
    }
}
module.exports = IOEvent