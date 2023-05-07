const express = require('express')
const authenticated = require('@middleware/authentication.middleware')
const router = express.Router()
const { wrapperAsyncHandler } = require('@helpers/handler.helper')
const AccessController = require('@controllers/access.controller')

router.post(
    '/google-auth',
    wrapperAsyncHandler(AccessController.googleAuthenticated)
)

router.use('/me', authenticated)
router.get(
    '/me',
    wrapperAsyncHandler(AccessController.getProfile)
)

module.exports = router