const express = require('express')
const passport = require('passport')
const {upload} = require('../middleware')
const {category} = require('../controllers')
const router = express.Router()

router.get('/', category.getAll)
router.get('/:id', category.getById)
router.delete('/:id', category.remove)
router.post('/', upload.single('image'), category.create)
router.patch('/:id', upload.single('image'), category.update)

module.exports = router
