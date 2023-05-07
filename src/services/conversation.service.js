const { HTTP_CODE, HTTP_REASON } = require("@constants/http.constant");
const SuccessResponse = require("@helpers/success.helper");
const Conversation = require("@models/conversation.model");
const AccountService = require("./account.service");

class ConversationService {
    static async saveClientMessage(conversation, message) {
        const { clientId } = conversation

        await Conversation.findOneAndUpdate(
            { clientId },
            {
                ...conversation,
                $push: {
                    messages: message
                }
            },
            {
                upsert: true
            }
        )
    }

    static async getAllConversation(role, accountId) {
        if (role === "ADMIN") {
            const conversations = await Conversation.find().lean()

            const payload = await Promise.all(
                conversations.map(
                    async (conversation) => {
                        const { clientId, type } = conversation
                        if (type === "GUEST") {
                            return conversation
                        }

                        const { name, avatar } = await AccountService.findAccount({ id: clientId })

                        return {
                            name,
                            avatar,
                            ...conversation
                        }
                    }
                )
            )

            return SuccessResponse.builder(HTTP_CODE.OK, HTTP_REASON.OK, payload)
        }


        const payload = await Conversation.find({ clientId: accountId }).lean()
        return SuccessResponse.builder(HTTP_CODE.OK, HTTP_REASON.OK, payload)
    }
}

module.exports = ConversationService