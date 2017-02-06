var http = require('http');
var fs = require('fs')
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config')
//express+webpack
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
//bodyparse
var bodyParser = require('body-parser')
var app = express();

//post中间件解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//静态资源
app.use(express.static('static'))
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})
//读取数据
app.get('/api', function (req, res) {
    fs.readFile('serverData.json', function (err, data) {
        if (err) console.log(err);
        res.json(JSON.parse(data));
        console.log("获取成功")
    })
})
//添加数据
app.post('/api', function (req, res) {
    fs.readFile('serverData.json', function (err, data) {
        if (err) console.log(err)
        //获取原始数据
        var oldData = JSON.parse(data);
        // console.log(req.body)
        newDate = {
            name: req.body.name,
            password: req.body.password,
            sex: req.body.sex,
            index: req.body.index
        }
        oldData.push(newDate);
        //将新数据写入文件
        fs.writeFile('serverData.json', JSON.stringify(oldData), function (err) {
            if (err) console.log(err);
            else console.log("写入成功")
            res.end();
        })
    })
})
//删除数据
app.post('/deleteApi', function (req, res) {
    fs.readFile('serverData.json', function (err, data) {
        if (err) console.log(err);
        var newData = JSON.parse(data).splice(req.body.index, req.body.index + 1);
        fs.writeFile('serverData.json', JSON.stringify(newData), function (err) {
            if (err) console.log(err);
            else console.log('删除成功');
            res.end();
        })
    })
})
//编辑数据
app.post('/editApi', function (req, res) {
    fs.readFile('serverData.json', function (err, data) {
        var oldData = JSON.parse(data), index = req.body.index;
        var newData = {
            name: req.body.name,
            password: req.body.password,
            sex: req.body.sex,
            index: req.body.index
        }
        fs.writeFile('serverData.json', JSON.stringify(oldData), function (err) {
            if (err) console.log(err);
            else console.log('编辑成功')
            res.end();
        })
    })
})
//express + webpack
var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler));
app.listen(1616)

