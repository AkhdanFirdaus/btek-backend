const profile = require('express').Router()
const upload = require('../middlewares/upload.middleware')

const profileController = require('../controllers/profile.controller')

profile.get('/', profileController.readProfileById)
profile.get('/:id', profileController.readProfileById)
profile.put('/', upload('picture'), profileController.updateProfile)

module.exports = profile
