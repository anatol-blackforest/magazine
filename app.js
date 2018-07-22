const express = require('express')
const passport = require('passport')
const path = require('path')
const bodyParser = require('body-parser')
const {authRoutes, analyticsRoutes, categoryRoutes, orderRoutes, positionRoutes} = require('./routes')
const {connection} = require('./middleware/')
const app = express()
const authenticate = passport.authenticate('jwt', {session: false})

app.use(async(req, res, next) => await connection(req, next))
app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/auth', authRoutes)
app.use('/api/analytics',authenticate, analyticsRoutes)
app.use('/api/category', authenticate, categoryRoutes)
app.use('/api/order', authenticate, orderRoutes)
app.use('/api/position', authenticate, positionRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/dist/client'))
  app.get('*', (req, res) => res.sendFile(path.resolve( __dirname, 'client', 'dist', 'client', 'index.html')))
}

module.exports = app
