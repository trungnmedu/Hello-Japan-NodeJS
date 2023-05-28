const mongoose = require('mongoose')
const { url, name, username, password } = require('@configs/mongo.config')

class Database {

    constructor() {
        this._connect()
    }
    _connect() {
        let connectionString = `mongodb://${url}/${name}`

        if (username.length && password.length) {
            connectionString = `mongodb://${username}:${password}@${url}/${name}`
        }
        // mongoose.set('debug', 1)
        // mongoose.set('debug', { color: true })

        console.log(connectionString);
        mongoose.connect(
            connectionString,
            {
                maxPoolSize: 50,

            }
        ).then(
            (_) => console.log('Establish connection success!')
        ).catch(
            (error) => console.log(error)
        )
    }
}

module.exports = new Database()