const express = require('express')
const GoogleAuth = require('../helpers/oauth.helper')
const authenticated = require('@middleware/authentication.middleware')
const AccountService = require('../services/account.service')
const router = express.Router()
const { decodedToken, generateToken } = require('../utils/jwt.util')

router.post(
    '/google-auth',
    async ({ body }, response) => {
        const { code } = body
        const token = await GoogleAuth.exchangeTokenByCode(code)
        const { name, picture, email } = decodedToken(token)
        const account = await AccountService.findOrCreateAccount({ email, avatar: picture, name })
        const accessToken = generateToken(
            {
                sub: account.id,
                role: account.role
            }
        )
        const data = {
            account: {
                id: account.id,
                name: account.name,
                avatar: account.avatar,
                role: account.role,
                email: account.email,
                phone: account.phone
            },
            accessToken
        }
        response.send(data)
    }
)

router.get(
    '/me',
    authenticated,
    async ({ sub }, response) => {
        const account = await AccountService.findOrCreateAccount({ id: sub })
        response.send(
            {
                id: account.id,
                name: account.name,
                avatar: account.avatar,
                role: account.role,
                email: account.email,
                phone: account.phone
            }
        )
    }
)

module.exports = router