const express = require('express')
const GoogleAuth = require('../helpers/oauth.helper')
const authenticated = require('@middleware/authentication.middleware')
const AccountService = require('../services/account.service')
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