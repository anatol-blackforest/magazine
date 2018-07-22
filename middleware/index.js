//сводим промежуточные обработчики
const connection = require('./connection')
const passport = require('./passport')
const upload = require('./upload')

module.exports = {connection, passport, upload}
