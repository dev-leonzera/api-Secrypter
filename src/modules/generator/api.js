const express = require('express')
const controller = require('./controller')
//
const routes = express.Router()
//
routes.post('/', controller.generatePassword)
//
routes.post('/reminder', controller.createReminder)
//
routes.get('/reminder', controller.listReminder)
//
routes.get('/reminder/{id}', controller.viewReminder)
module.exports = routes