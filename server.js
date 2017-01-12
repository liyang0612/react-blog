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
app.get('/api', function (req, res) {
    fs.readFile('serverData.json', function (err, data) {
        if (err) console.log(err);
        res.json(JSON.parse(data));
        console.log("获取成功")
    })
})
app.post('/api', function (req, res) {
    fs.readFile('serverData.json', function (err, data) {
        var oldData = JSON.parse(data);
        console.log(req.body.name, "请求主体")
        res.json(JSON.parse(data));
        // var newData = {
        //     name: req.body.name,
        // }
        // oldData.push(newData)
        // fs.write('serverData.json',JSON.stringify(oldData),function (err) {
        //     if(err) console.log(err);
        //     else console.log("写入成功")
        // })
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

