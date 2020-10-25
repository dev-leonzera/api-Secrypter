const crypto = require('crypto')
const { randomString } = require('./utils')

module.exports = {
    create(value, type){
        var passwd = randomString(value, type)
        return passwd
    }
}