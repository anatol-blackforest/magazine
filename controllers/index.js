//сводим контроллеры
const analytics = require('./analytics')
const category = require('./category')
const auth = require('./auth')
const order = require('./order')
const position = require('./position')

module.exports = {analytics, auth, category, order, position}
