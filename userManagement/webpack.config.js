var webpack = require('webpack');
// var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    entry: [
        'webpack-hot-middleware/client?http://127.0.0.1:1616',
        './App.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'app.js'
    },
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
        // new OpenBrowserPlugin({url: 'http://localhost:3000'}),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
};
