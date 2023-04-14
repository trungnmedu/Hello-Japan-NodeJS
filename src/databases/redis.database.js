const { host, port } = require('@configs/redis.config')
const redisDatabase = require('redis')

const client = redisDatabase.createClient({ host, port })

client.on(
    'connect',
    () => {
        console.log('Redis client connected!')
    }
)

client.on(
    'error',
    (error) => {
        console.log(error)
    }
)

client.connect()

module.exports = client