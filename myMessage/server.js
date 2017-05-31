var text = require('./db/db'),
    path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    webpack = require('webpack'),
    config = require('./webpack.config'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware');
var app = express();
//post解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//静态文件目录
app.use(express.static('src/static'))
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
})
//查询数据
app.get('/getapi', function (req, res) {
    text.find(function (err, doc) {
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
    var addText = new text(req.body)
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
    text.remove(req.body, function (err) {
            if(err)
                console.log("error" + err)
            else{
                console.log("删除成功！")
                res.end();
            }
    })
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
