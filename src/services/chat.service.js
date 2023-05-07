const RedisDatabase = require('@databases/redis.database')

class ChatService {
    static async saveClient(userId, socketId) {
        await (await RedisDatabase.getInstance()).lPush(userId, socketId)
    }
}

module.exports = ChatService
