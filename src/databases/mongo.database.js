const mongoose = require('mongoose')
const {host, name, port} = require('@configs/mongo.config')

class Database {

    constructor() {
        this._connect()
    }

    _connect() {
        const connectionString = `mongodb://${host}:${port}/${name}`
        mongoose.set('debug', 1)
        mongoose.set('debug', {color: true})

        mongoose.connect(
            connectionString,
            {
                maxPoolSize: 50
            }
        ).then(
            (_) => console.log('Establish connection success!')
        ).catch(
            (error) => console.log(error)
        )
    }
}

module.exports = new Database()