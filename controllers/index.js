//сводим контроллеры
const analytics = require('./analytics')
const category = require('./category')
const auth = require('./auth')
const order = require('./order')
const position = require('./position')

module.exporta = {analytics, auth, category, order, position}
