var mongoose = require('mongoose')

var imgmodel = new mongoose.Schema({
    imgs: 'object'
}, {
    versionKey: false
})

let imgdata = mongoose.model('img', imgmodel, 'img')

module.exports = imgdata