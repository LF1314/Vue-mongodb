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
//删除学生信息
router.delete('/delstudent/:id', (req, res) => {
    let _id = req.params.id
    studentdata.remove({
        _id: _id
    }).then(sta => {
        res.json({
            code: 200,
            msg: '成功删除学生信息！'
        })
    }).catch(err => {
        res.josn({
            code: 401,
            err
        })
    })

})
//根据id获取单个学生信息
router.get('/student/:id', (req, res) => {
    studentdata.findOne({
        _id: req.params.id
    }).then(data => {
        res.json({
            code: 200,
            data
        })
    }).catch(err => {
        res.json({
            code: 401,
            err
        })
    })
})

//更新学生信息
router.put('/changestudent/:id', (req, res) => {
    studentdata.remove({
        _id: req.params.id
    }).then(des => {
        studentdata.create(req.body).then(data => {
            res.json({
                code: 200,
                msg: '更新成功！',
                data
            })
        })
    }).catch(err => {
        res.json({
            code: 401,
            msg: '更新失败!'
        })
    })
})

module.exports = router