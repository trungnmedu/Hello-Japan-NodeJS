const ChatService = require("@services/chat.service");
const ConversationService = require("@services/conversation.service")

class SocketEvent {

    static async onConnect(socket) {
        const { id, userId } = socket
        await ChatService.saveClient(userId, id)
    }

    static async onDisconnect(socket) {
        const { id, userId } = socket
        await ChatService.removeClient(userId, id)
    }

    static async onChat(socket, data) {
        const { userId, credential } = socket

        const conversation = {
            clientId: userId,
            type: credential ? "PRIVATE" : "GUEST"
        }

        const { body } = JSON.parse(data)

        if (typeof credential === 'object' && credential?.role === "ADMIN") {
            return
        }


        const message = {
            sender: userId,
            body,
            status: "UNREAD"
        }
        await ConversationService.saveClientMessage(conversation, message)
    }

    static async registerSocketEvent(socket) {
        socket.on('chat', (data) => SocketEvent.onChat(socket, data))
        socket.on('disconnect', () => SocketEvent.onDisconnect(socket))
        await SocketEvent.onConnect(socket)
    }
}

module.exports = SocketEvent