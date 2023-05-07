const express = require('express')
const authenticated = require('@middleware/authentication.middleware')
const router = express.Router()
const { wrapperAsyncHandler } = require('@helpers/handler.helper')
const ConversationController = require('@controllers/conversation.controller')

router.use('/conversations', authenticated)
router.get(
    '/conversations',
    wrapperAsyncHandler(ConversationController.getConversations)
)

module.exports = router