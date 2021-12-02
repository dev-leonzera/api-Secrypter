const express = require('express')
const cors = require('cors')

const app = express()
const routes = require('./routes')
require('dotenv').config()

const PORT = process.env.PORT || 4000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes)

const run = () => {
    app.listen(PORT, () => {
        console.log('Conectado')
    })
}

module.exports = run