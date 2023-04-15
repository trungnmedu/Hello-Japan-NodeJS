const express = require('express')
const authorizedAdmin = require('@middleware/authorization.middleware')
const { wrapperAsyncHandler } = require('@helpers/handler.helper')
const ConsultancyController = require('@controllers/consultancy.controller')
const router = express.Router()

router.post(
    '/consultancy',
    wrapperAsyncHandler(ConsultancyController.registerConsultancy)
)

router.use('/consultancy', authorizedAdmin)

router.get(
    '/consultancy',
    wrapperAsyncHandler(ConsultancyController.getAllConsultancy)
)


router.put(
    '/consultancy',
    wrapperAsyncHandler(ConsultancyController.updateConsultancy)
)

module.exports = router