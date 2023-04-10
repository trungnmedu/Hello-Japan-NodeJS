const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const configureSocket = require('@configs/socket.config')
const cors = require('cors')
const bodyParser = require('body-parser')

require('@databases/mongo')
// require('../src/databases/redis')

const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(compression())
app.use(require('./routers/index'))

const server = configureSocket(app)

module.exports = server