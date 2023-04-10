require('dotenv').config()
require('module-alias/register')
const server = require('@src/app')

const { port } = require('@src/configs/app.config')

server.listen(
    port,
    () => {
        console.log(`Server start at: ${port}`);
    }
)
