const express = require('express')
const passport = require('passport')
const {order} = require('../controllers/')
const router = express.Router()

router.get('/', order.getAll)
router.post('/', order.create)

module.exports = router
