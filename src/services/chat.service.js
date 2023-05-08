const RedisDatabase = require('@databases/redis.database')

class ChatService {
    static async saveClient(userId, socketId) {
        await (await RedisDatabase.getInstance()).lPush(userId, socketId)
    }

    static async removeClient(userId, socketId) {
        await (await RedisDatabase.getInstance()).lRem(userId, 1, socketId)
    }
}

module.exports = ChatService
