const RedisDatabase = require('@databases/redis.database')

class ChatService {
    static async saveClient(userId, socketId) {
        const redisInstance = await RedisDatabase.getInstance()
        await redisInstance.lPush(userId, socketId)
        await redisInstance.expire(userId, 24 * 60 * 60)
    }

    static async removeClient(userId, socketId) {
        await (await RedisDatabase.getInstance()).lRem(userId, 1, socketId)
    }
}

module.exports = ChatService
