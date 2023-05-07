const express = require('express')
const router = express.Router()

router.use('/api', require('@routers/access'))
router.use('/api', require('@routers/consultancy'))
router.use('/api', require('@routers/partner'))
router.use('/api', require('@routers/conversation'))

module.exports = router