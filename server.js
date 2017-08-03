var path = require('path'),
    express = require('express'),
    webpack = require('webpack'),
    config = require('./webpack.config'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware');

var app = require('./db/api');
//静态文件目录
app.use(express.static('src/static'))
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
})

//webpack加载
var compiler = webpack(config);
config.entry.unshift("webpack-hot-middleware/client?reload=true?http://127.0.0.1:7777/");
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))
app.listen(7777);
