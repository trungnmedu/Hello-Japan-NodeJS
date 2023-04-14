const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const configureSocket = require('@configs/socket.config')
const cors = require('cors')
const bodyParser = require('body-parser')
const { defaultNotfound, errorHandler } = require('@helpers/handler.helper')

require('@databases/mongo')
// require('@databases/redis')

const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(compression())
app.use(require('@routers/index'))
app.use(defaultNotfound)
app.use(errorHandler)

const server = configureSocket(app)

module.exports = server