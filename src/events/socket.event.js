const ChatService = require("@services/chat.service");
const ConversationService = require("@services/conversation.service")

class SocketEvent {

    static async onConnect(socket) {
        const {id, userId} = socket
        await ChatService.saveClient(userId, id)
    }

    static async onDisconnect(socket) {
        const {id, userId} = socket
        await ChatService.removeClient(userId, id)
    }

    static async onChat(socket, message) {
        const {userId, credential} = socket
        const {receiver} = message

        let conversation = {
            clientId: userId,
        }

        if(credential && credential?.role === "ADMIN"){
            conversation = {
                clientId: receiver
            }
        }

        await ConversationService.sendMessage(
            conversation,
            {
                ...message,
                sender: userId
            }
        )
    }

    static async registerSocketEvent(socket) {
        socket.on('chat', (data) => SocketEvent.onChat(socket, data))
        socket.on('disconnect', () => SocketEvent.onDisconnect(socket))
        await SocketEvent.onConnect(socket)
    }
}

module.exports = SocketEvent