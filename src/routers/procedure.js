const express = require('express')
const authenticated = require('@middleware/authentication.middleware')
const router = express.Router()
const { wrapperAsyncHandler } = require('@helpers/handler.helper')
const ProcedureController = require('@controllers/procedure.controller')


router.use('/procedure', authenticated)

router.get(
    '/procedure',
    wrapperAsyncHandler(ProcedureController.getProcedureByAccountId)
)

router.post(
    '/procedure/create',
    wrapperAsyncHandler(ProcedureController.createProcedure)
)

module.exports = router