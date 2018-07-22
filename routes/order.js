const express = require('express')
const passport = require('passport')
const controller = require('../controllers/order')
const router = express.Router()

router.all(passport.authenticate('jwt', {session: false}))
router.get('/', controller.getAll)
router.post('/', controller.create)

module.exports = router
