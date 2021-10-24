const express = require('express')
const controller = require('./controller')
//
const routes = express.Router()
//
routes.get('/', (req, res) => {
    res.send('Welcome to Secrypters API')
})
routes.post('/generator', controller.create)
//
module.exports = routes