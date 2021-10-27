const service = require('./service')
//
module.exports = {
    generatePassword(req, res){
      var { size } = req.body
      var passwd = service.create(size)
      res.json({password: passwd})
    },

    createReminder(req, res){},
    listReminder(req, res){},
    viewReminder(req, res){}
}

