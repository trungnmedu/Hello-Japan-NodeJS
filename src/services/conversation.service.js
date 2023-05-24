const {HTTP_CODE, HTTP_REASON} = require("@constants/http.constant");
const SuccessResponse = require("@helpers/success.helper");
const Conversation = require("@models/conversation.model");
const AccountService = require("@services/account.service");
const RedisDatabase = require("@databases/redis.database")
const SocketServer = require('@configs/socket.config')
const ErrorResponse = require("@helpers/error.helper")

class ConversationService {
    static async sendMessage(conversation, message) {
        const {clientId} = conversation
        const {receiver, sender} = message


        await Conversation.findOneAndUpdate(
            {clientId},
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

        const clientSocketIds = await (await RedisDatabase.getInstance()).lRange(sender, 0, -1)
        clientSocketIds.forEach(id => SocketServer.io.to(id).emit("chat", {clientId, message}))

        const adminSocketIds = await (await RedisDatabase.getInstance()).lRange(receiver, 0, -1)
        adminSocketIds.forEach(id => SocketServer.io.to(id).emit("chat", {clientId, message}))
    }

    static async getConversationByClientId(role, clientId) {
        if (role !== "ADMIN") {
            throw ErrorResponse.builder(HTTP_CODE.FORBIDDEN, HTTP_REASON.FORBIDDEN)
        }

        const {messages, ...conversation} = await Conversation.findOne({clientId}).lean()

        let payload = {
            conversation,
            messages
        }

        const account = await AccountService.findAccount({id: clientId})
        if (account) {
            const {name, avatar} = account
            payload = {
                conversation: {
                    name,
                    avatar,
                    ...conversation
                },
                messages
            }
        }

        return SuccessResponse.builder(HTTP_CODE.OK, HTTP_REASON.OK, payload)
    }

    static async getAllConversation(role, accountId) {
        if (role === "ADMIN") {
            const conversations = await Conversation.find().lean()

            const payload = await Promise.all(
                conversations.map(
                    async (conversation) => {
                        const {clientId} = conversation

                        const account = await AccountService.findAccount({id: clientId})
                        if (account) {
                            const {name, avatar} = account
                            return {
                                name,
                                avatar,
                                ...conversation
                            }

                        }

                        return conversation
                    }
                )
            )

            return SuccessResponse.builder(HTTP_CODE.OK, HTTP_REASON.OK, payload)
        }

        const payload = await Conversation.findOne({clientId: accountId}).lean()
        return SuccessResponse.builder(HTTP_CODE.OK, HTTP_REASON.OK, payload)
    }

    static async getAdmin() {
        const admin = await AccountService.findOne({role: "ADMIN"})
        const payload = {
            id: admin.id,
            name: admin.name,
            avatar: admin.avatar
        }
        return SuccessResponse.builder(HTTP_CODE.OK, HTTP_REASON.OK, payload)
    }


}

module.exports = ConversationService