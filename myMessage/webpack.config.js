var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
    entry: [
        './main.js'
    ],

    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'index.js',
    },

    devServer: {
        hot: true,
        inline: true
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader']
                })
            },]

    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        // new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin('./static/base.css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true | 'head' | 'body' | false
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]

}

module.exports = config;