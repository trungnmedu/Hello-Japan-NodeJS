const express = require('express')
const authorizedAdmin = require('@middleware/authorization.middleware')
const { studyPartnerService } = require('../services/partner.service')
const router = express.Router()

router.post(
    '/partner-study',
    authorizedAdmin,
    async ({ body }, response) => {
        const partner = await studyPartnerService.addStudyPartner(body)
        response.send(partner)
    }
)

router.put(
    '/partner-study',
    authorizedAdmin,
    async ({ body }, response) => {
        await studyPartnerService.updateStudyPartner(body)
        response.send(200)
    }
)

router.delete(
    '/partner-study',
    authorizedAdmin,
    async ({ body }, response) => {
        await studyPartnerService.deleteStudyPartner(body)
        response.sendStatus(200)
    }
)

router.get(
    '/partner-study',
    async (_, response) => {
        const consultancies = await studyPartnerService.getAllStudyPartner()
        response.send(consultancies)
    }
)


module.exports = router