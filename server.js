require('dotenv').config()
require('module-alias/register')
const server = require('@src/app')

const { PORT } = require('@configs/app.config')

server.listen(
    PORT,
    () => {
        console.log(`Server start at: ${PORT}`);
    }
)
