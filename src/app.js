const express = require('express')
const cors = require('cors')

const app = express()
const routes = require('./routes')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes)

const run = () => {
    app.listen(3333, () => {
        console.log('Conectado')
    })
}

module.exports = run