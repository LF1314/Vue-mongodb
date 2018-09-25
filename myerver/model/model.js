var mongoose = require('mongoose')

var adminmodel = new mongoose.Schema({
    id: {
        type: 'number'
    },
    username: {
        type: 'string'
    },
    password: {
        type: 'string'
    },
    img: {
        type: 'string'
    },
    desc: {
        type: 'string'
    }
}, {
    versionKey: false
})

let admindata = mongoose.model('admin', adminmodel, 'admin')

module.exports = admindata