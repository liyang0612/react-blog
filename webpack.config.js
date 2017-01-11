var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var webpack = require('webpack')
var path = require('path')
var config = {
    entry: [
        'webpack-hot-middleware/client?http://127.0.0.1:8080',
        'webpack/hot/dev-server',
        './App.js'
    ],
    output: {
        path: '/',
        publicPath: 'http://localhost:8080/',
        filename: 'app.js'
    },
    // devServer: {
    //     inline: true,
    //     port: 9090
    // },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    plugins: [
        new OpenBrowserPlugin({url: 'http://localhost:8080'}),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}
module.exports = config