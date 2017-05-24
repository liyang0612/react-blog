var webpack =require('webpack')
var config = {
    entry: [
        './main.js'
    ],

    output: {
        path: __dirname + '/',
        publicPath: '/',
        filename: 'index.js',
    },

    devServer: {

    },

    module: {
        loaders: [ {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]

}

module.exports = config;