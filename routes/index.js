//сводим роуты
const authRoutes = require('./auth')
const analyticsRoutes = require('./analytics')
const categoryRoutes = require('./category')
const orderRoutes = require('./order')
const positionRoutes = require('./position')

module.exporta = {authRoutes, analyticsRoutes, categoryRoutes, orderRoutes, positionRoutes}
