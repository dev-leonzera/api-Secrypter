const express = require('express')
const cors = require('cors')

const app = express()
const routes = require('./modules/generator/api')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/', routes)

module.exports = app