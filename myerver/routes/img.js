var express = require('express');
var router = express.Router();
var imgdata = require('../model/imgs')
var imggirldata = require('../model/imgsgirl')

//添加图片
router.post('/imgs', (req, res) => {
    imggirldata.create({
        imgs: req.body
    }).then(data => {
        res.json({
            code: 200,
            msg: '添加图片入库成功',

        })
    })
})
//获取所有的图片
router.get('/imgs', (req, res) => {
    if (req.query) {
        let pn = req.query.pn
        imggirldata.find().limit(5).skip((pn - 1) * 5).then(data => {
            res.json({
                code: 200,
                msg: '查询成功',
                data,
                count: 200
            })
        })
    } else {
        imggirldata.find().limit(50).then(data => {
            res.json({
                code: 200,
                msg: '查询成功',
                data,
                count: 200
            })
        })

    }

})







module.exports = router;