const ChatService = require("@services/chat.service")
const { verifyToken } = require("@utils/jwt.util")

class IOEvent {
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