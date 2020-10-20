const crypto = require('crypto')

module.exports = {
    create(value){
        var passwd = crypto.randomBytes(value).toString('hex')
        return passwd
    }
}