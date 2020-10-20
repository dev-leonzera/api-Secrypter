const { create } = require('./service')
const service = require('./service')
//
module.exports = {
    create(req, res){
      var { size } = req.body
      var passwd = service.create(size)
      res.send(passwd)
    }
}

