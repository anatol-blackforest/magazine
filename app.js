const express = require('express')
const passport = require('passport')
const path = require('path')
const bodyParser = require('body-parser')
const connection = require('./middleware/connection')
const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')
const app = express()

app.use(async(req, res, next) => await connection(req, next))
app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/auth', authRoutes)
app.use('/api/analytics', passport.authenticate('jwt', {session: false}), analyticsRoutes)
app.use('/api/category', passport.authenticate('jwt', {session: false}), categoryRoutes)
app.use('/api/order', passport.authenticate('jwt', {session: false}), orderRoutes)
app.use('/api/position', passport.authenticate('jwt', {session: false}), positionRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/dist/client'))

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(
        __dirname, 'client', 'dist', 'client', 'index.html'
      )
    )
  })
}

module.exports = app
