var express = require('express');
var router = express.Router();
var admindata = require('../model/model')

//管理员登陆控制
router.get('/login', (req, res) => {
    let {
        username,
        password
    } = req.query;
    // console.log(username, password)
    admindata.find({
        username: username,
        password: password
    }).then(mess => {
        if (mess.length) {
            res.json({
                code: 200,
                msg: '登陆成功！',
                mess
            })
        } else {
            res.json({
                code: 401,
                msg: '用户名密码错误'
            })
        }
    })
})
//获取管理员列表

router.get('/admins', (req, res) => {
    admindata.find().then(adminarr => {
        res.json({
            code: 200,
            adminarr
        })
    })
})
//添加管理员
router.post('/addadmin', (req, res) => {
    const {
        id,
        username,
        password,
        desc,
        img
    } = req.body
    admindata.create({
        id: id,
        username: username,
        password: password,
        img: img,
        desc: desc
    }).then(data => {
        res.json({
            code: 200,
            msg: '添加管理员成功！'
        }).catch(err => {
            res.json({
                code: 401,
                msg: '添加失败'
            })
        })
    })
})
//删除管理员
router.delete('/deladmin/:id', (req, res) => {
    let _id = req.params.id;
    admindata.remove({
        _id: _id
    }).then(des => {
        res.json({
            code: 200,
            msg: '删除成功！'
        })
    }).catch(err => {
        res.json({
            code: 401,
            err
        })
    })
})
module.exports = router