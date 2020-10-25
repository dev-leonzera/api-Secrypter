const { create } = require('./service')
const service = require('./service')
//
module.exports = {
    create(req, res){
      var { size, type } = req.body
      var passwd = service.create(size, type)
      res.json({password: passwd})
    }
}

