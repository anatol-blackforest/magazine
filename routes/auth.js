const express = require('express')
const {auth} = require('../controllers/')
const router = express.Router()

// localhost:5000/api/auth/login
router.post('/login', auth.login)

// localhost:5000/api/auth/register
router.post('/register', auth.register)

module.exports = router
