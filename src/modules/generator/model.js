const {Model} = require('objection')

class Generator extends Model{
    static get tableName(){
        return 'generator'
    }
}

module.exports = Generator;