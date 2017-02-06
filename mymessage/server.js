var mongoose = require('mongoose'),
    express = require('express'),
    webpack = require('webpack'),
    config = require('./webpack.config'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware');
var app = express();
//数据库连接
var db = mongoose.connect('mongodb://127.0.0.1:27017/message');
db.connection.on('open', function () {
    console.log("-----数据库连接成功！------")
})
var Schema = mongoose.Schema;
var userText = new Schema({
    text: String,
    key: String
})
var text = mongoose.model('text', userText);
//静态文件目录
app.use(express.static('static'))
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/' + 'index.html')
})
app.get('/api', function (req, res) {
    text.find(function (err,doc) {
        res.json(doc);
        console.log("json响应成功")
    })
})

//webpack加载
var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))
app.listen(7777)
