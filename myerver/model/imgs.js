var mongoose = require('mongoose')

var imgmodel = new mongoose.Schema({
    imgs: 'object'
})

let imgdata = mongoose.model('img', imgmodel, 'img')

module.exports = imgdata