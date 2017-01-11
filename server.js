var express = require('express');
var fs = require('fs');
var webpack = require('webpack');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require('webpack-hot-middleware');
// var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config')
var app = express();

// app.use(express.static('./'));
// app.get('/cao', function (req, res) {
//     res.send('请求');
// })
// app.post('/api', function (req, res) {
//     console.log('请求成功')
//     fs.readFile('serverData.json', function (err, data) {
//         if (err) console.log(err);
//         res.json(JSON.parse(data));
//     })
// })
var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true
}))

app.use(webpackHotMiddleware(compiler));
app.listen(8080)
// new webpackDevServer(webpack(config), {
//     publicPath: config.output.publicPath, //需要在这里重新配置，不然无效
//     noInfo: true
// }).listen(9090);
// app.listen(9090);