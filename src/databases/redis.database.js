const { HOST, PORT } = require('@configs/redis.config')
const redisDatabase = require('redis')

class RedisDatabase {
    static instance = redisDatabase.createClient(
        {
            url: `redis://${HOST}:${PORT}`
        }
    )

    static async connect() {
        RedisDatabase.instance.on(
            'connect',
            () => {
                console.log('Redis client connected!')
            }
        )

        RedisDatabase.instance.on(
            'error',
            (error) => {
                console.log(error)
            }
        )

        await RedisDatabase.instance.connect()
    }
    static async getInstance() {
        if (!RedisDatabase.instance.isReady) {
            await RedisDatabase.connect()
        }

        return RedisDatabase.instance
    }
}

module.exports = RedisDatabase