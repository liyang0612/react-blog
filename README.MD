## React+Redux+React-router简单Demo
![](./static/GIF.gif)
***
安装依赖：

    npm install
运行：

    npm start

###所参考文档：
[React中文文档](http://reactjs.cn/react/docs/getting-started-zh-CN.html)

[Redux中文文档](http://cn.redux.js.org/index.html)

[React-router中文文档](http://react-guide.github.io/react-router-cn/)

[ES6入门教程](http://es6.ruanyifeng.com/)


###知识点总结：
####redux
*  render里面state不可直接修改，可以使用Object.assgin创建副本或者使用[...state]!
*  render拆分管理不同state (combineReducers)

####react+react-router
*  把store绑定到路由上 *(import { Provider } from 'react-redux')*
*  通过connect的mapStateToProps参数把redux的state绑定到props，然后在页面通过props得到数据
*  通过connect的mapDispatchToProps参数把action绑定到props，state改变时渲染页面
*(import { bindActionCreators }) from 'redux')*
* [connect参数详解](http://cn.redux.js.org/docs/react-redux/api.html)

###node中使用webpack
* 运行服务器环境的同时运行本地环境。
* [ webpack-dev-middleware](https://www.npmjs.com/package/webpack-dev-middleware) 和 [webpack-hot-middleware](https://www.npmjs.com/package/webpack-hot-middleware)
* [webpack-hot-middleware示例代码下载地址](https://github.com/glenjamin/webpack-hot-middleware/tree/master/example)
* open-browser-webpack-plugin插件的引入会导致，双服务器失败（暂未解决）
* post 提交时，需引入"body-parser"插件进行解析
