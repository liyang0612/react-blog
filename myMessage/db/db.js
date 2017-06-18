var mongoose = require('mongoose');

//数据库连接
var db = mongoose.connect('mongodb://127.0.0.1:27017/message');
db.connection.on('open', function () {
    console.log("-----数据库连接成功！------");
})
//建立骨架模型
var Schema = mongoose.Schema;
var userText = new Schema({
    text: String,
    key: String
});
var articleSchema = new Schema({
    articleId: String,
    title: String,
    content: String,
    date: String
})
var userInfoSchema = new Schema({
	userName: String,
	password: String,
})

//留言数据模型entity
var text = mongoose.model('text', userText); //用户留言表
var article = mongoose.model('article', articleSchema); //文章管理表
var userInfo = mongoose.model('userInfo', userInfoSchema);


var dbObject = {
    "text": text,
    "article": article,
    "userInfo": userInfo
}

userInfo = new dbObject.userInfo({userName: "liyang", password: "123"});
dbObject.userInfo.find(function (err, doc) {
    if(err){
        console.log(err)
    }else{
        // console.log(doc.userName)
        if(!doc[0].userName){
            userInfo.save(function (sErr, sDoc) {
                if(sErr){
                    console.log(sErr)
                }else {
                    console.log(sDoc)
                }
            })
        }
    }
})

module.exports = dbObject;