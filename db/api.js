var dbObject = require('./db'),
    express = require('express'),
    bodyParser = require('body-parser');
var app = express();
//post解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//查询数据
app.get('/getapi', function (req, res) {
    dbObject.text.find(function (err, doc) {
        if (err)
            console.log("error" + err)
        else {
            res.json(doc);
            console.log("json响应成功")
        }
    })
})
//增加数据
app.post('/addapi', function (req, res) {
    var addText = new dbObject.text(req.body)
    addText.save(function (err, doc) {
        if (err)
            console.log(err)
        else
            res.end()
    })
})
//删除数据
app.post('/deleteapi', function (req, res) {
    dbObject.text.remove(req.body, function (err) {
        if(err)
            console.log("error" + err);
        else{
            res.end();
        }
    })
})

//博客文章模块
app.post('/addArticle', function (req, res) {
    req.body.articleId = Math.random().toString(36).substr(2);
    var addArticle = new dbObject.article(req.body);
    addArticle.save(function (err, doc) {
        if(err){
            console.log(err);
        }else {
            res.json(doc);
        }
        res.end();
    })
})
app.get('/getArticle', function (req, res) {
    dbObject.article.find(function (err, doc) {
        if(err){
            console.log(err)
        }else{
            res.json(doc);
        }
    })
})
app.post('/deleteArticle', function (req, res) {
    dbObject.article.remove(req.body, function (err, doc) {
        if(err){
            console.log(err);
        }else{
            res.json(doc)
            res.end();
        }
    })
})
app.post('/insertArticle', function(req, res) {
    dbObject.article.update({articleId: req.body.articleId}, { $set: req.body},{safe: true}, function(error) {
        if(error){
            console.log(error)
        }else{
            console.log("update success")
        }
        res.end()
    })
})

// 用户登录
app.post('/login', function(req, res) {
    dbObject.userInfo.find(function (err, doc) {
        if(err){
            console.log(err);
            res.json({"status": "-1", "msg": "服务器内部错误"})
        }else{
            if(req.body.userName == doc[0].userName && req.body.password == doc[0].password){
                res.json({"status": "1","token": "login_success"})
            }else{
                res.json({"status": "0", "msg": "用户名或者密码错误！"})
            }
        }
    })
})

module.exports = app;