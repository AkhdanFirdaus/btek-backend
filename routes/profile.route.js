const profile = require('express').Router()

const profileController = require('../controllers/profile.controller')

profile.get('/', profileController.readProfileById)
profile.get('/:id', profileController.readProfileById)
profile.put('/', profileController.updateProfile)

module.exports = profile
