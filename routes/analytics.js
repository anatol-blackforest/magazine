const express = require('express')
const passport = require('passport')
const {analytics} = require('../controllers')
const router = express.Router()

router.get('/overview', analytics.overview)
router.get('/analytics', analytics.analytics)

module.exports = router
