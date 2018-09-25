var mongoose = require('mongoose')

var student = new mongoose.Schema({
    学号: {
        type: 'number'
    },
    name: {
        type: 'string'
    },
    age: {
        type: 'number'
    },
    sex: {
        type: 'string'
    },
    学院: {
        type: 'string'
    },
    cursor: {
        type: 'object'
    }


}, {
    versionKey: false
})

let studendata = mongoose.model('students', student, 'students')

module.exports = studendata;