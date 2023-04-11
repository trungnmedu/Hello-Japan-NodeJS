const { host, port } = require('@configs/redis.config')
const redis = require('redis')

const client = redis.createClient({ host, port })

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