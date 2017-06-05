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
            console.log("添加成功" + doc)
        res.end()
    })
})
//删除数据
app.post('/deleteapi', function (req, res) {
    dbObject.text.remove(req.body, function (err) {
        if(err)
            console.log("error" + err)
        else{
            console.log("删除成功！")
            res.end();
        }
    })
})

app.post('/addArticle', function (req, res) {
    var addArticle = new dbObject.article(req.body);
    addArticle.save(function (err, doc) {
        if(err){
            console.log(err)
        }else {
            // console.log("文章发表成功" + doc);
            res.json(doc)
        }
        res.end();
    })
})
app.get('/getArticle', function (req, res) {
    dbObject.article.find(function (err, doc) {
        if(err){
            console.log(err)
        }else{
            res.json(doc)
            console.log("文章列表获取成功")
        }
    })
})

module.exports = app;