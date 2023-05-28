const express = require('express')
const authenticated = require('@middleware/authentication.middleware')
const router = express.Router()
const { wrapperAsyncHandler } = require('@helpers/handler.helper')
const ProcedureController = require('@controllers/procedure.controller')
const authorizedAdmin = require('@middleware/authorization.middleware')


router.use('/procedure', authenticated)
router.use('/admin/procedure', authenticated)
router.use('/admin/procedure', authorizedAdmin)

router.get(
    '/procedure',
    wrapperAsyncHandler(ProcedureController.getProcedureByAccountId)
)

router.post(
    '/procedure',
    wrapperAsyncHandler(ProcedureController.createProcedure)
)

router.get(
    '/admin/procedure',
    wrapperAsyncHandler(ProcedureController.getAllProcedure)
)
router.put(
    '/admin/procedure',
    wrapperAsyncHandler(ProcedureController.updateProcedure)
)

module.exports = router