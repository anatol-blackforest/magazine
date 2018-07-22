const express = require('express')
const passport = require('passport')
const controller = require('../controllers/analytics')
const router = express.Router()

router.all(passport.authenticate('jwt', {session: false}))
router.get('/overview', controller.overview)
router.get('/analytics', controller.analytics)

module.exports = router
