const ConversationService = require("@services/conversation.service")

class SocketEvent {
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
}

module.exports = SocketEvent