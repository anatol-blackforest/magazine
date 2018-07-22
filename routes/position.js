const express = require('express')
const passport = require('passport')
const {position} = require('../controllers/')
const router = express.Router()

router.get('/:categoryId', position.getByCategoryId)
router.post('/', position.create)
router.patch('/:id', position.update)
router.delete('/:id', position.remove)

module.exports = router
