const routes = require('express').Router()

routes.use('/users', require('./users.route'))
routes.use('/auth', require('./auth.route'))
routes.use('/profile', require('./profile.route'))

module.exports = routes
