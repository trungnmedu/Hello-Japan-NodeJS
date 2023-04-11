const express = require('express')
const router = express.Router()

router.use('/api', require('@routers/auth'))
router.use('/api', require('@routers/consultancy'))
router.use('/api', require('@routers/partner'))

module.exports = router