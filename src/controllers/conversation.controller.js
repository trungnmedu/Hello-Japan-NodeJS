const ConversationService = require("@services/conversation.service");

class ConversationController {
    static async getConversations(req, res) {
        const {clientId} = req.query

        if(clientId){
            (await ConversationService.getConversationByClientId(req.role, clientId)).send(res)
            return
        }

        (await ConversationService.getAllConversation(req.role, req.sub)).send(res)
    }

    static async getAdmin(req, res) {
        (await ConversationService.getAdmin()).send(res)
    }
}

module.exports = ConversationController