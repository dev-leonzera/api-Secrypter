const express = require('express')
const routes = require('../modules/generator/api')
//
const mainRoutes = express.Router()
//
mainRoutes.get('/', (req, res) => {
    res.send('Welcome to Secrypters API')
})

mainRoutes.use('/generator', routes)

module.exports = mainRoutes