const express = require('express')
const authorizedAdmin = require('@middleware/authorization.middleware')
const consultancyService = require('../services/consultancy.service')
const router = express.Router()

router.post(
    '/consultancy',
    async ({body}, response) => {
        const consultancy = consultancyService.findOrCreateConsultancy(body)
        response.send(consultancy)
    }
)

router.get(
    '/consultancy',
    authorizedAdmin,
    async (_, response) => {
        const consultancies = await consultancyService.getALlConsultancy()
        response.send(consultancies)
    }
)

router.put(
    '/consultancy',
    authorizedAdmin,
    async ({body}, response) => {
        const consultancy = await consultancyService.findByIdAndUpdate(body)
        response.send(consultancy)
    }
)

module.exports = router