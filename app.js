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

// открытый роут авторизации
app.use('/api/auth', authRoutes)

//защищаем все роуты, кроме авторизации
app.use(passport.authenticate('jwt', {session: false}))
app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)

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
