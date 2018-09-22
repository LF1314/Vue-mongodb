var express = require('express');
var router = express.Router();
var studentdata = require('../model/studentmodel')

//获取全部学生信息
router.get('/', (req, res) => {
    studentdata.find().then(stus => {
        res.json({
            code: 200,
            stus
        })
    })
})
//添加学生信息
router.post('/addstudent', (req, res) => {
    studentdata.create(req.body).then(data => {
        res.json({
            code: 200,
            msg: '学生添加成功',
            data
        })
    }).catch(ree => {
        res.json({
            code: 401,
            msg: ree,

        })
    })
})


module.exports = router