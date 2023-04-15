const express = require('express')
const authorizedAdmin = require('@middleware/authorization.middleware')
const router = express.Router()
const multer = require('multer');
const { wrapperAsyncHandler } = require('@helpers/handler.helper');
const PartnerController = require('@controllers/partner.controller');

router.use('/partner-study', authorizedAdmin)

router.post(
    '/partner-study',
    multer().single('file'),
    wrapperAsyncHandler(PartnerController.addStudyPartner)
)

// router.put(
//     '/partner-study',
//     async ({ body }, response) => {
//         await studyPartnerService.updateStudyPartner(body)
//         response.send(200)
//     }
// )

// router.delete(
//     '/partner-study',
//     async ({ body }, response) => {
//         await studyPartnerService.deleteStudyPartner(body)
//         response.sendStatus(200)
//     }
// )

// router.get(
//     '/partner-study',
//     async (_, response) => {
//         const consultancies = await studyPartnerService.getAllStudyPartner()
//         response.send(consultancies)
//     }
// )


module.exports = router