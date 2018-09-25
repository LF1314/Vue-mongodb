var mongoose = require('mongoose')

var imggirlmodel = new mongoose.Schema({
    imgs: 'object'
})

let imggirldata = mongoose.model('imggirl', imggirlmodel, 'imggirl')

module.exports = imggirldata