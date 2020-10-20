const express = require('express')
const controller = require('./controller')
//
const routes = express.Router()
//
routes.post('/generator', controller.create)
//
module.exports = routes