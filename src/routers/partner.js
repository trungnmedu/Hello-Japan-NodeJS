const express = require('express')
const multer = require('multer')
const router = express.Router()
const { wrapperAsyncHandler } = require('@helpers/handler.helper')
const PartnerController = require('@controllers/partner.controller')
const authorizedAdmin = require('@middleware/authorization.middleware')

router.get(
    '/partner',
    wrapperAsyncHandler(PartnerController.getAllPartner)
)

router.use('/partner', authorizedAdmin)

router.post(
    '/partner',
    multer().single('file'),
    wrapperAsyncHandler(PartnerController.addStudyPartner)
)

router.delete(
    '/partner',
    wrapperAsyncHandler(PartnerController.removeStudyPartner)
)

module.exports = router