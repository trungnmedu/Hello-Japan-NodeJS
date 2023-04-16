const express = require('express')
const multer = require('multer')
const router = express.Router()
const { wrapperAsyncHandler } = require('@helpers/handler.helper')
const PartnerController = require('@controllers/partner.controller')
const authorizedAdmin = require('@middleware/authorization.middleware')

router.get(
    '/partner-study',
    wrapperAsyncHandler(PartnerController.getAllStudyPartner)
)

router.use('/partner-study', authorizedAdmin)

router.post(
    '/partner-study',
    multer().single('file'),
    wrapperAsyncHandler(PartnerController.addStudyPartner)
)

router.delete(
    '/partner-study',
    wrapperAsyncHandler(PartnerController.removeStudyPartner)
)

module.exports = router