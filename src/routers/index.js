const express = require('express')
const router = express.Router()

router.use('/api', require('./auth'))
router.use('/api', require('./consultancy'))
router.use('/api', require('./partner'))

module.exports = router