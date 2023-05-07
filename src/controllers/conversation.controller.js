const ConversationService = require("@services/conversation.service");

class ConversationController {
    static async getConversations(req, res) {
        (await ConversationService.getAllConversation(req.role, req.sub)).send(res)
    }
}

module.exports = ConversationController