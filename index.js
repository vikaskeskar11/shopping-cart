var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var winstonLogger = require('./logger/logger')
var expressWinston = require('express-winston')
var routes = require('./routes')
var cors = require('cors')
// Connect to database
require('./db-connections/connection')
var app = express()
app.set('view engine', 'jade')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

global.isDevEnv = app.get('env') === 'development'
if (global.isDevEnv) {
  app.use(logger('dev'))
}
app.use(cors({ origin: '*' }))
// express-winston logger makes sense BEFORE the router
app.use(expressWinston.logger({
  level: 'info',
  statusLevels: false,
  winstonInstance: winstonLogger
}))
/* Load http routes defined routes/routes.js */
routes.httpsRoutes().forEach((item) => {
  app.use(item.path, item.route)
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).send('Not Found')
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send()
})

module.exports = app
