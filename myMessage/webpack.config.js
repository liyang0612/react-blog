var webpack =require('webpack')
var config = {
    entry: [
        'webpack-hot-middleware/client?http://127.0.0.1:7777',
        './main.js'
    ],

    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 7777
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